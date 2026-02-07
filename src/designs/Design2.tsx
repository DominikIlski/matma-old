import { useState, useEffect } from "react";

const navLinks = [
  { href: "#o-mnie", label: "O mnie" },
  { href: "#egzaminy", label: "Egzaminy" },
  { href: "#oferta", label: "Oferta" },
  { href: "#jak-wyglada-lekcja", label: "Jak wygląda lekcja" },
  { href: "#dla-kogo", label: "Dla kogo" },
  { href: "#opinie", label: "Opinie" },
  { href: "#kontakt", label: "Kontakt" },
];

const exams = [
  {
    title: "Egzamin Ósmoklasisty",
    subtitle: "Klasy 4–8 szkoły podstawowej",
    date: "12 maja 2026",
    duration: "125 minut",
    points: "maks. 30 punktów",
    description:
      "Egzamin obejmuje materiał z klas 4–8: arytmetykę, algebrę, geometrię, analizę danych, matematykę stosowaną oraz elementy funkcji. To pierwszy poważny sprawdzian wiedzy matematycznej — warto się do niego solidnie przygotować.",
    topics: [
      "Arytmetyka i liczby",
      "Wyrażenia algebraiczne",
      "Geometria płaska i przestrzenna",
      "Analiza danych i statystyka",
      "Zadania praktyczne",
      "Wstęp do funkcji",
    ],
  },
  {
    title: "Matura Podstawowa",
    subtitle: "Poziom obowiązkowy dla każdego maturzysty",
    date: "Maj 2026",
    duration: "180 minut",
    points: "maks. 50 punktów",
    description:
      "Egzamin maturalny z matematyki na poziomie podstawowym jest obowiązkowy dla wszystkich absolwentów liceów i techników. Aby zdać, wymagane jest uzyskanie minimum 30% punktów. Arkusz zawiera 27–39 zadań zamkniętych i otwartych.",
    topics: [
      "Liczby rzeczywiste",
      "Wyrażenia algebraiczne",
      "Równania i nierówności",
      "Funkcje",
      "Ciągi liczbowe",
      "Geometria i trygonometria",
    ],
  },
  {
    title: "Matura Rozszerzona",
    subtitle: "Dla ambitnych — klucz do wymarzonej uczelni",
    date: "Maj 2026",
    duration: "180 minut",
    points: "maks. 50 punktów",
    description:
      "Arkusz rozszerzony składa się z 10–14 zadań otwartych wymagających pełnych rozwiązań. To egzamin decydujący o wynikach rekrutacji na najlepsze kierunki ścisłe i techniczne.",
    topics: [
      "Liczby rzeczywiste i wyrażenia algebraiczne",
      "Równania, nierówności i układy",
      "Funkcje i ciągi",
      "Trygonometria",
      "Planimetria i geometria analityczna",
      "Stereometria",
      "Kombinatoryka i rachunek prawdopodobieństwa",
      "Optymalizacja i elementy rachunku różniczkowego",
    ],
  },
];

const steps = [
  {
    number: "01",
    title: "Bezpłatna konsultacja",
    description:
      "Podczas krótkiej rozmowy poznaję potrzeby ucznia, omawiamy cele i ustalamy plan współpracy. Bez zobowiązań.",
  },
  {
    number: "02",
    title: "Diagnoza poziomu",
    description:
      "Sprawdzam aktualny poziom wiedzy, identyfikuję luki i mocne strony. To fundament skutecznej nauki.",
  },
  {
    number: "03",
    title: "Indywidualny plan nauki",
    description:
      "Tworzę spersonalizowany program dopasowany do tempa ucznia, celów egzaminacyjnych i dostępnego czasu.",
  },
  {
    number: "04",
    title: "Regularne lekcje i postępy",
    description:
      "Systematyczna praca przynosi efekty. Monitoruję postępy i dostosowuję plan, by osiągnąć najlepsze wyniki.",
  },
];

