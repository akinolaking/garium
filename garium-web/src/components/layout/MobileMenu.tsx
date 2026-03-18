'use client'
import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { GariumLogo } from '@/components/ui/GariumLogo'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

const NAV_LINKS = [
  { href: '/services', label: 'Services' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

const SOCIAL_LINKS = [
  { label: 'X',  href: 'https://x.com/gariumai' },
  { label: 'IG', href: 'https://instagram.com/gariumai' },
  { label: 'FB', href: 'https://facebook.com/gariumai' },
  { label: 'LI', href: 'https://linkedin.com/company/gariumai' },
]

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (!isOpen) return
    const handleKeyDown = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 z-[300]"
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed top-0 right-0 h-full w-[300px] z-[400] shadow-xl flex flex-col overflow-y-auto"
            style={{ background: 'linear-gradient(160deg, #081c52 0%, #040e2e 100%)' }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5">
              <GariumLogo size="md" color="#F5F7FA" />
              <button
                onClick={onClose}
                aria-label="Close menu"
                className="p-2 rounded-lg transition-colors"
                style={{ color: 'rgba(255,255,255,0.6)' }}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Nav links */}
            <nav className="px-6 pt-2 pb-6">
              {NAV_LINKS.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  style={{
                    display: 'block',
                    padding: '14px 0',
                    fontSize: '1.125rem',
                    fontWeight: 400,
                    color: '#ffffff',
                    textDecoration: 'none',
                    borderBottom: '1px solid rgba(255,255,255,0.07)',
                  }}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA button — between nav and contact */}
            <div className="px-6 pb-6">
              <a
                href="/contact"
                onClick={onClose}
                style={{
                  display: 'block',
                  background: '#ffffff',
                  color: '#081c52',
                  textAlign: 'center',
                  padding: '14px 24px',
                  borderRadius: '999px',
                  fontSize: '0.9375rem',
                  fontWeight: 500,
                  textDecoration: 'none',
                }}
              >
                Book a consultation
              </a>
            </div>

            {/* Contact info */}
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', marginTop: 'auto', padding: '24px', paddingBottom: '0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <a href="mailto:hello@garium.co" style={{ fontSize: '0.9375rem', color: 'rgba(255,255,255,0.65)', textDecoration: 'none' }}>
                hello@garium.co
              </a>
              <a href="tel:+443338807775" style={{ fontSize: '0.9375rem', color: 'rgba(255,255,255,0.65)', textDecoration: 'none' }}>
                +44 (0) 333 880 7775
              </a>
              <a href="tel:+2342013309154" style={{ fontSize: '0.9375rem', color: 'rgba(255,255,255,0.65)', textDecoration: 'none' }}>
                +234 (0)201 330 9154
              </a>
            </div>

            {/* Social icons */}
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', margin: '24px 24px 0', paddingTop: '20px', paddingBottom: '32px' }}>
              <p style={{ fontSize: '0.6875rem', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '14px' }}>
                Follow us
              </p>
              <div style={{ display: 'flex', gap: '10px' }}>
                {SOCIAL_LINKS.map(s => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Garium on ${s.label}`}
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '1px solid rgba(255,255,255,0.2)',
                      fontSize: '0.6875rem',
                      fontWeight: 600,
                      color: 'rgba(255,255,255,0.6)',
                      textDecoration: 'none',
                    }}
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
