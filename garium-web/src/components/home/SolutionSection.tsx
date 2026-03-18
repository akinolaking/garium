import Link from 'next/link'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { CrystalBackground } from '@/components/ui/CrystalBackground'
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
    <section className="section-pad bg-white relative overflow-hidden">
      <CrystalBackground opacity={0.04} />
      <div className="container-garium">
        <AnimatedSection>
          <div className="max-w-[680px] mx-auto text-center mb-14">
            <p className="eyebrow mb-5 block">What we do</p>
            <h2 className="font-semibold text-black text-balance" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: '1.15', letterSpacing: '-0.02em' }}>
              Everything they need. Nothing that leaves.
            </h2>
            <p className="text-[#374151] text-lg leading-relaxed mt-5">
              Deploy a private AI platform for your organisation. Your team gets the same capability as the shared tools. Your data stays inside your environment. You pay a flat monthly fee regardless of how many people use it.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {PILLARS.map((p, i) => {
            const Icon = p.icon
            return (
              <AnimatedSection key={p.title} delay={i * 0.1}>
                <div className="flex flex-col gap-4 p-8 rounded-xl border border-[#D1D9E8] bg-[#F5F7FA] h-full hover:shadow-[0_4px_16px_0_rgba(8,28,82,0.12)] hover:scale-[1.01] transition-all duration-[350ms]">
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center border border-[#D1D9E8]">
                    <Icon className="w-5 h-5 text-[#072c8f]" aria-hidden />
                  </div>
                  <h3 className="text-lg font-semibold text-black">{p.title}</h3>
                  <p className="text-[#374151] text-base leading-relaxed">{p.description}</p>
                </div>
              </AnimatedSection>
            )
          })}
        </div>

        <AnimatedSection delay={0.4}>
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="text-sm font-semibold text-[#072c8f] hover:underline inline-flex items-center gap-1"
            >
              See all platform services →
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