const testimonials = [
  {
    name: "Anna Kowalska",
    context: "mama ucznia klasy 8",
    quote:
      "Syn miał poważne zaległości z matematyki i bał się egzaminu ósmoklasisty. Po trzech miesiącach regularnych lekcji nie tylko nadrobił braki, ale zaczął sam rozwiązywać trudniejsze zadania. Ogromna zmiana w podejściu do przedmiotu — polecam z całego serca.",
  },
  {
    name: "Magdalena Wiśniewska",
    context: "mama maturzystki",
    quote:
      "Córka przygotowywała się do matury rozszerzonej i potrzebowała kogoś, kto wytłumaczy zagadnienia w przystępny sposób. Zajęcia były świetnie zorganizowane, a wyniki przeszły nasze oczekiwania. Matura zdana na 86% — jesteśmy bardzo wdzięczne!",
  },
  {
    name: "Tomasz Nowak",
    context: "tata uczennicy liceum",
    quote:
      "Nasza córka zawsze miała problemy z geometrią i trygonometrią. Indywidualne podejście sprawiło, że w końcu zrozumiała te tematy. Ocena z matematyki poprawiła się z trojki na piątkę w ciągu jednego semestru. Profesjonalizm i cierpliwość na najwyższym poziomie.",
  },
];

const studentProfiles = [
  {
    label: "Uczniowie szkoły podstawowej",
    detail: "klasy 4–8, budowanie solidnych fundamentów",
  },
  {
    label: "Licealiści",
    detail: "bieżący materiał, przygotowanie do sprawdzianów",
  },
  { label: "Maturzyści", detail: "poziom podstawowy i rozszerzony" },
  {
    label: "Osoby z trudnościami",
    detail: "uzupełnianie zaległości, odzyskiwanie pewności siebie",
  },
  {
    label: "Ambitni uczniowie",
    detail: "rozwój ponad program, konkursy matematyczne",
  },
];

const onlineFeatures = [
  "Wygodna nauka z domu — oszczędność czasu na dojazdach",
  "Interaktywna tablica do wspólnej pracy w czasie rzeczywistym",
  "Elastyczne terminy dopasowane do Twojego planu",
  "Nagrywanie lekcji do późniejszego powtórzenia",
  "Dostęp do materiałów i notatek po każdych zajęciach",
];

const stationaryFeatures = [
  "Bezpośredni kontakt — łatwiejsza komunikacja i motywacja",
  "Praca przy tablicy i na kartce — klasyczna metoda nauki",
  "Pełne skupienie bez rozpraszaczy ekranowych",
  "Natychmiastowa pomoc przy rozwiązywaniu zadań",
  "Budowanie relacji i zaufania między uczniem a korepetytorem",
];

const DiamondSeparator = () => (
  <div className="flex items-center justify-center gap-3 my-8">
    <span className="block w-12 h-px bg-[#6b2d3e]/20" />
    <span className="block w-1.5 h-1.5 rotate-45 bg-[#c4654a]" />
    <span className="block w-12 h-px bg-[#6b2d3e]/20" />
  </div>
);

type SectionHeaderProps = {
  category: string;
  title: string;
};

const SectionHeader = ({ category, title }: SectionHeaderProps) => (
  <div className="text-center mb-16">
    <span className="uppercase tracking-[0.3em] text-xs font-medium text-[#c4654a] font-[Work_Sans]">
      {category}
    </span>
    <h2 className="font-[Fraunces] text-3xl sm:text-4xl md:text-5xl font-light text-[#6b2d3e] mt-3 mb-4">
      {title}
    </h2>
    <div className="w-24 h-px bg-[#6b2d3e]/30 mx-auto" />
  </div>
);

