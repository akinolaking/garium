import { HeroSection } from '@/components/home/HeroSection'
import { ProblemSection } from '@/components/home/ProblemSection'
import { SolutionSection } from '@/components/home/SolutionSection'
import { HowItWorks } from '@/components/home/HowItWorks'
import { UseCasePreview } from '@/components/home/UseCasePreview'
import { DifferentiationSection } from '@/components/home/DifferentiationSection'
import { TrustSection } from '@/components/home/TrustSection'
import { HomeCTA } from '@/components/home/HomeCTA'
import { CrystalIcon } from '@/components/ui/CrystalIcon'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      {/* Crystal section divider */}
      <div className="relative h-px bg-gradient-to-r from-transparent via-[#D1D9E8] to-transparent">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white border border-[#D1D9E8] flex items-center justify-center shadow-sm">
          <CrystalIcon size={16} color="#081c52" animate={false} />
        </div>
      </div>
      <SolutionSection />
      <HowItWorks />
      <UseCasePreview />
      <DifferentiationSection />
      <TrustSection />
      <HomeCTA />
    </>
  )
}
