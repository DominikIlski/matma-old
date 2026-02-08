import { useState } from "react";
import PencilUnderline from "./PencilUnderline";
import SectionNumber from "./SectionNumber";
import { CONTACT_EMAIL, ruledLinesBg } from "../data";

const formFields = [
  { label: "Imię i nazwisko", name: "name", type: "text", placeholder: "Jan Kowalski", required: true },
  { label: "Email", name: "email", type: "email", placeholder: "jan@email.com", required: true },
  { label: "Telefon (opcjonalnie)", name: "phone", type: "tel", placeholder: "+48 000 000 000", required: false },
] as const;

export default function ContactSection() {
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  return (
    <section id="kontakt" className="relative bg-white py-24 lg:py-32" aria-labelledby="contact-heading">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-16">
          <SectionNumber num="07" />
          <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-[#475569]/70">
            Kontakt
          </span>
        </div>

        <div className="lg:flex lg:gap-16 xl:gap-24">
          <div className="lg:flex-1 mb-16 lg:mb-0">
            <h2
              id="contact-heading"
              className="font-serif-head text-4xl lg:text-5xl font-medium tracking-tight leading-tight mb-6"
            >
              <span className="relative inline-block">
                Porozmawiajmy
                <PencilUnderline />
              </span>
            </h2>
            <p className="text-base text-[#475569] leading-relaxed mb-12 max-w-md">
              Pierwsza konsultacja jest bezpłatna. Napisz lub zadzwoń — ustalimy, jak mogę pomóc.
            </p>

            <div className="space-y-8">
              <div>
                <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#475569]/50 mb-2">
                  Email
                </p>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="font-serif-head text-lg font-medium text-[#1e293b] hover:text-[#d4564e] transition-colors duration-300"
                >
                  {CONTACT_EMAIL}
                </a>
              </div>
              <div>
                <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#475569]/50 mb-2">
                  Forma zajęć
                </p>
                <p className="font-serif-head text-lg font-medium text-[#1e293b]">
                  Online / Stacjonarnie
                </p>
              </div>
            </div>
          </div>

          <div className="lg:flex-1">
            <div
              className="relative p-8 lg:p-10"
              style={{
                background: `${ruledLinesBg}, #faf6f1`,
                backgroundPositionY: "8px",
                boxShadow: "2px 4px 20px rgba(0,0,0,0.06)",
              }}
            >
              <div className="absolute left-6 top-0 bottom-0 w-[1px] bg-[#d4564e]/40" aria-hidden="true" />

              <h3
                className="font-serif-head text-xl font-medium tracking-tight"
                style={{ lineHeight: "32px", paddingTop: "7px" }}
              >
                Wyślij wiadomość
              </h3>
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  setFormStatus("sending");
                  const form = e.currentTarget;
                  const data = Object.fromEntries(new FormData(form));
                  try {
                    const res = await fetch("/api/contact", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify(data),
                    });
                    if (!res.ok) throw new Error();
                    setFormStatus("sent");
                    form.reset();
                  } catch {
                    setFormStatus("error");
                  }
                }}
                noValidate
              >
                {formFields.map((field) => (
                  <div key={field.name} style={{ height: "64px" }}>
                    <label
                      htmlFor={`contact-${field.name}`}
                      className="block text-[10px] font-semibold tracking-[0.2em] uppercase text-[#475569]/70"
                      style={{ lineHeight: "32px" }}
                    >
                      {field.label}
                      {field.required && <span className="text-[#d4564e] ml-0.5" aria-hidden="true">*</span>}
                    </label>
                    <input
                      id={`contact-${field.name}`}
                      name={field.name}
                      type={field.type}
                      required={field.required}
                      aria-required={field.required}
                      className="w-full bg-transparent border-none text-sm text-[#1e293b] placeholder:text-[#475569]/40"
                      style={{ lineHeight: "32px", height: "32px" }}
                      placeholder={field.placeholder}
                    />
                  </div>
                ))}
                <div style={{ height: "160px" }}>
                  <label
                    htmlFor="contact-message"
                    className="block text-[10px] font-semibold tracking-[0.2em] uppercase text-[#475569]/70"
                    style={{ lineHeight: "32px" }}
                  >
                    Wiadomość
                    <span className="text-[#d4564e] ml-0.5" aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    aria-required="true"
                    rows={4}
                    className="w-full bg-transparent border-none text-sm text-[#1e293b] resize-none placeholder:text-[#475569]/40"
                    style={{ lineHeight: "32px", height: "128px" }}
                    placeholder="Opisz, jak mogę Ci pomóc..."
                  />
                </div>
                <div style={{ minHeight: "48px", display: "flex", alignItems: "center" }}>
                  {formStatus === "sent" ? (
                    <p className="font-serif-head text-sm text-[#d4564e] font-medium" role="status" aria-live="polite">
                      Wiadomość wysłana — odezwę się wkrótce!
                    </p>
                  ) : formStatus === "error" ? (
                    <p className="text-sm text-[#d4564e]" role="alert" aria-live="assertive">
                      Coś poszło nie tak. Napisz bezpośrednio na email.
                    </p>
                  ) : (
                    <button
                      type="submit"
                      disabled={formStatus === "sending"}
                      className="bg-[#1e293b] text-white text-sm font-medium px-8 py-3 hover:bg-[#d4564e] transition-colors duration-300 w-full lg:w-auto disabled:opacity-50 min-h-[44px]"
                    >
                      {formStatus === "sending" ? "Wysyłanie..." : "Wyślij wiadomość"}
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
