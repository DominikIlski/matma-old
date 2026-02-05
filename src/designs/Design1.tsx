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

function Design1() {
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
      className="min-h-screen bg-[#faf8f5] text-[#1a1a2e] font-[Inter] scroll-smooth"
      style={{ scrollBehavior: "smooth" }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#1a1a2e]/95 backdrop-blur-md shadow-lg py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <button
            onClick={() => scrollTo("#hero")}
            className={`font-[Playfair_Display] text-xl font-semibold tracking-wide transition-colors duration-300 ${
              scrolled ? "text-[#faf8f5]" : "text-[#1a1a2e]"
            }`}
          >
            Matematyka<span className="text-[#c9a96e]">.</span>
          </button>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={`text-sm font-medium tracking-wide transition-colors duration-300 hover:text-[#c9a96e] ${
                  scrolled ? "text-[#faf8f5]/80" : "text-[#1a1a2e]/70"
                }`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("#kontakt")}
              className="bg-[#c9a96e] text-[#1a1a2e] px-5 py-2 text-sm font-semibold tracking-wide hover:bg-[#b8944f] transition-all duration-300 rounded-sm"
            >
              Umów lekcję
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden transition-colors duration-300 ${
              scrolled ? "text-[#faf8f5]" : "text-[#1a1a2e]"
            }`}
            aria-label="Menu"
          >
            <svg
              width="28"
              height="28"
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
          <div className="lg:hidden bg-[#1a1a2e]/95 backdrop-blur-md border-t border-[#faf8f5]/10 mt-2">
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-[#faf8f5]/80 text-left text-base font-medium tracking-wide hover:text-[#c9a96e] transition-colors duration-300"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => scrollTo("#kontakt")}
                className="bg-[#c9a96e] text-[#1a1a2e] px-5 py-3 text-sm font-semibold tracking-wide hover:bg-[#b8944f] transition-all duration-300 rounded-sm mt-2 w-full"
              >
                Umów lekcję
              </button>
            </div>
          </div>
        )}
      </nav>

      <section
        id="hero"
        className="relative min-h-screen flex items-center overflow-hidden"
      >
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none select-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Ctext x='20' y='60' font-size='28' fill='%231a1a2e' font-family='serif' opacity='0.6'%3E%E2%88%AB%3C/text%3E%3Ctext x='120' y='120' font-size='22' fill='%231a1a2e' font-family='serif' opacity='0.4'%3E%CF%80r%C2%B2%3C/text%3E%3Ctext x='280' y='80' font-size='26' fill='%231a1a2e' font-family='serif' opacity='0.5'%3E%E2%88%9E%3C/text%3E%3Ctext x='60' y='200' font-size='20' fill='%231a1a2e' font-family='serif' opacity='0.3'%3E%CE%A3%3C/text%3E%3Ctext x='200' y='250' font-size='24' fill='%231a1a2e' font-family='serif' opacity='0.5'%3E%CE%94x%3C/text%3E%3Ctext x='320' y='180' font-size='18' fill='%231a1a2e' font-family='serif' opacity='0.4'%3Ef(x)%3C/text%3E%3Ctext x='150' y='340' font-size='30' fill='%231a1a2e' font-family='serif' opacity='0.3'%3E%E2%88%9A%3C/text%3E%3Ctext x='350' y='320' font-size='22' fill='%231a1a2e' font-family='serif' opacity='0.4'%3E%CE%B1%C2%B2%2B%CE%B2%C2%B2%3C/text%3E%3Ctext x='40' y='360' font-size='20' fill='%231a1a2e' font-family='serif' opacity='0.35'%3Elim%3C/text%3E%3Ctext x='240' y='60' font-size='18' fill='%231a1a2e' font-family='serif' opacity='0.45'%3Edy/dx%3C/text%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
          }}
        />

        <div className="absolute top-20 right-10 w-72 h-72 bg-[#c9a96e]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#8a9a7b]/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
          <div className="max-w-3xl">
            <p className="text-[#c9a96e] font-medium tracking-[0.2em] uppercase text-sm mb-6">
              Korepetycje z matematyki
            </p>

            <h1 className="font-[Playfair_Display] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold leading-[1.05] tracking-tight mb-8">
              Matematyka
              <br />
              <span className="text-[#c9a96e]">bez</span> stresu
              <span className="text-[#c9a96e]">.</span>
            </h1>

            <div className="w-20 h-[2px] bg-[#c9a96e] mb-8" />

            <p className="text-lg sm:text-xl text-[#1a1a2e]/70 leading-relaxed max-w-xl mb-10 font-light">
              Indywidualne lekcje, które zmieniają oceny i podejście do
              przedmiotu. Przygotowanie do egzaminów z pewną ręką i spokojem.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <button
                onClick={() => scrollTo("#kontakt")}
                className="bg-[#c9a96e] text-[#1a1a2e] px-8 py-4 font-semibold tracking-wide hover:bg-[#b8944f] transition-all duration-300 rounded-sm text-sm uppercase"
              >
                Umów bezpłatną konsultację
              </button>
              <button
                onClick={() => scrollTo("#oferta")}
                className="text-[#1a1a2e]/70 font-medium tracking-wide hover:text-[#c9a96e] transition-colors duration-300 text-sm uppercase border-b border-[#1a1a2e]/20 hover:border-[#c9a96e] pb-1"
              >
                Poznaj ofertę
              </button>
            </div>
          </div>

          <div className="absolute right-6 lg:right-20 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-4 text-[#1a1a2e]/10 font-[Playfair_Display] text-6xl select-none pointer-events-none">
            <span>∫</span>
            <span className="text-5xl">π</span>
            <span>∑</span>
            <span className="text-4xl">∞</span>
            <span className="text-5xl">Δ</span>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#1a1a2e]/30">
          <span className="text-xs tracking-widest uppercase">Przewiń</span>
          <div className="w-[1px] h-8 bg-[#1a1a2e]/20 animate-pulse" />
        </div>
      </section>

      <section id="o-mnie" className="py-24 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <div className="lg:col-span-5">
              <p className="text-[#c9a96e] font-medium tracking-[0.2em] uppercase text-xs mb-4">
                O mnie
              </p>
              <h2 className="font-[Playfair_Display] text-4xl sm:text-5xl font-semibold leading-tight mb-6">
                Pasja do matematyki
                <br />i nauczania<span className="text-[#c9a96e]">.</span>
              </h2>
              <div className="w-16 h-[2px] bg-[#c9a96e] mb-8" />

              <div className="mb-8">
                <div className="w-56 h-56 mx-auto lg:mx-0 overflow-hidden border-2 border-[#c9a96e]/30">
                  <img src="/ola.jpg" alt="Ola — korepetytorka matematyki" className="w-full h-full object-cover object-top" />
                </div>
                <p className="text-center lg:text-left mt-3 font-[Playfair_Display] text-lg text-[#c9a96e]">Ola</p>
              </div>

              <div className="bg-[#faf8f5] border-l-2 border-[#c9a96e] p-6 mb-8">
                <p className="font-[Playfair_Display] text-lg italic text-[#1a1a2e]/80 leading-relaxed">
                  „Wierzę, że każdy uczeń może polubić matematykę — wystarczy
                  odpowiedni przewodnik i cierpliwość."
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <p className="font-[Playfair_Display] text-3xl font-semibold text-[#c9a96e]">
                    2+
                  </p>
                  <p className="text-xs text-[#1a1a2e]/50 mt-1 tracking-wide uppercase">
                    lata doświadczenia
                  </p>
                </div>
                <div className="text-center">
                  <p className="font-[Playfair_Display] text-3xl font-semibold text-[#c9a96e]">
                    100+
                  </p>
                  <p className="text-xs text-[#1a1a2e]/50 mt-1 tracking-wide uppercase">
                    godzin lekcji
                  </p>
                </div>
                <div className="text-center">
                  <p className="font-[Playfair_Display] text-3xl font-semibold text-[#c9a96e]">
                    1:1
                  </p>
                  <p className="text-xs text-[#1a1a2e]/50 mt-1 tracking-wide uppercase">
                    indywidualne podejście
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="space-y-6 text-[#1a1a2e]/70 leading-relaxed text-[15px]">
                <p>
                  Cześć, mam na imię Ola! Jestem studentką matematyki z prawdziwą pasją do tego
                  przedmiotu. Od ponad dwóch lat prowadzę korepetycje — zarówno
                  indywidualne, jak i grupowe — pomagając uczniom na różnych
                  etapach edukacji odnaleźć drogę przez zawiłości matematyki.
                </p>
                <p>
                  Doświadczenie zdobywałam między innymi w Matplanecie — jednej
                  z najbardziej rozpoznawalnych szkół matematycznych w Polsce.
                  Praca z dziesiątkami uczniów na różnych poziomach nauczyła mnie,
                  jak ważne jest indywidualne podejście — inne tempo, inna metoda,
                  inny sposób tłumaczenia dla każdego.
                </p>
                <p>
                  Teraz zaczynam działać na własnych zasadach. Otwieram swoją
                  praktykę korepetycyjną, bo chcę poświęcić każdemu uczniowi
                  tyle uwagi, ile naprawdę potrzebuje. Skupiam się na lekcjach
                  indywidualnych 1 na 1 — bo to one dają najlepsze efekty.
                </p>
                <p>
                  Prowadzę zajęcia zarówno online, jak i stacjonarnie — bo
                  wierzę, że wygodna forma nauki to fundament skutecznych
                  korepetycji. Niezależnie od tego, czy pracujemy przez
                  interaktywną tablicę, czy spotykamy się osobiście, cel jest
                  zawsze ten sam: zrozumienie, pewność siebie i lepsze wyniki.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-4 bg-[#1a1a2e]">
        <div className="max-w-7xl mx-auto px-6 flex justify-center items-center gap-8 text-[#faf8f5]/20 font-[Playfair_Display] text-2xl select-none overflow-hidden">
          {["∫", "∂", "∑", "∞", "π", "Δ", "√", "≈", "∈", "⊂", "∀", "∃"].map(
            (s, i) => (
              <span key={i} className="shrink-0">
                {s}
              </span>
            )
          )}
        </div>
      </section>

      <section id="egzaminy" className="py-24 sm:py-32 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 sm:mb-20">
            <p className="text-[#c9a96e] font-medium tracking-[0.2em] uppercase text-xs mb-4">
              Przygotowanie do egzaminów
            </p>
            <h2 className="font-[Playfair_Display] text-4xl sm:text-5xl font-semibold leading-tight mb-6">
              Egzaminy, do których
              <br />
              przygotowuję<span className="text-[#c9a96e]">.</span>
            </h2>
            <div className="w-16 h-[2px] bg-[#c9a96e] mx-auto mb-6" />
            <p className="text-[#1a1a2e]/60 max-w-2xl mx-auto leading-relaxed">
              Każdy egzamin wymaga innej strategii. Znam je wszystkie od podszewki
              i wiem, jak skutecznie przygotować do każdego z nich.
            </p>
          </div>

          <div className="space-y-8">
            {exams.map((exam, i) => (
              <div
                key={i}
                className="bg-white border-l-[3px] border-[#c9a96e] p-8 sm:p-10 hover:shadow-lg transition-shadow duration-500"
              >
                <div className="grid lg:grid-cols-12 gap-8">
                  <div className="lg:col-span-7">
                    <h3 className="font-[Playfair_Display] text-2xl sm:text-3xl font-semibold mb-2">
                      {exam.title}
                    </h3>
                    <p className="text-[#c9a96e] text-sm font-medium tracking-wide mb-4">
                      {exam.subtitle}
                    </p>
                    <p className="text-[#1a1a2e]/65 leading-relaxed text-[15px] mb-6">
                      {exam.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exam.topics.map((topic, j) => (
                        <span
                          key={j}
                          className="bg-[#faf8f5] text-[#1a1a2e]/60 text-xs px-3 py-1.5 rounded-sm border border-[#1a1a2e]/5"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="lg:col-span-5 flex flex-col justify-center">
                    <div className="bg-[#faf8f5] p-6 space-y-4">
                      <div className="flex justify-between items-center border-b border-[#1a1a2e]/5 pb-3">
                        <span className="text-xs text-[#1a1a2e]/40 uppercase tracking-wider">
                          Termin
                        </span>
                        <span className="font-medium text-sm">{exam.date}</span>
                      </div>
                      <div className="flex justify-between items-center border-b border-[#1a1a2e]/5 pb-3">
                        <span className="text-xs text-[#1a1a2e]/40 uppercase tracking-wider">
                          Czas trwania
                        </span>
                        <span className="font-medium text-sm">
                          {exam.duration}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-[#1a1a2e]/40 uppercase tracking-wider">
                          Punktacja
                        </span>
                        <span className="font-medium text-sm">
                          {exam.points}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="oferta" className="py-24 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 sm:mb-20">
            <p className="text-[#c9a96e] font-medium tracking-[0.2em] uppercase text-xs mb-4">
              Oferta
            </p>
            <h2 className="font-[Playfair_Display] text-4xl sm:text-5xl font-semibold leading-tight mb-6">
              Wybierz formę
              <br />
              nauki<span className="text-[#c9a96e]">.</span>
            </h2>
            <div className="w-16 h-[2px] bg-[#c9a96e] mx-auto mb-6" />
            <p className="text-[#1a1a2e]/60 max-w-2xl mx-auto leading-relaxed">
              Niezależnie od wybranej formy, każda lekcja jest w pełni
              indywidualna i dostosowana do Twoich potrzeb.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div className="group border border-[#1a1a2e]/5 p-8 sm:p-10 hover:border-[#c9a96e]/30 hover:shadow-lg transition-all duration-500 bg-[#faf8f5]">
              <div className="w-14 h-14 border border-[#c9a96e]/30 flex items-center justify-center mb-6 text-[#c9a96e] text-2xl">
                ◈
              </div>
              <h3 className="font-[Playfair_Display] text-2xl sm:text-3xl font-semibold mb-2">
                Lekcje Online
              </h3>
              <p className="text-[#c9a96e] text-sm font-medium tracking-wide mb-6">
                Wygodna nauka z dowolnego miejsca
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Wygodna nauka z domu — oszczędność czasu na dojazdach",
                  "Interaktywna tablica do wspólnej pracy w czasie rzeczywistym",
                  "Elastyczne terminy dopasowane do Twojego planu",
                  "Nagrywanie lekcji do późniejszego powtórzenia",
                  "Dostęp do materiałów i notatek po każdych zajęciach",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[#c9a96e] mt-1 text-sm shrink-0">
                      ✦
                    </span>
                    <span className="text-[#1a1a2e]/65 text-[15px] leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => scrollTo("#kontakt")}
                className="w-full border border-[#c9a96e] text-[#c9a96e] px-6 py-3.5 font-semibold text-sm tracking-wide hover:bg-[#c9a96e] hover:text-[#1a1a2e] transition-all duration-300 rounded-sm uppercase"
              >
                Umów lekcję online
              </button>
            </div>

            <div className="group border border-[#1a1a2e]/5 p-8 sm:p-10 hover:border-[#c9a96e]/30 hover:shadow-lg transition-all duration-500 bg-[#faf8f5]">
              <div className="w-14 h-14 border border-[#c9a96e]/30 flex items-center justify-center mb-6 text-[#c9a96e] text-2xl">
                ◇
              </div>
              <h3 className="font-[Playfair_Display] text-2xl sm:text-3xl font-semibold mb-2">
                Lekcje Stacjonarne
              </h3>
              <p className="text-[#c9a96e] text-sm font-medium tracking-wide mb-6">
                Osobisty kontakt i pełne skupienie
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Bezpośredni kontakt — łatwiejsza komunikacja i motywacja",
                  "Praca przy tablicy i na kartce — klasyczna metoda nauki",
                  "Pełne skupienie bez rozpraszaczy ekranowych",
                  "Natychmiastowa pomoc przy rozwiązywaniu zadań",
                  "Budowanie relacji i zaufania między uczniem a korepetytorem",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[#c9a96e] mt-1 text-sm shrink-0">
                      ✦
                    </span>
                    <span className="text-[#1a1a2e]/65 text-[15px] leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => scrollTo("#kontakt")}
                className="w-full border border-[#c9a96e] text-[#c9a96e] px-6 py-3.5 font-semibold text-sm tracking-wide hover:bg-[#c9a96e] hover:text-[#1a1a2e] transition-all duration-300 rounded-sm uppercase"
              >
                Umów lekcję stacjonarną
              </button>
            </div>
          </div>
        </div>
      </section>

      <section
        id="jak-wyglada-lekcja"
        className="py-24 sm:py-32 bg-[#1a1a2e] text-[#faf8f5]"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 sm:mb-20">
            <p className="text-[#c9a96e] font-medium tracking-[0.2em] uppercase text-xs mb-4">
              Proces
            </p>
            <h2 className="font-[Playfair_Display] text-4xl sm:text-5xl font-semibold leading-tight mb-6">
              Jak wygląda
              <br />
              współpraca<span className="text-[#c9a96e]">?</span>
            </h2>
            <div className="w-16 h-[2px] bg-[#c9a96e] mx-auto mb-6" />
            <p className="text-[#faf8f5]/50 max-w-2xl mx-auto leading-relaxed">
              Od pierwszej rozmowy do widocznych postępów — cztery proste kroki do
              lepszych wyników z matematyki.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, i) => (
              <div key={i} className="group relative">
                <span className="font-[Playfair_Display] text-6xl sm:text-7xl font-bold text-[#c9a96e]/15 group-hover:text-[#c9a96e]/30 transition-colors duration-500 block mb-4">
                  {step.number}
                </span>
                <h3 className="font-[Playfair_Display] text-xl font-semibold mb-3">
                  {step.title}
                </h3>
                <p className="text-[#faf8f5]/50 text-sm leading-relaxed">
                  {step.description}
                </p>
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-3 w-6 h-[1px] bg-[#c9a96e]/20" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="dla-kogo" className="py-24 sm:py-32 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-5">
              <p className="text-[#c9a96e] font-medium tracking-[0.2em] uppercase text-xs mb-4">
                Dla kogo
              </p>
              <h2 className="font-[Playfair_Display] text-4xl sm:text-5xl font-semibold leading-tight mb-6">
                Dla każdego, kto
                <br />
                chce więcej<span className="text-[#c9a96e]">.</span>
              </h2>
              <div className="w-16 h-[2px] bg-[#c9a96e] mb-6" />
              <p className="text-[#1a1a2e]/60 leading-relaxed">
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
                    className="group flex items-center gap-6 bg-white p-6 border border-[#1a1a2e]/5 hover:border-[#c9a96e]/30 hover:shadow-md transition-all duration-500"
                  >
                    <span className="font-[Playfair_Display] text-2xl text-[#c9a96e]/30 group-hover:text-[#c9a96e] transition-colors duration-500 shrink-0 w-8 text-center">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-semibold text-[15px] mb-0.5">
                        {profile.label}
                      </h3>
                      <p className="text-[#1a1a2e]/50 text-sm">
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

      <section id="opinie" className="py-24 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 sm:mb-20">
            <p className="text-[#c9a96e] font-medium tracking-[0.2em] uppercase text-xs mb-4">
              Opinie
            </p>
            <h2 className="font-[Playfair_Display] text-4xl sm:text-5xl font-semibold leading-tight mb-6">
              Co mówią
              <br />
              rodzice<span className="text-[#c9a96e]">?</span>
            </h2>
            <div className="w-16 h-[2px] bg-[#c9a96e] mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="group bg-[#faf8f5] p-8 border border-[#1a1a2e]/5 hover:border-[#c9a96e]/20 hover:shadow-lg transition-all duration-500"
              >
                <div className="font-[Playfair_Display] text-5xl text-[#c9a96e]/20 leading-none mb-4">
                  „
                </div>
                <p className="text-[#1a1a2e]/65 text-[15px] leading-relaxed mb-6 italic">
                  {t.quote}
                </p>
                <div className="border-t border-[#1a1a2e]/5 pt-4">
                  <p className="font-semibold text-sm">{t.name}</p>
                  <p className="text-[#1a1a2e]/40 text-xs mt-0.5">
                    {t.context}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="kontakt" className="py-24 sm:py-32 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-5">
              <p className="text-[#c9a96e] font-medium tracking-[0.2em] uppercase text-xs mb-4">
                Kontakt
              </p>
              <h2 className="font-[Playfair_Display] text-4xl sm:text-5xl font-semibold leading-tight mb-6">
                Zacznijmy
                <br />
                współpracę<span className="text-[#c9a96e]">.</span>
              </h2>
              <div className="w-16 h-[2px] bg-[#c9a96e] mb-8" />

              <div className="inline-flex items-center gap-3 bg-[#c9a96e]/10 border border-[#c9a96e]/20 px-5 py-3 mb-8">
                <span className="text-[#c9a96e] text-lg">✦</span>
                <span className="text-sm font-semibold tracking-wide text-[#1a1a2e]/80">
                  Pierwsza konsultacja gratis
                </span>
              </div>

              <div className="space-y-5 text-[15px]">
                <div>
                  <p className="text-[#1a1a2e]/40 text-xs uppercase tracking-wider mb-1">
                    Email
                  </p>
                  <p className="font-medium">olamatysek@gmail.com</p>
                </div>
                <div>
                  <p className="text-[#1a1a2e]/40 text-xs uppercase tracking-wider mb-1">
                    Telefon
                  </p>
                  <p className="font-medium">+48 123 456 789</p>
                </div>
                <div>
                  <p className="text-[#1a1a2e]/40 text-xs uppercase tracking-wider mb-1">
                    Forma zajęć
                  </p>
                  <p className="font-medium">Online / Stacjonarnie</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-white p-8 sm:p-10 border border-[#1a1a2e]/5">
                <h3 className="font-[Playfair_Display] text-xl font-semibold mb-6">
                  Napisz do mnie
                </h3>
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="space-y-5"
                >
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs text-[#1a1a2e]/40 uppercase tracking-wider mb-2">
                        Imię i nazwisko
                      </label>
                      <input
                        type="text"
                        className="w-full border border-[#1a1a2e]/10 bg-[#faf8f5] px-4 py-3 text-sm focus:outline-none focus:border-[#c9a96e] transition-colors duration-300"
                        placeholder="Jan Kowalski"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-[#1a1a2e]/40 uppercase tracking-wider mb-2">
                        Telefon lub email
                      </label>
                      <input
                        type="text"
                        className="w-full border border-[#1a1a2e]/10 bg-[#faf8f5] px-4 py-3 text-sm focus:outline-none focus:border-[#c9a96e] transition-colors duration-300"
                        placeholder="+48 000 000 000"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs text-[#1a1a2e]/40 uppercase tracking-wider mb-2">
                      Klasa ucznia
                    </label>
                    <select className="w-full border border-[#1a1a2e]/10 bg-[#faf8f5] px-4 py-3 text-sm focus:outline-none focus:border-[#c9a96e] transition-colors duration-300 text-[#1a1a2e]/60">
                      <option>Szkoła podstawowa (kl. 4–8)</option>
                      <option>Liceum (kl. 1–3)</option>
                      <option>Technikum</option>
                      <option>Maturzysta</option>
                      <option>Inne</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs text-[#1a1a2e]/40 uppercase tracking-wider mb-2">
                      Wiadomość
                    </label>
                    <textarea
                      rows={4}
                      className="w-full border border-[#1a1a2e]/10 bg-[#faf8f5] px-4 py-3 text-sm focus:outline-none focus:border-[#c9a96e] transition-colors duration-300 resize-none"
                      placeholder="Opisz z czym potrzebujesz pomocy..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#c9a96e] text-[#1a1a2e] px-6 py-4 font-semibold text-sm tracking-wide hover:bg-[#b8944f] transition-all duration-300 rounded-sm uppercase"
                  >
                    Wyślij wiadomość
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#1a1a2e] text-[#faf8f5] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            <div>
              <p className="font-[Playfair_Display] text-xl font-semibold mb-4">
                Matematyka<span className="text-[#c9a96e]">.</span>
              </p>
              <p className="text-[#faf8f5]/40 text-sm leading-relaxed">
                Indywidualne korepetycje z matematyki. Przygotowanie do
                egzaminów. Online i stacjonarnie.
              </p>
            </div>

            <div>
              <p className="text-xs text-[#faf8f5]/30 uppercase tracking-wider mb-4">
                Nawigacja
              </p>
              <div className="flex flex-col gap-2">
                {navLinks.slice(0, 4).map((link) => (
                  <button
                    key={link.href}
                    onClick={() => scrollTo(link.href)}
                    className="text-[#faf8f5]/50 text-sm text-left hover:text-[#c9a96e] transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs text-[#faf8f5]/30 uppercase tracking-wider mb-4">
                Więcej
              </p>
              <div className="flex flex-col gap-2">
                {navLinks.slice(4).map((link) => (
                  <button
                    key={link.href}
                    onClick={() => scrollTo(link.href)}
                    className="text-[#faf8f5]/50 text-sm text-left hover:text-[#c9a96e] transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs text-[#faf8f5]/30 uppercase tracking-wider mb-4">
                Social media
              </p>
              <div className="flex gap-4">
                {["Facebook", "Instagram", "TikTok"].map((platform) => (
                  <a
                    key={platform}
                    href="#"
                    className="text-[#faf8f5]/30 text-sm hover:text-[#c9a96e] transition-colors duration-300"
                  >
                    {platform}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-[#faf8f5]/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-[#faf8f5]/20 text-xs">
              &copy; {new Date().getFullYear()} Korepetycje z Matematyki.
              Wszelkie prawa zastrzeżone.
            </p>
            <button
              onClick={() =>
                window.scrollTo({ top: 0, behavior: "smooth" })
              }
              className="text-[#faf8f5]/20 text-xs hover:text-[#c9a96e] transition-colors duration-300 uppercase tracking-wider"
            >
              Powrót na górę ↑
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Design1;
