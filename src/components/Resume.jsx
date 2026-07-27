const jobs = [
  {
    company: 'Utah Valley University',
    role: 'Business Intelligence & Reporting Services Analyst',
    dates: 'April 2026 — Present',
    description: 'Build and maintain 7+ Power BI reports using Azure SQL data, support reporting across 10 departments, maintain SRI systems, and investigate data and system issues.',
  },
  {
    company: 'Handshake AI',
    role: 'AI Annotator',
    dates: 'November 2025 — Present',
    description: 'Validated and annotated more than 5,000 data entries, performed quality audits, and helped reduce classification errors in recommendation-model data.',
  },
  {
    company: 'The Rooftop Lehi',
    role: 'Venue Coordinator',
    dates: 'August 2023 — October 2025',
    description: 'Managed scheduling and communication for 50+ events, trained team members, and improved setup efficiency and event turnaround time.',
  },
]

export default function Resume() {
  return (
    <>
      <section id="experience" className="section experience-section">
        <div className="site-shell">
          <p className="section-label">Experience</p>
          <h2>Where I have made an impact.</h2>
          <div className="timeline">
            {jobs.map((job) => (
              <article className="timeline-row" key={`${job.company}-${job.role}`}>
                <div className="timeline-company">
                  <span className="timeline-mark" />
                  <h3>{job.company}</h3>
                </div>
                <div className="timeline-details">
                  <h4>{job.role}</h4>
                  <p>{job.description}</p>
                  <time>{job.dates}</time>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section education-section">
        <div className="site-shell education-grid">
          <div>
            <p className="section-label">Education</p>
            <h2>Built on strong foundations.</h2>
          </div>
          <article className="education-card">
            <div className="education-monogram">UVU</div>
            <div>
              <h3>Utah Valley University</h3>
              <p>Bachelor of Science in Information Systems</p>
              <span>Business Intelligence emphasis · Expected April 2027</span>
            </div>
          </article>
        </div>
      </section>
    </>
  )
}
