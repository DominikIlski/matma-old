import PencilUnderline from "./PencilUnderline";
import SectionNumber from "./SectionNumber";
import { onlineFeatures, stationaryFeatures } from "../data";

function FeatureCard({ title, subtitle, features }: { title: string; subtitle: string; features: string[] }) {
  return (
    <div
      className="bg-white p-8 lg:p-10 relative torn-top pt-12"
      style={{ boxShadow: "2px 4px 16px rgba(0,0,0,0.06)" }}
    >
      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#d4564e]" aria-hidden="true" />
      <h3 className="font-serif-head text-2xl font-medium tracking-tight mb-2">
        {title}
      </h3>
      <p className="text-sm text-[#475569]/70 mb-8">
        {subtitle}
      </p>
      <ul className="space-y-4">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-3">
            <span
              className="text-[#d4564e] text-lg leading-none mt-0.5 shrink-0"
              aria-hidden="true"
              style={{ fontFamily: "'Newsreader', serif" }}
            >
              {"\u2713"}
            </span>
            <span className="text-sm text-[#475569] leading-relaxed">{f}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function OfferSection() {
  return (
    <section id="oferta" className="relative bg-[#faf6f1] py-24 lg:py-32" aria-labelledby="offer-heading">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-16">
          <SectionNumber num="03" />
          <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-[#475569]/70">
            Oferta
          </span>
        </div>

        <h2
          id="offer-heading"
          className="font-serif-head text-4xl lg:text-5xl font-medium tracking-tight leading-tight mb-16"
        >
          Formy{" "}
          <span className="relative inline-block">
            zajęć
            <PencilUnderline />
          </span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <FeatureCard
            title="Lekcje Online"
            subtitle="Ucz się z dowolnego miejsca"
            features={onlineFeatures}
          />
          <FeatureCard
            title="Lekcje Stacjonarne"
            subtitle="Klasyczna nauka twarzą w twarz"
            features={stationaryFeatures}
          />
        </div>
      </div>
    </section>
  );
}
