import JourneyButton from './JourneyButton'

export default function About() {
  return (
    <section id="about" className="story-section bg-primary">
      <div className="story-path" aria-hidden="true" />
      <div className="container relative">
        <p className="section-kicker">Profile</p>
        <h2 className="section-title">Built For Clarity</h2>
        <p className="section-intro">
          Focused on business intelligence, data quality, and useful systems that make work easier to understand.
        </p>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <img 
               src={`${import.meta.env.BASE_URL}Sam_Profile.PNG`} 
               alt="Samuel Baer" 
               className="w-full max-h-[560px] object-cover border border-accent/30 shadow-2xl shadow-black/40"
            />
          </div>
          <div className="story-panel reveal">
            <p className="text-primary/85 mb-4 leading-relaxed">
              I&apos;m an Information Systems student with hands-on experience in business intelligence, data analytics, reporting workflows, and software development.
            </p>
            <p className="text-primary/70 mb-6 leading-relaxed">
              My work is centered on turning messy information into clear dashboards, dependable reports, and practical tools that support better decisions.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              <p className="text-primary/80"><span className="font-bold text-secondary">Location:</span> Provo, Utah</p>
              <p className="text-primary/80"><span className="font-bold text-secondary">Email:</span> Sampbaer@gmail.com</p>
              <p className="text-primary/80"><span className="font-bold text-secondary">Phone:</span> (346) 546-5647</p>
              <p className="text-primary/80"><span className="font-bold text-secondary">Looking for:</span> Internship Opportunities</p>
            </div>
          </div>
        </div>
        <div className="mt-12 flex justify-center">
          <JourneyButton targetId="skills" title="Technical Toolkit">
            Continue to skills
          </JourneyButton>
        </div>
      </div>
    </section>
  )
}
