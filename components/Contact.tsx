"use client";

import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="space-y-8 text-center">
      <h2 className="relative text-3xl font-bold text-white drop-shadow-[0_0_12px_rgba(0,0,0,0.8)]">
        Contact
        <span
          className="absolute left-1/2 -bottom-1 h-1 w-28 
                     -translate-x-1/2 bg-gradient-to-r 
                     from-pink-500 via-purple-500 to-blue-500 rounded-full"
        ></span>
      </h2>

      <div
        className="max-w-lg mx-auto p-8 space-y-6 
                   rounded-2xl border backdrop-blur-lg 
                   bg-white/10 dark:bg-black/30 shadow-2xl"
      >
        {/* Email */}
        <a
          href="mailto:kalpeshparte.kp@gmail.com"
          className="flex items-center gap-3 justify-center 
                     text-lg text-white hover:text-pink-400 
                     transition group"
        >
          <Mail className="w-6 h-6 text-pink-400 group-hover:scale-110 transition" />
          kalpeshparte.kp@gmail.com
        </a>

        {/* Social Icons */}
        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/kalpeshparte09"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-white/10 dark:bg-black/40 
                       hover:scale-110 hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] 
                       transition"
          >
            <Github className="w-6 h-6 text-white" />
          </a>

          <a
            href="https://linkedin.com/in/kalpesh-parte-a6217822a"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-white/10 dark:bg-black/40 
                       hover:scale-110 hover:shadow-[0_0_20px_rgba(37,99,235,0.6)] 
                       transition"
          >
            <Linkedin className="w-6 h-6 text-white" />
          </a>
        </div>

        {/* Resume */}
        <a
          href="/KalpeshPartePF.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-xl px-6 py-3 font-medium text-white 
                     bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500
                     hover:scale-105 hover:shadow-[0_0_25px_rgba(168,85,247,0.8)] 
                     transition"
        >
          Download Resume 📄
        </a>
      </div>
    </section>
  );
}
