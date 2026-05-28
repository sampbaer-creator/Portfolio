import { FaDownload } from 'react-icons/fa'
import JourneyButton from './JourneyButton'

const experience = [
  {
    company: 'Utah Valley University',
    location: 'Orem, Utah',
    role: 'Business Intelligence & Reporting Services Analyst',
    dates: 'April 2026 - Present',
    bullets: [
      'Reduced manual reporting time by 30% through dashboard automation and streamlined reporting workflows.',
      'Built and maintained 10+ Power BI dashboards using SQL-based datasets supporting analytics initiatives across multiple university departments.',
      'Improved data consistency and reporting reliability by identifying and correcting data quality issues.',
    ],
  },
  {
    company: 'Handshake AI',
    location: 'Remote',
    role: 'AI Annotator',
    dates: 'Nov 2025 - Present',
    bullets: [
      'Identified behavioral patterns in user-generated data to enhance machine learning training datasets.',
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
      'Coordinated AV equipment logistics, reducing event setup errors through structured workflow processes.',
      'Managed scheduling and customer communications for 50+ events, improving event turnaround time by 35%.',
    ],
  },
  {
    company: 'BYU Sports',
    location: 'Provo, UT',
    role: 'Camp Counselor',
    dates: 'April 2025 - August 2025',
    bullets: [
      'Supervised groups of 20+ children during recreational activities both indoors and outdoors.',
      'Monitored camper behavior to ensure compliance with established guidelines and expectations.',
    ],
  },
]

const skillGroups = [
  {
    label: 'Languages & Querying',
    skills: ['SQL', 'Python', 'R'],
  },
  {
    label: 'Data & BI Tools',
    skills: ['Power BI', 'Excel', 'Microsoft Azure'],
  },
  {
    label: 'Analytics',
    skills: ['Statistical Modeling', 'Data Analysis', 'Data Visualization', 'Data Cleaning', 'Reporting & Analytics'],
  },
]

export default function Resume() {
  return (
    <section id="resume" className="story-section bg-secondary/35">
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
                Sampbaer@gmail.com | (346)-546-5647 | Provo, Utah | LinkedIn | GitHub
              </p>
            </div>
            <a
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              download="Samuel_Baer_Resume.pdf"
              className="btn btn-primary flex items-center gap-2"
            >
              <FaDownload /> Download PDF
            </a>
          </div>

          <div className="resume-grid">
            <div className="resume-main">
              <section className="resume-block">
                <h4>Professional Profile</h4>
                <p>
                  Information Systems student with hands-on experience in business intelligence, data analytics, and reporting solutions. Skilled in SQL, Power BI, Excel, Python, and data visualization with experience supporting analytics initiatives, validating datasets, and developing dashboards for organizational decision-making.
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
          <JourneyButton targetId="contact" title="The Next Road">
            Continue to contact
          </JourneyButton>
        </div>
      </div>
    </section>
  )
}
