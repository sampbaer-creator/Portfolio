import JourneyButton from './JourneyButton'

export default function Skills() {
  const skillCategories = [
    {
      title: "Data Analytics & BI",
      skills: ["Data Analytics", "Power BI", "Excel", "Statistics", "Data Visualization"]
    },
    {
      title: "Programming Languages",
      skills: ["SQL", "Python", "R", "C#"]
    },
    {
      title: "Systems & Workflow",
      skills: ["Azure", "Database Management", "Systems Analysis", "Data Cleaning", "Reporting"]
    }
  ]

  return (
    <section id="skills" className="story-section bg-secondary/80">
      <div className="story-path" aria-hidden="true" />
      <div className="container relative">
        <p className="section-kicker">Toolkit</p>
        <h2 className="section-title">Technical Toolkit</h2>
        <p className="section-intro">
          A practical stack for business intelligence, analytics, reporting, and software-backed workflows.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title} className="chapter-card reveal">
              <h3 className="text-xl font-bold mb-4 text-secondary font-serif">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="skill-chip"
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
