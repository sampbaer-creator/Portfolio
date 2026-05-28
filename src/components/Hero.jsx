export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden flex items-center justify-center pt-24"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(12, 12, 8, 0.34), rgba(12, 12, 8, 0.76) 64%, #100f0b 100%), url("${import.meta.env.BASE_URL}autumn-forest-hero.png")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="leaf-drift" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>

      <div className="container relative text-center fade-in">
        <p className="section-kicker">The Road Opens</p>
        <h1 className="text-5xl md:text-7xl font-bold mb-5 text-parchment font-serif">
          Samuel Baer
        </h1>
        <p className="text-lg md:text-xl text-parchment/85 mb-8 max-w-2xl mx-auto leading-relaxed">
          Information systems student and developer building practical tools from data, code, and clear decision-making.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#projects" className="btn btn-primary">
            View My Work
          </a>
          <a href={`${import.meta.env.BASE_URL}resume.pdf`} download="Samuel_Baer_Resume.pdf" className="btn btn-secondary">
            Download Resume
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-accent/80 text-sm uppercase tracking-[0.28em]">
        Scroll
      </div>
    </section>
  )
}
