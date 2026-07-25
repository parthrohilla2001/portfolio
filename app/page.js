import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Resume from '../components/Resume'
import Portfolio from '../components/Portfolio'

export default function Page() {
  return (
    <main style={{ background: '#080808', color: '#fff', minHeight: '100vh' }}>
      <Navbar />
      <Hero />
      <About />
      <Resume />
      <Portfolio />
    </main>
  )
}
