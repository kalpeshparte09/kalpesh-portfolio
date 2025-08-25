import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar";
import LetterGlitch from "@/components/LetterGlitch";

export const metadata: Metadata = {
  title: "Kalpesh Parte — Full‑Stack Developer",
  description: "Modern portfolio with AI and delightful UI.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="container py-10">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
