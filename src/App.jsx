import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Resume from './components/Resume'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="portfolio">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Resume />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}
