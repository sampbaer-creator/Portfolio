import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-primary">
      <div className="container max-w-2xl">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="space-y-6 fade-in">
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-accent text-xl" />
            <a href="mailto:Sampbaer@gmail.com" className="text-slate-300 hover:text-accent transition-colors">
              Sampbaer@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-4">
            <FaPhone className="text-accent text-xl" />
            <a href="tel:+13465465647" className="text-slate-300 hover:text-accent transition-colors">
              (346) 546-5647
            </a>
          </div>
          <div className="flex items-center gap-4">
            <FaLinkedin className="text-accent text-xl" />
            <a href="https://linkedin.com/in/samuel-baer-090215287" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-accent transition-colors">
              LinkedIn Profile
            </a>
          </div>
          <div className="flex items-center gap-4">
            <FaGithub className="text-accent text-xl" />
            <a href="https://github.com/sampbaer-creator" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-accent transition-colors">
              GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
