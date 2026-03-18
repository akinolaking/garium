'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { ArrowRight } from 'lucide-react'

const USE_CASES = [
  {
    id: 'schools',
    tab: 'Schools',
    eyebrow: 'Education',
    headline: 'AI that teaches without leaking.',
    story: 'Private AI for schools and universities means students benefit from AI tools without their data leaving campus infrastructure. Teachers get lesson planning tools. Students get research assistance. Exam prep stays on site.',
    ctaLabel: 'Talk to us about schools',
    outcomes: [
      'Student data stays on campus',
      'Teachers get lesson planning tools',
      'Exam prep AI never goes to the cloud',
      'Parents never share child data with US tech companies',
    ],
    suitableFor: 'Suitable for academies, universities, and edtech providers',
    testimonial: {
      quote: 'We could not touch ChatGPT with student data. Garium gave us AI capability without the compliance risk. The teachers were using it within a week.',
      author: 'Head of Digital Learning',
      org: 'Secondary school, 1,200 students',
    },
  },
  {
    id: 'enterprise',
    tab: 'Enterprise',
    eyebrow: 'Corporate',
    headline: 'Every department. One platform. One price.',
    story: 'Replace per-seat AI subscriptions with a single private platform the whole organisation uses. Finance, HR, sales, legal. One monthly fee. No per-seat charges as you grow.',
    ctaLabel: 'Talk to us about enterprise',
    outcomes: [
      'Finance teams run secure analysis',
      'HR generates policies without data leaving',
      'Sales teams get AI research tools',
      'IT never manages per-seat licensing again',
    ],
    suitableFor: 'Suitable for medium and large corporates',
    testimonial: {
      quote: 'We went from blocking every AI tool request to deploying across four departments in two weeks. The flat pricing meant adding more users cost nothing extra.',
      author: 'Chief Information Officer',
      org: 'Financial services firm, 120 staff',
    },
  },
  {
    id: 'healthcare',
    tab: 'Healthcare',
    eyebrow: 'Clinical',
    headline: 'Patient data that stays with patients.',
    story: 'Clinical infrastructure where AI tools run entirely within your environment. No patient records leaving your servers. Compliance built into the architecture, not the policy document.',
    ctaLabel: 'Talk to us about healthcare',
    outcomes: [
      'Clinical records never leave your environment',
      'GP practices reduce admin time significantly',
      'Medical data stays in-country',
      'Compliance by architecture, not by policy',
    ],
    suitableFor: 'Suitable for hospitals, GP practices, medical research',
    testimonial: {
      quote: 'Our compliance team spent six months blocking every AI tool because of data residency requirements. Garium was the first solution that passed their review in week one.',
      author: 'Operations Director',
      org: 'Private healthcare group, 80 staff',
    },
  },
  {
    id: 'agencies',
    tab: 'Agencies',
    eyebrow: 'Creative',
    headline: 'Client work that stays confidential.',
    story: 'Run AI on your own infrastructure. Client data, brand guidelines, and pitch research never leave your environment. Research agents work overnight. You arrive to a morning briefing.',
    ctaLabel: 'Talk to us about agencies',
    outcomes: [
      'Brand guidelines stay in-house',
      'Research agents work overnight',
      'Client data is never fed to third-party models',
      'Pitch decks generated from your own knowledge base',
    ],
    suitableFor: 'Suitable for PR, digital, creative, and strategy agencies',
    testimonial: {
      quote: 'We can now tell clients their briefs never leave our environment. That is not just a legal comfort. It is a new thing we can sell.',
      author: 'Managing Director',
      org: 'PR and digital agency, 5 staff',
    },
  },
  {
    id: 'government',
    tab: 'Government',
    eyebrow: 'Public sector',
    headline: 'Citizen data where it belongs.',
    story: 'AI for public sector organisations that need sovereignty by design. Policy documents processed in-country. Citizen services that never call US servers. Audit-ready from day one.',
    ctaLabel: 'Talk to us about government',
    outcomes: [
      'Policy documents processed in-country',
      'Citizen services AI never calls US servers',
      'Sovereignty designed in',
      'Audit-ready infrastructure by default',
    ],
    suitableFor: 'Suitable for national and local government, NGOs, regulators',
    testimonial: {
      quote: 'The infrastructure question was always the blocker. Once that was resolved, adoption across departments was straightforward.',
      author: 'Digital Transformation Lead',
      org: 'Public sector body, 400 staff',
    },
  },
  {
    id: 'legal',
    tab: 'Legal',
    eyebrow: 'Law',
    headline: 'Advice that never leaves the building.',
    story: 'Legal privilege preserved by architecture, not by policy. Client matter files stay on your servers. Due diligence runs in your environment. Associates get AI tools without compliance exposure.',
    ctaLabel: 'Talk to us about legal',
    outcomes: [
      'Client matter files never go to third-party AI',
      'Due diligence runs in your environment',
      'Privilege is preserved by architecture',
      'Associates get AI tools without compliance exposure',
    ],
    suitableFor: 'Suitable for law firms, chambers, legal departments',
    testimonial: {
      quote: 'The question our senior partners asked was simple: does our client data stay on our servers? With Garium, the answer is yes, and that closed the conversation.',
      author: 'Head of Knowledge Management',
      org: 'Mid-size law firm, 60 fee earners',
    },
  },
  {
    id: 'technology',
    tab: 'Technology',
    eyebrow: 'Tech',
    headline: 'Infrastructure for builders.',
    story: 'Private AI for software teams that want capable tools without vendor lock-in or usage costs. Internal knowledge bases stay internal. Developer productivity tools on your own infrastructure.',
    ctaLabel: 'Talk to us about technology',
    outcomes: [
      'AI tools for your own product development',
      'Internal knowledge bases stay internal',
      'Developer productivity tools on private infrastructure',
      'No usage-based pricing surprises',
    ],
    suitableFor: 'Suitable for software companies, SaaS businesses, tech teams',
    testimonial: {
      quote: 'We had five developers on ChatGPT Plus. Garium costs less, runs privately, and the API access means we have embedded it into our internal tools. We will not go back.',
      author: 'VP of Engineering',
      org: 'SaaS company, 35 staff',
    },
  },
]

