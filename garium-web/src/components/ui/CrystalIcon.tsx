'use client'
import { motion } from 'framer-motion'

interface CrystalIconProps {
  size?: number
  color?: string
  animate?: boolean
  className?: string
}

const FRAGMENTS = [
  { points: '46,6 54,6 58,14 50,17 42,14', delay: 0 },
  { points: '62,12 70,18 67,26 59,24 57,16', delay: 0.3 },
  { points: '74,28 80,36 75,44 67,40 67,32', delay: 0.6 },
  { points: '72,50 78,58 72,64 64,60 65,52', delay: 0.9 },
  { points: '60,68 66,76 60,82 52,78 52,70', delay: 1.2 },
  { points: '42,74 50,78 50,86 41,84 38,76', delay: 1.5 },
  { points: '28,64 36,68 34,76 26,74 24,66', delay: 1.8 },
  { points: '20,50 28,52 28,62 20,62 16,54', delay: 2.1 },
  { points: '22,34 30,30 36,38 30,44 22,42', delay: 2.4 },
  { points: '34,16 42,14 44,22 36,26 30,22', delay: 2.7 },
  { points: '46,22 54,20 56,30 48,32 44,26', delay: 0.15 },
  { points: '44,54 52,52 54,62 46,64 40,58', delay: 0.45 },
]

export function CrystalIcon({ size = 48, color = 'currentColor', animate = true, className }: CrystalIconProps) {
  if (!animate) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill={color}
        className={className}
        aria-hidden="true"
      >
        {FRAGMENTS.map((f, i) => (
          <polygon key={i} points={f.points} />
        ))}
      </svg>
    )
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill={color}
      className={className}
      aria-hidden="true"
    >
      {FRAGMENTS.map((f, i) => (
        <motion.polygon
          key={i}
          points={f.points}
          animate={{
            y: [0, -3, 2, 0],
            opacity: [0.9, 0.7, 0.9, 0.85, 0.9],
          }}
          transition={{
            duration: 6,
            delay: f.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </svg>
  )
}
