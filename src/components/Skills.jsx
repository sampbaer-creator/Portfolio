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
    <section id="skills" className="py-20 bg-secondary">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title} className="bg-primary p-6 rounded-lg fade-in border border-slate-700 hover:border-accent transition-colors">
              <h3 className="text-xl font-bold mb-4 text-accent">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 bg-slate-700 text-slate-200 rounded-full text-sm hover:bg-accent hover:text-primary transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
