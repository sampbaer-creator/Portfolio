import { useState } from 'react'
import { FaBars, FaTimes, FaLinkedin, FaGithub } from 'react-icons/fa'

const NAV_LINKS = [
  { label: 'Home', id: 'home' },
  { label: 'Work', id: 'projects' },
  { label: 'Resume', id: 'resume' },
  { label: 'Contact', id: 'contact' },
]

export default function Header({ activeSection }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollToSection = (sectionId, title) => {
    window.dispatchEvent(new CustomEvent('portfolio:navigate', {
      detail: {
        targetId: sectionId,
        title,
      },
    }))

    setMenuOpen(false)
  }

  return (
    <header className="fixed left-0 right-0 top-0 z-50 flex justify-center px-4 pt-4 md:pt-6">
      <div className={`nav-pill container flex max-w-5xl justify-between items-center py-2 ${activeSection !== 'home' ? 'is-scrolled' : ''}`}>
        <button onClick={() => scrollToSection('home', 'Opening Green')} className="logo-mark group" aria-label="Go home">
          <span>SB</span>
        </button>
        
        <nav className="hidden md:flex gap-1">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id, link.label)}
              className={`rounded-full px-4 py-2 text-sm transition-all duration-300 ${
                activeSection === link.id
                  ? 'bg-primary/10 text-primary'
                  : 'text-primary/60 hover:bg-primary/10 hover:text-primary'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a href="https://linkedin.com/in/samuel-baer-090215287" target="_blank" rel="noopener noreferrer" className="text-primary/75 hover:text-secondary transition-colors">
            <FaLinkedin size={20} />
          </a>
          <a href="https://github.com/sampbaer-creator" target="_blank" rel="noopener noreferrer" className="text-primary/75 hover:text-secondary transition-colors">
            <FaGithub size={20} />
          </a>
        </div>

        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-accent" aria-label="Toggle navigation">
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="absolute left-4 right-4 top-20 md:hidden rounded-2xl border border-accent/20 bg-primary/95 p-4 shadow-2xl backdrop-blur-xl">
          <div className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id, link.label)}
                className="rounded-full px-4 py-3 text-left text-parchment/80 hover:bg-accent/10 hover:text-accent transition-colors text-sm"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
