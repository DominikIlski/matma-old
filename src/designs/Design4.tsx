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

export default function Design4() {
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

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="min-h-screen text-[#3d1f3d] font-[Nunito_Sans]"
      style={{ scrollBehavior: "smooth" }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600&family=Nunito+Sans:ital,opsz,wght@0,6..12,300;0,6..12,400;0,6..12,500;0,6..12,600;0,6..12,700;1,6..12,300;1,6..12,400&display=swap"
        rel="stylesheet"
      />

      <style>{`
        html { scroll-behavior: smooth; }

        .gradient-underline {
          background-image: linear-gradient(90deg, #c27070, #3d1f3d);
          background-size: 100% 2px;
          background-position: bottom;
          background-repeat: no-repeat;
          transition: background-size 0.4s ease;
        }

        .gradient-underline:focus {
          background-image: linear-gradient(90deg, #3d1f3d, #c27070);
          background-size: 100% 3px;
        }

        @keyframes softPulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.7; }
        }

        .orb-pulse {
          animation: softPulse 6s ease-in-out infinite;
        }

        @keyframes floatOrb {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        .orb-float {
          animation: floatOrb 8s ease-in-out infinite;
        }
      `}</style>

      <div
        className="fixed top-0 left-0 right-0 h-[2px] z-[60]"
        style={{
          background: "linear-gradient(90deg, #c27070, #3d1f3d, #c27070)",
        }}
      />

      <nav
        className={`fixed top-[2px] left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#fefcf9]/90 backdrop-blur-lg shadow-[0_4px_30px_rgba(194,112,112,0.08)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => scrollTo("#hero")}
            className="font-[Cormorant_Garamond] text-xl font-medium text-[#3d1f3d] tracking-wide"
          >
            Ola<span className="text-[#c27070]">.</span>matematyka
          </button>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-[13px] font-medium tracking-wide text-[#6b6370] hover:text-[#c27070] transition-colors duration-300"
              >
                {link.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex flex-col gap-1.5 w-8 h-8 items-center justify-center"
            aria-label="Menu"
          >
            <span
              className={`block w-6 h-px bg-[#3d1f3d] transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-[3.5px]" : ""
              }`}
            />
            <span
              className={`block w-6 h-px bg-[#3d1f3d] transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-px bg-[#3d1f3d] transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-[3.5px]" : ""
              }`}
            />
          </button>
        </div>

        <div
          className={`lg:hidden fixed inset-0 top-0 transition-all duration-500 flex flex-col items-center justify-center gap-8 ${
            menuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
          style={{
            background:
              "linear-gradient(135deg, #fefcf9 0%, #f5e6e6 50%, #fefcf9 100%)",
          }}
        >
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-5 right-6 w-8 h-8 flex items-center justify-center"
            aria-label="Zamknij menu"
          >
            <span className="block w-6 h-px bg-[#3d1f3d] rotate-45 absolute" />
            <span className="block w-6 h-px bg-[#3d1f3d] -rotate-45 absolute" />
          </button>
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="font-[Cormorant_Garamond] text-2xl font-light text-[#3d1f3d] hover:text-[#c27070] transition-colors duration-300"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("#kontakt")}
            className="mt-4 px-8 py-3 text-sm font-semibold tracking-wide text-[#fefcf9] rounded-full"
            style={{
              background: "linear-gradient(135deg, #c27070, #3d1f3d)",
            }}
          >
            Umów lekcję
          </button>
        </div>
      </nav>

      <section
        id="hero"
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse at 30% 20%, rgba(194,112,112,0.15) 0%, rgba(254,252,249,1) 60%, rgba(254,252,249,1) 100%)",
        }}
      >
        <div
          className="absolute top-20 right-[15%] w-64 h-64 rounded-full orb-float orb-pulse pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(194,112,112,0.12) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-32 left-[10%] w-80 h-80 rounded-full orb-float pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(61,31,61,0.06) 0%, transparent 70%)",
            animationDelay: "3s",
          }}
        />
        <div
          className="absolute top-1/2 right-[5%] w-40 h-40 rounded-full orb-pulse pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(194,112,112,0.08) 0%, transparent 70%)",
            animationDelay: "1.5s",
          }}
        />

        <div className="relative max-w-6xl mx-auto px-6 pt-32 pb-20 w-full">
          <div className="max-w-xl">
            <span className="uppercase tracking-[0.3em] text-xs font-semibold text-[#c27070] block mb-8">
              Korepetycje z matematyki
            </span>

            <h1 className="font-[Cormorant_Garamond] text-[3.2rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] font-semibold leading-[0.95] tracking-tight text-[#3d1f3d] mb-10">
              Matematyka
              <br />
              <span className="font-light italic">bez</span>
              <br />
              <span className="text-[#c27070]">stresu</span>
              <span className="text-[#c27070]">.</span>
            </h1>

            <div
              className="w-16 h-[2px] mb-8"
              style={{
                background: "linear-gradient(90deg, #c27070, #3d1f3d)",
              }}
            />

            <p className="text-lg text-[#6b6370] leading-relaxed max-w-md mb-10 font-light">
              Indywidualne lekcje, które zmieniają oceny i&nbsp;podejście do
              przedmiotu. Przygotowanie do egzaminów z&nbsp;pewną ręką
              i&nbsp;spokojem.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <button
                onClick={() => scrollTo("#kontakt")}
                className="px-8 py-4 font-semibold tracking-wide text-[#fefcf9] text-sm uppercase rounded-full transition-all duration-300 hover:shadow-[0_8px_30px_rgba(194,112,112,0.3)]"
                style={{
                  background: "linear-gradient(135deg, #c27070, #3d1f3d)",
                }}
              >
                Umów bezpłatną konsultację
              </button>
              <button
                onClick={() => scrollTo("#oferta")}
                className="text-[#6b6370] font-medium tracking-wide hover:text-[#c27070] transition-colors duration-300 text-sm uppercase border-b border-[#6b6370]/30 hover:border-[#c27070] pb-1"
              >
                Poznaj ofertę
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-6 mt-14 text-sm text-[#6b6370]">
              <span>2+ lata doświadczenia</span>
              <span className="w-1 h-1 rounded-full bg-[#c27070]" />
              <span>100+ godzin lekcji</span>
              <span className="w-1 h-1 rounded-full bg-[#c27070]" />
              <span>Online & stacjonarnie</span>
            </div>
          </div>
        </div>
      </section>

      <section
        id="o-mnie"
        className="py-24 lg:py-32 relative"
        style={{
          background:
            "linear-gradient(180deg, #fefcf9 0%, rgba(245,230,230,0.3) 50%, #fefcf9 100%)",
        }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="uppercase tracking-[0.3em] text-xs font-semibold text-[#c27070]">
              Poznaj swoją korepetytorkę
            </span>
            <h2 className="font-[Cormorant_Garamond] text-3xl sm:text-4xl md:text-5xl font-light text-[#3d1f3d] mt-3 mb-4">
              O mnie
            </h2>
            <div
              className="w-20 h-[1px] mx-auto"
              style={{
                background: "linear-gradient(90deg, transparent, #c27070, transparent)",
              }}
            />
          </div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[3/4] max-w-md mx-auto lg:mx-0 overflow-hidden rounded-2xl shadow-[0_20px_60px_rgba(194,112,112,0.15)]">
                <img
                  src="/ola.jpg"
                  alt="Ola — korepetytorka matematyki"
                  className="w-full h-full object-cover object-top"
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to bottom, transparent 60%, rgba(61,31,61,0.15) 100%)",
                  }}
                />
              </div>
              <div
                className="absolute -top-6 -left-6 w-24 h-24 font-[Cormorant_Garamond] text-[8rem] leading-none font-bold text-[#c27070]/15 select-none pointer-events-none hidden lg:block"
                style={{ zIndex: 10 }}
              >
                C
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="text-base sm:text-lg leading-[1.9] text-[#6b6370] space-y-6">
                <p>
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

              <div className="mt-10 grid grid-cols-3 gap-4">
                <div className="text-center p-5 rounded-xl bg-[#fefcf9] shadow-[0_4px_20px_rgba(194,112,112,0.08)]">
                  <span className="font-[Cormorant_Garamond] text-3xl font-semibold text-[#3d1f3d] block">
                    2+
                  </span>
                  <span className="text-xs text-[#6b6370]">lata doświadczenia</span>
                </div>
                <div className="text-center p-5 rounded-xl bg-[#fefcf9] shadow-[0_4px_20px_rgba(194,112,112,0.08)]">
                  <span className="font-[Cormorant_Garamond] text-3xl font-semibold text-[#3d1f3d] block">
                    100+
                  </span>
                  <span className="text-xs text-[#6b6370]">godzin lekcji</span>
                </div>
                <div className="text-center p-5 rounded-xl bg-[#fefcf9] shadow-[0_4px_20px_rgba(194,112,112,0.08)]">
                  <span className="font-[Cormorant_Garamond] text-3xl font-semibold text-[#3d1f3d] block">
                    1:1
                  </span>
                  <span className="text-xs text-[#6b6370]">
                    indywidualne podejście
                  </span>
                </div>
              </div>

              <div className="mt-10 py-8 relative">
                <div
                  className="absolute left-0 top-0 bottom-0 w-[2px]"
                  style={{
                    background: "linear-gradient(to bottom, #c27070, #3d1f3d)",
                  }}
                />
                <div className="pl-8">
                  <p className="font-[Cormorant_Garamond] text-xl sm:text-2xl italic text-[#3d1f3d] leading-relaxed">
                    „Wierzę, że każdy uczeń może polubić matematykę — wystarczy
                    odpowiedni przewodnik i&nbsp;cierpliwość."
                  </p>
                  <span className="block mt-3 text-xs tracking-[0.2em] uppercase text-[#c27070] font-semibold">
                    — Ola
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="egzaminy"
        className="py-24 lg:py-32 relative"
        style={{
          background:
            "linear-gradient(180deg, #fefcf9 0%, rgba(245,230,230,0.25) 100%)",
        }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="uppercase tracking-[0.3em] text-xs font-semibold text-[#c27070]">
              Przygotowanie
            </span>
            <h2 className="font-[Cormorant_Garamond] text-3xl sm:text-4xl md:text-5xl font-light text-[#3d1f3d] mt-3 mb-4">
              Egzaminy
            </h2>
            <div
              className="w-20 h-[1px] mx-auto"
              style={{
                background: "linear-gradient(90deg, transparent, #c27070, transparent)",
              }}
            />
          </div>

          <div className="space-y-8">
            {exams.map((exam, index) => (
              <div
                key={exam.title}
                className="relative"
                style={{
                  marginLeft: `${index * 20}px`,
                  marginRight: `${(exams.length - 1 - index) * 20}px`,
                }}
              >
                <div
                  className="rounded-2xl p-8 sm:p-10 cursor-pointer transition-all duration-500 hover:shadow-[0_12px_40px_rgba(194,112,112,0.12)]"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(254,252,249,0.9) 0%, rgba(245,230,230,0.4) 100%)",
                    boxShadow: "0 4px 20px rgba(194,112,112,0.06)",
                  }}
                  onClick={() =>
                    setExpandedExam(expandedExam === index ? null : index)
                  }
                >
                  <div className="grid sm:grid-cols-12 gap-6 items-start">
                    <div className="sm:col-span-2">
                      <span className="font-[Cormorant_Garamond] text-6xl sm:text-7xl font-light text-[#c27070]/20 leading-none">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="sm:col-span-7">
                      <h3 className="font-[Cormorant_Garamond] text-2xl sm:text-3xl font-medium text-[#3d1f3d] mb-2">
                        {exam.title}
                      </h3>
                      <p className="text-sm text-[#c27070] tracking-wide mb-4 font-medium">
                        {exam.subtitle}
                      </p>
                      <p className="text-[#6b6370] leading-relaxed">
                        {exam.description}
                      </p>
                    </div>
                    <div className="sm:col-span-3 text-sm text-[#6b6370] space-y-2">
                      <div className="flex justify-between border-b border-[#c27070]/10 pb-2">
                        <span>Termin</span>
                        <span className="text-[#3d1f3d] font-medium">
                          {exam.date}
                        </span>
                      </div>
                      <div className="flex justify-between border-b border-[#c27070]/10 pb-2">
                        <span>Czas</span>
                        <span className="text-[#3d1f3d] font-medium">
                          {exam.duration}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Wynik</span>
                        <span className="text-[#3d1f3d] font-medium">
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
                    <div
                      className="pt-8"
                      style={{
                        borderTop: "1px solid rgba(194,112,112,0.15)",
                      }}
                    >
                      <span className="uppercase tracking-[0.2em] text-xs font-semibold text-[#c27070] block mb-4">
                        Zakres tematyczny
                      </span>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {exam.topics.map((topic) => (
                          <div
                            key={topic}
                            className="flex items-center gap-3 text-sm text-[#6b6370]"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#c27070] flex-shrink-0" />
                            {topic}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center gap-2 text-xs text-[#c27070] tracking-wide font-medium">
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

      <section
        id="oferta"
        className="py-24 lg:py-32 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, rgba(245,230,230,0.25) 0%, #fefcf9 30%, rgba(245,230,230,0.2) 100%)",
        }}
      >
        <div
          className="absolute top-1/4 right-0 w-72 h-72 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(194,112,112,0.06) 0%, transparent 70%)",
          }}
        />

        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="text-center mb-16">
            <span className="uppercase tracking-[0.3em] text-xs font-semibold text-[#c27070]">
              Formy współpracy
            </span>
            <h2 className="font-[Cormorant_Garamond] text-3xl sm:text-4xl md:text-5xl font-light text-[#3d1f3d] mt-3 mb-4">
              Oferta
            </h2>
            <div
              className="w-20 h-[1px] mx-auto"
              style={{
                background: "linear-gradient(90deg, transparent, #c27070, transparent)",
              }}
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-0 relative max-w-5xl mx-auto">
            <div
              className="hidden lg:block absolute left-1/2 top-8 bottom-8 w-[2px] -translate-x-1/2"
              style={{
                background: "linear-gradient(to bottom, transparent, #c27070, #3d1f3d, #c27070, transparent)",
              }}
            />

            <div
              className="p-8 sm:p-10 lg:p-12 rounded-2xl lg:rounded-r-none min-h-[500px] flex flex-col"
              style={{
                background:
                  "linear-gradient(180deg, rgba(254,252,249,0.95) 0%, rgba(245,230,230,0.3) 100%)",
                boxShadow: "0 8px 30px rgba(194,112,112,0.08)",
              }}
            >
              <span className="uppercase tracking-[0.2em] text-xs font-semibold text-[#c27070] block mb-2">
                Opcja pierwsza
              </span>
              <h3 className="font-[Cormorant_Garamond] text-3xl font-medium text-[#3d1f3d] mb-6">
                Lekcje Online
              </h3>
              <ul className="space-y-4 flex-1">
                {onlineFeatures.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-4 text-sm text-[#6b6370]"
                  >
                    <span
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{
                        background: "linear-gradient(135deg, #c27070, #3d1f3d)",
                      }}
                    >
                      <svg
                        className="w-3 h-3 text-[#fefcf9]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth={3}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="p-8 sm:p-10 lg:p-12 rounded-2xl lg:rounded-l-none min-h-[500px] flex flex-col border-t lg:border-t-0 border-[#c27070]/10"
              style={{
                background:
                  "linear-gradient(180deg, rgba(245,230,230,0.3) 0%, rgba(254,252,249,0.95) 100%)",
                boxShadow: "0 8px 30px rgba(194,112,112,0.08)",
              }}
            >
              <span className="uppercase tracking-[0.2em] text-xs font-semibold text-[#c27070] block mb-2">
                Opcja druga
              </span>
              <h3 className="font-[Cormorant_Garamond] text-3xl font-medium text-[#3d1f3d] mb-6">
                Lekcje Stacjonarne
              </h3>
              <ul className="space-y-4 flex-1">
                {stationaryFeatures.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-4 text-sm text-[#6b6370]"
                  >
                    <span
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{
                        background: "linear-gradient(135deg, #3d1f3d, #c27070)",
                      }}
                    >
                      <svg
                        className="w-3 h-3 text-[#fefcf9]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth={3}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="text-center font-[Cormorant_Garamond] text-lg italic text-[#6b6370] max-w-lg mx-auto mt-12">
            Pierwsza lekcja jest zawsze bezpłatna — niezależnie od wybranej formy
            zajęć.
          </p>
        </div>
      </section>

      <section
        id="jak-wyglada-lekcja"
        className="py-24 lg:py-32 relative"
        style={{
          background:
            "linear-gradient(180deg, #fefcf9 0%, rgba(245,230,230,0.2) 50%, #fefcf9 100%)",
        }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="uppercase tracking-[0.3em] text-xs font-semibold text-[#c27070]">
              Proces
            </span>
            <h2 className="font-[Cormorant_Garamond] text-3xl sm:text-4xl md:text-5xl font-light text-[#3d1f3d] mt-3 mb-4">
              Jak wygląda lekcja
            </h2>
            <div
              className="w-20 h-[1px] mx-auto"
              style={{
                background: "linear-gradient(90deg, transparent, #c27070, transparent)",
              }}
            />
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div
              className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-px lg:-translate-x-1/2 hidden sm:block"
              style={{
                background:
                  "linear-gradient(to bottom, transparent, #c27070, #3d1f3d, #c27070, transparent)",
              }}
            />

            <div className="space-y-16 sm:space-y-20">
              {steps.map((step, index) => {
                const isEven = index % 2 === 0;
                return (
                  <div key={step.number} className="relative">
                    <div
                      className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                        isEven ? "" : "lg:direction-rtl"
                      }`}
                    >
                      <div
                        className={`${
                          isEven ? "lg:text-right lg:order-1" : "lg:text-left lg:order-2"
                        } pl-16 sm:pl-20 lg:pl-0`}
                      >
                        <h3 className="font-[Cormorant_Garamond] text-2xl sm:text-3xl font-medium text-[#3d1f3d] mb-3">
                          {step.title}
                        </h3>
                        <p className="text-[#6b6370] leading-relaxed">
                          {step.description}
                        </p>
                      </div>

                      <div
                        className={`${
                          isEven ? "lg:order-2" : "lg:order-1"
                        } hidden lg:block`}
                      />
                    </div>

                    <div
                      className="absolute left-0 sm:left-0 lg:left-1/2 top-1 lg:-translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center z-10"
                      style={{
                        background: "linear-gradient(135deg, #c27070, #3d1f3d)",
                        boxShadow: "0 4px 15px rgba(194,112,112,0.25)",
                      }}
                    >
                      <span className="text-[#fefcf9] font-[Cormorant_Garamond] text-lg font-semibold">
                        {step.number}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section
        id="dla-kogo"
        className="py-24 lg:py-32 relative"
        style={{
          background:
            "linear-gradient(180deg, #fefcf9 0%, rgba(245,230,230,0.3) 100%)",
        }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="uppercase tracking-[0.3em] text-xs font-semibold text-[#c27070]">
              Uczniowie
            </span>
            <h2 className="font-[Cormorant_Garamond] text-3xl sm:text-4xl md:text-5xl font-light text-[#3d1f3d] mt-3 mb-4">
              Dla kogo
            </h2>
            <div
              className="w-20 h-[1px] mx-auto"
              style={{
                background: "linear-gradient(90deg, transparent, #c27070, transparent)",
              }}
            />
          </div>

          <div className="max-w-3xl mx-auto">
            {studentProfiles.map((profile, index) => (
              <div key={profile.label}>
                <div className="grid sm:grid-cols-12 gap-4 sm:gap-8 items-baseline py-7">
                  <div className="sm:col-span-1">
                    <span className="font-[Cormorant_Garamond] text-lg text-[#c27070]/40 font-light">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="sm:col-span-5">
                    <span className="font-[Cormorant_Garamond] text-xl text-[#3d1f3d] font-medium">
                      {profile.label}
                    </span>
                  </div>
                  <div className="sm:col-span-6">
                    <span className="text-[#6b6370] text-sm">
                      {profile.detail}
                    </span>
                  </div>
                </div>
                {index < studentProfiles.length - 1 && (
                  <div
                    className="h-px"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent, rgba(194,112,112,0.2), transparent)",
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="opinie"
        className="py-24 lg:py-32 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, rgba(245,230,230,0.3) 0%, #fefcf9 50%, rgba(245,230,230,0.2) 100%)",
        }}
      >
        <div
          className="absolute -top-20 -left-20 w-64 h-64 rounded-full pointer-events-none orb-pulse"
          style={{
            background:
              "radial-gradient(circle, rgba(194,112,112,0.08) 0%, transparent 70%)",
          }}
        />

        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="text-center mb-16">
            <span className="uppercase tracking-[0.3em] text-xs font-semibold text-[#c27070]">
              Głosy rodziców
            </span>
            <h2 className="font-[Cormorant_Garamond] text-3xl sm:text-4xl md:text-5xl font-light text-[#3d1f3d] mt-3 mb-4">
              Opinie
            </h2>
            <div
              className="w-20 h-[1px] mx-auto"
              style={{
                background: "linear-gradient(90deg, transparent, #c27070, transparent)",
              }}
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="p-8 sm:p-10 rounded-2xl transition-all duration-500 hover:shadow-[0_12px_40px_rgba(194,112,112,0.12)]"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(254,252,249,1) 0%, rgba(245,230,230,0.2) 100%)",
                  boxShadow: "0 4px 20px rgba(194,112,112,0.06)",
                }}
              >
                <p className="font-[Cormorant_Garamond] text-xl sm:text-2xl italic text-[#3d1f3d] leading-relaxed mb-8">
                  „{testimonial.quote}"
                </p>
                <div className="text-right">
                  <span className="font-[Cormorant_Garamond] text-lg text-[#3d1f3d] block font-medium">
                    {testimonial.name}
                  </span>
                  <span className="text-xs tracking-[0.15em] uppercase text-[#c27070] font-medium">
                    {testimonial.context}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="kontakt"
        className="py-24 lg:py-32 relative"
        style={{
          background:
            "linear-gradient(180deg, #fefcf9 0%, rgba(245,230,230,0.25) 50%, #fefcf9 100%)",
        }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="uppercase tracking-[0.3em] text-xs font-semibold text-[#c27070]">
              Zacznijmy współpracę
            </span>
            <h2 className="font-[Cormorant_Garamond] text-3xl sm:text-4xl md:text-5xl font-light text-[#3d1f3d] mt-3 mb-4">
              Kontakt
            </h2>
            <div
              className="w-20 h-[1px] mx-auto"
              style={{
                background: "linear-gradient(90deg, transparent, #c27070, transparent)",
              }}
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <p className="font-[Cormorant_Garamond] text-2xl sm:text-3xl font-light text-[#3d1f3d] leading-relaxed mb-8">
                Masz pytania? Chcesz umówić bezpłatną pierwszą lekcję?
              </p>
              <p className="text-[#6b6370] leading-relaxed mb-12">
                Napisz do mnie przez formularz lub skontaktuj się bezpośrednio.
                Odpowiadam szybko — zwykle w ciągu kilku godzin.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <span
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(194,112,112,0.15), rgba(61,31,61,0.1))",
                    }}
                  >
                    <svg
                      className="w-4 h-4 text-[#c27070]"
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
                    className="text-[#6b6370] hover:text-[#c27070] transition-colors duration-300"
                  >
                    olamatysek@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <span
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(194,112,112,0.15), rgba(61,31,61,0.1))",
                    }}
                  >
                    <svg
                      className="w-4 h-4 text-[#c27070]"
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
                    className="text-[#6b6370] hover:text-[#c27070] transition-colors duration-300"
                  >
                    +48 123 456 789
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <span
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(194,112,112,0.15), rgba(61,31,61,0.1))",
                    }}
                  >
                    <svg
                      className="w-4 h-4 text-[#c27070]"
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
                  <span className="text-[#6b6370]">Online / Stacjonarnie</span>
                </div>
              </div>
            </div>

            <div>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="space-y-8"
              >
                <div>
                  <label className="block text-xs uppercase tracking-[0.2em] text-[#6b6370] mb-3 font-medium">
                    Imię i nazwisko
                  </label>
                  <input
                    type="text"
                    className="w-full bg-transparent py-3 text-[#3d1f3d] focus:outline-none placeholder:text-[#6b6370]/30 gradient-underline"
                    placeholder="Jan Kowalski"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-[0.2em] text-[#6b6370] mb-3 font-medium">
                    Adres e-mail
                  </label>
                  <input
                    type="email"
                    className="w-full bg-transparent py-3 text-[#3d1f3d] focus:outline-none placeholder:text-[#6b6370]/30 gradient-underline"
                    placeholder="jan@przyklad.pl"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-[0.2em] text-[#6b6370] mb-3 font-medium">
                    Numer telefonu
                  </label>
                  <input
                    type="tel"
                    className="w-full bg-transparent py-3 text-[#3d1f3d] focus:outline-none placeholder:text-[#6b6370]/30 gradient-underline"
                    placeholder="+48 XXX XXX XXX"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-[0.2em] text-[#6b6370] mb-3 font-medium">
                    Wiadomość
                  </label>
                  <textarea
                    rows={4}
                    className="w-full bg-transparent py-3 text-[#3d1f3d] focus:outline-none resize-none placeholder:text-[#6b6370]/30 gradient-underline"
                    placeholder="Opowiedz o potrzebach Twojego dziecka..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 font-semibold tracking-wide text-[#fefcf9] rounded-full transition-all duration-300 hover:shadow-[0_8px_30px_rgba(194,112,112,0.3)] text-sm uppercase"
                  style={{
                    background: "linear-gradient(135deg, #c27070, #3d1f3d)",
                  }}
                >
                  Wyślij wiadomość
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer
        className="py-16 relative"
        style={{
          background: "linear-gradient(180deg, #3d1f3d 0%, #2a132a 100%)",
        }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <span className="font-[Cormorant_Garamond] text-xl font-medium text-[#fefcf9] block mb-4">
                Ola<span className="text-[#c27070]">.</span>matematyka
              </span>
              <p className="text-sm leading-relaxed text-[#fefcf9]/40">
                Korepetycje z matematyki dla uczniów szkół podstawowych,
                licealistów i maturzystów. Online i stacjonarnie.
              </p>
            </div>

            <div>
              <span className="uppercase tracking-[0.2em] text-xs font-semibold text-[#c27070] block mb-4">
                Nawigacja
              </span>
              <div className="grid grid-cols-2 gap-2 text-sm">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => scrollTo(link.href)}
                    className="text-[#fefcf9]/50 hover:text-[#fefcf9] transition-colors duration-300 py-1 text-left"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <span className="uppercase tracking-[0.2em] text-xs font-semibold text-[#c27070] block mb-4">
                Social media
              </span>
              <div className="flex gap-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-[#fefcf9]/15 flex items-center justify-center hover:border-[#c27070] hover:text-[#c27070] text-[#fefcf9]/60 transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-[#fefcf9]/15 flex items-center justify-center hover:border-[#c27070] hover:text-[#c27070] text-[#fefcf9]/60 transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-[#fefcf9]/15 flex items-center justify-center hover:border-[#c27070] hover:text-[#c27070] text-[#fefcf9]/60 transition-colors duration-300"
                  aria-label="TikTok"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div
            className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
            style={{
              borderTop: "1px solid rgba(254,252,249,0.08)",
            }}
          >
            <p className="text-xs text-[#fefcf9]/30">
              &copy; {new Date().getFullYear()} Ola Matysek. Wszelkie prawa
              zastrzeżone.
            </p>
            <div className="flex items-center gap-3 text-xs text-[#fefcf9]/30">
              <span>olamatysek@gmail.com</span>
              <span className="w-1 h-1 rounded-full bg-[#c27070]/40" />
              <span>+48 123 456 789</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
