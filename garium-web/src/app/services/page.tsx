import type { Metadata } from 'next'
import { ServicesHero } from '@/components/services/ServicesHero'
import { ServiceCardGrid } from '@/components/services/ServiceCard'
import { ArchitectureDiagram } from '@/components/services/ArchitectureDiagram'
import { UseCaseStories } from '@/components/services/UseCaseStories'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Garium deploys and manages private AI infrastructure. Private AI deployment, knowledge bases, staff workstations, automation agents, and ongoing management.',
}

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
