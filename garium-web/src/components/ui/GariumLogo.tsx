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
  const iconSizes = { sm: 24, md: 32, lg: 48 }
  const textSizes = { sm: 'text-base', md: 'text-xl', lg: 'text-3xl' }
  const iconSize = iconSizes[size]

  return (
    <div className={cn('flex items-center gap-2', className)}>
      <CrystalIcon size={iconSize} color={color} animate={animate} />
      {showWordmark && (
        <span
          className={cn('font-bold tracking-tight leading-none', textSizes[size])}
          style={{ color, fontFamily: "'Courier New', 'Courier', monospace" }}
        >
          Garium
        </span>
      )}
    </div>
  )
}
