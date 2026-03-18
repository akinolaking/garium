import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionLabel } from '@/components/ui/SectionLabel'

export function ProblemSection() {
  return (
    <section className="section-pad bg-[#F5F7FA]">
      <div className="container-garium">
        <AnimatedSection>
          <div className="max-w-[800px] mx-auto text-center">
            <SectionLabel className="mb-5 block">The real cost of shared AI</SectionLabel>
            <h2 className="text-black mb-8 text-balance" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: '1.15', letterSpacing: '-0.02em' }}>
              Your team is using AI. Your data is leaving with it.
            </h2>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div style={{ maxWidth: '580px' }}>
            <p style={{ fontSize: '1.0625rem', lineHeight: 1.7, color: '#374151', marginBottom: '16px' }}>
              Client contracts. Internal strategies. Financial data. Patient records. Every query your team sends to a third-party AI tool is processed on infrastructure you do not control, stored in logs you cannot audit, and potentially used in ways your terms and conditions never made clear.
            </p>
            <p style={{ fontSize: '1.0625rem', lineHeight: 1.7, color: '#374151', marginBottom: '24px' }}>
              The tools are useful. The risk is real. Most organisations are managing that tension badly, by ignoring it.
            </p>
            <p style={{ fontSize: '1.125rem', fontWeight: 500, color: '#081c52' }}>
              Private AI is not a future investment. It is a present risk decision.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
