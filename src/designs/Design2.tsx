import { useState } from "react";

const NAV_LINKS = [
  { label: "O mnie", href: "#o-mnie" },
  { label: "Egzaminy", href: "#egzaminy" },
  { label: "Jak pracuję", href: "#jak-pracuje" },
  { label: "Formy nauki", href: "#formy-nauki" },
  { label: "Opinie", href: "#opinie" },
  { label: "FAQ", href: "#faq" },
];

const EXAMS = [
  {
    title: "Egzamin Ósmoklasisty",
    rotate: "-rotate-2",
    gradient: "from-[#2563eb] to-[#8b5cf6]",
    details: [
      "Klasy 4–8 szkoły podstawowej",
      "125 minut",
      "Maks. 30 punktów",
      "Termin: 12 maja 2026",
    ],
    scope:
      "Arytmetyka, algebra, geometria, analiza danych, matematyka stosowana, funkcje",
  },
  {
    title: "Matura Podstawowa",
    rotate: "rotate-0",
    gradient: "from-[#f97316] to-[#ef4444]",
    details: [
      "Poziom podstawowy — obowiązkowy",
      "180 minut, 27–39 zadań",
      "Maks. 50 punktów",
      "Próg zdawalności: 30%",
    ],
    scope: "Analiza danych, geometria, algebra, arytmetyka",
  },
  {
    title: "Matura Rozszerzona",
    rotate: "rotate-2",
    gradient: "from-[#8b5cf6] to-[#ec4899]",
    details: [
      "Poziom rozszerzony",
      "180 minut, 10–14 zadań otwartych",
      "Maks. 50 punktów",
    ],
    scope:
      "Liczby rzeczywiste, wyrażenia algebraiczne, równania i nierówności, funkcje, ciągi, trygonometria, planimetria, geometria analityczna, stereometria, kombinatoryka, rachunek prawdopodobieństwa, optymalizacja i rachunek różniczkowy",
  },
];

const STEPS = [
  {
    number: "01",
    title: "Poznajemy się",
    description: "Bezpłatna konsultacja, podczas której omówimy Twoje cele i potrzeby.",
  },
  {
    number: "02",
    title: "Sprawdzam poziom",
    description: "Diagnoza wiedzy — sprawdzam, co już umiesz, a nad czym trzeba popracować.",
  },
  {
    number: "03",
    title: "Tworzymy plan",
    description: "Indywidualny plan nauki dopasowany do Twojego poziomu i celów.",
  },
  {
    number: "04",
    title: "Działamy!",
    description: "Regularne lekcje, zadania domowe i widoczne efekty — oceny idą w górę.",
  },
];

const TESTIMONIALS = [
  {
    name: "Anna K.",
    child: "mama ucznia 8. klasy",
    text: "Córka zawsze bała się matematyki, a teraz sama siada do zadań. Ogromna zmiana w podejściu i ocenach!",
    border: "border-l-[#2563eb]",
  },
  {
    name: "Marek W.",
    child: "tata maturzysty",
    text: "Syn zdał maturę rozszerzoną na 78%! Bez tych korepetycji nie byłoby to możliwe. Polecam z całego serca.",
    border: "border-l-[#f97316]",
  },
  {
    name: "Katarzyna L.",
    child: "mama uczennicy 6. klasy",
    text: "Świetny kontakt z dzieckiem, cierpliwość i profesjonalizm. Ola w końcu rozumie ułamki!",
    border: "border-l-[#8b5cf6]",
  },
  {
    name: "Tomasz D.",
    child: "tata licealisty",
    text: "Lekcje online sprawdzają się rewelacyjnie. Syn jest bardziej zmotywowany, a wyniki mówią same za siebie.",
    border: "border-l-[#ec4899]",
  },
];

