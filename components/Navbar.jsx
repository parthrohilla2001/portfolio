"use client"
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-40 bg-white/70 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
        <div className="text-lg md:text-xl font-semibold">Parth Rohilla</div>
        <nav className="hidden md:flex gap-6 items-center text-sm md:text-base font-medium">
          <a href="#skills" className="hover:text-slate-700">Skills</a>
          <a href="#experience" className="hover:text-slate-700">Experience</a>
          <a href="#projects" className="hover:text-slate-700">Projects</a>
          <a href="#achievements" className="hover:text-slate-700">Achievements</a>
          <a href="#contact" className="hover:text-slate-700">Contact</a>
          <a href="#contact" className="bg-brand-500 text-white px-4 py-2 rounded-md shadow hover:opacity-95">Hire me</a>
        </nav>
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="menu">
          <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-slate-100 bg-white/95">
          <div className="px-4 py-4 flex flex-col gap-3">
            <a href="#skills" onClick={() => setOpen(false)} className="py-3 text-lg">Skills</a>
            <a href="#experience" onClick={() => setOpen(false)} className="py-3 text-lg">Experience</a>
            <a href="#projects" onClick={() => setOpen(false)} className="py-3 text-lg">Projects</a>
            <a href="#achievements" onClick={() => setOpen(false)} className="py-3 text-lg">Achievements</a>
            <a href="#contact" onClick={() => setOpen(false)} className="py-3 text-lg">Contact</a>
            <a href="#contact" onClick={() => setOpen(false)} className="w-full text-center bg-brand-500 text-white px-4 py-3 rounded-md">Hire me</a>
          </div>
        </div>
      )}
    </header>
  )
}
