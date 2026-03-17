import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionLabel } from '@/components/ui/SectionLabel'

export function ProblemSection() {
  return (
    <section className="section-pad bg-[#F5F7FA]">
      <div className="container-garium">
        <AnimatedSection>
          <div className="max-w-[800px] mx-auto text-center">
            <SectionLabel className="mb-5 block">The real cost of shared AI</SectionLabel>
            <h2 className="font-semibold text-black mb-8 text-balance" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: '1.15', letterSpacing: '-0.02em' }}>
              Your team is using AI. Your data is leaving with it.
            </h2>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="max-w-[680px] mx-auto text-center">
            <p className="text-[#374151] text-lg leading-relaxed mb-6">
              Client contracts. Internal strategies. Financial data. Patient records. Legal advice. Every query your team sends to a third-party AI tool is processed on infrastructure you do not control, stored in logs you cannot audit, and potentially used in ways your terms and conditions never made clear.
            </p>
            <p className="text-[#374151] text-lg leading-relaxed mb-10">
              The tools are useful. The risk is real. Most organisations are managing that tension badly — by ignoring it.
            </p>
            <p className="text-xl font-semibold text-black text-balance">
              Private AI is not a future investment. It is a present risk decision.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
