import JourneyButton from './JourneyButton'

export default function Skills() {
  const skillCategories = [
    {
      title: "Data Analytics & BI",
      skills: ["Data Analytics", "Power BI", "Excel", "Statistics", "Data Visualization"]
    },
    {
      title: "Programming Languages",
      skills: ["Python", "R", "C#", "SQL"]
    },
    {
      title: "Cloud & Tools",
      skills: ["Azure", "Database Management", "Systems Analysis", "Critical Thinking", "Problem Solving"]
    }
  ]

  return (
    <section id="skills" className="story-section bg-secondary/80">
      <div className="story-path" aria-hidden="true" />
      <div className="container relative">
        <p className="section-kicker">Chapter II</p>
        <h2 className="section-title">Tools For The Journey</h2>
        <p className="section-intro">
          The toolkit is practical: analytics, programming, cloud systems, and the judgment to connect them.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title} className="chapter-card reveal">
              <h3 className="text-xl font-bold mb-4 text-accent font-serif">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 bg-moss/70 text-parchment rounded-full text-sm border border-accent/15 hover:bg-accent hover:text-primary transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <JourneyButton targetId="projects" title="Selected Work">
            Continue to work
          </JourneyButton>
        </div>
      </div>
    </section>
  )
}
