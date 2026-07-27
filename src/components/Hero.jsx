import { motion } from 'motion/react'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="site-shell hero-grid">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, x: -28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="eyebrow">Hi,</p>
          <h1>I am <span>Samuel,</span><br />Data &amp; BI Professional</h1>
          <p className="hero-question">How can I help your organization make better decisions?</p>
          <a href="#contact" className="primary-link">Get in touch</a>
        </motion.div>
        <motion.div
          className="hero-portrait-wrap"
          initial={{ opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div className="portrait-shape" aria-hidden="true" />
          <img src={`${import.meta.env.BASE_URL}Sam_Profile.PNG`} alt="Samuel Baer" className="hero-portrait" />
          <span className="portrait-dot dot-one" />
          <span className="portrait-dot dot-two" />
        </motion.div>
      </div>
    </section>
  )
}
