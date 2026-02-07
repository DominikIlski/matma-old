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
      "Nasza córka zawsze miała problemy z geometrią i trygonometrią. Indywidualne podejście sprawiło, że w końcu zrozumiała te tematy. Ocena z matematyki poprawiła się z trójki na piątkę w ciągu jednego semestru. Profesjonalizm i cierpliwość na najwyższym poziomie.",
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

export default function Design2() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeExam, setActiveExam] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="min-h-screen bg-[#f5f2ed] overflow-x-hidden"
      style={{ scrollBehavior: "smooth" }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=DM+Sans:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <style>{`
        html { scroll-behavior: smooth; }
        .font-heading { font-family: 'Space Grotesk', sans-serif; }
        .font-body { font-family: 'DM Sans', sans-serif; }
        .geo-card {
          border: 4px solid #1c1c1c;
          box-shadow: 6px 6px 0px #1c1c1c;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .geo-card:hover {
          transform: translate(-2px, -2px);
          box-shadow: 8px 8px 0px #1c1c1c;
        }
        .geo-card-coral {
          border: 4px solid #ff6b4a;
          box-shadow: 6px 6px 0px #ff6b4a;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .geo-card-coral:hover {
          transform: translate(-2px, -2px);
          box-shadow: 8px 8px 0px #ff6b4a;
        }
        .testimonial-strip::-webkit-scrollbar { height: 6px; }
        .testimonial-strip::-webkit-scrollbar-track { background: transparent; }
        .testimonial-strip::-webkit-scrollbar-thumb { background: #ff6b4a; border-radius: 3px; }
        .angled-top {
          clip-path: polygon(0 6vw, 100% 0, 100% 100%, 0 100%);
        }
        .angled-bottom {
          clip-path: polygon(0 0, 100% 0, 100% calc(100% - 6vw), 0 100%);
        }
        .angled-both {
          clip-path: polygon(0 6vw, 100% 0, 100% calc(100% - 6vw), 0 100%);
        }
        @keyframes geo-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes geo-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-16px); }
        }
        @keyframes geo-pulse {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 0.35; }
        }
      `}</style>

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-heading ${
          scrolled ? "bg-[#1c1c1c] shadow-xl" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <a
              href="#"
              className={`text-2xl font-bold tracking-tight transition-colors ${
                scrolled ? "text-white" : "text-[#1c1c1c]"
              }`}
            >
              matma<span className="text-[#ff6b4a]">.</span>pro
            </a>

            <div className="hidden lg:flex items-center">
              <div
                className={`flex items-center gap-1 rounded-full px-2 py-1.5 ${
                  scrolled
                    ? "bg-[#2a2a2a] border border-[#3a3a3a]"
                    : "bg-white/80 backdrop-blur-sm border border-[#1c1c1c]/10"
                }`}
              >
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      scrolled
                        ? "text-white/70 hover:text-white hover:bg-[#ff6b4a]"
                        : "text-[#1c1c1c]/70 hover:text-[#1c1c1c] hover:bg-[#ff6b4a] hover:text-white"
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 cursor-pointer ${
                scrolled ? "text-white" : "text-[#1c1c1c]"
              }`}
              aria-label="Menu"
            >
              <span
                className={`block w-6 h-0.5 transition-all duration-300 ${
                  mobileMenuOpen ? "rotate-45 translate-y-2" : ""
                } ${scrolled ? "bg-white" : "bg-[#1c1c1c]"}`}
              />
              <span
                className={`block w-6 h-0.5 transition-all duration-300 ${
                  mobileMenuOpen ? "opacity-0" : ""
                } ${scrolled ? "bg-white" : "bg-[#1c1c1c]"}`}
              />
              <span
                className={`block w-6 h-0.5 transition-all duration-300 ${
                  mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                } ${scrolled ? "bg-white" : "bg-[#1c1c1c]"}`}
              />
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#1c1c1c] border-t border-[#2a2a2a]">
            <div className="px-4 py-6 flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white/80 hover:text-[#ff6b4a] font-heading font-medium text-lg py-2 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      <section className="relative min-h-screen flex items-center pt-20 pb-32 overflow-hidden">
        <div className="absolute top-32 right-[8%] w-24 h-24 border-4 border-[#ff6b4a]/20 rotate-45" style={{ animation: "geo-float 5s ease-in-out infinite" }} />
        <div className="absolute top-[20%] left-[5%] w-16 h-16 rounded-full border-4 border-[#1c1c1c]/10" style={{ animation: "geo-float 7s ease-in-out infinite 1s" }} />
        <div className="absolute bottom-[25%] right-[15%] w-20 h-20 bg-[#ff6b4a]/10 rotate-12" style={{ animation: "geo-pulse 4s ease-in-out infinite" }} />
        <div className="absolute top-[60%] left-[12%] w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[35px] border-b-[#1c1c1c]/[0.08]" style={{ animation: "geo-float 6s ease-in-out infinite 2s" }} />
        <div className="absolute top-[15%] left-[40%] w-8 h-8 bg-[#ff6b4a]/15 rounded-full" style={{ animation: "geo-pulse 3s ease-in-out infinite" }} />
        <div className="absolute bottom-[40%] left-[60%] w-12 h-12 border-4 border-[#1c1c1c]/[0.06] rotate-12" style={{ animation: "geo-spin 20s linear infinite" }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
          <div className="max-w-5xl">
            <h1 className="font-heading font-bold tracking-tight leading-[0.9]">
              <span className="block text-[#1c1c1c] text-5xl sm:text-7xl md:text-8xl lg:text-[7rem]">
                Matematyka
              </span>
              <span className="block text-[#ff6b4a] text-6xl sm:text-8xl md:text-9xl lg:text-[9rem] -mt-2 sm:-mt-4">
                bez stresu.
              </span>
              <span className="block text-[#1c1c1c] text-4xl sm:text-5xl md:text-6xl lg:text-7xl mt-2">
                Z pasją i&nbsp;zrozumieniem.
              </span>
            </h1>

            <p className="font-body text-[#1c1c1c]/60 text-lg sm:text-xl max-w-xl mt-8 sm:mt-12 leading-relaxed">
              Indywidualne korepetycje z matematyki dla uczniów klas 4–8,
              licealistów i&nbsp;maturzystów. Online lub stacjonarnie.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#kontakt"
                className="font-heading font-bold text-lg px-8 py-4 bg-[#ff6b4a] text-white border-4 border-[#1c1c1c] shadow-[6px_6px_0px_#1c1c1c] hover:shadow-[8px_8px_0px_#1c1c1c] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200"
              >
                Umów darmową lekcję
              </a>
              <a
                href="#o-mnie"
                className="font-heading font-bold text-lg px-8 py-4 bg-transparent text-[#1c1c1c] border-4 border-[#1c1c1c] shadow-[6px_6px_0px_#1c1c1c] hover:shadow-[8px_8px_0px_#1c1c1c] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:bg-[#1c1c1c] hover:text-[#f5f2ed] transition-all duration-200"
              >
                Poznaj mnie
              </a>
            </div>
          </div>

          <div className="relative mt-20 sm:mt-16 lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 flex items-center justify-center lg:justify-end gap-8">
            <div className="flex flex-col sm:flex-row lg:flex-col gap-6 items-center">
              {[
                { value: "2+", label: "lata doświadczenia" },
                { value: "100+", label: "godzin korepetycji" },
                { value: "1:1", label: "indywidualne podejście" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <span className="font-heading font-bold text-5xl sm:text-6xl text-[#ff6b4a] block leading-none">
                    {stat.value}
                  </span>
                  <span className="font-body text-sm text-[#1c1c1c]/50 uppercase tracking-widest mt-1 block">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="o-mnie" className="relative bg-[#1c1c1c] text-[#f5f2ed] py-24 sm:py-32 angled-top">
        <div className="absolute top-[15%] right-[8%] w-20 h-20 rounded-full border-2 border-[#ff6b4a]/20" style={{ animation: "geo-float 6s ease-in-out infinite" }} />
        <div className="absolute bottom-[10%] left-[5%] w-16 h-16 rotate-45 border-2 border-[#f5f2ed]/10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-2 flex flex-col items-center lg:items-start">
              <div className="relative w-64 h-80 sm:w-72 sm:h-96">
                <div className="absolute inset-0 bg-[#ff6b4a] translate-x-4 translate-y-4" />
                <img
                  src="/ola.jpg"
                  alt="Ola — korepetytorka matematyki"
                  className="relative w-full h-full object-cover object-top border-4 border-[#f5f2ed] grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>

              <blockquote className="mt-10 font-heading text-xl sm:text-2xl font-bold text-[#ff6b4a] leading-snug max-w-sm text-center lg:text-left">
                {"\u201E"}Wierzę, że każdy uczeń może polubić matematykę — wystarczy odpowiedni przewodnik i cierpliwość.{"\u201D"}
              </blockquote>
            </div>

            <div className="lg:col-span-3">
              <h2 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-10">
                O <span className="text-[#ff6b4a]">mnie</span>
              </h2>

              <div className="font-body text-lg text-[#f5f2ed]/80 space-y-6 leading-relaxed">
                <p>
                  Cześć, mam na imię Ola! Jestem studentką matematyki z prawdziwą pasją do tego przedmiotu. Od ponad dwóch lat prowadzę korepetycje — zarówno indywidualne, jak i grupowe — pomagając uczniom na różnych etapach edukacji odnaleźć drogę przez zawiłości matematyki.
                </p>
                <p>
                  Doświadczenie zdobywałam między innymi w Matplanecie — jednej z najbardziej rozpoznawalnych szkół matematycznych w Polsce. Praca z dziesiątkami uczniów na różnych poziomach nauczyła mnie, jak ważne jest indywidualne podejście — inne tempo, inna metoda, inny sposób tłumaczenia dla każdego.
                </p>
                <p>
                  Teraz zaczynam działać na własnych zasadach. Otwieram swoją praktykę korepetycyjną, bo chcę poświęcić każdemu uczniowi tyle uwagi, ile naprawdę potrzebuje. Skupiam się na lekcjach indywidualnych 1 na 1 — bo to one dają najlepsze efekty.
                </p>
                <p>
                  Prowadzę zajęcia zarówno online, jak i stacjonarnie — bo wierzę, że wygodna forma nauki to fundament skutecznych korepetycji. Niezależnie od tego, czy pracujemy przez interaktywną tablicę, czy spotykamy się osobiście, cel jest zawsze ten sam: zrozumienie, pewność siebie i lepsze wyniki.
                </p>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                {["Studentka matematyki", "Matplaneta", "2+ lat doświadczenia", "100+ godzin lekcji", "Lekcje 1:1"].map((tag) => (
                  <span
                    key={tag}
                    className="font-heading text-sm font-bold px-4 py-2 border-2 border-[#ff6b4a] text-[#ff6b4a] uppercase tracking-wider"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="egzaminy" className="relative bg-[#f5f2ed] py-24 sm:py-32">
        <div className="absolute top-12 left-[10%] w-12 h-12 bg-[#ff6b4a]/10 rotate-45" />
        <div className="absolute bottom-20 right-[8%] w-16 h-16 rounded-full border-2 border-[#1c1c1c]/10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#1c1c1c] mb-4">
            Egzaminy<span className="text-[#ff6b4a]">.</span>
          </h2>
          <p className="font-body text-lg text-[#1c1c1c]/60 mb-12 max-w-2xl">
            Kompleksowe przygotowanie do najważniejszych egzaminów matematycznych. Wybierz swój egzamin.
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            {exams.map((exam, i) => (
              <button
                key={exam.title}
                onClick={() => setActiveExam(i)}
                className={`font-heading font-bold text-sm sm:text-base px-6 py-3 border-4 transition-all duration-200 cursor-pointer ${
                  activeExam === i
                    ? "bg-[#ff6b4a] text-white border-[#1c1c1c] shadow-[4px_4px_0px_#1c1c1c]"
                    : "bg-transparent text-[#1c1c1c] border-[#1c1c1c]/20 hover:border-[#1c1c1c]"
                }`}
              >
                {exam.title}
              </button>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 geo-card bg-white p-8 sm:p-10">
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <h3 className="font-heading text-3xl sm:text-4xl font-bold text-[#1c1c1c]">
                  {exams[activeExam].title}
                </h3>
                <span className="font-body text-sm bg-[#ff6b4a] text-white px-3 py-1 font-bold">
                  {exams[activeExam].date}
                </span>
              </div>

              <p className="font-heading text-[#ff6b4a] font-bold mb-4">
                {exams[activeExam].subtitle}
              </p>

              <p className="font-body text-[#1c1c1c]/70 leading-relaxed mb-8">
                {exams[activeExam].description}
              </p>

              <div className="flex flex-wrap gap-6 mb-8">
                <div>
                  <span className="font-heading text-3xl font-bold text-[#1c1c1c] block">{exams[activeExam].duration}</span>
                  <span className="font-body text-sm text-[#1c1c1c]/50 uppercase tracking-widest">czas trwania</span>
                </div>
                <div className="w-px bg-[#1c1c1c]/10" />
                <div>
                  <span className="font-heading text-3xl font-bold text-[#1c1c1c] block">{exams[activeExam].points}</span>
                  <span className="font-body text-sm text-[#1c1c1c]/50 uppercase tracking-widest">punktacja</span>
                </div>
              </div>

              <h4 className="font-heading font-bold text-sm uppercase tracking-widest text-[#1c1c1c]/40 mb-4">
                Zakres materiałowy
              </h4>
              <div className="flex flex-wrap gap-2">
                {exams[activeExam].topics.map((topic) => (
                  <span
                    key={topic}
                    className="font-body text-sm px-3 py-1.5 bg-[#f5f2ed] text-[#1c1c1c] border-2 border-[#1c1c1c]/10"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-6">
              {exams.map((exam, i) => (
                <div
                  key={exam.title}
                  onClick={() => setActiveExam(i)}
                  className={`p-6 cursor-pointer transition-all duration-200 border-4 ${
                    activeExam === i
                      ? "bg-[#1c1c1c] text-[#f5f2ed] border-[#ff6b4a] shadow-[4px_4px_0px_#ff6b4a]"
                      : "bg-white text-[#1c1c1c] border-[#1c1c1c]/10 hover:border-[#1c1c1c]"
                  }`}
                >
                  <span className="font-heading font-bold text-lg block mb-1">{exam.title}</span>
                  <span className={`font-body text-sm ${activeExam === i ? "text-[#f5f2ed]/60" : "text-[#1c1c1c]/50"}`}>
                    {exam.date} / {exam.duration}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="oferta" className="relative bg-[#1c1c1c] text-[#f5f2ed] py-24 sm:py-32 angled-both">
        <div className="absolute top-[20%] right-[5%] w-24 h-24 border-2 border-[#ff6b4a]/15 rotate-12" />
        <div className="absolute bottom-[15%] left-[8%] w-0 h-0 border-l-[25px] border-l-transparent border-r-[25px] border-r-transparent border-b-[44px] border-b-[#ff6b4a]/10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <h2 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-4">
            Oferta<span className="text-[#ff6b4a]">.</span>
          </h2>
          <p className="font-body text-lg text-[#f5f2ed]/50 mb-16 max-w-2xl">
            Wybierz formę nauki, która najbardziej Ci odpowiada.
          </p>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div className="geo-card-coral bg-[#242424] p-8 sm:p-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-[#ff6b4a] flex items-center justify-center">
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="square" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-heading text-3xl font-bold">Lekcje Online</h3>
              </div>

              <ul className="space-y-4">
                {onlineFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="w-6 h-6 flex-shrink-0 bg-[#ff6b4a] flex items-center justify-center text-white font-bold text-xs mt-0.5">
                      +
                    </span>
                    <span className="font-body text-[#f5f2ed]/70">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="geo-card-coral bg-[#242424] p-8 sm:p-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-[#ff6b4a] flex items-center justify-center">
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="square" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="font-heading text-3xl font-bold">Lekcje Stacjonarne</h3>
              </div>

              <ul className="space-y-4">
                {stationaryFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="w-6 h-6 flex-shrink-0 bg-[#ff6b4a] flex items-center justify-center text-white font-bold text-xs mt-0.5">
                      +
                    </span>
                    <span className="font-body text-[#f5f2ed]/70">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="jak-wyglada-lekcja" className="relative bg-[#f5f2ed] py-24 sm:py-32">
        <div className="absolute top-16 right-[12%] w-10 h-10 bg-[#ff6b4a]/15 rounded-full" />
        <div className="absolute bottom-24 left-[6%] w-14 h-14 border-2 border-[#1c1c1c]/[0.08] rotate-45" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#1c1c1c] mb-4">
            Jak wygląda <span className="text-[#ff6b4a]">lekcja</span>
          </h2>
          <p className="font-body text-lg text-[#1c1c1c]/60 mb-16 max-w-2xl">
            Cztery proste kroki do lepszych wyników.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div key={step.number} className="relative">
                <span className="font-heading text-[8rem] sm:text-[10rem] font-bold text-[#1c1c1c]/[0.04] absolute -top-12 -left-2 leading-none select-none pointer-events-none">
                  {step.number}
                </span>

                <div className="geo-card bg-white p-6 sm:p-8 relative">
                  <span className="font-heading text-[#ff6b4a] font-bold text-5xl block mb-4">
                    {step.number}
                  </span>
                  <h3 className="font-heading text-xl font-bold text-[#1c1c1c] mb-3">
                    {step.title}
                  </h3>
                  <p className="font-body text-[#1c1c1c]/60 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-[#ff6b4a]" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="dla-kogo" className="relative bg-[#1c1c1c] text-[#f5f2ed] py-24 sm:py-32 angled-top">
        <div className="absolute top-[25%] left-[8%] w-20 h-20 rounded-full border-2 border-[#f5f2ed]/5" />
        <div className="absolute bottom-[20%] right-[10%] w-0 h-0 border-l-[18px] border-l-transparent border-r-[18px] border-r-transparent border-b-[32px] border-b-[#ff6b4a]/15" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
          <h2 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-4">
            Dla <span className="text-[#ff6b4a]">kogo</span>
          </h2>
          <p className="font-body text-lg text-[#f5f2ed]/50 mb-16 max-w-2xl">
            Pracuję z uczniami na różnych etapach edukacji.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {studentProfiles.map((profile, i) => (
              <div
                key={profile.label}
                className={`p-6 sm:p-8 border-4 border-[#f5f2ed]/10 hover:border-[#ff6b4a] transition-all duration-200 group ${
                  i === 0 ? "lg:col-span-2" : ""
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-[#ff6b4a] mt-2 flex-shrink-0 group-hover:scale-150 transition-transform" />
                  <div>
                    <h3 className="font-heading text-xl sm:text-2xl font-bold mb-2">
                      {profile.label}
                    </h3>
                    <p className="font-body text-[#f5f2ed]/50">
                      {profile.detail}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="opinie" className="relative bg-[#f5f2ed] py-24 sm:py-32">
        <div className="absolute top-12 left-[15%] w-10 h-10 rotate-45 border-2 border-[#ff6b4a]/15" />
        <div className="absolute bottom-16 right-[10%] w-14 h-14 rounded-full border-2 border-[#1c1c1c]/[0.08]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#1c1c1c] mb-4">
            Opinie<span className="text-[#ff6b4a]">.</span>
          </h2>
          <p className="font-body text-lg text-[#1c1c1c]/60 mb-12 max-w-2xl">
            Co mówią rodzice moich uczniów.
          </p>
        </div>

        <div className="testimonial-strip flex gap-6 overflow-x-auto pb-6 px-4 sm:px-6 lg:px-8 snap-x snap-mandatory">
          <div className="flex-shrink-0 w-4 sm:w-8 lg:w-[calc((100vw-80rem)/2)]" />
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex-shrink-0 w-[340px] sm:w-[420px] geo-card bg-white p-8 snap-start"
            >
              <div className="w-12 h-2 bg-[#ff6b4a] mb-6" />
              <p className="font-body text-[#1c1c1c]/70 leading-relaxed text-base sm:text-lg mb-8">
                {"\u201E"}{t.quote}{"\u201D"}
              </p>
              <div className="border-t-2 border-[#1c1c1c]/10 pt-4">
                <span className="font-heading font-bold text-[#1c1c1c] block">
                  {t.name}
                </span>
                <span className="font-body text-sm text-[#1c1c1c]/40">
                  {t.context}
                </span>
              </div>
            </div>
          ))}
          <div className="flex-shrink-0 w-4 sm:w-8 lg:w-[calc((100vw-80rem)/2)]" />
        </div>
      </section>

      <section
        id="kontakt"
        className="relative bg-[#1c1c1c] text-[#f5f2ed] py-24 sm:py-32 angled-top"
      >
        <div className="absolute top-[30%] right-[5%] w-28 h-28 border-2 border-[#ff6b4a]/10 rotate-45" style={{ animation: "geo-float 8s ease-in-out infinite" }} />
        <div className="absolute bottom-[15%] left-[8%] w-16 h-16 rounded-full border-2 border-[#f5f2ed]/5" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
                Kontakt<span className="text-[#ff6b4a]">.</span>
              </h2>
              <p className="font-body text-lg text-[#f5f2ed]/60 mb-12 leading-relaxed max-w-md">
                Pierwsza konsultacja jest bezpłatna. Napisz lub zadzwoń — umówimy się na lekcję próbną.
              </p>

              <div className="space-y-6">
                <a
                  href="mailto:olamatysek@gmail.com"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 bg-[#ff6b4a] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="square" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="font-body text-lg text-[#f5f2ed]/80 group-hover:text-[#ff6b4a] transition-colors">
                    olamatysek@gmail.com
                  </span>
                </a>

                <a
                  href="tel:+48123456789"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 bg-[#ff6b4a] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="square" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span className="font-body text-lg text-[#f5f2ed]/80 group-hover:text-[#ff6b4a] transition-colors">
                    +48 123 456 789
                  </span>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#ff6b4a] flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="square" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="square" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span className="font-body text-lg text-[#f5f2ed]/80">
                    Online / Stacjonarnie
                  </span>
                </div>
              </div>
            </div>

            <div>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="space-y-6"
              >
                <div>
                  <label className="font-heading text-sm font-bold uppercase tracking-widest text-[#f5f2ed]/40 block mb-2">
                    Imię i nazwisko
                  </label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-4 border-[#f5f2ed]/20 px-5 py-4 font-body text-[#f5f2ed] text-lg focus:border-[#ff6b4a] focus:outline-none transition-colors placeholder-[#f5f2ed]/20"
                    placeholder="Jan Kowalski"
                  />
                </div>

                <div>
                  <label className="font-heading text-sm font-bold uppercase tracking-widest text-[#f5f2ed]/40 block mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full bg-transparent border-4 border-[#f5f2ed]/20 px-5 py-4 font-body text-[#f5f2ed] text-lg focus:border-[#ff6b4a] focus:outline-none transition-colors placeholder-[#f5f2ed]/20"
                    placeholder="jan@email.com"
                  />
                </div>

                <div>
                  <label className="font-heading text-sm font-bold uppercase tracking-widest text-[#f5f2ed]/40 block mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    className="w-full bg-transparent border-4 border-[#f5f2ed]/20 px-5 py-4 font-body text-[#f5f2ed] text-lg focus:border-[#ff6b4a] focus:outline-none transition-colors placeholder-[#f5f2ed]/20"
                    placeholder="+48 000 000 000"
                  />
                </div>

                <div>
                  <label className="font-heading text-sm font-bold uppercase tracking-widest text-[#f5f2ed]/40 block mb-2">
                    Wiadomość
                  </label>
                  <textarea
                    rows={4}
                    className="w-full bg-transparent border-4 border-[#f5f2ed]/20 px-5 py-4 font-body text-[#f5f2ed] text-lg focus:border-[#ff6b4a] focus:outline-none transition-colors resize-none placeholder-[#f5f2ed]/20"
                    placeholder="Opisz swoje potrzeby..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full font-heading font-bold text-lg px-8 py-5 bg-[#ff6b4a] text-white border-4 border-[#f5f2ed] shadow-[6px_6px_0px_#f5f2ed] hover:shadow-[8px_8px_0px_#f5f2ed] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200 cursor-pointer uppercase tracking-wider"
                >
                  Wyślij wiadomość
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#111111] text-[#f5f2ed] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
            <div className="lg:col-span-1">
              <a href="#" className="font-heading text-2xl font-bold block mb-4">
                matma<span className="text-[#ff6b4a]">.</span>pro
              </a>
              <p className="font-body text-[#f5f2ed]/40 text-sm leading-relaxed">
                Korepetycje z matematyki online i stacjonarnie. Indywidualne podejście do każdego ucznia.
              </p>
            </div>

            <div>
              <h4 className="font-heading font-bold text-sm uppercase tracking-widest text-[#f5f2ed]/40 mb-6">
                Nawigacja
              </h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="font-body text-[#f5f2ed]/60 hover:text-[#ff6b4a] transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-bold text-sm uppercase tracking-widest text-[#f5f2ed]/40 mb-6">
                Kontakt
              </h4>
              <ul className="space-y-3 font-body text-sm">
                <li>
                  <a
                    href="mailto:olamatysek@gmail.com"
                    className="text-[#f5f2ed]/60 hover:text-[#ff6b4a] transition-colors"
                  >
                    olamatysek@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+48123456789"
                    className="text-[#f5f2ed]/60 hover:text-[#ff6b4a] transition-colors"
                  >
                    +48 123 456 789
                  </a>
                </li>
                <li className="text-[#f5f2ed]/60">Online / Stacjonarnie</li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-bold text-sm uppercase tracking-widest text-[#f5f2ed]/40 mb-6">
                Social media
              </h4>
              <div className="flex gap-3">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="w-12 h-12 border-2 border-[#f5f2ed]/10 hover:border-[#ff6b4a] hover:bg-[#ff6b4a] flex items-center justify-center transition-all duration-200 group"
                >
                  <svg className="w-5 h-5 text-[#f5f2ed]/60 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="w-12 h-12 border-2 border-[#f5f2ed]/10 hover:border-[#ff6b4a] hover:bg-[#ff6b4a] flex items-center justify-center transition-all duration-200 group"
                >
                  <svg className="w-5 h-5 text-[#f5f2ed]/60 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="TikTok"
                  className="w-12 h-12 border-2 border-[#f5f2ed]/10 hover:border-[#ff6b4a] hover:bg-[#ff6b4a] flex items-center justify-center transition-all duration-200 group"
                >
                  <svg className="w-5 h-5 text-[#f5f2ed]/60 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-[#f5f2ed]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-body text-[#f5f2ed]/30 text-sm">
              &copy; {new Date().getFullYear()} matma.pro — Wszelkie prawa zastrzeżone
            </p>
            <p className="font-body text-[#f5f2ed]/30 text-sm">
              Korepetycje z matematyki online i stacjonarnie
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
