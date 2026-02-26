import type { Metadata, Viewport } from 'next'
import { Inter, Oswald } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const _oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
})

export const metadata: Metadata = {
  title: 'J-Car Centro Automotivo | Oficina Mecanica no Rio de Janeiro',
  description:
    'J-Car Centro Automotivo - Especialistas em manutencao preventiva e corretiva, suspensao, eletrica, ar-condicionado e reboque 24h. Atendimento de qualidade no Rio de Janeiro.',
  keywords:
    'oficina mecanica, manutencao preventiva, manutencao corretiva, suspensao, eletrica automotiva, ar condicionado automotivo, reboque 24h, Rio de Janeiro',
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a0f',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${_inter.variable} ${_oswald.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
