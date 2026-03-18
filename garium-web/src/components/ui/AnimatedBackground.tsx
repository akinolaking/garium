'use client'
import { useEffect, useRef } from 'react'

type Variant = 'curves' | 'grid' | 'dots' | 'rings' | 'particles'
type Position = 'left' | 'right' | 'center' | 'both'

interface AnimatedBackgroundProps {
  variant?: Variant
  position?: Position
  opacity?: number
}

export function AnimatedBackground({
  variant = 'curves',
  position = 'right',
  opacity = 0.35,
}: AnimatedBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (variant !== 'particles') return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    const particles: { x: number; y: number; vx: number; vy: number; r: number }[] = []
    for (let i = 0; i < 40; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 2 + 1,
      })
    }

    let frame: number
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(7,44,143,${opacity * 0.4})`
        ctx.fill()
      })
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 100) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(7,44,143,${opacity * 0.15 * (1 - dist / 100)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }
      frame = requestAnimationFrame(draw)
    }
    draw()
    return () => cancelAnimationFrame(frame)
  }, [variant, opacity])

  if (variant === 'particles') {
    return (
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
        }}
      />
    )
  }

  if (variant === 'curves') {
    const count = 7
    const xBase = position === 'right' ? 110 : position === 'left' ? -10 : 50
    return (
      <svg
        aria-hidden="true"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', opacity }}
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
      >
        <style>{`
          @keyframes arc-spin { from { stroke-dashoffset: 0; } to { stroke-dashoffset: -200; } }
          @keyframes arc-spin-r { from { stroke-dashoffset: 0; } to { stroke-dashoffset: 200; } }
        `}</style>
        {Array.from({ length: count }, (_, i) => (
          <circle
            key={i}
            cx={xBase}
            cy="50"
            r={15 + i * 12}
            fill="none"
            stroke={`rgba(7,44,143,${0.12 - i * 0.013})`}
            strokeWidth="0.3"
            strokeDasharray={`3 ${4 + i}`}
            style={{
              animation: `${i % 2 === 0 ? 'arc-spin' : 'arc-spin-r'} ${20 + i * 5}s linear infinite`,
              animationDelay: `${i * -3}s`,
            }}
          />
        ))}
      </svg>
    )
  }

  if (variant === 'grid') {
    return (
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          backgroundImage: `
            linear-gradient(rgba(8,28,82,${opacity * 0.07}) 1px, transparent 1px),
            linear-gradient(90deg, rgba(8,28,82,${opacity * 0.07}) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />
    )
  }

  if (variant === 'dots') {
    return (
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          backgroundImage: `radial-gradient(circle, rgba(8,28,82,${opacity * 0.3}) 1px, transparent 1px)`,
          backgroundSize: '28px 28px',
        }}
      />
    )
  }

  if (variant === 'rings') {
    return (
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        <style>{`
          @keyframes pulse-ring-ab {
            0%, 100% { opacity: 0.5; transform: translate(-50%,-50%) scale(1); }
            50% { opacity: 0.2; transform: translate(-50%,-50%) scale(1.05); }
          }
        `}</style>
        {[180, 300, 420, 540].map((s, i) => (
          <div key={i} style={{
            position: 'absolute', top: '50%', left: '50%',
            width: s, height: s, borderRadius: '50%',
            border: `1px solid rgba(8,28,82,${opacity * 0.12 - i * 0.02})`,
            animation: `pulse-ring-ab ${3 + i}s ease-in-out infinite`,
            animationDelay: `${i * 0.5}s`,
          }} />
        ))}
      </div>
    )
  }

  return null
}
