import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      container: { center: true, padding: "1rem" }
    },
  },
  darkMode: "class",
  plugins: [],
};
export default config;
