import { useState } from 'react'
import { FaBars, FaTimes, FaLinkedin, FaGithub } from 'react-icons/fa'
import { AnimatePresence, motion, useScroll, useTransform } from 'motion/react'
import PropTypes from 'prop-types'

const NAV_LINKS = [
  { label: 'Home', id: 'home' },
  { label: 'Work', id: 'projects' },
  { label: 'Resume', id: 'resume' },
  { label: 'Contact', id: 'contact' },
]

export default function Header({ activeSection }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const navScale = useTransform(scrollYProgress, [0, 0.08], [1, 0.97])

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
    <motion.header
      className="fixed left-0 right-0 top-0 z-50 flex justify-center px-4 pt-4 md:pt-6"
      initial={{ y: -28, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      style={{ scale: navScale }}
    >
      <div className={`nav-pill container flex max-w-6xl justify-between items-center py-2 ${activeSection !== 'home' ? 'is-scrolled' : ''}`}>
        <button onClick={() => scrollToSection('home', 'Home')} className="logo-mark group" aria-label="Go home">
          <span>SB</span>
        </button>
        
        <nav className="hidden md:flex gap-1">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id, link.label)}
              className={`rounded-full px-4 py-2 text-sm transition-all duration-300 ${
                activeSection === link.id
                  ? 'bg-ink text-paper'
                  : 'text-ink/60 hover:bg-ink/10 hover:text-ink'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a href="https://linkedin.com/in/samuel-p-baer" target="_blank" rel="noopener noreferrer" className="text-ink/70 hover:text-lime transition-colors">
            <FaLinkedin size={20} />
          </a>
          <a href="https://github.com/sampbaer-creator" target="_blank" rel="noopener noreferrer" className="text-ink/70 hover:text-lime transition-colors">
            <FaGithub size={20} />
          </a>
        </div>

        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-ink" aria-label="Toggle navigation">
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      <AnimatePresence>
      {menuOpen && (
        <motion.div
          className="mobile-menu"
          initial={{ opacity: 0, y: -12, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -8, scale: 0.98 }}
          transition={{ duration: 0.25 }}
        >
          <div className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id, link.label)}
                className="rounded-full px-4 py-3 text-left text-ink/70 hover:bg-ink hover:text-paper transition-colors text-sm"
              >
                {link.label}
              </button>
            ))}
          </div>
        </motion.div>
      )}
      </AnimatePresence>
    </motion.header>
  )
}

Header.propTypes = {
  activeSection: PropTypes.string.isRequired,
}
