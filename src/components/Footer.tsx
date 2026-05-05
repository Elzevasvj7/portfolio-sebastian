import { Github, Linkedin, Mail, Heart } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-[color:var(--line)] py-8">
      <div className="section-shell">
        <div className="flex flex-col items-center justify-between gap-4 rounded-[28px] border border-[color:var(--line)] bg-[color:var(--surface)] px-6 py-5 md:flex-row">
          <p className="flex items-center gap-1 text-sm text-[color:var(--muted)]">
            © {currentYear} Sebastian Camero. Hecho con{' '}
            <Heart size={16} className="fill-red-500 text-red-500" />
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Elzevasvj7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[color:var(--muted)] transition-colors hover:text-[color:var(--foreground)]"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/sebastian-camero-silva-770252249/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[color:var(--muted)] transition-colors hover:text-[color:var(--foreground)]"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:sebastiancamero77@gmail.com"
              className="text-[color:var(--muted)] transition-colors hover:text-[color:var(--foreground)]"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>

          <a
            href="#inicio"
            className="text-sm text-[color:var(--muted)] transition-colors hover:text-[color:var(--accent)]"
          >
            Volver arriba ↑
          </a>
        </div>
      </div>
    </footer>
  )
}
