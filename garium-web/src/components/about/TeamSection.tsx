import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { TEAM } from '@/lib/team'
import { MapPin } from 'lucide-react'

export function TeamSection() {
  return (
    <section className="section-pad bg-[#EDF0F7]">
      <div className="container-garium">
        <AnimatedSection>
          <div className="text-center mb-14">
            <SectionLabel className="mb-5 block">The team</SectionLabel>
            <h2 className="font-semibold text-black" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: '1.15', letterSpacing: '-0.02em' }}>
              Two people. One clear purpose.
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 max-w-[800px] mx-auto">
          {TEAM.map((member, i) => (
            <AnimatedSection key={member.id} delay={i * 0.1}>
              <div className="flex flex-col gap-5 p-8 rounded-xl bg-white border border-[#D1D9E8]">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#081c52] to-[#072c8f] flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-lg font-bold">{member.initials}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-black text-lg">{member.name}</h3>
                    <p className="text-[#072c8f] text-sm font-medium">{member.role}</p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-[#6B7280]">
                  <MapPin className="w-3.5 h-3.5" />
                  {member.location}
                </div>

                <p className="text-[#374151] text-sm leading-relaxed">{member.bio}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
