import { useState } from 'react'
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission - you can integrate with a service like EmailJS or Formspree
    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-20 bg-primary">
      <div className="container max-w-3xl">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
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

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4 fade-in">
            <input
              type="text"
              name="name"
              placeholder="Samuel Baer"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-secondary border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-accent transition-colors"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-secondary border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-accent transition-colors"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full px-4 py-2 bg-secondary border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-accent transition-colors resize-none"
            ></textarea>
            <button type="submit" className="btn btn-primary w-full">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
