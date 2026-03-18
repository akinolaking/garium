export function ServicesCTA() {
  return (
    <section
      style={{
        background: 'linear-gradient(135deg, #000000 0%, #081c52 60%, #072c8f 100%)',
        padding: '80px 0',
        textAlign: 'center',
      }}
    >
      <div className="container-garium">
        <h2 style={{ color: '#ffffff', maxWidth: '20ch', margin: '0 auto 16px', fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', lineHeight: 1.2, letterSpacing: '-0.02em' }}>
          Ready to see it working?
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '48ch', margin: '0 auto 36px', fontSize: '1.0625rem', lineHeight: 1.7 }}>
          Book a 30-minute call. We will show you exactly what your organisation would get and what it costs.
        </p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href="/contact"
            style={{
              display: 'inline-block',
              background: '#ffffff',
              color: '#081c52',
              padding: '13px 28px',
              borderRadius: '999px',
              fontSize: '0.9375rem',
              fontWeight: 500,
              textDecoration: 'none',
            }}
          >
            Book a consultation
          </a>
          <a
            href="/pricing"
            style={{
              display: 'inline-block',
              border: '1px solid rgba(255,255,255,0.35)',
              color: 'rgba(255,255,255,0.85)',
              padding: '13px 28px',
              borderRadius: '999px',
              fontSize: '0.9375rem',
              textDecoration: 'none',
            }}
          >
            See pricing
          </a>
        </div>
      </div>
    </section>
  )
}
