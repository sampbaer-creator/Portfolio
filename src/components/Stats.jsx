import JourneyButton from './JourneyButton'

export default function Stats() {
  const stats = [
    { value: '4', label: 'Featured projects' },
    { value: '2027', label: 'Expected graduation' },
    { value: 'Open', label: 'Internship search' },
  ]

  return (
    <section id="stats" className="story-section compact-section">
      <div className="container relative">
        <p className="section-kicker">Snapshot</p>
        <h2 className="section-title">Progress Snapshot</h2>
        <div className="stats-strip">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-card reveal">
              <p className="text-5xl text-ink">{stat.value}</p>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <JourneyButton targetId="resume" title="Resume">
            Continue to resume
          </JourneyButton>
        </div>
      </div>
    </section>
  )
}
