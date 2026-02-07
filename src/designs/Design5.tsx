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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="min-h-screen bg-[#0a0a0f] text-[#e2e8f0] font-[Inter] scroll-smooth overflow-x-hidden"
      style={{ scrollBehavior: "smooth" }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <style>{`
        @keyframes orb-float-1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(80px, -60px) scale(1.1); }
          66% { transform: translate(-40px, 40px) scale(0.95); }
        }
        @keyframes orb-float-2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-60px, 80px) scale(0.9); }
          66% { transform: translate(50px, -30px) scale(1.05); }
        }
        @keyframes orb-float-3 {
          0%, 100% { transform: translate(0, 0) scale(1.05); }
          33% { transform: translate(40px, 60px) scale(0.95); }
          66% { transform: translate(-70px, -50px) scale(1.1); }
        }
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes pulse-ring {
          0% { transform: scale(0.95); opacity: 1; }
          100% { transform: scale(1.3); opacity: 0; }
        }
        .gradient-text {
          background: linear-gradient(135deg, #4f7cff 0%, #a855f7 50%, #4f7cff 100%);
          background-size: 200% 200%;
          animation: gradient-shift 6s ease infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .glass {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.06);
        }
        .glass-strong {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }
        .gradient-border {
          position: relative;
        }
        .gradient-border::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 1px;
          background: linear-gradient(135deg, rgba(79, 124, 255, 0.3), rgba(168, 85, 247, 0.3));
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask-composite: exclude;
          -webkit-mask-composite: xor;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        .gradient-border:hover::before {
          opacity: 1;
        }
        .glow-card {
          transition: all 0.4s ease;
        }
        .glow-card:hover {
          box-shadow: 0 0 30px rgba(79, 124, 255, 0.15), 0 0 60px rgba(168, 85, 247, 0.1);
          transform: translateY(-4px);
        }
        .gradient-btn {
          background: linear-gradient(135deg, #4f7cff, #a855f7);
          transition: all 0.3s ease;
          position: relative;
          z-index: 1;
        }
        .gradient-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: linear-gradient(135deg, #6b8fff, #bb6eff);
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: -1;
        }
        .gradient-btn:hover::before {
          opacity: 1;
        }
        .gradient-btn:hover {
          box-shadow: 0 0 30px rgba(79, 124, 255, 0.4), 0 0 60px rgba(168, 85, 247, 0.2);
          transform: scale(1.03);
        }
        .gradient-line {
          height: 2px;
          background: linear-gradient(90deg, transparent, #4f7cff, #a855f7, transparent);
        }
        .grid-overlay {
          background-image:
            linear-gradient(rgba(255, 255, 255, 0.015) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.015) 1px, transparent 1px);
          background-size: 60px 60px;
        }
        .focus-gradient:focus {
          outline: none;
          box-shadow: 0 0 0 2px rgba(79, 124, 255, 0.5), 0 0 0 4px rgba(168, 85, 247, 0.3);
        }
        .stat-badge {
          background: linear-gradient(135deg, rgba(79, 124, 255, 0.1), rgba(168, 85, 247, 0.1));
          border: 2px solid transparent;
          background-clip: padding-box;
          position: relative;
        }
        .stat-badge::before {
          content: '';
          position: absolute;
          inset: -2px;
          border-radius: inherit;
          background: linear-gradient(135deg, #4f7cff, #a855f7);
          z-index: -1;
          border-radius: 50%;
        }
        .step-line-v {
          background: linear-gradient(180deg, #4f7cff, #a855f7);
        }
        .step-line-h {
          background: linear-gradient(90deg, #4f7cff, #a855f7);
        }
      `}</style>

      <div className="fixed inset-0 pointer-events-none z-0 grid-overlay" />

      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
          scrolled ? "top-3" : "top-5"
        }`}
      >
        <div className="glass-strong rounded-full px-3 py-2 flex items-center gap-1 shadow-2xl">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-[Outfit] text-sm font-bold px-4 py-2 shrink-0"
          >
            <span className="gradient-text">matma</span>
          </button>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-[#94a3b8] text-xs font-medium px-3 py-2 rounded-full hover:text-white hover:bg-white/5 transition-all duration-300"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("#kontakt")}
              className="gradient-btn text-white text-xs font-semibold px-5 py-2 rounded-full ml-2"
            >
              Umów lekcję
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-[#e2e8f0] p-2"
            aria-label="Menu"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              {mobileMenuOpen ? (
                <path d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden glass-strong rounded-2xl mt-2 p-4 shadow-2xl">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-[#94a3b8] text-sm font-medium px-4 py-3 rounded-xl text-left hover:text-white hover:bg-white/5 transition-all duration-300"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => scrollTo("#kontakt")}
                className="gradient-btn text-white text-sm font-semibold px-5 py-3 rounded-xl mt-2"
              >
                Umów lekcję
              </button>
            </div>
          </div>
        )}
      </nav>

      <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute w-[500px] h-[500px] rounded-full blur-[120px] opacity-20"
            style={{
              top: "10%",
              left: "5%",
              background: "radial-gradient(circle, #4f7cff, transparent 70%)",
              animation: "orb-float-1 20s ease-in-out infinite",
            }}
          />
          <div
            className="absolute w-[400px] h-[400px] rounded-full blur-[100px] opacity-15"
            style={{
              top: "50%",
              right: "5%",
              background: "radial-gradient(circle, #a855f7, transparent 70%)",
              animation: "orb-float-2 25s ease-in-out infinite",
            }}
          />
          <div
            className="absolute w-[300px] h-[300px] rounded-full blur-[80px] opacity-10"
            style={{
              bottom: "10%",
              left: "40%",
              background: "radial-gradient(circle, #4f7cff, transparent 70%)",
              animation: "orb-float-3 18s ease-in-out infinite",
            }}
          />
        </div>

        <div className="relative z-10 max-w-5xl w-full text-center pt-20">
          <p className="font-[Outfit] text-sm md:text-base font-medium tracking-[0.25em] uppercase text-[#94a3b8] mb-6">
            Korepetycje z matematyki
          </p>

          <h1 className="font-[Outfit] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[1.05] tracking-tight mb-8">
            Matematyka,{" "}
            <br className="hidden sm:block" />
            <span className="gradient-text">
              która ma sens
            </span>
            <span className="text-[#e2e8f0]">.</span>
          </h1>

          <p className="text-lg md:text-xl text-[#94a3b8] max-w-2xl mx-auto leading-relaxed mb-12 font-light">
            Indywidualne lekcje 1 na 1, które zmieniają podejście do przedmiotu.
            Online i stacjonarnie. Bez stresu, z wynikami.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => scrollTo("#kontakt")}
              className="gradient-btn text-white font-[Outfit] font-bold text-sm md:text-base px-8 py-4 rounded-full uppercase tracking-wider"
            >
              Bezpłatna konsultacja
            </button>
            <button
              onClick={() => scrollTo("#egzaminy")}
              className="glass text-[#e2e8f0] font-[Outfit] font-medium text-sm md:text-base px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-300"
            >
              Poznaj egzaminy
            </button>
          </div>

          <div className="flex items-center justify-center gap-8 md:gap-12 mt-20">
            <div className="text-center">
              <div className="stat-badge w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="font-[Outfit] text-2xl md:text-3xl font-bold text-white">2+</span>
              </div>
              <p className="text-xs text-[#94a3b8] tracking-wider uppercase">lat doświadczenia</p>
            </div>
            <div className="text-center">
              <div className="stat-badge w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="font-[Outfit] text-2xl md:text-3xl font-bold text-white">100+</span>
              </div>
              <p className="text-xs text-[#94a3b8] tracking-wider uppercase">godzin lekcji</p>
            </div>
            <div className="text-center">
              <div className="stat-badge w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="font-[Outfit] text-2xl md:text-3xl font-bold text-white">1:1</span>
              </div>
              <p className="text-xs text-[#94a3b8] tracking-wider uppercase">indywidualne</p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="w-5 h-8 rounded-full border border-[#94a3b8]/30 flex items-start justify-center p-1">
            <div className="w-1 h-2 rounded-full bg-[#94a3b8]/50 animate-bounce" />
          </div>
        </div>
      </section>

      <div className="gradient-line" />

      <section id="o-mnie" className="relative py-24 sm:py-32 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <p className="font-[Outfit] text-sm font-medium tracking-[0.25em] uppercase text-[#94a3b8] mb-4">
            O mnie
          </p>
          <h2 className="font-[Outfit] text-4xl sm:text-5xl md:text-6xl font-extrabold mb-16">
            Twoja{" "}
            <span className="gradient-text">korepetytorka</span>
          </h2>

          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-4">
              <div className="glass rounded-2xl p-6 text-center">
                <div className="w-48 h-56 mx-auto overflow-hidden rounded-xl mb-4 relative">
                  <div
                    className="absolute inset-0 rounded-xl"
                    style={{
                      background: "linear-gradient(135deg, rgba(79, 124, 255, 0.2), rgba(168, 85, 247, 0.2))",
                    }}
                  />
                  <img
                    src="/ola.jpg"
                    alt="Ola — korepetytorka matematyki"
                    className="w-full h-full object-cover object-top relative z-10"
                  />
                </div>
                <h3 className="font-[Outfit] text-xl font-bold text-white mb-1">Ola</h3>
                <p className="text-[#94a3b8] text-sm mb-4">Studentka matematyki</p>

                <div className="glass rounded-xl p-4 text-left">
                  <p className="text-sm text-[#94a3b8] italic leading-relaxed">
                    „Wierzę, że każdy uczeń może polubić matematykę — wystarczy odpowiedni przewodnik i cierpliwość."
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-6">
              <div className="glass rounded-2xl p-8 glow-card gradient-border">
                <p className="text-[#e2e8f0] leading-relaxed">
                  Cześć, mam na imię Ola! Jestem studentką matematyki z prawdziwą pasją do tego przedmiotu. Od ponad dwóch lat prowadzę korepetycje — zarówno indywidualne, jak i grupowe — pomagając uczniom na różnych etapach edukacji odnaleźć drogę przez zawiłości matematyki.
                </p>
              </div>

              <div className="glass rounded-2xl p-8 glow-card gradient-border">
                <p className="text-[#e2e8f0] leading-relaxed">
                  Doświadczenie zdobywałam między innymi w Matplanecie — jednej z najbardziej rozpoznawalnych szkół matematycznych w Polsce. Praca z dziesiątkami uczniów na różnych poziomach nauczyła mnie, jak ważne jest indywidualne podejście — inne tempo, inna metoda, inny sposób tłumaczenia dla każdego.
                </p>
              </div>

              <div className="glass rounded-2xl p-8 glow-card gradient-border">
                <p className="text-[#e2e8f0] leading-relaxed">
                  Teraz zaczynam działać na własnych zasadach. Otwieram swoją praktykę korepetycyjną, bo chcę poświęcić każdemu uczniowi tyle uwagi, ile naprawdę potrzebuje. Skupiam się na lekcjach indywidualnych 1 na 1 — bo to one dają najlepsze efekty.
                </p>
              </div>

              <div className="glass rounded-2xl p-8 glow-card gradient-border">
                <p className="text-[#e2e8f0] leading-relaxed">
                  Prowadzę zajęcia zarówno online, jak i stacjonarnie — bo wierzę, że wygodna forma nauki to fundament skutecznych korepetycji. Niezależnie od tego, czy pracujemy przez interaktywną tablicę, czy spotykamy się osobiście, cel jest zawsze ten sam: zrozumienie, pewność siebie i lepsze wyniki.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="gradient-line" />

      <section id="egzaminy" className="relative py-24 sm:py-32 px-6 md:px-12">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute w-[400px] h-[400px] rounded-full blur-[100px] opacity-10"
            style={{
              top: "20%",
              right: "0",
              background: "radial-gradient(circle, #a855f7, transparent 70%)",
            }}
          />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <p className="font-[Outfit] text-sm font-medium tracking-[0.25em] uppercase text-[#94a3b8] mb-4">
            Egzaminy
          </p>
          <h2 className="font-[Outfit] text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6">
            Przygotuj się na{" "}
            <span className="gradient-text">sukces</span>
          </h2>
          <p className="text-[#94a3b8] max-w-2xl leading-relaxed mb-16">
            Każdy egzamin wymaga innej strategii. Znam je wszystkie od podszewki i wiem, jak skutecznie przygotować do każdego z nich.
          </p>

          <div className="grid lg:grid-cols-3 gap-6">
            {exams.map((exam, i) => (
              <div
                key={i}
                className="glass rounded-2xl p-8 glow-card gradient-border flex flex-col"
              >
                <h3 className="font-[Outfit] text-xl md:text-2xl font-bold text-white mb-2">
                  {exam.title}
                </h3>
                <p className="text-sm gradient-text font-semibold mb-6">
                  {exam.subtitle}
                </p>

                <div className="space-y-3 mb-6">
                  {[
                    { label: "Termin", value: exam.date },
                    { label: "Czas", value: exam.duration },
                    { label: "Punktacja", value: exam.points },
                  ].map((row) => (
                    <div key={row.label} className="flex justify-between items-center text-sm">
                      <span className="text-[#94a3b8]">{row.label}</span>
                      <span className="text-white font-medium">{row.value}</span>
                    </div>
                  ))}
                </div>

                <p className="text-[#94a3b8] text-sm leading-relaxed mb-6 flex-grow">
                  {exam.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exam.topics.map((topic, j) => (
                    <span
                      key={j}
                      className="text-xs px-3 py-1.5 rounded-full bg-white/5 text-[#94a3b8] border border-white/5"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="gradient-line" />

      <section id="oferta" className="relative py-24 sm:py-32 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <p className="font-[Outfit] text-sm font-medium tracking-[0.25em] uppercase text-[#94a3b8] mb-4">
            Oferta
          </p>
          <h2 className="font-[Outfit] text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6">
            Wybierz{" "}
            <span className="gradient-text">formę nauki</span>
          </h2>
          <p className="text-[#94a3b8] max-w-2xl leading-relaxed mb-16">
            Niezależnie od wybranej formy, każda lekcja jest w pełni indywidualna i dostosowana do Twoich potrzeb.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass rounded-2xl p-8 md:p-10 glow-card gradient-border">
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-2xl"
                style={{ background: "linear-gradient(135deg, rgba(79, 124, 255, 0.2), rgba(168, 85, 247, 0.2))" }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4f7cff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <path d="M8 21h8M12 17v4" />
                </svg>
              </div>
              <h3 className="font-[Outfit] text-2xl md:text-3xl font-bold text-white mb-2">
                Lekcje Online
              </h3>
              <p className="text-sm text-[#94a3b8] mb-8">Wygodna nauka z dowolnego miejsca</p>
              <ul className="space-y-4 mb-8">
                {onlineFeatures.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                      style={{ background: "linear-gradient(135deg, #4f7cff, #a855f7)" }}
                    >
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <span className="text-[#e2e8f0] text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => scrollTo("#kontakt")}
                className="gradient-btn w-full text-white font-[Outfit] font-semibold text-sm px-6 py-4 rounded-xl uppercase tracking-wider"
              >
                Umów lekcję online
              </button>
            </div>

            <div className="glass rounded-2xl p-8 md:p-10 glow-card gradient-border">
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-2xl"
                style={{ background: "linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(79, 124, 255, 0.2))" }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="font-[Outfit] text-2xl md:text-3xl font-bold text-white mb-2">
                Lekcje Stacjonarne
              </h3>
              <p className="text-sm text-[#94a3b8] mb-8">Osobisty kontakt i pełne skupienie</p>
              <ul className="space-y-4 mb-8">
                {stacjonarneFeatures.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                      style={{ background: "linear-gradient(135deg, #a855f7, #4f7cff)" }}
                    >
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <span className="text-[#e2e8f0] text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => scrollTo("#kontakt")}
                className="gradient-btn w-full text-white font-[Outfit] font-semibold text-sm px-6 py-4 rounded-xl uppercase tracking-wider"
              >
                Umów lekcję stacjonarną
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="gradient-line" />

      <section id="jak-wyglada-lekcja" className="relative py-24 sm:py-32 px-6 md:px-12">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute w-[500px] h-[500px] rounded-full blur-[120px] opacity-10"
            style={{
              top: "30%",
              left: "-10%",
              background: "radial-gradient(circle, #4f7cff, transparent 70%)",
            }}
          />
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <p className="font-[Outfit] text-sm font-medium tracking-[0.25em] uppercase text-[#94a3b8] mb-4">
            Proces
          </p>
          <h2 className="font-[Outfit] text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6">
            Jak wygląda{" "}
            <span className="gradient-text">współpraca</span>?
          </h2>
          <p className="text-[#94a3b8] max-w-2xl leading-relaxed mb-20">
            Od pierwszej rozmowy do widocznych postępów — cztery proste kroki do lepszych wyników z matematyki.
          </p>

          <div className="hidden md:block">
            <div className="grid grid-cols-4 gap-8 relative">
              <div className="absolute top-12 left-[12.5%] right-[12.5%] h-[2px] step-line-h" />
              {steps.map((step) => (
                <div key={step.number} className="relative text-center">
                  <div
                    className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10"
                    style={{
                      background: "linear-gradient(135deg, rgba(79, 124, 255, 0.15), rgba(168, 85, 247, 0.15))",
                      border: "2px solid transparent",
                      backgroundClip: "padding-box",
                    }}
                  >
                    <div
                      className="absolute inset-[-2px] rounded-full"
                      style={{ background: "linear-gradient(135deg, #4f7cff, #a855f7)", zIndex: -1 }}
                    />
                    <div
                      className="absolute inset-0 rounded-full"
                      style={{ background: "#0a0a0f" }}
                    />
                    <span className="font-[Outfit] text-2xl font-bold gradient-text relative z-10">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="font-[Outfit] text-lg font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[#94a3b8] text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="md:hidden relative pl-12">
            <div className="absolute left-5 top-0 bottom-0 w-[2px] step-line-v" />
            <div className="space-y-12">
              {steps.map((step) => (
                <div key={step.number} className="relative">
                  <div
                    className="absolute -left-12 top-0 w-10 h-10 rounded-full flex items-center justify-center z-10"
                    style={{ background: "#0a0a0f" }}
                  >
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center"
                      style={{
                        background: "linear-gradient(135deg, #4f7cff, #a855f7)",
                      }}
                    >
                      <span className="font-[Outfit] text-sm font-bold text-white">
                        {step.number}
                      </span>
                    </div>
                  </div>
                  <h3 className="font-[Outfit] text-lg font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[#94a3b8] text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="gradient-line" />

      <section id="dla-kogo" className="relative py-24 sm:py-32 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <p className="font-[Outfit] text-sm font-medium tracking-[0.25em] uppercase text-[#94a3b8] mb-4">
            Dla kogo
          </p>
          <h2 className="font-[Outfit] text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6">
            Dla każdego, kto chce{" "}
            <span className="gradient-text">więcej</span>
          </h2>
          <p className="text-[#94a3b8] max-w-2xl leading-relaxed mb-16">
            Niezależnie od poziomu i celu — pomogę Ci zrozumieć matematykę, zdać egzamin lub rozwinąć swoje umiejętności ponad program szkolny.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {studentProfiles.map((profile, i) => (
              <div
                key={i}
                className="glass rounded-xl p-6 glow-card gradient-border group"
              >
                <div className="flex items-center gap-4">
                  <span
                    className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 font-[Outfit] text-sm font-bold text-white"
                    style={{ background: "linear-gradient(135deg, #4f7cff, #a855f7)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-[Outfit] font-semibold text-white text-sm">
                      {profile.label}
                    </h3>
                    <p className="text-[#94a3b8] text-xs mt-0.5">
                      {profile.detail}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="gradient-line" />

      <section id="opinie" className="relative py-24 sm:py-32 px-6 md:px-12">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute w-[400px] h-[400px] rounded-full blur-[100px] opacity-10"
            style={{
              bottom: "10%",
              right: "10%",
              background: "radial-gradient(circle, #4f7cff, transparent 70%)",
            }}
          />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <p className="font-[Outfit] text-sm font-medium tracking-[0.25em] uppercase text-[#94a3b8] mb-4">
            Opinie
          </p>
          <h2 className="font-[Outfit] text-4xl sm:text-5xl md:text-6xl font-extrabold mb-16">
            Co mówią{" "}
            <span className="gradient-text">rodzice</span>?
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="glass rounded-2xl p-8 glow-card gradient-border flex flex-col"
              >
                <div className="gradient-text text-5xl font-[Outfit] leading-none mb-4 select-none">
                  &bdquo;
                </div>
                <p className="text-[#e2e8f0] text-sm leading-relaxed mb-8 flex-grow italic">
                  {t.quote}
                </p>
                <div className="border-t border-white/5 pt-4">
                  <p className="font-[Outfit] font-bold text-white text-sm">{t.name}</p>
                  <p className="text-[#94a3b8] text-xs mt-0.5">{t.context}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="gradient-line" />

      <section id="kontakt" className="relative py-24 sm:py-32 px-6 md:px-12">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute w-[600px] h-[600px] rounded-full blur-[150px] opacity-10"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              background: "radial-gradient(circle, #4f7cff, #a855f7, transparent 70%)",
            }}
          />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <p className="font-[Outfit] text-sm font-medium tracking-[0.25em] uppercase text-[#94a3b8] mb-4">
            Kontakt
          </p>
          <h2 className="font-[Outfit] text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6">
            Zacznijmy{" "}
            <span className="gradient-text">współpracę</span>
          </h2>
          <p className="text-[#94a3b8] max-w-2xl leading-relaxed mb-16">
            Pierwsza konsultacja jest bezpłatna. Bez zobowiązań — porozmawiajmy o celach i ustalmy plan.
          </p>

          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <div className="glass rounded-2xl p-8 mb-6">
                <div className="space-y-6">
                  <div>
                    <p className="text-xs text-[#94a3b8] uppercase tracking-wider mb-2">Email</p>
                    <a
                      href="mailto:olamatysek@gmail.com"
                      className="text-white font-medium hover:text-[#4f7cff] transition-colors duration-300"
                    >
                      olamatysek@gmail.com
                    </a>
                  </div>
                  <div>
                    <p className="text-xs text-[#94a3b8] uppercase tracking-wider mb-2">Telefon</p>
                    <a
                      href="tel:+48123456789"
                      className="text-white font-medium hover:text-[#4f7cff] transition-colors duration-300"
                    >
                      +48 123 456 789
                    </a>
                  </div>
                  <div>
                    <p className="text-xs text-[#94a3b8] uppercase tracking-wider mb-2">Forma zajęć</p>
                    <p className="text-white font-medium">Online / Stacjonarnie</p>
                  </div>
                </div>
              </div>

              <div className="glass rounded-2xl p-6">
                <div className="flex items-center gap-3">
                  <div
                    className="w-3 h-3 rounded-full animate-pulse"
                    style={{ background: "linear-gradient(135deg, #4f7cff, #a855f7)" }}
                  />
                  <p className="text-sm text-[#e2e8f0] font-medium">
                    Pierwsza konsultacja gratis
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="glass rounded-2xl p-8">
                <h3 className="font-[Outfit] text-xl font-bold text-white mb-6">
                  Napisz do mnie
                </h3>
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="space-y-5"
                >
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs text-[#94a3b8] uppercase tracking-wider mb-2">
                        Imię i nazwisko
                      </label>
                      <input
                        type="text"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-[#94a3b8]/50 focus-gradient transition-all duration-300"
                        placeholder="Jan Kowalski"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-[#94a3b8] uppercase tracking-wider mb-2">
                        Telefon lub email
                      </label>
                      <input
                        type="text"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-[#94a3b8]/50 focus-gradient transition-all duration-300"
                        placeholder="+48 000 000 000"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs text-[#94a3b8] uppercase tracking-wider mb-2">
                      Klasa ucznia
                    </label>
                    <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-[#94a3b8] focus-gradient transition-all duration-300">
                      <option>Szkoła podstawowa (kl. 4–8)</option>
                      <option>Liceum (kl. 1–3)</option>
                      <option>Technikum</option>
                      <option>Maturzysta</option>
                      <option>Inne</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs text-[#94a3b8] uppercase tracking-wider mb-2">
                      Wiadomość
                    </label>
                    <textarea
                      rows={4}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-[#94a3b8]/50 focus-gradient transition-all duration-300 resize-none"
                      placeholder="Opisz z czym potrzebujesz pomocy..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="gradient-btn w-full text-white font-[Outfit] font-bold text-sm px-6 py-4 rounded-xl uppercase tracking-wider"
                  >
                    Wyślij wiadomość
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="gradient-line" />

      <footer className="py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            <div>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="font-[Outfit] text-xl font-bold mb-4 block"
              >
                <span className="gradient-text">matma</span>
              </button>
              <p className="text-[#94a3b8] text-sm leading-relaxed">
                Indywidualne korepetycje z matematyki. Przygotowanie do egzaminów. Online i stacjonarnie.
              </p>
            </div>

            <div>
              <p className="text-xs text-[#94a3b8]/50 uppercase tracking-wider mb-4 font-[Outfit] font-semibold">
                Nawigacja
              </p>
              <div className="flex flex-col gap-2">
                {navLinks.slice(0, 4).map((link) => (
                  <button
                    key={link.href}
                    onClick={() => scrollTo(link.href)}
                    className="text-[#94a3b8] text-sm text-left hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs text-[#94a3b8]/50 uppercase tracking-wider mb-4 font-[Outfit] font-semibold">
                Więcej
              </p>
              <div className="flex flex-col gap-2">
                {navLinks.slice(4).map((link) => (
                  <button
                    key={link.href}
                    onClick={() => scrollTo(link.href)}
                    className="text-[#94a3b8] text-sm text-left hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs text-[#94a3b8]/50 uppercase tracking-wider mb-4 font-[Outfit] font-semibold">
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
                    className="w-10 h-10 rounded-full glass flex items-center justify-center text-[#94a3b8] hover:text-white hover:bg-white/10 transition-all duration-300"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="gradient-line mb-8" />

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-[#94a3b8]/40 text-xs">
              &copy; {new Date().getFullYear()} Korepetycje z Matematyki. Wszelkie prawa zastrzeżone.
            </p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-[#94a3b8]/40 text-xs hover:text-white transition-colors duration-300 uppercase tracking-wider"
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
