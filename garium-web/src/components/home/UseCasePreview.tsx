'use client'
import { useState } from 'react'
import Link from 'next/link'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import {
  GraduationCap, Building2, HeartPulse, Megaphone,
  Landmark, Scale, Code2, CheckCircle2, ArrowRight,
} from 'lucide-react'

const USE_CASES = [
  {
    id: 'schools',
    icon: GraduationCap,
    tab: 'Schools',
    headline: 'AI that teaches without leaking.',
    description: 'Private AI for schools and universities means students benefit from AI tools without their data leaving campus infrastructure.',
    outcomes: [
      'Student data stays on campus',
      'Teachers get lesson planning tools',
      'Exam prep AI never goes to the cloud',
      'Parents never share child data with US tech companies',
    ],
    partners: 'Suitable for academies, universities, and edtech providers',
  },
  {
    id: 'enterprise',
    icon: Building2,
    tab: 'Enterprise',
    headline: 'Every department. One platform. One price.',
    description: 'Replace per-seat AI subscriptions with a single private platform the whole organisation uses.',
    outcomes: [
      'Finance teams run secure analysis',
      'HR generates policies without data leaving',
      'Sales teams get AI research tools',
      'IT never manages per-seat licensing again',
    ],
    partners: 'Suitable for medium and large corporates',
  },
  {
    id: 'healthcare',
    icon: HeartPulse,
    tab: 'Healthcare',
    headline: 'Patient data that stays with patients.',
    description: 'Clinical infrastructure where AI tools run entirely within your environment.',
    outcomes: [
      'Clinical records never leave your environment',
      'GP practices reduce admin time by 40%+',
      'Medical data stays in-country',
      'Compliance by architecture, not by policy',
    ],
    partners: 'Suitable for hospitals, GP practices, medical research',
  },
  {
    id: 'agencies',
    icon: Megaphone,
    tab: 'Agencies',
    headline: 'Client work that stays confidential.',
    description: 'Run AI on your own infrastructure — client data, brand guidelines, and pitch research never leave your environment.',
    outcomes: [
      'Brand guidelines stay in-house',
      'Research agents work overnight',
      'Client data is never fed to third-party models',
      'Pitch decks generated from your own knowledge base',
    ],
    partners: 'Suitable for PR, digital, creative, and strategy agencies',
  },
  {
    id: 'government',
    icon: Landmark,
    tab: 'Government',
    headline: 'Citizen data where it belongs.',
    description: 'AI for public sector organisations that need sovereignty by design.',
    outcomes: [
      'Policy documents processed in-country',
      'Citizen services AI never calls US servers',
      'Sovereignty designed in',
      'Audit-ready infrastructure by default',
    ],
    partners: 'Suitable for national and local government, NGOs, regulators',
  },
  {
    id: 'legal',
    icon: Scale,
    tab: 'Legal',
    headline: 'Advice that never leaves the building.',
    description: 'Legal privilege preserved by architecture — not by policy.',
    outcomes: [
      'Client matter files never go to third-party AI',
      'Due diligence runs in your environment',
      'Privilege is preserved by architecture',
      'Associates get AI tools without compliance exposure',
    ],
    partners: 'Suitable for law firms, chambers, legal departments',
  },
  {
    id: 'technology',
    icon: Code2,
    tab: 'Technology',
    headline: 'Infrastructure for builders.',
    description: 'Private AI for software teams that want powerful tools without vendor lock-in or usage costs.',
    outcomes: [
      'AI tools for your own product development',
      'Internal knowledge bases stay internal',
      'Developer productivity tools on private infrastructure',
      'No usage-based pricing surprises',
    ],
    partners: 'Suitable for software companies, SaaS businesses, tech teams',
  },
]

export function UseCasePreview() {
  const [active, setActive] = useState(0)
  const uc = USE_CASES[active]
  const Icon = uc.icon

  return (
    <section className="section-pad bg-white">
      <div className="container-garium">
        <AnimatedSection>
          <div className="text-center mb-14">
            <p className="eyebrow mb-5 block">Who we work with</p>
            <h2 className="text-black text-balance" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: '1.15', letterSpacing: '-0.02em' }}>
              If it matters, it stays private.
            </h2>
          </div>
        </AnimatedSection>

        {/* Tab strip */}
        <div className="flex flex-wrap gap-0 border-b border-[#D1D9E8] mb-10" role="tablist">
          {USE_CASES.map((u, i) => {
            const TabIcon = u.icon
            return (
              <button
                key={u.id}
                role="tab"
                aria-selected={active === i}
                onClick={() => setActive(i)}
                className={`flex items-center gap-2 px-4 py-3 text-sm font-medium transition-all duration-150 border-b-2 -mb-px ${
                  active === i
                    ? 'border-[#072c8f] text-[#072c8f]'
                    : 'border-transparent text-[#374151] hover:text-[#081c52] hover:border-[#D1D9E8]'
                }`}
              >
                <TabIcon className="w-4 h-4" aria-hidden />
                {u.tab}
              </button>
            )
          })}
        </div>

        {/* Tab panel */}
        <div className="grid md:grid-cols-2 gap-10 items-start" role="tabpanel">
          <div>
            <div className="w-12 h-12 rounded-xl bg-[#eef1f9] flex items-center justify-center mb-5">
              <Icon className="w-6 h-6 text-[#072c8f]" aria-hidden />
            </div>
            <h3 className="text-2xl font-semibold text-black mb-4" style={{ letterSpacing: '-0.01em' }}>
              {uc.headline}
            </h3>
            <p className="text-[#374151] text-base leading-relaxed mb-6">
              {uc.description}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#072c8f] hover:gap-3 transition-all duration-200"
            >
              Talk to us about {uc.tab.toLowerCase()} <ArrowRight className="w-4 h-4" aria-hidden />
            </Link>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-[#072c8f] font-medium mb-4">Outcomes</p>
            <ul className="space-y-3 mb-6">
              {uc.outcomes.map(o => (
                <li key={o} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#072c8f] flex-shrink-0 mt-0.5" aria-hidden />
                  <span className="text-[#374151] text-sm leading-relaxed">{o}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-[#728acf] border-t border-[#D1D9E8] pt-4">{uc.partners}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
