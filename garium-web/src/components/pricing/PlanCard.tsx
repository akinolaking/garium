import type { Plan, BillingCycle } from '@/types/plans'
import type { Currency } from '@/lib/currency'
import { convertPrice, formatPrice } from '@/lib/currency'
import { Badge } from '@/components/ui/Badge'
import { Chip } from '@/components/ui/Chip'
import { BookingButton } from './BookingButton'
import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'

interface PlanCardProps {
  plan: Plan
  billing: BillingCycle
  currency: Currency
  rates: Record<Currency, number>
}

export function PlanCard({ plan, billing, currency, rates }: PlanCardProps) {
  const monthlyAmount = billing === 'annual'
    ? Math.round(plan.annualUSD / 12)
    : plan.monthlyUSD

  const setupAmount = plan.setupUSD
  const annualTotalAmount = plan.annualUSD

  const displayMonthly = formatPrice(convertPrice(monthlyAmount, currency, rates), currency)
  const displaySetup = formatPrice(convertPrice(setupAmount, currency, rates), currency)
  const displayAnnual = formatPrice(convertPrice(annualTotalAmount, currency, rates), currency)

  return (
    <div
      className={cn(
        'flex flex-col rounded-xl border-2 p-6 h-full transition-all duration-350 hover:shadow-[0_4px_16px_0_rgba(8,28,82,0.12)]',
        plan.featured
          ? 'border-[#072c8f] bg-white shadow-md'
          : plan.isSME
            ? 'border-dashed border-[#D1D9E8] bg-[#F5F7FA]'
            : 'border-[#D1D9E8] bg-white'
      )}
    >
      {plan.featured && (
        <div className="mb-4">
          <Badge variant="featured">Most popular</Badge>
        </div>
      )}

      <div className="mb-1">
        <span className="text-xs font-medium text-[#6B7280] uppercase tracking-widest">{plan.label}</span>
      </div>
      <h3 className="text-2xl font-semibold text-black mb-2">{plan.tier}</h3>
      <p className="text-[#6B7280] text-sm leading-relaxed mb-6">{plan.description}</p>

      <div className="mb-2">
        <div className="flex items-baseline gap-1">
          <span className="text-3xl font-bold text-black">{displayMonthly}</span>
          <span className="text-[#6B7280] text-sm">/mo</span>
          {billing === 'annual' && (
            <Badge variant="save" className="ml-2">Save 15%</Badge>
          )}
        </div>
        {billing === 'annual' && (
          <p className="text-xs text-[#6B7280] mt-1">
            {displayAnnual} billed annually
          </p>
        )}
      </div>
      <p className="text-sm text-[#6B7280] mb-4">
        + {displaySetup} setup fee
      </p>

      <div className="mb-4">
        <Badge variant="gpu" color={plan.gpuColor}>{plan.gpu}</Badge>
        {plan.vram !== 'Shared node' && (
          <span className="ml-2 text-xs text-[#6B7280]">{plan.vram}</span>
        )}
      </div>

      <p className="text-xs font-semibold text-[#6B7280] uppercase tracking-wide mb-3">{plan.userLimit}</p>

      <ul className="space-y-2.5 mb-6 flex-1">
        {plan.features.map((f, i) => (
          <li key={i} className="flex items-start gap-2.5 text-sm text-[#374151]">
            <Check className="w-4 h-4 text-[#072c8f] mt-0.5 flex-shrink-0" />
            {f}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-1.5 mb-6">
        {plan.interfaces.map(iface => (
          <Chip key={iface}>{iface}</Chip>
        ))}
      </div>

      <BookingButton
        planId={plan.id}
        planName={plan.tier}
        tier={plan.segment}
        billing={billing}
        variant={plan.featured ? 'primary' : 'outline'}
      />
    </div>
  )
}
