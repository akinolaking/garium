import { cn } from '@/lib/utils'
import { ButtonHTMLAttributes, forwardRef } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  asChild?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const base = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#072c8f] disabled:opacity-50 disabled:pointer-events-none rounded-lg'

    const variants = {
      primary: 'bg-gradient-to-br from-[#072c8f] to-[#081c52] text-white hover:from-[#0a3ab8] hover:to-[#0c276a] shadow-sm',
      outline: 'border border-[#072c8f] text-[#072c8f] hover:bg-[#072c8f] hover:text-white bg-transparent',
      ghost: 'text-[#072c8f] hover:bg-[#edf0fb] bg-transparent',
    }

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-sm',
      lg: 'px-8 py-4 text-base',
    }

    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
export { Button }
