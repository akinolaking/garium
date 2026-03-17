import { buildFilloutUrl } from '@/lib/fillout'
import { Button } from '@/components/ui/Button'
import type { BillingCycle, PlanSegment } from '@/types/plans'

interface BookingButtonProps {
  planId: string
  planName: string
  tier: PlanSegment
  billing: BillingCycle
  variant?: 'primary' | 'outline'
  label?: string
  className?: string
}

export function BookingButton({
  planId,
  planName,
  tier,
  billing,
  variant = 'primary',
  label = 'Book a consultation',
  className,
}: BookingButtonProps) {
  const url = buildFilloutUrl({ planId, planName, tier, billing })

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="block w-full">
      <Button
        variant={variant}
        size="md"
        aria-label={`${label} for ${planName} plan`}
        className={`w-full ${className ?? ''}`}
      >
        {label}
      </Button>
    </a>
  )
}
