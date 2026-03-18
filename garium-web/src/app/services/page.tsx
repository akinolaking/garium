import { generatePageMetadata } from '@/lib/metadata'
import { ServicesHero } from '@/components/services/ServicesHero'
import { ServiceCardGrid } from '@/components/services/ServiceCard'
import { ArchitectureDiagram } from '@/components/services/ArchitectureDiagram'
import { ServicesUseCaseAccordion } from '@/components/services/ServicesUseCaseAccordion'
import { PartnersSection } from '@/components/ui/PartnersSection'
import { TestimonialSection } from '@/components/ui/TestimonialSection'
import { PreFooterCTA } from '@/components/ui/PreFooterCTA'
import { TESTIMONIALS } from '@/lib/testimonials'

export const metadata = generatePageMetadata({
  title: 'Services — Private AI Deployment & Management',
  description: 'Private AI deployment, knowledge base setup, staff workstation access, and fully managed ongoing operations. Everything your organisation needs.',
  path: '/services',
})

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServiceCardGrid />
      <ArchitectureDiagram />
      <PartnersSection />
      <ServicesUseCaseAccordion />
      <TestimonialSection testimonials={TESTIMONIALS.slice(0, 3)} heading="What our clients say." />
      <PreFooterCTA />
    </>
  )
}
