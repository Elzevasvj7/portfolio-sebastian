'use client'

import { Code, Palette, Zap } from 'lucide-react'
import Image from 'next/image'

const highlights = [
  {
    icon: Code,
    title: 'Código limpio',
    description: 'Escribo interfaces mantenibles, escalables y fáciles de evolucionar.',
  },
  {
    icon: Palette,
    title: 'Diseño con criterio',
    description: 'Busco que lo visual no sea adorno, sino parte del valor del producto.',
  },
  {
    icon: Zap,
    title: 'Rendimiento real',
    description: 'Optimizo para velocidad, claridad y una experiencia más fluida.',
  },
]

export default function About() {
  return (
    <section id="sobre-mi" className="py-24 sm:py-28">
      <div className="section-shell">
        <div className="mb-16 max-w-3xl">
          <div className="section-label">Sobre mí</div>
          <h2 className="section-title mb-6">
            Me interesa construir productos que se sientan <span className="text-gradient">claros, elegantes y bien pensados</span>.
          </h2>
          <p className="section-copy">
            No me atrae solo que una interfaz funcione. Me importa cómo se percibe, cómo guía al usuario y qué sensación deja cuando todo está en su lugar.
          </p>
        </div>

        <div className="grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          <div className="relative">
            <div className="panel relative aspect-square max-w-md overflow-hidden p-6 sm:p-8">
              <div className="absolute left-6 top-6 rounded-full border border-[color:var(--line)] bg-[color:var(--surface)] px-3 py-1 text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
                frontend identity
              </div>
              <div className="flex h-full items-center justify-center rounded-[24px] border border-[color:var(--line)] bg-[linear-gradient(180deg,color-mix(in_srgb,var(--background-elevated)_88%,white_12%),color-mix(in_srgb,var(--background)_82%,transparent))]">
                <Image src="/sebastian-portrait.jpeg" alt="Identity" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
              </div>
            </div>
            <div className="absolute -bottom-5 -left-5 h-24 w-24 rounded-full bg-[color:var(--hero-orb-1)] blur-2xl" />
            <div className="absolute -right-5 -top-5 h-24 w-24 rounded-full bg-[color:var(--hero-orb-2)] blur-2xl" />
          </div>

          <div>
            <h3 className="mb-4 text-3xl font-semibold text-[color:var(--foreground)] sm:text-4xl">
              Hola, soy Sebastian.
            </h3>
            <p className="mb-6 text-base leading-8 text-[color:var(--foreground)] sm:text-lg">
              Soy desarrollador frontend y disfruto convertir ideas en experiencias modernas usando
              <span className="text-[color:var(--accent)]"> React</span>,
              <span className="text-[color:var(--accent)]"> Next.js</span> y
              <span className="text-[color:var(--accent)]"> Tailwind CSS</span>.
            </p>
            <p className="mb-8 text-base leading-8 text-[color:var(--muted)] sm:text-lg">
              Me gusta trabajar donde diseño y desarrollo se encuentran de verdad: interfaces sobrias, sistemas consistentes y código que aguante el paso del tiempo. Estoy buscando oportunidades donde pueda aportar esa combinación y seguir creciendo con proyectos exigentes.
            </p>

            <div className="grid gap-4 sm:grid-cols-3">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="panel group p-5 transition-transform hover:-translate-y-1"
                >
                  <item.icon className="mb-4 h-8 w-8 text-[color:var(--accent)] transition-transform group-hover:scale-110" />
                  <h4 className="mb-2 text-lg font-semibold text-[color:var(--foreground)]">{item.title}</h4>
                  <p className="text-sm leading-6 text-[color:var(--muted)]">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
