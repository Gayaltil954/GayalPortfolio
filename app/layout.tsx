import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f1a2e' },
  ],
  userScalable: true,
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'Portfolio - Professional Designer & Developer',
  description: 'Explore my latest projects, skills, and experience in design and development.',
  generator: 'v0.app',
  keywords: ['portfolio', 'designer', 'developer', 'projects', 'creative'],
  authors: [{ name: 'Portfolio Owner' }],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.add('dark')
              } else {
                document.documentElement.classList.remove('dark')
              }
            `,
          }}
        />
      </head>
      <body className={`${inter.className} font-sans antialiased relative overflow-x-hidden`}>
        {/* Glassmorphism background pattern */}
        <div className="fixed inset-0 -z-50 bg-gradient-to-br from-background via-background to-background">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-blue-500/10 via-purple-500/5 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-cyan-500/10 via-blue-500/5 to-transparent rounded-full blur-3xl" />
        </div>
        {children}
      </body>
    </html>
  )
}
