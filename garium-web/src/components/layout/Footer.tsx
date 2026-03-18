import Link from 'next/link'
import { GariumLogo } from '@/components/ui/GariumLogo'

const PLATFORM_LINKS = [
  { href: '/services', label: 'Services' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/#how-it-works', label: 'How it works' },
]

const COMPANY_LINKS = [
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/contact', label: 'Book a consultation' },
]

const LEGAL_LINKS = [
  { href: '/privacy-policy', label: 'Privacy policy' },
  { href: '/terms-of-service', label: 'Terms of service' },
  { href: '/cookie-policy', label: 'Cookie policy' },
]

const SOCIAL_LINKS = [
  {
    label: 'X (Twitter)',
    href: 'https://twitter.com/gariumai',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.259 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com/gariumai',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="3.5" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://facebook.com/gariumai',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/company/gariumai',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
]

export function Footer() {
  return (
    <footer className="bg-[#02081c] text-[#F5F7FA]">
      <div className="container-garium py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <GariumLogo size="md" color="#F5F7FA" className="mb-4" />
            <p className="text-sm text-[#a1b1df] leading-relaxed mb-5">
              Private AI infrastructure for organisations that believe their data belongs to them.
            </p>
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Garium on ${s.label}`}
                  className="text-[#728acf] hover:text-[#a1b1df] transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[#728acf] mb-4">Platform</h3>
            <ul className="space-y-2.5">
              {PLATFORM_LINKS.map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-[#d0d8ef] hover:text-white transition-colors duration-150">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[#728acf] mb-4">Company</h3>
            <ul className="space-y-2.5">
              {COMPANY_LINKS.map((l, i) => (
                <li key={i}>
                  <Link href={l.href} className="text-sm text-[#d0d8ef] hover:text-white transition-colors duration-150">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[#728acf] mb-4">Legal</h3>
            <ul className="space-y-2.5">
              {LEGAL_LINKS.map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-[#d0d8ef] hover:text-white transition-colors duration-150">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#1e2f5e]">
          <div className="flex flex-col lg:flex-row gap-6 justify-between">
            <div className="space-y-1">
              <p className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>
                &copy; 2026 Garium. Conqolx Technologies Limited. All Rights Reserved.
              </p>
              <p className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>
                Registered in the United Kingdom (RC: 14565201) and Nigeria (RC: 1775966).
              </p>
              <p className="text-xs mt-2" style={{ color: 'rgba(255,255,255,0.35)' }}>
                <a href="mailto:hello@garium.co" className="hover:text-white/60 transition-colors">
                  Send us a mail
                </a>
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>
              <div>
                <p className="font-medium mb-1" style={{ color: 'rgba(255,255,255,0.35)' }}>Lagos, Nigeria</p>
                <p>VeniaHub 8, The Providence St, Lekki Phase 1, Lagos 100252</p>
                <p>Tel: +234 (0) 201 330 9154</p>
              </div>
              <div>
                <p className="font-medium mb-1" style={{ color: 'rgba(255,255,255,0.35)' }}>Manchester, United Kingdom</p>
                <p>Bartle House, 9 Oxford Court, Manchester, M2 3WQ</p>
                <p>Tel: +44 (0) 333 880 7775</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
