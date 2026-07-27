import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

export default function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="site-shell contact-grid">
        <div>
          <p className="section-label">Contact</p>
          <h2>Let&apos;s build something useful together.</h2>
          <p>Open to internships, analytics projects, and conversations about data-driven systems.</p>
          <div className="social-links">
            <a href="https://github.com/sampbaer-creator" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
            <a href="https://linkedin.com/in/samuel-p-baer" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
          </div>
        </div>
        <form action="mailto:Sampbaer@gmail.com" method="post" encType="text/plain" className="contact-form">
          <label>
            Full name
            <input type="text" name="name" required />
          </label>
          <label>
            Email address
            <input type="email" name="email" required />
          </label>
          <label>
            Message
            <textarea name="message" rows="4" required />
          </label>
          <button type="submit">Send message</button>
        </form>
      </div>
      <footer className="site-shell site-footer">
        <p>© {new Date().getFullYear()} Samuel Baer. All rights reserved.</p>
        <a href={`${import.meta.env.BASE_URL}resume.pdf`} target="_blank" rel="noreferrer">View resume</a>
      </footer>
    </section>
  )
}
