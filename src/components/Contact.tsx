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
    value: '/in/sebastian-camero-silva',
    href: 'https://linkedin.com/in/sebastian-camero-silva/',
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

    await new Promise(resolve => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormState({ name: '', email: '', message: '' })

    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contacto" className="py-24 sm:py-28">
      <div className="section-shell">
        <div className="mb-16 max-w-3xl">
          <div className="section-label">Contacto</div>
          <h2 className="section-title mb-5">
            Si estás construyendo algo bueno y quieres que el frontend esté a la altura, <span className="text-gradient">conversemos</span>.
          </h2>
          <p className="section-copy">
            Estoy abierto a nuevas oportunidades y a colaboraciones donde el detalle visual, la claridad de producto y la calidad de implementación realmente importen.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-10">
          <div>
            <div className="panel p-6 sm:p-8">
              <h3 className="mb-5 text-3xl font-semibold text-[color:var(--foreground)]">
                Trabajemos algo sólido.
              </h3>
              <p className="mb-8 leading-8 text-[color:var(--foreground)]">
                Si tienes una vacante, una colaboración o un producto que necesite una capa frontend más cuidada, puedes escribirme por cualquiera de estos canales.
              </p>

              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-[24px] border border-[color:var(--line)] bg-[color:var(--surface)] p-4 transition-colors hover:bg-[color:var(--surface-strong)]"
                  >
                    <div className="flex items-center gap-4">
                      <div className="rounded-2xl bg-[color:var(--surface-strong)] p-3 text-[color:var(--accent)]">
                        <item.icon size={22} />
                      </div>
                      <div>
                        <p className="mb-1 text-xs uppercase tracking-[0.25em] text-[color:var(--muted)]">{item.label}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            target={item.href.startsWith('mailto') ? undefined : '_blank'}
                            rel="noopener noreferrer"
                            className="font-medium text-[color:var(--foreground)] transition-colors hover:text-[color:var(--accent)]"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="font-medium text-[color:var(--foreground)]">{item.value}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="panel p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-[color:var(--foreground)]">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="input-field rounded-2xl px-4 py-3"
                    placeholder="Cómo te llamas"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-[color:var(--foreground)]">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="input-field rounded-2xl px-4 py-3"
                    placeholder="tu@correo.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-[color:var(--foreground)]">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="input-field resize-none rounded-[24px] px-4 py-4"
                  placeholder="Cuéntame qué estás construyendo o qué tipo de perfil necesitas..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="button-primary flex w-full gap-2 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? (
                  <>
                    <div className="h-5 w-5 animate-spin rounded-full border-2 border-[color:var(--foreground)]/20 border-t-[color:var(--foreground)]" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Enviar mensaje
                  </>
                )}
              </button>

              {isSubmitted && (
                <div className="status-success animate-fade-in flex items-center gap-2">
                  <CheckCircle size={20} />
                  <span>Mensaje enviado. Te responderé pronto.</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
