'use client'
import { useEffect, useRef, useState } from 'react'
import user from '../data/user'

const techSkills = [
  { name: 'Node.js', pct: 85 },
  { name: 'PHP', pct: 82 },
  { name: 'TypeScript', pct: 74 },
  { name: 'JavaScript', pct: 78 },
  { name: 'Express.js', pct: 80 },
  { name: 'MySQL', pct: 88 },
  { name: 'PostgreSQL', pct: 72 },
  { name: 'Redis', pct: 70 },
]

const languages = [
  { name: 'English', pct: 88 },
  { name: 'Hindi', pct: 95 },
]

const canDo = [
  'Backend Architecture & API Design',
  'Database Schema Design & Optimization',
  'Real-time Systems with WebSocket',
  'Caching Strategies with Redis',
  'Background Processing with BullMQ',
  'Secure Auth & RBAC Systems',
  'Third-party API Integration',
]

const techStack = [
  'Node.js / Express.js',
  'PHP / CodeIgniter',
  'React.js / Next.js 15',
  'MySQL / PostgreSQL / Prisma',
  'Redis / BullMQ / WebSocket',
  'REST APIs / JWT / RBAC',
  'OpenAI API / YouTube Data API',
  'AWS S3 / Docker / Nginx',
]
function SkillBar({ name, pct, animate }) {
  return (
    <div style={{ marginBottom: '16px' }}>
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        marginBottom: '6px',
      }}>
        <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.75)', fontWeight: 400, letterSpacing: '0.3px' }}>
          {name}
        </span>
        <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.3)', letterSpacing: '1px' }}>
          {pct}%
        </span>
      </div>
      <div style={{
        height: '3px',
        background: 'rgba(255,255,255,0.07)',
        borderRadius: '2px',
        overflow: 'hidden',
      }}>
        <div
          className={animate ? 'skill-bar-fill' : ''}
          style={{
            height: '100%',
            width: `${pct}%`,
            background: 'linear-gradient(to right, var(--accent), rgba(0,188,212,0.5))',
            borderRadius: '2px',
            transformOrigin: 'left',
            transform: animate ? 'scaleX(1)' : 'scaleX(0)',
          }}
        />
      </div>
    </div>
  )
}

function SectionLabel({ num, label }) {
  return (
    <p style={{
      fontSize: '9px', letterSpacing: '3px',
      color: 'var(--accent)', textTransform: 'uppercase',
      marginBottom: '10px', fontWeight: 500,
    }}>
      {num} · {label}
    </p>
  )
}

function ColHead({ children }) {
  return (
    <h3 style={{
      fontSize: '12px', fontWeight: 700,
      color: '#fff', letterSpacing: '2px',
      textTransform: 'uppercase', marginBottom: '18px',
      paddingBottom: '8px',
      borderBottom: '1px solid rgba(255,255,255,0.07)',
    }}>
      {children}
    </h3>
  )
}

