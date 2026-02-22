'use client'

import { Code, Palette, Zap } from 'lucide-react'

const highlights = [
  {
    icon: Code,
    title: 'Código Limpio',
    description: 'Escribo código mantenible, escalable y bien documentado.',
  },
  {
    icon: Palette,
    title: 'Diseño Moderno',
    description: 'Creo interfaces atractivas con atención al detalle.',
  },
  {
    icon: Zap,
    title: 'Rendimiento',
    description: 'Optimizo para velocidad y mejor experiencia de usuario.',
  },
]

export default function About() {
  return (
    <section id="sobre-mi" className="py-20 bg-slate-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Sobre <span className="text-gradient">Mí</span>
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image/Avatar placeholder */}
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto rounded-2xl bg-gradient-to-br from-primary-500/20 to-primary-700/20 p-1">
              <div className="w-full h-full rounded-2xl bg-slate-800 flex items-center justify-center">
                {/* Puedes reemplazar esto con una imagen real */}
                <div className="text-8xl">👨‍💻</div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-500/10 rounded-full blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary-700/10 rounded-full blur-xl" />
          </div>

          {/* Content */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              ¡Hola! Soy Sebastian
            </h3>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Soy un desarrollador frontend apasionado por crear experiencias web 
              excepcionales. Me especializo en construir aplicaciones modernas usando 
              <span className="text-primary-400"> React</span>,
              <span className="text-primary-400"> Next.js</span> y
              <span className="text-primary-400"> Tailwind CSS</span>.
            </p>
            <p className="text-slate-300 mb-8 leading-relaxed">
              Me encanta aprender nuevas tecnologías y busco constantemente mejorar 
              mis habilidades. Estoy activamente buscando oportunidades donde pueda 
              contribuir a proyectos desafiantes y crecer como profesional.
            </p>

            {/* Highlights */}
            <div className="grid sm:grid-cols-3 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-slate-700/50 hover:bg-slate-700 transition-colors group"
                >
                  <item.icon className="w-8 h-8 text-primary-500 mb-3 group-hover:scale-110 transition-transform" />
                  <h4 className="font-medium mb-1">{item.title}</h4>
                  <p className="text-sm text-slate-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
