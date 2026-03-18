export interface Testimonial {
  quote: string
  author: string
  title?: string
  company?: string
  sector?: string
  /** Legacy: used when title/company/sector not available */
  org?: string
}

interface TestimonialSectionProps {
  testimonials: Testimonial[]
  heading?: string
  background?: string
}

export function TestimonialSection({ testimonials, heading, background = '#ffffff' }: TestimonialSectionProps) {
  return (
    <section style={{ padding: '80px 0', background }}>
      <div className="container-garium">
        {heading && (
          <h2 style={{ marginBottom: '48px', maxWidth: '18ch', fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', lineHeight: 1.2, letterSpacing: '-0.02em' }}>
            {heading}
          </h2>
        )}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
        }}>
          {testimonials.map((t, i) => (
            <div
              key={i}
              style={{
                background: '#ffffff',
                border: '1px solid rgba(8,28,82,0.1)',
                borderRadius: '16px',
                padding: '28px 32px',
                boxShadow: '0 2px 16px rgba(8,28,82,0.06)',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
              }}
            >
              <div style={{ fontSize: '2rem', color: 'rgba(7,44,143,0.15)', lineHeight: 1, fontFamily: 'Georgia, serif' }}>
                &ldquo;
              </div>
              <p style={{ fontSize: '1rem', lineHeight: 1.65, color: '#1a1a2e', flex: 1 }}>
                {t.quote}
              </p>
              <div style={{ borderTop: '1px solid rgba(8,28,82,0.07)', paddingTop: '16px' }}>
                <p style={{ fontSize: '0.875rem', fontWeight: 500, color: '#081c52', marginBottom: '2px' }}>
                  {t.author}
                </p>
                {t.title && t.company ? (
                  <>
                    <p style={{ fontSize: '0.8125rem', color: '#374151' }}>
                      {t.title}, {t.company}
                    </p>
                    {t.sector && (
                      <p style={{ fontSize: '0.75rem', color: '#6b7280', marginTop: '2px' }}>
                        {t.sector}
                      </p>
                    )}
                  </>
                ) : (
                  <p style={{ fontSize: '0.8125rem', color: '#6b7280' }}>
                    {t.org}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
