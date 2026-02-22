'use client'

import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-700/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Greeting */}
        <p className="text-primary-400 text-lg mb-4 animate-fade-in">
          Hola, soy
        </p>

        {/* Name */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
          Sebastian Camero
        </h1>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl text-slate-300 mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          Desarrollador{' '}
          <span className="text-gradient">Frontend</span>
        </h2>

        {/* Description */}
        <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          Creo experiencias web modernas y atractivas usando React, Next.js y Tailwind CSS. 
          Apasionado por el código limpio y las interfaces intuitivas.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <a
            href="#proyectos"
            className="px-8 py-3 rounded-full bg-primary-600 hover:bg-primary-700 transition-all hover:scale-105 font-medium"
          >
            Ver Proyectos
          </a>
          <a
            href="#contacto"
            className="px-8 py-3 rounded-full border border-slate-600 hover:border-primary-500 transition-all hover:scale-105 font-medium"
          >
            Contactar
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-6 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <a
            href="https://github.com/Elzevasvj7"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors hover:scale-110"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com/in/sebastian-camero-silva-770252249/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:sebastiancamero77@gmail.com"
            className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors hover:scale-110"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#sobre-mi"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  )
}
