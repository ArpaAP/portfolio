import type { Metadata, Viewport } from 'next'
import Navbar from '@/components/Navbar'
import './globals.css'
import { GoogleAnalytics } from '@next/third-parties/google'

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
      <body>
        {process.env.GA_TRACKING_ID && (
          <GoogleAnalytics gaId={process.env.GA_TRACKING_ID} />
        )}
        <Navbar />
        <div>{children}</div>
      </body>
    </html>
  )
}
