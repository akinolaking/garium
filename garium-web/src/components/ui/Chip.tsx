import { cn } from '@/lib/utils'

interface ChipProps {
  children: React.ReactNode
  className?: string
}

export function Chip({ children, className }: ChipProps) {
  return (
    <span className={cn(
      'inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-[#eef1f9] text-[#072c8f] border border-[#d0d8ef]',
      className
    )}>
      {children}
    </span>
  )
}
