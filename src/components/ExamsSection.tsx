import { useState } from "react";
import { exams } from "../data";

export default function ExamsSection() {
  const [activeExam, setActiveExam] = useState(0);

  return (
    <section id="egzaminy" className="relative bg-[#1e293b] py-24 lg:py-32 overflow-hidden" aria-labelledby="exams-heading">
      <span
        className="absolute top-8 right-8 text-white/[0.03] text-sm select-none pointer-events-none hidden lg:block"
        style={{ fontFamily: "'Newsreader', serif", fontStyle: "italic" }}
        aria-hidden="true"
      >
        {"\u222B"}f(x)dx = F(x) + C
      </span>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-16">
          <span
            className="font-serif-head inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/20 text-sm font-medium text-white/60 relative"
            style={{ transform: "rotate(-2deg)" }}
          >
            02
          </span>
          <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-white/50">
            Egzaminy
          </span>
        </div>

        <div className="lg:flex lg:gap-12 xl:gap-16">
          <div className="lg:w-[280px] shrink-0 mb-10 lg:mb-0">
            <h2
              id="exams-heading"
              className="font-serif-head text-4xl lg:text-5xl font-medium tracking-tight text-white leading-tight mb-8"
            >
              Do czego
              <br />
              <span className="italic text-[#d4564e]">przygotowuję</span>
            </h2>
            <div className="space-y-1" role="tablist" aria-label="Wybierz egzamin">
              {exams.map((exam, i) => (
                <button
                  key={exam.title}
                  onClick={() => setActiveExam(i)}
                  role="tab"
                  id={`exam-tab-${i}`}
                  aria-selected={activeExam === i}
                  aria-controls={`exam-panel-${i}`}
                  className="w-full text-left py-4 border-b border-white/10 transition-all duration-300 group min-h-[44px]"
                >
                  <span
                    className={`font-serif-head block text-base font-medium transition-colors duration-300 ${
                      activeExam === i ? "text-white" : "text-white/40 group-hover:text-white/60"
                    }`}
                  >
                    {exam.title}
                  </span>
                  <span
                    className={`block text-xs mt-1 transition-colors duration-300 ${
                      activeExam === i ? "text-white/60" : "text-white/30"
                    }`}
                  >
                    {exam.subtitle}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div
            className="flex-1"
            role="tabpanel"
            id={`exam-panel-${activeExam}`}
            aria-labelledby={`exam-tab-${activeExam}`}
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {[
                { label: "Termin", value: exams[activeExam].date, rot: "0.5deg" },
                { label: "Czas", value: exams[activeExam].duration, rot: "-0.5deg" },
                { label: "Punkty", value: exams[activeExam].points, rot: "0.3deg" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-white pt-5 pb-4 px-5 torn-top relative"
                  style={{ transform: `rotate(${item.rot})` }}
                >
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#d4564e]" aria-hidden="true" />
                  <span className="block text-[10px] font-semibold tracking-[0.15em] uppercase text-[#475569]/70 mb-1">
                    {item.label}
                  </span>
                  <span className="font-serif-head block text-base font-medium text-[#1e293b]">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            <div
              className="bg-white pt-6 pb-6 px-6 torn-top relative"
              style={{ transform: "rotate(0.3deg)" }}
            >
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#d4564e]" aria-hidden="true" />
              <h3 className="font-serif-head text-2xl font-medium text-[#1e293b] tracking-tight mb-2">
                {exams[activeExam].title}
              </h3>
              <p className="text-sm text-[#475569] leading-relaxed mb-6">
                {exams[activeExam].description}
              </p>
              <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#475569]/70 mb-3">
                Zakres materiału
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                {exams[activeExam].topics.map((topic) => (
                  <div key={topic} className="flex items-start gap-2 py-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d4564e]/40 mt-1.5 shrink-0" aria-hidden="true" />
                    <span className="text-sm text-[#475569]">{topic}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
