import type { Metadata, Viewport } from 'next'
import Navbar from '@/components/Navbar'
import './globals.css'
import Head from 'next/head'
import Script from 'next/script'

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
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_TRACKING_ID}`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body>
        <Navbar />
        <div>{children}</div>
      </body>
    </html>
  )
}
