'use client'
import { useState } from 'react'
import { usePlanToggle } from '@/hooks/usePlanToggle'
import { useCurrency } from '@/hooks/useCurrency'
import { CurrencySwitcher } from '@/components/ui/CurrencySwitcher'
import { AnnualToggle } from '@/components/pricing/AnnualToggle'
import { PlanToggle } from '@/components/pricing/PlanToggle'
import { PlanCard } from '@/components/pricing/PlanCard'
import { FeatureTable } from '@/components/pricing/FeatureTable'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SME_PLANS, ENTERPRISE_PLANS } from '@/lib/plans'
import type { BillingCycle } from '@/types/plans'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Check } from 'lucide-react'

const INCLUDED_FEATURES = [
  'Managed GPU infrastructure',
  'Model deployment and configuration',
  'Monthly performance and usage report',
  'Access controls and user management',
  'Security patching and updates',
  '24-hour infrastructure monitoring',
]

export function PricingClient() {
  const { segment, setSegment } = usePlanToggle()
  const { currency, rates, setCurrency } = useCurrency()
  const [billing, setBilling] = useState<BillingCycle>('monthly')
  const plans = segment === 'sme' ? SME_PLANS : ENTERPRISE_PLANS

  return (
    <>
      <section className="py-10 bg-[#F5F7FA] border-b border-[#D1D9E8]">
        <div className="container-garium space-y-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-sm text-[#6B7280] mb-1">View prices in:</p>
              <CurrencySwitcher currency={currency} onCurrencyChange={setCurrency} />
            </div>
            <AnnualToggle billing={billing} onChange={setBilling} />
          </div>
          <PlanToggle segment={segment} onChange={setSegment} />
        </div>
      </section>

      <section id="plans" className="section-pad bg-[#F5F7FA]">
        <div className="container-garium">
          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan, i) => (
              <AnimatedSection key={plan.id} delay={i * 0.1}>
                <PlanCard
                  plan={plan}
                  billing={billing}
                  currency={currency}
                  rates={rates}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white border-t border-[#D1D9E8]">
        <div className="container-garium">
          <AnimatedSection>
            <h2 className="text-2xl font-semibold text-black mb-8">What is included in every plan</h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-10">
              {INCLUDED_FEATURES.map(f => (
                <div key={f} className="flex items-center gap-2.5 text-sm text-[#374151]">
                  <Check className="w-4 h-4 text-[#072c8f] flex-shrink-0" />
                  {f}
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-pad bg-[#F5F7FA]">
        <div className="container-garium">
          <AnimatedSection>
            <h2 className="text-2xl font-semibold text-black mb-8">Full comparison</h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="rounded-xl border border-[#D1D9E8] bg-white overflow-hidden">
              <FeatureTable segment={segment} />
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-garium">
          <AnimatedSection>
            <div className="max-w-[560px] mx-auto text-center">
              <h2 className="text-2xl font-semibold text-black mb-3">
                Not sure which plan fits?
              </h2>
              <p className="text-[#6B7280] text-base mb-6">
                Book a consultation and we will recommend the right plan for your organisation, team size, and use case.
              </p>
              <Link href="/contact">
                <Button variant="primary" size="lg" aria-label="Book a consultation">
                  Book a consultation
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
