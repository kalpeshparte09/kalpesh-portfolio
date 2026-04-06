import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import LetterGlitch from "@/components/LetterGlitch";
import Introduction from "@/components/Introduction";
import ChatAssistant from "@/components/ChatAssistant";

export default function HomePage() {
  return (
    <div className="relative min-h-screen">
      <LetterGlitch />
      <div className="relative z-10 space-y-24 pb-12">
        <Hero />
        <Introduction />
        <Projects />
        <Skills />
        <ChatAssistant />
        <Contact />
      </div>
    </div>
  );
}
