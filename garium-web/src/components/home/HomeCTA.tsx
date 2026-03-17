import Link from 'next/link'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { Button } from '@/components/ui/Button'

export function HomeCTA() {
  return (
    <section className="section-pad bg-gradient-to-br from-black via-[#081c52] to-[#072c8f] bg-crystal">
      <div className="container-garium">
        <AnimatedSection>
          <div className="max-w-[640px] mx-auto text-center">
            <h2 className="font-semibold text-white text-balance mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: '1.15', letterSpacing: '-0.02em' }}>
              The organisations that act first will have the clearest advantage.
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              Private AI is not theoretical. The infrastructure exists. The models are ready. The question is whether your organisation will control them, or rely on someone else to.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  aria-label="Book a consultation"
                  className="border-white text-white hover:bg-white hover:text-[#081c52]"
                >
                  Book a consultation
                </Button>
              </Link>
              <Link href="/pricing">
                <Button
                  variant="ghost"
                  size="lg"
                  aria-label="See pricing"
                  className="text-white/70 hover:text-white hover:bg-white/10"
                >
                  See pricing
                </Button>
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
