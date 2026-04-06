"use client";

import { useState } from "react";
import Image from "next/image";

const highlights = [
  "Focused on accessible, user-friendly interfaces with strong frontend fundamentals.",
  "Comfortable across API development, database design, QA-minded testing, and deployment.",
  "Interested in roles where I can contribute across product thinking, UI polish, and implementation.",
];

const facts = [
  { label: "Current Focus", value: "React, Next.js, TypeScript, Node.js" },
  { label: "Strengths", value: "Clean UI, practical backend logic, iterative problem-solving" },
  { label: "Background", value: "Born in Vadodara, now building in Toronto" },
];

export default function Introduction() {
  const [transformStyle, setTransformStyle] = useState({});

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left - width / 2;
    const y = e.clientY - top - height / 2;

    const rotateX = (-y / height) * 12;
    const rotateY = (x / width) * 12;
    const shadowX = -(x / width) * 20;
    const shadowY = -(y / height) * 20;

    setTransformStyle({
      transform: `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`,
      filter: "brightness(1.05)",
      boxShadow: `${shadowX}px ${shadowY}px 36px rgba(34, 211, 238, 0.18), 0 0 40px rgba(15, 23, 42, 0.55)`,
    });
  };

  const handleMouseLeave = () => {
    setTransformStyle({
      transform: "scale(1)",
      filter: "brightness(1)",
      boxShadow: "0 0 24px rgba(15,23,42,0.35)",
    });
  };

  return (
    <section id="about" className="space-y-10 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/10 bg-white/6 p-8 shadow-2xl backdrop-blur-xl lg:p-10">
        <div className="grid items-center gap-10 lg:grid-cols-[280px_1fr]">
          <div
            className="relative mx-auto h-64 w-64 overflow-hidden rounded-[2rem] border border-white/10 transition-transform duration-300"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={transformStyle}
          >
            <Image
              src="/Intro_img.jpg"
              alt="Portrait of Kalpesh Parte"
              fill
              priority
              className="object-cover"
            />
          </div>

          <div className="space-y-6">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-200">
                About Me
              </p>
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Developer with a builder&apos;s mindset and a strong eye for interface quality.
              </h2>
              <p className="max-w-3xl text-base leading-8 text-slate-200 sm:text-lg">
                I grew up in Vadodara, Gujarat, and now live in Toronto, Ontario.
                That journey shaped how I work: curious, adaptable, and always trying
                to improve both the user experience and the code behind it. I like
                projects where thoughtful visuals and solid engineering meet in the middle.
              </p>
            </div>

            <div className="grid gap-3">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-slate-950/35 px-4 py-4 text-sm leading-7 text-slate-200"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {facts.map((fact) => (
            <div
              key={fact.label}
              className="rounded-3xl border border-white/10 bg-slate-950/40 p-5"
            >
              <p className="text-xs uppercase tracking-[0.22em] text-slate-400">
                {fact.label}
              </p>
              <p className="mt-3 text-sm leading-6 text-white">{fact.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 via-sky-500 to-fuchsia-500 px-6 py-3 font-semibold text-slate-950 transition hover:-translate-y-0.5"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:border-cyan-400/60 hover:text-cyan-200"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
