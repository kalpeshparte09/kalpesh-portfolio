"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const isDark = (mounted ? resolvedTheme : theme) === "dark";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-md bg-white/70 dark:bg-black/70 shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <a href="/" className="font-bold text-2xl tracking-tight text-gray-900 dark:text-white hover:text-emerald-500 transition">
          Kalpesh Parte
        </a>
        <nav className="hidden sm:flex gap-6 text-sm font-medium">
          <a href="#projects" className="hover:text-emerald-500 transition">Projects</a>
          <a href="#skills" className="hover:text-emerald-500 transition">Skills</a>
          <a href="#contact" className="hover:text-emerald-500 transition">Contact</a>
        </nav>
        <a
          href="/KalpeshPartePF.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl border border-emerald-500 px-4 py-2 text-sm font-medium text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500 hover:text-white transition shadow-sm"
        >
          Resume
        </a>
      </div>
    </header>
  );
}
