import PencilUnderline from "./PencilUnderline";
import SectionNumber from "./SectionNumber";
import { bioParas, stats } from "../data";

export default function AboutSection() {
  return (
    <section id="o-mnie" className="relative bg-[#faf6f1] py-24 lg:py-32" aria-labelledby="about-heading">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-16">
          <SectionNumber num="01" />
          <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-[#475569]/70">
            O mnie
          </span>
        </div>

        <div className="lg:flex lg:gap-16 xl:gap-24">
          <div className="lg:w-[360px] xl:w-[400px] shrink-0 mb-12 lg:mb-0">
            <div
              className="relative inline-block"
              style={{ transform: "rotate(-2deg)" }}
            >
              <div className="bg-white p-3 pb-12 shadow-[4px_6px_20px_rgba(0,0,0,0.1)]">
                <img
                  src="/ola.jpg"
                  alt="Ola — korepetytorka matematyki"
                  className="w-full h-auto"
                  width="400"
                  height="668"
                  loading="lazy"
                />
                <p
                  className="font-serif-head absolute bottom-4 left-0 right-0 text-center text-sm text-[#475569]/70 italic"
                >
                  Ola Matysek
                </p>
              </div>
              <div
                className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#d4564e] shadow-sm"
                style={{ zIndex: 10 }}
                aria-hidden="true"
              />
            </div>

            <div className="flex items-center gap-6 mt-10">
              {stats.map((s) => (
                <div key={s.value} className="border-l-2 border-[#d4564e]/40 pl-3">
                  <span className="font-serif-head block text-xl font-medium text-[#1e293b]">
                    {s.value}
                  </span>
                  <span className="block text-[10px] font-semibold tracking-[0.12em] uppercase text-[#475569]/70">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1">
            <h2
              id="about-heading"
              className="font-serif-head text-4xl lg:text-5xl font-medium tracking-tight leading-tight mb-10"
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
              <p className="font-serif-head text-lg lg:text-xl italic text-[#1e293b]/80 leading-relaxed">
                {"\u201E"}Najważniejsze to zauważyć, w którym momencie uczeń się gubi — reszta to już wspólna praca.{"\u201D"}
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
