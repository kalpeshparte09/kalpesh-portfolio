"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/75 backdrop-blur-xl supports-[backdrop-filter]:bg-slate-950/65 dark:border-white/10 dark:bg-slate-950/75">
      <div className="container mx-auto flex items-center justify-between px-4 py-4 sm:px-6">
        <a
          href="#top"
          className="text-xl font-bold tracking-[0.2em] text-white transition hover:text-cyan-300 sm:text-2xl"
        >
          KALPESH PARTE
        </a>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-200 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition hover:text-cyan-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="/KalpeshPartePF.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full border border-cyan-400/70 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-400 hover:text-slate-950 sm:inline-flex"
          >
            Resume
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-slate-100 transition hover:border-cyan-400/60 hover:text-cyan-300 md:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div className="border-t border-white/10 bg-slate-950/95 px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-3 text-sm font-medium text-slate-200">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition hover:border-cyan-400/60 hover:text-cyan-300"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/KalpeshPartePF.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="rounded-2xl border border-cyan-400/70 bg-cyan-400/10 px-4 py-3 text-center font-semibold text-cyan-200 transition hover:bg-cyan-400 hover:text-slate-950"
            >
              Resume
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
