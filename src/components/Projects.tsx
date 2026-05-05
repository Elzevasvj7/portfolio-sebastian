"use client";

import Image from "next/image";
import { ArrowUpRight, ExternalLink, Github, FolderOpen } from "lucide-react";

const projects = [
  {
    title: "VetChat AI",
    category: "AI assistant / Pet care",
    description:
      "Un asistente veterinario pensado para dar orientación clara y accesible sobre síntomas, cuidados y decisiones iniciales para mascotas.",
    image: "/vet-chat.png",
    technologies: ["React", "Gemini AI", "Tailwind CSS", "Next.js"],
    liveUrl: "https://vet-app-qs56.vercel.app/vet-chat",
    githubUrl: "https://github.com/Elzevasvj7/vet-app",
    featured: false,
  },
  {
    title: "EdSoft",
    category: "Education / Management platform",
    description:
      "Una plataforma para instituciones educativas donde la prioridad fue ordenar información compleja en una experiencia más clara y útil.",
    image: "/edsoft.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Nest.js",
      "PostgreSQL",
    ],
    liveUrl: "https://dev.d1hilyblwhqmh8.amplifyapp.com/",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "Finance Dashboard",
    category: "Fintech / Personal tracking",
    description:
      "Un dashboard financiero enfocado en lectura rápida, jerarquía visual y seguimiento de hábitos desde una interfaz limpia.",
    image: "/finance-dashboard.png",
    technologies: [
      "Next.js",
      "Recharts",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
    ],
    liveUrl: "https://presupuesto-app-henna.vercel.app/",
    githubUrl: "https://github.com/Elzevasvj7/presupuesto-app",
    featured: true,
  },
  {
    title: "DnD Assistant",
    category: "Gaming / AI helper",
    description:
      "Asistente para jugadores de Dungeons and Dragons creado para consultar reglas, estrategias y apoyo contextual durante la partida.",
    image: "/dnd-assistant.png",
    technologies: ["React", "Gemini AI", "Tailwind CSS", "Next.js"],
    liveUrl: "https://vet-app-qs56.vercel.app/dnd",
    githubUrl: "https://github.com/Elzevasvj7/vet-app",
    featured: false,
  },
  {
    title: "TaskFlow",
    category: "Productivity / Task management",
    description:
      "Una app simple de tareas donde la intención fue construir una experiencia ligera, ordenada y fácil de usar todos los días.",
    image: "/todo-list.png",
    technologies: ["React", "Tailwind CSS", "Next.js"],
    liveUrl: "https://pt-taskflow-sebastian.vercel.app/",
    githubUrl: "https://github.com/Elzevasvj7/pt-taskflow-sebastian",
    featured: true,
  },
];

export default function Projects() {
  const featuredProjects = projects.filter((project) => project.featured);
  const moreProjects = projects.filter((project) => !project.featured);

  return (
    <section id="proyectos" className="py-24 sm:py-28">
      <div className="section-shell">
        <div className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div className="section-label">Proyectos</div>
            <h2 className="section-title mb-5">
              Una selección de trabajo donde busco que{" "}
              <span className="text-gradient">
                la interfaz hable tan bien como la funcionalidad
              </span>
              .
            </h2>
            <p className="section-copy">
              Estos proyectos muestran cómo pienso producto, estructura y
              experiencia visual. Me interesa que cada interfaz se vea bien, se
              entienda rápido y tenga sentido en uso real.
            </p>
          </div>
          <a
            href="https://github.com/Elzevasvj7"
            target="_blank"
            rel="noopener noreferrer"
            className="button-secondary gap-2 self-start lg:self-auto"
          >
            <Github size={18} />
            Explorar GitHub
          </a>
        </div>

        <div className="mb-8 grid gap-6 grid-cols-3">
          {featuredProjects.map((project) => (
            <article
              key={project.title}
              className="panel group overflow-hidden transition duration-300 hover:-translate-y-1"
            >
              <div className="relative aspect-[16/10] overflow-hidden border-b border-[color:var(--line)] bg-[linear-gradient(135deg,color-mix(in_srgb,var(--accent)_10%,transparent),transparent)]">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 1280px) 100vw, 40vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center">
                    <FolderOpen className="h-16 w-16 text-[color:var(--accent)]/40" />
                  </div>
                )}

                <div className="absolute left-4 top-4 rounded-full border border-[color:var(--line)] bg-[color:var(--background)] px-3 py-1 text-xs uppercase tracking-[0.24em] text-[color:var(--foreground)]">
                  {project.category}
                </div>
              </div>

              <div className="p-6">
                <h3 className="mb-3 text-3xl font-semibold text-[color:var(--foreground)]">
                  {project.title}
                </h3>
                <p className="mb-5 text-sm leading-7 text-[color:var(--muted)]">
                  {project.description}
                </p>
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                      <span key={tech} className="tag-chip">
                        {tech}
                      </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button-secondary h-12 w-12 rounded-2xl p-0"
                    aria-label={`Ver ${project.title}`}
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button-secondary h-12 w-12 rounded-2xl p-0"
                    aria-label={`Ver código de ${project.title}`}
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="panel p-6 sm:p-8">
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-2 text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
                Más trabajo
              </p>
              <h3 className="text-3xl font-semibold text-[color:var(--foreground)]">
                Experimentos, utilidades y productos ligeros
              </h3>
            </div>
            <p className="max-w-xl text-sm leading-7 text-[color:var(--muted)]">
              También desarrollo proyectos más compactos donde pruebo ideas,
              flujos y soluciones orientadas a usabilidad.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {moreProjects.map((project) => (
              <article
                key={project.title}
                className="rounded-[24px] border border-[color:var(--line)] bg-[color:var(--surface)] p-5"
              >
                <div className="mb-4 flex items-center justify-between gap-4">
                  <div>
                    <p className="mb-2 text-xs uppercase tracking-[0.28em] text-[color:var(--muted)]">
                      {project.category}
                    </p>
                    <h4 className="text-2xl font-semibold text-[color:var(--foreground)]">
                      {project.title}
                    </h4>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button-secondary h-11 w-11 rounded-2xl p-0"
                      aria-label={`Ver ${project.title}`}
                    >
                      <ExternalLink size={18} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button-secondary h-11 w-11 rounded-2xl p-0"
                      aria-label={`Ver código de ${project.title}`}
                    >
                      <Github size={18} />
                    </a>
                  </div>
                </div>

                <p className="mb-5 text-sm leading-7 text-[color:var(--muted)]">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                      <span key={tech} className="tag-chip">
                        {tech}
                      </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
