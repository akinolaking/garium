const PARTNERS = [
  { name: 'NVIDIA',  role: 'GPU Infrastructure' },
  { name: 'Vercel',  role: 'Deployment'         },
  { name: 'Stripe',  role: 'Payments'           },
  { name: 'Contabo', role: 'Cloud Servers'       },
  { name: 'Grafana', role: 'Monitoring'          },
  { name: 'WHMCS',   role: 'Billing'             },
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
                background: '#f9fafb',
                border: '1px solid rgba(8,28,82,0.08)',
                borderRadius: '10px',
                minWidth: '100px',
              }}
            >
              <span style={{ fontSize: '0.9375rem', fontWeight: 500, color: '#111827' }}>
                {p.name}
              </span>
              <span style={{ fontSize: '0.6875rem', color: '#9ca3af', marginTop: '2px' }}>
                {p.role}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
