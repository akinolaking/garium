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

export function Footer() {
  return (
    <footer className="bg-[#02081c] text-[#F5F7FA]">
      <div className="container-garium py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <GariumLogo size="md" color="#F5F7FA" className="mb-4" />
            <p className="text-sm text-[#a1b1df] leading-relaxed mb-3">
              Private AI infrastructure for organisations that believe their data belongs to them.
            </p>
            <p className="text-xs text-[#728acf]">Lagos, Nigeria + Manchester, United Kingdom</p>
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

        <div className="mt-12 pt-8 border-t border-[#1e2f5e] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#728acf]">
            &copy; 2026 Garium. Conqolx Technologies Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
