import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { Accordion } from '@/components/ui/Accordion'
import { PRICING_FAQS } from '@/lib/faqs'
import { AnimatedBackground } from '@/components/ui/AnimatedBackground'

export function PricingFAQ() {
  return (
    <section className="section-pad bg-white" style={{ position: 'relative', overflow: 'hidden' }}>
      <AnimatedBackground variant="dots" opacity={0.3} />
      <div className="container-garium" style={{ position: 'relative', zIndex: 1 }}>
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="font-semibold text-black" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: '1.15', letterSpacing: '-0.02em' }}>
              Common questions.
            </h2>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="max-w-[720px] mx-auto">
            <Accordion items={PRICING_FAQS} />
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
