import { useState } from 'react'
import { FaBars, FaTimes, FaLinkedin, FaGithub, FaDownload } from 'react-icons/fa'

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
    <header className="fixed w-full bg-secondary bg-opacity-95 backdrop-blur-md z-50 border-b border-slate-700">
      <div className="container flex justify-between items-center py-4">
        <div className="text-2xl font-bold text-accent">Samuel</div>
        
        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollToSection(link)}
              className="hover:text-accent transition-colors duration-300 text-sm font-medium"
            >
              {link}
            </button>
          ))}
        </nav>

        {/* Social Links - Desktop */}
        <div className="hidden md:flex gap-4 items-center">
          <a 
            href="/resume.pdf" 
            download 
            className="btn btn-primary flex items-center gap-2 text-sm"
          >
            <FaDownload size={16} /> Resume
          </a>
          <a href="https://linkedin.com/in/samuel-baer-090215287" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-blue-400 transition-colors">
            <FaLinkedin size={20} />
          </a>
          <a href="https://github.com/sampbaer-creator" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-blue-400 transition-colors">
            <FaGithub size={20} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-primary border-t border-slate-700">
          <div className="container py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => scrollToSection(link)}
                className="text-left hover:text-accent transition-colors text-sm"
              >
                {link}
              </button>
            ))}
            <a 
              href="/resume.pdf" 
              download 
              className="btn btn-primary flex items-center gap-2 text-sm w-fit"
            >
              <FaDownload size={16} /> Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
