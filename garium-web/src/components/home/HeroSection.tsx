'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowDown } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { CrystalIcon } from '@/components/ui/CrystalIcon'
import { SectionLabel } from '@/components/ui/SectionLabel'

const HEADLINE_LINES = ['Your AI.', 'Your data.', 'No exceptions.']

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-hero-dark bg-crystal">
      <div className="container-garium pt-24 pb-16 flex-1 flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <SectionLabel light className="mb-6 block">Private AI Infrastructure</SectionLabel>
            </motion.div>

            <div className="mb-6">
              {HEADLINE_LINES.map((line, i) => (
                <motion.h1
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="text-white font-semibold leading-tight block"
                  style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', letterSpacing: '-0.03em' }}
                >
                  {line}
                </motion.h1>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.56 }}
              className="text-white/70 text-lg leading-relaxed mb-8 max-w-[520px]"
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
                <Button
                  variant="outline"
                  size="lg"
                  aria-label="Book a consultation"
                  className="border-white text-white hover:bg-white hover:text-[#081c52]"
                >
                  Book a consultation
                </Button>
              </Link>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.9 }}
              className="text-white/40 text-sm"
            >
              Trusted by organisations in Nigeria and the United Kingdom.
            </motion.p>
          </div>

          <div className="hidden lg:flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <CrystalIcon size={180} color="rgba(255,255,255,0.15)" animate={true} />
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown className="w-5 h-5 text-white/30" />
        </motion.div>
      </motion.div>
    </section>
  )
}
