import { useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Journal from './components/Journal'
import Explorations from './components/Explorations'
import Stats from './components/Stats'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'
import LoadingScreen from './components/LoadingScreen'
import JourneyTransition from './components/JourneyTransition'

const SECTIONS = [
  { id: 'home', title: 'The Road Opens', component: <Hero /> },
  { id: 'about', title: 'About Me', component: <About /> },
  { id: 'skills', title: 'Tools For The Journey', component: <Skills /> },
  { id: 'projects', title: 'Selected Work', component: <Projects /> },
  { id: 'journal', title: 'Field Notes', component: <Journal /> },
  { id: 'explorations', title: 'Visual Playground', component: <Explorations /> },
  { id: 'stats', title: 'Progress In Motion', component: <Stats /> },
  { id: 'resume', title: 'The Record', component: <Resume /> },
  { id: 'contact', title: 'The Next Road', component: <Contact /> },
]

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [activeSection, setActiveSection] = useState('home')
  const [journey, setJourney] = useState({
    active: false,
    title: '',
  })

  useEffect(() => {
    let switchTimer
    let resetTimer

    const handleJourney = (event) => {
      const { targetId, title } = event.detail
      const targetExists = SECTIONS.some((section) => section.id === targetId)
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

      if (!targetExists || targetId === activeSection) {
        return
      }

      window.clearTimeout(switchTimer)
      window.clearTimeout(resetTimer)

      if (prefersReducedMotion) {
        setActiveSection(targetId)
        return
      }

      setJourney({ active: true, title })

      switchTimer = window.setTimeout(() => {
        setActiveSection(targetId)
      }, 720)

      resetTimer = window.setTimeout(() => {
        setJourney({ active: false, title: '' })
      }, 1650)
    }

    window.addEventListener('portfolio:navigate', handleJourney)

    return () => {
      window.removeEventListener('portfolio:navigate', handleJourney)
      window.clearTimeout(switchTimer)
      window.clearTimeout(resetTimer)
    }
  }, [activeSection])

  useEffect(() => {
    let locked = false

    const moveBy = (direction) => {
      if (locked || journey.active || isLoading) {
        return
      }

      const currentIndex = SECTIONS.findIndex((section) => section.id === activeSection)
      const nextIndex = Math.max(0, Math.min(SECTIONS.length - 1, currentIndex + direction))

      if (nextIndex === currentIndex) {
        return
      }

      locked = true
      window.setTimeout(() => {
        locked = false
      }, 1200)

      const next = SECTIONS[nextIndex]
      window.dispatchEvent(new CustomEvent('portfolio:navigate', {
        detail: {
          targetId: next.id,
          title: next.title,
        },
      }))
    }

    const handleWheel = (event) => {
      if (Math.abs(event.deltaY) < 24) {
        return
      }

      event.preventDefault()
      moveBy(event.deltaY > 0 ? 1 : -1)
    }

    const handleKeyDown = (event) => {
      if (['ArrowDown', 'PageDown', ' '].includes(event.key)) {
        event.preventDefault()
        moveBy(1)
      }

      if (['ArrowUp', 'PageUp'].includes(event.key)) {
        event.preventDefault()
        moveBy(-1)
      }
    }

    let touchStartY = 0
    const handleTouchStart = (event) => {
      touchStartY = event.touches[0].clientY
    }

    const handleTouchEnd = (event) => {
      const delta = touchStartY - event.changedTouches[0].clientY

      if (Math.abs(delta) > 45) {
        moveBy(delta > 0 ? 1 : -1)
      }
    }

    window.addEventListener('wheel', handleWheel, { passive: false })
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('touchstart', handleTouchStart, { passive: true })
    window.addEventListener('touchend', handleTouchEnd, { passive: true })

    return () => {
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchend', handleTouchEnd)
    }
  }, [activeSection, isLoading, journey.active])

  return (
    <div className="story-app min-h-screen bg-primary text-parchment">
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      <JourneyTransition active={journey.active} title={journey.title} />
      <Header activeSection={activeSection} />
      <main className="stage-viewport" aria-live="polite">
        {SECTIONS.map((section) => (
          <div
            key={section.id}
            className={`stage-panel ${activeSection === section.id ? 'is-active' : ''}`}
            aria-hidden={activeSection !== section.id}
          >
            {section.component}
          </div>
        ))}
      </main>
      <div className="stage-progress" aria-hidden="true">
        {SECTIONS.map((section) => (
          <span key={section.id} className={activeSection === section.id ? 'is-active' : ''} />
        ))}
      </div>
      <Footer />
    </div>
  )
}

export default App
