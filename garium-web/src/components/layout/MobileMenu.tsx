'use client'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { X } from 'lucide-react'
import { GariumLogo } from '@/components/ui/GariumLogo'
import { Button } from '@/components/ui/Button'

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

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/40 z-[300]"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed top-0 right-0 h-full w-[280px] bg-white z-[400] shadow-xl flex flex-col"
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#D1D9E8]">
              <GariumLogo size="md" color="#081c52" />
              <button
                onClick={onClose}
                aria-label="Close menu"
                className="p-2 rounded-lg hover:bg-[#eef1f9] transition-colors"
              >
                <X className="w-5 h-5 text-[#081c52]" />
              </button>
            </div>

            <nav className="flex-1 px-6 py-8 space-y-2">
              {NAV_LINKS.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className="block px-3 py-3 rounded-lg text-base font-medium text-black hover:bg-[#eef1f9] hover:text-[#072c8f] transition-colors duration-150"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="px-6 pb-8">
              <Link href="/contact" onClick={onClose}>
                <Button variant="primary" size="md" className="w-full" aria-label="Book a consultation">
                  Book a consultation
                </Button>
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
