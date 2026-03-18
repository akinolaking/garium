import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { AnimatedBackground } from '@/components/ui/AnimatedBackground'

export function VisionMission() {
  return (
    <section className="section-pad bg-[#EDF0F7]" style={{ position: 'relative', overflow: 'hidden' }}>
      <AnimatedBackground variant="rings" opacity={0.4} />
      <div className="container-garium" style={{ position: 'relative', zIndex: 1 }}>
        <AnimatedSection>
          <div className="text-center mb-14">
            <SectionLabel className="mb-5 block">What drives us</SectionLabel>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 max-w-[900px] mx-auto">
          <AnimatedSection delay={0}>
            <div className="p-8 rounded-xl bg-white border border-[#D1D9E8]">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#6B7280] mb-4">Vision</p>
              <h3 className="text-xl font-semibold text-black mb-4 text-balance">
                A world where every organisation controls its own AI, regardless of where it operates.
              </h3>
              <p className="text-[#374151] text-base leading-relaxed">
                Data sovereignty should not be a privilege available only to large enterprises with dedicated engineering teams. It should be the default for any organisation that wants it.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="p-8 rounded-xl bg-white border border-[#D1D9E8]">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#6B7280] mb-4">Mission</p>
              <h3 className="text-xl font-semibold text-black mb-4 text-balance">
                To deploy and manage private AI infrastructure that organisations in Africa and the UK can depend on.
              </h3>
              <p className="text-[#374151] text-base leading-relaxed">
                We do the technical work. We manage the complexity. We make private AI as easy to use as any consumer tool — without any of the data risk.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
