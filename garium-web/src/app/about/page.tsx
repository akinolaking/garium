import type { Metadata } from 'next'
import { AboutHero } from '@/components/about/AboutHero'
import { BrandStory } from '@/components/about/BrandStory'
import { VisionMission } from '@/components/about/VisionMission'
import { BeliefsSection } from '@/components/about/BeliefsSection'
import { TeamSection } from '@/components/about/TeamSection'
import { TechPartners } from '@/components/about/TechPartners'

export const metadata: Metadata = {
  title: 'About',
  description: 'Named after garri. Built on the same principle. Garium is a private AI infrastructure company owned by Conqolx Technologies Company.',
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <BrandStory />
      <VisionMission />
      <BeliefsSection />
      <TeamSection />
      <TechPartners />
    </>
  )
}
