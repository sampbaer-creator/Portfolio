import JourneyButton from './JourneyButton'

export default function About() {
  return (
    <section id="about" className="story-section bg-primary">
      <div className="story-path" aria-hidden="true" />
      <div className="container relative">
        <p className="section-kicker">Chapter I</p>
        <h2 className="section-title">About Me</h2>
        <p className="section-intro">
          A grounded beginning: data, systems, and steady work shaped into useful software.
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
              Motivated Information Systems student with hands-on experience in data analysis, software development, and business operations. Passionate about leveraging technology to improve decision-making through data-driven insights.
            </p>
            <p className="text-primary/70 mb-6 leading-relaxed">
              When I&apos;m not coding, you can find me running trails, staying active with sports, and testing new tech outdoors,
              all while balancing school and personal projects that sharpen my professional skills.
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
          <JourneyButton targetId="skills" title="Tools For The Journey">
            Continue to skills
          </JourneyButton>
        </div>
      </div>
    </section>
  )
}
