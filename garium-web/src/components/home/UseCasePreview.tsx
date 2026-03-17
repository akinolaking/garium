import Link from 'next/link'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { GraduationCap, Building2, HeartPulse, Megaphone, Landmark, ArrowRight } from 'lucide-react'

const USE_CASES = [
  {
    icon: GraduationCap,
    sector: 'Schools and Universities',
    description: 'Students use AI for research. Teachers manage content. Neither group can see the other\'s workspace.',
    href: '/services',
  },
  {
    icon: Building2,
    sector: 'Enterprises and Corporates',
    description: 'Every department uses AI. One platform. One monthly fee. Zero per-seat charges.',
    href: '/services',
  },
  {
    icon: HeartPulse,
    sector: 'Healthcare and Finance',
    description: 'Patient data and client records stay on your infrastructure. Compliance by architecture, not by policy.',
    href: '/services',
  },
  {
    icon: Megaphone,
    sector: 'PR and Digital Agencies',
    description: 'Generate content from your client\'s own brand guidelines. Research agents work overnight. You arrive to a morning briefing.',
    href: '/services',
  },
  {
    icon: Landmark,
    sector: 'Government and NGOs',
    description: 'Citizen data and policy documents never leave your environment. Sovereignty is designed in, not added on.',
    href: '/services',
  },
]

export function UseCasePreview() {
  return (
    <section className="section-pad bg-white">
      <div className="container-garium">
        <AnimatedSection>
          <div className="text-center mb-14">
            <p className="eyebrow mb-5 block">Who we work with</p>
            <h2 className="font-semibold text-black text-balance" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: '1.15', letterSpacing: '-0.02em' }}>
              Private AI works for any organisation that handles sensitive information.
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {USE_CASES.map((uc, i) => {
            const Icon = uc.icon
            return (
              <AnimatedSection key={uc.sector} delay={i * 0.08}>
                <Link href={uc.href} className="group block h-full">
                  <div className="flex flex-col gap-3 p-6 rounded-xl border border-[#D1D9E8] bg-[#F5F7FA] h-full hover:shadow-[0_4px_16px_0_rgba(8,28,82,0.12)] hover:-translate-y-0.5 transition-all duration-[350ms]">
                    <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center border border-[#D1D9E8]">
                      <Icon className="w-5 h-5 text-[#072c8f]" aria-hidden />
                    </div>
                    <h3 className="font-semibold text-black text-base">{uc.sector}</h3>
                    <p className="text-[#374151] text-sm leading-relaxed flex-1">{uc.description}</p>
                    <span className="flex items-center gap-1 text-xs font-semibold text-[#072c8f] mt-1 group-hover:gap-2 transition-all duration-200">
                      Read the story <ArrowRight className="w-3 h-3" aria-hidden />
                    </span>
                  </div>
                </Link>
              </AnimatedSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}
