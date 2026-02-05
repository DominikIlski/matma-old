import { useState } from "react";

const WaveDividerSimple = ({
  fill,
  flip,
}: {
  fill: string;
  flip?: boolean;
}) => (
  <div
    className="w-full overflow-hidden leading-[0]"
    style={{ transform: flip ? "scaleY(-1)" : undefined }}
  >
    <svg
      viewBox="0 0 1440 100"
      preserveAspectRatio="none"
      className="block w-full h-[50px] md:h-[70px]"
    >
      <path
        d="M0,40 C240,100 480,0 720,50 C960,100 1200,10 1440,40 L1440,100 L0,100 Z"
        fill={fill}
      />
    </svg>
  </div>
);

type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    question: "Ile kosztuje lekcja?",
    answer:
      "Cena zależy od poziomu i częstotliwości zajęć. Skontaktuj się ze mną po szczegóły!",
  },
  {
    question: "Jak długo trwa lekcja?",
    answer:
      "Standardowa lekcja trwa 60 minut, ale dostosowuję czas do potrzeb ucznia.",
  },
  {
    question: "Czy mogę odwołać lekcję?",
    answer: "Tak, proszę o informację minimum 24 godziny wcześniej.",
  },
  {
    question: "Czy pierwsza lekcja jest naprawdę bezpłatna?",
    answer: "Tak! Pierwsza konsultacja jest zawsze gratis.",
  },
];

const testimonials = [
  {
    quote:
      "Córka zawsze bała się matematyki. Po kilku miesiącach z panią Anią nie tylko poprawiła oceny, ale zaczęła sama siadać do zadań. Nie wierzę, że to ta sama dziewczynka!",
    name: "Katarzyna",
    child: "mama Zosi, klasa 7",
  },
  {
    quote:
      "Syn miał ogromne zaległości przed maturą. Dzięki cierpliwości i indywidualnemu podejściu zdał z wynikiem, o którym nawet nie marzył. Serdecznie polecam!",
    name: "Tomasz",
    child: "tata Kuby, maturzysta",
  },
  {
    quote:
      "Najlepsza inwestycja w edukację mojego dziecka. Lekcje online są świetnie zorganizowane, a córka czuje się komfortowo i bezpiecznie. Widać, że to osoba z powołaniem.",
    name: "Magdalena",
    child: "mama Hani, klasa 4",
  },
];

const steps = [
  {
    icon: "☕",
    title: "Poznajemy się",
    description: "Bezpłatna rozmowa o potrzebach ucznia",
  },
  {
    icon: "🔍",
    title: "Diagnoza",
    description: "Sprawdzam aktualny poziom wiedzy",
  },
  {
    icon: "📋",
    title: "Plan nauki",
    description: "Przygotowuję indywidualny program",
  },
  {
    icon: "📚",
    title: "Regularne lekcje",
    description: "Systematyczna praca krok po kroku",
  },
  {
    icon: "🎉",
    title: "Efekty",
    description: "Lepsze oceny i pewność siebie!",
  },
];

const whyMeCards = [
  {
    icon: "🎯",
    title: "Indywidualne podejście",
    description: "Dostosowuję tempo i metodę do każdego ucznia",
  },
  {
    icon: "🤝",
    title: "Cierpliwość i empatia",
    description: "Tworzymy bezpieczną przestrzeń do nauki",
  },
  {
    icon: "📈",
    title: "Widoczne efekty",
    description: "Systematyczna praca przynosi rezultaty",
  },
];

