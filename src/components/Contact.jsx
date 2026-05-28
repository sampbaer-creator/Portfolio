import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa'

export default function Contact() {
  return (
    <section id="contact" className="story-section bg-primary">
      <div className="container max-w-2xl relative">
        <p className="section-kicker">Contact</p>
        <h2 className="section-title">Let&apos;s Connect</h2>
        <p className="section-intro">
          Open to internship opportunities, collaboration, and conversations about useful systems.
        </p>

        <div className="story-panel reveal space-y-6 mx-auto">
          <div className="flex items-center justify-center gap-4">
            <FaEnvelope className="text-accent text-xl" />
            <a href="mailto:Sampbaer@gmail.com" className="text-primary/80 hover:text-secondary transition-colors">
              Sampbaer@gmail.com
            </a>
          </div>
          <div className="flex items-center justify-center gap-4">
            <FaPhone className="text-accent text-xl" />
            <a href="tel:+13465465647" className="text-primary/80 hover:text-secondary transition-colors">
              (346) 546-5647
            </a>
          </div>
          <div className="flex items-center justify-center gap-4">
            <FaLinkedin className="text-accent text-xl" />
            <a href="https://linkedin.com/in/samuel-baer-090215287" target="_blank" rel="noopener noreferrer" className="text-primary/80 hover:text-secondary transition-colors">
              LinkedIn Profile
            </a>
          </div>
          <div className="flex items-center justify-center gap-4">
            <FaGithub className="text-accent text-xl" />
            <a href="https://github.com/sampbaer-creator" target="_blank" rel="noopener noreferrer" className="text-primary/80 hover:text-secondary transition-colors">
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
