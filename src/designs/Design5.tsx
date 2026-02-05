import { useState } from "react";

const floatingSymbols = [
  { symbol: "∑", top: "12%", left: "8%", duration: "18s", delay: "0s", size: "text-6xl" },
  { symbol: "π", top: "25%", left: "85%", duration: "22s", delay: "2s", size: "text-7xl" },
  { symbol: "∫", top: "60%", left: "12%", duration: "20s", delay: "4s", size: "text-8xl" },
  { symbol: "√", top: "45%", left: "90%", duration: "16s", delay: "1s", size: "text-5xl" },
  { symbol: "Δ", top: "80%", left: "75%", duration: "24s", delay: "3s", size: "text-6xl" },
  { symbol: "∞", top: "15%", left: "50%", duration: "19s", delay: "5s", size: "text-7xl" },
  { symbol: "θ", top: "70%", left: "40%", duration: "21s", delay: "2.5s", size: "text-5xl" },
  { symbol: "λ", top: "35%", left: "25%", duration: "17s", delay: "1.5s", size: "text-6xl" },
  { symbol: "φ", top: "55%", left: "65%", duration: "23s", delay: "4.5s", size: "text-8xl" },
  { symbol: "≠", top: "88%", left: "20%", duration: "15s", delay: "0.5s", size: "text-5xl" },
];

const exams = [
  {
    title: "Egzamin Ósmoklasisty",
    when: "12 maja 2026",
    time: "125 min",
    max: "30 pkt",
    threshold: null,
    tasks: null,
    scope:
      "Arytmetyka, algebra, geometria, analiza danych, matematyka stosowana, funkcje. Materiał z klas 4\u20138.",
    quote: "Razem ogarniemy ka\u017cdy dzia\u0142.",
    quoteColor: "text-[#06b6d4]",
    borderColor: "border-t-[#84cc16]",
  },
  {
    title: "Matura Podstawowa",
    when: "Maj 2026",
    time: "180 min",
    max: "50 pkt",
    threshold: "30%",
    tasks: "27\u201339 zada\u0144 (zamkni\u0119te + otwarte)",
    scope: "Obowi\u0105zkowy dla ka\u017cdego maturzysty.",
    quote: "30% to minimum \u2014 celujemy wy\u017cej.",
    quoteColor: "text-[#84cc16]",
    borderColor: "border-t-[#06b6d4]",
  },
  {
    title: "Matura Rozszerzona",
    when: "Maj 2026",
    time: "180 min",
    max: "50 pkt",
    threshold: null,
    tasks: "10\u201314 zada\u0144 otwartych",
    scope:
      "Liczby rzeczywiste, wyra\u017cenia algebraiczne, r\u00f3wnania i nier\u00f3wno\u015bci, funkcje, ci\u0105gi, trygonometria, planimetria, geometria analityczna, stereometria, kombinatoryka, rachunek prawdopodobie\u0144stwa i statystyka, optymalizacja i rachunek r\u00f3\u017cniczkowy.",
    quote: "Rozszerzenie to nie rocket science.",
    quoteColor: "text-[#06b6d4]",
    borderColor: "border-t-[#84cc16]",
  },
];

const steps = [
  {
    number: "01",
    title: "Darmowa konsultacja",
    description: "Poznajemy si\u0119, sprawdzam co wiesz i czego potrzebujesz.",
  },
  {
    number: "02",
    title: "Plan gry",
    description: "Uk\u0142adam program dopasowany do Ciebie i Twojego egzaminu.",
  },
  {
    number: "03",
    title: "Trening",
    description: "Regularne lekcje, zadania, powt\u00f3rki. Konsekwentnie do celu.",
  },
  {
    number: "04",
    title: "Wynik",
    description: "Zdajesz egzamin, bijesz rekordy. Matematyka ogarni\u0119ta.",
  },
];

const testimonials = [
  {
    quote: "Z 2 na 4 w dwa miesi\u0105ce. Legenda.",
    author: "Kacper",
    detail: "2 klasa liceum",
  },
  {
    quote: "C\u00f3rka w ko\u0144cu nie boi si\u0119 klas\u00f3wek.",
    author: "Anna",
    detail: "mama \u00f3smoklasistki",
  },
  {
    quote: "Matura rozszerzona? Okaza\u0142o si\u0119, \u017ce to nie jest takie straszne.",
    author: "Maja",
    detail: "maturzystka",
  },
];

const navLinks = [
  { label: "O mnie", href: "#o-mnie" },
  { label: "Egzaminy", href: "#egzaminy" },
  { label: "Plan", href: "#plan" },
  { label: "Tryby nauki", href: "#tryby" },
  { label: "Opinie", href: "#opinie" },
  { label: "Kontakt", href: "#kontakt" },
];

