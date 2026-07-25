'use client'
import { useState, useEffect } from 'react'
import user from '../data/user'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30)
      const sections = ['home', 'about', 'resume', 'portfolio']
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && window.scrollY >= el.offsetTop - 80) {
          setActive(sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'resume', label: 'Resume' },
    { id: 'portfolio', label: 'Portfolio' },
  ]

  return (
    <>
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
        background: scrolled ? 'rgba(8,8,8,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
        transition: 'background 0.4s ease, border-color 0.4s ease',
        height: '56px',
        display: 'flex', alignItems: 'center',
        padding: '0 40px',
        justifyContent: 'space-between',
      }}>
        {/* Desktop Nav */}
        <nav style={{ display: 'flex', gap: '32px', alignItems: 'center' }} className="hidden-mobile">
          {links.map(link => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => { setActive(link.id); setOpen(false) }}
              className={`nav-link${active === link.id ? ' active' : ''}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: phone */}
        <div style={{
          fontSize: '11px', color: 'rgba(255,255,255,0.4)',
          letterSpacing: '1.5px', fontWeight: 400,
          display: 'flex', alignItems: 'center', gap: '6px',
        }} className="hidden-mobile">
          <span style={{ color: 'var(--accent)' }}>✆</span>
          {user.phone}
        </div>

        {/* Mobile: logo + hamburger */}
        <div style={{ display: 'none', width: '100%', justifyContent: 'space-between', alignItems: 'center' }} className="mobile-flex">
          <span style={{ color: '#fff', fontWeight: 700, fontSize: '15px', letterSpacing: '1px' }}>PR</span>
          <button
            onClick={() => setOpen(o => !o)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#fff', padding: '4px' }}
            aria-label="Toggle menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open
                ? <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>
                : <><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></>
              }
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      {open && (
        <div style={{
          position: 'fixed', top: '56px', left: 0, right: 0, zIndex: 199,
          background: 'rgba(8,8,8,0.97)', backdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(255,255,255,0.07)',
          padding: '20px 32px',
          display: 'flex', flexDirection: 'column', gap: '20px',
        }}>
          {links.map(link => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => { setActive(link.id); setOpen(false) }}
              style={{
                color: active === link.id ? 'var(--accent)' : 'rgba(255,255,255,0.75)',
                fontSize: '16px', textDecoration: 'none', fontWeight: 500,
                letterSpacing: '1px',
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

    </>
  )
}
