import { generatePageMetadata } from '@/lib/metadata'
import { AboutHero } from '@/components/about/AboutHero'
import { BrandStory } from '@/components/about/BrandStory'
import { VisionMission } from '@/components/about/VisionMission'
import { BeliefsSection } from '@/components/about/BeliefsSection'
import { TeamSection } from '@/components/about/TeamSection'
import { TechPartners } from '@/components/about/TechPartners'

export const metadata = generatePageMetadata({
  title: 'About Garium — Our Story and Mission',
  description: 'Named after garri. Built on the same principle. Garium is private AI infrastructure for organisations in Nigeria and the United Kingdom.',
  path: '/about',
})

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
