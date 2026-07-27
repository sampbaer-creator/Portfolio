import { FaDownload, FaExternalLinkAlt } from 'react-icons/fa'
import JourneyButton from './JourneyButton'

const experience = [
  {
    company: 'Utah Valley University',
    location: 'Orem, Utah',
    role: 'Business Intelligence & Reporting Services Analyst',
    dates: 'April 2026 - Present',
    bullets: [
      'Build and maintain 7+ Power BI reports using Azure SQL Database data to support reporting needs across 10 UVU departments.',
      'Maintain UVU’s SRI systems and data, investigate reported issues, and respond to department requests.',
      'Developed a five-year Top Courses report identifying the top 30 general education courses and top 50 courses overall.',
    ],
  },
  {
    company: 'Handshake AI',
    location: 'Remote',
    role: 'AI Annotator',
    dates: 'Nov 2025 - Present',
    bullets: [
      'Conducted data validation and quality audits to improve and reduce classification errors.',
      'Annotated and validated 5,000+ data entries using internal AI tools to improve recommendation model accuracy.',
    ],
  },
  {
    company: 'TheRooftopLehi',
    location: 'Lehi, UT',
    role: 'Venue Coordinator',
    dates: 'Aug 2023 - October 2025',
    bullets: [
      'Trained and onboarded 3 staff members, improving event setup efficiency by 20%.',
      'Managed scheduling and customer communications for 50+ events, improving event turnaround time by 35%.',
    ],
  },
]

const skillGroups = [
  {
    label: 'Languages & Querying',
    skills: ['Python', 'SQL', 'R', 'C#', 'PHP', 'HTML', 'CSS'],
  },
  {
    label: 'Data & BI Tools',
    skills: ['Power BI', 'Excel', 'Microsoft Azure', 'Azure Cosmos DB'],
  },
  {
    label: 'Analytics',
    skills: ['Statistical Modeling', 'Data Analysis', 'Data Visualization', 'Data Cleaning', 'Reporting & Analytics'],
  },
  {
    label: 'Development Tools',
    skills: ['GitHub', '.NET MAUI', 'R Markdown', 'Tailwind CSS'],
  },
]

export default function Resume() {
  return (
    <section id="resume" className="story-section">
      <div className="story-path" aria-hidden="true" />
      <div className="container max-w-5xl relative">
        <p className="section-kicker">Resume</p>
        <h2 className="section-title">Business Intelligence Record</h2>
        <p className="section-intro">
          Current resume details focused on analytics, reporting automation, data quality, and business intelligence work.
        </p>

        <div className="resume-sheet reveal mb-8">
          <div className="resume-header">
            <div>
              <p className="text-sm uppercase tracking-[0.26em] text-accent">Samuel Baer</p>
              <h3 className="mt-2 text-3xl md:text-4xl font-serif text-primary">Information Systems Student</h3>
              <p className="mt-3 text-sm text-primary/70">
                Sampbaer@gmail.com | (346) 546-5647 | Pleasant Grove, Utah | LinkedIn | GitHub
              </p>
            </div>
            <div className="resume-actions">
              <a
                href={`${import.meta.env.BASE_URL}resume.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary flex items-center gap-2"
              >
                <FaExternalLinkAlt /> View resume
              </a>
              <a
                href={`${import.meta.env.BASE_URL}resume.pdf`}
                download="Resume_Samuel_Baer.pdf"
                className="btn btn-primary flex items-center gap-2"
              >
                <FaDownload /> Download PDF
              </a>
            </div>
          </div>

          <div className="resume-grid">
            <div className="resume-main">
              <section className="resume-block">
                <h4>Professional Profile</h4>
                <p>
                  Information Systems student with applied experience in statistical modeling, data pipelines, and analytics, targeting data science roles in finance and healthcare. Skilled in Python, SQL, and R, with hands-on work building BI dashboards, improving data quality, and annotating machine learning datasets.
                </p>
              </section>

              <section className="resume-block">
                <h4>Experience</h4>
                <div className="space-y-5">
                  {experience.map((item) => (
                    <article key={`${item.company}-${item.role}`} className="resume-role">
                      <div className="flex flex-col gap-1 md:flex-row md:items-start md:justify-between">
                        <div>
                          <h5>{item.role}</h5>
                          <p>{item.company} | {item.location}</p>
                        </div>
                        <span>{item.dates}</span>
                      </div>
                      <ul>
                        {item.bullets.map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>
              </section>
            </div>

            <aside className="resume-side">
              <section className="resume-block">
                <h4>Education</h4>
                <div className="resume-education">
                  <h5>Utah Valley University</h5>
                  <p>Orem, Utah</p>
                  <p>Bachelor of Science (B.S.) Information Systems</p>
                  <span>Expected Graduation April 2027</span>
                </div>
              </section>

              <section className="resume-block">
                <h4>Technical Skills</h4>
                <div className="space-y-4">
                  {skillGroups.map((group) => (
                    <div key={group.label}>
                      <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-primary/60">{group.label}</p>
                      <div className="flex flex-wrap gap-2">
                        {group.skills.map((skill) => (
                          <span key={skill} className="resume-skill">{skill}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </aside>
          </div>
        </div>
        <div className="flex justify-center">
          <JourneyButton targetId="projects" title="Selected Work">
            Continue to projects
          </JourneyButton>
        </div>
      </div>
    </section>
  )
}
