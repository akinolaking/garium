'use client'
import { AnimatedBackground } from '@/components/ui/AnimatedBackground'
import { useCurrency } from '@/hooks/useCurrency'
import { convertPrice, formatPrice } from '@/lib/currency'

const ADD_ONS = [
  {
    id: 'openclaw',
    name: 'AI Automation Suite',
    techName: 'OpenClaw',
    priceFrom: 200,
    description: 'AI agents that run in the background while your team works. Research, lead qualification, media monitoring, overnight briefings.',
    features: [
      'Lead crawling and qualification agents',
      'Media monitoring and morning briefings',
      'Automated research and summarisation',
      'Task scheduling and notifications',
    ],
    availableOn: ['Build', 'Seed', 'Scale', 'Sovereign'],
    color: '#072c8f',
  },
  {
    id: 'zeroclaw',
    name: 'Advanced Automation Suite',
    techName: 'ZeroClaw',
    priceFrom: 350,
    description: 'Multi-agent orchestration for organisations that want AI running across all workflows simultaneously. Complex reasoning chains and deep integrations.',
    features: [
      'Multi-agent workflow orchestration',
      'Complex reasoning and analysis pipelines',
      'Webhook and API integration',
      'Custom agent configuration',
    ],
    availableOn: ['Scale', 'Sovereign'],
    color: '#3b6d11',
  },
  {
    id: 'support',
    name: 'Instant Support',
    techName: 'Priority Support',
    priceFrom: 50,
    description: 'Direct access to our engineering team with a guaranteed 2-hour response. Get critical issues resolved fast with a dedicated support channel and monthly check-in.',
    features: [
      'Dedicated support channel',
      '2-hour response guarantee',
      'Direct engineer access',
      'Monthly check-in call',
    ],
    availableOn: ['Spark', 'Grow', 'Build', 'Seed', 'Scale', 'Sovereign'],
    color: '#6b21a8',
  },
  {
    id: 'vision',
    name: 'Vision and Document AI',
    techName: 'Document Intelligence',
    priceFrom: 150,
    description: 'Upload scanned documents, contracts, invoices, and images. Query them the same way you query text. Works with any plan.',
    features: [
      'PDF and scanned document OCR',
      'Image analysis and description',
      'Contract and invoice extraction',
      'Chart and diagram interpretation',
    ],
    availableOn: ['Spark', 'Grow', 'Build', 'Seed', 'Scale', 'Sovereign'],
    color: '#854f0b',
  },
]

export function AddOnsSection() {
  const { currency, rates } = useCurrency()

  return (
    <section style={{ padding: '80px 0', background: '#F5F7FA', position: 'relative', overflow: 'hidden' }}>
      <AnimatedBackground variant="grid" opacity={0.4} />
      <div className="container-garium" style={{ position: 'relative', zIndex: 1 }}>
        <p className="eyebrow" style={{ marginBottom: '12px' }}>Add-ons</p>
        <h2 style={{ maxWidth: '18ch', marginBottom: '12px' }}>
          Extend your platform.
        </h2>
        <p style={{ maxWidth: '52ch', color: '#6b7280', marginBottom: '48px', fontSize: '1.0625rem' }}>
          Add capabilities to any plan. Priced monthly. Cancel or adjust anytime.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          {ADD_ONS.map(addon => {
            const displayPrice = formatPrice(convertPrice(addon.priceFrom, currency, rates), currency)
            return (
              <div key={addon.id} style={{
                background: '#ffffff',
                border: '1px solid rgba(8,28,82,0.1)',
                borderRadius: '16px',
                padding: '28px 32px',
                boxShadow: '0 2px 16px rgba(8,28,82,0.06)',
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                  <div>
                    <p style={{ fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: addon.color, marginBottom: '4px' }}>
                      {addon.techName}
                    </p>
                    <h3 style={{ fontSize: '1.125rem', fontWeight: 500, color: '#081c52' }}>
                      {addon.name}
                    </h3>
                  </div>
                  <div style={{ background: 'rgba(8,28,82,0.06)', borderRadius: '8px', padding: '6px 12px', flexShrink: 0 }}>
                    <p style={{ fontSize: '0.6875rem', color: '#6b7280' }}>from</p>
                    <p style={{ fontSize: '1rem', fontWeight: 600, color: '#081c52' }}>{displayPrice}/mo</p>
                  </div>
                </div>
                <p style={{ fontSize: '0.9375rem', color: '#374151', lineHeight: 1.65, marginBottom: '20px' }}>
                  {addon.description}
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {addon.features.map(f => (
                    <li key={f} style={{ display: 'flex', gap: '8px', fontSize: '0.875rem', color: '#374151' }}>
                      <span style={{ color: addon.color, flexShrink: 0 }}>→</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <p style={{ fontSize: '0.75rem', color: '#9ca3af', borderTop: '1px solid rgba(8,28,82,0.07)', paddingTop: '12px' }}>
                  Available on: {addon.availableOn.join(', ')}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
