import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

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
    <html lang="es">
      <body className={`${inter.className} bg-slate-900 text-white`}>
        {children}
      </body>
    </html>
  )
}
