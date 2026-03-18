import { HeroSection } from '@/components/home/HeroSection'
import { ProblemSection } from '@/components/home/ProblemSection'
import { SolutionSection } from '@/components/home/SolutionSection'
import { HowItWorks } from '@/components/home/HowItWorks'
import { UseCasePreview } from '@/components/home/UseCasePreview'
import { DifferentiationSection } from '@/components/home/DifferentiationSection'
import { TrustSection } from '@/components/home/TrustSection'
import { TestimonialSection } from '@/components/ui/TestimonialSection'
import { PartnersSection } from '@/components/ui/PartnersSection'
import { PreFooterCTA } from '@/components/ui/PreFooterCTA'
import { CrystalIcon } from '@/components/ui/CrystalIcon'
import { TESTIMONIALS } from '@/lib/testimonials'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <div className="relative h-px bg-gradient-to-r from-transparent via-[#D1D9E8] to-transparent">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white border border-[#D1D9E8] flex items-center justify-center shadow-sm">
          <CrystalIcon size={16} color="#081c52" animate={false} />
        </div>
      </div>
      <SolutionSection />
      <HowItWorks />
      <UseCasePreview />
      <PartnersSection />
      <DifferentiationSection />
      <TrustSection />
      <TestimonialSection testimonials={TESTIMONIALS.slice(0, 3)} heading="What our clients say." background="#F5F7FA" />
      <PreFooterCTA />
    </>
  )
}
