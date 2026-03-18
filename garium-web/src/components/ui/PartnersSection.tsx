'use client'
import { AnimatedBackground } from '@/components/ui/AnimatedBackground'

const TECH_PARTNERS = [
  { name: 'NVIDIA',       role: 'GPU Infrastructure',   logo: '/logos/nvidia.svg'      },
  { name: 'AWS',          role: 'Cloud Infrastructure',  logo: '/logos/aws.svg'         },
  { name: 'Google Cloud', role: 'Cloud Infrastructure',  logo: '/logos/google-cloud.svg'},
  { name: 'Contabo',      role: 'Dedicated Servers',     logo: '/logos/contabo.svg'     },
  { name: 'Linux',        role: 'Operating System',      logo: '/logos/linux.svg'       },
  { name: 'Docker',       role: 'Containerisation',      logo: '/logos/docker.svg'      },
  { name: 'Guacamole',    role: 'Remote Workspace',      logo: '/logos/guacamole.svg'   },
  { name: 'Grafana',      role: 'Monitoring',            logo: '/logos/grafana.svg'     },
  { name: 'Stripe',       role: 'Payments',              logo: '/logos/stripe.svg'      },
  { name: 'Vercel',       role: 'Deployment',            logo: '/logos/vercel.svg'      },
]

const AI_MODEL_PARTNERS = [
  { name: 'Ollama',      role: 'AI Runtime',     logo: '/logos/ollama.svg'   },
  { name: 'DeepSeek',   role: 'Reasoning AI',   logo: '/logos/deepseek.svg' },
  { name: 'Qwen',       role: 'General AI',     logo: '/logos/qwen.svg'     },
  { name: 'Meta Llama', role: 'Open AI Models', logo: '/logos/meta.svg'     },
  { name: 'Mistral',    role: 'Efficient AI',   logo: '/logos/mistral.svg'  },
]

function PartnerPill({ partner }: { partner: { name: string; role: string; logo: string } }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      padding: '8px 16px',
      background: '#f9fafb',
      border: '1px solid rgba(8,28,82,0.08)',
      borderRadius: '999px',
    }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={partner.logo}
        alt={partner.name}
        style={{ height: '16px', width: 'auto' }}
        onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
      />
      <span style={{ fontSize: '0.8125rem', fontWeight: 500, color: '#374151', whiteSpace: 'nowrap' }}>
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

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center', marginBottom: '16px' }}>
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
