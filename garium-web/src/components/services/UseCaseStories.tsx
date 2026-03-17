import Link from 'next/link'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { Button } from '@/components/ui/Button'

const STORIES = [
  {
    eyebrow: 'Secondary school — 180 students, 22 teachers — Plan: Seed',
    headline: 'The school wanted AI for learning. Not data risk.',
    body: [
      'The school needed AI for students and teachers. Consumer tools were off the table — child data protection requirements ruled them out immediately.',
      'Teachers needed a tool for lesson planning and content generation. Students needed a research assistant. Both groups needed different access levels to the same infrastructure.',
      'Garium deployed a clean, browser-based research interface at the school\'s subdomain. Students access it without accounts or any software installation. It draws from a private knowledge base of curriculum materials, textbooks, and approved resources.',
      'Teachers manage content from a private workstation only they can access. Nine days from contract signing to go-live.',
    ],
  },
  {
    eyebrow: 'PR and digital agency — 5 staff, 8 campaigns — Plan: Build',
    headline: 'Five people running eight campaigns. One platform they actually control.',
    body: [
      'The agency had a problem that is common in creative businesses. Every staff member was using AI tools. No two people were using the same one.',
      'Client briefs, campaign strategies, and media contacts were being typed into consumer tools with no regard for confidentiality. When a client asked whether their campaign strategy had ever been processed by OpenAI, the agency had no good answer.',
      'Garium built them a single private platform. Each client gets their own knowledge base containing their brand guidelines, past campaigns, tone of voice documents, and media lists. Copywriters generate content directly from those materials.',
      'Account managers use an automated research agent that monitors media coverage and qualifies leads overnight. A morning briefing arrives in the team\'s group chat before 8am.',
    ],
  },
]

export function UseCaseStories() {
  return (
    <section className="section-pad bg-[#EDF0F7]">
      <div className="container-garium">
        <AnimatedSection>
          <div className="text-center mb-16">
            <p className="eyebrow mb-5 block">Real deployments</p>
            <h2 className="font-semibold text-black text-balance" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: '1.15', letterSpacing: '-0.02em' }}>
              How organisations use Garium.
            </h2>
          </div>
        </AnimatedSection>

        <div className="space-y-16">
          {STORIES.map((story, i) => (
            <AnimatedSection key={i} delay={0.1}>
              <div className={`grid lg:grid-cols-2 gap-10 items-start`}>
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <p className="eyebrow mb-4">{story.eyebrow}</p>
                  <h3 className="text-2xl font-semibold text-black mb-6 text-balance">{story.headline}</h3>
                  <Link href="/pricing">
                    <Button variant="outline" size="md" aria-label="See our plans">
                      See our plans
                    </Button>
                  </Link>
                </div>
                <div className={`space-y-4 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  {story.body.map((para, j) => (
                    <p key={j} className="text-[#374151] text-base leading-relaxed">{para}</p>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
