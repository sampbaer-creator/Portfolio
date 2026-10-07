import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main" className="container portfolio-layout">
        <Hero />
        <div className="portfolio-content">
          <About />
          <Resume />
          <Projects />
          <Skills />
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  )
}
