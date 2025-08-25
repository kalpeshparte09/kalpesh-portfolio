import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Chatbot from "@/components/Chatbot";
import LetterGlitch from "@/components/LetterGlitch";

export default function HomePage() {
  return (
    <div className="relative min-h-screen">
      {/* ✅ Background glitch effect */}
      <LetterGlitch />

      {/* ✅ Foreground content */}
      <div className="relative z-10 space-y-24">
        <Hero />
        <Projects />
        <Skills />
        <Contact />
        <Chatbot />
      </div>
    </div>
  );
}
