import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Kalpesh Parte | Full-Stack Developer Portfolio",
  description:
    "Portfolio of Kalpesh Parte, a Toronto-based full-stack developer building polished interfaces, practical APIs, and modern web experiences.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-slate-950 text-slate-50 antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="container mx-auto py-10">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
