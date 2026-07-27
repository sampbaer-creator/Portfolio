import {
  SiDotnet, SiGithub, SiJavascript, SiPhp, SiPython, SiR, SiReact, SiTailwindcss,
} from 'react-icons/si'
import { FaChartBar, FaCloud, FaCode, FaDatabase, FaFileExcel } from 'react-icons/fa'

const groups = [
  {
    title: 'Analytics and Business Intelligence',
    items: [
      ['Power BI', FaChartBar], ['Excel', FaFileExcel], ['SQL', FaDatabase],
      ['Data Visualization', FaChartBar], ['Statistical Modeling', FaDatabase],
    ],
  },
  {
    title: 'Languages, Frameworks and Libraries',
    items: [
      ['Python', SiPython], ['R', SiR], ['C# / .NET', SiDotnet],
      ['JavaScript', SiJavascript], ['React', SiReact], ['PHP', SiPhp],
    ],
  },
  {
    title: 'Infrastructure and Tools',
    items: [
      ['Microsoft Azure', FaCloud], ['GitHub', SiGithub], ['Tailwind CSS', SiTailwindcss],
      ['REST APIs', FaCode], ['Data Quality', FaDatabase],
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="site-shell">
        <p className="section-label">Tech stack</p>
        <h2>Tools I use to build, analyze, and deliver.</h2>
        {groups.map((group) => (
          <div className="skill-group" key={group.title}>
            <h3>{group.title}</h3>
            <div className="skill-grid">
              {group.items.map(([name, Icon]) => (
                <div className="skill-item" key={name}>
                  <span><Icon /></span>
                  <p>{name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
