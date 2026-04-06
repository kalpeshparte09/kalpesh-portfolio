"use client";

import { FormEvent, useState } from "react";
import { Github, Linkedin, Mail, MessageSquare } from "lucide-react";

type FormState = {
  name: string;
  email: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");
    setStatusMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Unable to send your message right now.");
      }

      setStatus("success");
      setStatusMessage(result.message || "Thanks for reaching out. I'll get back to you soon.");
      setForm(initialState);
    } catch (error) {
      setStatus("error");
      setStatusMessage(
        error instanceof Error ? error.message : "Something went wrong while sending the form."
      );
    }
  };

  return (
    <section id="contact" className="space-y-10 px-4 pb-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-200">
            Contact
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Interested in collaborating, hiring, or just starting a conversation?
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-200">
            The form below is the fastest way to reach me. You can also connect with me on
            GitHub or LinkedIn, or open my resume directly.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/6 p-6 shadow-xl backdrop-blur-xl sm:p-8">
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2 text-sm text-slate-200">
                  Name
                  <input
                    type="text"
                    value={form.name}
                    onChange={(event) =>
                      setForm((current) => ({ ...current, name: event.target.value }))
                    }
                    placeholder="Your name"
                    required
                    className="rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400/70"
                  />
                </label>

                <label className="grid gap-2 text-sm text-slate-200">
                  Email
                  <input
                    type="email"
                    value={form.email}
                    onChange={(event) =>
                      setForm((current) => ({ ...current, email: event.target.value }))
                    }
                    placeholder="you@example.com"
                    required
                    className="rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400/70"
                  />
                </label>
              </div>

              <label className="grid gap-2 text-sm text-slate-200">
                Message
                <textarea
                  value={form.message}
                  onChange={(event) =>
                    setForm((current) => ({ ...current, message: event.target.value }))
                  }
                  placeholder="Tell me about the role, project, or idea you have in mind."
                  required
                  rows={6}
                  className="rounded-[1.5rem] border border-white/10 bg-slate-950/50 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400/70"
                />
              </label>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  <MessageSquare className="h-4 w-4" />
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>

                {statusMessage ? (
                  <p
                    className={`text-sm ${
                      status === "error" ? "text-rose-300" : "text-emerald-300"
                    }`}
                  >
                    {statusMessage}
                  </p>
                ) : null}
              </div>
            </form>
          </div>

          <div className="grid gap-4">
            <a
              href="mailto:kalpeshparte.kp@gmail.com"
              className="rounded-[2rem] border border-white/10 bg-white/6 p-6 shadow-xl backdrop-blur-xl transition hover:border-cyan-400/50"
            >
              <Mail className="h-6 w-6 text-cyan-300" />
              <p className="mt-4 text-sm uppercase tracking-[0.2em] text-slate-400">Email</p>
              <p className="mt-2 text-lg font-semibold text-white break-all">
                kalpeshparte.kp@gmail.com
              </p>
            </a>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <a
                href="https://github.com/kalpeshparte09"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-[2rem] border border-white/10 bg-white/6 p-6 shadow-xl backdrop-blur-xl transition hover:border-cyan-400/50"
              >
                <Github className="h-6 w-6 text-cyan-300" />
                <p className="mt-4 text-sm uppercase tracking-[0.2em] text-slate-400">GitHub</p>
                <p className="mt-2 text-lg font-semibold text-white">@kalpeshparte09</p>
              </a>

              <a
                href="https://linkedin.com/in/kalpesh-parte-a6217822a"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-[2rem] border border-white/10 bg-white/6 p-6 shadow-xl backdrop-blur-xl transition hover:border-cyan-400/50"
              >
                <Linkedin className="h-6 w-6 text-cyan-300" />
                <p className="mt-4 text-sm uppercase tracking-[0.2em] text-slate-400">
                  LinkedIn
                </p>
                <p className="mt-2 text-lg font-semibold text-white">Connect with me</p>
              </a>
            </div>

            <a
              href="/KalpeshPartePF.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-[2rem] border border-cyan-400/40 bg-cyan-400/10 p-6 shadow-xl backdrop-blur-xl transition hover:bg-cyan-400/20"
            >
              <p className="text-sm uppercase tracking-[0.2em] text-cyan-100">Resume</p>
              <p className="mt-2 text-lg font-semibold text-white">Open PDF Resume</p>
              <p className="mt-3 text-sm leading-7 text-slate-200">
                Review my background, projects, and technical experience in one place.
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
