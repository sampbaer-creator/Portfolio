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
      className="hero-portal relative min-h-[100dvh] overflow-hidden pt-24"
      style={{
        '--portal-image': `url("${import.meta.env.BASE_URL}amen-corner-hero.png")`,
      }}
    >
      <div className="hero-grid" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      <div className="container relative grid min-h-[calc(100dvh-6rem)] items-center gap-10 pb-16 md:grid-cols-[1.2fr_0.8fr]">
        <div className="hero-copy fade-in">
          <p className="hero-kicker">Information Systems Portfolio</p>
          <h1 className="hero-title">
            Samuel Baer builds decision systems.
          </h1>
          <p className="hero-role">
            <span key={roleIndex} className="role-word">{ROLES[roleIndex]}</span> based in Provo, Utah.
          </p>
          <p className="hero-summary">
            Business intelligence, reporting workflows, and software projects shaped into clear tools for faster decisions.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href="#projects" onClick={enterProjects} className="btn btn-primary">
              View Work
            </a>
            <a href={`${import.meta.env.BASE_URL}resume.pdf`} download="Samuel_Baer_Resume.pdf" className="btn btn-secondary">
              Resume PDF
            </a>
          </div>
        </div>

        <div className="hero-visual fade-in">
          <img src={`${import.meta.env.BASE_URL}amen-corner-hero.png`} alt="Green golf course landscape used as a personal visual marker" />
          <div className="hero-plate">
            <span>BI</span>
            <p>SQL, Power BI, Python, R</p>
          </div>
        </div>
      </div>
    </section>
  )
}
