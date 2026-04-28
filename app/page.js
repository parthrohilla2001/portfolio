import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-slate-100 text-slate-900">
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 py-16">
        <Hero />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}
