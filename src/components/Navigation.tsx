'use client'

import { useEffect, useState } from 'react'
import { Menu, Moon, Sun, X } from 'lucide-react'

const STORAGE_KEY = 'portfolio-theme'

const navLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#sobre-mi', label: 'Sobre Mí' },
  { href: '#habilidades', label: 'Habilidades' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#contacto', label: 'Contacto' },
]

type Theme = 'dark' | 'light'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [theme, setTheme] = useState<Theme>('dark')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    const root = document.documentElement
    const currentTheme = root.dataset.theme === 'light' ? 'light' : 'dark'
    setTheme(currentTheme)

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    const root = document.documentElement

    root.dataset.theme = nextTheme
    root.style.colorScheme = nextTheme
    window.localStorage.setItem(STORAGE_KEY, nextTheme)
    setTheme(nextTheme)
  }

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-3 pt-3 sm:px-6">
      <nav
        className={`relative section-shell rounded-full border transition-all duration-300 ${
          isScrolled
            ? 'glass shadow-[0_12px_40px_rgba(0,0,0,0.18)]'
            : 'border-[color:var(--line)] bg-[color:var(--surface)]'
        }`}
      >
        <div className="flex h-16 items-center justify-between gap-4">
          <a
            href="#inicio"
            className="font-display text-2xl font-semibold tracking-[0.22em] text-[color:var(--foreground)] transition-opacity hover:opacity-80"
          >
            SC
          </a>

          <ul className="hidden items-center gap-1 rounded-full border border-[color:var(--line)] bg-[color:var(--surface)] px-2 py-2 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-full px-4 py-2 text-sm text-[color:var(--muted)] transition-colors hover:bg-[color:var(--surface-strong)] hover:text-[color:var(--foreground)]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-3 md:flex">
            <button
              type="button"
              onClick={toggleTheme}
              className="theme-toggle"
              aria-label={`Cambiar a tema ${theme === 'dark' ? 'claro' : 'oscuro'}`}
            >
              <span className="px-2 text-[0.62rem] text-[color:var(--muted)]">
                {theme === 'dark' ? 'Dark' : 'Light'}
              </span>
              <span className="theme-toggle-thumb">
                {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
              </span>
            </button>

            <a href="#contacto" className="button-primary hidden md:inline-flex">
              Contáctame
            </a>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={toggleTheme}
              className="theme-toggle min-w-0 px-2"
              aria-label={`Cambiar a tema ${theme === 'dark' ? 'claro' : 'oscuro'}`}
            >
              <span className="theme-toggle-thumb h-9 w-9">
                {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
              </span>
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="rounded-full border border-[color:var(--line)] p-2 text-[color:var(--muted)] transition-colors hover:text-[color:var(--foreground)]"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="panel mb-4 mt-2 animate-fade-in p-4 md:hidden absolute left-0 right-0 top-full">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block rounded-2xl px-4 py-3 text-[color:var(--muted)] transition-colors hover:bg-[color:var(--surface-strong)] hover:text-[color:var(--foreground)]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}
