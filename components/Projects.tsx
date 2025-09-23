const projects = [
  {
    title: "E-Commerce Admin (PDO + MySQLi)",
    desc: "CRUD portal with secure prepared statements, validations, and self-processing pages.",
    link: "https://github.com/kalpeshparte09",
    stack: ["PHP", "MySQL", "PDO", "MySQLi", "Tailwind"]
  },
  {
    title: "Thrifted Threads (Android)",
    desc: "Firebase-backed thrift store app: recycler view, product detail, checkout.",
    link: "https://github.com/kalpeshparte09",
    stack: ["Kotlin", "Firebase", "XML"]
  },
  {
    title: "Campsite Booking Application - Web Project",
    desc: "Developed a campsite booking web application using the React.js framework and JavaScript.",
    link: "https://github.com/kalpeshparte09",
    stack: ["React", "CSS", "JS"]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="space-y-10 text-center">
      <h2 className="relative text-3xl font-bold text-white drop-shadow-[0_0_12px_rgba(0,0,0,0.8)]">
  Projects
  <span className="absolute left-1/2 -bottom-1 h-1 w-28 
                         -translate-x-1/2 bg-gradient-to-r 
                         from-pink-500 via-purple-500 to-blue-500 rounded-full"></span>
</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p) => (
          <a
            key={p.title}
            href={p.link}
            target="_blank"
            className="group rounded-2xl border border-gray-700 p-6 hover:shadow-lg hover:shadow-emerald-500/20 transition bg-black/40 backdrop-blur-md"
          >
            <h3 className="font-semibold text-lg text-white group-hover:text-emerald-400 transition">
              {p.title}
            </h3>
            <p className="mt-3 text-sm text-gray-300">{p.desc}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.stack.map(s => (
                <span key={s} className="text-xs rounded-full border border-gray-600 px-3 py-1 text-gray-300 group-hover:border-emerald-400 transition">
                  {s}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
