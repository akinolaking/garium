import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'featured' | 'save' | 'gpu'
  color?: string
  className?: string
}

export function Badge({ children, variant = 'default', color, className }: BadgeProps) {
  const base = 'inline-flex items-center px-2.5 py-0.5 rounded-pill text-xs font-medium'

  const variants = {
    default: 'bg-[#eef1f9] text-[#081c52]',
    featured: 'bg-[#072c8f] text-white',
    save: 'bg-green-100 text-green-800',
    gpu: 'text-white text-xs px-2.5 py-0.5',
  }

  const style = variant === 'gpu' && color ? { backgroundColor: color } : undefined

  return (
    <span className={cn(base, variants[variant], className)} style={style}>
      {children}
    </span>
  )
}
