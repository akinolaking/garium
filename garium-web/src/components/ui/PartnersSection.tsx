'use client'
import { AnimatedBackground } from '@/components/ui/AnimatedBackground'

const TECH_PARTNERS = [
  { name: 'NVIDIA',       role: 'GPU Infrastructure',  color: '#76B900' },
  { name: 'AWS',          role: 'Cloud',               color: '#FF9900' },
  { name: 'Google Cloud', role: 'Cloud',               color: '#4285F4' },
  { name: 'Contabo',      role: 'Dedicated Servers',   color: '#0066CC' },
  { name: 'Linux',        role: 'Operating System',    color: '#333333' },
  { name: 'Docker',       role: 'Containers',          color: '#2496ED' },
  { name: 'Grafana',      role: 'Monitoring',          color: '#F46800' },
  { name: 'Stripe',       role: 'Payments',            color: '#635BFF' },
  { name: 'Vercel',       role: 'Deployment',          color: '#000000' },
]

const AI_MODEL_PARTNERS = [
  { name: 'Ollama',      role: 'AI Runtime',    color: '#333333' },
  { name: 'DeepSeek',   role: 'Reasoning AI',  color: '#4D6BFE' },
  { name: 'Qwen',       role: 'General AI',    color: '#6553D8' },
  { name: 'Meta Llama', role: 'Open Models',   color: '#0866FF' },
  { name: 'Mistral',    role: 'Efficient AI',  color: '#FF7000' },
]

function PartnerPill({ partner }: { partner: { name: string; color: string } }) {
  return (
    <div style={{
      display: 'inline-flex',
      alignItems: 'center',
      padding: '7px 16px',
      background: '#f9fafb',
      border: '1px solid rgba(8,28,82,0.09)',
      borderRadius: '999px',
    }}>
      <span style={{
        fontSize: '0.875rem',
        fontWeight: 500,
        color: partner.color,
        whiteSpace: 'nowrap',
        letterSpacing: '-0.01em',
      }}>
        {partner.name}
      </span>
    </div>
  )
}

export function PartnersSection() {
  return (
    <section style={{
      padding: '48px 0',
      borderTop: '1px solid rgba(8,28,82,0.08)',
      borderBottom: '1px solid rgba(8,28,82,0.08)',
      background: '#ffffff',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <AnimatedBackground variant="dots" opacity={0.2} />
      <div className="container-garium" style={{ position: 'relative', zIndex: 1 }}>
        <p style={{
          fontSize: '0.6875rem',
          fontWeight: 600,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: '#9ca3af',
          textAlign: 'center',
          marginBottom: '24px',
        }}>
          Built on
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center', marginBottom: '14px' }}>
          {TECH_PARTNERS.map(p => (
            <PartnerPill key={p.name} partner={p} />
          ))}
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center', alignItems: 'center' }}>
          <span style={{ fontSize: '0.6875rem', color: '#9ca3af', marginRight: '4px' }}>
            AI models:
          </span>
          {AI_MODEL_PARTNERS.map(p => (
            <PartnerPill key={p.name} partner={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
