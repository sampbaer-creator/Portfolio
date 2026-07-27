import { useEffect, useState } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'

const ROLES = ['BI analyst', 'data storyteller', 'systems thinker', 'developer']

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const copyY = useTransform(scrollYProgress, [0, 0.16], [0, reduceMotion ? 0 : 100])
  const copyOpacity = useTransform(scrollYProgress, [0, 0.13], [1, 0])

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
    >
      <div className="container relative grid min-h-[calc(100dvh-6rem)] items-end pb-16 md:items-center">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          style={{ y: copyY, opacity: copyOpacity }}
        >
          <p className="hero-kicker"><span>01</span> Information Systems Portfolio</p>
          <h1 className="hero-title">
            Building clarity<br />from complexity.
          </h1>
          <p className="hero-role">
            Samuel Baer — <span key={roleIndex} className="role-word">{ROLES[roleIndex]}</span>
          </p>
          <p className="hero-summary">
            I transform complex data into clear dashboards, dependable reporting systems, and decisions people can act on.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href="#projects" onClick={enterProjects} className="btn btn-primary">
              View Work
            </a>
            <a href={`${import.meta.env.BASE_URL}resume.pdf`} download="Samuel_Baer_Resume.pdf" className="btn btn-secondary">
              Resume PDF
            </a>
          </div>
          <div className="hero-meta">
            <span>Pleasant Grove, Utah</span>
            <span>Open to internships</span>
            <span>Scroll to explore ↓</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
