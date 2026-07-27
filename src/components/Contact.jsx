import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa'

export default function Contact() {
  return (
    <section id="contact" className="story-section">
      <div className="container relative">
        <p className="section-kicker">Contact</p>
        <h2 className="section-title">Let&apos;s Connect</h2>
        <p className="section-intro">
          Open to internship opportunities, collaboration, and conversations about useful systems.
        </p>

        <div className="contact-grid reveal">
          <div>
            <FaEnvelope />
            <a href="mailto:Sampbaer@gmail.com">
              Sampbaer@gmail.com
            </a>
          </div>
          <div>
            <FaPhone />
            <a href="tel:+13465465647">
              (346) 546-5647
            </a>
          </div>
          <div>
            <FaLinkedin />
            <a href="https://linkedin.com/in/samuel-p-baer" target="_blank" rel="noopener noreferrer">
              LinkedIn Profile
            </a>
          </div>
          <div>
            <FaGithub />
            <a href="https://github.com/sampbaer-creator" target="_blank" rel="noopener noreferrer">
              GitHub Profile
            </a>
          </div>
        </div>
        <p className="mt-10 text-center text-sm text-primary/50">
          &copy; {new Date().getFullYear()} Samuel Baer. Built with React, Vite, and Tailwind CSS.
        </p>
      </div>
    </section>
  )
}