export function UseCasePreview() {
  const [activeId, setActiveId] = useState('schools')
  const [transitioning, setTransitioning] = useState(false)

  const current = USE_CASES.find(u => u.id === activeId)!

  const handleTabChange = (id: string) => {
    if (id === activeId) return
    setTransitioning(true)
    setTimeout(() => {
      setActiveId(id)
      setTransitioning(false)
    }, 180)
  }

  return (
    <section className="section-pad bg-white">
      <div className="container-garium">
        <AnimatedSection>
          <div className="text-center mb-12">
            <p className="eyebrow mb-5 block">Who we work with</p>
            <h2 className="text-black text-balance" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: '1.15', letterSpacing: '-0.02em' }}>
              If it matters, it stays private.
            </h2>
          </div>
        </AnimatedSection>

        {/* Pill tab bar */}
        <div
          style={{
            display: 'flex',
            gap: '4px',
            flexWrap: 'wrap',
            padding: '6px',
            background: 'rgba(8,28,82,0.04)',
            borderRadius: '14px',
            border: '1px solid rgba(8,28,82,0.08)',
            marginBottom: '48px',
            width: 'fit-content',
          }}
          role="tablist"
        >
          {USE_CASES.map(uc => (
            <button
              key={uc.id}
              role="tab"
              aria-selected={activeId === uc.id}
              onClick={() => handleTabChange(uc.id)}
              style={{
                padding: '8px 16px',
                borderRadius: '10px',
                border: 'none',
                fontSize: '0.875rem',
                fontWeight: activeId === uc.id ? 500 : 400,
                cursor: 'pointer',
                transition: 'all 0.15s ease',
                background: activeId === uc.id ? '#ffffff' : 'transparent',
                color: activeId === uc.id ? '#081c52' : '#6b7280',
                boxShadow: activeId === uc.id ? '0 1px 4px rgba(8,28,82,0.12)' : 'none',
              }}
            >
              {uc.tab}
            </button>
          ))}
        </div>

        {/* Tab panel with smooth transition */}
        <div
          role="tabpanel"
          style={{
            opacity: transitioning ? 0 : 1,
            transform: transitioning ? 'translateY(8px)' : 'translateY(0)',
            transition: 'opacity 0.2s ease, transform 0.2s ease',
          }}
        >
          <div className="grid md:grid-cols-2 gap-10 items-start">
            {/* Left: story */}
            <div>
              <p className="text-xs uppercase tracking-widest text-[#072c8f] font-medium mb-3">{current.eyebrow}</p>
              <h3 className="text-2xl font-semibold text-black mb-4" style={{ letterSpacing: '-0.01em' }}>
                {current.headline}
              </h3>
              <p className="text-[#374151] text-base leading-relaxed mb-6">
                {current.story}
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#072c8f] hover:gap-3 transition-all duration-200"
              >
                {current.ctaLabel} <ArrowRight className="w-4 h-4" aria-hidden />
              </Link>
            </div>

            {/* Right: outcomes card + testimonial */}
            <div className="space-y-4">
              <div
                style={{
                  background: '#ffffff',
                  border: '1px solid rgba(8,28,82,0.1)',
                  borderRadius: '16px',
                  padding: '24px 28px',
                  boxShadow: '0 4px 24px rgba(8,28,82,0.08), 0 1px 4px rgba(8,28,82,0.04)',
                }}
              >
                <p style={{ fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#072c8f', marginBottom: '16px' }}>
                  Outcomes
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {current.outcomes.map(o => (
                    <li key={o} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <span style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'rgba(7,44,143,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '1px' }}>
                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                          <path d="M1 4l2.5 2.5L9 1" stroke="#072c8f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span style={{ fontSize: '0.9375rem', color: '#1a1a2e', lineHeight: 1.5 }}>{o}</span>
                    </li>
                  ))}
                </ul>
                <p style={{ fontSize: '0.8125rem', color: '#9ca3af', marginTop: '16px', paddingTop: '16px', borderTop: '1px solid rgba(8,28,82,0.06)' }}>
                  {current.suitableFor}
                </p>
              </div>

              {/* Testimonial */}
              <div style={{ background: '#f9fafb', border: '1px solid rgba(8,28,82,0.07)', borderRadius: '14px', padding: '20px 24px' }}>
                <p style={{ fontSize: '0.9375rem', lineHeight: 1.6, color: '#374151', fontStyle: 'italic', marginBottom: '14px' }}>
                  &ldquo;{current.testimonial.quote}&rdquo;
                </p>
                <p style={{ fontSize: '0.8125rem', fontWeight: 500, color: '#081c52' }}>{current.testimonial.author}</p>
                <p style={{ fontSize: '0.75rem', color: '#9ca3af' }}>{current.testimonial.org}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
