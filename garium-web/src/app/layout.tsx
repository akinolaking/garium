import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Analytics } from '@vercel/analytics/react'

export const metadata: Metadata = {
  title: {
    default: 'Garium — Private AI Infrastructure for Your Organisation',
    template: '%s | Garium',
  },
  description: 'Garium deploys and manages a fully private AI platform on dedicated infrastructure. Your data never leaves your environment. Flat monthly fee. Unlimited users.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://garium.com'),
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://garium.com',
    siteName: 'Garium',
    title: 'Garium — Private AI Infrastructure for Your Organisation',
    description: 'Your AI. Your data. No exceptions.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Garium — Private AI Infrastructure' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@gariumai',
    creator: '@gariumai',
  },
  robots: { index: true, follow: true },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif', backgroundColor: '#F5F7FA', color: '#000000' }}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
