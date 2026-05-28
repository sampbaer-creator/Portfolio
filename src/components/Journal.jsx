import { FaArrowRight } from 'react-icons/fa'
import JourneyButton from './JourneyButton'

export default function Journal() {
  const notes = [
    {
      title: 'The rhythm of useful dashboards',
      meta: '4 min read',
      date: 'Data Notes',
      image: `${import.meta.env.BASE_URL}R_photo.webp`,
    },
    {
      title: 'Designing tools with less noise',
      meta: '3 min read',
      date: 'Systems',
      image: `${import.meta.env.BASE_URL}Weather.webp`,
    },
    {
      title: 'What event work taught me about operations',
      meta: '5 min read',
      date: 'Business',
      image: `${import.meta.env.BASE_URL}Sam_Profile.PNG`,
    },
    {
      title: 'Why constraints create better student projects',
      meta: '3 min read',
      date: 'Reflection',
      image: `${import.meta.env.BASE_URL}autumn-forest-hero.png`,
    },
  ]

  return (
    <section id="journal" className="story-section bg-secondary/70">
      <div className="container relative">
        <p className="section-kicker">Field Notes</p>
        <h2 className="section-title">Recent Thoughts</h2>
        <p className="section-intro">
          Short notes on development, analytics, operations, and the habits behind practical work.
        </p>

        <div className="space-y-4">
          {notes.map((note) => (
            <article key={note.title} className="journal-entry group reveal">
              <img src={note.image} alt="" className="h-16 w-16 rounded-full object-cover" />
              <div className="min-w-0 flex-1">
                <h3 className="font-serif text-xl text-primary">{note.title}</h3>
                <p className="text-sm text-primary/55">{note.date} / {note.meta}</p>
              </div>
              <FaArrowRight className="text-accent transition-transform duration-300 group-hover:translate-x-1" />
            </article>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <JourneyButton targetId="explorations" title="Visual Playground">
            Continue to explorations
          </JourneyButton>
        </div>
      </div>
    </section>
  )
}
