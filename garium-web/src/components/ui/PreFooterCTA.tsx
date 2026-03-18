export function PreFooterCTA() {
  return (
    <section style={{
      background: 'linear-gradient(135deg, #000000 0%, #081c52 55%, #072c8f 100%)',
      padding: '80px 0',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div aria-hidden style={{
        position: 'absolute', top: '-40px', right: '-40px',
        width: '200px', height: '200px',
        background: 'rgba(7,44,143,0.15)',
        borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
        filter: 'blur(40px)',
      }} />
      <div aria-hidden style={{
        position: 'absolute', bottom: '-30px', left: '-30px',
        width: '150px', height: '150px',
        background: 'rgba(8,28,82,0.12)',
        borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
        filter: 'blur(35px)',
      }} />

      <div className="container-garium" style={{ position: 'relative', zIndex: 1 }}>
        <h2 style={{
          color: '#ffffff',
          maxWidth: '18ch',
          margin: '0 auto 16px',
          fontSize: 'clamp(1.625rem, 2.8vw, 2.5rem)',
          fontWeight: 400,
          lineHeight: 1.12,
          letterSpacing: '-0.02em',
        }}>
          Ready to see it working?
        </h2>
        <p style={{
          color: 'rgba(255,255,255,0.7)',
          maxWidth: '52ch',
          margin: '0 auto 36px',
          fontSize: '1.0625rem',
          lineHeight: 1.7,
        }}>
          Book a 30-minute call. We will show you exactly what your organisation
          would get and what it costs.
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
