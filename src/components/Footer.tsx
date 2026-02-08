import { navLinks, CONTACT_EMAIL } from "../data";

export default function Footer() {
  return (
    <footer className="bg-[#1e293b]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="py-16 lg:flex lg:items-start lg:justify-between lg:gap-12">
          <div className="mb-12 lg:mb-0">
            <span className="font-serif-head text-xl font-medium tracking-tight text-white">
              amatysek<span className="text-[#d4564e]">.</span>
            </span>
            <p className="text-sm text-white/50 mt-4 max-w-xs leading-relaxed">
              Korepetycje z matematyki. Uczę tak, jak potrzebujesz.
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-sm text-white/50 hover:text-[#d4564e] transition-colors duration-300 mt-3 inline-block"
            >
              {CONTACT_EMAIL}
            </a>
          </div>

          <nav aria-label="Nawigacja stopki">
            <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-white/40 mb-6">
              Nawigacja
            </p>
            <div className="grid grid-cols-2 gap-x-10 gap-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/60 hover:text-[#d4564e] transition-colors duration-300 py-1 min-h-[44px] flex items-center"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>
        </div>

        <div className="border-t border-white/10 py-6">
          <p className="text-xs text-white/40">
            {"\u00A9"} {new Date().getFullYear()} Korepetycje z Matematyki — Aleksandra Matysek
          </p>
        </div>
      </div>
    </footer>
  );
}
