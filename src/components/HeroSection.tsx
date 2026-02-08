import PencilUnderline from "./PencilUnderline";
import { stats, marginFormulas } from "../data";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" aria-labelledby="hero-heading">
      <div
        className="absolute inset-0 ruled-lines opacity-40"
        style={{ backgroundPositionY: "17px" }}
        aria-hidden="true"
      />
      <div className="absolute right-[4%] top-0 bottom-0 w-[2px] bg-[#d4564e]/40 hidden lg:block" aria-hidden="true" />

      {marginFormulas.slice(0, 5).map((f, i) => (
        <span
          key={i}
          className="absolute hidden xl:block text-[#475569]/[0.12] text-sm select-none pointer-events-none formula-float"
          aria-hidden="true"
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
            <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-[#475569]/70 mb-8">
              Korepetycje z matematyki
            </p>
            <h1
              id="hero-heading"
              className="font-serif-head text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-medium leading-[1.05] tracking-tight mb-8"
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
                className="inline-flex items-center justify-center border border-[#1e293b]/20 bg-[#faf6f1] text-sm font-medium px-8 py-3.5 text-[#1e293b] hover:border-[#1e293b]/40 transition-colors duration-300"
              >
                Poznaj mnie
              </a>
            </div>
            <div className="flex items-center gap-8 mt-14">
              {stats.map((s) => (
                <div key={s.value}>
                  <span className="font-serif-head block text-2xl lg:text-3xl font-medium text-[#1e293b]">
                    {s.value}
                  </span>
                  <span className="block text-[10px] font-semibold tracking-[0.15em] uppercase text-[#475569]/70 mt-1">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden lg:flex flex-1 items-center justify-center" aria-hidden="true">
            <div
              className="text-[#1e293b]/[0.15] leading-relaxed text-right space-y-3 select-none"
              style={{ fontFamily: "'Newsreader', serif", fontStyle: "italic" }}
            >
              <p className="text-5xl">a{"\u00B2"} + b{"\u00B2"} = c{"\u00B2"}</p>
              <p className="text-4xl">(a + b){"\u00B2"} = a{"\u00B2"} + 2ab + b{"\u00B2"}</p>
              <p className="text-3xl">{"\u0394"} = b{"\u00B2"} {"\u2212"} 4ac</p>
              <p className="text-2xl">f(x) = ax{"\u00B2"} + bx + c</p>
              <p className="text-xl">P = {"\u03C0"}r{"\u00B2"}</p>
              <p className="text-lg">sin {"\u03B1"} = a/c</p>
              <p className="text-base">log{"\u2090"}b = c</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
