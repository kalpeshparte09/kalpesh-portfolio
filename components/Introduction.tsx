"use client";
import { useState } from "react";
import Image from "next/image";

export default function Introduction() {
  const [transformStyle, setTransformStyle] = useState({});

  // Handle mouse movement for 3D tilt + moving glow/shadow
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left - width / 2;
    const y = e.clientY - top - height / 2;

    const rotateX = (-y / height) * 15; // max 15 deg tilt
    const rotateY = (x / width) * 15;

    // Shadow offset moves opposite to cursor for depth
    const shadowX = -(x / width) * 20; 
    const shadowY = -(y / height) * 20;

    setTransformStyle({
      transform: `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`,
      filter: "brightness(1.05)",
      boxShadow: `${shadowX}px ${shadowY}px 30px rgba(255, 255, 255, 0.2), 0 0 30px rgba(0, 0, 0, 0.3)`,
    });
  };

  const handleMouseLeave = () => {
    setTransformStyle({
      transform: "scale(1)",
      filter: "brightness(1)",
      boxShadow: "0 0 20px rgba(0,0,0,0.2)",
    });
  };

  return (
    <section id="about" className="space-y-8 text-center py-1">
    
      {/* Content Container */}
      <div className="flex flex-col md:flex-row items-center gap-10 max-w-5xl mx-auto rounded-2xl border backdrop-blur-lg bg-white/10 dark:bg-black/30 shadow-2xl p-8">
        {/* Profile Picture - Circular with 3D tilt + moving shadow */}
        <div
          className="flex-shrink-0 w-64 h-64 relative rounded-full overflow-hidden transition-transform duration-300"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={transformStyle}
        >
          <Image
            src="/Intro_img.jpg" 
            alt="Kalpesh Parte"
            fill
            className="object-cover w-full h-full"
          />
        </div>

        {/* Intro Text */}
        <div className="text-left space-y-4 max-w-xl">
          <p className="text-lg text-white/90 leading-relaxed">
            Hi, I’m <span className="font-semibold text-emerald-400">Kalpesh Parte</span>.
          </p>
          <p className="text-lg text-white/90 leading-relaxed">
            I was born in Vadodara, Gujarat, a city known for its rich cultural heritage, grand 
            Laxmi Vilas Palace, and historic architecture. 
            Growing up there inspired my curiosity and creativity.
          </p>
          <p className="text-lg text-white/90 leading-relaxed">
            Today, I am based in Toronto, Ontario, where I continue my journey in technology and innovation. 
            I’ve studied web development, focusing on building modern, user-friendly digital experiences 
            that combine functionality with great design.
          </p>
        </div>
      </div>
      <div className="mt-10 flex gap-5 justify-center flex-wrap">
              <a
          href="#projects"
          className="relative inline-flex items-center justify-center px-6 py-3 
                     font-medium text-white transition duration-300 
                     rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 
                     hover:scale-105 hover:shadow-[0_0_25px_rgba(168,85,247,0.8)]"
        >
          <span>🚀 View Projects</span>
        </a>
        <a
          href="#contact"
          className="relative inline-flex items-center justify-center px-6 py-3 
                     font-medium text-white transition duration-300 rounded-xl 
                     bg-gradient-to-r from-blue-500 via-teal-500 to-green-500 
                     hover:scale-105 hover:shadow-[0_0_25px_rgba(34,197,94,0.8)]"
        >
          <span>📬 Contact Me</span>
        </a>
        </div>
    </section>
  );
}
