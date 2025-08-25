"use client";

import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("Sending...");
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
    const json = await res.json();
    setStatus(json.ok ? "✅ Thanks! I'll get back to you soon." : "❌ Something went wrong.");
    form.reset();
  }

  return (
    <section id="contact" className="space-y-8 text-center">
      <h2 className="relative text-3xl font-bold text-white drop-shadow-[0_0_12px_rgba(0,0,0,0.8)]">
        Contact
        <span className="absolute left-1/2 -bottom-1 h-1 w-28 
                         -translate-x-1/2 bg-gradient-to-r 
                         from-pink-500 via-purple-500 to-blue-500 rounded-full"></span>
      </h2>

      <form
        onSubmit={onSubmit}
        className="grid gap-4 max-w-lg mx-auto p-6 
                   rounded-2xl border backdrop-blur-lg 
                   bg-white/10 dark:bg-black/30 shadow-2xl"
      >
        <input
          name="name"
          placeholder="Your name"
          required
          className="rounded-xl px-4 py-3 text-white bg-white/10 border 
                     focus:ring-2 focus:ring-pink-500 outline-none"
        />
        <input
          name="email"
          type="email"
          placeholder="Your email"
          required
          className="rounded-xl px-4 py-3 text-white bg-white/10 border 
                     focus:ring-2 focus:ring-purple-500 outline-none"
        />
        <textarea
          name="message"
          placeholder="Your message"
          rows={5}
          className="rounded-xl px-4 py-3 text-white bg-white/10 border 
                     focus:ring-2 focus:ring-blue-500 outline-none"
        />
        <button
          className="rounded-xl px-6 py-3 font-medium text-white 
                     bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500
                     hover:scale-105 hover:shadow-[0_0_25px_rgba(168,85,247,0.8)] 
                     transition"
        >
          Send ✨
        </button>
        {status && <p className="text-sm text-white/80">{status}</p>}
      </form>
    </section>
  );
}
