import PencilUnderline from "./PencilUnderline";
import SectionNumber from "./SectionNumber";
import { steps } from "../data";

export default function StepsSection() {
  return (
    <section id="jak-wyglada-lekcja" className="relative bg-[#faf6f1] py-24 lg:py-32" aria-labelledby="steps-heading">
      <div
        className="absolute inset-0 ruled-lines opacity-20"
        style={{ backgroundPositionY: "8px" }}
        aria-hidden="true"
      />
      <div className="absolute right-[4%] top-0 bottom-0 w-[2px] bg-[#d4564e]/40 hidden lg:block" aria-hidden="true" />
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-16">
          <SectionNumber num="04" />
          <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-[#475569]/70">
            Jak wygląda lekcja
          </span>
        </div>

        <h2
          id="steps-heading"
          className="font-serif-head text-4xl lg:text-5xl font-medium tracking-tight leading-tight mb-6"
        >
          Cztery kroki do{" "}
          <span className="relative inline-block">
            sukcesu
            <PencilUnderline />
          </span>
        </h2>
        <p className="text-base text-[#475569] leading-relaxed max-w-lg mb-16">
          Najpierw rozmawiamy, potem wiem, jak uczyć.
        </p>

        <div className="relative">
          <div className="absolute left-5 top-5 bottom-5 w-0 border-l-2 border-dashed border-[#1e293b]/15 hidden lg:block" aria-hidden="true" />

          <div className="space-y-12 lg:space-y-16">
            {steps.map((step, i) => (
              <div key={step.number} className="lg:flex lg:items-start lg:gap-10">
                <div className="relative shrink-0 mb-4 lg:mb-0">
                  <span
                    className="font-serif-head inline-flex items-center justify-center w-10 h-10 rounded-full border-2 border-dashed border-[#1e293b]/20 bg-[#faf6f1] text-sm font-medium text-[#1e293b] relative z-10"
                    style={{ transform: `rotate(${i % 2 === 0 ? "-" : ""}3deg)` }}
                    aria-hidden="true"
                  >
                    {step.number}
                  </span>
                  {i < steps.length - 1 && (
                    <div className="absolute left-5 top-10 h-12 w-0 border-l-2 border-dashed border-[#1e293b]/10 lg:hidden" aria-hidden="true" />
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="font-serif-head text-xl lg:text-2xl font-medium tracking-tight mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#475569] leading-relaxed max-w-md">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
