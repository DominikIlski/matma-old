import { useState } from "react";

const marqueeText =
  "Egzamin Ósmoklasisty \u00A0\u2022\u00A0 Matura Podstawowa \u00A0\u2022\u00A0 Matura Rozszerzona \u00A0\u2022\u00A0 Lekcje Online \u00A0\u2022\u00A0 Lekcje Stacjonarne \u00A0\u2022\u00A0 ";

const exams = [
  {
    name: "Egzamin Ósmoklasisty",
    duration: "125 min",
    points: "30 pkt",
    scope:
      "Klasy 4\u20138: arytmetyka, algebra, geometria, analiza danych, funkcje",
    date: "12.05.2026",
  },
  {
    name: "Matura Podstawowa",
    duration: "180 min",
    points: "50 pkt",
    scope:
      "Arytmetyka, algebra, geometria, analiza danych, funkcje. Próg: 30%",
    date: "Maj 2026",
  },
  {
    name: "Matura Rozszerzona",
    duration: "180 min",
    points: "50 pkt",
    scope:
      "Liczby rzeczywiste, wyrażenia algebraiczne, równania, funkcje, ciągi, trygonometria, planimetria, geometria analityczna, stereometria, kombinatoryka, prawdopodobieństwo, optymalizacja, rachunek różniczkowy",
    date: "Maj 2026",
  },
];

const steps = [
  { number: "01", label: "Bezpłatna konsultacja i diagnoza" },
  { number: "02", label: "Indywidualny plan nauki" },
  { number: "03", label: "Systematyczne lekcje (online lub stacjonarnie)" },
  { number: "04", label: "Monitorowanie postępów" },
];

const testimonials = [
  {
    quote:
      "Córka pierwszy raz powiedziała, że matematyka może być ciekawa. Wyniki na sprawdzianach poprawiły się w ciągu miesiąca.",
    author: "Anna K.",
    detail: "mama uczennicy, klasa 7",
  },
  {
    quote:
      "Bardzo profesjonalne podejście. Syn zdał maturę rozszerzoną na 82% \u2014 bez tego wsparcia byłoby to niemożliwe.",
    author: "Tomasz W.",
    detail: "ojciec maturzysty",
  },
  {
    quote:
      "Lekcje online działają świetnie. Wygodne, punktualne, zawsze z konkretnymi materiałami. Polecam każdemu.",
    author: "Magdalena P.",
    detail: "mama uczennicy, klasa 8",
  },
];

const onlinePoints = [
  "Elastyczne godziny",
  "Interaktywna tablica",
  "Wygoda nauki z domu",
  "Nagrywanie lekcji",
];

const offlinePoints = [
  "Bezpośredni kontakt",
  "Praca przy tablicy",
  "Materiały drukowane",
  "Pełna koncentracja",
];

const heroSubtitle =
  "Indywidualne korepetycje dla uczniów szkół podstawowych i licealistów.";

const pullQuote =
  "\u201EMatematyka to nie talent\u00A0\u2014\u00A0to umiejętność, którą można rozwinąć.\u201D";

const bioParas = [
  "Jestem Ola \u2014 studentka matematyki z pasją do nauczania. Od ponad dwóch lat prowadzę korepetycje, pomagając uczniom zrozumieć matematykę \u2014 nie tylko zapamiętać wzory.",
  "Doświadczenie zdobywałam m.in. w Matplanecie \u2014 jednej z najbardziej rozpoznawalnych szkół matematycznych. Teraz zaczynam na własnych zasadach, bo chcę poświęcić każdemu uczniowi pełną uwagę.",
  "Specjalizuję się w lekcjach indywidualnych 1 na 1 i przygotowaniu do egzaminów: ósmoklasisty, matury podstawowej i rozszerzonej. Prowadzę zajęcia online oraz stacjonarnie.",
];

const stats = [
  { value: "2+", label: "lata doświadczenia" },
  { value: "100+", label: "przeprowadzonych lekcji" },
  { value: "1:1", label: "indywidualne podejście" },
];

const examHeaders = [
  { label: "Egzamin", span: "col-span-3" },
  { label: "Czas", span: "col-span-1" },
  { label: "Punkty", span: "col-span-1" },
  { label: "Zakres", span: "col-span-5" },
  { label: "Termin", span: "col-span-2 text-right" },
];

