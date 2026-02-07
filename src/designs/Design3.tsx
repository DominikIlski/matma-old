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

const stationaryFeatures = [
  "Bezpośredni kontakt — łatwiejsza komunikacja i motywacja",
  "Praca przy tablicy i na kartce — klasyczna metoda nauki",
  "Pełne skupienie bez rozpraszaczy ekranowych",
  "Natychmiastowa pomoc przy rozwiązywaniu zadań",
  "Budowanie relacji i zaufania między uczniem a korepetytorem",
];

const bioParas = [
  "Cześć, mam na imię Ola! Jestem studentką matematyki z prawdziwą pasją do tego przedmiotu. Od ponad dwóch lat prowadzę korepetycje — zarówno indywidualne, jak i grupowe — pomagając uczniom na różnych etapach edukacji odnaleźć drogę przez zawiłości matematyki.",
  "Doświadczenie zdobywałam między innymi w Matplanecie — jednej z najbardziej rozpoznawalnych szkół matematycznych w Polsce. Praca z dziesiątkami uczniów na różnych poziomach nauczyła mnie, jak ważne jest indywidualne podejście — inne tempo, inna metoda, inny sposób tłumaczenia dla każdego.",
  "Teraz zaczynam działać na własnych zasadach. Otwieram swoją praktykę korepetycyjną, bo chcę poświęcić każdemu uczniowi tyle uwagi, ile naprawdę potrzebuje. Skupiam się na lekcjach indywidualnych 1 na 1 — bo to one dają najlepsze efekty.",
  "Prowadzę zajęcia zarówno online, jak i stacjonarnie — bo wierzę, że wygodna forma nauki to fundament skutecznych korepetycji. Niezależnie od tego, czy pracujemy przez interaktywną tablicę, czy spotykamy się osobiście, cel jest zawsze ten sam: zrozumienie, pewność siebie i lepsze wyniki.",
];

const stats = [
  { value: "2+", label: "lata doświadczenia" },
  { value: "100+", label: "godzin korepetycji" },
  { value: "1:1", label: "indywidualne podejście" },
];

const marginFormulas = [
  { text: "a\u00B2 + b\u00B2 = c\u00B2", top: "12%", right: "-2%" },
  { text: "\u222Bf(x)dx", top: "28%", right: "-4%" },
  { text: "lim x\u2192\u221E", top: "44%", right: "-1%" },
  { text: "\u0394 = b\u00B2 \u2212 4ac", top: "60%", right: "-3%" },
  { text: "\u2211 n=1..\u221E", top: "76%", right: "-2%" },
  { text: "sin\u00B2\u03B1 + cos\u00B2\u03B1 = 1", top: "20%", left: "-3%" },
  { text: "e^(i\u03C0) + 1 = 0", top: "50%", left: "-2%" },
  { text: "P(A|B) = P(B|A)\u00B7P(A)/P(B)", top: "80%", left: "-4%" },
];

