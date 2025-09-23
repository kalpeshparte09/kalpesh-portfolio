# My_Portfolio

A modern, production-ready starter for your full-stack developer portfolio.

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
