import type { Metadata } from 'next'
import { Cormorant_Garamond, Manrope } from 'next/font/google'
import './globals.css'

const themeScript = `(() => {
  const storageKey = 'portfolio-theme'
  const root = document.documentElement
  const storedTheme = window.localStorage.getItem(storageKey)
  const systemTheme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
  const theme = storedTheme === 'light' || storedTheme === 'dark' ? storedTheme : systemTheme
  root.dataset.theme = theme
  root.style.colorScheme = theme
})()`

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-body',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Sebastian Camero | Desarrollador Frontend',
  description: 'Portafolio profesional de Sebastian Camero - Desarrollador Frontend especializado en React, Next.js y Tailwind CSS',
  keywords: ['desarrollador frontend', 'react', 'next.js', 'tailwind', 'javascript', 'typescript'],
  authors: [{ name: 'Sebastian Camero' }],
  openGraph: {
    title: 'Sebastian Camero | Desarrollador Frontend',
    description: 'Portafolio profesional de Sebastian Camero',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${manrope.variable} ${cormorant.variable} font-body antialiased`}>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        {children}
      </body>
    </html>
  )
}
