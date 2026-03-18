import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { MapPin, Mail } from 'lucide-react'

const LOCATIONS = [
  {
    city: 'Manchester',
    country: 'United Kingdom',
    role: 'Technical delivery, UK market',
    address: 'Manchester, England',
    email: 'hello@garium.co',
  },
  {
    city: 'Lagos',
    country: 'Nigeria',
    role: 'Founder office, Africa market',
    address: 'Lagos, Nigeria',
    email: 'hello@garium.co',
  },
]

export function LocationCards() {
  return (
    <section className="section-pad bg-[#EDF0F7]">
      <div className="container-garium">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="font-semibold text-black mb-4" style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', lineHeight: '1.2', letterSpacing: '-0.02em' }}>
              Two offices. One team.
            </h2>
            <p className="text-[#6B7280] text-lg max-w-[480px] mx-auto">
              We operate across the UK and Nigeria so we can serve both markets properly — not as an afterthought.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6 max-w-[800px] mx-auto">
          {LOCATIONS.map((loc, i) => (
            <AnimatedSection key={loc.city} delay={i * 0.1}>
              <div className="p-6 rounded-xl border border-[#D1D9E8] bg-white">
                <div className="flex items-start gap-3 mb-5">
                  <div className="w-9 h-9 rounded-lg bg-[#eef1f9] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-[#072c8f]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black text-lg">{loc.city}</h3>
                    <p className="text-[#6B7280] text-sm">{loc.country}</p>
                  </div>
                </div>

                <p className="text-xs font-semibold uppercase tracking-widest text-[#6B7280] mb-4">{loc.role}</p>

                <div className="space-y-2.5">
                  <div className="flex items-center gap-2 text-sm text-[#374151]">
                    <MapPin className="w-3.5 h-3.5 text-[#6B7280]" />
                    {loc.address}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#374151]">
                    <Mail className="w-3.5 h-3.5 text-[#6B7280]" />
                    <a href={`mailto:${loc.email}`} className="hover:text-[#072c8f] transition-colors">Send us a mail</a>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.2}>
          <p className="text-center text-sm text-[#6B7280] mt-10">
            We do not do hard selling. If Garium is not the right fit, we will tell you.
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
