'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { CrystalIcon } from '@/components/ui/CrystalIcon'

const HEADLINE_LINES = ['Your AI.', 'Your data.', 'No exceptions.']

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-crystal" style={{ background: 'linear-gradient(135deg, #000000 0%, #081c52 50%, #072c8f 100%)' }}>
      <div className="container-garium pt-24 pb-20 flex-1 flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="eyebrow-light mb-6 block"
            >
              Private AI Infrastructure
            </motion.p>

            <h1 className="font-semibold text-white mb-6" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', lineHeight: '1.05', letterSpacing: '-0.03em' }}>
              {HEADLINE_LINES.map((line, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="block text-balance"
                >
                  {line}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.56 }}
              className="text-white/90 text-lg leading-relaxed mb-8 max-w-[520px]"
            >
              Garium deploys and manages a fully private AI platform for your organisation.
              Your team uses it for anything. Your data never leaves your environment.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.7 }}
              className="flex flex-wrap gap-3 mb-6"
            >
              <Link href="/pricing">
                <Button variant="primary" size="lg" aria-label="See our plans">
                  See our plans
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline-light" size="lg" aria-label="Book a consultation">
                  Book a consultation
                </Button>
              </Link>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.9 }}
              className="text-white/60 text-sm"
            >
              Trusted by organisations in Nigeria and the United Kingdom.
            </motion.p>
          </div>

          <div className="hidden lg:flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              aria-label="Garium crystal icon"
              role="img"
            >
              <CrystalIcon size={200} color="rgba(255,255,255,0.18)" animate={true} />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Gradient fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#F5F7FA] pointer-events-none" />

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-white/60" aria-hidden />
      </div>
    </section>
  )
}
