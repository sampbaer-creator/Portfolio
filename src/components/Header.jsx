import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const links = [
  ['About', 'about'],
  ['Tech Stack', 'skills'],
  ['Experience', 'experience'],
  ['Projects', 'projects'],
  ['Contact', 'contact'],
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="site-shell nav-wrap">
        <a className="brand" href="#home" aria-label="Samuel Baer home">
          <span>SB</span>
          Samuel Baer
        </a>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <FaTimes /> : <FaBars />}
        </button>
        <nav className={open ? 'nav-links is-open' : 'nav-links'}>
          {links.map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <a className="nav-resume" href={`${import.meta.env.BASE_URL}resume.pdf`} target="_blank" rel="noreferrer">
            Resume
          </a>
        </nav>
      </div>
    </header>
  )
}
