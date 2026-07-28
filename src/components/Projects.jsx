import { FaArrowRight } from 'react-icons/fa'

const projects = [
  {
    title: 'GridGuard',
    description: 'A production property due-diligence platform that combines Utah address search, interactive mapping, live NOAA and EIA context, explainable resilience scoring, and printable buyer reports.',
    stack: ['React', 'Next.js', 'Cloudflare Workers', 'GIS'],
    image: 'GridGuard.png',
    url: 'https://github.com/sampbaer-creator/GridGuard',
  },
  {
    title: 'UVU Women Impact Lab Analysis',
    description: 'A client-ready statistical analysis using regression, hypothesis testing, visualization, and R Markdown to explore Likert-scale survey data.',
    stack: ['R', 'R Markdown', 'Regression'],
    image: 'R_photo.webp',
    url: 'https://github.com/sampbaer-creator/R_Final_Project',
  },
  {
    title: 'WeatherControl',
    description: 'A cross-platform .NET MAUI application that retrieves live weather conditions and presents temperature and atmospheric details in a focused interface.',
    stack: ['C#', '.NET MAUI', 'REST API'],
    image: 'Weather.webp',
    url: 'https://github.com/sampbaer-creator/WeatherControl',
  },
  {
    title: 'Samuel & Kelcee',
    description: 'A complete wedding website with event details, imagery, registry information, and an RSVP workflow.',
    stack: ['PHP', 'JavaScript', 'Tailwind CSS'],
    image: 'amen-corner-hero.png',
    url: 'https://samuelkelceewedding.info/',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="site-shell">
        <p className="section-label">Representative projects</p>
        <h2>Practical work, built for real outcomes.</h2>
        <div className="projects-list">
          {projects.map((project, index) => (
            <article className="project-row" key={project.title}>
              <div className="project-copy">
                <span className="project-number">0{index + 1}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-stack">
                  <strong>Tech stack:</strong>
                  {project.stack.map((item) => <span key={item}>{item}</span>)}
                </div>
                <a href={project.url} target="_blank" rel="noreferrer">
                  View project <FaArrowRight />
                </a>
              </div>
              <a href={project.url} target="_blank" rel="noreferrer" className="project-image">
                <img src={`${import.meta.env.BASE_URL}${project.image}`} alt="" />
              </a>
            </article>
          ))}
        </div>
        <a className="all-projects" href="https://github.com/sampbaer-creator?tab=repositories" target="_blank" rel="noreferrer">
          See all projects <FaArrowRight />
        </a>
      </div>
    </section>
  )
}
