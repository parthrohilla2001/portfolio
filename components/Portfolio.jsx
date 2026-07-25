import user from '../data/user'

function Tech({ name }) {
  return (
    <span style={{
      fontSize: '10px',
      padding: '3px 10px',
      background: 'rgba(0,188,212,0.08)',
      border: '1px solid rgba(0,188,212,0.2)',
      borderRadius: '12px',
      color: 'rgba(255,255,255,0.55)',
      letterSpacing: '0.3px',
    }}>
      {name}
    </span>
  )
}

export default function Portfolio() {
  return (
    <section id="portfolio" style={{
      minHeight: '100vh',
      background: '#0a0a0a',
      padding: 'clamp(40px, 6vw, 90px) clamp(20px, 5vw, 60px)',
      position: 'relative',
    }}>
      {/* Section header */}
      <div style={{ marginBottom: '48px' }}>
        <p style={{
          fontSize: '9px', letterSpacing: '4px',
          color: 'var(--accent)', textTransform: 'uppercase',
          marginBottom: '10px', fontWeight: 500,
        }}>
          03 · Portfolio
        </p>
        <h2 style={{
          fontSize: 'clamp(22px, 3vw, 36px)',
          fontWeight: 800, color: '#fff',
          letterSpacing: '2px', textTransform: 'uppercase',
        }}>
          SELECTED PROJECTS
        </h2>
      </div>

      {/* Projects grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '1px',
        background: 'rgba(255,255,255,0.05)',
        border: '1px solid rgba(255,255,255,0.05)',
        borderRadius: '2px',
        overflow: 'hidden',
        marginBottom: '2px',
      }}>
        {user.projects.map((p, i) => (
          <article
            key={p.title}
            className="dark-card"
            style={{
              padding: '28px 24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              background: i % 2 === 0 ? '#0c0c0c' : '#0a0a0a',
              border: 'none',
              borderRadius: 0,
              cursor: 'default',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Project number */}
            <span style={{
              position: 'absolute', top: '20px', right: '20px',
              fontSize: '36px', fontWeight: 900,
              color: 'rgba(255,255,255,0.03)',
              lineHeight: 1,
              userSelect: 'none',
            }}>
              {String(i + 1).padStart(2, '0')}
            </span>

            {/* Accent line */}
            <div style={{
              width: '24px', height: '2px',
              background: 'var(--accent)',
              borderRadius: '1px',
            }} />

            <h3 style={{
              fontSize: '15px', fontWeight: 700,
              color: '#fff', letterSpacing: '0.3px',
              lineHeight: 1.3,
            }}>
              {p.title}
            </h3>

            <p style={{
              fontSize: '12px',
              color: 'rgba(255,255,255,0.45)',
              lineHeight: 1.8,
              flex: 1,
            }}>
              {p.description}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '4px' }}>
              {p.tech.map(t => <Tech key={t} name={t} />)}
            </div>

            {p.link && p.link !== '#' && (
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: '11px', color: 'var(--accent)',
                  textDecoration: 'none', letterSpacing: '1px',
                  textTransform: 'uppercase', display: 'inline-flex',
                  alignItems: 'center', gap: '6px', marginTop: '4px',
                  fontWeight: 500,
                }}
              >
                View Project
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </a>
            )}
          </article>
        ))}
      </div>

      {/* Divider */}
      <div style={{ height: '60px' }} />

      {/* Achievements */}
      <div style={{ marginBottom: '32px' }}>
        <p style={{
          fontSize: '9px', letterSpacing: '4px',
          color: 'var(--accent)', textTransform: 'uppercase',
          marginBottom: '10px', fontWeight: 500,
        }}>
          Awards & Recognition
        </p>
        <h2 style={{
          fontSize: 'clamp(18px, 2.5vw, 28px)',
          fontWeight: 800, color: '#fff',
          letterSpacing: '2px', textTransform: 'uppercase',
        }}>
          ACHIEVEMENTS
        </h2>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '1px',
        background: 'rgba(255,255,255,0.05)',
        border: '1px solid rgba(255,255,255,0.05)',
        borderRadius: '2px',
        overflow: 'hidden',
      }}>
        {user.achievements.map((a, i) => (
          <div
            key={a.title}
            className="dark-card"
            style={{
              padding: '28px 24px',
              display: 'flex', gap: '18px', alignItems: 'flex-start',
              background: i % 2 === 0 ? '#0c0c0c' : '#0a0a0a',
              border: 'none', borderRadius: 0,
            }}
          >
            <div style={{
              flexShrink: 0, width: '44px', height: '44px',
              borderRadius: '50%',
              background: 'rgba(0,188,212,0.08)',
              border: '1px solid rgba(0,188,212,0.2)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '20px',
            }}>
              🏆
            </div>
            <div>
              <h3 style={{ fontSize: '14px', fontWeight: 700, color: '#fff', marginBottom: '4px' }}>
                {a.title}
              </h3>
              <p style={{ fontSize: '11px', color: 'var(--accent)', marginBottom: '8px', letterSpacing: '0.3px' }}>
                {a.org}
              </p>
              <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.7 }}>
                {a.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div style={{
        marginTop: '80px',
        paddingTop: '32px',
        borderTop: '1px solid rgba(255,255,255,0.07)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '16px',
      }}>
        <div>
          <p style={{ fontSize: '22px', fontWeight: 800, color: '#fff', letterSpacing: '2px' }}>
            PARTH<span style={{ color: 'var(--accent)' }}>.</span>
          </p>
          <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.3)', letterSpacing: '1px', marginTop: '4px' }}>
            Software Engineer · Full Stack Developer
          </p>
        </div>
        <div style={{ display: 'flex', gap: '20px' }}>
          <a href="mailto:parthrohilla2000@gmail.com"
            style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', textDecoration: 'none', letterSpacing: '0.5px' }}>
            parthrohilla2000@gmail.com
          </a>
          <a href="#home"
            style={{ fontSize: '11px', color: 'var(--accent)', textDecoration: 'none', letterSpacing: '1px', textTransform: 'uppercase' }}>
            ↑ Top
          </a>
        </div>
      </div>
    </section>
  )
}
