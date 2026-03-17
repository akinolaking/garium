'use client'
import { useState, useRef, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'
import { CURRENCIES } from '@/lib/currency'
import type { Currency } from '@/lib/currency'
import { cn } from '@/lib/utils'

interface CurrencySwitcherProps {
  currency: Currency
  onCurrencyChange: (c: Currency) => void
  light?: boolean
}

export function CurrencySwitcher({ currency, onCurrencyChange, light }: CurrencySwitcherProps) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const current = CURRENCIES.find(c => c.code === currency)!

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(v => !v)}
        aria-label={`Currency: ${current.label}`}
        className={cn(
          'flex items-center gap-1.5 px-3 py-1.5 rounded-pill text-sm font-medium border transition-colors duration-200',
          light
            ? 'border-white/30 text-white hover:bg-white/10'
            : 'border-[#D1D9E8] text-[#081c52] hover:bg-[#eef1f9]'
        )}
      >
        <span>{current.symbol}</span>
        <span>{current.code}</span>
        <ChevronDown className={cn('w-3 h-3 transition-transform duration-200', open && 'rotate-180')} />
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-1 w-44 bg-white border border-[#D1D9E8] rounded-lg shadow-lg z-50 overflow-hidden">
          {CURRENCIES.map(c => (
            <button
              key={c.code}
              onClick={() => { onCurrencyChange(c.code); setOpen(false) }}
              className={cn(
                'w-full flex items-center gap-3 px-4 py-3 text-sm hover:bg-[#eef1f9] transition-colors duration-150',
                c.code === currency ? 'text-[#072c8f] font-medium bg-[#eef1f9]' : 'text-black'
              )}
            >
              <span className="font-semibold w-6">{c.symbol}</span>
              <span>{c.label}</span>
              <span className="ml-auto text-xs text-[#6B7280]">{c.code}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
