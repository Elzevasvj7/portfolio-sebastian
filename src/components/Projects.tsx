'use client'

import { ExternalLink, Github, FolderOpen } from 'lucide-react'

// Proyectos reales de Sebastian Camero
const projects = [
  {
    title: 'VetChat AI - Asistente Veterinario',
    description: 'Chatbot inteligente de asistencia veterinaria potenciado por Gemini AI. Proporciona orientación sobre cuidados de mascotas, síntomas y recomendaciones de salud animal.',
    image: null,
    technologies: ['React', 'Gemini AI', 'Tailwind CSS', 'Next.js'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    title: 'Sistema de Gestión Escolar',
    description: 'Plataforma completa para instituciones educativas con gestión de estudiantes, profesores, calificaciones y comunicación entre padres y escuela.',
    image: null,
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    title: 'Finance Dashboard',
    description: 'Dashboard de finanzas personales con gráficos interactivos, seguimiento de ingresos/gastos, categorización automática y persistencia de datos.',
    image: null,
    technologies: ['Next.js', 'Recharts', 'TypeScript', 'Tailwind CSS'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
]

export default function Projects() {
  return (
    <section id="proyectos" className="py-20 bg-slate-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Mis <span className="text-gradient">Proyectos</span>
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full mb-4" />
          <p className="text-slate-400 max-w-2xl mx-auto">
            Una selección de proyectos en los que he trabajado. Cada uno representa 
            un desafío único y una oportunidad de aprendizaje.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <article
              key={index}
              className="group bg-slate-800 rounded-2xl overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300"
            >
              {/* Project Image/Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-primary-500/20 to-primary-700/20 relative overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <FolderOpen className="w-16 h-16 text-primary-500/50" />
                  </div>
                )}
                
                {/* Overlay with links */}
                <div className="absolute inset-0 bg-slate-900/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-primary-600 hover:bg-primary-700 transition-colors"
                    aria-label="Ver proyecto"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-slate-700 hover:bg-slate-600 transition-colors"
                    aria-label="Ver código"
                  >
                    <Github size={20} />
                  </a>
                </div>

                {/* Featured badge */}
                {project.featured && (
                  <span className="absolute top-3 right-3 px-2 py-1 text-xs font-medium bg-primary-600 rounded-full">
                    Destacado
                  </span>
                )}
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 text-xs rounded-md bg-slate-700 text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <p className="text-slate-400 mb-4">
            ¿Quieres ver más de mi trabajo?
          </p>
          <a
            href="https://github.com/Elzevasvj7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-primary-500 text-primary-400 hover:bg-primary-500/10 transition-colors"
          >
            <Github size={20} />
            Ver mi GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
