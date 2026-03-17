import Link from 'next/link'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { Button } from '@/components/ui/Button'

export function TechPartners() {
  return (
    <section className="section-pad bg-white">
      <div className="container-garium">
        <AnimatedSection>
          <div className="text-center mb-10">
            <h2 className="font-semibold text-black mb-4" style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', lineHeight: '1.2', letterSpacing: '-0.02em' }}>
              Built on open technology. No lock-in.
            </h2>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="max-w-[560px] mx-auto text-center mb-12">
            <p className="text-[#374151] text-base leading-relaxed">
              Every component of your Garium platform is built on open-source technology,
              independently audited by thousands of developers worldwide. You are never
              locked in to proprietary systems. If you ever want to move, your data
              and configuration come with you.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="text-center">
            <Link href="/contact">
              <Button variant="primary" size="lg" aria-label="Talk to us about your infrastructure">
                Talk to us about your infrastructure
              </Button>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
