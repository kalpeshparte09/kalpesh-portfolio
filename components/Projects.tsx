import { ArrowUpRight, Github, Globe } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Admin",
    subtitle: "Admin dashboard for store operations",
    desc: "A CRUD-focused admin portal with secure prepared statements, validation, and practical management workflows for products and content.",
    stack: ["PHP", "MySQL", "PDO", "MySQLi", "Tailwind"],
    highlights: ["Secure form handling", "Admin-first CRUD flows", "Database-driven content"],
    outcome: "Shows backend fundamentals, form validation, and production-minded PHP patterns.",
    codeLink: "https://github.com/kalpeshparte09",
    liveLink: "",
  },
  {
    title: "Thrifted Threads",
    subtitle: "Android thrift shopping experience",
    desc: "A Firebase-backed Android app with product browsing, detail pages, and a checkout-style flow tailored for a second-hand fashion marketplace.",
    stack: ["Kotlin", "Firebase", "RecyclerView", "XML"],
    highlights: ["Mobile commerce UX", "Firebase integration", "Structured product browsing"],
    outcome: "Demonstrates mobile UI architecture, app state flow, and backend-as-a-service integration.",
    codeLink: "https://github.com/kalpeshparte09",
    liveLink: "",
  },
  {
    title: "Campsite Booking Application",
    subtitle: "Booking workflow for outdoor stays",
    desc: "A React-based web project focused on a user-friendly campsite reservation experience with responsive layouts and clear booking interactions.",
    stack: ["React", "JavaScript", "CSS"],
    highlights: ["Responsive booking UI", "Travel-style product thinking", "Component-based frontend"],
    outcome: "Highlights frontend development, layout structuring, and experience design for bookings.",
    codeLink: "https://github.com/kalpeshparte09",
    liveLink: "",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="space-y-10 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-200">
            Selected Work
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Projects that show how I think across interface, implementation, and user flow.
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-200">
            Each project helped me strengthen a different part of the stack, from admin
            tooling and mobile app development to responsive web interfaces. The cards
            below focus on what was built and what each project demonstrates.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex h-full flex-col rounded-[2rem] border border-white/10 bg-white/6 p-6 shadow-xl backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-400/50"
            >
              <div className="rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-cyan-400/10 via-slate-950/20 to-fuchsia-500/10 p-5">
                <p className="text-xs uppercase tracking-[0.22em] text-slate-400">
                  {project.subtitle}
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-white">
                  {project.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-200">{project.desc}</p>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-100"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-6 space-y-3 text-sm text-slate-200">
                {project.highlights.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-cyan-300" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <p className="mt-6 rounded-2xl border border-white/10 bg-slate-950/40 p-4 text-sm leading-7 text-slate-200">
                {project.outcome}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:border-cyan-400/60 hover:text-cyan-200"
                >
                  <Github className="h-4 w-4" />
                  Code
                </a>

                {project.liveLink ? (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                  >
                    <Globe className="h-4 w-4" />
                    Live Demo
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 rounded-full border border-dashed border-white/15 px-4 py-2 text-sm text-slate-400">
                    <ArrowUpRight className="h-4 w-4" />
                    Demo link can be added
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
