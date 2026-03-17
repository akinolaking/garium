'use client'
import type { BillingCycle } from '@/types/plans'
import { cn } from '@/lib/utils'

interface AnnualToggleProps {
  billing: BillingCycle
  onChange: (b: BillingCycle) => void
}

export function AnnualToggle({ billing, onChange }: AnnualToggleProps) {
  return (
    <div className="flex items-center gap-3">
      <button
        onClick={() => onChange('monthly')}
        className={cn(
          'text-sm font-medium transition-colors duration-200',
          billing === 'monthly' ? 'text-[#081c52]' : 'text-[#6B7280] hover:text-[#081c52]'
        )}
      >
        Monthly
      </button>

      <button
        onClick={() => onChange(billing === 'monthly' ? 'annual' : 'monthly')}
        aria-label="Toggle billing cycle"
        className="relative w-12 h-6 rounded-full transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#072c8f]"
        style={{ backgroundColor: billing === 'annual' ? '#072c8f' : '#D1D9E8' }}
      >
        <span
          className={cn(
            'absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow-sm transition-transform duration-200',
            billing === 'annual' && 'translate-x-6'
          )}
        />
      </button>

      <button
        onClick={() => onChange('annual')}
        className={cn(
          'text-sm font-medium flex items-center gap-2 transition-colors duration-200',
          billing === 'annual' ? 'text-[#081c52]' : 'text-[#6B7280] hover:text-[#081c52]'
        )}
      >
        Annual
        <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded-full">
          Save 15%
        </span>
      </button>
    </div>
  )
}
