export default function JourneyTransition({ active, title }) {
  return (
    <div
      className={`journey-transition ${active ? 'is-active' : ''}`}
      style={{
        '--portal-image': `url("${import.meta.env.BASE_URL}amen-corner-hero.png")`,
      }}
      aria-hidden="true"
    >
      <div className="journey-transition__image" />
      <div className="journey-transition__tunnel" />
      <div className="journey-transition__content">
        <p className="text-xs uppercase tracking-[0.35em] text-accent/80">Opening</p>
        <p className="journey-transition__title">{title}</p>
      </div>
    </div>
  )
}
