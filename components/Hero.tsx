"use client";

import { motion } from "framer-motion";

const quickStats = [
  { value: "Full-Stack", label: "React, Next.js, Node, SQL" },
  { value: "UI + Logic", label: "Product-minded frontend and backend work" },
  { value: "Based in Toronto", label: "Open to internship and junior developer roles" },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-4 pt-28 text-center sm:px-6 sm:pt-36"
    >
      <div className="mx-auto max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-sm font-medium uppercase tracking-[0.25em] text-cyan-200"
        >
          Portfolio • Full-Stack Developer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-6 text-4xl font-black leading-tight text-white sm:text-6xl lg:text-7xl"
        >
          Building responsive products with
          <span className="block bg-gradient-to-r from-cyan-300 via-sky-400 to-fuchsia-400 bg-clip-text text-transparent">
            clean code, thoughtful UI, and real-world impact.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-200 sm:text-xl"
        >
          I&apos;m Kalpesh Parte, a Toronto-based developer focused on React, Next.js,
          Node.js, and databases. I enjoy shipping polished interfaces, practical APIs,
          and projects that feel both reliable and memorable.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="inline-flex rounded-full bg-white px-6 py-3 font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-300"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex rounded-full border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:border-cyan-400/60 hover:text-cyan-200"
          >
            Let&apos;s Connect
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-14 grid gap-4 text-left sm:grid-cols-3"
        >
          {quickStats.map((stat) => (
            <div
              key={stat.value}
              className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
            >
              <p className="text-sm uppercase tracking-[0.2em] text-cyan-200">
                {stat.value}
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-200">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
