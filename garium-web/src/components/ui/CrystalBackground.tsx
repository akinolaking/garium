export function CrystalBackground({ opacity = 0.05 }: { opacity?: number }) {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      <div
        style={{
          position: 'absolute',
          top: '8%',
          right: '4%',
          width: '280px',
          height: '280px',
          background: `rgba(7,44,143,${opacity})`,
          borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
          filter: 'blur(55px)',
          transform: 'rotate(45deg)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '12%',
          left: '6%',
          width: '180px',
          height: '180px',
          background: `rgba(8,28,82,${opacity * 0.65})`,
          borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
          filter: 'blur(45px)',
          transform: 'rotate(-20deg)',
        }}
      />
    </div>
  )
}
