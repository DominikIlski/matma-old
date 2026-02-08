import PencilUnderline from "./PencilUnderline";
import SectionNumber from "./SectionNumber";
import { testimonials, ruledLinesBg } from "../data";

const rotations = [-1.5, 0.8, -0.6];

export default function TestimonialsSection() {
  return (
    <section id="opinie" className="relative bg-[#faf6f1] py-24 lg:py-32 overflow-hidden" aria-labelledby="testimonials-heading">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-16">
          <SectionNumber num="06" />
          <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-[#475569]/70">
            Opinie
          </span>
        </div>

        <h2
          id="testimonials-heading"
          className="font-serif-head text-4xl lg:text-5xl font-medium tracking-tight leading-tight mb-6"
        >
          Co mówią{" "}
          <span className="relative inline-block">
            rodzice
            <PencilUnderline />
          </span>
        </h2>
        <p className="text-base text-[#475569] leading-relaxed max-w-lg mb-16">
          Opinie rodziców, z którymi pracowałam.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <blockquote
              key={t.name}
              className="relative bg-white p-6 lg:p-8"
              style={{
                transform: `rotate(${rotations[i]}deg)`,
                background: `${ruledLinesBg}, #ffffff`,
                backgroundPositionY: "12px",
                boxShadow: "2px 4px 16px rgba(0,0,0,0.06)",
              }}
            >
              <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#d4564e] shadow-sm z-10" aria-hidden="true" />
              <span
                className="block text-5xl text-[#d4564e]/20 leading-none mb-2 select-none"
                style={{ fontFamily: "'Newsreader', serif" }}
                aria-hidden="true"
              >
                {"\u201E"}
              </span>
              <p
                className="text-sm text-[#1e293b]/80 leading-relaxed mb-6 relative z-10"
                style={{ fontFamily: "'Newsreader', serif", fontStyle: "italic" }}
              >
                {t.quote}
              </p>
              <footer className="flex items-center gap-3">
                <span className="w-6 h-[1px] bg-[#d4564e]/40" aria-hidden="true" />
                <div>
                  <p className="text-sm font-semibold text-[#1e293b]">{t.name}</p>
                  <p className="text-xs text-[#475569]/60">{t.context}</p>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
