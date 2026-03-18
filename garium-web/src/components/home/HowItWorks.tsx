import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { CrystalBackground } from '@/components/ui/CrystalBackground'
import { AnimatedBackground } from '@/components/ui/AnimatedBackground'

const STEPS = [
  {
    number: '01',
    title: 'We understand your organisation',
    description: 'A focused consultation where we learn about your team structure, data sensitivity, existing workflows, and what you actually need AI to do. We design a deployment plan specific to your use case.',
  },
  {
    number: '02',
    title: 'We deploy your platform',
    description: 'Infrastructure provisioned. Models configured. Knowledge base loaded. Interfaces set up. Access controls in place. Most deployments complete within 24 to 72 hours of contract signing.',
  },
  {
    number: '03',
    title: 'Your team starts working differently',
    description: 'Your team accesses private AI through a clean browser interface. No training required. We handle onboarding. The platform is available from day one.',
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section-pad bg-[#EDF0F7] relative overflow-hidden">
      <CrystalBackground opacity={0.04} />
      <AnimatedBackground variant="dots" opacity={0.4} />
      <div className="container-garium">
        <AnimatedSection>
          <div className="text-center mb-16">
            <p className="eyebrow mb-5 block">How it works</p>
            <h2 className="text-black text-balance" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: '1.15', letterSpacing: '-0.02em' }}>
              Live in no time. Running forever.
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {STEPS.map((step, i) => (
            <AnimatedSection key={step.number} delay={i * 0.15}>
              <div className="bg-white border border-[#D1D9E8] rounded-xl p-8 h-full">
                <span className="text-5xl font-bold text-[#081c52] block mb-5 leading-none">{step.number}</span>
                <h3 className="text-lg font-semibold text-black mb-3">{step.title}</h3>
                <p className="text-[#374151] text-base leading-relaxed">{step.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
