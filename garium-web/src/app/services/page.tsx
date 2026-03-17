import { generatePageMetadata } from '@/lib/metadata'
import { ServicesHero } from '@/components/services/ServicesHero'
import { ServiceCardGrid } from '@/components/services/ServiceCard'
import { ArchitectureDiagram } from '@/components/services/ArchitectureDiagram'
import { UseCaseStories } from '@/components/services/UseCaseStories'

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
      <UseCaseStories />
    </>
  )
}