export default function Design3() {
  const [hoveredExam, setHoveredExam] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white text-[#111111] font-[Inter] antialiased">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>

      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#111111]/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-14 flex items-center justify-between">
          <span className="text-sm font-black tracking-tight">MATMA.</span>
          <a
            href="#kontakt"
            className="text-xs font-medium tracking-widest uppercase text-[#10b981] hover:opacity-70 transition-opacity duration-300"
          >
            Kontakt
          </a>
        </div>
      </nav>

      <section className="pt-32 pb-20 lg:pb-28 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start">
          <div className="lg:col-span-7">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tighter leading-none">
              Matematyka.
            </h1>
            <p className="mt-6 text-lg sm:text-xl font-light text-[#111111]/60 max-w-lg leading-relaxed">
              {heroSubtitle}
            </p>
            <div className="mt-6 w-20 h-0.5 bg-[#10b981]" />
            <a
              href="#kontakt"
              className="mt-10 inline-block bg-[#10b981] text-white text-sm font-semibold tracking-wide px-8 py-3.5 hover:opacity-90 transition-opacity duration-300"
            >
              Rozpocznij naukę
            </a>
          </div>
          <div className="lg:col-span-5 flex flex-col gap-10 lg:gap-12 lg:pt-4">
            {stats.map((stat) => (
              <div
                key={stat.value}
                className="border-l-2 border-[#111111] pl-6"
              >
                <span className="font-mono text-5xl lg:text-6xl font-black tracking-tighter">
                  {stat.value}
                </span>
                <p className="mt-1 text-xs font-light tracking-widest uppercase text-[#111111]/50">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-[#111111] py-3 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          <span className="text-[#10b981] text-sm font-medium tracking-widest">
            {marqueeText.repeat(8)}
          </span>
          <span className="text-[#10b981] text-sm font-medium tracking-widest">
            {marqueeText.repeat(8)}
          </span>
        </div>
      </div>

      <section className="py-24 lg:py-32 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5 flex flex-col items-start gap-10">
            <div className="w-40 h-52 overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
              <img src="/ola.jpg" alt="Ola" className="w-full h-full object-cover object-top" />
            </div>
            <p className="text-2xl sm:text-3xl lg:text-4xl font-light italic leading-snug text-[#111111]/80">
              {pullQuote}
            </p>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <div className="border-t border-[#111111]/10 pt-8">
              <h2 className="text-xs font-semibold tracking-[0.3em] uppercase mb-8 text-[#111111]/40">
                O mnie
              </h2>
              <div className="space-y-5 text-base font-light leading-relaxed text-[#111111]/70">
                {bioParas.map((para) => (
                  <p key={para.slice(0, 20)}>{para}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-xs font-semibold tracking-[0.3em] uppercase mb-16 text-[#111111]/40">
          Egzaminy
        </h2>

        <div className="hidden md:block">
          <div className="grid grid-cols-12 gap-4 border-b border-[#111111]/10 pb-3 mb-0">
            {examHeaders.map((header) => (
              <span
                key={header.label}
                className={`text-[10px] font-semibold tracking-[0.2em] uppercase text-[#111111]/30 ${header.span}`}
              >
                {header.label}
              </span>
            ))}
          </div>
          {exams.map((exam, i) => (
            <div
              key={exam.name}
              className={`grid grid-cols-12 gap-4 border-t border-[#111111]/10 py-6 transition-colors duration-300 ${
                hoveredExam === i ? "bg-[#111111]/[0.02]" : ""
              }`}
              onMouseEnter={() => setHoveredExam(i)}
              onMouseLeave={() => setHoveredExam(null)}
            >
              <span className="col-span-3 text-sm font-semibold">
                {exam.name}
              </span>
              <span className="col-span-1 font-mono text-sm text-[#111111]/60">
                {exam.duration}
              </span>
              <span className="col-span-1 font-mono text-sm text-[#111111]/60">
                {exam.points}
              </span>
              <span className="col-span-5 text-sm font-light text-[#111111]/60 leading-relaxed">
                {exam.scope}
              </span>
              <span className="col-span-2 font-mono text-sm text-[#111111]/60 text-right">
                {exam.date}
              </span>
            </div>
          ))}
        </div>

        <div className="md:hidden space-y-6">
          {exams.map((exam) => (
            <div key={exam.name} className="border-t border-[#111111]/10 pt-6">
              <h3 className="text-lg font-semibold mb-4">{exam.name}</h3>
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div>
                  <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#111111]/30 block mb-1">
                    Czas
                  </span>
                  <span className="font-mono text-sm">{exam.duration}</span>
                </div>
                <div>
                  <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#111111]/30 block mb-1">
                    Punkty
                  </span>
                  <span className="font-mono text-sm">{exam.points}</span>
                </div>
                <div>
                  <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#111111]/30 block mb-1">
                    Termin
                  </span>
                  <span className="font-mono text-sm">{exam.date}</span>
                </div>
              </div>
              <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#111111]/30 block mb-1">
                Zakres
              </span>
              <p className="text-sm font-light text-[#111111]/60 leading-relaxed">
                {exam.scope}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 lg:py-32 px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#111111]/10">
        <h2 className="text-xs font-semibold tracking-[0.3em] uppercase mb-20 text-[#111111]/40">
          Metoda
        </h2>
        <div className="space-y-16 lg:space-y-20">
          {steps.map((step) => (
            <div
              key={step.number}
              className="grid grid-cols-1 lg:grid-cols-12 items-end gap-4 lg:gap-8"
            >
              <div className="lg:col-span-3">
                <span className="text-8xl lg:text-9xl font-black tracking-tighter text-[#111111]/[0.06] leading-none select-none">
                  {step.number}
                </span>
              </div>
              <div className="lg:col-span-9 lg:-ml-12">
                <p className="text-xl sm:text-2xl lg:text-3xl font-light tracking-tight">
                  {step.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 lg:py-32 px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#111111]/10">
        <h2 className="text-xs font-semibold tracking-[0.3em] uppercase mb-16 text-[#111111]/40">
          Formy zajęć
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <div className="p-8 lg:p-10 border border-[#111111]/10">
            <h3 className="text-xl font-semibold tracking-tight mb-4">
              Online
            </h3>
            <div className="w-10 h-0.5 bg-[#10b981] mb-8" />
            <ul className="space-y-3">
              {onlinePoints.map((point) => (
                <li
                  key={point}
                  className="text-sm font-light text-[#111111]/60 flex items-center gap-3"
                >
                  <span className="w-1 h-1 bg-[#10b981] rounded-full shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-8 lg:p-10 border border-[#111111]/10">
            <h3 className="text-xl font-semibold tracking-tight mb-4">
              Stacjonarnie
            </h3>
            <div className="w-10 h-0.5 bg-[#10b981] mb-8" />
            <ul className="space-y-3">
              {offlinePoints.map((point) => (
                <li
                  key={point}
                  className="text-sm font-light text-[#111111]/60 flex items-center gap-3"
                >
                  <span className="w-1 h-1 bg-[#10b981] rounded-full shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#111111]/10">
        <h2 className="text-xs font-semibold tracking-[0.3em] uppercase mb-20 text-[#111111]/40">
          Opinie
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-12">
          {testimonials.map((t) => (
            <div key={t.author}>
              <p className="text-lg sm:text-xl font-light leading-relaxed text-[#111111]/80 mb-8">
                {"\u201E"}
                {t.quote}
                {"\u201D"}
              </p>
              <p className="text-sm font-medium">
                {"\u2014"} {t.author}
              </p>
              <p className="text-xs font-light text-[#111111]/40 mt-1">
                {t.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="kontakt"
        className="bg-[#111111] text-white py-24 lg:py-32 px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight leading-tight">
            Pierwsza konsultacja jest bezpłatna.
          </p>
          <a
            href="mailto:olamatysek@gmail.com"
            className="mt-10 inline-block bg-[#10b981] text-white text-sm font-semibold tracking-wide px-10 py-4 hover:opacity-90 transition-opacity duration-300"
          >
            Umów się
          </a>
          <div className="mt-8 flex items-center justify-center gap-4 text-xs text-white/30">
            <span>olamatysek@gmail.com</span>
            <span>{"\u00B7"}</span>
            <span>+48 123 456 789</span>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#111111]/10 py-6 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#111111]/30">
          <span>
            {"\u00A9"} {new Date().getFullYear()} Korepetycje z Matematyki
          </span>
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="hover:text-[#111111]/60 transition-colors duration-300"
            >
              Polityka prywatności
            </a>
            <span>{"\u00B7"}</span>
            <a
              href="#"
              className="hover:text-[#111111]/60 transition-colors duration-300"
            >
              Regulamin
            </a>
            <span>{"\u00B7"}</span>
            <a
              href="#kontakt"
              className="hover:text-[#111111]/60 transition-colors duration-300"
            >
              Kontakt
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
