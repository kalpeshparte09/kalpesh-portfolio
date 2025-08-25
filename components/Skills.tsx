const skills = {
  Frontend: ["React", "Next.js", "TypeScript", "Tailwind", "Bootstrap"],
  Backend: ["Node.js", "Express", "REST APIs", "C# (.NET)"],
  Database: ["MongoDB (Mongoose/Prisma)", "MySQL", "Firebase","postgreSQL"],
  Tools: ["Git/GitHub", "Railway", "Postman", "Figma", "Jira"],
};

export default function Skills() {
  return (
    <section id="skills" className="space-y-10 text-center">
      <h2 className="relative text-3xl font-bold text-white drop-shadow-[0_0_12px_rgba(0,0,0,0.8)]">
  Skills
  <span className="absolute left-1/2 -bottom-1 h-1 w-28 
                         -translate-x-1/2 bg-gradient-to-r 
                         from-pink-500 via-purple-500 to-blue-500 rounded-full"></span>
</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {Object.entries(skills).map(([cat, list]) => (
          <div key={cat} className="rounded-2xl border border-gray-700 p-6 bg-black/40 backdrop-blur-md">
            <h3 className="font-semibold text-lg text-emerald-400">{cat}</h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-300">
              {list.map(item => <li key={item}>• {item}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
