import { Suspense } from 'react'
import { generatePageMetadata } from '@/lib/metadata'
import { PricingHero } from '@/components/pricing/PricingHero'
import { PricingFAQ } from '@/components/pricing/PricingFAQ'
import { PartnersSection } from '@/components/ui/PartnersSection'
import { TestimonialSection } from '@/components/ui/TestimonialSection'
import { PricingClient } from './PricingClient'

export const metadata = generatePageMetadata({
  title: 'Pricing — Private AI Platform Plans',
  description: 'SME plans from $375/month. Enterprise plans from $1,500/month. One setup fee. Flat monthly retainer. No per-seat charges. Unlimited users.',
  path: '/pricing',
})

const PRICING_TESTIMONIALS = [
  {
    quote: 'We had five developers on ChatGPT Plus. Garium costs less, runs privately, and the API access means we have embedded it into our internal tools. We will not go back.',
    author: 'VP of Engineering',
    org: 'SaaS company, 35 staff',
  },
  {
    quote: 'Our compliance team spent six months blocking every AI tool because of data residency requirements. Garium was the first solution that passed their review in week one.',
    author: 'Operations Director',
    org: 'Private healthcare group, 80 staff',
  },
  {
    quote: 'The question our senior partners asked was simple: does our client data stay on our servers? With Garium, the answer is yes, and that closed the conversation.',
    author: 'Head of Knowledge Management',
    org: 'Mid-size law firm, 60 fee earners',
  },
]

export default function PricingPage() {
  return (
    <>
      <PricingHero />
      <Suspense>
        <PricingClient />
      </Suspense>
      <PartnersSection />
      <TestimonialSection testimonials={PRICING_TESTIMONIALS} heading="What clients say about the pricing." background="#F5F7FA" />
      <PricingFAQ />
    </>
  )
}
