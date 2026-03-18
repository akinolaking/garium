'use client'

interface AnimatedBackgroundProps {
  variant?: 'curves' | 'grid' | 'dots' | 'rings'
  position?: 'left' | 'right' | 'both' | 'center'
  opacity?: number
}

export function AnimatedBackground({
  variant = 'curves',
  position = 'right',
  opacity = 0.35,
}: AnimatedBackgroundProps) {
  if (variant === 'curves') {
    return (
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          overflow: 'hidden',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 800 600"
          preserveAspectRatio="xMidYMid slice"
          style={{
            position: 'absolute',
            inset: 0,
            opacity,
          }}
        >
          {position === 'right' || position === 'both' ? (
            <g
              style={{
                transformOrigin: '600px 300px',
                animation: 'spin-slow 40s linear infinite',
              }}
            >
              <path d="M 600 300 m -180 0 a 180 180 0 1 1 360 0 a 180 180 0 1 1 -360 0" fill="none" stroke="rgba(8,28,82,0.25)" strokeWidth="1" strokeDasharray="8 16" />
              <path d="M 600 300 m -240 0 a 240 240 0 1 1 480 0 a 240 240 0 1 1 -480 0" fill="none" stroke="rgba(7,44,143,0.15)" strokeWidth="1" strokeDasharray="4 20" />
              <path d="M 600 300 m -300 0 a 300 300 0 1 1 600 0 a 300 300 0 1 1 -600 0" fill="none" stroke="rgba(8,28,82,0.1)" strokeWidth="1" strokeDasharray="6 24" />
            </g>
          ) : null}
          {position === 'left' || position === 'both' ? (
            <g
              style={{
                transformOrigin: '200px 300px',
                animation: 'spin-slow-reverse 50s linear infinite',
              }}
            >
              <path d="M 200 300 m -160 0 a 160 160 0 1 1 320 0 a 160 160 0 1 1 -320 0" fill="none" stroke="rgba(8,28,82,0.2)" strokeWidth="1" strokeDasharray="8 16" />
              <path d="M 200 300 m -220 0 a 220 220 0 1 1 440 0 a 220 220 0 1 1 -440 0" fill="none" stroke="rgba(7,44,143,0.12)" strokeWidth="1" strokeDasharray="4 20" />
            </g>
          ) : null}
          {position === 'center' ? (
            <g
              style={{
                transformOrigin: '400px 300px',
                animation: 'spin-slow 45s linear infinite',
              }}
            >
              <path d="M 400 300 m -200 0 a 200 200 0 1 1 400 0 a 200 200 0 1 1 -400 0" fill="none" stroke="rgba(8,28,82,0.2)" strokeWidth="1" strokeDasharray="8 16" />
              <path d="M 400 300 m -280 0 a 280 280 0 1 1 560 0 a 280 280 0 1 1 -560 0" fill="none" stroke="rgba(7,44,143,0.12)" strokeWidth="1" strokeDasharray="4 20" />
            </g>
          ) : null}
        </svg>
      </div>
    )
  }

  if (variant === 'grid') {
    return (
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 0,
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent 59px, rgba(8,28,82,${opacity * 0.2}) 59px, rgba(8,28,82,${opacity * 0.2}) 60px),
            repeating-linear-gradient(90deg, transparent, transparent 59px, rgba(8,28,82,${opacity * 0.2}) 59px, rgba(8,28,82,${opacity * 0.2}) 60px)
          `,
        }}
      />
    )
  }

  if (variant === 'dots') {
    return (
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 0,
          backgroundImage: `radial-gradient(circle, rgba(8,28,82,${opacity * 0.6}) 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />
    )
  }

  if (variant === 'rings') {
    return (
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          overflow: 'hidden',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      >
        {[200, 320, 440, 560].map((size, i) => (
          <div
            key={size}
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              width: size,
              height: size,
              borderRadius: '50%',
              border: `1px solid rgba(8,28,82,${opacity * 0.4})`,
              animation: `pulse-ring ${4 + i * 1.5}s ease-in-out infinite`,
              animationDelay: `${i * 0.6}s`,
            }}
          />
        ))}
      </div>
    )
  }

  return null
}
