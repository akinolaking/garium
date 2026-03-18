export function AnnouncementBar() {
  return (
    <div
      style={{
        width: '100%',
        background: '#072c8f',
        padding: '8px 16px',
        textAlign: 'center',
        fontSize: '0.8125rem',
        color: 'rgba(255,255,255,0.88)',
        position: 'relative',
        zIndex: 60,
        flexShrink: 0,
      }}
    >
      {/* Mobile: shortened version */}
      <span className="sm:hidden">
        Deployed in 24 to 72 hours.{' '}
        <a href="/contact" style={{ color: '#93c5fd', textDecoration: 'underline' }}>
          Book a call
        </a>
      </span>
      {/* Desktop: full version */}
      <span className="hidden sm:inline">
        Private AI infrastructure, deployed in 24 to 72 hours.{' '}
        <a href="/contact" style={{ color: '#93c5fd', textDecoration: 'underline', textUnderlineOffset: '3px' }}>
          Book a free consultation
        </a>
      </span>
    </div>
  )
}
