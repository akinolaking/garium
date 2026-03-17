import { CrystalIcon } from './CrystalIcon'
import { cn } from '@/lib/utils'

interface GariumLogoProps {
  size?: 'sm' | 'md' | 'lg'
  color?: string
  showWordmark?: boolean
  animate?: boolean
  className?: string
}

export function GariumLogo({
  size = 'md',
  color = 'currentColor',
  showWordmark = true,
  animate = false,
  className,
}: GariumLogoProps) {
  const iconSizes = { sm: 22, md: 28, lg: 42 }
  const textSizes = { sm: '1rem', md: '1.25rem', lg: '1.875rem' }
  const iconSize = iconSizes[size]

  return (
    <div className={cn('flex items-center gap-2', className)}>
      <CrystalIcon
        size={iconSize}
        color={color}
        animate={animate}
        aria-label="Garium logo — crystal cluster mark"
      />
      {showWordmark && (
        <span
          style={{
            color,
            fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
            fontWeight: 600,
            fontSize: textSizes[size],
            letterSpacing: '-0.02em',
            lineHeight: 1,
          }}
        >
          Garium
        </span>
      )}
    </div>
  )
}
