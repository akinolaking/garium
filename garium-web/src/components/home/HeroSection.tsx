'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { CrystalIcon } from '@/components/ui/CrystalIcon'

const STATS = [
  { label: 'Response time', value: '< 3 sec', color: '#ffffff' },
  { label: 'Data leaves server', value: 'Never', color: '#4ade80' },
  { label: 'Setup time', value: '24–72 hours', color: '#ffffff' },
  { label: 'Uptime SLA', value: '99.9%', color: '#ffffff' },
  { label: 'Supported models', value: '10+', color: '#ffffff' },
  { label: 'Active deployments', value: 'Growing', color: '#93c5fd' },
]

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

            <h1 style={{ fontWeight: 300, margin: 0, padding: 0 }}>
              {['Your AI.', 'Your data.', 'No exceptions.'].map((line) => (
                <span
                  key={line}
                  style={{
                    display: 'block',
                    whiteSpace: 'nowrap',
                    fontSize: 'clamp(2rem, 4.8vw, 4rem)',
                    fontWeight: 300,
                    lineHeight: 1.06,
                    letterSpacing: '-0.03em',
                    color: '#ffffff',
                  }}
                >
                  {line}
                </span>
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

          </div>

          <div className="hidden lg:flex items-center justify-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              aria-label="Garium crystal icon"
              role="img"
            >
              <CrystalIcon size={200} color="rgba(255,255,255,0.18)" animate={true} />
            </motion.div>

            {/* Hero stats widget — 6 rows, CSS-animated */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="absolute -bottom-4 -right-4 rounded-2xl p-5 shadow-xl glass-highlight"
              style={{ width: '280px' }}
              aria-label="Platform statistics"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" aria-hidden />
                <span className="text-white/70 text-xs font-medium">Live infrastructure</span>
              </div>
              <div className="space-y-2.5">
                {STATS.map((stat, i) => (
                  <div
                    key={stat.label}
                    className="flex justify-between items-center"
                    style={{
                      animation: 'heroStatFadeIn 0.4s ease forwards',
                      animationDelay: `${1.0 + i * 0.1}s`,
                      opacity: 0,
                    }}
                  >
                    <span className="text-white/50 text-xs">{stat.label}</span>
                    <span className="text-xs font-semibold" style={{ color: stat.color }}>{stat.value}</span>
                  </div>
                ))}
              </div>
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
