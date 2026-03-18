'use client'

import { useState } from 'react'
import { AnimatedBackground } from '@/components/ui/AnimatedBackground'

interface UseCase {
  id: string
  title: string
  description: string
  stat1: { value: string; label: string }
  stat2: { value: string; label: string }
  stat3: { value: string; label: string }
  quote: string
  quoteAuthor: string
  quoteDetail: string
}

const USE_CASES: UseCase[] = [
  {
    id: 'schools',
    title: 'Schools and Academies',
    description: 'Schools cannot send student data to consumer AI tools. Garium deploys a private research assistant and lesson planning tool on infrastructure the school controls. Students get a clean browser interface. Teachers get a separate workstation with content management access. Child data never leaves the school environment.',
    stat1: { value: '9 days', label: 'Average time to go-live' },
    stat2: { value: '100%', label: 'Data stays on-premises' },
    stat3: { value: 'Unlimited', label: 'Student and staff users' },
    quote: 'The teachers were using it within a week. We could not have done this with any other AI provider.',
    quoteAuthor: 'Dr. Funmilayo Okafor',
    quoteDetail: 'Head of Digital Learning, Thornfield Academy',
  },
  {
    id: 'enterprise',
    title: 'SMEs and Enterprises',
    description: 'Growing organisations face a choice between expensive per-seat tools or complex self-managed infrastructure. Garium gives teams a fully managed private AI platform at a flat monthly fee. Finance, HR, operations, and product teams all use the same platform with appropriate access controls. Scaling from 10 to 100 users costs nothing extra.',
    stat1: { value: 'Flat fee', label: 'Regardless of team size' },
    stat2: { value: '24-72h', label: 'Deployment time' },
    stat3: { value: '50%+', label: 'Cost saving vs per-seat tools' },
    quote: 'We went from blocking every AI tool request to deploying across four departments in two weeks.',
    quoteAuthor: 'Marcus Adeyemi',
    quoteDetail: 'Chief Information Officer, Nexbridge Capital',
  },
  {
    id: 'healthcare',
    title: 'Healthcare Providers',
    description: 'Healthcare organisations face strict data residency requirements. Patient records, clinical notes, and administrative data cannot go to third-party AI clouds. Garium deploys within existing infrastructure or on dedicated servers allocated exclusively to the organisation. Clinical teams get AI capability. Compliance teams get documented data sovereignty.',
    stat1: { value: 'Zero', label: 'Data leaves your servers' },
    stat2: { value: 'Week 1', label: 'Passed compliance review' },
    stat3: { value: 'Full audit', label: 'Trail available' },
    quote: 'Garium was the first solution that passed our compliance review in week one.',
    quoteAuthor: 'Dr. Amara Nwosu',
    quoteDetail: 'Director of Operations, Silvergate Health',
  },
  {
    id: 'agencies',
    title: 'Creative and Professional Agencies',
    description: 'Agencies handle confidential client briefs, campaign strategies, and proprietary research. Consumer AI tools create liability when client data is processed on external servers. Garium gives agencies a private platform where each client has their own knowledge base containing brand guidelines, past campaigns, and approved materials. Copywriters generate on-brand content. Account managers automate research.',
    stat1: { value: 'Per-client', label: 'Knowledge bases' },
    stat2: { value: '8am', label: 'Automated morning briefings' },
    stat3: { value: 'API', label: 'Access included in all plans' },
    quote: 'We can now tell clients their briefs never leave our environment. That is a new thing we can sell.',
    quoteAuthor: 'James Whitmore',
    quoteDetail: 'Managing Director, Meridian Communications',
  },
  {
    id: 'legal',
    title: 'Legal and Financial Services',
    description: 'Law firms and financial services organisations operate under strict confidentiality obligations. Sending client matters, financial models, or legal strategy through external AI systems creates professional liability. Garium provides a private deployment where fee earners can use AI for research, drafting, and analysis without any data leaving the firm. The answer to client questions about data handling is simply yes.',
    stat1: { value: 'Zero', label: 'Third-party data access' },
    stat2: { value: 'Full', label: 'Confidentiality maintained' },
    stat3: { value: 'Dedicated', label: 'Infrastructure per firm' },
    quote: 'Does our client data stay on our servers? With Garium, the answer is yes, and that closed the conversation.',
    quoteAuthor: 'Richard Okonkwo',
    quoteDetail: 'Head of Knowledge Management, Halcyon Legal',
  },
]