const glowLime = "0 0 30px rgba(132, 204, 22, 0.4), 0 0 60px rgba(132, 204, 22, 0.15)";
const glowLimeButton = "0 0 20px rgba(132, 204, 22, 0.5), 0 0 40px rgba(132, 204, 22, 0.2)";
const glowCyan = "0 0 30px rgba(6, 182, 212, 0.3), 0 0 60px rgba(6, 182, 212, 0.1)";

function Design5() {
  const [hoveredMode, setHoveredMode] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f8fafc] font-[Inter] overflow-x-hidden">
      <style>{`
        @keyframes float-drift {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          25% { transform: translateY(-30px) translateX(15px) rotate(5deg); }
          50% { transform: translateY(-15px) translateX(-10px) rotate(-3deg); }
          75% { transform: translateY(-40px) translateX(20px) rotate(7deg); }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.07; }
          50% { opacity: 0.15; }
        }
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .glow-button:hover {
          box-shadow: 0 0 30px rgba(132, 204, 22, 0.6), 0 0 80px rgba(132, 204, 22, 0.3);
          transform: scale(1.03);
        }
        .glow-button {
          transition: all 0.3s ease;
        }
        .card-hover {
          transition: all 0.3s ease;
        }
        .card-hover:hover {
          transform: translateY(-4px);
          border-color: rgba(132, 204, 22, 0.4);
        }
        .mode-card {
          transition: all 0.3s ease;
        }
      `}</style>

      <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-20">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {floatingSymbols.map((s, i) => (
            <span
              key={i}
              className={`absolute ${s.size} font-bold text-white select-none`}
              style={{
                top: s.top,
                left: s.left,
                animation: `float-drift ${s.duration} ease-in-out infinite, pulse-glow ${s.duration} ease-in-out infinite`,
                animationDelay: s.delay,
                opacity: 0.07,
              }}
            >
              {s.symbol}
            </span>
          ))}
        </div>

        <div className="relative z-10 max-w-5xl w-full">
          <div className="mb-8">
            <h1 className="font-[DM_Serif_Display] leading-[0.9] tracking-tight">
              <span className="block text-[clamp(4rem,12vw,10rem)] font-bold text-[#84cc16]">
                ZDAJ
              </span>
              <span className="block text-[clamp(2.5rem,8vw,6rem)] font-bold text-white">
                MATEMATYK&#280;
              </span>
              <span className="block text-[clamp(2.5rem,8vw,6rem)] font-bold text-white">
                NA SWOICH
              </span>
              <span className="block text-[clamp(2.5rem,8vw,6rem)] font-bold text-[#84cc16]">
                ZASADACH.
              </span>
            </h1>
          </div>

          <p className="text-lg md:text-2xl text-gray-400 font-light max-w-2xl mb-12 leading-relaxed">
            Korepetycje 1 na 1. Online i stacjonarnie. Bez stresu.
          </p>

          <a
            href="#kontakt"
            className="glow-button inline-block bg-[#84cc16] text-black font-extrabold text-lg md:text-xl px-10 py-5 rounded-lg uppercase tracking-wider"
            style={{ boxShadow: glowLimeButton }}
          >
            Zarezerwuj darmow&#261; lekcj&#281; &#8594;
          </a>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      <section className="bg-[#84cc16] py-6 md:py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4">
          {["2+ LAT DO\u015aWIADCZENIA", "100+ GODZIN LEKCJI", "ONLINE & STACJONARNIE"].map(
            (stat, i) => (
              <div key={i} className="flex items-center gap-4">
                {i > 0 && (
                  <div className="hidden md:block w-px h-8 bg-black/20 -ml-2 mr-2" />
                )}
                <span className="text-black font-extrabold text-lg md:text-xl tracking-widest font-mono uppercase text-center">
                  {stat}
                </span>
              </div>
            )
          )}
        </div>
      </section>

      <section id="o-mnie" className="py-24 md:py-32 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-[DM_Serif_Display] text-5xl md:text-7xl font-bold mb-16">
            O <span className="text-[#84cc16]">MNIE</span>
          </h2>

          <div className="grid md:grid-cols-[auto_1fr] gap-12 items-start">
            <div className="hidden md:block py-8">
              <div className="w-52 h-64 overflow-hidden rounded-2xl border-2 border-[#84cc16]/30">
                <img src="/ola.jpg" alt="Ola" className="w-full h-full object-cover object-top" />
              </div>
              <p className="text-center mt-3 text-[#84cc16] font-bold text-lg uppercase tracking-widest">Ola</p>
            </div>

            <div
              className="bg-[#161616] border border-gray-800 rounded-2xl p-8 md:p-12 card-hover"
            >
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-6">
                <span
                  className="text-white font-bold border-b-2 border-[#84cc16] pb-0.5"
                >
                  Ola. Studentka matematyki.
                </span>{" "}
                Korepetytorka z pasją.
              </p>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-6">
                2 lata doświadczenia. Uczyłam w{" "}
                <span className="text-white font-bold border-b-2 border-[#84cc16] pb-0.5">
                  Matplanecie
                </span>{" "}
                — jednej z najpopularniejszych szkół matematycznych w Polsce.
              </p>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-6">
                Teraz ruszam na swoich zasadach. Skupiam się na{" "}
                <span
                  className="text-white font-bold border-b-2 border-[#06b6d4] pb-0.5"
                >
                  lekcjach 1 na 1
                </span>{" "}
                — bo wtedy widzę najlepsze efekty.
              </p>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                Uczę online i stacjonarnie.{" "}
                <span className="text-[#84cc16] font-semibold">
                  Przygotowuję do egzaminów.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="egzaminy" className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-[DM_Serif_Display] text-5xl md:text-7xl font-bold mb-4">
            EGZAMINY
          </h2>
          <p className="text-2xl md:text-3xl text-gray-500 font-bold uppercase tracking-widest mb-16">
            TW&#211;J CEL
          </p>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {exams.map((exam, i) => (
              <div
                key={i}
                className={`bg-[#1e1e1e] border border-gray-800 ${exam.borderColor} border-t-4 rounded-2xl p-8 card-hover flex flex-col`}
              >
                <h3 className="font-[DM_Serif_Display] text-2xl md:text-3xl font-bold text-white mb-6">
                  {exam.title}
                </h3>

                <div className="space-y-2 mb-6">
                  <div className="flex justify-between text-sm text-gray-400 font-mono">
                    <span>Kiedy:</span>
                    <span className="text-white font-semibold">{exam.when}</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-400 font-mono">
                    <span>Czas:</span>
                    <span className="text-white font-semibold">{exam.time}</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-400 font-mono">
                    <span>Max:</span>
                    <span className="text-white font-semibold">{exam.max}</span>
                  </div>
                  {exam.threshold && (
                    <div className="flex justify-between text-sm text-gray-400 font-mono">
                      <span>Pr&#243;g:</span>
                      <span className="text-[#84cc16] font-bold">{exam.threshold}</span>
                    </div>
                  )}
                </div>

                {exam.tasks && (
                  <p className="text-sm text-gray-400 mb-4 font-mono">{exam.tasks}</p>
                )}

                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                  {exam.scope}
                </p>

                <div className="border-t border-gray-700 pt-4 mt-auto">
                  <p className={`${exam.quoteColor} font-bold text-lg italic`}>
                    &#8222;{exam.quote}&#8221;
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="plan" className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-[#161616]">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-[DM_Serif_Display] text-5xl md:text-7xl font-bold mb-20">
            PLAN <span className="text-[#84cc16]">DZIA&#321;ANIA</span>
          </h2>

          <div className="space-y-16 md:space-y-20">
            {steps.map((step) => (
              <div key={step.number} className="relative pl-4 md:pl-8">
                <span
                  className="absolute -left-4 md:-left-8 top-1/2 -translate-y-1/2 font-[DM_Serif_Display] text-[8rem] md:text-[12rem] font-bold text-[#84cc16] select-none leading-none pointer-events-none"
                  style={{ opacity: 0.12 }}
                >
                  {step.number}
                </span>

                <div className="relative z-10">
                  <div className="flex items-baseline gap-4 mb-3">
                    <span className="text-[#84cc16] font-mono font-bold text-xl md:text-2xl">
                      {step.number}
                    </span>
                    <span className="text-[#84cc16] text-2xl">&#8594;</span>
                    <h3 className="font-[DM_Serif_Display] text-3xl md:text-4xl font-bold text-white">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-lg md:text-xl text-gray-400 ml-0 md:ml-20">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="tryby" className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-[DM_Serif_Display] text-5xl md:text-7xl font-bold mb-16">
            TRYBY <span className="text-[#06b6d4]">NAUKI</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div
              className="mode-card bg-[#1e1e1e] border-2 rounded-2xl p-10 md:p-12 cursor-default"
              style={{
                borderColor:
                  hoveredMode === "online" ? "rgba(132, 204, 22, 0.5)" : "rgba(55, 65, 81, 0.5)",
                boxShadow: hoveredMode === "online" ? glowLime : "none",
              }}
              onMouseEnter={() => setHoveredMode("online")}
              onMouseLeave={() => setHoveredMode(null)}
            >
              <div className="text-5xl mb-6">&#9889;</div>
              <h3 className="font-[DM_Serif_Display] text-3xl md:text-4xl font-bold text-white mb-6 uppercase">
                Online
              </h3>
              <p className="text-lg text-gray-400 leading-relaxed mb-4">
                Gdzie chcesz, kiedy chcesz.
              </p>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start gap-3">
                  <span className="text-[#84cc16] font-bold mt-0.5">&#9656;</span>
                  <span>Interaktywna tablica</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#84cc16] font-bold mt-0.5">&#9656;</span>
                  <span>Screensharing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#84cc16] font-bold mt-0.5">&#9656;</span>
                  <span>Elastyczne godziny</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#84cc16] font-bold mt-0.5">&#9656;</span>
                  <span>Zero dojazd&#243;w</span>
                </li>
              </ul>
            </div>

            <div
              className="mode-card bg-[#1e1e1e] border-2 rounded-2xl p-10 md:p-12 cursor-default"
              style={{
                borderColor:
                  hoveredMode === "offline"
                    ? "rgba(6, 182, 212, 0.5)"
                    : "rgba(55, 65, 81, 0.5)",
                boxShadow: hoveredMode === "offline" ? glowCyan : "none",
              }}
              onMouseEnter={() => setHoveredMode("offline")}
              onMouseLeave={() => setHoveredMode(null)}
            >
              <div className="text-5xl mb-6">&#127919;</div>
              <h3 className="font-[DM_Serif_Display] text-3xl md:text-4xl font-bold text-white mb-6 uppercase">
                Stacjonarnie
              </h3>
              <p className="text-lg text-gray-400 leading-relaxed mb-4">
                Face to face. Pe&#322;na koncentracja.
              </p>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start gap-3">
                  <span className="text-[#06b6d4] font-bold mt-0.5">&#9656;</span>
                  <span>Praca przy tablicy</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#06b6d4] font-bold mt-0.5">&#9656;</span>
                  <span>Materia&#322;y na miejscu</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#06b6d4] font-bold mt-0.5">&#9656;</span>
                  <span>Bezpo&#347;redni kontakt</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#06b6d4] font-bold mt-0.5">&#9656;</span>
                  <span>100% skupienia</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="opinie" className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-[#161616]">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-[DM_Serif_Display] text-5xl md:text-7xl font-bold mb-16">
            CO M&#211;WI&#260; <span className="text-[#06b6d4]">UCZNIOWIE</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-[#1e1e1e] border border-gray-800 rounded-2xl p-8 md:p-10 card-hover"
              >
                <div className="text-[#06b6d4] text-7xl font-[DM_Serif_Display] leading-none mb-4 select-none">
                  &#8222;
                </div>
                <p className="text-xl md:text-2xl text-white italic leading-relaxed mb-8 font-light">
                  {t.quote}
                </p>
                <div className="border-t border-gray-700 pt-4">
                  <p className="text-[#84cc16] font-bold text-lg">{t.author}</p>
                  <p className="text-gray-500 text-sm">{t.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="kontakt"
        className="py-32 md:py-40 px-6 md:px-12 lg:px-20 bg-[#0a0a0a] relative"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(132, 204, 22, 0.04) 0%, transparent 70%)",
            }}
          />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="font-[DM_Serif_Display] text-6xl md:text-8xl lg:text-9xl font-bold text-[#84cc16] mb-8">
            TW&#211;J RUCH.
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 mb-4 max-w-2xl mx-auto leading-relaxed">
            Pierwsza lekcja jest za darmo.
          </p>
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Bez zobowi&#261;za&#324;. Bez &#347;ciemy.
          </p>

          <a
            href="mailto:olamatysek@gmail.com"
            className="glow-button inline-block bg-[#84cc16] text-black font-extrabold text-xl md:text-2xl px-12 py-6 rounded-lg uppercase tracking-wider mb-12"
            style={{ boxShadow: glowLimeButton }}
          >
            NAPISZ DO MNIE
          </a>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-gray-500 font-mono text-lg">
            <span>olamatysek@gmail.com</span>
            <span className="hidden md:inline text-gray-700">|</span>
            <span>+48 123 456 789</span>
          </div>
        </div>
      </section>

      <footer className="bg-[#0a0a0a] border-t border-gray-800 py-12 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="font-[DM_Serif_Display] text-2xl font-bold">
              <span className="text-[#84cc16]">MAT</span>
              <span className="text-white">MA</span>
            </div>

            <nav className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-500 hover:text-[#84cc16] transition-colors duration-300 text-sm uppercase tracking-widest font-semibold"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <p className="text-gray-600 text-sm">
              &copy; {new Date().getFullYear()} Korepetycje z Matematyki
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Design5;
