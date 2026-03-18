import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { CrystalBackground } from '@/components/ui/CrystalBackground'

export function BrandStory() {
  return (
    <section className="section-pad bg-white relative overflow-hidden">
      <CrystalBackground opacity={0.04} />
      <div className="container-garium">
        <div className="grid lg:grid-cols-[2fr_3fr] gap-12 lg:gap-16 items-start">

          {/* Left: pull quote card */}
          <AnimatedSection>
            <div className="lg:sticky lg:top-24">
              <div className="rounded-2xl border border-[#D1D9E8] bg-[#F5F7FA] p-8">
                <span className="text-[6rem] leading-none font-bold text-[#D1D9E8] block -mt-4 mb-2">&ldquo;</span>
                <blockquote
                  className="text-2xl font-medium text-[#081c52] leading-snug mb-8"
                  style={{ letterSpacing: '-0.01em' }}
                >
                  Named after garri.<br />Built to last.
                </blockquote>
                <div>
                  <p className="text-xs uppercase tracking-widest text-[#072c8f] font-medium mb-1">Core principle</p>
                  <p className="text-sm text-[#374151] leading-relaxed">
                    You should not have to give your data to someone else to use powerful AI.
                  </p>
                </div>
              </div>
              <div className="mt-8 pl-2">
                <p className="text-4xl font-semibold text-[#081c52]" style={{ letterSpacing: '-0.02em' }}>
                  Now you do.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Right: brand story prose */}
          <AnimatedSection delay={0.1}>
            <div className="space-y-6 text-[#374151] text-base leading-relaxed">
              <p>
                In 2025, every major AI company was telling organisations to trust them with their data. The pitch was always the same: use our cloud, use our models, use our infrastructure — and your organisation gets access to the most powerful AI in the world.
              </p>
              <p>
                The problem nobody was talking about clearly was that &ldquo;use our infrastructure&rdquo; meant something specific. It meant your client contracts went to American servers. Your students&apos; learning data went to European data centres. Your government correspondence was processed on hardware you had never seen and would never audit. Your competitive strategy, your medical records, your financial analysis — all of it leaving your environment every time someone typed a question into a chat box.
              </p>
              <p>
                Garium is named after garri, the staple food made from cassava that sustains millions of people. Garri is not glamorous. It is practical, it is dependable, and it belongs to the people who make it and eat it. That is the model for AI infrastructure we think actually makes sense.
              </p>
              <p>
                You should not have to give your data to someone else to use powerful AI. The models exist. The infrastructure exists. The open-source ecosystem has made private deployment genuinely possible. What most organisations lack is not the technology — it is a team that will do the work of deploying and managing it properly on their behalf.
              </p>
              <p>
                That is what Garium is. A service that takes something genuinely complex — private AI infrastructure — and delivers it as a working platform your organisation can depend on. You get the capability. You keep the data. The economics are better than per-seat alternatives from the moment you have more than a handful of users.
              </p>
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  )
}
