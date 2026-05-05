'use client'

import { ArrowUpRight, ChevronDown, Github, Linkedin, Mail, Sparkles } from 'lucide-react'

const socialLinks = [
  { href: 'https://github.com/Elzevasvj7', label: 'GitHub', icon: Github },
  { href: 'https://linkedin.com/in/sebastian-camero-silva-770252249/', label: 'LinkedIn', icon: Linkedin },
  { href: 'mailto:sebastiancamero77@gmail.com', label: 'Email', icon: Mail },
]

const signaturePoints = [
  'Interfaces con intención y carácter visual',
  'React, Next.js y TypeScript para producto real',
  'Criterio visual, consistencia y código mantenible',
]

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[8%] top-28 h-64 w-64 rounded-full bg-[color:var(--hero-orb-1)] blur-3xl animate-float" />
        <div
          className="absolute right-[10%] top-20 h-72 w-72 rounded-full bg-[color:var(--hero-orb-2)] blur-3xl animate-float"
          style={{ animationDelay: '-2s' }}
        />
        <div
          className="absolute bottom-10 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[color:var(--hero-orb-3)] blur-3xl animate-float"
          style={{ animationDelay: '-4s' }}
        />
      </div>

      <div className="section-shell relative z-10 grid items-end gap-12 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:py-24">
        <div>
          <div className="section-label animate-fade-in">
            <Sparkles size={14} />
            Sebastian Camero / Frontend Developer
          </div>

          <p className="mb-4 animate-slide-up text-sm uppercase tracking-[0.45em] text-[color:var(--muted)]" style={{ animationDelay: '0.05s' }}>
            Caracas, Venezuela
          </p>

          <h1
            className="section-title mb-6 text-5xl font-semibold leading-[0.9] text-[color:var(--foreground)] animate-slide-up sm:text-7xl lg:text-[6.5rem]"
            style={{ animationDelay: '0.1s' }}
          >
            Diseño frontend
            <span className="mt-2 block">para productos que</span>
            <span className="mt-2 block text-gradient">quieren verse serios.</span>
          </h1>

          <p className="section-copy mb-10 max-w-3xl animate-slide-up" style={{ animationDelay: '0.15s' }}>
            Soy Sebastian. Me gusta transformar ideas en interfaces claras, sobrias y memorables. Trabajo desde la sensibilidad visual hasta la implementación para que cada producto se sienta bien pensado, bien construido y listo para crecer.
          </p>

          <div className="mb-12 flex flex-col gap-4 animate-slide-up sm:flex-row" style={{ animationDelay: '0.2s' }}>
            <a href="#proyectos" className="button-primary gap-2">
              Ver selección de trabajo
              <ArrowUpRight size={18} />
            </a>
            <a href="#contacto" className="button-secondary">
              Iniciar conversación
            </a>
          </div>

          <div className="grid gap-4 animate-slide-up text-sm text-[color:var(--muted)] sm:grid-cols-3" style={{ animationDelay: '0.25s' }}>
            <div className="panel px-5 py-4">
              <p className="mb-2 text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">Qué hago</p>
              <p className="text-[color:var(--foreground)]">Interfaces web con presencia, orden visual y foco en experiencia.</p>
            </div>
            <div className="panel px-5 py-4">
              <p className="mb-2 text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">Cómo trabajo</p>
              <p className="text-[color:var(--foreground)]">Con criterio de producto, detalle técnico y una ejecución cuidada.</p>
            </div>
            <div className="panel px-5 py-4">
              <p className="mb-2 text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">Ahora mismo</p>
              <p className="text-[color:var(--foreground)]">Abierto a oportunidades frontend y proyectos con ambición visual.</p>
            </div>
          </div>
        </div>

        <div className="animate-slide-up" style={{ animationDelay: '0.18s' }}>
          <div className="panel glow-ring relative overflow-hidden p-6 sm:p-8">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[color:var(--accent)] to-transparent opacity-40" />

            <div className="mb-8 border-b border-[color:var(--line)] pb-6">
              <p className="mb-3 text-xs uppercase tracking-[0.35em] text-[color:var(--muted)]">Selected Profile</p>
              <h2 className="text-4xl font-semibold text-[color:var(--foreground)]">Frontend / UI Craft</h2>
              <p className="mt-4 text-sm leading-7 text-[color:var(--muted)]">
                Desarrollo experiencias digitales con una mirada orientada a producto: identidad visual, claridad de uso y una base técnica que soporte crecimiento.
              </p>
            </div>

            <div className="space-y-4">
              {signaturePoints.map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-between rounded-2xl border border-[color:var(--line)] bg-[color:var(--surface)] px-4 py-4"
                >
                  <span className="text-[color:var(--foreground)]">{item}</span>
                  <span className="h-2 w-2 rounded-full bg-[color:var(--accent)]" />
                </div>
              ))}
            </div>

            <div className="mt-8 grid gap-4 border-t border-[color:var(--line)] pt-6 sm:grid-cols-2">
              <div>
                <p className="mb-2 text-xs uppercase tracking-[0.32em] text-[color:var(--muted)]">Especialidad</p>
                <p className="text-sm leading-7 text-[color:var(--foreground)]">Landing pages, portfolios, dashboards y productos web con identidad.</p>
              </div>
              <div>
                <p className="mb-2 text-xs uppercase tracking-[0.32em] text-[color:var(--muted)]">Stack</p>
                <p className="text-sm leading-7 text-[color:var(--foreground)]">React, Next.js, TypeScript, Tailwind CSS y UI systems.</p>
              </div>
            </div>

            <div className="mt-8 border-t border-[color:var(--line)] pt-6">
              <p className="mb-4 text-xs uppercase tracking-[0.32em] text-[color:var(--muted)]">Enlaces</p>
              <div className="flex items-center gap-3">
                {socialLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[color:var(--line)] bg-[color:var(--surface)] text-[color:var(--foreground)] transition hover:-translate-y-1 hover:bg-[color:var(--surface-strong)]"
                    aria-label={item.label}
                  >
                    <item.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#sobre-mi"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-[color:var(--muted)] transition-colors hover:text-[color:var(--foreground)]"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  )
}
