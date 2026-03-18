import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { AnimatedBackground } from '@/components/ui/AnimatedBackground'

const BELIEFS = [
  {
    number: '01',
    statement: 'Your data belongs to you.',
    description: 'Not to the AI company you pay. Not to the cloud provider hosting the service. Not to a government that can compel disclosure under foreign law. To you.',
  },
  {
    number: '02',
    statement: 'Privacy should not require a legal team.',
    description: 'Private AI infrastructure should be accessible to schools, small businesses, and NGOs — not just enterprises with dedicated compliance departments.',
  },
  {
    number: '03',
    statement: 'Open-source is the right foundation.',
    description: 'Proprietary AI infrastructure creates dependency. We build on open-source software so you are never locked in to us or anyone else.',
  },
  {
    number: '04',
    statement: 'Same infrastructure standards as anywhere else.',
    description: 'We do not offer a reduced service for clients. The same GPU infrastructure, the same deployment standards, the same support applies to all clients worldwide.',
  },
]

export function BeliefsSection() {
  return (
    <section className="section-pad bg-white" style={{ position: 'relative', overflow: 'hidden' }}>
      <AnimatedBackground variant="dots" opacity={0.3} />
      <div className="container-garium" style={{ position: 'relative', zIndex: 1 }}>
        <AnimatedSection>
          <div className="text-center mb-14">
            <SectionLabel className="mb-5 block">What we believe</SectionLabel>
            <h2 className="font-semibold text-black" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: '1.15', letterSpacing: '-0.02em' }}>
              Four beliefs. No exceptions.
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6">
          {BELIEFS.map((b, i) => (
            <AnimatedSection key={b.number} delay={i * 0.1}>
              <div className="flex gap-5 p-6 rounded-xl border border-[#D1D9E8] h-full">
                <span className="text-4xl font-bold text-[#eef1f9] flex-shrink-0 leading-none">{b.number}</span>
                <div>
                  <h3 className="text-lg font-semibold text-black mb-2">{b.statement}</h3>
                  <p className="text-[#374151] text-sm leading-relaxed">{b.description}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
