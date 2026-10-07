import { experience, profile } from '../data/profile'

export default function Resume() {
  return (
    <section id="experience" className="section" aria-labelledby="experience-title">
      <div className="section-top">
        <h2 id="experience-title">Experience</h2>
        <a className="text-link" href={profile.resume} download="Samuel_Baer_Resume.pdf">Full resume <span aria-hidden="true">↓</span></a>
      </div>
      <div className="experience-list">{experience.map((job) => (
        <article className="experience-row" key={job.company}>
          <p className="job-dates">{job.dates}</p>
          <div>
            <h3 className="role-title">{job.role}</h3>
            <p className="company-name">{job.company}<span aria-hidden="true"> · </span><span>{job.location}</span></p>
            <ul className="job-points">{job.points.map((point) => <li key={point}>{point}</li>)}</ul>
          </div>
        </article>
      ))}</div>
    </section>
  )
}
