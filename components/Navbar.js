"use client";

import { useEffect, useState } from "react";
import { Menu, X, Scale } from "lucide-react";

const links = [
  ["About", "about"],
  ["Expertise", "expertise"],
  ["Experience", "experience"],
  ["Education", "education"],
  ["Contact", "contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-black/5 bg-[#f7f5f0]/90 backdrop-blur transition-shadow duration-300 ${
        scrolled ? "shadow-[0_6px_24px_-16px_rgba(16,24,32,0.4)]" : ""
      }`}
    >
      <div className="scroll-progress" style={{ width: `${progress}%` }} />

      <div
        className={`container-shell flex items-center justify-between transition-[height] duration-300 ${
          scrolled ? "h-[64px]" : "h-[76px]"
        }`}
      >
        <a href="#top" className="flex items-center gap-2.5 leading-none">
          <Scale size={scrolled ? 18 : 20} className="text-[#b08d57] transition-all duration-300" />
          <div>
            <div className="serif text-[20px] font-bold tracking-wide">YASH SHARMA</div>
            <div className="mt-1 text-[9px] font-bold uppercase tracking-[.22em] text-[#b08d57]">Corporate Legal Professional</div>
          </div>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              className="nav-link pb-1 text-[12px] font-semibold uppercase tracking-[.12em] text-[#3e4650] transition-colors duration-300 hover:text-[#101820]"
            >
              {label}
            </a>
          ))}
        </nav>

        <button
          className="relative z-10 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className="relative block h-[22px] w-[22px]">
            <X
              size={22}
              className={`absolute inset-0 transition-all duration-300 ${open ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"}`}
            />
            <Menu
              size={22}
              className={`absolute inset-0 transition-all duration-300 ${open ? "rotate-90 opacity-0" : "rotate-0 opacity-100"}`}
            />
          </span>
        </button>
      </div>

      <div
        className="overflow-hidden border-t border-black/5 bg-[#f7f5f0] transition-[max-height,opacity] duration-300 ease-out md:hidden"
        style={{ maxHeight: open ? "320px" : "0px", opacity: open ? 1 : 0 }}
      >
        <div className="container-shell flex flex-col gap-4 py-5">
          {links.map(([label, id], i) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setOpen(false)}
              className="text-sm font-semibold uppercase tracking-[.12em] transition-transform duration-300"
              style={{
                transitionDelay: open ? `${i * 40}ms` : "0ms",
                transform: open ? "translateX(0)" : "translateX(-8px)",
              }}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}