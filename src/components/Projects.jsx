import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import JourneyButton from './JourneyButton'

export default function Projects() {
  const projects = [
    {
      title: "Samuel & Kelcee Wedding Website",
      description: "A wedding website featuring event details, photo gallery, registry, and RSVP functionality for Samuel and Kelcee's special day.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP"],
      github: "",
      live: "https://samuelkelceewedding.info/",
      image: "https://samuelkelceewedding.info/images/wedding_1.jpg",
      span: "md:col-span-7",
      ratio: "aspect-[4/3]"
    },
    {
      title: "WeatherControl",
      description: "Cross-platform .NET MAUI weather app that retrieves current conditions by ZIP code or major city and displays temperature and atmospheric details in a clean UI.",
      technologies: ["C#", ".NET MAUI", "XAML", "HttpClient", "OpenWeather API", "Newtonsoft.Json"],
      github: "https://github.com/sampbaer-creator/WeatherControl",
      live: "",
      image: `${import.meta.env.BASE_URL}Weather.webp`,
      span: "md:col-span-5",
      ratio: "aspect-[3/4]"
    },
    {
      title: "MGMT 3345 Final R Project",
      description: "Business statistics analysis project using R Markdown, including data analysis, visualizations, and a final written report.",
      technologies: ["R", "R Markdown", "Statistics", "Data Visualization"],
      github: "https://github.com/sampbaer-creator/R_Final_Project",
      live: "",
      image: `${import.meta.env.BASE_URL}R_photo.webp`,
      span: "md:col-span-5",
      ratio: "aspect-[3/4]"
    },
    {
      title: "Course-Inspired Portfolio",
      description: "A polished portfolio experience with a green-and-gold visual system, scroll-driven animation, and a professional resume-focused content flow.",
      technologies: ["React", "Vite", "Tailwind CSS", "Animation"],
      github: "https://github.com/sampbaer-creator/Portfolio",
      live: "https://sampbaer-creator.github.io/Portfolio/",
      image: `${import.meta.env.BASE_URL}amen-corner-hero.png`,
      span: "md:col-span-7",
      ratio: "aspect-[4/3]"
    }
  ]

  return (
    <section id="projects" className="story-section">
      <div className="story-path" aria-hidden="true" />
      <div className="container relative">
        <p className="section-kicker">Selected Work</p>
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-intro">
          A selection of practical builds across web, analytics, statistics, and personal presentation.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
          {projects.map((project, index) => (
            <div key={index} className={`project-bento group reveal ${project.span}`}>
              <div className={`relative overflow-hidden ${project.ratio}`}>
                <img src={project.image} alt={project.title} className="h-full w-full object-cover sepia-[0.18] saturate-125 transition-transform duration-700 group-hover:scale-105" />
                <div className="halftone-overlay" />
                <div className="project-hover">
                  <span>View <em>{project.title}</em></span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-ink">{project.title}</h3>
                <p className="text-ink/70 text-sm mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                      <FaGithub /> Code
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link">
                      <FaExternalLinkAlt /> Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <JourneyButton targetId="stats" title="Progress Snapshot">
            Continue to stats
          </JourneyButton>
        </div>
      </div>
    </section>
  )
}


