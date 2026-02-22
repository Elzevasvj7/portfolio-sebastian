import { Github, Linkedin, Mail, Heart } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 bg-slate-900 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-slate-400 text-sm flex items-center gap-1">
            © {currentYear} Sebastian Camero. Hecho con{' '}
            <Heart size={16} className="text-red-500 fill-red-500" />
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Elzevasvj7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/sebastian-camero-silva-770252249/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:sebastiancamero77@gmail.com"
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Back to top */}
          <a
            href="#inicio"
            className="text-slate-400 hover:text-primary-400 transition-colors text-sm"
          >
            Volver arriba ↑
          </a>
        </div>
      </div>
    </footer>
  )
}
