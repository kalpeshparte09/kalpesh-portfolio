const skills = [
  {
    title: "Frontend",
    description: "Building interfaces that are responsive, accessible, and visually deliberate.",
    items: [
      { name: "React", level: "Advanced", proof: "Component-driven UI and reusable patterns" },
      { name: "Next.js", level: "Advanced", proof: "Portfolio architecture and modern routing" },
      { name: "TypeScript", level: "Intermediate", proof: "Safer component logic and props modeling" },
      { name: "Tailwind CSS", level: "Advanced", proof: "Fast, consistent styling systems" },
      { name: "Bootstrap", level: "Intermediate", proof: "Structured layouts and UI foundations" },
    ],
  },
  {
    title: "Backend",
    description: "Designing practical application logic, APIs, and server-side workflows.",
    items: [
      { name: "Node.js", level: "Intermediate", proof: "API routes, async flows, and service logic" },
      { name: "Express", level: "Intermediate", proof: "REST API structure and endpoint design" },
      { name: "REST APIs", level: "Intermediate", proof: "Clear request-response patterns" },
      { name: "C# (.NET)", level: "Working Knowledge", proof: "Experience across broader backend concepts" },
    ],
  },
  {
    title: "Databases",
    description: "Working with relational and document-based data depending on the problem.",
    items: [
      { name: "MongoDB", level: "Intermediate", proof: "Document modeling and app data storage" },
      { name: "MySQL", level: "Advanced", proof: "CRUD systems and relational querying" },
      { name: "Firebase", level: "Intermediate", proof: "Mobile app backend and quick iteration" },
      { name: "PostgreSQL", level: "Working Knowledge", proof: "Relational database fundamentals" },
    ],
  },
  {
    title: "Tools",
    description: "Using collaboration, deployment, and workflow tools to ship efficiently.",
    items: [
      { name: "Git/GitHub", level: "Advanced", proof: "Version control and project collaboration" },
      { name: "Railway", level: "Intermediate", proof: "Deployment and project hosting" },
      { name: "Postman", level: "Advanced", proof: "API testing and endpoint validation" },
      { name: "Figma", level: "Intermediate", proof: "UI planning and design communication" },
      { name: "Jira", level: "Intermediate", proof: "Task tracking and teamwork" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="space-y-10 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-200">
            Skills Snapshot
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            The stack I use most, plus the strengths I bring into projects.
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-200">
            Instead of only listing tools, this section shows the kind of work I use them for.
            That makes it easier for recruiters and collaborators to understand where I can contribute quickly.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {skills.map((group) => (
            <article
              key={group.title}
              className="rounded-[2rem] border border-white/10 bg-white/6 p-6 shadow-xl backdrop-blur-xl"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h3 className="text-2xl font-semibold text-white">{group.title}</h3>
                  <p className="mt-2 max-w-xl text-sm leading-7 text-slate-200">
                    {group.description}
                  </p>
                </div>
                <span className="rounded-full border border-cyan-400/25 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100">
                  {group.items.length} skills
                </span>
              </div>

              <div className="mt-6 grid gap-4">
                {group.items.map((item) => (
                  <div
                    key={item.name}
                    className="rounded-2xl border border-white/10 bg-slate-950/35 p-4"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <p className="text-base font-semibold text-white">{item.name}</p>
                      <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-slate-200">
                        {item.level}
                      </span>
                    </div>
                    <p className="mt-3 text-sm leading-7 text-slate-300">{item.proof}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
