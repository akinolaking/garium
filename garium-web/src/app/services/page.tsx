import { generatePageMetadata } from '@/lib/metadata'
import { ServicesHero } from '@/components/services/ServicesHero'
import { ServiceCardGrid } from '@/components/services/ServiceCard'
import { ArchitectureDiagram } from '@/components/services/ArchitectureDiagram'
import { UseCaseStories } from '@/components/services/UseCaseStories'
import { PartnersSection } from '@/components/ui/PartnersSection'
import { TestimonialSection } from '@/components/ui/TestimonialSection'
import { ServicesCTA } from '@/components/services/ServicesCTA'

export const metadata = generatePageMetadata({
  title: 'Services — Private AI Deployment & Management',
  description: 'Private AI deployment, knowledge base setup, staff workstation access, and fully managed ongoing operations. Everything your organisation needs.',
  path: '/services',
})

const SERVICES_TESTIMONIALS = [
  {
    quote: 'We went from blocking every AI tool request to deploying across four departments in two weeks. The flat pricing meant adding more users cost nothing extra.',
    author: 'Chief Information Officer',
    org: 'Financial services firm, 120 staff',
  },
  {
    quote: 'We could not touch ChatGPT with student data. Garium gave us AI capability without the compliance risk. The teachers were using it within a week.',
    author: 'Head of Digital Learning',
    org: 'Secondary school, 1,200 students',
  },
  {
    quote: 'The question our senior partners asked was simple: does our client data stay on our servers? With Garium, the answer is yes, and that closed the conversation.',
    author: 'Head of Knowledge Management',
    org: 'Mid-size law firm, 60 fee earners',
  },
]

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServiceCardGrid />
      <ArchitectureDiagram />
      <PartnersSection />
      <UseCaseStories />
      <TestimonialSection testimonials={SERVICES_TESTIMONIALS} heading="What clients say." />
      <ServicesCTA />
    </>
  )
}
