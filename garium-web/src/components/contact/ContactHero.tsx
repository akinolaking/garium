import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionLabel } from '@/components/ui/SectionLabel'

export function ContactHero() {
  return (
    <section className="section-pad-lg bg-gradient-to-br from-black via-[#081c52] to-[#072c8f] bg-crystal">
      <div className="container-garium pt-16">
        <AnimatedSection>
          <div className="max-w-[640px]">
            <SectionLabel light className="mb-6 block">Get in touch</SectionLabel>
            <h1 className="font-semibold text-white text-balance mb-6" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: '1.1', letterSpacing: '-0.025em' }}>
              A conversation before a commitment.
            </h1>
            <p className="text-white/70 text-xl leading-relaxed">
              We do not do hard selling. If Garium is right for your organisation, we will tell you clearly why and what it will cost. If it is not the right fit, we will tell you that too.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
