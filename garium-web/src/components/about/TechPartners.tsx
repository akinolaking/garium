import Link from 'next/link'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { Button } from '@/components/ui/Button'

const TECH_STACK = ['Ollama', 'Open WebUI', 'LibreChat', 'ChromaDB', 'Grafana', 'Docker', 'NVIDIA']

export function TechPartners() {
  return (
    <section className="section-pad bg-white">
      <div className="container-garium">
        <AnimatedSection>
          <div className="text-center mb-10">
            <h2 className="font-semibold text-black mb-4" style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', lineHeight: '1.2', letterSpacing: '-0.02em' }}>
              Built on open technology. No lock-in.
            </h2>
            <p className="text-[#6B7280] text-lg max-w-[520px] mx-auto">
              Every tool we use is open-source and widely audited. You are never dependent on proprietary systems you cannot inspect or migrate away from.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {TECH_STACK.map(tech => (
              <span
                key={tech}
                className="px-5 py-2.5 rounded-lg border border-[#D1D9E8] text-sm font-medium text-[#081c52] bg-[#F5F7FA] hover:bg-[#eef1f9] transition-colors duration-150"
              >
                {tech}
              </span>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="text-center">
            <Link href="/contact">
              <Button variant="primary" size="lg" aria-label="Book a consultation">
                Talk to us about your infrastructure
              </Button>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
