import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { AnimatedBackground } from '@/components/ui/AnimatedBackground'

export function ProblemSection() {
  return (
    <section className="section-pad bg-[#F5F7FA]" style={{ position: 'relative', overflow: 'hidden' }}>
      <AnimatedBackground variant="curves" position="right" opacity={0.4} />
      <div className="container-garium" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <AnimatedSection>
          <SectionLabel className="mb-5 block">The real cost of shared AI</SectionLabel>
          <h2 className="text-black mb-10 text-balance" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: '1.15', letterSpacing: '-0.02em', maxWidth: '22ch', marginLeft: 'auto', marginRight: 'auto' }}>
            Your team is using AI. Your data is leaving with it.
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'left' }}>
            <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#374151', marginBottom: '20px' }}>
              Client contracts. Internal strategies. Financial data. Patient records.
              Every query your team sends to a third-party AI tool is processed on
              infrastructure you do not control, stored in logs you cannot audit, and
              potentially used in ways your terms and conditions never made clear.
            </p>
            <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#374151', marginBottom: '24px' }}>
              The tools are useful. The risk is real. Most organisations are managing
              that tension badly, by ignoring it.
            </p>
            <p style={{ fontSize: '1.0625rem', fontWeight: 500, color: '#081c52' }}>
              Private AI is not a future investment. It is a present risk decision.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
