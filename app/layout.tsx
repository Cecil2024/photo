import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Connie Ramirez',
  description: 'Photographer London',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  )
}
