import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionLabel } from '@/components/ui/SectionLabel'

export function AboutHero() {
  return (
    <section className="section-pad-lg bg-gradient-to-br from-black via-[#081c52] to-[#072c8f] bg-crystal">
      <div className="container-garium pt-16">
        <AnimatedSection>
          <div className="max-w-[680px]">
            <SectionLabel light className="mb-6 block">About Garium</SectionLabel>
            <h1 className="font-semibold text-white text-balance mb-6" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: '1.1', letterSpacing: '-0.025em' }}>
              Named after garri. Built on the same principle.
            </h1>
            <p className="text-white/70 text-xl leading-relaxed">
              Garium is a private AI infrastructure company owned by Conqolx Technologies Company, serving organisations in Nigeria, the United Kingdom, and across West Africa.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
