import { useState, useEffect, useRef, useCallback } from "react";
import { navLinks, CONTACT_EMAIL } from "../data";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      closeButtonRef.current?.focus();
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleMenuKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setMenuOpen(false);
      menuButtonRef.current?.focus();
    }
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-[#faf6f1]/95 backdrop-blur-sm shadow-[0_1px_0_#c8bfb4]" : "bg-transparent"
        }`}
      >
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 lg:px-8 h-16 lg:h-20" aria-label="Nawigacja główna">
          <a
            href="/"
            className="font-serif-head text-xl lg:text-2xl font-medium tracking-tight"
          >
            amatysek<span className="text-[#d4564e]">.</span>
          </a>
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[#475569] hover:text-[#1e293b] transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>
          <button
            ref={menuButtonRef}
            onClick={() => setMenuOpen(true)}
            className="lg:hidden flex flex-col gap-1.5 p-3 min-w-[44px] min-h-[44px] items-center justify-center"
            aria-label="Otwórz menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span className="block w-6 h-[1.5px] bg-[#1e293b]" aria-hidden="true" />
            <span className="block w-4 h-[1.5px] bg-[#1e293b]" aria-hidden="true" />
            <span className="block w-6 h-[1.5px] bg-[#1e293b]" aria-hidden="true" />
          </button>
        </nav>
      </header>

      {menuOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-[100] bg-[#faf6f1] flex flex-col"
          role="dialog"
          aria-modal="true"
          aria-label="Menu nawigacyjne"
          onKeyDown={handleMenuKeyDown}
        >
          <div className="flex items-center justify-between px-6 h-16">
            <span className="font-serif-head text-xl font-medium tracking-tight">
              amatysek<span className="text-[#d4564e]">.</span>
            </span>
            <button
              ref={closeButtonRef}
              onClick={() => {
                setMenuOpen(false);
                menuButtonRef.current?.focus();
              }}
              className="text-sm text-[#475569] hover:text-[#1e293b] transition-colors p-3 min-w-[44px] min-h-[44px]"
            >
              Zamknij
            </button>
          </div>
          <div className="flex-1 flex flex-col justify-center px-6">
            <nav aria-label="Menu mobilne" className="space-y-1">
              {navLinks.map((link, i) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => {
                    setMenuOpen(false);
                    menuButtonRef.current?.focus();
                  }}
                  className="block group"
                >
                  <div className="flex items-baseline gap-4 py-4 border-b border-[#1e293b]/10">
                    <span className="font-serif-head text-xs text-[#475569]/40 tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-serif-head text-3xl sm:text-4xl font-medium text-[#1e293b] group-hover:text-[#d4564e] transition-colors duration-300">
                      {link.label}
                    </span>
                  </div>
                </a>
              ))}
            </nav>
          </div>
          <div className="px-6 pb-8 text-xs text-[#475569]/60">
            {CONTACT_EMAIL}
          </div>
        </div>
      )}
    </>
  );
}
