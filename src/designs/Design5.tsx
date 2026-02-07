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
  {
    label: "Maturzyści",
    detail: "poziom podstawowy i rozszerzony",
  },
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

const stacjonarneFeatures = [
  "Bezpośredni kontakt — łatwiejsza komunikacja i motywacja",
  "Praca przy tablicy i na kartce — klasyczna metoda nauki",
  "Pełne skupienie bez rozpraszaczy ekranowych",
  "Natychmiastowa pomoc przy rozwiązywaniu zadań",
  "Budowanie relacji i zaufania między uczniem a korepetytorem",
];

function Design5() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openExam, setOpenExam] = useState<number | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  const scrollTo = (href: string) => {
    setDrawerOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const midnight = "#12121a";
  const warmDark = "#1a1a24";
  const offWhite = "#f2ede8";
  const gold = "#c9a55c";

  return (
    <div
      className="min-h-screen scroll-smooth overflow-x-hidden"
      style={{ background: midnight, color: offWhite, scrollBehavior: "smooth" }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Libre+Franklin:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <style>{`
        .gold-rule {
          height: 1px;
          background: linear-gradient(90deg, transparent, ${gold}, transparent);
        }
        .gold-glow-card {
          border: 1px solid ${gold}33;
          transition: all 0.5s ease;
        }
        .gold-glow-card:hover {
          border-color: ${gold}66;
          box-shadow: 0 0 20px ${gold}15, 0 0 40px ${gold}08;
        }
        .gold-dot-pattern {
          background-image: radial-gradient(${gold}0d 1px, transparent 1px);
          background-size: 24px 24px;
        }
        .gold-dot-pattern-lg {
          background-image: radial-gradient(${gold}0a 1.5px, transparent 1.5px);
          background-size: 40px 40px;
        }
        .drawer-overlay {
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
        }
        .gold-focus:focus {
          outline: none;
          border-color: ${gold};
          box-shadow: 0 0 0 2px ${gold}40;
        }
        .gold-input {
          background: ${midnight};
          border: 1px solid ${gold}25;
          color: ${offWhite};
          transition: all 0.3s ease;
        }
        .gold-input::placeholder {
          color: ${offWhite}40;
        }
        .gold-input:focus {
          outline: none;
          border-color: ${gold};
          box-shadow: 0 0 0 2px ${gold}30;
        }
        .warm-overlay {
          background: linear-gradient(135deg, ${gold}15, ${warmDark}cc);
        }
      `}</style>

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "py-3"
            : "py-5"
        }`}
        style={{
          background: scrolled ? `${midnight}ee` : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-xl tracking-wide"
            style={{ fontFamily: "'DM Serif Display', serif", color: offWhite }}
          >
            matma<span style={{ color: gold }}>.</span>
          </button>

          <button
            onClick={() => setDrawerOpen(true)}
            className="text-xs font-medium tracking-[0.2em] uppercase transition-colors duration-300 hover:opacity-80"
            style={{ fontFamily: "'Libre Franklin', sans-serif", color: gold }}
          >
            Menu
          </button>
        </div>
      </nav>

      {drawerOpen && (
        <div className="fixed inset-0 z-[100]">
          <div
            className="absolute inset-0 drawer-overlay"
            onClick={() => setDrawerOpen(false)}
          />
          <div
            className="absolute top-0 right-0 h-full w-full max-w-sm p-10 flex flex-col justify-between"
            style={{
              background: warmDark,
              borderLeft: `1px solid ${gold}20`,
              animation: "slideIn 0.4s ease forwards",
            }}
          >
            <style>{`
              @keyframes slideIn {
                from { transform: translateX(100%); }
                to { transform: translateX(0); }
              }
            `}</style>

            <div>
              <div className="flex items-center justify-between mb-16">
                <span
                  className="text-xs font-medium tracking-[0.2em] uppercase"
                  style={{ fontFamily: "'Libre Franklin', sans-serif", color: gold }}
                >
                  Nawigacja
                </span>
                <button
                  onClick={() => setDrawerOpen(false)}
                  style={{ color: offWhite }}
                  aria-label="Zamknij menu"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M6 6l12 12M6 18L18 6" />
                  </svg>
                </button>
              </div>

              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => scrollTo(link.href)}
                    className="text-left text-2xl tracking-wide transition-colors duration-300"
                    style={{
                      fontFamily: "'DM Serif Display', serif",
                      color: `${offWhite}aa`,
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = gold)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = `${offWhite}aa`)}
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => scrollTo("#kontakt")}
              className="w-full py-4 text-sm font-semibold tracking-[0.15em] uppercase transition-all duration-300"
              style={{
                fontFamily: "'Libre Franklin', sans-serif",
                background: gold,
                color: midnight,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              Umów lekcję
            </button>
          </div>
        </div>
      )}

      <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: midnight }}>
        <div className="absolute inset-0 gold-dot-pattern-lg opacity-40 pointer-events-none" />

        <div className="absolute top-20 right-10 w-96 h-96 rounded-full blur-[150px] pointer-events-none" style={{ background: `${gold}08` }} />
        <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full blur-[120px] pointer-events-none" style={{ background: `${gold}06` }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <p
                className="text-xs font-medium tracking-[0.25em] uppercase mb-8"
                style={{ fontFamily: "'Libre Franklin', sans-serif", color: gold }}
              >
                Korepetycje z matematyki
              </p>

              <h1
                className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.05] tracking-tight mb-8"
                style={{ fontFamily: "'DM Serif Display', serif", color: offWhite }}
              >
                Matematyka,{" "}
                <br className="hidden sm:block" />
                która ma{" "}
                <span style={{ color: gold }}>sens</span>
                <span style={{ color: gold }}>.</span>
              </h1>

              <div className="w-20 h-[1px] mb-8" style={{ background: gold }} />

              <p
                className="text-lg md:text-xl leading-relaxed max-w-xl mb-12 font-light"
                style={{ fontFamily: "'Libre Franklin', sans-serif", color: `${offWhite}80` }}
              >
                Indywidualne lekcje 1 na 1, które zmieniają podejście do przedmiotu.
                Online i stacjonarnie. Bez stresu, z wynikami.
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
                <button
                  onClick={() => scrollTo("#kontakt")}
                  className="px-8 py-4 text-sm font-semibold tracking-[0.15em] uppercase transition-all duration-300"
                  style={{
                    fontFamily: "'Libre Franklin', sans-serif",
                    background: gold,
                    color: midnight,
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                >
                  Bezpłatna konsultacja
                </button>
                <button
                  onClick={() => scrollTo("#egzaminy")}
                  className="text-sm font-medium tracking-[0.1em] uppercase pb-1 transition-colors duration-300"
                  style={{
                    fontFamily: "'Libre Franklin', sans-serif",
                    color: `${offWhite}70`,
                    borderBottom: `1px solid ${offWhite}30`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = gold;
                    e.currentTarget.style.borderBottomColor = gold;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = `${offWhite}70`;
                    e.currentTarget.style.borderBottomColor = `${offWhite}30`;
                  }}
                >
                  Poznaj egzaminy
                </button>
              </div>

              <div className="flex items-center gap-10 mt-20">
                {[
                  { value: "2+", label: "lata doświadczenia" },
                  { value: "100+", label: "godzin lekcji" },
                  { value: "1:1", label: "indywidualne podejście" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p
                      className="text-3xl md:text-4xl font-normal mb-1"
                      style={{ fontFamily: "'DM Serif Display', serif", color: gold }}
                    >
                      {stat.value}
                    </p>
                    <p
                      className="text-[10px] tracking-[0.15em] uppercase"
                      style={{ fontFamily: "'Libre Franklin', sans-serif", color: `${offWhite}50` }}
                    >
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 hidden lg:block">
              <div className="relative">
                <div
                  className="absolute -inset-4 pointer-events-none"
                  style={{ border: `1px solid ${gold}25` }}
                />
                <div
                  className="absolute -inset-8 pointer-events-none"
                  style={{ border: `1px solid ${gold}12` }}
                />
                <div className="relative overflow-hidden aspect-[3/4]">
                  <div className="absolute inset-0 warm-overlay z-10 pointer-events-none" />
                  <img
                    src="/ola.jpg"
                    alt="Ola — korepetytorka matematyki"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span
            className="text-[10px] tracking-[0.2em] uppercase"
            style={{ fontFamily: "'Libre Franklin', sans-serif", color: `${offWhite}30` }}
          >
            Przewiń
          </span>
          <div className="w-[1px] h-8 animate-pulse" style={{ background: `${gold}40` }} />
        </div>
      </section>

      <div className="gold-rule" />

      <section id="o-mnie" className="py-24 sm:py-32 relative" style={{ background: warmDark }}>
        <div className="absolute inset-0 gold-dot-pattern opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <div className="lg:col-span-5">
              <p
                className="text-xs font-medium tracking-[0.25em] uppercase mb-4"
                style={{ fontFamily: "'Libre Franklin', sans-serif", color: gold }}
              >
                O mnie
              </p>
              <h2
                className="text-4xl sm:text-5xl leading-tight mb-6"
                style={{ fontFamily: "'DM Serif Display', serif", color: offWhite }}
              >
                Pasja do matematyki
                <br />i nauczania<span style={{ color: gold }}>.</span>
              </h2>
              <div className="w-16 h-[1px] mb-8" style={{ background: gold }} />

              <div className="relative mb-8">
                <div
                  className="absolute -inset-3 pointer-events-none"
                  style={{ border: `1px solid ${gold}20` }}
                />
                <div className="w-64 h-72 mx-auto lg:mx-0 overflow-hidden relative">
                  <img
                    src="/ola.jpg"
                    alt="Ola — korepetytorka matematyki"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              <p
                className="text-center lg:text-left mb-1 text-lg"
                style={{ fontFamily: "'DM Serif Display', serif", color: gold }}
              >
                Ola
              </p>
              <p
                className="text-center lg:text-left text-sm mb-8"
                style={{ fontFamily: "'Libre Franklin', sans-serif", color: `${offWhite}50` }}
              >
                Studentka matematyki
              </p>

              <div
                className="p-6 mb-8"
                style={{ borderLeft: `2px solid ${gold}`, background: `${midnight}80` }}
              >
                <p
                  className="text-lg italic leading-relaxed"
                  style={{ fontFamily: "'DM Serif Display', serif", color: `${offWhite}90` }}
                >
                  „Wierzę, że każdy uczeń może polubić matematykę — wystarczy
                  odpowiedni przewodnik i cierpliwość."
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6">
                {[
                  { value: "2+", label: "lata doświadczenia" },
                  { value: "100+", label: "godzin lekcji" },
                  { value: "1:1", label: "indywidualne podejście" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p
                      className="text-2xl"
                      style={{ fontFamily: "'DM Serif Display', serif", color: gold }}
                    >
                      {stat.value}
                    </p>
                    <p
                      className="text-[10px] tracking-[0.1em] uppercase mt-1"
                      style={{ fontFamily: "'Libre Franklin', sans-serif", color: `${offWhite}40` }}
                    >
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              {[
                "Cześć, mam na imię Ola! Jestem studentką matematyki z prawdziwą pasją do tego przedmiotu. Od ponad dwóch lat prowadzę korepetycje — zarówno indywidualne, jak i grupowe — pomagając uczniom na różnych etapach edukacji odnaleźć drogę przez zawiłości matematyki.",
                "Doświadczenie zdobywałam między innymi w Matplanecie — jednej z najbardziej rozpoznawalnych szkół matematycznych w Polsce. Praca z dziesiątkami uczniów na różnych poziomach nauczyła mnie, jak ważne jest indywidualne podejście — inne tempo, inna metoda, inny sposób tłumaczenia dla każdego.",
                "Teraz zaczynam działać na własnych zasadach. Otwieram swoją praktykę korepetycyjną, bo chcę poświęcić każdemu uczniowi tyle uwagi, ile naprawdę potrzebuje. Skupiam się na lekcjach indywidualnych 1 na 1 — bo to one dają najlepsze efekty.",
                "Prowadzę zajęcia zarówno online, jak i stacjonarnie — bo wierzę, że wygodna forma nauki to fundament skutecznych korepetycji. Niezależnie od tego, czy pracujemy przez interaktywną tablicę, czy spotykamy się osobiście, cel jest zawsze ten sam: zrozumienie, pewność siebie i lepsze wyniki.",
              ].map((paragraph, i) => (
                <div
                  key={i}
                  className="p-8 gold-glow-card"
                  style={{ background: midnight }}
                >
                  <p
                    className="leading-relaxed text-[15px]"
                    style={{ fontFamily: "'Libre Franklin', sans-serif", color: `${offWhite}bb` }}
                  >
                    {paragraph}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="gold-rule" />

      <section id="egzaminy" className="py-24 sm:py-32 relative" style={{ background: midnight }}>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16 sm:mb-20">
            <p
              className="text-xs font-medium tracking-[0.25em] uppercase mb-4"
              style={{ fontFamily: "'Libre Franklin', sans-serif", color: gold }}
            >
              Przygotowanie do egzaminów
            </p>
            <h2
              className="text-4xl sm:text-5xl leading-tight mb-6"
              style={{ fontFamily: "'DM Serif Display', serif", color: offWhite }}
            >
              Egzaminy, do których
              <br />
              przygotowuję<span style={{ color: gold }}>.</span>
            </h2>
            <div className="w-16 h-[1px] mx-auto mb-6" style={{ background: gold }} />
            <p
              className="max-w-2xl mx-auto leading-relaxed"
              style={{ fontFamily: "'Libre Franklin', sans-serif", color: `${offWhite}60` }}
            >
              Każdy egzamin wymaga innej strategii. Znam je wszystkie od podszewki
              i wiem, jak skutecznie przygotować do każdego z nich.
            </p>
          </div>

          <div className="space-y-4">
            {exams.map((exam, i) => (
              <div
                key={i}
                className="gold-glow-card overflow-hidden"
                style={{ background: warmDark }}
              >
                <button
                  onClick={() => setOpenExam(openExam === i ? null : i)}
                  className="w-full text-left p-8 sm:p-10 flex items-center justify-between gap-6"
                >
                  <div>
                    <h3
                      className="text-xl sm:text-2xl mb-1"
                      style={{ fontFamily: "'DM Serif Display', serif", color: offWhite }}
                    >
                      {exam.title}
                    </h3>
                    <p
                      className="text-sm font-medium tracking-wide"
                      style={{ fontFamily: "'Libre Franklin', sans-serif", color: gold }}
                    >
                      {exam.subtitle}
                    </p>
                  </div>
                  <span
                    className="text-2xl shrink-0 transition-transform duration-300"
                    style={{
                      color: gold,
                      transform: openExam === i ? "rotate(45deg)" : "rotate(0deg)",
                    }}
                  >
                    +
                  </span>
                </button>

                {openExam === i && (
                  <div
                    className="px-8 sm:px-10 pb-8 sm:pb-10 border-t"
                    style={{ borderTopColor: `${gold}15` }}
                  >
                    <div className="grid lg:grid-cols-12 gap-8 pt-8">
                      <div className="lg:col-span-7">
                        <p
                          className="leading-relaxed text-[15px] mb-6"
                          style={{ fontFamily: "'Libre Franklin', sans-serif", color: `${offWhite}70` }}
                        >
                          {exam.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {exam.topics.map((topic, j) => (
                            <span
                              key={j}
                              className="text-xs px-3 py-1.5"
                              style={{
                                fontFamily: "'Libre Franklin', sans-serif",
                                color: `${offWhite}60`,
                                border: `1px solid ${gold}20`,
                                background: `${midnight}80`,
                              }}
                            >
                              {topic}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="lg:col-span-5">
                        <div className="p-6 space-y-4" style={{ background: `${midnight}80` }}>
                          {[
                            { label: "Termin", value: exam.date },
                            { label: "Czas trwania", value: exam.duration },
                            { label: "Punktacja", value: exam.points },
                          ].map((row, k) => (
                            <div
                              key={row.label}
                              className="flex justify-between items-center pb-3"
                              style={{
                                borderBottom: k < 2 ? `1px solid ${gold}10` : "none",
                              }}
                            >
                              <span
                                className="text-xs tracking-[0.1em] uppercase"
                                style={{ fontFamily: "'Libre Franklin', sans-serif", color: `${offWhite}40` }}
                              >
                                {row.label}
                              </span>
                              <span
                                className="text-sm font-medium"
                                style={{ fontFamily: "'Libre Franklin', sans-serif", color: offWhite }}
                              >
                                {row.value}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="gold-rule" />

      <section id="oferta" className="py-24 sm:py-32 relative" style={{ background: warmDark }}>
        <div className="absolute inset-0 gold-dot-pattern opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16 sm:mb-20">
            <p
              className="text-xs font-medium tracking-[0.25em] uppercase mb-4"
              style={{ fontFamily: "'Libre Franklin', sans-serif", color: gold }}
            >
              Oferta
            </p>
            <h2
              className="text-4xl sm:text-5xl leading-tight mb-6"
              style={{ fontFamily: "'DM Serif Display', serif", color: offWhite }}
            >
              Wybierz formę
              <br />
              nauki<span style={{ color: gold }}>.</span>
            </h2>
            <div className="w-16 h-[1px] mx-auto mb-6" style={{ background: gold }} />
            <p
              className="max-w-2xl mx-auto leading-relaxed"
              style={{ fontFamily: "'Libre Franklin', sans-serif", color: `${offWhite}60` }}
            >
              Niezależnie od wybranej formy, każda lekcja jest w pełni
              indywidualna i dostosowana do Twoich potrzeb.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div
              className="p-8 sm:p-10 gold-glow-card flex flex-col"
              style={{ background: midnight }}
            >
              <div
                className="w-12 h-12 flex items-center justify-center mb-8"
                style={{ border: `1px solid ${gold}30` }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={gold} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <path d="M8 21h8M12 17v4" />
                </svg>
              </div>
              <h3
                className="text-2xl sm:text-3xl mb-2"
                style={{ fontFamily: "'DM Serif Display', serif", color: offWhite }}
              >
                Lekcje Online
              </h3>
              <p
                className="text-sm font-medium tracking-wide mb-8"
                style={{ fontFamily: "'Libre Franklin', sans-serif", color: gold }}
              >
                Wygodna nauka z dowolnego miejsca
              </p>

              <div className="w-full h-[1px] mb-8" style={{ background: `${gold}15` }} />

              <ul className="space-y-4 mb-10 flex-grow">
                {onlineFeatures.map((item, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <span
                      className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full"
                      style={{ background: gold }}
                    />
                    <span
                      className="text-sm leading-relaxed"
                      style={{ fontFamily: "'Libre Franklin', sans-serif", color: `${offWhite}80` }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => scrollTo("#kontakt")}
                className="w-full py-4 text-sm font-semibold tracking-[0.15em] uppercase transition-all duration-300"
                style={{
                  fontFamily: "'Libre Franklin', sans-serif",
                  border: `1px solid ${gold}`,
                  color: gold,
                  background: "transparent",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = gold;
                  e.currentTarget.style.color = midnight;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = gold;
                }}
              >
                Umów lekcję online
              </button>
            </div>

            <div
              className="p-8 sm:p-10 gold-glow-card flex flex-col"
              style={{ background: midnight }}
            >
              <div
                className="w-12 h-12 flex items-center justify-center mb-8"
                style={{ border: `1px solid ${gold}30` }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={gold} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3
                className="text-2xl sm:text-3xl mb-2"
                style={{ fontFamily: "'DM Serif Display', serif", color: offWhite }}
              >
                Lekcje Stacjonarne
              </h3>
              <p
                className="text-sm font-medium tracking-wide mb-8"
                style={{ fontFamily: "'Libre Franklin', sans-serif", color: gold }}
              >
                Osobisty kontakt i pełne skupienie
              </p>

              <div className="w-full h-[1px] mb-8" style={{ background: `${gold}15` }} />

              <ul className="space-y-4 mb-10 flex-grow">
                {stacjonarneFeatures.map((item, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <span
                      className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full"
                      style={{ background: gold }}
                    />
                    <span
                      className="text-sm leading-relaxed"
                      style={{ fontFamily: "'Libre Franklin', sans-serif", color: `${offWhite}80` }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => scrollTo("#kontakt")}
                className="w-full py-4 text-sm font-semibold tracking-[0.15em] uppercase transition-all duration-300"
                style={{
                  fontFamily: "'Libre Franklin', sans-serif",
                  background: gold,
                  color: midnight,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                Umów lekcję stacjonarną
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="gold-rule" />

      <section id="jak-wyglada-lekcja" className="py-24 sm:py-32 relative" style={{ background: midnight }}>
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16 sm:mb-20">
            <p
              className="text-xs font-medium tracking-[0.25em] uppercase mb-4"
              style={{ fontFamily: "'Libre Franklin', sans-serif", color: gold }}
            >
              Proces
            </p>
            <h2
              className="text-4xl sm:text-5xl leading-tight mb-6"
              style={{ fontFamily: "'DM Serif Display', serif", color: offWhite }}
            >
              Jak wygląda
              <br />
              współpraca<span style={{ color: gold }}>?</span>
            </h2>
            <div className="w-16 h-[1px] mx-auto mb-6" style={{ background: gold }} />
            <p
              className="max-w-2xl mx-auto leading-relaxed"
              style={{ fontFamily: "'Libre Franklin', sans-serif", color: `${offWhite}50` }}
            >
              Od pierwszej rozmowy do widocznych postępów — cztery proste kroki do
              lepszych wyników z matematyki.
            </p>
          </div>

          <div className="relative">
            <div
              className="hidden md:block absolute left-[32px] top-0 bottom-0 w-[1px]"
              style={{ background: `linear-gradient(180deg, ${gold}40, ${gold}10)` }}
            />

            <div className="space-y-12">
              {steps.map((step, i) => (
                <div key={step.number} className="flex items-start gap-8 md:gap-12">
                  <div className="shrink-0 relative z-10">
                    <div
                      className="w-16 h-16 flex items-center justify-center"
                      style={{ background: midnight, border: `1px solid ${gold}40` }}
                    >
                      <span
                        className="text-2xl"
                        style={{ fontFamily: "'DM Serif Display', serif", color: gold }}
                      >
                        {step.number}
                      </span>
                    </div>
                  </div>
                  <div className="pt-3">
                    <h3
                      className="text-xl mb-3"
                      style={{ fontFamily: "'DM Serif Display', serif", color: offWhite }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ fontFamily: "'Libre Franklin', sans-serif", color: `${offWhite}60` }}
                    >
                      {step.description}
                    </p>
                    {i < steps.length - 1 && (
                      <div className="w-12 h-[1px] mt-6 md:hidden" style={{ background: `${gold}20` }} />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="gold-rule" />

      <section id="dla-kogo" className="py-24 sm:py-32 relative" style={{ background: warmDark }}>
        <div className="absolute inset-0 gold-dot-pattern opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-5">
              <p
                className="text-xs font-medium tracking-[0.25em] uppercase mb-4"
                style={{ fontFamily: "'Libre Franklin', sans-serif", color: gold }}
              >
                Dla kogo
              </p>
              <h2
                className="text-4xl sm:text-5xl leading-tight mb-6"
                style={{ fontFamily: "'DM Serif Display', serif", color: offWhite }}
              >
                Dla każdego, kto
                <br />
                chce więcej<span style={{ color: gold }}>.</span>
              </h2>
              <div className="w-16 h-[1px] mb-6" style={{ background: gold }} />
              <p
                className="leading-relaxed"
                style={{ fontFamily: "'Libre Franklin', sans-serif", color: `${offWhite}60` }}
              >
                Niezależnie od poziomu i celu — pomogę Ci zrozumieć matematykę,
                zdać egzamin lub rozwinąć swoje umiejętności ponad program
                szkolny.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="space-y-4">
                {studentProfiles.map((profile, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-6 p-6 gold-glow-card"
                    style={{ background: midnight }}
                  >
                    <span
                      className="text-xl shrink-0 w-8 text-center"
                      style={{ fontFamily: "'DM Serif Display', serif", color: `${gold}60` }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div
                      className="w-[1px] h-8 shrink-0"
                      style={{ background: `${gold}20` }}
                    />
                    <div>
                      <h3
                        className="font-semibold text-[15px] mb-0.5"
                        style={{ fontFamily: "'Libre Franklin', sans-serif", color: offWhite }}
                      >
                        {profile.label}
                      </h3>
                      <p
                        className="text-sm"
                        style={{ fontFamily: "'Libre Franklin', sans-serif", color: `${offWhite}50` }}
                      >
                        {profile.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="gold-rule" />

      <section id="opinie" className="py-24 sm:py-32 relative" style={{ background: midnight }}>
        <div className="absolute inset-0 gold-dot-pattern-lg opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16 sm:mb-20">
            <p
              className="text-xs font-medium tracking-[0.25em] uppercase mb-4"
              style={{ fontFamily: "'Libre Franklin', sans-serif", color: gold }}
            >
              Opinie
            </p>
            <h2
              className="text-4xl sm:text-5xl leading-tight mb-6"
              style={{ fontFamily: "'DM Serif Display', serif", color: offWhite }}
            >
              Co mówią
              <br />
              rodzice<span style={{ color: gold }}>?</span>
            </h2>
            <div className="w-16 h-[1px] mx-auto" style={{ background: gold }} />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="p-8 gold-glow-card flex flex-col"
                style={{ background: warmDark }}
              >
                <span
                  className="text-6xl leading-none mb-4 select-none"
                  style={{ fontFamily: "'DM Serif Display', serif", color: `${gold}40` }}
                >
                  &bdquo;
                </span>
                <p
                  className="text-[15px] leading-relaxed mb-8 flex-grow italic"
                  style={{ fontFamily: "'DM Serif Display', serif", color: `${offWhite}bb` }}
                >
                  {t.quote}
                </p>
                <div
                  className="pt-4"
                  style={{ borderTop: `1px solid ${gold}15` }}
                >
                  <p
                    className="text-sm font-semibold tracking-[0.08em]"
                    style={{
                      fontFamily: "'Libre Franklin', sans-serif",
                      color: offWhite,
                      fontVariant: "small-caps",
                    }}
                  >
                    {t.name}
                  </p>
                  <p
                    className="text-xs mt-0.5"
                    style={{ fontFamily: "'Libre Franklin', sans-serif", color: `${offWhite}40` }}
                  >
                    {t.context}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="gold-rule" />

      <section id="kontakt" className="py-24 sm:py-32 relative" style={{ background: warmDark }}>
        <div className="absolute inset-0 gold-dot-pattern opacity-15 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-5">
              <p
                className="text-xs font-medium tracking-[0.25em] uppercase mb-4"
                style={{ fontFamily: "'Libre Franklin', sans-serif", color: gold }}
              >
                Kontakt
              </p>
              <h2
                className="text-4xl sm:text-5xl leading-tight mb-6"
                style={{ fontFamily: "'DM Serif Display', serif", color: offWhite }}
              >
                Zacznijmy
                <br />
                współpracę<span style={{ color: gold }}>.</span>
              </h2>
              <div className="w-16 h-[1px] mb-8" style={{ background: gold }} />

              <div
                className="inline-flex items-center gap-3 px-5 py-3 mb-8"
                style={{ border: `1px solid ${gold}30`, background: `${gold}08` }}
              >
                <span
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ background: gold }}
                />
                <span
                  className="text-sm font-semibold tracking-wide"
                  style={{ fontFamily: "'Libre Franklin', sans-serif", color: `${offWhite}cc` }}
                >
                  Pierwsza konsultacja gratis
                </span>
              </div>

              <div className="space-y-5 text-[15px]">
                <div>
                  <p
                    className="text-xs tracking-[0.1em] uppercase mb-1"
                    style={{ fontFamily: "'Libre Franklin', sans-serif", color: `${offWhite}40` }}
                  >
                    Email
                  </p>
                  <a
                    href="mailto:olamatysek@gmail.com"
                    className="font-medium transition-colors duration-300"
                    style={{ fontFamily: "'Libre Franklin', sans-serif", color: offWhite }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = gold)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = offWhite)}
                  >
                    olamatysek@gmail.com
                  </a>
                </div>
                <div>
                  <p
                    className="text-xs tracking-[0.1em] uppercase mb-1"
                    style={{ fontFamily: "'Libre Franklin', sans-serif", color: `${offWhite}40` }}
                  >
                    Telefon
                  </p>
                  <a
                    href="tel:+48123456789"
                    className="font-medium transition-colors duration-300"
                    style={{ fontFamily: "'Libre Franklin', sans-serif", color: offWhite }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = gold)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = offWhite)}
                  >
                    +48 123 456 789
                  </a>
                </div>
                <div>
                  <p
                    className="text-xs tracking-[0.1em] uppercase mb-1"
                    style={{ fontFamily: "'Libre Franklin', sans-serif", color: `${offWhite}40` }}
                  >
                    Forma zajęć
                  </p>
                  <p
                    className="font-medium"
                    style={{ fontFamily: "'Libre Franklin', sans-serif", color: offWhite }}
                  >
                    Online / Stacjonarnie
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div
                className="p-8 sm:p-10 gold-glow-card"
                style={{ background: midnight }}
              >
                <h3
                  className="text-xl mb-8"
                  style={{ fontFamily: "'DM Serif Display', serif", color: offWhite }}
                >
                  Napisz do mnie
                </h3>
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="space-y-5"
                >
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        className="block text-xs tracking-[0.1em] uppercase mb-2"
                        style={{ fontFamily: "'Libre Franklin', sans-serif", color: `${offWhite}40` }}
                      >
                        Imię i nazwisko
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 text-sm gold-input"
                        placeholder="Jan Kowalski"
                      />
                    </div>
                    <div>
                      <label
                        className="block text-xs tracking-[0.1em] uppercase mb-2"
                        style={{ fontFamily: "'Libre Franklin', sans-serif", color: `${offWhite}40` }}
                      >
                        Telefon lub email
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 text-sm gold-input"
                        placeholder="+48 000 000 000"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      className="block text-xs tracking-[0.1em] uppercase mb-2"
                      style={{ fontFamily: "'Libre Franklin', sans-serif", color: `${offWhite}40` }}
                    >
                      Klasa ucznia
                    </label>
                    <select
                      className="w-full px-4 py-3 text-sm gold-input"
                      style={{ color: `${offWhite}60` }}
                    >
                      <option>Szkoła podstawowa (kl. 4–8)</option>
                      <option>Liceum (kl. 1–3)</option>
                      <option>Technikum</option>
                      <option>Maturzysta</option>
                      <option>Inne</option>
                    </select>
                  </div>
                  <div>
                    <label
                      className="block text-xs tracking-[0.1em] uppercase mb-2"
                      style={{ fontFamily: "'Libre Franklin', sans-serif", color: `${offWhite}40` }}
                    >
                      Wiadomość
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 text-sm gold-input resize-none"
                      placeholder="Opisz z czym potrzebujesz pomocy..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 text-sm font-semibold tracking-[0.15em] uppercase transition-all duration-300"
                    style={{
                      fontFamily: "'Libre Franklin', sans-serif",
                      background: gold,
                      color: midnight,
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                  >
                    Wyślij wiadomość
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="gold-rule" />

      <footer className="py-16 px-6 md:px-12" style={{ background: midnight }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            <div>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="text-xl mb-4 block"
                style={{ fontFamily: "'DM Serif Display', serif", color: offWhite }}
              >
                matma<span style={{ color: gold }}>.</span>
              </button>
              <p
                className="text-sm leading-relaxed"
                style={{ fontFamily: "'Libre Franklin', sans-serif", color: `${offWhite}40` }}
              >
                Indywidualne korepetycje z matematyki. Przygotowanie do
                egzaminów. Online i stacjonarnie.
              </p>
            </div>

            <div>
              <p
                className="text-xs tracking-[0.15em] uppercase mb-4"
                style={{ fontFamily: "'Libre Franklin', sans-serif", color: `${offWhite}25` }}
              >
                Nawigacja
              </p>
              <div className="flex flex-col gap-2">
                {navLinks.slice(0, 4).map((link) => (
                  <button
                    key={link.href}
                    onClick={() => scrollTo(link.href)}
                    className="text-sm text-left transition-colors duration-300"
                    style={{ fontFamily: "'Libre Franklin', sans-serif", color: `${offWhite}50` }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = gold)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = `${offWhite}50`)}
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p
                className="text-xs tracking-[0.15em] uppercase mb-4"
                style={{ fontFamily: "'Libre Franklin', sans-serif", color: `${offWhite}25` }}
              >
                Więcej
              </p>
              <div className="flex flex-col gap-2">
                {navLinks.slice(4).map((link) => (
                  <button
                    key={link.href}
                    onClick={() => scrollTo(link.href)}
                    className="text-sm text-left transition-colors duration-300"
                    style={{ fontFamily: "'Libre Franklin', sans-serif", color: `${offWhite}50` }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = gold)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = `${offWhite}50`)}
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p
                className="text-xs tracking-[0.15em] uppercase mb-4"
                style={{ fontFamily: "'Libre Franklin', sans-serif", color: `${offWhite}25` }}
              >
                Social media
              </p>
              <div className="flex gap-4">
                {[
                  {
                    name: "Facebook",
                    icon: (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    ),
                  },
                  {
                    name: "Instagram",
                    icon: (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                      </svg>
                    ),
                  },
                  {
                    name: "TikTok",
                    icon: (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                      </svg>
                    ),
                  },
                ].map((social) => (
                  <a
                    key={social.name}
                    href="#"
                    className="w-10 h-10 flex items-center justify-center transition-all duration-300"
                    style={{ color: gold, border: `1px solid ${gold}25` }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = gold;
                      e.currentTarget.style.color = midnight;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.color = gold;
                    }}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="gold-rule mb-8" />

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p
              className="text-xs"
              style={{ fontFamily: "'Libre Franklin', sans-serif", color: `${offWhite}25` }}
            >
              &copy; {new Date().getFullYear()} Korepetycje z Matematyki. Wszelkie prawa zastrzeżone.
            </p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-xs tracking-[0.1em] uppercase transition-colors duration-300"
              style={{ fontFamily: "'Libre Franklin', sans-serif", color: `${offWhite}25` }}
              onMouseEnter={(e) => (e.currentTarget.style.color = gold)}
              onMouseLeave={(e) => (e.currentTarget.style.color = `${offWhite}25`)}
            >
              Powrót na górę
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Design5;
