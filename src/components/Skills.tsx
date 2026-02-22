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
    <section id="habilidades" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Mis <span className="text-gradient">Habilidades</span>
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full mb-4" />
          <p className="text-slate-400 max-w-2xl mx-auto">
            Tecnologías y herramientas con las que trabajo para crear aplicaciones web modernas
          </p>
        </div>

        {/* Technology Icons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 hover:bg-slate-700 transition-all hover:scale-105 cursor-default"
            >
              <span className="text-xl">{tech.icon}</span>
              <span className="text-sm font-medium">{tech.name}</span>
            </div>
          ))}
        </div>

        {/* Skills Progress Bars */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, groupIndex) => (
            <div key={groupIndex} className="bg-slate-800/50 rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-6 text-primary-400">
                {skillGroup.category}
              </h3>
              <div className="space-y-5">
                {skillGroup.items.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-slate-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Learning Section */}
        <div className="mt-12 text-center">
          <p className="text-slate-400 mb-4">Actualmente aprendiendo:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Node.js', 'PostgreSQL', 'Prisma', 'Testing'].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-full border border-primary-500/50 text-primary-400 text-sm hover:bg-primary-500/10 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
