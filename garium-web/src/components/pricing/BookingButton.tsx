import { buildFilloutUrl } from '@/lib/fillout'
import { cn } from '@/lib/utils'
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
  const formId = process.env.NEXT_PUBLIC_FILLOUT_FORM_ID
  const url = formId && formId !== 'your_fillout_form_id'
    ? buildFilloutUrl({ planId, planName, tier, billing })
    : `mailto:hello@garium.com?subject=Consultation%20Request%20%E2%80%94%20${encodeURIComponent(planName)}%20Plan`

  return (
    <a
      href={url}
      target={formId && formId !== 'your_fillout_form_id' ? '_blank' : '_self'}
      rel="noopener noreferrer"
      aria-label={`${label} for ${planName} plan`}
      className={cn(
        'inline-flex items-center justify-center w-full font-semibold transition-all duration-200',
        'rounded-full px-6 py-3 text-sm',
        variant === 'primary'
          ? 'bg-gradient-to-r from-[#072c8f] to-[#081c52] text-white hover:from-[#0a3ab8] hover:to-[#0c276a] shadow-md hover:shadow-lg'
          : 'border-2 border-[#D1D9E8] text-[#081c52] hover:border-[#072c8f] hover:bg-[#eef1f9]',
        className
      )}
    >
      {label}
    </a>
  )
}
