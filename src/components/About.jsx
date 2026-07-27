import JourneyButton from './JourneyButton'

export default function About() {
  return (
    <section id="about" className="story-section">
      <div className="story-path" aria-hidden="true" />
      <div className="container relative">
        <p className="section-kicker">Profile</p>
        <h2 className="section-title">Built For Clarity</h2>
        <p className="section-intro">
          Focused on business intelligence, data quality, and useful systems that make work easier to understand.
        </p>
        <div className="grid gap-6 md:grid-cols-[0.78fr_1.22fr] md:items-end">
          <div className="reveal">
            <img 
               src={`${import.meta.env.BASE_URL}Sam_Profile.PNG`} 
               alt="Samuel Baer" 
               className="profile-image"
            />
          </div>
          <div className="story-panel reveal">
            <p className="text-ink/80 mb-4 leading-relaxed">
              I&apos;m an Information Systems student with hands-on experience in business intelligence, data analytics, reporting workflows, and software development.
            </p>
            <p className="text-ink/70 mb-6 leading-relaxed">
              My work is centered on turning messy information into clear dashboards, dependable reports, and practical tools that support better decisions.
            </p>
            <div className="detail-grid">
              <p><span>Location</span>Pleasant Grove, Utah</p>
              <p><span>Email</span>Sampbaer@gmail.com</p>
              <p><span>Phone</span>(346) 546-5647</p>
              <p><span>Looking for</span>Internship opportunities</p>
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