const PencilUnderline = () => (
  <svg
    viewBox="0 0 200 12"
    preserveAspectRatio="none"
    className="absolute -bottom-2 left-0 w-full h-3"
  >
    <path
      d="M0,8 C20,4 40,10 60,6 C80,2 100,10 120,5 C140,0 160,9 180,4 C190,2 200,7 200,7"
      fill="none"
      stroke="#d4564e"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

const SectionNumber = ({ num }: { num: string }) => (
  <span
    className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-[#1e293b]/30 text-sm font-medium text-[#1e293b] relative"
    style={{
      fontFamily: "'Newsreader', serif",
      transform: "rotate(-2deg)",
      boxShadow: "1px 2px 0 rgba(30,41,59,0.06)",
    }}
  >
    {num}
  </span>
);

const ruledLinesBg = `repeating-linear-gradient(
  to bottom,
  transparent,
  transparent 31px,
  #c8bfb4 31px,
  #c8bfb4 32px
)`;

const tornEdgeClipPath =
  "polygon(0% 4%, 3% 0%, 6% 3%, 9% 1%, 12% 4%, 15% 0%, 18% 3%, 21% 1%, 24% 4%, 27% 0%, 30% 3%, 33% 1%, 36% 4%, 39% 0%, 42% 3%, 45% 1%, 48% 4%, 51% 0%, 54% 3%, 57% 1%, 60% 4%, 63% 0%, 66% 3%, 69% 1%, 72% 4%, 75% 0%, 78% 3%, 81% 1%, 84% 4%, 87% 0%, 90% 3%, 93% 1%, 96% 4%, 100% 0%, 100% 100%, 0% 100%)";

export default function Design3() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeExam, setActiveExam] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
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
    <div className="min-h-screen bg-[#faf6f1] text-[#1e293b] antialiased" style={{ scrollBehavior: "smooth" }}>
      <link
        href="https://fonts.googleapis.com/css2?family=Newsreader:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&family=Instrument+Sans:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <style>{`
        * { font-family: 'Instrument Sans', sans-serif; }
        h1, h2, h3, h4, h5, h6, .font-serif-head { font-family: 'Newsreader', serif; }
        html { scroll-behavior: smooth; }
        .ruled-lines {
          background: ${ruledLinesBg};
        }
        .torn-top {
          clip-path: ${tornEdgeClipPath};
        }
        @keyframes float-formula {
          0%, 100% { opacity: 0.08; transform: translateY(0px); }
          50% { opacity: 0.12; transform: translateY(-4px); }
        }
        .formula-float {
          animation: float-formula 8s ease-in-out infinite;
        }
      `}</style>

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-[#faf6f1]/95 backdrop-blur-sm shadow-[0_1px_0_#c8bfb4]" : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 lg:px-8 h-16 lg:h-20">
          <a
            href="#"
            className="font-serif-head text-xl lg:text-2xl font-medium tracking-tight"
            style={{ fontFamily: "'Newsreader', serif" }}
          >
            matma<span className="text-[#d4564e]">.</span>
          </a>
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[#475569] hover:text-[#1e293b] transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>
          <button
            onClick={() => setMenuOpen(true)}
            className="lg:hidden flex flex-col gap-1.5 p-2"
            aria-label="Menu"
          >
            <span className="block w-6 h-[1.5px] bg-[#1e293b]" />
            <span className="block w-4 h-[1.5px] bg-[#1e293b]" />
            <span className="block w-6 h-[1.5px] bg-[#1e293b]" />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 z-[100] bg-[#faf6f1] flex flex-col">
          <div className="flex items-center justify-between px-6 h-16">
            <span
              className="text-xl font-medium tracking-tight"
              style={{ fontFamily: "'Newsreader', serif" }}
            >
              matma<span className="text-[#d4564e]">.</span>
            </span>
            <button
              onClick={() => setMenuOpen(false)}
              className="text-sm text-[#475569] hover:text-[#1e293b] transition-colors p-2"
            >
              Zamknij
            </button>
          </div>
          <div className="flex-1 flex flex-col justify-center px-6">
            <nav className="space-y-1">
              {navLinks.map((link, i) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block group"
                >
                  <div className="flex items-baseline gap-4 py-4 border-b border-[#1e293b]/10">
                    <span
                      className="text-xs text-[#475569]/40 tabular-nums"
                      style={{ fontFamily: "'Newsreader', serif" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className="text-3xl sm:text-4xl font-medium text-[#1e293b] group-hover:text-[#d4564e] transition-colors duration-300"
                      style={{ fontFamily: "'Newsreader', serif" }}
                    >
                      {link.label}
                    </span>
                  </div>
                </a>
              ))}
            </nav>
          </div>
          <div className="px-6 pb-8 text-xs text-[#475569]/60">
            olamatysek@gmail.com
          </div>
        </div>
      )}

      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0 ruled-lines opacity-40"
          style={{ backgroundPositionY: "8px" }}
        />
        <div className="absolute left-[4%] top-0 bottom-0 w-[1px] bg-[#d4564e]/15 hidden lg:block" />
        <div className="absolute left-[5.5%] top-0 bottom-0 w-[1px] bg-[#d4564e]/10 hidden lg:block" />

        {marginFormulas.slice(0, 5).map((f, i) => (
          <span
            key={i}
            className="absolute hidden xl:block text-[#475569]/[0.07] text-sm select-none pointer-events-none formula-float"
            style={{
              fontFamily: "'Newsreader', serif",
              fontStyle: "italic",
              top: f.top,
              right: f.right ? `calc(2% + ${i * 10}px)` : undefined,
              left: f.left ? `calc(2% + ${i * 10}px)` : undefined,
              animationDelay: `${i * 1.6}s`,
            }}
          >
            {f.text}
          </span>
        ))}

        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 w-full pt-32 pb-20 lg:pt-0 lg:pb-0">
          <div className="lg:flex lg:items-center lg:gap-16">
            <div className="lg:flex-1 lg:max-w-2xl">
              <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-[#475569]/50 mb-8">
                Korepetycje z matematyki
              </p>
              <h1
                className="text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-medium leading-[1.05] tracking-tight mb-8"
                style={{ fontFamily: "'Newsreader', serif" }}
              >
                Matematyka{" "}
                <span className="relative inline-block">
                  zapisana
                  <PencilUnderline />
                </span>
                <br />
                zrozumiałym
                <br />
                <span className="italic text-[#d4564e]">językiem.</span>
              </h1>
              <p className="text-base lg:text-lg text-[#475569] leading-relaxed max-w-lg mb-10">
                Indywidualne korepetycje dla uczniów szkół podstawowych i licealistów.
                Online i stacjonarnie.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#kontakt"
                  className="inline-flex items-center justify-center bg-[#1e293b] text-white text-sm font-medium px-8 py-3.5 hover:bg-[#d4564e] transition-colors duration-300"
                >
                  Umów lekcję
                </a>
                <a
                  href="#o-mnie"
                  className="inline-flex items-center justify-center border border-[#1e293b]/20 text-sm font-medium px-8 py-3.5 text-[#1e293b] hover:border-[#1e293b]/40 transition-colors duration-300"
                >
                  Poznaj mnie
                </a>
              </div>
              <div className="flex items-center gap-8 mt-14">
                {stats.map((s) => (
                  <div key={s.value}>
                    <span
                      className="block text-2xl lg:text-3xl font-medium text-[#1e293b]"
                      style={{ fontFamily: "'Newsreader', serif" }}
                    >
                      {s.value}
                    </span>
                    <span className="block text-[10px] font-semibold tracking-[0.15em] uppercase text-[#475569]/50 mt-1">
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden lg:flex flex-1 items-center justify-center">
              <div
                className="text-[#1e293b]/[0.04] leading-relaxed text-right space-y-3 select-none"
                style={{ fontFamily: "'Newsreader', serif", fontStyle: "italic" }}
              >
                <p className="text-5xl">a{"\u00B2"} + b{"\u00B2"} = c{"\u00B2"}</p>
                <p className="text-4xl">{"\u222B"}f(x)dx</p>
                <p className="text-3xl">{"\u0394"} = b{"\u00B2"} {"\u2212"} 4ac</p>
                <p className="text-2xl">lim x{"\u2192"}{"\u221E"}</p>
                <p className="text-xl">{"\u2211"} n=1...{"\u221E"}</p>
                <p className="text-lg">sin{"\u00B2"}{"\u03B1"} + cos{"\u00B2"}{"\u03B1"} = 1</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="o-mnie" className="relative bg-[#faf6f1] py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-16">
            <SectionNumber num="01" />
            <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-[#475569]/50">
              O mnie
            </span>
          </div>

          <div className="lg:flex lg:gap-16 xl:gap-24">
            <div className="lg:w-[360px] xl:w-[400px] shrink-0 mb-12 lg:mb-0">
              <div
                className="relative inline-block"
                style={{
                  transform: "rotate(-2deg)",
                }}
              >
                <div className="bg-white p-3 pb-12 shadow-[4px_6px_20px_rgba(0,0,0,0.1)]">
                  <img
                    src="/ola.jpg"
                    alt="Ola — korepetytorka matematyki"
                    className="w-full h-auto"
                  />
                  <p
                    className="absolute bottom-4 left-0 right-0 text-center text-sm text-[#475569]/70 italic"
                    style={{ fontFamily: "'Newsreader', serif" }}
                  >
                    Ola Matysek
                  </p>
                </div>
                <div
                  className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#d4564e] shadow-sm"
                  style={{ zIndex: 10 }}
                />
              </div>

              <div className="flex items-center gap-6 mt-10">
                {stats.map((s) => (
                  <div key={s.value} className="border-l-2 border-[#d4564e]/40 pl-3">
                    <span
                      className="block text-xl font-medium text-[#1e293b]"
                      style={{ fontFamily: "'Newsreader', serif" }}
                    >
                      {s.value}
                    </span>
                    <span className="block text-[10px] font-semibold tracking-[0.12em] uppercase text-[#475569]/50">
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-1">
              <h2
                className="text-4xl lg:text-5xl font-medium tracking-tight leading-tight mb-10"
                style={{ fontFamily: "'Newsreader', serif" }}
              >
                Poznaj swoją
                <br />
                <span className="relative inline-block">
                  korepetytorkę
                  <PencilUnderline />
                </span>
              </h2>
              <div className="space-y-5">
                {bioParas.map((para, i) => (
                  <p key={i} className="text-base text-[#475569] leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
              <blockquote className="mt-10 pl-6 border-l-2 border-[#d4564e]/40">
                <p
                  className="text-lg lg:text-xl italic text-[#1e293b]/80 leading-relaxed"
                  style={{ fontFamily: "'Newsreader', serif" }}
                >
                  {"\u201E"}Wierzę, że każdy uczeń może polubić matematykę — wystarczy odpowiedni przewodnik i cierpliwość.{"\u201D"}
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <section id="egzaminy" className="relative bg-[#1e293b] py-24 lg:py-32 overflow-hidden">
        <span
          className="absolute top-8 right-8 text-white/[0.03] text-sm select-none pointer-events-none hidden lg:block"
          style={{ fontFamily: "'Newsreader', serif", fontStyle: "italic" }}
        >
          {"\u222B"}f(x)dx = F(x) + C
        </span>
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-16">
            <span
              className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/20 text-sm font-medium text-white/60 relative"
              style={{
                fontFamily: "'Newsreader', serif",
                transform: "rotate(-2deg)",
              }}
            >
              02
            </span>
            <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-white/30">
              Egzaminy
            </span>
          </div>

          <div className="lg:flex lg:gap-12 xl:gap-16">
            <div className="lg:w-[280px] shrink-0 mb-10 lg:mb-0">
              <h2
                className="text-4xl lg:text-5xl font-medium tracking-tight text-white leading-tight mb-8"
                style={{ fontFamily: "'Newsreader', serif" }}
              >
                Do czego
                <br />
                <span className="italic text-[#d4564e]">przygotowuję</span>
              </h2>
              <div className="space-y-1">
                {exams.map((exam, i) => (
                  <button
                    key={exam.title}
                    onClick={() => setActiveExam(i)}
                    className={`w-full text-left py-4 border-b border-white/10 transition-all duration-300 group ${
                      activeExam === i ? "" : ""
                    }`}
                  >
                    <span
                      className={`block text-base font-medium transition-colors duration-300 ${
                        activeExam === i ? "text-white" : "text-white/30 group-hover:text-white/60"
                      }`}
                      style={{ fontFamily: "'Newsreader', serif" }}
                    >
                      {exam.title}
                    </span>
                    <span
                      className={`block text-xs mt-1 transition-colors duration-300 ${
                        activeExam === i ? "text-white/50" : "text-white/15"
                      }`}
                    >
                      {exam.subtitle}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                {[
                  { label: "Termin", value: exams[activeExam].date, rot: "0.5deg" },
                  { label: "Czas", value: exams[activeExam].duration, rot: "-0.5deg" },
                  { label: "Punkty", value: exams[activeExam].points, rot: "0.3deg" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="bg-white pt-5 pb-4 px-5 torn-top relative"
                    style={{
                      transform: `rotate(${item.rot})`,
                    }}
                  >
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#d4564e]" />
                    <span className="block text-[10px] font-semibold tracking-[0.15em] uppercase text-[#475569]/50 mb-1">
                      {item.label}
                    </span>
                    <span
                      className="block text-base font-medium text-[#1e293b]"
                      style={{ fontFamily: "'Newsreader', serif" }}
                    >
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

              <div
                className="bg-white pt-6 pb-6 px-6 torn-top relative"
                style={{ transform: "rotate(0.3deg)" }}
              >
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#d4564e]" />
                <h3
                  className="text-2xl font-medium text-[#1e293b] tracking-tight mb-2"
                  style={{ fontFamily: "'Newsreader', serif" }}
                >
                  {exams[activeExam].title}
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed mb-6">
                  {exams[activeExam].description}
                </p>
                <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#475569]/50 mb-3">
                  Zakres materiału
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                  {exams[activeExam].topics.map((topic) => (
                    <div key={topic} className="flex items-start gap-2 py-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#d4564e]/40 mt-1.5 shrink-0" />
                      <span className="text-sm text-[#475569]">{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="oferta" className="relative bg-[#faf6f1] py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-16">
            <SectionNumber num="03" />
            <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-[#475569]/50">
              Oferta
            </span>
          </div>

          <h2
            className="text-4xl lg:text-5xl font-medium tracking-tight leading-tight mb-16"
            style={{ fontFamily: "'Newsreader', serif" }}
          >
            Formy{" "}
            <span className="relative inline-block">
              zajęć
              <PencilUnderline />
            </span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div
              className="bg-white p-8 lg:p-10 relative torn-top pt-12"
              style={{ boxShadow: "2px 4px 16px rgba(0,0,0,0.06)" }}
            >
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#d4564e]" />
              <h3
                className="text-2xl font-medium tracking-tight mb-2"
                style={{ fontFamily: "'Newsreader', serif" }}
              >
                Lekcje Online
              </h3>
              <p className="text-sm text-[#475569]/60 mb-8">
                Ucz się z dowolnego miejsca
              </p>
              <div className="space-y-4">
                {onlineFeatures.map((f) => (
                  <div key={f} className="flex items-start gap-3">
                    <span
                      className="text-[#d4564e] text-lg leading-none mt-0.5 shrink-0"
                      style={{ fontFamily: "'Newsreader', serif" }}
                    >
                      {"\u2713"}
                    </span>
                    <span className="text-sm text-[#475569] leading-relaxed">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="bg-white p-8 lg:p-10 relative torn-top pt-12"
              style={{ boxShadow: "2px 4px 16px rgba(0,0,0,0.06)" }}
            >
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#d4564e]" />
              <h3
                className="text-2xl font-medium tracking-tight mb-2"
                style={{ fontFamily: "'Newsreader', serif" }}
              >
                Lekcje Stacjonarne
              </h3>
              <p className="text-sm text-[#475569]/60 mb-8">
                Klasyczna nauka twarzą w twarz
              </p>
              <div className="space-y-4">
                {stationaryFeatures.map((f) => (
                  <div key={f} className="flex items-start gap-3">
                    <span
                      className="text-[#d4564e] text-lg leading-none mt-0.5 shrink-0"
                      style={{ fontFamily: "'Newsreader', serif" }}
                    >
                      {"\u2713"}
                    </span>
                    <span className="text-sm text-[#475569] leading-relaxed">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="jak-wyglada-lekcja" className="relative bg-[#faf6f1] py-24 lg:py-32">
        <div
          className="absolute inset-0 ruled-lines opacity-20"
          style={{ backgroundPositionY: "8px" }}
        />
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-16">
            <SectionNumber num="04" />
            <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-[#475569]/50">
              Jak wygląda lekcja
            </span>
          </div>

          <h2
            className="text-4xl lg:text-5xl font-medium tracking-tight leading-tight mb-6"
            style={{ fontFamily: "'Newsreader', serif" }}
          >
            Cztery kroki do{" "}
            <span className="relative inline-block">
              sukcesu
              <PencilUnderline />
            </span>
          </h2>
          <p className="text-base text-[#475569] leading-relaxed max-w-lg mb-16">
            Każda współpraca zaczyna się od poznania Twoich potrzeb i kończy na wymiernych efektach.
          </p>

          <div className="relative">
            <div className="absolute left-5 top-5 bottom-5 w-0 border-l-2 border-dashed border-[#1e293b]/15 hidden lg:block" />

            <div className="space-y-12 lg:space-y-16">
              {steps.map((step, i) => (
                <div key={step.number} className="lg:flex lg:items-start lg:gap-10">
                  <div className="relative shrink-0 mb-4 lg:mb-0">
                    <span
                      className="inline-flex items-center justify-center w-10 h-10 rounded-full border-2 border-dashed border-[#1e293b]/20 bg-[#faf6f1] text-sm font-medium text-[#1e293b] relative z-10"
                      style={{
                        fontFamily: "'Newsreader', serif",
                        transform: `rotate(${i % 2 === 0 ? "-" : ""}3deg)`,
                      }}
                    >
                      {step.number}
                    </span>
                    {i < steps.length - 1 && (
                      <div className="absolute left-5 top-10 h-12 w-0 border-l-2 border-dashed border-[#1e293b]/10 lg:hidden" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h3
                      className="text-xl lg:text-2xl font-medium tracking-tight mb-2"
                      style={{ fontFamily: "'Newsreader', serif" }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-sm text-[#475569] leading-relaxed max-w-md">
                      {step.description}
                    </p>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="hidden lg:block shrink-0 self-center text-[#1e293b]/15 text-2xl">
                      {"\u2192"}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="dla-kogo" className="relative bg-white py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-16">
            <SectionNumber num="05" />
            <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-[#475569]/50">
              Dla kogo
            </span>
          </div>

          <div className="lg:flex lg:gap-16 xl:gap-24">
            <div className="lg:w-[380px] shrink-0 mb-12 lg:mb-0">
              <h2
                className="text-4xl lg:text-5xl font-medium tracking-tight leading-tight mb-6"
                style={{ fontFamily: "'Newsreader', serif" }}
              >
                Z kim{" "}
                <span className="relative inline-block">
                  pracuję
                  <PencilUnderline />
                </span>
              </h2>
              <p className="text-base text-[#475569] leading-relaxed">
                Zajęcia dopasowuję do poziomu, celów i stylu nauki każdego ucznia.
              </p>
            </div>

            <div className="flex-1">
              {studentProfiles.map((profile, i) => (
                <div
                  key={profile.label}
                  className="flex items-start gap-5 py-6 border-b border-[#1e293b]/10 group"
                >
                  <span
                    className="text-sm text-[#475569]/30 tabular-nums mt-0.5 shrink-0"
                    style={{ fontFamily: "'Newsreader', serif" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3
                      className="text-lg font-medium text-[#1e293b] group-hover:text-[#d4564e] transition-colors duration-300 tracking-tight"
                      style={{ fontFamily: "'Newsreader', serif" }}
                    >
                      {profile.label}
                    </h3>
                    <p className="text-sm text-[#475569]/60 mt-1">
                      {profile.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="opinie" className="relative bg-[#faf6f1] py-24 lg:py-32 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-16">
            <SectionNumber num="06" />
            <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-[#475569]/50">
              Opinie
            </span>
          </div>

          <h2
            className="text-4xl lg:text-5xl font-medium tracking-tight leading-tight mb-6"
            style={{ fontFamily: "'Newsreader', serif" }}
          >
            Co mówią{" "}
            <span className="relative inline-block">
              rodzice
              <PencilUnderline />
            </span>
          </h2>
          <p className="text-base text-[#475569] leading-relaxed max-w-lg mb-16">
            Prawdziwe opinie rodziców, którzy zaufali mojej metodzie pracy.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => {
              const rotations = [-1.5, 0.8, -0.6];
              return (
                <div
                  key={t.name}
                  className="relative bg-white p-6 lg:p-8"
                  style={{
                    transform: `rotate(${rotations[i]}deg)`,
                    background: `${ruledLinesBg}, #ffffff`,
                    backgroundPositionY: "12px",
                    boxShadow: "2px 4px 16px rgba(0,0,0,0.06)",
                  }}
                >
                  <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#d4564e] shadow-sm z-10" />
                  <span
                    className="block text-5xl text-[#d4564e]/20 leading-none mb-2 select-none"
                    style={{ fontFamily: "'Newsreader', serif" }}
                  >
                    {"\u201E"}
                  </span>
                  <p
                    className="text-sm text-[#1e293b]/80 leading-relaxed mb-6 relative z-10"
                    style={{ fontFamily: "'Newsreader', serif", fontStyle: "italic" }}
                  >
                    {t.quote}
                  </p>
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-[1px] bg-[#d4564e]/40" />
                    <div>
                      <p className="text-sm font-semibold text-[#1e293b]">{t.name}</p>
                      <p className="text-xs text-[#475569]/50">{t.context}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="kontakt" className="relative bg-white py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-16">
            <SectionNumber num="07" />
            <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-[#475569]/50">
              Kontakt
            </span>
          </div>

          <div className="lg:flex lg:gap-16 xl:gap-24">
            <div className="lg:flex-1 mb-16 lg:mb-0">
              <h2
                className="text-4xl lg:text-5xl font-medium tracking-tight leading-tight mb-6"
                style={{ fontFamily: "'Newsreader', serif" }}
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
                  <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#475569]/40 mb-2">
                    Email
                  </p>
                  <a
                    href="mailto:olamatysek@gmail.com"
                    className="text-lg font-medium text-[#1e293b] hover:text-[#d4564e] transition-colors duration-300"
                    style={{ fontFamily: "'Newsreader', serif" }}
                  >
                    olamatysek@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#475569]/40 mb-2">
                    Telefon
                  </p>
                  <a
                    href="tel:+48123456789"
                    className="text-lg font-medium text-[#1e293b] hover:text-[#d4564e] transition-colors duration-300"
                    style={{ fontFamily: "'Newsreader', serif" }}
                  >
                    +48 123 456 789
                  </a>
                </div>
                <div>
                  <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#475569]/40 mb-2">
                    Forma zajęć
                  </p>
                  <p
                    className="text-lg font-medium text-[#1e293b]"
                    style={{ fontFamily: "'Newsreader', serif" }}
                  >
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
                <div className="absolute left-6 top-0 bottom-0 w-[1px] bg-[#d4564e]/15" />

                <h3
                  className="text-xl font-medium tracking-tight mb-8"
                  style={{ fontFamily: "'Newsreader', serif" }}
                >
                  Wyślij wiadomość
                </h3>
                <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                  <div>
                    <label
                      className="block text-[10px] font-semibold tracking-[0.2em] uppercase text-[#475569]/50 mb-2"
                    >
                      Imię i nazwisko
                    </label>
                    <input
                      type="text"
                      className="w-full bg-transparent border-b border-[#c8bfb4] py-3 text-sm text-[#1e293b] outline-none focus:border-[#d4564e] transition-colors duration-300 placeholder:text-[#475569]/30"
                      placeholder="Jan Kowalski"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-[10px] font-semibold tracking-[0.2em] uppercase text-[#475569]/50 mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full bg-transparent border-b border-[#c8bfb4] py-3 text-sm text-[#1e293b] outline-none focus:border-[#d4564e] transition-colors duration-300 placeholder:text-[#475569]/30"
                      placeholder="jan@email.com"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-[10px] font-semibold tracking-[0.2em] uppercase text-[#475569]/50 mb-2"
                    >
                      Telefon
                    </label>
                    <input
                      type="tel"
                      className="w-full bg-transparent border-b border-[#c8bfb4] py-3 text-sm text-[#1e293b] outline-none focus:border-[#d4564e] transition-colors duration-300 placeholder:text-[#475569]/30"
                      placeholder="+48 000 000 000"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-[10px] font-semibold tracking-[0.2em] uppercase text-[#475569]/50 mb-2"
                    >
                      Wiadomość
                    </label>
                    <textarea
                      rows={4}
                      className="w-full bg-transparent border-b border-[#c8bfb4] py-3 text-sm text-[#1e293b] outline-none focus:border-[#d4564e] transition-colors duration-300 resize-none placeholder:text-[#475569]/30"
                      placeholder="Opisz, jak mogę Ci pomóc..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-[#1e293b] text-white text-sm font-medium px-8 py-3.5 hover:bg-[#d4564e] transition-colors duration-300 w-full lg:w-auto"
                  >
                    Wyślij wiadomość
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#1e293b]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="py-16 lg:flex lg:items-start lg:justify-between lg:gap-12">
            <div className="mb-12 lg:mb-0">
              <span
                className="text-xl font-medium tracking-tight text-white"
                style={{ fontFamily: "'Newsreader', serif" }}
              >
                matma<span className="text-[#d4564e]">.</span>
              </span>
              <p className="text-sm text-white/30 mt-4 max-w-xs leading-relaxed">
                Korepetycje z matematyki. Indywidualne podejście, sprawdzone metody, realne efekty.
              </p>
              <div className="flex items-center gap-6 mt-8">
                <a
                  href="#"
                  className="text-xs font-medium tracking-[0.12em] uppercase text-white/30 hover:text-[#d4564e] transition-colors duration-300"
                >
                  Facebook
                </a>
                <a
                  href="#"
                  className="text-xs font-medium tracking-[0.12em] uppercase text-white/30 hover:text-[#d4564e] transition-colors duration-300"
                >
                  Instagram
                </a>
                <a
                  href="#"
                  className="text-xs font-medium tracking-[0.12em] uppercase text-white/30 hover:text-[#d4564e] transition-colors duration-300"
                >
                  TikTok
                </a>
              </div>
            </div>

            <div>
              <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-white/20 mb-6">
                Nawigacja
              </p>
              <div className="grid grid-cols-2 gap-x-10 gap-y-3">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-sm text-white/40 hover:text-[#d4564e] transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/20">
              {"\u00A9"} {new Date().getFullYear()} Korepetycje z Matematyki — Ola Matysek
            </p>
            <div className="flex items-center gap-6 text-xs text-white/20">
              <a href="#" className="hover:text-[#d4564e] transition-colors duration-300">
                Polityka prywatności
              </a>
              <a href="#" className="hover:text-[#d4564e] transition-colors duration-300">
                Regulamin
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
