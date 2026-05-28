import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

export default function Projects() {
  const projects = [
    {
      title: "Samuel & Kelcee Wedding Website",
      description: "A wedding website featuring event details, photo gallery, registry, and RSVP functionality for Samuel and Kelcee's special day.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP"],
      github: "",
      live: "https://samuelkelceewedding.info/",
      image: "https://samuelkelceewedding.info/images/wedding_1.jpg"
    },
    {
      title: "WeatherControl",
      description: "Cross-platform .NET MAUI weather app that retrieves current conditions by ZIP code or major city and displays temperature and atmospheric details in a clean UI.",
      technologies: ["C#", ".NET MAUI", "XAML", "HttpClient", "OpenWeather API", "Newtonsoft.Json"],
      github: "https://github.com/sampbaer-creator/WeatherControl",
      live: "",
      image: `${import.meta.env.BASE_URL}Weather.webp`
    },
    {
      title: "MGMT 3345 Final R Project",
      description: "Business statistics analysis project using R Markdown, including data analysis, visualizations, and a final written report.",
      technologies: ["R", "R Markdown", "Statistics", "Data Visualization"],
      github: "https://github.com/sampbaer-creator/R_Final_Project",
      live: "",
      image: `${import.meta.env.BASE_URL}R_photo.webp`
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
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="chapter-card reveal overflow-hidden p-0">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover sepia-[0.18] saturate-125" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 font-serif text-parchment">{project.title}</h3>
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


