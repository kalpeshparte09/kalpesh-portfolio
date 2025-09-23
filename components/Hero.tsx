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
    </section>
  );
}
