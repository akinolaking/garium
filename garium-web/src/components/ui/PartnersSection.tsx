import Image from 'next/image'

const PARTNERS = [
  { name: 'NVIDIA',       role: 'GPU Infrastructure', logo: '/logos/nvidia.svg' },
  { name: 'AWS',          role: 'Cloud Computing',     logo: '/logos/aws.svg' },
  { name: 'Google Cloud', role: 'Cloud Infrastructure',logo: '/logos/google-cloud.svg' },
  { name: 'Vercel',       role: 'Deployment',          logo: '/logos/vercel.svg' },
  { name: 'Stripe',       role: 'Payments',            logo: '/logos/stripe.svg' },
  { name: 'Contabo',      role: 'Cloud Servers',       logo: '/logos/contabo.svg' },
  { name: 'Grafana',      role: 'Monitoring',          logo: '/logos/grafana.svg' },
]

export function PartnersSection() {
  return (
    <section style={{
      padding: '48px 0',
      borderTop: '1px solid rgba(8,28,82,0.08)',
      borderBottom: '1px solid rgba(8,28,82,0.08)',
      background: '#ffffff',
    }}>
      <div className="container-garium">
        <p style={{
          fontSize: '0.75rem',
          fontWeight: 600,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: '#9ca3af',
          textAlign: 'center',
          marginBottom: '32px',
        }}>
          Built on
        </p>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '12px',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          {PARTNERS.map(p => (
            <div
              key={p.name}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '12px 20px',
                background: '#ffffff',
                border: '1px solid rgba(8,28,82,0.08)',
                borderRadius: '10px',
                minWidth: '110px',
                boxShadow: '0 1px 6px rgba(8,28,82,0.06)',
                gap: '6px',
              }}
            >
              <div style={{ height: '28px', display: 'flex', alignItems: 'center' }}>
                <Image
                  src={p.logo}
                  alt={p.name}
                  width={80}
                  height={28}
                  style={{ objectFit: 'contain', maxHeight: '28px' }}
                />
              </div>
              <span style={{ fontSize: '0.6875rem', color: '#9ca3af' }}>
                {p.role}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
