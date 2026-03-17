import { AnimatedSection } from '@/components/ui/AnimatedSection'

export function BrandStory() {
  return (
    <section className="section-pad bg-white">
      <div className="container-garium">
        <div className="max-w-[720px] mx-auto">
          <AnimatedSection>
            <div className="relative mb-12">
              <span className="absolute -top-8 -left-4 text-[10rem] leading-none font-bold text-[#eef1f9] select-none pointer-events-none">&ldquo;</span>
              <blockquote className="relative text-2xl font-semibold text-[#081c52] leading-relaxed">
                Named after garri. Built on the same principle.
              </blockquote>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="prose prose-lg max-w-none space-y-6 text-[#374151] leading-relaxed">
              <p>
                In 2025, every major AI company was telling organisations across Africa and the developing world to trust them with their data. The pitch was always the same: use our cloud, use our models, use our infrastructure — and your organisation gets access to the most powerful AI in the world.
              </p>
              <p>
                The problem nobody was talking about clearly was that &ldquo;use our infrastructure&rdquo; meant something specific. It meant your client contracts went to American servers. Your students&apos; learning data went to European data centres. Your government correspondence was processed on hardware you had never seen and would never audit. Your competitive strategy, your medical records, your financial analysis — all of it leaving your environment every time someone typed a question into a chat box.
              </p>
              <p>
                Garium is named after garri, the staple food made from cassava that sustains millions of people across West Africa. Garri is not glamorous. It is practical, it is dependable, and it belongs to the people who make it and eat it. That is the model for AI infrastructure we think actually makes sense.
              </p>
              <p>
                You should not have to give your data to someone else to use powerful AI. The models exist. The infrastructure exists. The open-source ecosystem has made private deployment genuinely possible. What most organisations lack is not the technology — it is a team that will do the work of deploying and managing it properly on their behalf.
              </p>
              <p>
                That is what Garium is. A service that takes something genuinely complex — private AI infrastructure — and delivers it as a working platform your organisation can depend on. You get the capability. You keep the data. The economics are better than per-seat alternatives from the moment you have more than a handful of users.
              </p>
              <p>
                We operate across two markets: Nigeria and the United Kingdom. We understand both. The challenges are different but the core question is the same — why would you give your most sensitive work to someone else&apos;s machine if you had an alternative?
              </p>
              <p>
                Now you do.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
