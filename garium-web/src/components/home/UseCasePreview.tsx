import Link from 'next/link'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { GraduationCap, Building2, HeartPulse, Megaphone, Landmark, ArrowRight } from 'lucide-react'

const USE_CASES = [
  {
    icon: GraduationCap,
    sector: 'Schools and Universities',
    description: 'Private AI for students and teachers that meets child data protection requirements.',
    href: '/services',
  },
  {
    icon: Building2,
    sector: 'Enterprises and Corporates',
    description: 'Organisation-wide AI deployment with department-separated knowledge bases.',
    href: '/services',
  },
  {
    icon: HeartPulse,
    sector: 'Healthcare and Finance',
    description: 'Regulated-industry AI that never touches shared infrastructure.',
    href: '/services',
  },
  {
    icon: Megaphone,
    sector: 'PR and Digital Agencies',
    description: 'Client-confidential AI with separate knowledge bases per campaign.',
    href: '/services',
  },
  {
    icon: Landmark,
    sector: 'Government and NGOs',
    description: 'Sovereign AI infrastructure for public-sector data sovereignty requirements.',
    href: '/services',
  },
]

export function UseCasePreview() {
  return (
    <section className="section-pad bg-white">
      <div className="container-garium">
        <AnimatedSection>
          <div className="text-center mb-14">
            <SectionLabel className="mb-5 block">Who we work with</SectionLabel>
            <h2 className="font-semibold text-black" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: '1.15', letterSpacing: '-0.02em' }}>
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
                  <div className="flex flex-col gap-3 p-6 rounded-xl border border-[#D1D9E8] h-full hover:shadow-[0_4px_16px_0_rgba(8,28,82,0.12)] hover:-translate-y-0.5 transition-all duration-350">
                    <div className="w-10 h-10 rounded-lg bg-[#eef1f9] flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#072c8f]" />
                    </div>
                    <h3 className="font-semibold text-black text-base">{uc.sector}</h3>
                    <p className="text-[#6B7280] text-sm leading-relaxed flex-1">{uc.description}</p>
                    <span className="flex items-center gap-1 text-xs font-medium text-[#072c8f] mt-1 group-hover:gap-2 transition-all duration-200">
                      Read the story <ArrowRight className="w-3 h-3" />
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
