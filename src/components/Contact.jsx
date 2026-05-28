import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa'

export default function Contact() {
  return (
    <section id="contact" className="story-section bg-primary">
      <div className="container max-w-2xl relative">
        <p className="section-kicker">The Next Road</p>
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-intro">
          Open to internship opportunities, collaboration, and conversations about useful systems.
        </p>

        <div className="story-panel reveal space-y-6 mx-auto">
          <div className="flex items-center justify-center gap-4">
            <FaEnvelope className="text-accent text-xl" />
            <a href="mailto:Sampbaer@gmail.com" className="text-parchment/80 hover:text-accent transition-colors">
              Sampbaer@gmail.com
            </a>
          </div>
          <div className="flex items-center justify-center gap-4">
            <FaPhone className="text-accent text-xl" />
            <a href="tel:+13465465647" className="text-parchment/80 hover:text-accent transition-colors">
              (346) 546-5647
            </a>
          </div>
          <div className="flex items-center justify-center gap-4">
            <FaLinkedin className="text-accent text-xl" />
            <a href="https://linkedin.com/in/samuel-baer-090215287" target="_blank" rel="noopener noreferrer" className="text-parchment/80 hover:text-accent transition-colors">
              LinkedIn Profile
            </a>
          </div>
          <div className="flex items-center justify-center gap-4">
            <FaGithub className="text-accent text-xl" />
            <a href="https://github.com/sampbaer-creator" target="_blank" rel="noopener noreferrer" className="text-parchment/80 hover:text-accent transition-colors">
              GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
