import { cn } from '@/lib/utils'

interface SectionLabelProps {
  children: React.ReactNode
  light?: boolean
  className?: string
}

export function SectionLabel({ children, light, className }: SectionLabelProps) {
  return (
    <span className={cn(
      'eyebrow',
      light && 'text-[#697ede]',
      className
    )}>
      {children}
    </span>
  )
}
