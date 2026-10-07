import { profile } from '../data/profile'

export default function Contact() {
  return (
    <section id="contact" className="section contact-section" aria-labelledby="contact-title">
      <h2 id="contact-title">Contact</h2>
      <p className="contact-description">For work enquiries or questions about my projects, email me.</p>
      <a className="contact-email" href={`mailto:${profile.email}`}>{profile.email}<span aria-hidden="true">↗</span></a>
      <div className="contact-details">
        <a href="tel:+13465465647">{profile.phone}</a>
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
        <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span></a>
      </div>
    </section>
  )
}
