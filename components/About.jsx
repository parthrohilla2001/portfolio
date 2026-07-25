import user from '../data/user'

export default function About() {
  return (
    <section id="about" style={{
      minHeight: '100vh',
      background: '#0a0a0a',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
    }}>
      {/* Top fade from hero */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0,
        height: '80px',
        background: 'linear-gradient(to bottom, #080808, transparent)',
        zIndex: 1,
      }} />

      {/* Right: dark portrait area */}
      <div style={{
        position: 'absolute', right: 0, top: 0, bottom: 0,
        width: '42%',
        background: 'linear-gradient(135deg, #131313 0%, #0c0c0c 60%, #0a0a0a 100%)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        overflow: 'hidden',
      }}>
        {/* Portrait photo */}
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          {/* Actual portrait */}
          <img
            src="/avatar.jpg"
            alt="Parth Rohilla"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center top',
              filter: 'grayscale(25%) brightness(0.82) contrast(1.1)',
            }}
          />
          {/* Left vignette so portrait blends into content */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to right, #0a0a0a 0%, rgba(10,10,10,0.35) 40%, transparent 100%)',
          }} />
          {/* Bottom vignette */}
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0,
            height: '30%',
            background: 'linear-gradient(to bottom, transparent, rgba(8,8,8,0.6))',
          }} />
          {/* Cyan rim light overlay */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(ellipse at 90% 40%, rgba(0,188,212,0.06) 0%, transparent 60%)',
          }} />
        </div>

        {/* Subtle grid overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.02) 1px, transparent 0)',
          backgroundSize: '32px 32px',
          pointerEvents: 'none',
        }} />
      </div>

      {/* Left fade on right panel */}
      <div style={{
        position: 'absolute', right: '42%', top: 0, bottom: 0,
        width: '120px',
        background: 'linear-gradient(to right, #0a0a0a, transparent)',
        zIndex: 2,
        pointerEvents: 'none',
      }} />

      {/* Left: content */}
      <div style={{
        position: 'relative', zIndex: 3,
        padding: 'clamp(24px, 5vw, 80px)',
        paddingTop: '80px',
        maxWidth: '58%',
        width: '58%',
      }}>
        {/* Section label */}
        <p style={{
          fontSize: '10px', letterSpacing: '4px',
          color: 'var(--accent)', textTransform: 'uppercase',
          marginBottom: '12px', fontWeight: 500,
        }}>
          01 · About
        </p>

        <h2 style={{
          fontSize: 'clamp(28px, 4vw, 48px)',
          fontWeight: 800, color: '#fff',
          letterSpacing: '2px', textTransform: 'uppercase',
          marginBottom: '6px',
        }}>
          ABOUT
        </h2>

        <p style={{
          fontSize: '12px', color: 'var(--accent)',
          marginBottom: '28px', fontWeight: 400, letterSpacing: '0.5px',
        }}>
          {user.email}
        </p>

        <p style={{
          color: 'rgba(255,255,255,0.6)',
          fontSize: '14px',
          lineHeight: 1.9,
          maxWidth: '480px',
          fontWeight: 400,
        }}>
          {user.bio}
        </p>

        {/* Contact chips */}
        <div style={{
          display: 'flex', flexWrap: 'wrap', gap: '10px',
          marginTop: '32px',
        }}>
          {[
            { label: 'Node.js', icon: '⚙' },
            { label: 'PHP', icon: '🐘' },
            { label: 'REST APIs', icon: '🔗' },
            { label: 'MySQL', icon: '🗄' },
            { label: 'Redis', icon: '⚡' },
            { label: 'WebSocket', icon: '🔌' },
          ].map(chip => (
            <span key={chip.label} style={{
              fontSize: '11px', padding: '5px 14px',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '20px',
              color: 'rgba(255,255,255,0.5)',
              letterSpacing: '0.5px',
              background: 'rgba(255,255,255,0.03)',
            }}>
              {chip.icon} {chip.label}
            </span>
          ))}
        </div>

        {/* Divider + address */}
        <div style={{
          marginTop: '48px',
          paddingTop: '24px',
          borderTop: '1px solid rgba(255,255,255,0.07)',
        }}>
          <p style={{
            fontSize: '11px',
            color: 'rgba(255,255,255,0.3)',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            marginBottom: '8px',
          }}>
            {user.location}
          </p>
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <span style={{ width: '24px', height: '1px', background: 'rgba(255,255,255,0.15)' }} />
            <a href={user.linkedin} target="_blank" rel="noopener noreferrer"
              style={{ fontSize: '11px', color: 'var(--accent)', textDecoration: 'none', letterSpacing: '1px' }}>
              LinkedIn
            </a>
            <a href={user.github} target="_blank" rel="noopener noreferrer"
              style={{ fontSize: '11px', color: 'var(--accent)', textDecoration: 'none', letterSpacing: '1px' }}>
              GitHub
            </a>
            <a href={`mailto:${user.email}`}
              style={{ fontSize: '11px', color: 'var(--accent)', textDecoration: 'none', letterSpacing: '1px' }}>
              Email
            </a>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        height: '80px',
        background: 'linear-gradient(to bottom, transparent, #080808)',
        zIndex: 4,
      }} />

      {/* Corner expand icon */}
      <div style={{
        position: 'absolute', bottom: '24px', right: '24px', zIndex: 5,
        color: 'rgba(255,255,255,0.15)',
      }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <polyline points="15 3 21 3 21 9" />
          <polyline points="9 21 3 21 3 15" />
          <line x1="21" y1="3" x2="14" y2="10" />
          <line x1="3" y1="21" x2="10" y2="14" />
        </svg>
      </div>
    </section>
  )
}
