"use client";

import { useState } from "react";

export default function Chatbot() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{ role: "user" | "bot"; content: string }[]>([
    { role: "bot", content: "Hi! Ask me anything about Kalpesh's skills, projects, or experience." }
  ]);
  const [loading, setLoading] = useState(false);

  async function send() {
    if (!input.trim()) return;
    const userMsg = { role: "user" as const, content: input };
    setMessages(m => [...m, userMsg]);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMsg.content })
      });
      const data = await res.json();
      const botMsg = { role: "bot" as const, content: data.reply ?? "Sorry, something went wrong." };
      setMessages(m => [...m, botMsg]);
    } catch (e) {
      setMessages(m => [...m, { role: "bot", content: "Network error. Please try again." }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="space-y-8 text-center">
      <h2 className="relative text-3xl font-bold text-white drop-shadow-[0_0_12px_rgba(0,0,0,0.8)]">
  AI Assistant
  <span className="absolute left-1/2 -bottom-1 h-1 w-28 
                         -translate-x-1/2 bg-gradient-to-r 
                         from-pink-500 via-purple-500 to-blue-500 rounded-full"></span>
</h2>
      <div className="rounded-2xl border border-gray-700 p-6 max-w-2xl mx-auto bg-black/40 backdrop-blur-md">
        <div className="space-y-2 mb-4 max-h-72 overflow-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent">
          {messages.map((m, i) => (
            <div key={i} className={m.role === "user" ? "text-right" : "text-left"}>
              <span
                className={
                  "inline-block rounded-xl px-4 py-2 text-sm max-w-xs " +
                  (m.role === "user"
                    ? "bg-emerald-500 text-white"
                    : "bg-gray-800 text-gray-200")
                }
              >
                {m.content}
              </span>
            </div>
          ))}
        </div>
        <div className="flex gap-3">
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === "Enter" && send()}
            placeholder="Ask about my stack, a project, or experience..."
            className="flex-1 rounded-xl border border-gray-700 px-4 py-2 bg-black/40 text-white placeholder-gray-400 focus:border-emerald-400 focus:ring-emerald-400 transition"
          />
          <button
            onClick={send}
            disabled={loading}
            className="rounded-xl border border-emerald-500 px-5 py-2 text-sm font-medium text-white hover:bg-emerald-500 hover:text-white transition shadow-md"
          >
            {loading ? "..." : "Send"}
          </button>
        </div>
      </div>
    </section>
  );
}
