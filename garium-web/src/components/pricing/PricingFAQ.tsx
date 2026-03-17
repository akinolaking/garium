import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { Accordion } from '@/components/ui/Accordion'
import { PRICING_FAQS } from '@/lib/faqs'

export function PricingFAQ() {
  return (
    <section className="section-pad bg-white">
      <div className="container-garium">
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
