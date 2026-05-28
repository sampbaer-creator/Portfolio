import { useEffect, useState } from 'react'

const ROLES = ['BI analyst', 'data storyteller', 'systems thinker', 'developer']

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setRoleIndex((current) => (current + 1) % ROLES.length)
    }, 2200)

    return () => window.clearInterval(interval)
  }, [])

  const enterProjects = (event) => {
    event.preventDefault()

    window.dispatchEvent(new CustomEvent('portfolio:navigate', {
      detail: {
        targetId: 'projects',
        title: 'Selected Work',
      },
    }))
  }

  return (
    <section
      id="home"
      className="hero-portal relative min-h-screen overflow-hidden flex items-center justify-center pt-24"
      style={{
        '--portal-image': `url("${import.meta.env.BASE_URL}amen-corner-hero.png")`,
        backgroundImage: `linear-gradient(180deg, rgba(6, 59, 43, 0.12), rgba(6, 59, 43, 0.58) 64%, rgba(6, 59, 43, 0.9) 100%), url("${import.meta.env.BASE_URL}amen-corner-hero.png")`,
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
        <p className="hero-kicker blur-in">Information Systems Portfolio</p>
        <h1 className="text-5xl md:text-7xl font-bold mb-5 text-parchment font-serif">
          Samuel Baer
        </h1>
        <p className="mb-5 text-parchment/75">
          A <span key={roleIndex} className="role-word font-serif italic text-parchment">{ROLES[roleIndex]}</span> based in Provo, Utah.
        </p>
        <p className="text-lg md:text-xl text-parchment/85 mb-8 max-w-2xl mx-auto leading-relaxed">
          Turning data, reporting workflows, and software projects into clear tools for better decisions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#projects" onClick={enterProjects} className="btn btn-primary">
            View Selected Work
          </a>
          <a href={`${import.meta.env.BASE_URL}resume.pdf`} download="Samuel_Baer_Resume.pdf" className="btn btn-secondary">
            Download Resume
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-accent/80 text-sm uppercase tracking-[0.28em]">
        <span>Explore</span>
        <span className="scroll-line mt-3 block" />
      </div>
    </section>
  )
}
