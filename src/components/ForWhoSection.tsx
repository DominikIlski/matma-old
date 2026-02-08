import PencilUnderline from "./PencilUnderline";
import SectionNumber from "./SectionNumber";
import { studentProfiles } from "../data";

export default function ForWhoSection() {
  return (
    <section id="dla-kogo" className="relative bg-white py-24 lg:py-32" aria-labelledby="for-who-heading">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-16">
          <SectionNumber num="05" />
          <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-[#475569]/70">
            Dla kogo
          </span>
        </div>

        <div className="lg:flex lg:gap-16 xl:gap-24">
          <div className="lg:w-[380px] shrink-0 mb-12 lg:mb-0">
            <h2
              id="for-who-heading"
              className="font-serif-head text-4xl lg:text-5xl font-medium tracking-tight leading-tight mb-6"
            >
              Z kim{" "}
              <span className="relative inline-block">
                pracuję
                <PencilUnderline />
              </span>
            </h2>
            <p className="text-base text-[#475569] leading-relaxed">
              Na lekcjach robię to, co działa właśnie dla Ciebie.
            </p>
          </div>

          <div className="flex-1">
            {studentProfiles.map((profile, i) => (
              <div
                key={profile.label}
                className="flex items-start gap-5 py-6 border-b border-[#1e293b]/10 group"
              >
                <span className="font-serif-head text-sm text-[#475569]/40 tabular-nums mt-0.5 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-serif-head text-lg font-medium text-[#1e293b] group-hover:text-[#d4564e] transition-colors duration-300 tracking-tight">
                    {profile.label}
                  </h3>
                  <p className="text-sm text-[#475569]/70 mt-1">
                    {profile.detail}
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
