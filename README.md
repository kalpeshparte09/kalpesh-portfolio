# Kalpesh Portfolio Starter (Next.js 14 + TS + Tailwind + AI Chat)

A modern, production-ready starter for your full‑stack developer portfolio.

## Features
- **Next.js 14 (App Router) + TypeScript**
- **Tailwind CSS** for fast, responsive UI
- **Framer Motion** micro-interactions
- **Dark / Light theme** with `next-themes`
- **AI Chat** endpoint (uses `OPENAI_API_KEY` if present, else returns a mock)
- Sections: Hero, Projects, Skills, Contact (with working API placeholder)

## Quick Start
```bash
pnpm i   # or npm i / yarn
cp .env.example .env.local  # add your OPENAI_API_KEY
pnpm dev  # or npm run dev / yarn dev
```

Visit http://localhost:3000

## Project Structure
```
app/
  api/
    chat/route.ts         # POST /api/chat - AI assistant (mock if no key)
    contact/route.ts      # POST /api/contact - simple form echo
  globals.css
  layout.tsx
  page.tsx
components/
  Chatbot.tsx
  Contact.tsx
  Hero.tsx
  Navbar.tsx
  Projects.tsx
  Skills.tsx
lib/
  ai.ts                   # optional helper to call OpenAI (with graceful fallback)
```

## Deploy
- **Vercel** is recommended. Add `OPENAI_API_KEY` to project Environment Variables.
- Set Build Command to `next build` and Output Directory is `.next` (default).

## Next Steps / Ideas
- Replace mock project data with your real projects (GitHub links, tech badges).
- Add blog (`app/blog/`) with MDX.
- Add 3D hero using `react-three-fiber` later.
- Convert AI chat to use retrieval (RAG) with your resume & project docs.
