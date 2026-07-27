import { lazy, Suspense, useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Stats from './components/Stats'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'
import LoadingScreen from './components/LoadingScreen'

const CinematicCanvas = lazy(() => import('./components/CinematicCanvas'))

const SECTION_IDS = [
  'home',
  'about',
  'skills',
  'projects',
  'stats',
  'resume',
  'contact',
]

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [activeSection, setActiveSection] = useState('home')
  useEffect(() => {
    const handleJourney = (event) => {
      const { targetId } = event.detail
      const target = document.getElementById(targetId)
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

      if (!target) {
        return
      }

      target.scrollIntoView({
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
        block: 'start',
      })
    }

    window.addEventListener('portfolio:navigate', handleJourney)

    return () => {
      window.removeEventListener('portfolio:navigate', handleJourney)
    }
  }, [])

  useEffect(() => {
    const sections = SECTION_IDS
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    const observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

      if (visible?.target?.id) {
        setActiveSection(visible.target.id)
      }
    }, {
      rootMargin: '-28% 0px -58% 0px',
      threshold: [0.08, 0.22, 0.45],
    })

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <div id="story-root" className="story-app min-h-screen bg-paper text-ink">
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      <Suspense fallback={<div className="webgl-fallback is-visible" aria-hidden="true" />}>
        <CinematicCanvas />
      </Suspense>
      <Header activeSection={activeSection} />
      <main className="stage-viewport">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Stats />
        <Resume />
        <Contact />
      </main>
      <div className="stage-progress" aria-hidden="true">
        {SECTION_IDS.map((id) => (
          <span key={id} className={activeSection === id ? 'is-active' : ''} />
        ))}
      </div>
      <Footer />
    </div>
  )
}

export default App
