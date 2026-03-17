import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { SERVICES } from '@/lib/services'
import { Server, BookOpen, Monitor, Layout, Zap, Shield } from 'lucide-react'

const ICON_MAP: Record<string, React.ElementType> = {
  Server, BookOpen, Monitor, Layout, Zap, Shield,
}

export function ServiceCardGrid() {
  return (
    <section className="section-pad bg-[#F5F7FA]">
      <div className="container-garium">
        <AnimatedSection>
          <div className="text-center mb-14">
            <SectionLabel className="mb-5 block">Platform services</SectionLabel>
            <h2 className="font-semibold text-black" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: '1.15', letterSpacing: '-0.02em' }}>
              Everything included in your plan.
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((svc, i) => {
            const Icon = ICON_MAP[svc.icon] || Server
            return (
              <AnimatedSection key={svc.id} delay={i * 0.08}>
                <div className="flex flex-col gap-4 p-8 rounded-xl border border-[#D1D9E8] bg-white h-full hover:shadow-[0_4px_16px_0_rgba(8,28,82,0.12)] hover:scale-[1.01] transition-all duration-350">
                  <div className="w-10 h-10 rounded-lg bg-[#eef1f9] flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#072c8f]" />
                  </div>
                  <h3 className="text-lg font-semibold text-black">{svc.title}</h3>
                  <p className="text-[#374151] text-sm leading-relaxed">{svc.description}</p>
                </div>
              </AnimatedSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}
