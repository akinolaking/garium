import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionLabel } from '@/components/ui/SectionLabel'

export function ServicesHero() {
  return (
    <section className="section-pad-lg bg-gradient-to-br from-black via-[#081c52] to-[#072c8f] bg-crystal">
      <div className="container-garium pt-16">
        <AnimatedSection>
          <div className="max-w-[720px]">
            <SectionLabel light className="mb-6 block">What Garium delivers</SectionLabel>
            <h1 className="font-semibold text-white text-balance mb-6" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: '1.1', letterSpacing: '-0.025em' }}>
              Not a subscription. A transformation.
            </h1>
            <p className="text-white/70 text-xl leading-relaxed">
              We deploy, configure, and manage your private AI platform from start to finish. You get a working system tailored to your organisation, not a tool you have to figure out yourself.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
