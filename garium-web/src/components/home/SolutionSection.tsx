import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Server, Settings, Lock } from 'lucide-react'

const PILLARS = [
  {
    icon: Server,
    title: 'Deployed for you',
    description: 'We handle every aspect of infrastructure setup — server provisioning, model deployment, interface configuration, knowledge base connection, and access controls. You get a working platform, not a setup guide.',
  },
  {
    icon: Settings,
    title: 'Managed by us',
    description: 'Model updates, security patches, performance monitoring, and usage reporting happen automatically. When something needs attention, we handle it before you notice.',
  },
  {
    icon: Lock,
    title: 'Owned by you',
    description: 'Your data lives on dedicated infrastructure allocated to your organisation. No shared servers. No third-party model training. No data that leaves without your knowledge.',
  },
]

export function SolutionSection() {
  return (
    <section className="section-pad bg-white">
      <div className="container-garium">
        <AnimatedSection>
          <div className="max-w-[680px] mx-auto text-center mb-16">
            <SectionLabel className="mb-5 block">What we do</SectionLabel>
            <h2 className="font-semibold text-black text-balance" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: '1.15', letterSpacing: '-0.02em' }}>
              A complete AI platform, deployed on dedicated infrastructure, running entirely within your control.
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {PILLARS.map((p, i) => {
            const Icon = p.icon
            return (
              <AnimatedSection key={p.title} delay={i * 0.1}>
                <div className="flex flex-col gap-4 p-8 rounded-xl border border-[#D1D9E8] bg-[#F5F7FA] h-full hover:shadow-[0_4px_16px_0_rgba(8,28,82,0.12)] hover:scale-[1.01] transition-all duration-350">
                  <div className="w-10 h-10 rounded-lg bg-[#eef1f9] flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#072c8f]" />
                  </div>
                  <h3 className="text-lg font-semibold text-black">{p.title}</h3>
                  <p className="text-[#374151] text-base leading-relaxed">{p.description}</p>
                </div>
              </AnimatedSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}