const FAQ_ITEMS = [
  {
    question: "Ile kosztuje lekcja?",
    answer:
      "Cena zależy od poziomu nauczania i formy lekcji. Lekcje dla szkoły podstawowej zaczynają się od 80 zł/60 min, a dla licealistów od 100 zł/60 min. Dokładną wycenę przedstawiam po bezpłatnej konsultacji.",
  },
  {
    question: "Jak długo trwa lekcja?",
    answer:
      "Standardowa lekcja trwa 60 minut. W przypadku przygotowań do egzaminów lub intensywnych powtórek możemy umówić się na dłuższe sesje — 90 lub 120 minut.",
  },
  {
    question: "Czy pierwsza lekcja jest bezpłatna?",
    answer:
      "Tak! Pierwsza konsultacja (ok. 20–30 minut) jest całkowicie bezpłatna. Podczas niej poznajemy się, omawiam potrzeby ucznia i diagnozuję poziom wiedzy.",
  },
  {
    question: "Jak mogę się zapisać?",
    answer:
      "Wystarczy napisać do mnie maila lub zadzwonić. Umówimy się na bezpłatną konsultację, a potem ustalimy stały termin lekcji dopasowany do Twojego planu.",
  },
];

export default function Design2() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white font-[Space_Grotesk] text-[#0f172a] overflow-x-hidden">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(-3deg); }
        }
        @keyframes floatReverse {
          0%, 100% { transform: translateY(-15px) rotate(3deg); }
          50% { transform: translateY(5px) rotate(-2deg); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes pulse-ring {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.08); opacity: 0.6; }
        }
      `}</style>

      <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#2563eb] via-[#8b5cf6] to-[#f97316] shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <a
            href="#"
            className="text-white font-bold text-xl sm:text-2xl tracking-tight"
          >
            matma<span className="text-[#fbbf24]">.</span>pro
          </a>
          <div className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/90 hover:text-white text-sm font-medium transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#kontakt"
              className="bg-white text-[#2563eb] font-bold text-sm px-5 py-2 rounded-full hover:bg-[#fbbf24] hover:text-[#0f172a] transition-all duration-300"
            >
              Zapisz się
            </a>
          </div>
          <a
            href="#kontakt"
            className="md:hidden bg-white text-[#2563eb] font-bold text-sm px-4 py-2 rounded-full"
          >
            Zapisz się
          </a>
        </div>
      </nav>

      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#eff6ff] via-white to-[#faf5ff]" />

        <div
          className="absolute top-24 left-[8%] w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-[#2563eb] to-[#8b5cf6] opacity-20"
          style={{ animation: "float 6s ease-in-out infinite" }}
        />
        <div
          className="absolute top-40 right-[12%] w-12 h-12 sm:w-20 sm:h-20 bg-gradient-to-br from-[#f97316] to-[#ef4444] opacity-20"
          style={{
            animation: "floatSlow 8s ease-in-out infinite",
            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
          }}
        />
        <div
          className="absolute bottom-32 left-[15%] w-14 h-14 sm:w-20 sm:h-20 border-4 border-[#8b5cf6]/30 rotate-12"
          style={{ animation: "floatReverse 7s ease-in-out infinite" }}
        />
        <div
          className="absolute top-[60%] right-[8%] w-10 h-10 sm:w-16 sm:h-16 rounded-full border-4 border-[#f97316]/30"
          style={{ animation: "float 5s ease-in-out infinite" }}
        />
        <div
          className="absolute top-[30%] left-[45%] w-8 h-8 bg-[#fbbf24]/20 rounded-full"
          style={{ animation: "floatSlow 9s ease-in-out infinite" }}
        />
        <div
          className="absolute bottom-40 right-[30%] w-6 h-6 bg-[#2563eb]/15 rotate-45"
          style={{ animation: "float 7s ease-in-out infinite" }}
        />

        <div
          className="absolute top-32 right-[25%] text-[#8b5cf6]/15 text-4xl sm:text-6xl font-bold select-none"
          style={{ animation: "floatSlow 10s ease-in-out infinite" }}
        >
          2x + 3 = ?
        </div>
        <div
          className="absolute bottom-24 left-[25%] text-[#f97316]/15 text-3xl sm:text-5xl font-bold select-none"
          style={{ animation: "floatReverse 8s ease-in-out infinite" }}
        >
          a² + b²
        </div>
        <div
          className="absolute top-[55%] left-[5%] text-[#2563eb]/10 text-2xl sm:text-4xl font-bold select-none"
          style={{ animation: "float 11s ease-in-out infinite" }}
        >
          ∫ f(x)dx
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <h1 className="text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold leading-[0.95] tracking-tight mb-8">
            <span className="bg-gradient-to-r from-[#2563eb] via-[#8b5cf6] to-[#f97316] bg-clip-text text-transparent">
              Matematyka
            </span>
            <br />
            <span className="text-[#0f172a]">nie musi być</span>
            <br />
            <span className="bg-gradient-to-r from-[#f97316] to-[#ef4444] bg-clip-text text-transparent">
              trudna
            </span>
          </h1>

          <p className="text-lg sm:text-xl lg:text-2xl text-[#475569] max-w-2xl mx-auto mb-10 font-medium">
            Korepetycje z matematyki, które naprawdę działają. Indywidualnie,
            z&nbsp;pasją, na Twój sukces.
          </p>

          <a
            href="#kontakt"
            className="inline-block bg-gradient-to-r from-[#2563eb] to-[#8b5cf6] text-white font-bold text-lg sm:text-xl px-10 py-4 rounded-full shadow-lg shadow-[#2563eb]/30 hover:shadow-xl hover:shadow-[#2563eb]/40 hover:scale-105 transition-all duration-300"
          >
            Zacznij naukę →
          </a>

          <div className="mt-14 flex flex-wrap justify-center gap-4 sm:gap-8">
            {[
              { icon: "📐", label: "2+ lata" },
              { icon: "🎯", label: "100+ lekcji" },
              { icon: "⭐", label: "Online & Stacjonarnie" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white/80 backdrop-blur-sm border border-[#e2e8f0] rounded-2xl px-6 py-3 flex items-center gap-3 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <span className="text-2xl">{stat.icon}</span>
                <span className="font-bold text-sm sm:text-base text-[#0f172a]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="o-mnie" className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2563eb]/20 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative flex justify-center">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80">
                <div
                  className="absolute inset-0 rounded-full border-2 border-dashed border-[#2563eb]/30"
                  style={{ animation: "spin-slow 30s linear infinite" }}
                />
                <div
                  className="absolute inset-4 rounded-full border-2 border-[#8b5cf6]/20"
                  style={{ animation: "spin-slow 25s linear infinite reverse" }}
                />
                <div className="absolute inset-8 rounded-full border-2 border-dashed border-[#f97316]/25" />
                <div className="absolute inset-12 rounded-full bg-gradient-to-br from-[#2563eb]/10 to-[#8b5cf6]/10" />
                <div className="absolute inset-16 rounded-full bg-gradient-to-br from-[#8b5cf6]/15 to-[#f97316]/15" />
                <div className="absolute inset-8 rounded-full overflow-hidden">
                  <img src="/ola.jpg" alt="Ola" className="w-full h-full object-cover object-top" />
                </div>
                <div
                  className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-[#f97316] to-[#ef4444] rounded-xl rotate-12 flex items-center justify-center text-white font-bold text-lg"
                  style={{ animation: "float 4s ease-in-out infinite" }}
                >
                  π
                </div>
                <div
                  className="absolute -bottom-2 -left-2 w-10 h-10 bg-gradient-to-br from-[#2563eb] to-[#8b5cf6] rounded-lg -rotate-6 flex items-center justify-center text-white font-bold"
                  style={{ animation: "floatSlow 5s ease-in-out infinite" }}
                >
                  Σ
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                O{" "}
                <span className="bg-gradient-to-r from-[#2563eb] to-[#8b5cf6] bg-clip-text text-transparent">
                  mnie
                </span>
              </h2>
              <div className="space-y-5 text-lg text-[#475569] leading-relaxed">
                <p>
                  Cześć, jestem Ola! Studentka matematyki z ponad dwuletnim doświadczeniem w
                  nauczaniu — zarówno indywidualnym, jak i grupowym.
                </p>
                <p>
                  Uczyłam w Matplanecie — jednej z najpopularniejszych szkół
                  matematycznych w Polsce. Teraz ruszam na swoich zasadach
                  i otwieram własną praktykę korepetycyjną, żeby dać każdemu
                  uczniowi dokładnie tyle uwagi, ile potrzebuje.
                </p>
                <p>
                  Skupiam się na lekcjach 1 na 1 — online i stacjonarnie.
                  Przygotowuję do egzaminów — ósmoklasisty, matury podstawowej i
                  rozszerzonej. Wiem, jak stresujące mogą być egzaminy, dlatego
                  dbam nie tylko o wiedzę, ale też o pewność siebie ucznia.
                </p>
              </div>
              <p className="mt-8 text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#f97316] via-[#ef4444] to-[#8b5cf6] bg-clip-text text-transparent">
                „Matematyka to nie talent — to praktyka i dobre wyjaśnienie."
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="egzaminy"
        className="relative py-24 sm:py-32 bg-gradient-to-b from-[#f8fafc] to-white overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              Przygotowanie do{" "}
              <span className="bg-gradient-to-r from-[#f97316] to-[#ef4444] bg-clip-text text-transparent">
                egzaminów
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-[#64748b] max-w-2xl mx-auto">
              Kompleksowe przygotowanie do najważniejszych egzaminów
              matematycznych
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {EXAMS.map((exam) => (
              <div
                key={exam.title}
                className={`${exam.rotate} hover:rotate-0 transition-all duration-500 hover:scale-105 hover:shadow-2xl`}
              >
                <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-[#e2e8f0]">
                  <div
                    className={`h-3 bg-gradient-to-r ${exam.gradient}`}
                  />
                  <div className="p-6 sm:p-8">
                    <h3 className="text-2xl sm:text-3xl font-bold mb-5 tracking-tight">
                      {exam.title}
                    </h3>
                    <ul className="space-y-2 mb-6">
                      {exam.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-2">
                          <span className="text-[#2563eb] font-bold mt-0.5">
                            ▸
                          </span>
                          <span className="text-[#475569]">{detail}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="pt-4 border-t border-[#f1f5f9]">
                      <p className="text-xs font-bold uppercase tracking-widest text-[#94a3b8] mb-2">
                        Zakres materiału
                      </p>
                      <p className="text-sm text-[#64748b] leading-relaxed">
                        {exam.scope}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="jak-pracuje" className="relative py-24 sm:py-32 overflow-hidden">
        <div
          className="absolute top-20 right-0 w-40 h-40 rounded-full bg-[#2563eb]/5"
          style={{ animation: "floatSlow 10s ease-in-out infinite" }}
        />
        <div
          className="absolute bottom-20 left-0 w-32 h-32 rounded-full bg-[#f97316]/5"
          style={{ animation: "float 8s ease-in-out infinite" }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              Jak{" "}
              <span className="bg-gradient-to-r from-[#8b5cf6] to-[#2563eb] bg-clip-text text-transparent">
                pracuję
              </span>
              ?
            </h2>
            <p className="text-lg sm:text-xl text-[#64748b] max-w-xl mx-auto">
              Cztery proste kroki do lepszych ocen
            </p>
          </div>

          <div className="space-y-12 sm:space-y-16 max-w-5xl mx-auto">
            {STEPS.map((step, i) => (
              <div
                key={step.number}
                className={`flex flex-col sm:flex-row items-center gap-6 sm:gap-10 ${
                  i % 2 === 1 ? "sm:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-shrink-0 relative">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-gradient-to-br from-[#2563eb] to-[#8b5cf6] flex items-center justify-center shadow-lg shadow-[#2563eb]/20 rotate-3 hover:rotate-0 transition-transform duration-300">
                    <span className="text-white font-bold text-3xl sm:text-4xl -rotate-3">
                      {step.number}
                    </span>
                  </div>
                  {i < STEPS.length - 1 && (
                    <div className="hidden sm:block absolute top-full left-1/2 w-0.5 h-12 sm:h-16 bg-gradient-to-b from-[#2563eb]/30 to-transparent -translate-x-1/2" />
                  )}
                </div>
                <div
                  className={`text-center sm:text-left ${
                    i % 2 === 1 ? "sm:text-right" : ""
                  }`}
                >
                  <h3 className="text-2xl sm:text-3xl font-bold mb-2 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-lg text-[#64748b] max-w-md">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="formy-nauki"
        className="relative py-24 sm:py-32 bg-gradient-to-b from-[#f8fafc] to-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              Formy{" "}
              <span className="bg-gradient-to-r from-[#f97316] to-[#8b5cf6] bg-clip-text text-transparent">
                nauki
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-[#64748b] max-w-xl mx-auto">
              Wybierz formę, która najbardziej Ci odpowiada
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="group relative bg-white rounded-3xl p-8 sm:p-10 border-2 border-[#e2e8f0] hover:border-[#2563eb] shadow-md hover:shadow-2xl hover:shadow-[#2563eb]/10 hover:scale-[1.03] transition-all duration-500">
              <div className="absolute -top-5 -right-5 w-20 h-20 rounded-full bg-gradient-to-br from-[#2563eb]/10 to-[#8b5cf6]/10 group-hover:scale-150 transition-transform duration-500" />
              <span className="text-5xl sm:text-6xl block mb-6">💻</span>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 tracking-tight">
                Online
              </h3>
              <ul className="space-y-3 text-[#475569]">
                <li className="flex items-start gap-3">
                  <span className="text-[#2563eb] font-bold text-lg">✓</span>
                  <span>Wygodnie z domu — oszczędzasz czas na dojazdy</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#2563eb] font-bold text-lg">✓</span>
                  <span>Interaktywna tablica online</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#2563eb] font-bold text-lg">✓</span>
                  <span>Możliwość nagrywania lekcji do powtórki</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#2563eb] font-bold text-lg">✓</span>
                  <span>Elastyczne godziny zajęć</span>
                </li>
              </ul>
            </div>

            <div className="group relative bg-white rounded-3xl p-8 sm:p-10 border-2 border-[#e2e8f0] hover:border-[#f97316] shadow-md hover:shadow-2xl hover:shadow-[#f97316]/10 hover:scale-[1.03] transition-all duration-500">
              <div className="absolute -top-5 -left-5 w-20 h-20 rounded-full bg-gradient-to-br from-[#f97316]/10 to-[#ef4444]/10 group-hover:scale-150 transition-transform duration-500" />
              <span className="text-5xl sm:text-6xl block mb-6">📝</span>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 tracking-tight">
                Stacjonarnie
              </h3>
              <ul className="space-y-3 text-[#475569]">
                <li className="flex items-start gap-3">
                  <span className="text-[#f97316] font-bold text-lg">✓</span>
                  <span>Bezpośredni kontakt z nauczycielem</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#f97316] font-bold text-lg">✓</span>
                  <span>Praca z materiałami fizycznymi</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#f97316] font-bold text-lg">✓</span>
                  <span>Pełna koncentracja bez ekranów</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#f97316] font-bold text-lg">✓</span>
                  <span>Budowanie relacji i zaufania</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="opinie" className="relative py-24 sm:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              Co mówią{" "}
              <span className="bg-gradient-to-r from-[#2563eb] to-[#f97316] bg-clip-text text-transparent">
                rodzice
              </span>
            </h2>
          </div>

          <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide -mx-4 px-4">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className={`flex-shrink-0 w-80 sm:w-96 bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-[#e2e8f0] border-l-4 ${t.border} snap-start hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
              >
                <p className="text-[#475569] text-base sm:text-lg leading-relaxed mb-6 italic">
                  „{t.text}"
                </p>
                <div>
                  <p className="font-bold text-[#0f172a]">{t.name}</p>
                  <p className="text-sm text-[#94a3b8]">{t.child}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="faq"
        className="relative py-24 sm:py-32 bg-gradient-to-b from-[#f8fafc] to-white"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              Najczęstsze{" "}
              <span className="bg-gradient-to-r from-[#8b5cf6] to-[#2563eb] bg-clip-text text-transparent">
                pytania
              </span>
            </h2>
          </div>

          <div className="space-y-4">
            {FAQ_ITEMS.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-[#e2e8f0] shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 sm:px-8 py-5 sm:py-6 text-left cursor-pointer"
                >
                  <span className="text-lg sm:text-xl font-bold text-[#0f172a] pr-4">
                    {item.question}
                  </span>
                  <span
                    className={`flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#2563eb] to-[#8b5cf6] text-white flex items-center justify-center text-lg font-bold transition-transform duration-300 ${
                      openFaq === i ? "rotate-45" : "rotate-0"
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === i ? "max-h-60 pb-6" : "max-h-0"
                  }`}
                >
                  <p className="px-6 sm:px-8 text-[#64748b] leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="kontakt"
        className="relative py-24 sm:py-32 bg-gradient-to-r from-[#2563eb] via-[#8b5cf6] to-[#7c3aed] overflow-hidden"
      >
        <div
          className="absolute top-0 left-[10%] w-32 h-32 rounded-full bg-white/5"
          style={{ animation: "float 7s ease-in-out infinite" }}
        />
        <div
          className="absolute bottom-0 right-[15%] w-40 h-40 rounded-full bg-white/5"
          style={{ animation: "floatSlow 9s ease-in-out infinite" }}
        />
        <div
          className="absolute top-[30%] right-[5%] w-16 h-16 border-2 border-white/10 rotate-45"
          style={{ animation: "floatReverse 6s ease-in-out infinite" }}
        />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white tracking-tight mb-6">
            Gotowy na lepsze oceny?
          </h2>
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10">
            Pierwsza konsultacja jest bezpłatna. Sprawdź, jak mogę Ci pomóc —
            umów się jeszcze dziś!
          </p>
          <a
            href="mailto:olamatysek@gmail.com"
            className="inline-block bg-white text-[#2563eb] font-bold text-lg sm:text-xl px-10 sm:px-14 py-4 sm:py-5 rounded-full shadow-xl hover:shadow-2xl hover:bg-[#fbbf24] hover:text-[#0f172a] hover:scale-105 transition-all duration-300"
          >
            Umów darmową lekcję próbną
          </a>
        </div>
      </section>

      <footer className="bg-[#0f172a] text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16">
            <div>
              <h3 className="text-xl font-bold mb-6 tracking-tight">
                Nawigacja
              </h3>
              <ul className="space-y-3">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-[#94a3b8] hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6 tracking-tight">
                Kontakt
              </h3>
              <ul className="space-y-3 text-[#94a3b8]">
                <li className="flex items-center gap-3">
                  <span>✉</span>
                  <a
                    href="mailto:olamatysek@gmail.com"
                    className="hover:text-white transition-colors duration-200"
                  >
                    olamatysek@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <span>☎</span>
                  <a
                    href="tel:+48123456789"
                    className="hover:text-white transition-colors duration-200"
                  >
                    +48 123 456 789
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6 tracking-tight">
                Social media
              </h3>
              <div className="flex gap-4">
                {[
                  { icon: "📘", label: "Facebook" },
                  { icon: "📸", label: "Instagram" },
                  { icon: "🎵", label: "TikTok" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href="#"
                    aria-label={social.label}
                    className="w-12 h-12 rounded-xl bg-[#1e293b] hover:bg-gradient-to-br hover:from-[#2563eb] hover:to-[#8b5cf6] flex items-center justify-center text-xl transition-all duration-300 hover:scale-110"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-14 pt-8 border-t border-[#1e293b] flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[#64748b] text-sm">
              © {new Date().getFullYear()} matma.pro — Wszelkie prawa
              zastrzeżone
            </p>
            <p className="text-[#64748b] text-sm">
              Korepetycje z matematyki online i stacjonarnie
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