export default function Resume() {
  const ref = useRef(null)
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimate(true) },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="resume" ref={ref} style={{
      minHeight: '100vh',
      background: '#080808',
      padding: 'clamp(40px, 6vw, 90px) clamp(20px, 5vw, 60px)',
      position: 'relative',
    }}>
      {/* Section label */}
      <div style={{ marginBottom: '40px' }}>
        <SectionLabel num="02" label="Resume" />
        <h2 style={{
          fontSize: 'clamp(22px, 3vw, 36px)',
          fontWeight: 800, color: '#fff',
          letterSpacing: '2px', textTransform: 'uppercase',
        }}>
          RESUME
        </h2>
      </div>

      {/* 3-column grid */}
      <div className="resume-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '1px',
        background: 'rgba(255,255,255,0.05)',
        border: '1px solid rgba(255,255,255,0.05)',
        borderRadius: '2px',
        overflow: 'hidden',
      }}>

        {/* ── LEFT COLUMN ── */}
        <div style={{ background: '#0c0c0c', padding: '32px 28px' }}>
          {/* Technical Skills */}
          <ColHead>Technical Skills</ColHead>
          {techSkills.map(s => (
            <SkillBar key={s.name} name={s.name} pct={s.pct} animate={animate} />
          ))}

          <hr className="section-divider" />

          {/* Languages */}
          <ColHead>Languages</ColHead>
          {languages.map(l => (
            <SkillBar key={l.name} name={l.name} pct={l.pct} animate={animate} />
          ))}

          <hr className="section-divider" />

          {/* Personal Skills */}
          <ColHead>Personal Skills</ColHead>
          <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, letterSpacing: '0.3px' }}>
            Problem Solving · Team Work<br />
            Agile Development · Debugging<br />
            System Design · Communication
          </p>
        </div>

        {/* ── CENTER COLUMN ── */}
        <div style={{ background: '#0a0a0a', padding: '32px 28px', borderLeft: '1px solid rgba(255,255,255,0.05)', borderRight: '1px solid rgba(255,255,255,0.05)' }}>
          <ColHead>Experience</ColHead>

          <div style={{ position: 'relative' }}>
            {/* Timeline line */}
            <div style={{
              position: 'absolute', left: '16px', top: '8px', bottom: '8px',
              width: '1px', background: 'rgba(255,255,255,0.07)',
            }} />

            {user.experience.map((exp, i) => (
              <div key={exp.company} style={{
                display: 'flex', gap: '20px', marginBottom: '28px',
                paddingLeft: '4px',
              }}>
                {/* Timeline dot */}
                <div style={{
                  flexShrink: 0, width: '26px', height: '26px',
                  borderRadius: '50%',
                  background: i === 0 ? 'var(--accent)' : '#1e1e1e',
                  border: '1px solid rgba(255,255,255,0.1)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '8px', fontWeight: 700,
                  color: i === 0 ? '#000' : 'rgba(255,255,255,0.3)',
                  marginTop: '2px',
                  zIndex: 1,
                  position: 'relative',
                }}>
                  {i === 0 ? '●' : '○'}
                </div>

                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: '11px', color: 'var(--accent)', letterSpacing: '0.5px', marginBottom: '3px' }}>
                    {exp.period}
                  </p>
                  <h4 style={{ fontSize: '13px', fontWeight: 700, color: '#fff', marginBottom: '2px' }}>
                    {exp.company}
                  </h4>
                  <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.45)', marginBottom: '8px', letterSpacing: '0.3px' }}>
                    {exp.role} · {exp.location}
                  </p>
                  <ul style={{ paddingLeft: 0, listStyle: 'none' }}>
                    {exp.highlights.slice(0, 3).map((h, j) => (
                      <li key={j} style={{
                        fontSize: '11px', color: 'rgba(255,255,255,0.45)',
                        lineHeight: 1.7, display: 'flex', gap: '6px',
                      }}>
                        <span style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '1px' }}>▸</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <hr className="section-divider" />

          {/* Education */}
          <ColHead>Education</ColHead>
          <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
            <div style={{
              flexShrink: 0, width: '34px', height: '34px',
              borderRadius: '50%', background: '#1a1a1a',
              border: '1px solid rgba(255,255,255,0.08)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '14px',
            }}>
              🎓
            </div>
            <div>
              <h4 style={{ fontSize: '13px', fontWeight: 700, color: '#fff', lineHeight: 1.4 }}>
                {user.education.degree}
              </h4>
              <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.45)', marginTop: '3px' }}>
                {user.education.university}
              </p>
              <p style={{ fontSize: '10px', color: 'var(--accent)', marginTop: '3px', letterSpacing: '0.5px' }}>
                {user.education.period}
              </p>
            </div>
          </div>
        </div>

        {/* ── RIGHT COLUMN ── */}
        <div style={{ background: '#0c0c0c', padding: '32px 28px' }}>
          {/* What Can I Do */}
          <ColHead>What Can I Do?</ColHead>
          <div style={{ marginBottom: '8px' }}>
            {canDo.map((item, i) => (
              <p key={i} style={{
                fontSize: '12px', color: 'rgba(255,255,255,0.5)',
                lineHeight: 1.7, letterSpacing: '0.2px',
                borderBottom: i < canDo.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none',
                paddingBottom: '6px', marginBottom: '6px',
              }}>
                {item}
              </p>
            ))}
          </div>

          <hr className="section-divider" />

          {/* Tech Stack */}
          <ColHead>Tech Stack</ColHead>
          <div style={{ marginBottom: '8px' }}>
            {techStack.map((item, i) => (
              <p key={i} style={{
                fontSize: '12px', color: 'rgba(255,255,255,0.45)',
                lineHeight: 1.7, letterSpacing: '0.2px',
              }}>
                {item}
              </p>
            ))}
          </div>

          <hr className="section-divider" />

          {/* Achievements */}
          <ColHead>Achievements</ColHead>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            {user.achievements.map((a) => (
              <div key={a.title} style={{ textAlign: 'center', flex: '0 0 auto' }}>
                <div style={{
                  width: '48px', height: '48px', borderRadius: '50%',
                  background: '#1a1a1a',
                  border: '1px solid rgba(255,255,255,0.08)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '20px', margin: '0 auto 8px',
                }}>
                  🏆
                </div>
                <p style={{ fontSize: '10px', color: 'rgba(255,255,255,0.6)', fontWeight: 600, letterSpacing: '0.3px', maxWidth: '80px' }}>
                  {a.title}
                </p>
                <p style={{ fontSize: '9px', color: 'rgba(255,255,255,0.3)', marginTop: '2px', maxWidth: '80px' }}>
                  {a.org.split(' ')[0]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom corner icon */}
      <div style={{
        position: 'absolute', bottom: '24px', right: '24px',
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
