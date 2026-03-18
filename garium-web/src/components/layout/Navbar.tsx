'use client'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import { useMobileMenu } from '@/hooks/useMobileMenu'
import { GariumLogo } from '@/components/ui/GariumLogo'
import { Button } from '@/components/ui/Button'
import { CurrencySwitcher } from '@/components/ui/CurrencySwitcher'
import { MobileMenu } from './MobileMenu'

const NAV_LINKS = [
  { href: '/services', label: 'Services' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export function Navbar() {
  const { isOpen, open, close } = useMobileMenu()

  return (
    <>
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 50,
          width: '100%',
          background: '#ffffff',
          borderBottom: '1px solid #D1D9E8',
          boxShadow: '0 1px 3px 0 rgba(8,28,82,0.08)',
        }}
      >
        <nav aria-label="Main navigation">
          <div className="container-garium">
            <div className="flex items-center justify-between h-16">
              <Link href="/" aria-label="Garium home">
                <GariumLogo size="md" color="#081c52" animate={false} />
              </Link>

              <div className="hidden md:flex items-center gap-1">
                {NAV_LINKS.map(link => (
                  <Link
                    key={link.href}
                    href={link.href}
                    style={{
                      padding: '8px 16px',
                      borderRadius: '8px',
                      fontSize: '0.875rem',
                      fontWeight: 500,
                      color: '#072c8f',
                      textDecoration: 'none',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.background = '#f3f4f6')}
                    onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="hidden md:flex items-center gap-3">
                <CurrencySwitcher />
                <Link href="/contact">
                  <Button variant="primary" size="sm" aria-label="Book a consultation">
                    Book a consultation
                  </Button>
                </Link>
              </div>

              <button
                onClick={open}
                aria-label="Open menu"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '8px',
                  borderRadius: '8px',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  color: '#081c52',
                }}
                className="md:hidden"
                onMouseEnter={e => (e.currentTarget.style.background = '#f3f4f6')}
                onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
              >
                <Menu style={{ width: '24px', height: '24px' }} />
              </button>
            </div>
          </div>
        </nav>
      </header>

      <MobileMenu isOpen={isOpen} onClose={close} />
    </>
  )
}
