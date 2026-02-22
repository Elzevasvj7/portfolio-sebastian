'use client'

import { useState } from 'react'
import { Send, Mail, MapPin, Linkedin, Github, CheckCircle } from 'lucide-react'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'sebastiancamero77@gmail.com',
    href: 'mailto:sebastiancamero77@gmail.com',
  },
  {
    icon: MapPin,
    label: 'Ubicación',
    value: 'Caracas, Venezuela',
    href: null,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: '/in/sebastian-camero-silva-770252249',
    href: 'https://linkedin.com/in/sebastian-camero-silva-770252249',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: '@Elzevasvj7',
    href: 'https://github.com/Elzevasvj7',
  },
]

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simular envío - Reemplazar con tu lógica de envío real
    // Puedes usar servicios como Formspree, EmailJS, o tu propio backend
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormState({ name: '', email: '', message: '' })
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contacto" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-gradient">Contacto</span>
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full mb-4" />
          <p className="text-slate-400 max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente o quieres hablar sobre oportunidades? 
            ¡Me encantaría escucharte!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">
              ¡Hablemos!
            </h3>
            <p className="text-slate-300 mb-8 leading-relaxed">
              Estoy activamente buscando nuevas oportunidades laborales. Si tienes 
              una posición que crees que podría ser un buen match, o simplemente 
              quieres conectar, no dudes en contactarme.
            </p>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/50 hover:bg-slate-800 transition-colors group"
                >
                  <div className="p-3 rounded-lg bg-primary-500/10 text-primary-500 group-hover:bg-primary-500/20 transition-colors">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith('mailto') ? undefined : '_blank'}
                        rel="noopener noreferrer"
                        className="font-medium hover:text-primary-400 transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-800/50 rounded-2xl p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-colors"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-colors"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-colors resize-none"
                  placeholder="Cuéntame sobre tu proyecto u oportunidad..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary-600 hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Enviar Mensaje
                  </>
                )}
              </button>

              {isSubmitted && (
                <div className="flex items-center gap-2 p-4 rounded-lg bg-green-500/10 text-green-400 animate-fade-in">
                  <CheckCircle size={20} />
                  <span>¡Mensaje enviado! Te responderé pronto.</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
