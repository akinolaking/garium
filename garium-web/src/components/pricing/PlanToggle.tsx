'use client'
import type { PlanSegment } from '@/types/plans'
import { cn } from '@/lib/utils'

interface PlanToggleProps {
  segment: PlanSegment
  onChange: (s: PlanSegment) => void
}

export function PlanToggle({ segment, onChange }: PlanToggleProps) {
  return (
    <div className="flex items-center justify-center">
      <div className="inline-flex rounded-lg border border-[#D1D9E8] p-1 bg-[#F5F7FA]">
        {([
          { value: 'sme', label: 'For growing businesses' },
          { value: 'enterprise', label: 'For larger organisations' },
        ] as const).map(opt => (
          <button
            key={opt.value}
            onClick={() => onChange(opt.value)}
            className={cn(
              'px-5 py-2.5 rounded-md text-sm font-medium transition-all duration-200',
              segment === opt.value
                ? 'bg-white text-[#081c52] shadow-sm'
                : 'text-[#6B7280] hover:text-[#081c52]'
            )}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  )
}
