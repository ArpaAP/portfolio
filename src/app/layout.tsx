import type { Metadata, Viewport } from 'next'
import Navbar from '@/components/Navbar'
import './globals.css'
import GoogleAnalytics from '@/components/GoogleAnalytics'

export const metadata: Metadata = {
  title: 'Buyeon Hwang',
  description: 'Welcome to my portfolio!',
}

export const viewport: Viewport = {
  themeColor: '#8b5cf6',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <head>
        <GoogleAnalytics />
      </head>
      <body>
        <Navbar />
        <div>{children}</div>
      </body>
    </html>
  )
}
