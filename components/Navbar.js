"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  ["About", "about"],
  ["Expertise", "expertise"],
  ["Experience", "experience"],
  ["Education", "education"],
  ["Contact", "contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[#f7f5f0]/90 backdrop-blur">
      <div className="container-shell flex h-[76px] items-center justify-between">
        <a href="#top" className="leading-none">
          <div className="serif text-[20px] font-bold tracking-wide">YASH SHARMA</div>
          <div className="mt-1 text-[9px] font-bold uppercase tracking-[.22em] text-[#b08d57]">Corporate Legal Professional</div>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map(([label, id]) => (
            <a key={id} href={`#${id}`} className="text-[12px] font-semibold uppercase tracking-[.12em] text-[#3e4650] transition hover:text-[#101820]">
              {label}
            </a>
          ))}
          
        </nav>

        <button className="md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-black/5 bg-[#f7f5f0] px-5 pb-6 md:hidden">
          <div className="container-shell flex flex-col gap-4 pt-5">
            {links.map(([label, id]) => (
              <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="text-sm font-semibold uppercase tracking-[.12em]">
                {label}
              </a>
            ))}
            
          </div>
        </div>
      )}
    </header>
  );
}
