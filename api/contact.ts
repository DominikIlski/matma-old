import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, phone, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Brakuje wymaganych pól" });
  }

  try {
    await resend.emails.send({
      from: "Formularz amatysek.pl <onboarding@resend.dev>",
      to: "dominikk.ilski@gmail.com",
      subject: `Nowa wiadomość od ${name}`,
      html: `
        <h2>Nowa wiadomość z formularza kontaktowego</h2>
        <p><strong>Imię i nazwisko:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone || "nie podano"}</p>
        <hr />
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
      replyTo: email,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Resend error:", error);
    return res.status(500).json({ error: "Nie udało się wysłać wiadomości", details: String(error) });
  }
}
