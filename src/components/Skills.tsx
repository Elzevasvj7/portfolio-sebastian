'use client'

const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'React', level: 85, color: 'from-cyan-400 to-cyan-600' },
      { name: 'Next.js', level: 80, color: 'from-slate-400 to-slate-600' },
      { name: 'TypeScript', level: 75, color: 'from-blue-400 to-blue-600' },
      { name: 'JavaScript', level: 90, color: 'from-yellow-400 to-yellow-600' },
    ],
  },
  {
    category: 'Estilos',
    items: [
      { name: 'Tailwind CSS', level: 90, color: 'from-teal-400 to-teal-600' },
      { name: 'CSS3', level: 85, color: 'from-blue-400 to-purple-600' },
      { name: 'Sass/SCSS', level: 70, color: 'from-pink-400 to-pink-600' },
    ],
  },
  {
    category: 'Herramientas',
    items: [
      { name: 'Git', level: 80, color: 'from-orange-400 to-red-600' },
      { name: 'VS Code', level: 90, color: 'from-blue-400 to-blue-600' },
      { name: 'Figma', level: 65, color: 'from-purple-400 to-purple-600' },
      { name: 'npm/yarn', level: 80, color: 'from-red-400 to-red-600' },
    ],
  },
]

const technologies = [
  { name: 'React', icon: '⚛️' },
  { name: 'Next.js', icon: '▲' },
  { name: 'TypeScript', icon: '📘' },
  { name: 'Tailwind', icon: '🎨' },
  { name: 'JavaScript', icon: '✨' },
  { name: 'HTML5', icon: '🌐' },
  { name: 'CSS3', icon: '💅' },
  { name: 'Git', icon: '📦' },
]

export default function Skills() {
  return (
    <section id="habilidades" className="py-24 sm:py-28">
      <div className="section-shell">
        <div className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div className="section-label">Habilidades</div>
            <h2 className="section-title mb-5">
              Stack sólido para llevar una idea <span className="text-gradient">de concepto a producto</span>.
            </h2>
            <p className="section-copy">
              Trabajo con herramientas enfocadas en construir interfaces mantenibles, rápidas y visualmente refinadas.
            </p>
          </div>
          <div className="panel max-w-sm px-5 py-4 text-sm text-[color:var(--foreground)]">
            <p className="mb-2 text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">Actualmente explorando</p>
            <p>Node.js, PostgreSQL, Prisma y testing para complementar el perfil frontend con criterio fullstack.</p>
          </div>
        </div>

        <div className="mb-16 flex flex-wrap gap-3">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="glass cursor-default rounded-full px-4 py-3 transition-transform hover:-translate-y-1"
            >
              <span className="text-xl">{tech.icon}</span>
              <span className="ml-2 text-sm font-medium text-[color:var(--foreground)]">{tech.name}</span>
            </div>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skillGroup, groupIndex) => (
            <div key={groupIndex} className="panel p-6 sm:p-7">
              <h3 className="mb-6 text-2xl font-semibold text-[color:var(--foreground)]">
                {skillGroup.category}
              </h3>
              <div className="space-y-5">
                {skillGroup.items.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="mb-2 flex justify-between">
                      <span className="text-sm font-medium text-[color:var(--foreground)]">{skill.name}</span>
                      <span className="text-sm text-[color:var(--muted)]">{skill.level}%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-[color:var(--surface-strong)]">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          {['Node.js', 'PostgreSQL', 'Prisma', 'Testing'].map((tech, index) => (
            <span
              key={index}
              className="rounded-full border border-[color:var(--line)] px-4 py-2 text-sm text-[color:var(--foreground)] transition-colors hover:bg-[color:var(--surface)]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
