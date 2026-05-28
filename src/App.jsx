import { useState } from 'react'
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

function App() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className="story-app min-h-screen bg-primary text-parchment">
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
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
