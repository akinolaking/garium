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
import { Check, TrendingDown, Shield, Lock, RefreshCw, BarChart2, AlertCircle, Users } from 'lucide-react'

const INCLUDED_FEATURES = [
  {
    icon: Shield,
    title: 'Your own subdomain',
    body: 'Your platform lives at ai.yourorganisation.com — or any subdomain you choose. No Garium branding visible to your team.',
  },
  {
    icon: Lock,
    title: 'Data that stays put',
    body: 'Encrypted in transit and at rest. No third-party servers. No shared infrastructure. Your information does not leave your environment.',
  },
  {
    icon: RefreshCw,
    title: 'Always up to date',
    body: 'We handle all AI model updates, security patches, and software upgrades. Your team always has the latest capability without any IT work.',
  },
  {
    icon: BarChart2,
    title: 'Monthly reports',
    body: 'A clear monthly report showing platform usage, team activity, and recommendations for improving how your organisation uses AI.',
  },
  {
    icon: AlertCircle,
    title: 'Monitored around the clock',
    body: 'We watch your platform 24 hours a day. If something needs attention, we fix it before it affects your team.',
  },
  {
    icon: Users,
    title: 'No per-seat pricing, ever',
    body: 'Whether 3 people use the platform or 300, your monthly fee does not change. Grow your team without watching the invoice grow.',
  },
]

export function PricingClient() {
  const { segment, setSegment } = usePlanToggle()
  const { currency, rates } = useCurrency()
  const [billing, setBilling] = useState<BillingCycle>('monthly')
  const plans = segment === 'sme' ? SME_PLANS : ENTERPRISE_PLANS

  return (
    <>
      {/* Controls bar */}
      <section className="py-8 bg-[#F5F7FA] border-b border-[#D1D9E8]">
        <div className="container-garium space-y-5">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-xs font-medium text-[#6B7280] uppercase tracking-widest mb-2">View prices in:</p>
              <CurrencySwitcher />
            </div>
            <AnnualToggle billing={billing} onChange={setBilling} />
          </div>
          <PlanToggle segment={segment} onChange={setSegment} />
        </div>
      </section>

      {/* Cost comparison callout */}
      <section className="py-10 bg-white border-b border-[#D1D9E8]">
        <div className="container-garium">
          <AnimatedSection>
            <div className="max-w-[700px] mx-auto rounded-xl border border-[#D1D9E8] overflow-hidden">
              <div className="flex items-center gap-2 px-5 py-3 bg-[#eef1f9] border-b border-[#D1D9E8]">
                <TrendingDown className="w-4 h-4 text-[#072c8f]" aria-hidden />
                <p className="text-xs font-semibold uppercase tracking-widest text-[#072c8f]">Cost comparison at 50 users</p>
              </div>
              <div className="divide-y divide-[#D1D9E8]">
                {[
                  { name: 'Microsoft Copilot', cost: '$1,500/month', note: '50 × $30/user' },
                  { name: 'ChatGPT Team', cost: '$1,250/month', note: '50 × $25/user' },
                  { name: 'Garium Grow', cost: '$750/month', note: 'unlimited users', highlight: true },
                ].map(row => (
                  <div key={row.name} className={`flex items-center justify-between px-5 py-3.5 ${row.highlight ? 'bg-green-50' : ''}`}>
                    <div>
                      <span className={`text-sm font-medium ${row.highlight ? 'text-green-800' : 'text-[#374151]'}`}>{row.name}</span>
                      <span className="text-xs text-[#6B7280] ml-2">{row.note}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className={`text-sm font-semibold ${row.highlight ? 'text-green-800' : 'text-[#374151]'}`}>{row.cost}</span>
                      {row.highlight && (
                        <span className="text-xs font-semibold text-green-800 bg-green-100 px-2 py-0.5 rounded-full">You save $750/mo</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Plan cards */}
      <section id="plans" className="section-pad bg-[#F5F7FA]">
        <div className="container-garium">
          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan, i) => (
              <AnimatedSection key={plan.id} delay={i * 0.1}>
                <PlanCard plan={plan} billing={billing} currency={currency} rates={rates} />
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.3}>
            <p className="text-xs text-[#6B7280] text-center mt-6 max-w-[600px] mx-auto">
              All prices shown in USD, excluding applicable local taxes. UK clients: prices are subject to VAT at the prevailing rate. Nigerian clients: prices exclude applicable taxes. Invoices are issued in USD.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* What's included */}
      <section className="section-pad bg-white border-t border-[#D1D9E8]">
        <div className="container-garium">
          <AnimatedSection>
            <h2 className="text-2xl font-semibold text-black mb-8">What is included in every plan</h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
              {INCLUDED_FEATURES.map(f => {
                const Icon = f.icon
                return (
                  <div key={f.title} className="flex flex-col gap-2 p-5 rounded-xl border border-[#D1D9E8] bg-[#F5F7FA]">
                    <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center border border-[#D1D9E8]">
                      <Icon className="w-4 h-4 text-[#072c8f]" aria-hidden />
                    </div>
                    <h3 className="text-sm font-semibold text-black">{f.title}</h3>
                    <p className="text-xs text-[#374151] leading-relaxed">{f.body}</p>
                  </div>
                )
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Feature comparison table */}
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

      {/* Final CTA */}
      <section className="section-pad bg-white">
        <div className="container-garium">
          <AnimatedSection>
            <div className="max-w-[560px] mx-auto text-center">
              <h2 className="text-2xl font-semibold text-black mb-3">
                Not sure which plan fits?
              </h2>
              <p className="text-[#4B5563] text-base mb-6">
                Book a consultation and we will recommend the right plan for your organisation, team size, and use case. 30 minutes. No obligation.
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
