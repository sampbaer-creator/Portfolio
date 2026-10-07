import { useEffect, useRef, useState } from 'react'
import { profile } from '../data/profile'

const sections = [['About', 'about'], ['Experience', 'experience'], ['Projects', 'projects'], ['Contact', 'contact']]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('about')
  const menuButton = useRef(null)

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape' && menuOpen) {
        setMenuOpen(false)
        menuButton.current?.focus()
      }
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [menuOpen])

  useEffect(() => {
    const visibleSections = new Set()
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) visibleSections.add(entry.target.id)
        else visibleSections.delete(entry.target.id)
      }
      const firstVisible = sections.find(([, id]) => visibleSections.has(id))
      if (firstVisible) setActiveSection(firstVisible[1])
    }, { rootMargin: '-90px 0px -45% 0px', threshold: 0 })
    for (const [, id] of sections) {
      const section = document.getElementById(id)
      if (section) observer.observe(section)
    }
    return () => observer.disconnect()
  }, [])

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#home" className="wordmark" onClick={() => setMenuOpen(false)}>SB<span aria-hidden="true"> / </span><span className="wordmark-label">Portfolio</span></a>
        <button ref={menuButton} className="menu-toggle" aria-expanded={menuOpen} aria-controls="navigation" onClick={() => setMenuOpen((open) => !open)}>{menuOpen ? 'Close' : 'Menu'} <span aria-hidden="true">{menuOpen ? '−' : '+'}</span></button>
        <nav id="navigation" className={`navigation ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
          {sections.map(([label, id]) => (
            <a key={id} href={`#${id}`} aria-current={activeSection === id ? 'location' : undefined} onClick={() => { setActiveSection(id); setMenuOpen(false) }}>{label}</a>
          ))}
          <a className="nav-resume" href={profile.resume} download="Samuel_Baer_Resume.pdf">Resume <span aria-hidden="true">↓</span></a>
        </nav>
      </div>
    </header>
  )
}
