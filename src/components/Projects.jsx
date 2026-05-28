import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

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
      title: "Autumn Story Portfolio",
      description: "A cinematic single-page portfolio experience with scroll reveals, warm fantasy-inspired styling, and an image portal transition into selected work.",
      technologies: ["React", "Vite", "Tailwind CSS", "Animation"],
      github: "https://github.com/sampbaer-creator/Portfolio",
      live: "https://sampbaer-creator.github.io/Portfolio/",
      image: `${import.meta.env.BASE_URL}autumn-forest-hero.png`,
      span: "md:col-span-7",
      ratio: "aspect-[4/3]"
    }
  ]

  return (
    <section id="projects" className="story-section bg-primary">
      <div className="story-path" aria-hidden="true" />
      <div className="container relative">
        <p className="section-kicker">Chapter III</p>
        <h2 className="section-title">Works Along The Road</h2>
        <p className="section-intro">
          Each project is a marker: a real problem, a chosen toolset, and a working result.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
          {projects.map((project, index) => (
            <div key={index} className={`project-bento group reveal ${project.span}`}>
              <div className={`relative overflow-hidden ${project.ratio}`}>
                <img src={project.image} alt={project.title} className="h-full w-full object-cover sepia-[0.18] saturate-125 transition-transform duration-700 group-hover:scale-105" />
                <div className="halftone-overlay" />
                <div className="project-hover">
                  <span>View - <em>{project.title}</em></span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 font-serif text-parchment">{project.title}</h3>
                <p className="text-parchment/75 text-sm mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="text-xs px-2 py-1 bg-secondary text-parchment/80 rounded border border-accent/15">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-accent hover:text-parchment transition-colors text-sm">
                      <FaGithub /> Code
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-accent hover:text-parchment transition-colors text-sm">
                      <FaExternalLinkAlt /> Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


