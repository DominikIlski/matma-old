import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  entry.count++;
  return entry.count > RATE_LIMIT_MAX;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length <= 254;
}

function isValidPhone(phone: string): boolean {
  if (!phone) return true;
  return /^[\d\s+\-()]{6,20}$/.test(phone);
}

const MAX_NAME_LENGTH = 100;
const MAX_MESSAGE_LENGTH = 5000;
const MAX_PHONE_LENGTH = 20;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const ip = (req.headers["x-forwarded-for"] as string)?.split(",")[0]?.trim() || req.socket.remoteAddress || "unknown";
  if (isRateLimited(ip)) {
    return res.status(429).json({ error: "Zbyt wiele wiadomości. Spróbuj ponownie za kilka minut." });
  }

  const { name, email, phone, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Brakuje wymaganych pól" });
  }

  if (typeof name !== "string" || typeof email !== "string" || typeof message !== "string") {
    return res.status(400).json({ error: "Nieprawidłowy format danych" });
  }

  if (name.length > MAX_NAME_LENGTH) {
    return res.status(400).json({ error: `Imię nie może przekraczać ${MAX_NAME_LENGTH} znaków` });
  }

  if (!isValidEmail(email)) {
    return res.status(400).json({ error: "Nieprawidłowy adres email" });
  }

  if (message.length > MAX_MESSAGE_LENGTH) {
    return res.status(400).json({ error: `Wiadomość nie może przekraczać ${MAX_MESSAGE_LENGTH} znaków` });
  }

  const phoneStr = phone ? String(phone) : "";
  if (phoneStr && (!isValidPhone(phoneStr) || phoneStr.length > MAX_PHONE_LENGTH)) {
    return res.status(400).json({ error: "Nieprawidłowy numer telefonu" });
  }

  const safeName = escapeHtml(name.trim());
  const safeEmail = escapeHtml(email.trim());
  const safePhone = escapeHtml(phoneStr.trim());
  const safeMessage = escapeHtml(message.trim()).replace(/\n/g, "<br />");

  try {
    await resend.emails.send({
      from: "Formularz kontaktowy <kontakt@amatysek.pl>",
      to: ["aleksandra.matysek@icloud.com", "dominikk.ilski@gmail.com"],
      subject: `Nowa wiadomość od ${safeName}`,
      html: `
        <h2>Nowa wiadomość z formularza kontaktowego</h2>
        <p><strong>Imię i nazwisko:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Telefon:</strong> ${safePhone || "nie podano"}</p>
        <hr />
        <p>${safeMessage}</p>
      `,
      replyTo: email.trim(),
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Resend error:", error);
    return res.status(500).json({ error: "Nie udało się wysłać wiadomości" });
  }
}
