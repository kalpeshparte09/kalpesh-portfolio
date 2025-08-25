"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="text-center pt-20 px-4">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-6xl font-extrabold tracking-tight 
                   bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 
                   bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(255,255,255,0.6)]"
      >
        Full-Stack Developer crafting modern, creative solutions.
      </motion.h1>

      <p className="mt-6 text-lg sm:text-xl font-medium text-white/90 
                    drop-shadow-[0_0_12px_rgba(0,0,0,0.9)]">
        I build responsive, accessible apps with React, Next.js, Node, and MongoDB —
        blending clean code with motion and AI.
      </p>

      <div className="mt-10 flex gap-5 justify-center flex-wrap">
        <a
          href="#projects"
          className="relative inline-flex items-center justify-center px-6 py-3 
                     font-medium text-white transition duration-300 
                     rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 
                     hover:scale-105 hover:shadow-[0_0_25px_rgba(168,85,247,0.8)]"
        >
          <span>🚀 View Projects</span>
        </a>
        <a
          href="#contact"
          className="relative inline-flex items-center justify-center px-6 py-3 
                     font-medium text-white transition duration-300 rounded-xl 
                     bg-gradient-to-r from-blue-500 via-teal-500 to-green-500 
                     hover:scale-105 hover:shadow-[0_0_25px_rgba(34,197,94,0.8)]"
        >
          <span>📬 Contact Me</span>
        </a>
      </div>
    </section>
  );
}
