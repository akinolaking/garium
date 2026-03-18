import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { Shield, Globe, RefreshCw } from 'lucide-react'

const TRUST_POINTS = [
  {
    icon: Shield,
    title: 'Your data never leaves',
    body: 'Dedicated infrastructure allocated to your organisation. No shared servers. No third-party processing. Your information stays inside your environment.',
  },
  {
    icon: Globe,
    title: 'Deployed anywhere your organisation needs.',
    body: 'Cloud infrastructure across multiple regions. Your data stays within your chosen jurisdiction. We work wherever your organisation works.',
  },
  {
    icon: RefreshCw,
    title: 'We manage everything',
    body: 'AI model updates, security patches, uptime monitoring, and monthly reporting. You use it. We run it. You are not the first to know about a problem.',
  },
]

export function TrustSection() {
  return (
    <section className="section-pad bg-[#F5F7FA]">
      <div className="container-garium">
        <AnimatedSection>
          <div className="text-center mb-14">
            <h2 className="text-black mb-4" style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', lineHeight: '1.2', letterSpacing: '-0.02em' }}>
              Built on open technology. No lock-in.
            </h2>
            <p className="text-[#374151] text-lg max-w-[560px] mx-auto leading-relaxed">
              Every component of your Garium platform is built on open-source technology, independently audited by thousands of developers worldwide. You are never locked in. If you ever want to move, your data and configuration come with you.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {TRUST_POINTS.map((p, i) => {
            const Icon = p.icon
            return (
              <AnimatedSection key={p.title} delay={i * 0.1}>
                <div className="flex flex-col gap-3 p-6 rounded-xl border border-[#D1D9E8] bg-white">
                  <div className="w-10 h-10 rounded-lg bg-[#eef1f9] flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#072c8f]" aria-hidden />
                  </div>
                  <h3 className="font-semibold text-black">{p.title}</h3>
                  <p className="text-[#374151] text-sm leading-relaxed">{p.body}</p>
                </div>
              </AnimatedSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}
