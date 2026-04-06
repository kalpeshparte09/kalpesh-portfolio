"use client";

import { FormEvent, useState } from "react";
import { Bot, SendHorizonal } from "lucide-react";

type Message = {
  role: "user" | "assistant";
  text: string;
};

const starterPrompts = [
  "What projects has Kalpesh built?",
  "What is Kalpesh's tech stack?",
  "What experience does Kalpesh have?",
];

export default function ChatAssistant() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      text: "Ask me about Kalpesh's skills, projects, or experience.",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async (message: string) => {
    if (!message.trim()) return;

    setMessages((current) => [...current, { role: "user", text: message }]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });

      const result = await response.json();

      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          text: response.ok
            ? result.reply
            : result.error || "I ran into a problem answering that.",
        },
      ]);
    } catch {
      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          text: "I ran into a network issue. Please try again in a moment.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await sendMessage(input);
  };

  return (
    <section className="px-4 sm:px-6">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/10 bg-white/6 p-6 shadow-xl backdrop-blur-xl sm:p-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-200">
            AI Assistant
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Explore the portfolio through a simple interactive assistant.
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-200">
            This lightweight assistant is wired to the site&apos;s knowledge base so visitors can ask
            about skills, projects, and experience without hunting through the page.
          </p>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-3">
            {starterPrompts.map((prompt) => (
              <button
                key={prompt}
                type="button"
                onClick={() => sendMessage(prompt)}
                disabled={isLoading}
                className="block w-full rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-4 text-left text-sm leading-7 text-slate-200 transition hover:border-cyan-400/50 hover:text-white disabled:opacity-70"
              >
                {prompt}
              </button>
            ))}
          </div>

          <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/45 p-4">
            <div className="max-h-[360px] space-y-4 overflow-y-auto pr-1">
              {messages.map((message, index) => (
                <div
                  key={`${message.role}-${index}`}
                  className={`max-w-[92%] rounded-2xl px-4 py-3 text-sm leading-7 ${
                    message.role === "assistant"
                      ? "bg-white/8 text-slate-100"
                      : "ml-auto bg-cyan-400 text-slate-950"
                  }`}
                >
                  {message.role === "assistant" ? (
                    <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
                      <Bot className="h-4 w-4" />
                      Assistant
                    </div>
                  ) : null}
                  <p>{message.text}</p>
                </div>
              ))}

              {isLoading ? (
                <div className="max-w-[92%] rounded-2xl bg-white/8 px-4 py-3 text-sm text-slate-300">
                  Thinking...
                </div>
              ) : null}
            </div>

            <form onSubmit={handleSubmit} className="mt-4 flex gap-3">
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask about projects, skills, or experience"
                className="min-w-0 flex-1 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400/70"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-slate-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-70"
                aria-label="Send message"
              >
                <SendHorizonal className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
