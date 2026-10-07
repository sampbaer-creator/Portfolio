import { profile } from '../data/profile'

export default function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <img className="portrait" src={`${import.meta.env.BASE_URL}samuel-baer.webp`} alt="Samuel Baer" width="700" height="700" loading="eager" />
      <p className="eyebrow">Portfolio / 2026</p>
      <h1 id="hero-title">Samuel Baer</h1>
      <p className="hero-role">Business intelligence,<br />data analysis & development.</p>
      <p className="hero-description">SQL reporting, financial analysis, and web applications. Information Systems at Utah Valley University.</p>
      <div className="hero-actions">
        <a className="button button-primary" href={profile.resume} download="Samuel_Baer_Resume.pdf">Download resume <span aria-hidden="true">↓</span></a>
        <a className="text-link" href="#projects">View projects <span aria-hidden="true">↗</span></a>
      </div>
      <p className="hero-location">{profile.location}</p>
      <div className="hero-social" aria-label="Professional profiles">
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
        <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span></a>
        <a href={`mailto:${profile.email}`}>Email <span aria-hidden="true">↗</span></a>
      </div>
    </section>
  )
}
