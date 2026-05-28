import { useState } from 'react'
import { FaBars, FaTimes, FaLinkedin, FaGithub } from 'react-icons/fa'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Resume', 'Contact']

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.toLowerCase())
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setMenuOpen(false)
  }

  return (
    <header className="fixed w-full bg-primary/70 backdrop-blur-xl z-50 border-b border-accent/20">
      <div className="container flex justify-between items-center py-4">
        <button onClick={() => scrollToSection('Home')} className="text-2xl font-bold text-accent font-serif">
          Samuel Baer
        </button>
        
        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollToSection(link)}
              className="text-parchment/80 hover:text-accent transition-colors duration-300 text-sm font-medium"
            >
              {link}
            </button>
          ))}
        </nav>

        {/* Social Links - Desktop */}
        <div className="hidden md:flex gap-4">
          <a href="https://linkedin.com/in/samuel-baer-090215287" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-parchment transition-colors">
            <FaLinkedin size={20} />
          </a>
          <a href="https://github.com/sampbaer-creator" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-parchment transition-colors">
            <FaGithub size={20} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-accent" aria-label="Toggle navigation">
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-primary/95 border-t border-accent/20">
          <div className="container py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => scrollToSection(link)}
                className="text-left text-parchment/80 hover:text-accent transition-colors text-sm"
              >
                {link}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
