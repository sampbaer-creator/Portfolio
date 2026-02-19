export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 bg-gradient-to-b from-secondary to-primary">
      <div className="container text-center fade-in">
        <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">
          Hi, I&apos;m Samuel
        </h1>
        <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
          A passionate developer seeking internship opportunities to grow my skills and contribute to impactful projects.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="btn btn-primary">
            View My Work
          </button>
          <button className="btn btn-secondary">
            Download Resume
          </button>
        </div>
      </div>
    </section>
  )
}
