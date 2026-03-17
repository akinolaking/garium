import type { Plan, BillingCycle } from '@/types/plans'
import type { Currency } from '@/lib/currency'
import { convertPrice, formatPrice } from '@/lib/currency'
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
  const monthlyAmount = billing === 'annual' ? Math.round(plan.annualUSD / 12) : plan.monthlyUSD
  const annualTotalAmount = plan.annualUSD

  const displayMonthly = formatPrice(convertPrice(monthlyAmount, currency, rates), currency)
  const displaySetup = formatPrice(convertPrice(plan.setupUSD, currency, rates), currency)
  const displayAnnual = formatPrice(convertPrice(annualTotalAmount, currency, rates), currency)

  const borderStyle = plan.featured
    ? 'border-2 border-[#072c8f]'
    : plan.isSME
      ? 'border-l-4 border-l-[#3b6d11] border border-[#D1D9E8]'
      : 'border-l-4 border-l-[#081c52] border border-[#D1D9E8]'

  return (
    <div className={cn('relative flex flex-col bg-white rounded-xl p-6 h-full transition-all duration-[350ms] hover:shadow-[0_4px_16px_0_rgba(8,28,82,0.12)]', borderStyle, plan.featured && 'shadow-[0_4px_16px_0_rgba(8,28,82,0.12)]')}>
      {plan.featured && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#072c8f] text-white text-xs font-semibold px-4 py-1 rounded-full whitespace-nowrap">
          Most popular
        </div>
      )}

      <div className="mb-1">
        <span className="text-xs font-medium text-[#6B7280] uppercase tracking-widest">{plan.label}</span>
      </div>
      <h3 className="text-2xl font-semibold text-black mb-2">{plan.tier}</h3>
      <p className="text-[#4B5563] text-sm leading-relaxed mb-5">{plan.description}</p>

      <div className="mb-1">
        <div className="flex items-baseline gap-1 flex-wrap">
          <span className="text-3xl font-bold text-black">{displayMonthly}</span>
          <span className="text-[#4B5563] text-sm">/mo</span>
          {billing === 'annual' && (
            <span className="ml-2 bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded-full">Save 15%</span>
          )}
        </div>
        {billing === 'annual' ? (
          <p className="text-xs text-[#4B5563] mt-1">{displayAnnual}/year · billed annually</p>
        ) : (
          <p className="text-xs text-[#4B5563] mt-1">billed monthly</p>
        )}
      </div>

      <p className="text-sm text-[#4B5563] mb-4">+ {displaySetup} one-time setup fee</p>

      <div className="flex items-center gap-2 mb-1">
        <span
          className="text-xs font-semibold text-white px-2.5 py-1 rounded-md"
          style={{ backgroundColor: plan.gpuColor }}
        >
          {plan.gpu}
        </span>
        {plan.vram !== 'Shared node' && (
          <span className="text-xs text-[#4B5563]">{plan.vram}</span>
        )}
      </div>

      <p className="text-xs font-semibold text-[#4B5563] uppercase tracking-wide mb-3">{plan.userLimit}</p>

      <ul className="space-y-2.5 mb-5 flex-1">
        {plan.features.map((f, i) => (
          <li key={i} className="flex items-start gap-2.5 text-sm text-[#374151]">
            <Check className="w-4 h-4 text-[#072c8f] mt-0.5 flex-shrink-0" aria-hidden />
            {f}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-1.5 mb-5">
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

      <p className="text-xs text-[#6B7280] mt-2 text-center">
        30-minute call. No obligation. We give you a specific recommendation.
      </p>
    </div>
  )
}
