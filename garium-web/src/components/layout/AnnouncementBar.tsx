export function AnnouncementBar() {
  return (
    <div
      style={{
        width: '100%',
        textAlign: 'center',
        padding: '10px 16px',
        background: 'linear-gradient(90deg, #072c8f 0%, #081c52 50%, #072c8f 100%)',
        fontSize: '0.8125rem',
        fontWeight: 400,
        color: 'rgba(255,255,255,0.88)',
        letterSpacing: '0.01em',
      }}
    >
      Private AI infrastructure — deployed in 24 to 72 hours.{' '}
      <a
        href="/contact"
        style={{ color: '#93c5fd', textDecoration: 'underline', textUnderlineOffset: '3px' }}
      >
        Book a free consultation
      </a>
    </div>
  )
}
