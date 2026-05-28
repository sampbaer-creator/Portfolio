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

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [journey, setJourney] = useState({
    active: false,
    title: '',
  })

  useEffect(() => {
    let scrollTimer
    let resetTimer

    const handleJourney = (event) => {
      const { targetId, title } = event.detail
      const target = document.getElementById(targetId)
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

      if (!target) {
        return
      }

      window.clearTimeout(scrollTimer)
      window.clearTimeout(resetTimer)

      if (prefersReducedMotion) {
        target.scrollIntoView({ behavior: 'auto', block: 'start' })
        return
      }

      setJourney({ active: true, title })

      scrollTimer = window.setTimeout(() => {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 760)

      resetTimer = window.setTimeout(() => {
        setJourney({ active: false, title: '' })
      }, 1650)
    }

    window.addEventListener('portfolio:navigate', handleJourney)

    return () => {
      window.removeEventListener('portfolio:navigate', handleJourney)
      window.clearTimeout(scrollTimer)
      window.clearTimeout(resetTimer)
    }
  }, [])

  return (
    <div className="story-app min-h-screen bg-primary text-parchment">
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      <JourneyTransition active={journey.active} title={journey.title} />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journal />
        <Explorations />
        <Stats />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