export default function Design2() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [expandedExam, setExpandedExam] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <div className="min-h-screen bg-[#f0ebe1] text-[#2d2d2d]" style={{ scrollBehavior: "smooth" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,100..900;1,9..144,100..900&family=Work+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&display=swap');

        html { scroll-behavior: smooth; }

        .drop-cap::first-letter {
          font-family: 'Fraunces', serif;
          float: left;
          font-size: 4.5rem;
          line-height: 0.8;
          padding-right: 0.6rem;
          padding-top: 0.15rem;
          color: #6b2d3e;
          font-weight: 300;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .fade-up {
          animation: fadeUp 0.7s ease-out forwards;
        }

        .editorial-quote::before {
          content: '\\201C';
          font-family: 'Fraunces', serif;
          font-size: 6rem;
          line-height: 1;
          position: absolute;
          top: -1.2rem;
          left: -0.5rem;
          color: #c4654a;
          opacity: 0.25;
          font-style: italic;
        }

        .editorial-quote::after {
          content: '\\201D';
          font-family: 'Fraunces', serif;
          font-size: 6rem;
          line-height: 1;
          position: absolute;
          bottom: -2.8rem;
          right: -0.5rem;
          color: #c4654a;
          opacity: 0.25;
          font-style: italic;
        }
      `}</style>

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#f0ebe1]/95 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a
            href="#"
            className="font-[Fraunces] text-xl font-light text-[#6b2d3e] tracking-wide"
          >
            Ola<span className="text-[#c4654a]">.</span>matematyka
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-[Work_Sans] text-sm tracking-wide text-[#2d2d2d]/70 hover:text-[#6b2d3e] transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex flex-col gap-1.5 w-8 h-8 items-center justify-center"
            aria-label="Menu"
          >
            <span
              className={`block w-6 h-px bg-[#6b2d3e] transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-[3.5px]" : ""
              }`}
            />
            <span
              className={`block w-6 h-px bg-[#6b2d3e] transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-px bg-[#6b2d3e] transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-[3.5px]" : ""
              }`}
            />
          </button>
        </div>

        <div
          className={`lg:hidden fixed inset-0 top-0 bg-[#f0ebe1] transition-all duration-500 flex flex-col items-center justify-center gap-8 ${
            menuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-5 right-6 w-8 h-8 flex items-center justify-center"
            aria-label="Zamknij menu"
          >
            <span className="block w-6 h-px bg-[#6b2d3e] rotate-45 absolute" />
            <span className="block w-6 h-px bg-[#6b2d3e] -rotate-45 absolute" />
          </button>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-[Fraunces] text-2xl font-light text-[#6b2d3e] hover:text-[#c4654a] transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>

      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#e8e0d4] hidden lg:block" />
        <div className="relative max-w-6xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-0 items-center">
            <div className="lg:pr-16 py-12 lg:py-24">
              <span className="uppercase tracking-[0.3em] text-xs font-medium text-[#c4654a] font-[Work_Sans] block mb-6">
                Korepetycje z matematyki
              </span>
              <h1 className="font-[Fraunces] text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-[#6b2d3e] mb-8">
                Matematyka{" "}
                <em className="font-light not-italic">staje się</em>
                <br />
                <span className="font-light italic">przystępna</span>
                <span className="text-[#c4654a]">.</span>
              </h1>

              <div className="border-l-2 border-[#c4654a]/40 pl-6 mb-10 max-w-md">
                <p className="font-[Fraunces] text-lg sm:text-xl font-light italic text-[#2d2d2d]/70 leading-relaxed">
                  Indywidualne lekcje, cierpliwe tłumaczenie i&nbsp;plan
                  dopasowany do Twojego dziecka.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mb-10">
                <a
                  href="#kontakt"
                  className="inline-block bg-[#6b2d3e] text-[#f0ebe1] font-[Work_Sans] text-sm font-medium tracking-wide px-8 py-4 hover:bg-[#5a2534] transition-colors duration-300"
                >
                  Umów bezpłatną lekcję
                </a>
                <a
                  href="#o-mnie"
                  className="inline-block border border-[#6b2d3e]/30 text-[#6b2d3e] font-[Work_Sans] text-sm font-medium tracking-wide px-8 py-4 hover:border-[#6b2d3e] transition-colors duration-300"
                >
                  Poznaj mnie
                </a>
              </div>

              <div className="flex items-center gap-6 font-[Work_Sans] text-sm text-[#2d2d2d]/50">
                <span>2+ lata doświadczenia</span>
                <span className="w-1 h-1 rounded-full bg-[#c4654a]" />
                <span>100+ godzin lekcji</span>
                <span className="w-1 h-1 rounded-full bg-[#c4654a]" />
                <span>Online & stacjonarnie</span>
              </div>
            </div>

            <div className="relative lg:pl-12">
              <div className="relative aspect-[3/4] max-w-md mx-auto lg:mx-0 overflow-hidden">
                <img
                  src="/ola.jpg"
                  alt="Ola — korepetytorka matematyki"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-[#6b2d3e]/10" />
              </div>
              <div className="absolute -bottom-6 -left-6 lg:left-0 bg-[#f0ebe1] p-6 max-w-xs shadow-sm">
                <p className="font-[Fraunces] text-base italic text-[#6b2d3e] leading-relaxed">
                  „Wierzę, że każdy uczeń może polubić matematykę — wystarczy
                  odpowiedni przewodnik i&nbsp;cierpliwość."
                </p>
                <span className="block mt-2 font-[Work_Sans] text-xs tracking-widest uppercase text-[#c4654a]">
                  — Ola
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="o-mnie" className="py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader category="Poznaj swoją korepetytorkę" title="O mnie" />

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-4">
              <div className="aspect-[4/5] overflow-hidden sticky top-28">
                <img
                  src="/ola.jpg"
                  alt="Ola — korepetytorka matematyki"
                  className="w-full h-full object-cover object-top grayscale-[20%]"
                />
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4 font-[Work_Sans] text-sm">
                <div className="border border-[#6b2d3e]/10 p-4 text-center">
                  <span className="font-[Fraunces] text-2xl text-[#6b2d3e] block">2+</span>
                  <span className="text-[#2d2d2d]/60">lata doświadczenia</span>
                </div>
                <div className="border border-[#6b2d3e]/10 p-4 text-center">
                  <span className="font-[Fraunces] text-2xl text-[#6b2d3e] block">100+</span>
                  <span className="text-[#2d2d2d]/60">godzin korepetycji</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className="font-[Work_Sans] text-base sm:text-lg leading-[1.9] text-[#2d2d2d]/80 space-y-6">
                <p className="drop-cap">
                  Cześć, mam na imię Ola! Jestem studentką matematyki z prawdziwą
                  pasją do tego przedmiotu. Od ponad dwóch lat prowadzę
                  korepetycje — zarówno indywidualne, jak i grupowe — pomagając
                  uczniom na różnych etapach edukacji odnaleźć drogę przez
                  zawiłości matematyki.
                </p>
                <p>
                  Doświadczenie zdobywałam między innymi w Matplanecie — jednej z
                  najbardziej rozpoznawalnych szkół matematycznych w Polsce. Praca
                  z dziesiątkami uczniów na różnych poziomach nauczyła mnie, jak
                  ważne jest indywidualne podejście — inne tempo, inna metoda,
                  inny sposób tłumaczenia dla każdego.
                </p>
                <p>
                  Teraz zaczynam działać na własnych zasadach. Otwieram swoją
                  praktykę korepetycyjną, bo chcę poświęcić każdemu uczniowi tyle
                  uwagi, ile naprawdę potrzebuje. Skupiam się na lekcjach
                  indywidualnych 1 na 1 — bo to one dają najlepsze efekty.
                </p>
                <p>
                  Prowadzę zajęcia zarówno online, jak i stacjonarnie — bo wierzę,
                  że wygodna forma nauki to fundament skutecznych korepetycji.
                  Niezależnie od tego, czy pracujemy przez interaktywną tablicę,
                  czy spotykamy się osobiście, cel jest zawsze ten sam: zrozumienie,
                  pewność siebie i lepsze wyniki.
                </p>
              </div>

              <div className="mt-12 border-t border-b border-[#6b2d3e]/15 py-8 relative">
                <div className="editorial-quote relative">
                  <p className="font-[Fraunces] text-xl sm:text-2xl italic text-[#6b2d3e] leading-relaxed pl-8 pr-8">
                    Wierzę, że każdy uczeń może polubić matematykę — wystarczy
                    odpowiedni przewodnik i cierpliwość.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-[#6b2d3e]/10" />
      </div>

      <section id="egzaminy" className="py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader category="Przygotowanie" title="Egzaminy" />

          <div className="space-y-10">
            {exams.map((exam, index) => (
              <div key={exam.title} className="group">
                <div
                  className="border border-[#6b2d3e]/10 p-8 sm:p-10 hover:border-[#c4654a]/30 transition-colors duration-500 cursor-pointer"
                  onClick={() =>
                    setExpandedExam(expandedExam === index ? null : index)
                  }
                >
                  <div className="grid sm:grid-cols-12 gap-6 items-start">
                    <div className="sm:col-span-2">
                      <span className="font-[Fraunces] text-6xl sm:text-7xl font-light text-[#c4654a]/20 leading-none">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="sm:col-span-7">
                      <h3 className="font-[Fraunces] text-2xl sm:text-3xl font-light text-[#6b2d3e] mb-2">
                        {exam.title}
                      </h3>
                      <p className="font-[Work_Sans] text-sm text-[#c4654a] tracking-wide mb-4">
                        {exam.subtitle}
                      </p>
                      <p className="font-[Work_Sans] text-[#2d2d2d]/70 leading-relaxed">
                        {exam.description}
                      </p>
                    </div>
                    <div className="sm:col-span-3 font-[Work_Sans] text-sm text-[#2d2d2d]/60 space-y-2">
                      <div className="flex justify-between border-b border-[#6b2d3e]/5 pb-2">
                        <span>Termin</span>
                        <span className="text-[#6b2d3e] font-medium">
                          {exam.date}
                        </span>
                      </div>
                      <div className="flex justify-between border-b border-[#6b2d3e]/5 pb-2">
                        <span>Czas</span>
                        <span className="text-[#6b2d3e] font-medium">
                          {exam.duration}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Wynik</span>
                        <span className="text-[#6b2d3e] font-medium">
                          {exam.points}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      expandedExam === index ? "max-h-96 mt-8" : "max-h-0"
                    }`}
                  >
                    <div className="border-t border-[#6b2d3e]/10 pt-8">
                      <span className="uppercase tracking-[0.2em] text-xs font-medium text-[#c4654a] font-[Work_Sans] block mb-4">
                        Zakres tematyczny
                      </span>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {exam.topics.map((topic) => (
                          <div
                            key={topic}
                            className="flex items-center gap-3 font-[Work_Sans] text-sm text-[#2d2d2d]/70"
                          >
                            <span className="w-1 h-1 rounded-full bg-[#c4654a] flex-shrink-0" />
                            {topic}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center gap-2 font-[Work_Sans] text-xs text-[#c4654a] tracking-wide">
                    <span>
                      {expandedExam === index ? "Zwiń" : "Pokaż zakres"}
                    </span>
                    <svg
                      className={`w-3 h-3 transition-transform duration-300 ${
                        expandedExam === index ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="oferta" className="bg-[#6b2d3e] text-[#f0ebe1] py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="uppercase tracking-[0.3em] text-xs font-medium text-[#c4654a] font-[Work_Sans]">
              Formy współpracy
            </span>
            <h2 className="font-[Fraunces] text-3xl sm:text-4xl md:text-5xl font-light text-[#f0ebe1] mt-3 mb-4">
              Oferta
            </h2>
            <div className="w-24 h-px bg-[#f0ebe1]/30 mx-auto" />
          </div>

          <div className="grid lg:grid-cols-2 relative">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-[#f0ebe1]/15" />

            <div className="lg:pr-16 pb-12 lg:pb-0">
              <span className="uppercase tracking-[0.2em] text-xs font-medium text-[#c4654a] font-[Work_Sans] block mb-2">
                Opcja pierwsza
              </span>
              <h3 className="font-[Fraunces] text-3xl font-light mb-6">
                Lekcje Online
              </h3>
              <p className="font-[Work_Sans] text-[#f0ebe1]/70 leading-relaxed mb-8">
                Nauka z dowolnego miejsca, z pełnym zestawem narzędzi cyfrowych
                wspierających proces edukacyjny.
              </p>
              <ul className="space-y-4">
                {onlineFeatures.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-4 font-[Work_Sans] text-sm text-[#f0ebe1]/80"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c4654a] mt-2 flex-shrink-0" />
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:pl-16 border-t lg:border-t-0 border-[#f0ebe1]/15 pt-12 lg:pt-0">
              <span className="uppercase tracking-[0.2em] text-xs font-medium text-[#c4654a] font-[Work_Sans] block mb-2">
                Opcja druga
              </span>
              <h3 className="font-[Fraunces] text-3xl font-light mb-6">
                Lekcje Stacjonarne
              </h3>
              <p className="font-[Work_Sans] text-[#f0ebe1]/70 leading-relaxed mb-8">
                Spotkania twarzą w twarz, które budują bezpośrednią relację
                i sprzyjają skupieniu.
              </p>
              <ul className="space-y-4">
                {stationaryFeatures.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-4 font-[Work_Sans] text-sm text-[#f0ebe1]/80"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c4654a] mt-2 flex-shrink-0" />
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <DiamondSeparator />

          <p className="text-center font-[Fraunces] text-lg italic text-[#f0ebe1]/60 max-w-lg mx-auto">
            Pierwsza lekcja jest zawsze bezpłatna — niezależnie od wybranej
            formy zajęć.
          </p>
        </div>
      </section>

      <section id="jak-wyglada-lekcja" className="py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader category="Proces" title="Jak wygląda lekcja" />

          <div className="space-y-0">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center py-16">
                  <div className="lg:col-span-3 relative">
                    <span className="font-[Fraunces] text-[8rem] sm:text-[10rem] font-light text-[#c4654a]/[0.07] leading-none select-none absolute -top-12 -left-4 lg:static lg:text-right">
                      {step.number}
                    </span>
                  </div>
                  <div className="lg:col-span-9">
                    <h3 className="font-[Fraunces] text-2xl sm:text-3xl font-light text-[#6b2d3e] mb-4">
                      {step.title}
                    </h3>
                    <p className="font-[Work_Sans] text-[#2d2d2d]/70 leading-relaxed max-w-xl text-lg">
                      {step.description}
                    </p>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="max-w-5xl mx-auto h-px bg-[#6b2d3e]/8" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-[#6b2d3e]/10" />
      </div>

      <section id="dla-kogo" className="py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader category="Uczniowie" title="Dla kogo" />

          <div className="max-w-3xl mx-auto">
            {studentProfiles.map((profile, index) => (
              <div key={profile.label}>
                <div className="grid sm:grid-cols-12 gap-4 sm:gap-8 items-baseline py-6">
                  <div className="sm:col-span-1">
                    <span className="font-[Fraunces] text-lg text-[#c4654a]/40 font-light">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="sm:col-span-5">
                    <span className="font-[Fraunces] text-xl text-[#6b2d3e]">
                      {profile.label}
                    </span>
                  </div>
                  <div className="sm:col-span-6">
                    <span className="font-[Work_Sans] text-[#2d2d2d]/60 text-sm">
                      {profile.detail}
                    </span>
                  </div>
                </div>
                {index < studentProfiles.length - 1 && (
                  <div className="h-px bg-[#6b2d3e]/8" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="opinie" className="bg-[#e8e0d4] py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader category="Głosy rodziców" title="Opinie" />

          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-[#f0ebe1] p-8 sm:p-10 relative group hover:shadow-lg transition-shadow duration-500"
              >
                <div className="mb-8 relative">
                  <span className="font-[Fraunces] text-7xl italic text-[#c4654a]/20 leading-none select-none block">
                    &ldquo;
                  </span>
                </div>
                <p className="font-[Work_Sans] text-[#2d2d2d]/75 leading-[1.9] italic mb-8">
                  {testimonial.quote}
                </p>
                <div className="border-t border-[#6b2d3e]/10 pt-6">
                  <span className="font-[Fraunces] text-lg text-[#6b2d3e] block">
                    {testimonial.name}
                  </span>
                  <span className="font-[Work_Sans] text-xs tracking-widest uppercase text-[#c4654a]">
                    {testimonial.context}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="kontakt" className="py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            category="Zacznijmy współpracę"
            title="Kontakt"
          />

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <p className="font-[Fraunces] text-2xl sm:text-3xl font-light text-[#6b2d3e] leading-relaxed mb-8">
                Masz pytania? Chcesz umówić bezpłatną pierwszą lekcję?
              </p>
              <p className="font-[Work_Sans] text-[#2d2d2d]/70 leading-relaxed mb-12">
                Napisz do mnie przez formularz lub skontaktuj się bezpośrednio.
                Odpowiadam szybko — zwykle w ciągu kilku godzin.
              </p>

              <div className="space-y-6 font-[Work_Sans]">
                <div className="flex items-center gap-4">
                  <span className="w-10 h-10 border border-[#6b2d3e]/15 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-4 h-4 text-[#c4654a]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                  </span>
                  <a
                    href="mailto:olamatysek@gmail.com"
                    className="text-[#2d2d2d]/80 hover:text-[#6b2d3e] transition-colors duration-300"
                  >
                    olamatysek@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <span className="w-10 h-10 border border-[#6b2d3e]/15 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-4 h-4 text-[#c4654a]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                      />
                    </svg>
                  </span>
                  <a
                    href="tel:+48123456789"
                    className="text-[#2d2d2d]/80 hover:text-[#6b2d3e] transition-colors duration-300"
                  >
                    +48 123 456 789
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <span className="w-10 h-10 border border-[#6b2d3e]/15 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-4 h-4 text-[#c4654a]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                  </span>
                  <span className="text-[#2d2d2d]/80">
                    Online / Stacjonarnie
                  </span>
                </div>
              </div>
            </div>

            <div>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="space-y-6 font-[Work_Sans]"
              >
                <div>
                  <label className="block text-xs uppercase tracking-[0.2em] text-[#2d2d2d]/50 mb-2">
                    Imię i nazwisko
                  </label>
                  <input
                    type="text"
                    className="w-full border-b border-[#6b2d3e]/20 bg-transparent py-3 text-[#2d2d2d] focus:outline-none focus:border-[#c4654a] transition-colors duration-300 placeholder:text-[#2d2d2d]/25"
                    placeholder="Jan Kowalski"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-[0.2em] text-[#2d2d2d]/50 mb-2">
                    Adres e-mail
                  </label>
                  <input
                    type="email"
                    className="w-full border-b border-[#6b2d3e]/20 bg-transparent py-3 text-[#2d2d2d] focus:outline-none focus:border-[#c4654a] transition-colors duration-300 placeholder:text-[#2d2d2d]/25"
                    placeholder="jan@przykład.pl"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-[0.2em] text-[#2d2d2d]/50 mb-2">
                    Numer telefonu
                  </label>
                  <input
                    type="tel"
                    className="w-full border-b border-[#6b2d3e]/20 bg-transparent py-3 text-[#2d2d2d] focus:outline-none focus:border-[#c4654a] transition-colors duration-300 placeholder:text-[#2d2d2d]/25"
                    placeholder="+48 XXX XXX XXX"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-[0.2em] text-[#2d2d2d]/50 mb-2">
                    Wiadomość
                  </label>
                  <textarea
                    rows={4}
                    className="w-full border-b border-[#6b2d3e]/20 bg-transparent py-3 text-[#2d2d2d] focus:outline-none focus:border-[#c4654a] transition-colors duration-300 resize-none placeholder:text-[#2d2d2d]/25"
                    placeholder="Opowiedz o potrzebach Twojego dziecka..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#6b2d3e] text-[#f0ebe1] font-medium tracking-wide py-4 hover:bg-[#5a2534] transition-colors duration-300 mt-4"
                >
                  Wyślij wiadomość
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#2d2d2d] text-[#f0ebe1]/60 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <span className="font-[Fraunces] text-xl font-light text-[#f0ebe1] block mb-4">
                Ola<span className="text-[#c4654a]">.</span>matematyka
              </span>
              <p className="font-[Work_Sans] text-sm leading-relaxed text-[#f0ebe1]/40">
                Korepetycje z matematyki dla uczniów szkół podstawowych,
                licealistów i maturzystów. Online i stacjonarnie.
              </p>
            </div>

            <div>
              <span className="uppercase tracking-[0.2em] text-xs font-medium text-[#c4654a] font-[Work_Sans] block mb-4">
                Nawigacja
              </span>
              <div className="grid grid-cols-2 gap-2 font-[Work_Sans] text-sm">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-[#f0ebe1]/50 hover:text-[#f0ebe1] transition-colors duration-300 py-1"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <span className="uppercase tracking-[0.2em] text-xs font-medium text-[#c4654a] font-[Work_Sans] block mb-4">
                Social media
              </span>
              <div className="flex gap-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-[#f0ebe1]/15 flex items-center justify-center hover:border-[#c4654a] hover:text-[#c4654a] transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-[#f0ebe1]/15 flex items-center justify-center hover:border-[#c4654a] hover:text-[#c4654a] transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-[#f0ebe1]/15 flex items-center justify-center hover:border-[#c4654a] hover:text-[#c4654a] transition-colors duration-300"
                  aria-label="TikTok"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-[#f0ebe1]/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-[Work_Sans] text-xs text-[#f0ebe1]/30">
              &copy; {new Date().getFullYear()} Ola Matysek. Wszelkie prawa
              zastrzeżone.
            </p>
            <div className="flex items-center gap-3 font-[Work_Sans] text-xs text-[#f0ebe1]/30">
              <span>olamatysek@gmail.com</span>
              <span className="w-1 h-1 rounded-full bg-[#c4654a]/40" />
              <span>+48 123 456 789</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
