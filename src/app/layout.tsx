import NavShell from '@/components/navshell'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jared Velasquez',
  description: 'Personal website for Jared Velasquez',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"></link>
      </head>
      <body className={inter.className}>
        <NavShell>{children}</NavShell>
      </body>
    </html>
  )
}
