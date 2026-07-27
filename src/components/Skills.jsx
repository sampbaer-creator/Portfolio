import JourneyButton from './JourneyButton'
import {
  SiDotnet,
  SiGithub,
  SiPhp,
  SiPython,
  SiR,
  SiTailwindcss,
} from 'react-icons/si'
import { FaChartBar, FaCloud, FaCode, FaDatabase, FaFileExcel } from 'react-icons/fa'

export default function Skills() {
  const skillCategories = [
    {
      title: "Data Analytics & BI",
      skills: [
        { name: "Power BI", icon: FaChartBar },
        { name: "Excel", icon: FaFileExcel },
        { name: "Statistics", icon: FaDatabase },
        { name: "Data Visualization", icon: FaDatabase },
      ]
    },
    {
      title: "Programming Languages",
      skills: [
        { name: "SQL", icon: FaDatabase },
        { name: "Python", icon: SiPython },
        { name: "R", icon: SiR },
        { name: "C#", icon: FaCode },
        { name: "PHP", icon: SiPhp },
      ]
    },
    {
      title: "Systems & Workflow",
      skills: [
        { name: "Azure", icon: FaCloud },
        { name: ".NET MAUI", icon: SiDotnet },
        { name: "GitHub", icon: SiGithub },
        { name: "Tailwind CSS", icon: SiTailwindcss },
        { name: "Data Cleaning", icon: FaDatabase },
      ]
    }
  ]

  return (
    <section id="skills" className="story-section">
      <div className="story-path" aria-hidden="true" />
      <div className="container relative">
        <p className="section-kicker">Toolkit</p>
        <h2 className="section-title">Technical Toolkit</h2>
        <p className="section-intro">
          A practical stack for business intelligence, analytics, reporting, and software-backed workflows.
        </p>
        <div className="skill-layout">
          {skillCategories.map((category, index) => (
            <div key={category.title} className="chapter-card reveal" style={{ '--i': index }}>
              <span className="chapter-index">0{index + 1}</span>
              <h3 className="text-xl font-bold mb-4 text-ink">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => {
                  const Icon = skill.icon
                  return (
                  <span 
                    key={skill.name}
                    className="skill-chip"
                  >
                    <Icon aria-hidden="true" /> {skill.name}
                  </span>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <JourneyButton targetId="resume" title="Experience">
            Continue to experience
          </JourneyButton>
        </div>
      </div>
    </section>
  )
}
