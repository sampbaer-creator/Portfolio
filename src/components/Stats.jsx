import JourneyButton from './JourneyButton'

export default function Stats() {
  const stats = [
    { value: '3+', label: 'Portfolio projects' },
    { value: '2027', label: 'Expected graduation' },
    { value: '100%', label: 'Available for internships' },
  ]

  return (
    <section id="stats" className="story-section bg-secondary/70">
      <div className="container relative">
        <p className="section-kicker">Measures</p>
        <h2 className="section-title">Progress In Motion</h2>
        <div className="grid gap-5 md:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-card reveal">
              <p className="font-serif text-5xl text-primary">{stat.value}</p>
              <p className="mt-3 text-sm uppercase tracking-[0.22em] text-primary/55">{stat.label}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <JourneyButton targetId="resume" title="The Record">
            Continue to resume
          </JourneyButton>
        </div>
      </div>
    </section>
  )
}
