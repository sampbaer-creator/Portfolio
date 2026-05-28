import JourneyButton from './JourneyButton'

export default function Explorations() {
  const studies = [
    { title: 'Weather interface study', image: `${import.meta.env.BASE_URL}Weather.webp`, rotate: '-rotate-2' },
    { title: 'Data report composition', image: `${import.meta.env.BASE_URL}R_photo.webp`, rotate: 'rotate-2' },
    { title: 'Outdoor profile frame', image: `${import.meta.env.BASE_URL}Sam_Profile.PNG`, rotate: 'rotate-1' },
    { title: 'Autumn visual direction', image: `${import.meta.env.BASE_URL}autumn-forest-hero.png`, rotate: '-rotate-1' },
  ]

  return (
    <section id="explorations" className="story-section bg-primary">
      <div className="container relative">
        <p className="section-kicker">Explorations</p>
        <h2 className="section-title">Visual Playground</h2>
        <p className="section-intro">
          Small studies and visual fragments that shape the site&apos;s autumn story direction.
        </p>

        <div className="exploration-grid">
          {studies.map((study) => (
            <figure key={study.title} className={`exploration-card reveal ${study.rotate}`}>
              <img src={study.image} alt={study.title} className="h-full w-full object-cover" />
              <figcaption>{study.title}</figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <JourneyButton targetId="stats" title="Progress In Motion">
            Continue to stats
          </JourneyButton>
        </div>
      </div>
    </section>
  )
}
