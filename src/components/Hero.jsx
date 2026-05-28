import { useState } from 'react'

export default function Hero() {
  const [isEntering, setIsEntering] = useState(false)

  const enterProjects = (event) => {
    event.preventDefault()

    if (isEntering) {
      return
    }

    const projects = document.getElementById('projects')
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      projects?.scrollIntoView({ behavior: 'auto', block: 'start' })
      return
    }

    setIsEntering(true)

    window.setTimeout(() => {
      if (projects) {
        projects.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 720)

    window.setTimeout(() => {
      setIsEntering(false)
    }, 1450)
  }

  return (
    <section
      id="home"
      className={`hero-portal relative min-h-screen overflow-hidden flex items-center justify-center pt-24 ${isEntering ? 'is-entering' : ''}`}
      style={{
        '--portal-image': `url("${import.meta.env.BASE_URL}autumn-forest-hero.png")`,
        backgroundImage: `linear-gradient(180deg, rgba(12, 12, 8, 0.34), rgba(12, 12, 8, 0.76) 64%, #100f0b 100%), url("${import.meta.env.BASE_URL}autumn-forest-hero.png")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="leaf-drift" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>

      <div className="container relative text-center fade-in">
        <p className="section-kicker">The Road Opens</p>
        <h1 className="text-5xl md:text-7xl font-bold mb-5 text-parchment font-serif">
          Samuel Baer
        </h1>
        <p className="text-lg md:text-xl text-parchment/85 mb-8 max-w-2xl mx-auto leading-relaxed">
          Information systems student and developer building practical tools from data, code, and clear decision-making.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#projects" onClick={enterProjects} className="btn btn-primary">
            {isEntering ? 'Entering The Path' : 'View My Work'}
          </a>
          <a href={`${import.meta.env.BASE_URL}resume.pdf`} download="Samuel_Baer_Resume.pdf" className="btn btn-secondary">
            Download Resume
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-accent/80 text-sm uppercase tracking-[0.28em]">
        Scroll
      </div>

      <div className="portal-transition" aria-hidden="true">
        <div className="portal-transition__image" />
        <div className="portal-transition__veil" />
        <p className="portal-transition__text">Into the work</p>
      </div>
    </section>
  )
}
