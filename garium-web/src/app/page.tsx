import { HeroSection } from '@/components/home/HeroSection'
import { ProblemSection } from '@/components/home/ProblemSection'
import { SolutionSection } from '@/components/home/SolutionSection'
import { HowItWorks } from '@/components/home/HowItWorks'
import { UseCasePreview } from '@/components/home/UseCasePreview'
import { DifferentiationSection } from '@/components/home/DifferentiationSection'
import { TrustSection } from '@/components/home/TrustSection'
import { HomeCTA } from '@/components/home/HomeCTA'
import { TestimonialSection } from '@/components/ui/TestimonialSection'
import { PartnersSection } from '@/components/ui/PartnersSection'
import { CrystalIcon } from '@/components/ui/CrystalIcon'

const HOME_TESTIMONIALS = [
  {
    quote: 'We went from blocking every AI tool request to deploying across four departments in two weeks. The flat pricing meant adding more users cost nothing extra.',
    author: 'Chief Information Officer',
    org: 'Financial services firm, 120 staff',
  },
  {
    quote: 'We could not touch ChatGPT or Copilot with student data. Garium gave us AI capability without the compliance risk. The teachers were using it within a week.',
    author: 'Head of Digital Learning',
    org: 'Secondary school, 1,200 students',
  },
  {
    quote: 'We can now tell clients their briefs never leave our environment. That is not just a legal comfort. It is a new thing we can sell.',
    author: 'Managing Director',
    org: 'PR and digital agency, 5 staff',
  },
]

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
      <PartnersSection />
      <DifferentiationSection />
      <TrustSection />
      <TestimonialSection testimonials={HOME_TESTIMONIALS} heading="Organisations that made the switch." background="#F5F7FA" />
      <HomeCTA />
    </>
  )
}
