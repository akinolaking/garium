import { Suspense } from 'react'
import { generatePageMetadata } from '@/lib/metadata'
import { PricingHero } from '@/components/pricing/PricingHero'
import { PricingFAQ } from '@/components/pricing/PricingFAQ'
import { PartnersSection } from '@/components/ui/PartnersSection'
import { TestimonialSection } from '@/components/ui/TestimonialSection'
import { PreFooterCTA } from '@/components/ui/PreFooterCTA'
import { PricingClient } from './PricingClient'
import { TESTIMONIALS } from '@/lib/testimonials'

export const metadata = generatePageMetadata({
  title: 'Pricing — Private AI Platform Plans',
  description: 'SME plans from $499/month. Enterprise plans from $1,500/month. One setup fee. Flat monthly retainer. 3-month minimum term. Unlimited users.',
  path: '/pricing',
})

export default function PricingPage() {
  return (
    <>
      <PricingHero />
      <Suspense>
        <PricingClient />
      </Suspense>
      <PartnersSection />
      <TestimonialSection testimonials={TESTIMONIALS.slice(3, 6)} heading="Trusted by organisations like yours." background="#F5F7FA" />
      <PricingFAQ />
      <PreFooterCTA />
    </>
  )
}
