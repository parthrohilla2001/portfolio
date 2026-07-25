import user from '../data/user'

export default function Hero() {
  return (
    <section id="home" style={{
      minHeight: '100vh',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
    }}>
      {/* Background workspace image */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'url(/hero-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center right',
        backgroundRepeat: 'no-repeat',
      }} />

      {/* Gradient overlay — dark on left, fades to transparent right */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to right, rgba(8,8,8,0.97) 38%, rgba(8,8,8,0.55) 65%, rgba(8,8,8,0.15) 100%)',
      }} />

      {/* Bottom fade to main bg */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        height: '160px',
        background: 'linear-gradient(to bottom, transparent, #080808)',
      }} />

      {/* Content */}
      <div style={{
        position: 'relative', zIndex: 1,
        padding: 'clamp(24px, 5vw, 80px)',
        paddingTop: '100px',
        maxWidth: '660px',
      }}>
        {/* Eyebrow */}
        <p style={{
          fontSize: '11px',
          letterSpacing: '4px',
          color: 'var(--accent)',
          textTransform: 'uppercase',
          marginBottom: '16px',
          fontWeight: 500,
        }}>
          Software Engineer · Full Stack Developer
        </p>

        {/* Name */}
        <h1 style={{ lineHeight: 1, margin: 0 }}>
          <span style={{
            display: 'block',
            fontSize: 'clamp(36px, 6vw, 68px)',
            fontWeight: 300,
            color: '#fff',
            letterSpacing: '6px',
            textTransform: 'uppercase',
          }}>
            {user.name.split(' ')[0]}
          </span>
          <span style={{
            display: 'block',
            fontSize: 'clamp(52px, 9vw, 108px)',
            fontWeight: 900,
            color: '#fff',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            lineHeight: 0.88,
            marginTop: '4px',
          }}>
            {user.name.split(' ')[1]}
          </span>
        </h1>

        {/* Subtitle */}
        <p style={{
          fontSize: '11px',
          letterSpacing: '5px',
          color: 'rgba(255,255,255,0.45)',
          textTransform: 'uppercase',
          marginTop: '18px',
          fontWeight: 400,
        }}>
          Node.js · PHP · React.js · Next.js · MySQL · REST APIs
        </p>

        {/* CTA buttons */}
        <div style={{ display: 'flex', gap: '14px', marginTop: '36px', flexWrap: 'wrap' }}>
          <a
            href="#resume"
            className="btn-outline"
            style={{
              padding: '10px 30px',
              border: '1px solid rgba(255,255,255,0.35)',
              color: '#fff',
              borderRadius: '24px',
              fontSize: '11px',
              textDecoration: 'none',
              letterSpacing: '2.5px',
              textTransform: 'uppercase',
              fontWeight: 500,
            }}
          >
            Resume
          </a>
          <a
            href="#portfolio"
            className="btn-outline"
            style={{
              padding: '10px 30px',
              border: '1px solid rgba(255,255,255,0.35)',
              color: '#fff',
              borderRadius: '24px',
              fontSize: '11px',
              textDecoration: 'none',
              letterSpacing: '2.5px',
              textTransform: 'uppercase',
              fontWeight: 500,
            }}
          >
            Portfolio
          </a>
        </div>

        {/* Social icons row */}
        <div style={{
          display: 'flex', gap: '18px', marginTop: '56px',
          alignItems: 'center',
        }}>
          {/* LinkedIn */}
          <a href={user.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon" title="LinkedIn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>

          {/* GitHub */}
          <a href={user.github} target="_blank" rel="noopener noreferrer" className="social-icon" title="GitHub">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
          </a>

          {/* Email */}
          <a href={`mailto:${user.email}`} className="social-icon" title="Email">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <polyline points="2,4 12,13 22,4" />
            </svg>
          </a>
        </div>
      </div>

      {/* Corner expand icon (decorative, like reference) */}
      <div style={{
        position: 'absolute', bottom: '24px', right: '24px', zIndex: 1,
        color: 'rgba(255,255,255,0.2)',
      }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <polyline points="15 3 21 3 21 9" />
          <polyline points="9 21 3 21 3 15" />
          <line x1="21" y1="3" x2="14" y2="10" />
          <line x1="3" y1="21" x2="10" y2="14" />
        </svg>
      </div>
    </section>
  )
}
