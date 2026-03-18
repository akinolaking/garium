import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { AnimatedBackground } from '@/components/ui/AnimatedBackground'

export function ProblemSection() {
  return (
    <section className="section-pad bg-[#F5F7FA]" style={{ position: 'relative', overflow: 'hidden' }}>
      <AnimatedBackground variant="curves" position="right" opacity={0.4} />
      <div className="container-garium" style={{ position: 'relative', zIndex: 1 }}>
        <AnimatedSection>
          <p className="eyebrow" style={{ textAlign: 'center', display: 'block', marginBottom: '16px' }}>
            The real cost of shared AI
          </p>
          <h2
            className="text-black text-balance"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              lineHeight: '1.15',
              letterSpacing: '-0.02em',
              textAlign: 'center',
              maxWidth: '22ch',
              margin: '0 auto 48px',
            }}
          >
            Your team is using AI. Your data is leaving with it.
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div style={{ maxWidth: '840px', margin: '0 auto' }}>
            <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#374151', marginBottom: '20px' }}>
              Client contracts. Internal strategies. Financial data. Patient records.
              Every query your team sends to a third-party AI tool is processed on
              infrastructure you do not control, stored in logs you cannot audit, and
              potentially used in ways your terms and conditions never made clear.
              The tools are useful. The risk is real. Most organisations are managing
              that tension by ignoring it.
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
