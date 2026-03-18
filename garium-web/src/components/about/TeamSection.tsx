import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { AnimatedBackground } from '@/components/ui/AnimatedBackground'
import { MapPin } from 'lucide-react'

const TEAM = [
  {
    name: 'Olumide Gabriel',
    initials: 'OG',
    role: 'Founder',
    location: 'Lagos, Nigeria',
    bio: "Brand, product direction, and Africa market development. Deep roots in Nigeria's technology ecosystem and the originator of the Garium vision.",
  },
  {
    name: 'Anthony Akinola Muyiwa',
    initials: 'AA',
    role: 'Technical Lead',
    location: 'Manchester, United Kingdom',
    bio: 'Infrastructure deployment, AI model operations, and UK market delivery. UK Global Talent Visa holder in Digital Technology. Conqolx Technologies Company.',
  },
]

export function TeamSection() {
  return (
    <section className="section-pad bg-[#EDF0F7]" style={{ position: 'relative', overflow: 'hidden' }}>
      <AnimatedBackground variant="curves" position="center" opacity={0.3} />
      <div className="container-garium" style={{ position: 'relative', zIndex: 1 }}>
        <AnimatedSection>
          <div className="text-center mb-14">
            <p className="eyebrow mb-5 block">The team</p>
            <h2 className="font-semibold text-black text-balance" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: '1.15', letterSpacing: '-0.02em' }}>
              Two people. One clear purpose.
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 max-w-[800px] mx-auto">
          {TEAM.map((member, i) => (
            <AnimatedSection key={member.name} delay={i * 0.1}>
              <div className="bg-white border border-[#D1D9E8] rounded-xl p-6 shadow-[0_1px_3px_0_rgba(8,28,82,0.08)] hover:shadow-[0_4px_16px_0_rgba(8,28,82,0.12)] transition-shadow duration-[350ms]">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#081c52] to-[#072c8f] flex items-center justify-center mb-4">
                  <span className="text-white text-xl font-bold">{member.initials}</span>
                </div>
                <h3 className="text-lg font-semibold text-black mb-1">{member.name}</h3>
                <p className="text-sm font-medium text-[#072c8f] mb-1">{member.role}</p>
                <div className="flex items-center gap-1 text-sm text-[#4B5563] mb-3">
                  <MapPin className="w-3.5 h-3.5" aria-hidden />
                  {member.location}
                </div>
                <p className="text-sm text-[#374151] leading-relaxed">{member.bio}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
