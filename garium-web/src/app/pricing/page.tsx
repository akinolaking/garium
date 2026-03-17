import type { Metadata } from 'next'
import { Suspense } from 'react'
import { PricingHero } from '@/components/pricing/PricingHero'
import { PricingFAQ } from '@/components/pricing/PricingFAQ'
import { PricingClient } from './PricingClient'

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'One setup fee. One monthly retainer. No per-seat charges. View Garium plans for growing businesses and larger organisations.',
}

export default function PricingPage() {
  return (
    <>
      <PricingHero />
      <Suspense>
        <PricingClient />
      </Suspense>
      <PricingFAQ />
    </>
  )
}
