import type { Metadata } from 'next'
import './globals.css'
import { AnnouncementBar } from '@/components/layout/AnnouncementBar'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { CookieBanner } from '@/components/ui/CookieBanner'
import { Analytics } from '@vercel/analytics/react'

export const metadata: Metadata = {
  title: {
    default: 'Garium — Private AI Infrastructure for Your Organisation',
    template: '%s | Garium',
  },
  description: 'Garium deploys and manages a fully private AI platform on dedicated infrastructure. Your data never leaves your environment. Flat monthly fee. Unlimited users.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://garium.co'),
  alternates: { canonical: 'https://garium.co' },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://garium.co',
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

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Garium',
  legalName: 'Conqolx Technologies Company',
  url: 'https://garium.co',
  logo: 'https://garium.co/garium-logo.svg',
  description: 'Private AI infrastructure for organisations that believe their data belongs to them.',
  address: [
    { '@type': 'PostalAddress', addressLocality: 'Manchester', addressCountry: 'GB' },
    { '@type': 'PostalAddress', addressLocality: 'Lagos', addressCountry: 'NG' },
  ],
  sameAs: ['https://linkedin.com/company/gariumai', 'https://twitter.com/gariumai'],
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'hello@garium.co',
    contactType: 'customer service',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="antialiased" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif', backgroundColor: '#F5F7FA', color: '#000000' }}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[600] focus:bg-[#072c8f] focus:text-white focus:px-4 focus:py-2 focus:rounded-md focus:text-sm focus:font-semibold"
        >
          Skip to main content
        </a>
        <AnnouncementBar />
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  )
}
