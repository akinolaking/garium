import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { Shield, Globe, Cpu } from 'lucide-react'

const TECH_PARTNERS = ['Ollama', 'Open WebUI', 'LibreChat', 'ChromaDB', 'Grafana', 'Docker', 'NVIDIA']

const TRUST_POINTS = [
  {
    icon: Cpu,
    title: 'Enterprise GPU infrastructure',
    description: 'NVIDIA L40S, H100, and H200 GPUs. Infrastructure hosted in European data centres.',
  },
  {
    icon: Globe,
    title: 'UK and Nigeria presence',
    description: 'Technical delivery from Manchester. Founder operations from Lagos. We serve both markets directly.',
  },
  {
    icon: Shield,
    title: 'Open-source foundation',
    description: 'Built on proven open-source software. No vendor lock-in. You own your data and your platform.',
  },
]

export function TrustSection() {
  return (
    <section className="section-pad bg-[#F5F7FA]">
      <div className="container-garium">
        <AnimatedSection>
          <div className="text-center mb-14">
            <h2 className="font-semibold text-black mb-4" style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', lineHeight: '1.2', letterSpacing: '-0.02em' }}>
              Built on open technology. No lock-in.
            </h2>
            <p className="text-[#6B7280] text-lg max-w-[520px] mx-auto">
              Every component of your platform is open-source. You are never dependent on a single vendor.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {TECH_PARTNERS.map(tech => (
              <span
                key={tech}
                className="px-4 py-2 rounded-lg border border-[#D1D9E8] text-sm font-medium text-[#081c52] bg-white"
              >
                {tech}
              </span>
            ))}
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {TRUST_POINTS.map((p, i) => {
            const Icon = p.icon
            return (
              <AnimatedSection key={p.title} delay={i * 0.1}>
                <div className="flex flex-col gap-3 p-6 rounded-xl border border-[#D1D9E8] bg-white">
                  <div className="w-10 h-10 rounded-lg bg-[#eef1f9] flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#072c8f]" />
                  </div>
                  <h3 className="font-semibold text-black">{p.title}</h3>
                  <p className="text-[#6B7280] text-sm leading-relaxed">{p.description}</p>
                </div>
              </AnimatedSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}
