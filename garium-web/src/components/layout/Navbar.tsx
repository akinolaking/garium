'use client'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import { useScrolled } from '@/hooks/useScrolled'
import { useMobileMenu } from '@/hooks/useMobileMenu'
import { GariumLogo } from '@/components/ui/GariumLogo'
import { Button } from '@/components/ui/Button'
import { CurrencySwitcher } from '@/components/ui/CurrencySwitcher'
import { MobileMenu } from './MobileMenu'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { href: '/services', label: 'Services' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export function Navbar() {
  const scrolled = useScrolled(1)
  const { isOpen, open, close } = useMobileMenu()

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-[200] w-full transition-all duration-[350ms]',
          scrolled
            ? 'bg-white border-b border-[#D1D9E8] shadow-[0_1px_3px_0_rgba(8,28,82,0.08)]'
            : 'bg-transparent'
        )}
      >
        <nav aria-label="Main navigation">
          <div className="container-garium">
            <div className="flex items-center justify-between h-16">
              <Link href="/" aria-label="Garium home">
                <GariumLogo
                  size="md"
                  color={scrolled ? '#081c52' : '#F5F7FA'}
                  animate={false}
                />
              </Link>

              <div className="hidden md:flex items-center gap-1">
                {NAV_LINKS.map(link => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      'px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200',
                      scrolled
                        ? 'text-black hover:text-[#072c8f] hover:bg-[#eef1f9]'
                        : 'text-white/90 hover:text-white hover:bg-white/10'
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="hidden md:flex items-center gap-3">
                <CurrencySwitcher light={!scrolled} />
                <Link href="/contact">
                  <Button
                    variant={scrolled ? 'primary' : 'outline-light'}
                    size="sm"
                    aria-label="Book a consultation"
                  >
                    Book a consultation
                  </Button>
                </Link>
              </div>

              <button
                onClick={open}
                aria-label="Open menu"
                className={cn(
                  'md:hidden p-2 rounded-lg transition-colors',
                  scrolled ? 'text-[#081c52] hover:bg-[#eef1f9]' : 'text-white hover:bg-white/10'
                )}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </nav>
      </header>

      <MobileMenu isOpen={isOpen} onClose={close} />
    </>
  )
}
