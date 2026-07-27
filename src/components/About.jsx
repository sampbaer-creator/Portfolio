export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="site-shell about-grid">
        <div className="about-image-wrap">
          <img src={`${import.meta.env.BASE_URL}Sam_Profile.PNG`} alt="Samuel Baer smiling" />
          <div className="about-accent" aria-hidden="true" />
        </div>
        <div>
          <p className="section-label">About me</p>
          <h2>Turning data into answers people can use.</h2>
          <p>
            I am an Information Systems student and Business Intelligence analyst with hands-on experience
            building Power BI reports, maintaining reporting systems, validating data, and investigating
            issues across university departments.
          </p>
          <p>
            I enjoy solving difficult problems and translating complicated information into dashboards,
            reports, and applications that feel clear. My work combines analytical thinking, practical
            development, and careful communication.
          </p>
          <p>
            I am driven by curiosity, dependable work, and continuous improvement. I am looking for an
            internship where I can contribute to a strong team while growing toward a career in data science,
            business intelligence, or analytics engineering.
          </p>
          <div className="main-stack">
            <strong>Main stack:</strong>
            <span>Power BI, SQL, Python, R, React</span>
          </div>
        </div>
      </div>
    </section>
  )
}
