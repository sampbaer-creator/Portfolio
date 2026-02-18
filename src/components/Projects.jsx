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
      title: "USGS Earthquake Catalog",
      description: "Cross-platform .NET MAUI app that queries the USGS Earthquake API by date range and minimum magnitude, then displays earthquake results to the user.",
      technologies: ["C#", ".NET MAUI", "XAML", "REST API", "Newtonsoft.Json"],
      github: "",
      live: "",
      image: "/usgs_earthquake_hazard_map.v2.jpg"
    },
    {
      title: "Project Three",
      description: "A brief description of your third project and impact.",
      technologies: ["React", "Python", "APIs"],
      github: "",
      live: "https://example.com",
      image: "https://via.placeholder.com/400x250?text=Project+3"
    }
  ]

  return (
    <section id="projects" className="py-20 bg-primary">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-secondary rounded-lg overflow-hidden fade-in border border-slate-700 hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/20">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-slate-300 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="text-xs px-2 py-1 bg-slate-700 text-slate-300 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-accent hover:text-blue-400 transition-colors text-sm">
                      <FaGithub /> Code
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-accent hover:text-blue-400 transition-colors text-sm">
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


