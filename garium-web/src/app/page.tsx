import { HeroSection } from '@/components/home/HeroSection'
import { ProblemSection } from '@/components/home/ProblemSection'
import { SolutionSection } from '@/components/home/SolutionSection'
import { HowItWorks } from '@/components/home/HowItWorks'
import { UseCasePreview } from '@/components/home/UseCasePreview'
import { DifferentiationSection } from '@/components/home/DifferentiationSection'
import { TrustSection } from '@/components/home/TrustSection'
import { HomeCTA } from '@/components/home/HomeCTA'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <HowItWorks />
      <UseCasePreview />
      <DifferentiationSection />
      <TrustSection />
      <HomeCTA />
    </>
  )
}
