'use client'
import { useState, useRef, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'
import { useCurrency } from '@/hooks/useCurrency'
import { CURRENCIES } from '@/lib/currency'
import { cn } from '@/lib/utils'

interface CurrencySwitcherProps {
  light?: boolean
}

export function CurrencySwitcher({ light }: CurrencySwitcherProps) {
  const { currency, setCurrency } = useCurrency()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const current = CURRENCIES.find(c => c.code === currency) || CURRENCIES[0]

  // Only attach listener when dropdown is open
  useEffect(() => {
    if (!open) return
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [open])

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen(prev => !prev)}
        aria-label={`Currency: ${current.label}`}
        aria-expanded={open}
        aria-haspopup="listbox"
        className={cn(
          'flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 focus-visible:outline-none focus-visible:ring-2',
          light
            ? 'border-white/30 text-white hover:bg-white/10 focus-visible:ring-white/50'
            : 'border-[#D1D9E8] text-[#081c52] hover:bg-[#eef1f9] focus-visible:ring-[#072c8f]/50'
        )}
      >
        <span>{current.symbol}</span>
        <span>{current.code}</span>
        <ChevronDown
          className={cn('w-3 h-3 transition-transform duration-200', open && 'rotate-180')}
          aria-hidden="true"
        />
      </button>

      {open && (
        <div
          role="listbox"
          aria-label="Select currency"
          className={cn(
            'absolute right-0 top-full mt-2 w-48 rounded-xl shadow-xl z-[300] overflow-hidden',
            light
              ? 'bg-[#081c52]/95 backdrop-blur-md border border-white/10'
              : 'bg-white border border-[#D1D9E8]'
          )}
        >
          {CURRENCIES.map(c => (
            <button
              key={c.code}
              type="button"
              role="option"
              aria-selected={c.code === currency}
              onClick={() => { setCurrency(c.code); setOpen(false) }}
              className={cn(
                'w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors duration-150 text-left',
                light
                  ? c.code === currency
                    ? 'bg-white/15 text-white font-semibold'
                    : 'text-white/80 hover:bg-white/10 hover:text-white'
                  : c.code === currency
                    ? 'bg-[#eef1f9] text-[#072c8f] font-semibold'
                    : 'text-black hover:bg-[#eef1f9]'
              )}
            >
              <span className="font-mono w-5">{c.symbol}</span>
              <span>{c.label}</span>
              <span className={cn('text-xs ml-auto', light ? 'text-white/50' : 'text-[#6B7280]')}>{c.code}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
