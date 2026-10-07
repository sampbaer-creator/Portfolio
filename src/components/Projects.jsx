import { projects, profile } from '../data/profile'

export default function Projects() {
  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <div className="section-top">
        <h2 id="projects-title">Projects</h2>
        <a className="text-link" href={profile.github} target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span></a>
      </div>
      <div className="project-list">{projects.map((project) => (
        <article className="project-row" key={project.title}>
          <span className="project-number" aria-hidden="true">{project.number}</span>
          <div className="project-body">
            <div className="project-heading">
              <h3>{project.title}</h3>
            </div>
            <p className="project-category">{project.category}</p>
            <p className="project-description">{project.description}</p>
            {project.image && <a className="project-preview" href={project.live} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title} live application`}><img src={`${import.meta.env.BASE_URL}${project.image}`} alt="GridGuard property risk interface with a Utah map and property report panel" width="1200" height="750" loading="lazy" /></a>}
            <ul className="tech-list" aria-label={`${project.title} technologies`}>{project.technologies.map((tech) => <li key={tech}>{tech}</li>)}</ul>
            <div className="project-links">
              {project.live && <a className="text-link" href={project.live} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${project.title}`}>Visit site <span aria-hidden="true">↗</span></a>}
              {project.github && <a className="text-link" href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} code`}>View code <span aria-hidden="true">↗</span></a>}
            </div>
          </div>
        </article>
      ))}</div>
    </section>
  )
}