export function ServicesUseCaseAccordion() {
  const [activeId, setActiveId] = useState<string>(USE_CASES[0].id)

  const active = USE_CASES.find(u => u.id === activeId) ?? USE_CASES[0]

  return (
    <section style={{ padding: '80px 0', background: '#F5F7FA', position: 'relative', overflow: 'hidden' }}>
      <AnimatedBackground variant="curves" position="right" opacity={0.3} />
      <div className="container-garium">
        <div style={{ marginBottom: '56px' }}>
          <p className="eyebrow" style={{ display: 'block', marginBottom: '20px' }}>Use cases</p>
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              maxWidth: '24ch',
            }}
          >
            How organisations use Garium.
          </h2>
        </div>

        <div
          className="grid grid-cols-1 lg:grid-cols-[1fr_420px]"
          style={{ gap: '24px', position: 'relative', zIndex: 1 }}
        >

          {/* Left: accordion list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            {USE_CASES.map((uc) => {
              const isOpen = uc.id === activeId
              return (
                <div
                  key={uc.id}
                  style={{
                    background: isOpen ? '#ffffff' : 'transparent',
                    border: isOpen ? '1px solid rgba(8,28,82,0.12)' : '1px solid transparent',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    transition: 'all 0.25s ease',
                  }}
                >
                  <button
                    onClick={() => setActiveId(uc.id)}
                    aria-expanded={isOpen}
                    style={{
                      width: '100%',
                      textAlign: 'left',
                      padding: '20px 24px',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '16px',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '1.0625rem',
                        fontWeight: isOpen ? 500 : 400,
                        color: isOpen ? '#081c52' : '#374151',
                        transition: 'color 0.2s ease',
                      }}
                    >
                      {uc.title}
                    </span>
                    <span
                      style={{
                        width: '20px',
                        height: '20px',
                        flexShrink: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#081c52',
                        transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                        transition: 'transform 0.25s ease',
                      }}
                      aria-hidden
                    >
                      +
                    </span>
                  </button>

                  <div
                    style={{
                      maxHeight: isOpen ? '400px' : '0',
                      overflow: 'hidden',
                      transition: 'max-height 0.35s ease',
                    }}
                  >
                    <div style={{ padding: '0 24px 16px' }}>
                      <p style={{ fontSize: '0.9375rem', lineHeight: 1.7, color: '#374151', marginBottom: '12px' }}>
                        {uc.description}
                      </p>
                      <a
                        href={`/contact?sector=${uc.id}`}
                        style={{ fontSize: '0.875rem', color: '#072c8f', fontWeight: 500, textDecoration: 'none' }}
                      >
                        Talk to us about {uc.title.split(' ')[0].toLowerCase()} →
                      </a>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Right: sticky stat card */}
          <div className="lg:sticky" style={{ top: '80px', alignSelf: 'start' }}>
            <div
              style={{
                background: '#ffffff',
                border: '1px solid rgba(8,28,82,0.1)',
                borderRadius: '16px',
                padding: '32px',
                boxShadow: '0 4px 24px rgba(8,28,82,0.08)',
              }}
            >
              <p
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#072c8f',
                  marginBottom: '20px',
                }}
              >
                {active.title}
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px', marginBottom: '28px' }}>
                {[active.stat1, active.stat2, active.stat3].map((stat, i) => (
                  <div
                    key={i}
                    style={{
                      background: '#F5F7FA',
                      borderRadius: '10px',
                      padding: '14px 10px',
                      textAlign: 'center',
                    }}
                  >
                    <div
                      style={{
                        fontSize: '1.125rem',
                        fontWeight: 600,
                        color: '#081c52',
                        lineHeight: 1.2,
                        marginBottom: '4px',
                      }}
                    >
                      {stat.value}
                    </div>
                    <div style={{ fontSize: '0.6875rem', color: '#6b7280', lineHeight: 1.3 }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <div
                style={{
                  borderTop: '1px solid rgba(8,28,82,0.07)',
                  paddingTop: '24px',
                }}
              >
                <p
                  style={{
                    fontSize: '0.9375rem',
                    lineHeight: 1.65,
                    color: '#1a1a2e',
                    fontStyle: 'italic',
                    marginBottom: '16px',
                  }}
                >
                  &ldquo;{active.quote}&rdquo;
                </p>
                <p style={{ fontSize: '0.8125rem', fontWeight: 500, color: '#081c52' }}>
                  {active.quoteAuthor}
                </p>
                <p style={{ fontSize: '0.75rem', color: '#6b7280', marginTop: '2px' }}>
                  {active.quoteDetail}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
