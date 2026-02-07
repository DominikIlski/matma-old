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
    <div className="min-h-screen bg-white text-[#1a1a1a] antialiased" style={{ scrollBehavior: "smooth" }}>
      <link
        href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700;800;900&family=Source+Sans+3:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <style>{`
        * { font-family: 'Source Sans 3', sans-serif; }
        h1, h2, h3, h4, h5, h6, .font-heading { font-family: 'Archivo', sans-serif; }
        html { scroll-behavior: smooth; }
      `}</style>

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-sm" : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between px-6 lg:px-12 h-16 lg:h-20">
          <a href="#" className="font-heading text-lg lg:text-xl font-900 tracking-tight" style={{ fontFamily: "Archivo, sans-serif" }}>
            MATMA.
          </a>
          <button
            onClick={() => setMenuOpen(true)}
            className="text-xs font-500 tracking-[0.25em] uppercase hover:text-[#e8a838] transition-colors duration-300"
            style={{ fontFamily: "Archivo, sans-serif" }}
          >
            Menu
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 z-[100] bg-[#1a3a2a] flex flex-col">
          <div className="flex items-center justify-between px-6 lg:px-12 h-16 lg:h-20">
            <span className="text-lg lg:text-xl font-900 tracking-tight text-white" style={{ fontFamily: "Archivo, sans-serif" }}>
              MATMA.
            </span>
            <button
              onClick={() => setMenuOpen(false)}
              className="text-xs font-500 tracking-[0.25em] uppercase text-white/60 hover:text-[#e8a838] transition-colors duration-300"
              style={{ fontFamily: "Archivo, sans-serif" }}
            >
              Zamknij
            </button>
          </div>
          <div className="flex-1 flex flex-col justify-center px-6 lg:px-12">
            <nav className="space-y-2">
              {navLinks.map((link, i) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block group"
                >
                  <div className="flex items-baseline gap-6 py-3 lg:py-4 border-b border-white/10">
                    <span className="text-xs text-white/30 font-500 tabular-nums" style={{ fontFamily: "Archivo, sans-serif" }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className="text-3xl sm:text-4xl lg:text-6xl font-800 text-white group-hover:text-[#e8a838] transition-colors duration-300 tracking-tight"
                      style={{ fontFamily: "Archivo, sans-serif" }}
                    >
                      {link.label}
                    </span>
                  </div>
                </a>
              ))}
            </nav>
          </div>
          <div className="px-6 lg:px-12 pb-8 flex items-center gap-8 text-xs text-white/30">
            <a href="mailto:olamatysek@gmail.com" className="hover:text-[#e8a838] transition-colors">
              olamatysek@gmail.com
            </a>
            <span>+48 123 456 789</span>
          </div>
        </div>
      )}

      <section className="min-h-screen flex flex-col lg:flex-row">
        <div className="flex-1 bg-white flex flex-col justify-center px-6 lg:px-16 xl:px-24 py-32 lg:py-0">
          <div className="max-w-xl">
            <p
              className="text-[10px] lg:text-xs font-600 tracking-[0.3em] uppercase text-[#1a3a2a]/40 mb-8"
              style={{ fontFamily: "Archivo, sans-serif" }}
            >
              Korepetycje z matematyki
            </p>
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-900 tracking-tighter leading-[0.9]"
              style={{ fontFamily: "Archivo, sans-serif" }}
            >
              Matematyka
              <br />
              bez
              <br />
              <span className="text-[#e8a838]">stresu.</span>
            </h1>
            <div className="w-16 h-[2px] bg-[#1a3a2a] mt-10 mb-8" />
            <p className="text-base lg:text-lg font-300 text-[#1a3a2a]/60 leading-relaxed max-w-md">
              Indywidualne korepetycje dla uczniów szkół podstawowych i licealistów. Online i stacjonarnie.
            </p>
            <a
              href="#kontakt"
              className="inline-block mt-10 bg-[#1a3a2a] text-white text-xs font-600 tracking-[0.2em] uppercase px-10 py-4 hover:bg-[#e8a838] transition-colors duration-300"
              style={{ fontFamily: "Archivo, sans-serif" }}
            >
              Umów lekcję
            </a>
          </div>
        </div>
        <div className="flex-1 bg-[#1a3a2a] flex items-center justify-center px-6 lg:px-16 py-24 lg:py-0 relative overflow-hidden">
          <div className="text-white/[0.06] select-none pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="text-[20rem] sm:text-[28rem] lg:text-[24rem] xl:text-[30rem] font-900 leading-none tracking-tighter" style={{ fontFamily: "Archivo, sans-serif" }}>
              {"\u03C0"}
            </div>
          </div>
          <div className="relative z-10 text-white/[0.08] space-y-4 text-right w-full max-w-md">
            <p className="text-4xl lg:text-5xl xl:text-6xl font-300 leading-tight" style={{ fontFamily: "Archivo, sans-serif" }}>
              {"\u222B"} f(x) dx
            </p>
            <p className="text-3xl lg:text-4xl font-300" style={{ fontFamily: "Archivo, sans-serif" }}>
              a{"\u00B2"} + b{"\u00B2"} = c{"\u00B2"}
            </p>
            <p className="text-2xl lg:text-3xl font-300" style={{ fontFamily: "Archivo, sans-serif" }}>
              {"\u0394"} = b{"\u00B2"} {"\u2212"} 4ac
            </p>
            <p className="text-xl lg:text-2xl font-300" style={{ fontFamily: "Archivo, sans-serif" }}>
              lim x{"\u2192"}{"\u221E"}
            </p>
            <p className="text-lg font-300" style={{ fontFamily: "Archivo, sans-serif" }}>
              {"\u2211"} n=1...{"\u221E"}
            </p>
          </div>
          <div className="absolute bottom-8 left-6 lg:left-16 flex items-center gap-8">
            {stats.map((s) => (
              <div key={s.value} className="text-white/60">
                <span className="block text-2xl lg:text-3xl font-800 text-[#e8a838]" style={{ fontFamily: "Archivo, sans-serif" }}>
                  {s.value}
                </span>
                <span className="block text-[10px] font-500 tracking-[0.15em] uppercase text-white/40">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="o-mnie" className="flex flex-col lg:flex-row">
        <div className="flex-1 bg-[#1a3a2a] px-6 lg:px-16 xl:px-24 py-20 lg:py-32">
          <div className="max-w-xl ml-auto">
            <p
              className="text-[10px] font-600 tracking-[0.3em] uppercase text-white/30 mb-12"
              style={{ fontFamily: "Archivo, sans-serif" }}
            >
              O mnie
            </p>
            <div className="w-full max-w-sm mb-10 overflow-hidden">
              <img
                src="/ola.jpg"
                alt="Ola — korepetytorka matematyki"
                className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="flex items-center gap-6 mb-10">
              {stats.map((s) => (
                <div key={s.value} className="border-l-2 border-[#e8a838] pl-4">
                  <span className="block text-xl font-800 text-white" style={{ fontFamily: "Archivo, sans-serif" }}>
                    {s.value}
                  </span>
                  <span className="block text-[10px] font-500 tracking-[0.15em] uppercase text-white/40">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-xs font-500 tracking-[0.15em] uppercase text-[#e8a838]/80 mb-4">
              Matplaneta
            </p>
            <p className="text-2xl lg:text-3xl font-300 italic text-white/70 leading-snug">
              {"\u201E"}Wierzę, że każdy uczeń może polubić matematykę — wystarczy odpowiedni przewodnik i cierpliwość.{"\u201D"}
            </p>
          </div>
        </div>
        <div className="flex-1 bg-white px-6 lg:px-16 xl:px-24 py-20 lg:py-32">
          <div className="max-w-xl">
            <h2
              className="text-4xl lg:text-5xl font-900 tracking-tighter leading-[0.95] mb-12"
              style={{ fontFamily: "Archivo, sans-serif" }}
            >
              Ola
              <span className="text-[#e8a838]">.</span>
            </h2>
            <div className="space-y-6">
              {bioParas.map((para, i) => (
                <p key={i} className="text-base font-300 text-[#1a3a2a]/70 leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="egzaminy" className="flex flex-col lg:flex-row">
        <div className="flex-1 bg-white px-6 lg:px-16 xl:px-24 py-20 lg:py-32">
          <div className="max-w-xl ml-auto">
            <p
              className="text-[10px] font-600 tracking-[0.3em] uppercase text-[#1a3a2a]/30 mb-12"
              style={{ fontFamily: "Archivo, sans-serif" }}
            >
              Egzaminy
            </p>
            <h2
              className="text-4xl lg:text-5xl font-900 tracking-tighter leading-[0.95] mb-16"
              style={{ fontFamily: "Archivo, sans-serif" }}
            >
              Do czego
              <br />
              przygotowuję
              <span className="text-[#e8a838]">.</span>
            </h2>
            <div className="space-y-0">
              {exams.map((exam, i) => (
                <button
                  key={exam.title}
                  onClick={() => setActiveExam(i)}
                  className={`w-full text-left py-6 border-t border-[#1a3a2a]/10 transition-colors duration-300 group ${
                    activeExam === i ? "bg-transparent" : ""
                  }`}
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <span
                      className={`text-lg lg:text-xl font-700 tracking-tight transition-colors duration-300 ${
                        activeExam === i ? "text-[#1a3a2a]" : "text-[#1a3a2a]/40 group-hover:text-[#1a3a2a]/70"
                      }`}
                      style={{ fontFamily: "Archivo, sans-serif" }}
                    >
                      {exam.title}
                    </span>
                    <span
                      className={`text-xs font-500 transition-colors duration-300 ${
                        activeExam === i ? "text-[#e8a838]" : "text-[#1a3a2a]/20"
                      }`}
                    >
                      {activeExam === i ? "\u2190" : "\u2192"}
                    </span>
                  </div>
                  <p
                    className={`text-xs font-400 mt-1 transition-colors duration-300 ${
                      activeExam === i ? "text-[#1a3a2a]/50" : "text-[#1a3a2a]/20"
                    }`}
                  >
                    {exam.subtitle}
                  </p>
                </button>
              ))}
              <div className="border-t border-[#1a3a2a]/10" />
            </div>
          </div>
        </div>
        <div className="flex-1 bg-[#1a3a2a] px-6 lg:px-16 xl:px-24 py-20 lg:py-32">
          <div className="max-w-xl">
            <div className="mb-8">
              <h3
                className="text-3xl lg:text-4xl font-800 text-white tracking-tight leading-tight mb-2"
                style={{ fontFamily: "Archivo, sans-serif" }}
              >
                {exams[activeExam].title}
              </h3>
              <p className="text-sm font-400 text-white/40">
                {exams[activeExam].subtitle}
              </p>
            </div>
            <div className="flex gap-6 mb-10">
              <div className="border-l-2 border-[#e8a838] pl-4">
                <span className="block text-[10px] font-500 tracking-[0.15em] uppercase text-white/30">Termin</span>
                <span className="block text-sm font-500 text-white/80">{exams[activeExam].date}</span>
              </div>
              <div className="border-l-2 border-[#e8a838] pl-4">
                <span className="block text-[10px] font-500 tracking-[0.15em] uppercase text-white/30">Czas</span>
                <span className="block text-sm font-500 text-white/80">{exams[activeExam].duration}</span>
              </div>
              <div className="border-l-2 border-[#e8a838] pl-4">
                <span className="block text-[10px] font-500 tracking-[0.15em] uppercase text-white/30">Punkty</span>
                <span className="block text-sm font-500 text-white/80">{exams[activeExam].points}</span>
              </div>
            </div>
            <div className="w-12 h-[2px] bg-[#e8a838] mb-8" />
            <p className="text-base font-300 text-white/60 leading-relaxed mb-10">
              {exams[activeExam].description}
            </p>
            <p
              className="text-[10px] font-600 tracking-[0.3em] uppercase text-white/30 mb-4"
              style={{ fontFamily: "Archivo, sans-serif" }}
            >
              Zakres materiału
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
              {exams[activeExam].topics.map((topic) => (
                <div key={topic} className="flex items-center gap-3 py-1">
                  <span className="w-1.5 h-[2px] bg-[#e8a838] shrink-0" />
                  <span className="text-sm font-400 text-white/60">{topic}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="oferta" className="flex flex-col lg:flex-row">
        <div className="flex-1 bg-[#1a3a2a] px-6 lg:px-16 xl:px-24 py-20 lg:py-32">
          <div className="max-w-xl ml-auto">
            <p
              className="text-[10px] font-600 tracking-[0.3em] uppercase text-white/30 mb-12"
              style={{ fontFamily: "Archivo, sans-serif" }}
            >
              Oferta
            </p>
            <h2
              className="text-4xl lg:text-5xl font-900 tracking-tighter text-white leading-[0.95] mb-16"
              style={{ fontFamily: "Archivo, sans-serif" }}
            >
              Formy
              <br />
              zajęć
              <span className="text-[#e8a838]">.</span>
            </h2>
            <div className="mb-16">
              <div className="flex items-baseline gap-4 mb-8">
                <span className="text-6xl lg:text-7xl font-900 text-[#e8a838]" style={{ fontFamily: "Archivo, sans-serif" }}>
                  01
                </span>
                <h3
                  className="text-2xl font-700 text-white tracking-tight"
                  style={{ fontFamily: "Archivo, sans-serif" }}
                >
                  Lekcje Online
                </h3>
              </div>
              <div className="space-y-3 pl-2">
                {onlineFeatures.map((f) => (
                  <div key={f} className="flex items-start gap-4">
                    <span className="w-4 h-[1px] bg-[#e8a838] mt-[10px] shrink-0" />
                    <span className="text-sm font-300 text-white/60 leading-relaxed">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-white px-6 lg:px-16 xl:px-24 py-20 lg:py-32">
          <div className="max-w-xl flex flex-col justify-end h-full">
            <div>
              <div className="flex items-baseline gap-4 mb-8">
                <span className="text-6xl lg:text-7xl font-900 text-[#e8a838]" style={{ fontFamily: "Archivo, sans-serif" }}>
                  02
                </span>
                <h3
                  className="text-2xl font-700 text-[#1a3a2a] tracking-tight"
                  style={{ fontFamily: "Archivo, sans-serif" }}
                >
                  Lekcje Stacjonarne
                </h3>
              </div>
              <div className="space-y-3 pl-2">
                {stationaryFeatures.map((f) => (
                  <div key={f} className="flex items-start gap-4">
                    <span className="w-4 h-[1px] bg-[#1a3a2a]/30 mt-[10px] shrink-0" />
                    <span className="text-sm font-300 text-[#1a3a2a]/60 leading-relaxed">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="jak-wyglada-lekcja" className="flex flex-col lg:flex-row">
        <div className="flex-1 bg-white px-6 lg:px-16 xl:px-24 py-20 lg:py-32">
          <div className="max-w-xl ml-auto">
            <p
              className="text-[10px] font-600 tracking-[0.3em] uppercase text-[#1a3a2a]/30 mb-12"
              style={{ fontFamily: "Archivo, sans-serif" }}
            >
              Jak wygląda lekcja
            </p>
            <h2
              className="text-4xl lg:text-5xl font-900 tracking-tighter leading-[0.95] mb-8"
              style={{ fontFamily: "Archivo, sans-serif" }}
            >
              Cztery kroki
              <br />
              do sukcesu
              <span className="text-[#e8a838]">.</span>
            </h2>
            <p className="text-base font-300 text-[#1a3a2a]/50 leading-relaxed max-w-sm">
              Każda współpraca zaczyna się od poznania Twoich potrzeb i kończy na wymiernych efektach.
            </p>
          </div>
        </div>
        <div className="flex-1 bg-[#1a3a2a] px-6 lg:px-16 xl:px-24 py-20 lg:py-32 relative">
          <div className="max-w-xl">
            <div className="absolute left-6 lg:left-16 xl:left-24 top-20 lg:top-32 bottom-20 lg:bottom-32 w-[1px] bg-white/10" />
            <div className="space-y-16">
              {steps.map((step, i) => (
                <div key={step.number} className="relative pl-12 lg:pl-16">
                  <div className="absolute left-0 top-0 w-6 h-6 bg-[#e8a838] flex items-center justify-center -ml-[12px] lg:-ml-[12px]">
                    <span className="text-[10px] font-700 text-[#1a3a2a]" style={{ fontFamily: "Archivo, sans-serif" }}>
                      {step.number}
                    </span>
                  </div>
                  <h3
                    className="text-xl lg:text-2xl font-700 text-white tracking-tight mb-3"
                    style={{ fontFamily: "Archivo, sans-serif" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-sm font-300 text-white/50 leading-relaxed">
                    {step.description}
                  </p>
                  {i < steps.length - 1 && (
                    <div className="absolute left-[-1px] lg:left-[-1px] top-6 h-full w-[1px]" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="dla-kogo" className="flex flex-col lg:flex-row">
        <div className="flex-1 bg-[#1a3a2a] px-6 lg:px-16 xl:px-24 py-20 lg:py-32">
          <div className="max-w-xl ml-auto">
            <p
              className="text-[10px] font-600 tracking-[0.3em] uppercase text-white/30 mb-12"
              style={{ fontFamily: "Archivo, sans-serif" }}
            >
              Dla kogo
            </p>
            <h2
              className="text-4xl lg:text-5xl font-900 tracking-tighter text-white leading-[0.95] mb-8"
              style={{ fontFamily: "Archivo, sans-serif" }}
            >
              Pracuję z
              <span className="text-[#e8a838]">.</span>
            </h2>
            <p className="text-base font-300 text-white/40 leading-relaxed max-w-sm">
              Zajęcia dopasowuję do poziomu, celów i stylu nauki każdego ucznia.
            </p>
          </div>
        </div>
        <div className="flex-1 bg-white px-6 lg:px-16 xl:px-24 py-20 lg:py-32">
          <div className="max-w-xl">
            <div className="space-y-0">
              {studentProfiles.map((profile, i) => (
                <div
                  key={profile.label}
                  className="py-6 border-b border-[#1a3a2a]/10 group"
                >
                  <div className="flex items-baseline gap-6">
                    <span
                      className="text-xs font-600 text-[#1a3a2a]/20 tabular-nums"
                      style={{ fontFamily: "Archivo, sans-serif" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3
                        className="text-lg font-700 text-[#1a3a2a] tracking-tight group-hover:text-[#e8a838] transition-colors duration-300"
                        style={{ fontFamily: "Archivo, sans-serif" }}
                      >
                        {profile.label}
                      </h3>
                      <p className="text-sm font-300 text-[#1a3a2a]/40 mt-1">
                        {profile.detail}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="opinie" className="flex flex-col lg:flex-row">
        <div className="flex-1 bg-white px-6 lg:px-16 xl:px-24 py-20 lg:py-32">
          <div className="max-w-xl ml-auto">
            <p
              className="text-[10px] font-600 tracking-[0.3em] uppercase text-[#1a3a2a]/30 mb-12"
              style={{ fontFamily: "Archivo, sans-serif" }}
            >
              Opinie
            </p>
            <h2
              className="text-4xl lg:text-5xl font-900 tracking-tighter leading-[0.95] mb-8"
              style={{ fontFamily: "Archivo, sans-serif" }}
            >
              Co mówią
              <br />
              rodzice
              <span className="text-[#e8a838]">.</span>
            </h2>
            <p className="text-base font-300 text-[#1a3a2a]/50 leading-relaxed max-w-sm">
              Prawdziwe opinie rodziców, którzy zaufali mojej metodzie pracy.
            </p>
          </div>
        </div>
        <div className="flex-1 bg-[#1a3a2a] px-6 lg:px-16 xl:px-24 py-20 lg:py-32">
          <div className="max-w-xl space-y-16">
            {testimonials.map((t) => (
              <div key={t.name} className="relative">
                <span
                  className="text-8xl lg:text-9xl font-900 text-[#e8a838]/15 leading-none absolute -top-8 -left-2 select-none pointer-events-none"
                  style={{ fontFamily: "Archivo, sans-serif" }}
                >
                  {"\u201E"}
                </span>
                <p className="text-lg lg:text-xl font-300 text-white/80 leading-relaxed relative z-10 mb-6">
                  {t.quote}
                </p>
                <div className="flex items-center gap-3">
                  <span className="w-8 h-[1px] bg-[#e8a838]" />
                  <div>
                    <p className="text-sm font-600 text-white/90">{t.name}</p>
                    <p className="text-xs font-300 text-white/30">{t.context}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="kontakt" className="flex flex-col lg:flex-row">
        <div className="flex-1 bg-[#1a3a2a] px-6 lg:px-16 xl:px-24 py-20 lg:py-32">
          <div className="max-w-xl ml-auto">
            <p
              className="text-[10px] font-600 tracking-[0.3em] uppercase text-white/30 mb-12"
              style={{ fontFamily: "Archivo, sans-serif" }}
            >
              Kontakt
            </p>
            <h2
              className="text-4xl lg:text-5xl xl:text-6xl font-900 tracking-tighter text-white leading-[0.95] mb-12"
              style={{ fontFamily: "Archivo, sans-serif" }}
            >
              Porozmawiajmy
              <span className="text-[#e8a838]">.</span>
            </h2>
            <p className="text-base font-300 text-white/50 leading-relaxed mb-16 max-w-md">
              Pierwsza konsultacja jest bezpłatna. Napisz lub zadzwoń — ustalimy, jak mogę pomóc.
            </p>
            <div className="space-y-8">
              <div>
                <p
                  className="text-[10px] font-600 tracking-[0.3em] uppercase text-white/20 mb-2"
                  style={{ fontFamily: "Archivo, sans-serif" }}
                >
                  Email
                </p>
                <a
                  href="mailto:olamatysek@gmail.com"
                  className="text-lg font-500 text-white hover:text-[#e8a838] transition-colors duration-300"
                >
                  olamatysek@gmail.com
                </a>
              </div>
              <div>
                <p
                  className="text-[10px] font-600 tracking-[0.3em] uppercase text-white/20 mb-2"
                  style={{ fontFamily: "Archivo, sans-serif" }}
                >
                  Telefon
                </p>
                <a
                  href="tel:+48123456789"
                  className="text-lg font-500 text-white hover:text-[#e8a838] transition-colors duration-300"
                >
                  +48 123 456 789
                </a>
              </div>
              <div>
                <p
                  className="text-[10px] font-600 tracking-[0.3em] uppercase text-white/20 mb-2"
                  style={{ fontFamily: "Archivo, sans-serif" }}
                >
                  Forma zajęć
                </p>
                <p className="text-lg font-500 text-white/80">
                  Online / Stacjonarnie
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-white px-6 lg:px-16 xl:px-24 py-20 lg:py-32">
          <div className="max-w-xl">
            <h3
              className="text-2xl font-800 tracking-tight mb-8"
              style={{ fontFamily: "Archivo, sans-serif" }}
            >
              Wyślij wiadomość
            </h3>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
              <div>
                <label
                  className="block text-[10px] font-600 tracking-[0.2em] uppercase text-[#1a3a2a]/40 mb-2"
                  style={{ fontFamily: "Archivo, sans-serif" }}
                >
                  Imię i nazwisko
                </label>
                <input
                  type="text"
                  className="w-full border-b-2 border-[#1a3a2a]/10 bg-transparent py-3 text-sm font-400 text-[#1a3a2a] outline-none focus:border-[#e8a838] transition-colors duration-300 placeholder:text-[#1a3a2a]/20"
                  placeholder="Jan Kowalski"
                />
              </div>
              <div>
                <label
                  className="block text-[10px] font-600 tracking-[0.2em] uppercase text-[#1a3a2a]/40 mb-2"
                  style={{ fontFamily: "Archivo, sans-serif" }}
                >
                  Email
                </label>
                <input
                  type="email"
                  className="w-full border-b-2 border-[#1a3a2a]/10 bg-transparent py-3 text-sm font-400 text-[#1a3a2a] outline-none focus:border-[#e8a838] transition-colors duration-300 placeholder:text-[#1a3a2a]/20"
                  placeholder="jan@email.com"
                />
              </div>
              <div>
                <label
                  className="block text-[10px] font-600 tracking-[0.2em] uppercase text-[#1a3a2a]/40 mb-2"
                  style={{ fontFamily: "Archivo, sans-serif" }}
                >
                  Telefon
                </label>
                <input
                  type="tel"
                  className="w-full border-b-2 border-[#1a3a2a]/10 bg-transparent py-3 text-sm font-400 text-[#1a3a2a] outline-none focus:border-[#e8a838] transition-colors duration-300 placeholder:text-[#1a3a2a]/20"
                  placeholder="+48 000 000 000"
                />
              </div>
              <div>
                <label
                  className="block text-[10px] font-600 tracking-[0.2em] uppercase text-[#1a3a2a]/40 mb-2"
                  style={{ fontFamily: "Archivo, sans-serif" }}
                >
                  Wiadomość
                </label>
                <textarea
                  rows={4}
                  className="w-full border-b-2 border-[#1a3a2a]/10 bg-transparent py-3 text-sm font-400 text-[#1a3a2a] outline-none focus:border-[#e8a838] transition-colors duration-300 resize-none placeholder:text-[#1a3a2a]/20"
                  placeholder="Opisz, jak mogę Ci pomóc..."
                />
              </div>
              <button
                type="submit"
                className="bg-[#1a3a2a] text-white text-xs font-600 tracking-[0.2em] uppercase px-10 py-4 hover:bg-[#e8a838] transition-colors duration-300 w-full lg:w-auto"
                style={{ fontFamily: "Archivo, sans-serif" }}
              >
                Wyślij wiadomość
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-[#1a3a2a]">
        <div className="flex flex-col lg:flex-row">
          <div className="flex-1 px-6 lg:px-16 xl:px-24 py-16">
            <div className="max-w-xl ml-auto">
              <span
                className="text-xl font-900 tracking-tight text-white"
                style={{ fontFamily: "Archivo, sans-serif" }}
              >
                MATMA.
              </span>
              <p className="text-sm font-300 text-white/30 mt-4 max-w-xs">
                Korepetycje z matematyki. Indywidualne podejście, sprawdzone metody, realne efekty.
              </p>
              <div className="flex items-center gap-6 mt-8">
                <a
                  href="#"
                  className="text-xs font-500 tracking-[0.15em] uppercase text-white/30 hover:text-[#e8a838] transition-colors duration-300"
                >
                  Facebook
                </a>
                <a
                  href="#"
                  className="text-xs font-500 tracking-[0.15em] uppercase text-white/30 hover:text-[#e8a838] transition-colors duration-300"
                >
                  Instagram
                </a>
                <a
                  href="#"
                  className="text-xs font-500 tracking-[0.15em] uppercase text-white/30 hover:text-[#e8a838] transition-colors duration-300"
                >
                  TikTok
                </a>
              </div>
            </div>
          </div>
          <div className="flex-1 px-6 lg:px-16 xl:px-24 py-16 border-t lg:border-t-0 lg:border-l border-white/10">
            <div className="max-w-xl">
              <p
                className="text-[10px] font-600 tracking-[0.3em] uppercase text-white/20 mb-6"
                style={{ fontFamily: "Archivo, sans-serif" }}
              >
                Nawigacja
              </p>
              <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-sm font-400 text-white/40 hover:text-[#e8a838] transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 px-6 lg:px-16 xl:px-24 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-400 text-white/20">
            {"\u00A9"} {new Date().getFullYear()} Korepetycje z Matematyki — Ola Matysek
          </p>
          <div className="flex items-center gap-6 text-xs font-400 text-white/20">
            <a href="#" className="hover:text-[#e8a838] transition-colors duration-300">
              Polityka prywatności
            </a>
            <a href="#" className="hover:text-[#e8a838] transition-colors duration-300">
              Regulamin
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