export default function Design4() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen font-[Sora] text-[#3d2c2e] bg-[#fffbf5]">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>

      <section className="relative bg-[#fef3e2] pt-16 pb-0 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-[#c2703e]" />
          <div className="absolute top-40 right-20 w-60 h-60 rounded-full bg-[#a3b18a]" />
          <div className="absolute bottom-20 left-1/3 w-32 h-32 rounded-full bg-[#c2703e]" />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 text-center pb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-4">
            Pomogę Twojemu dziecku
            <br />
            <span className="text-[#c2703e]">pokochać matematykę</span>
          </h1>

          <p className="font-[Caveat] text-2xl sm:text-3xl text-[#c2703e]/80 mb-10">
            ...albo przynajmniej ją zdać! 😊
          </p>

          <a
            href="#kontakt"
            className="inline-block bg-[#c2703e] text-white font-semibold text-lg px-10 py-4 rounded-2xl shadow-lg hover:bg-[#a85d32] hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
          >
            Porozmawiajmy o Twoim dziecku
          </a>

          <div className="flex flex-wrap justify-center gap-4 mt-10">
            {["Lekcje 1 na 1", "Online i stacjonarnie", "Pierwsza lekcja gratis"].map(
              (badge) => (
                <span
                  key={badge}
                  className="bg-white/70 backdrop-blur-sm text-[#3d2c2e] text-sm font-medium px-6 py-3 rounded-2xl shadow-sm border border-[#c2703e]/10"
                >
                  {badge}
                </span>
              )
            )}
          </div>
        </div>

        <WaveDividerSimple fill="#fffbf5" />
      </section>

      <section className="py-20 px-6 bg-[#fffbf5]">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mx-auto w-48 h-48 rounded-full border-4 border-dashed border-[#c2703e]/60 flex items-center justify-center mb-10 bg-[#fef3e2]/50">
            <span className="text-5xl font-bold text-[#c2703e]/40 font-[Sora]">
              A
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold mb-8">O mnie</h2>

          <div className="text-lg leading-relaxed text-[#3d2c2e]/85 space-y-4 text-left sm:text-center">
            <p>
              Cześć! Jestem studentką matematyki i od ponad 2 lat pomagam
              uczniom zrozumieć (i polubić!) ten przedmiot. Prowadzę
              indywidualne korepetycje — bo wierzę, że każdy uczeń zasługuje
              na pełną uwagę i plan nauki szyty na miarę.
            </p>
            <p>
              Uczę zarówno online, jak i stacjonarnie. Niezależnie od formy,
              stawiam na cierpliwość, zrozumienie i budowanie pewności siebie.
              Bo matematyka to nie talent — to umiejętność, której można się
              nauczyć.
            </p>
          </div>

          <p className="font-[Caveat] text-2xl text-[#a3b18a] mt-8 rotate-[-1deg]">
            Każdy uczeń jest inny — i to jest piękne!
          </p>
        </div>
      </section>

      <WaveDividerSimple fill="#f9e4e4" />

      <section className="bg-[#f9e4e4] pb-4 pt-10 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-14">
            Dlaczego ja?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {whyMeCards.map((card) => (
              <div
                key={card.title}
                className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center"
              >
                <span className="text-5xl block mb-5">{card.icon}</span>
                <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                <p className="text-[#3d2c2e]/75 leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WaveDividerSimple fill="#fffbf5" />

      <section className="py-20 px-6 bg-[#fffbf5]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6">
            Przygotowanie do egzaminów
          </h2>
          <p className="text-center text-[#3d2c2e]/70 mb-14 max-w-2xl mx-auto">
            Przygotowuję uczniów do wszystkich najważniejszych egzaminów
            matematycznych. Systematycznie i bez stresu.
          </p>

          <div className="space-y-8">
            <div className="bg-white rounded-3xl p-8 shadow-md border-l-4 border-[#c2703e]">
              <h3 className="text-xl font-bold mb-3 text-[#c2703e]">
                Egzamin Ósmoklasisty
              </h3>
              <p className="text-[#3d2c2e]/80 leading-relaxed mb-3">
                Egzamin po 8 klasie szkoły podstawowej. Zakres obejmuje
                arytmetykę, algebrę, geometrię, analizę danych, matematykę
                stosowaną oraz funkcje z klas 4-8. Egzamin trwa 125 minut, a
                maksymalnie można zdobyć 30 punktów.
              </p>
              <p className="text-sm text-[#3d2c2e]/60 mb-2">
                Najbliższy termin:{" "}
                <span className="font-semibold text-[#c2703e]">
                  12 maja 2026
                </span>
              </p>
              <p className="font-[Caveat] text-xl text-[#a3b18a]">
                Spokojnie — przygotujemy się razem!
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-md border-l-4 border-[#a3b18a]">
              <h3 className="text-xl font-bold mb-3 text-[#a3b18a]">
                Matura Podstawowa
              </h3>
              <p className="text-[#3d2c2e]/80 leading-relaxed mb-3">
                Obowiązkowy egzamin maturalny z matematyki. Trwa 180 minut i
                składa się z 27-39 zadań. Maksymalnie można zdobyć 50
                punktów, a do zdania wymagane jest minimum 30%. Zakres
                obejmuje podstawę programową z liceum.
              </p>
              <p className="font-[Caveat] text-xl text-[#a3b18a]">
                Zdasz — obiecuję, że Cię przygotuję!
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-md border-l-4 border-[#c2703e]/70">
              <h3 className="text-xl font-bold mb-3 text-[#c2703e]">
                Matura Rozszerzona
              </h3>
              <p className="text-[#3d2c2e]/80 leading-relaxed mb-3">
                Poziom rozszerzony dla ambitnych. Trwa 180 minut i zawiera
                10-14 zadań otwartych. Maksymalnie 50 punktów. Zakres: liczby
                rzeczywiste, wyrażenia algebraiczne, równania i nierówności,
                funkcje, ciągi, trygonometria, planimetria, geometria
                analityczna, stereometria, kombinatoryka, rachunek
                prawdopodobieństwa i statystyka, optymalizacja i rachunek
                różniczkowy.
              </p>
              <p className="font-[Caveat] text-xl text-[#c2703e]">
                Matura to nie koniec świata — dam radę Ci pomóc!
              </p>
            </div>
          </div>
        </div>
      </section>

      <WaveDividerSimple fill="#fef3e2" />

      <section className="bg-[#fef3e2] pb-4 pt-10 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-14">
            Jak wyglądają zajęcia
          </h2>

          <div className="relative">
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-[#c2703e]/20" />

            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={step.title} className="relative flex items-start gap-6">
                  <div className="relative z-10 flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white border-2 border-[#c2703e]/30 flex items-center justify-center shadow-sm">
                    <span className="text-xl md:text-2xl">{step.icon}</span>
                  </div>

                  <div className="bg-white rounded-2xl p-5 md:p-6 shadow-sm flex-1 hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-xs font-bold text-[#c2703e]/50 uppercase tracking-wider">
                        Krok {index + 1}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold mb-1">{step.title}</h3>
                    <p className="text-[#3d2c2e]/70">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <WaveDividerSimple fill="#fffbf5" />

      <section className="py-20 px-6 bg-[#fffbf5]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-14">
            Online czy stacjonarnie
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#fef3e2] rounded-3xl p-8 md:p-10 shadow-md hover:shadow-lg transition-shadow duration-300">
              <span className="text-5xl block mb-5">💻</span>
              <h3 className="text-2xl font-bold mb-3">Online</h3>
              <p className="text-[#3d2c2e]/80 leading-relaxed mb-6">
                Uczymy się przez internet — wygodnie, z Twojego pokoju.
                Potrzebujesz tylko komputera!
              </p>
              <ul className="space-y-3">
                {[
                  "Interaktywna tablica",
                  "Elastyczne terminy",
                  "Nagrywanie lekcji",
                  "Brak dojazdów",
                ].map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-center gap-3 text-[#3d2c2e]/75"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#a3b18a] flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#f9e4e4] rounded-3xl p-8 md:p-10 shadow-md hover:shadow-lg transition-shadow duration-300">
              <span className="text-5xl block mb-5">🏠</span>
              <h3 className="text-2xl font-bold mb-3">Stacjonarnie</h3>
              <p className="text-[#3d2c2e]/80 leading-relaxed mb-6">
                Spotykamy się na żywo — nic nie zastąpi bezpośredniego
                kontaktu.
              </p>
              <ul className="space-y-3">
                {[
                  "Praca przy tablicy",
                  "Materiały drukowane",
                  "Pełne skupienie",
                  "Osobista atmosfera",
                ].map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-center gap-3 text-[#3d2c2e]/75"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#c2703e] flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <WaveDividerSimple fill="#f9e4e4" />

      <section className="bg-[#f9e4e4] pb-4 pt-10 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-14">
            Opinie rodziców
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300 relative"
              >
                <span className="font-[Caveat] text-7xl text-[#c2703e]/30 absolute -top-2 left-4 leading-none select-none">
                  &ldquo;
                </span>
                <p className="text-[#3d2c2e]/80 leading-relaxed mt-6 mb-6 italic">
                  {t.quote}
                </p>
                <div className="border-t border-[#c2703e]/10 pt-4">
                  <p className="font-bold text-[#c2703e]">{t.name}</p>
                  <p className="text-sm text-[#3d2c2e]/60">{t.child}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WaveDividerSimple fill="#fffbf5" />

      <section className="py-20 px-6 bg-[#fffbf5]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-14">
            Najczęściej zadawane pytania
          </h2>

          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm overflow-hidden border border-[#c2703e]/5"
              >
                <button
                  onClick={() =>
                    setOpenFaq(openFaq === index ? null : index)
                  }
                  className="w-full text-left p-6 flex items-center justify-between gap-4 hover:bg-[#fef3e2]/30 transition-colors duration-200"
                >
                  <span className="font-semibold text-lg">{item.question}</span>
                  <span
                    className={`text-[#c2703e] text-2xl flex-shrink-0 transition-transform duration-300 ${
                      openFaq === index ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === index ? "max-h-40" : "max-h-0"
                  }`}
                >
                  <p className="px-6 pb-6 text-[#3d2c2e]/75 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WaveDividerSimple fill="#fef3e2" />

      <section id="kontakt" className="bg-[#fef3e2] pb-4 pt-10 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Zróbmy pierwszy krok razem!
          </h2>

          <p className="text-lg text-[#3d2c2e]/75 mb-8 max-w-xl mx-auto">
            Napisz lub zadzwoń — porozmawiamy o potrzebach Twojego dziecka i
            umówimy się na bezpłatną pierwszą lekcję.
          </p>

          <a
            href="mailto:kontakt@example.com"
            className="inline-block bg-[#c2703e] text-white font-semibold text-lg px-12 py-4 rounded-2xl shadow-lg hover:bg-[#a85d32] hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 mb-8"
          >
            Napisz do mnie
          </a>

          <p className="font-[Caveat] text-2xl text-[#c2703e] mb-10 rotate-[1deg]">
            Odezwij się — odpowiadam szybko!
          </p>

          <div className="flex flex-wrap justify-center gap-8 text-[#3d2c2e]/70">
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-[#c2703e]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span>kontakt@example.com</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-[#c2703e]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span>+48 123 456 789</span>
            </div>
          </div>
        </div>
      </section>

      <WaveDividerSimple fill="#3d2c2e" />

      <footer className="bg-[#3d2c2e] text-white/70 py-12 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="font-[Caveat] text-2xl text-white/90">
            Korepetycje z matematyki
          </p>
          <div className="flex gap-6 text-sm">
            <a
              href="#kontakt"
              className="hover:text-white transition-colors duration-200"
            >
              Kontakt
            </a>
            <span className="text-white/30">|</span>
            <span>kontakt@example.com</span>
          </div>
          <p className="text-sm text-white/40">
            &copy; {new Date().getFullYear()} Wszelkie prawa zastrzeżone
          </p>
        </div>
      </footer>
    </div>
  );
}
