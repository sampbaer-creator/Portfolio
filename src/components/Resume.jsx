import { FaDownload } from 'react-icons/fa'

export default function Resume() {
  const skills = ['Python', 'Statistics', 'SQL', 'Excel', 'Azure', 'Critical Thinking', 'Problem Solving', 'Collaboration', 'Curiosity']

  return (
    <section id="resume" className="story-section bg-secondary/80">
      <div className="story-path" aria-hidden="true" />
      <div className="container max-w-4xl relative">
        <p className="section-kicker">Chapter IV</p>
        <h2 className="section-title">The Record</h2>
        <p className="section-intro">
          Education, experience, and skills gathered into one readable map.
        </p>

        <div className="story-panel reveal mb-8">
          <div className="flex flex-col md:flex-row justify-between gap-6 md:items-start mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-2 font-serif text-parchment">Samuel Baer</h3>
              <p className="text-parchment/70 text-sm">Sampbaer@gmail.com | (346)-546-5647 | Provo, Utah</p>
            </div>
            <a
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              download="Samuel_Baer_Resume.pdf"
              className="btn btn-primary flex items-center gap-2"
            >
              <FaDownload /> Download PDF
            </a>
          </div>

          <div className="space-y-8">
            <div className="reveal">
              <h4 className="text-xl font-bold text-accent mb-4 font-serif">Professional Profile</h4>
              <p className="text-parchment/75 text-sm leading-relaxed">
                Motivated Information Systems student with hands-on experience in data analysis, software development, and business operations. Passionate about leveraging technology to improve decision-making through data-driven insights.
              </p>
            </div>

            <div className="reveal">
              <h4 className="text-xl font-bold text-accent mb-4 font-serif">Education</h4>
              <div className="border-l-2 border-accent/70 pl-4">
                <h5 className="font-bold">Bachelor of Science (B.S.) Information Systems</h5>
                <p className="text-parchment/75 text-sm">Utah Valley University | Orem, Utah</p>
                <p className="text-parchment/60 text-sm mt-1">Expected graduation: April 2027</p>
                <p className="text-parchment/60 text-sm mt-2">Relevant coursework: Database Management, Data Analytics, Python Programming, Systems Analysis</p>
              </div>
            </div>

            <div className="reveal">
              <h4 className="text-xl font-bold text-accent mb-4 font-serif">Experience</h4>
              <div className="space-y-6 border-l-2 border-accent/70 pl-4">
                <div>
                  <h5 className="font-bold">AI Annotator</h5>
                  <p className="text-parchment/75 text-sm">Handshake AI | Remote | Nov 2025 - Present</p>
                  <ul className="text-parchment/60 text-sm mt-2 space-y-1 list-disc list-inside">
                    <li>Analyzed, categorized, and validated user-generated content and behavioral patterns using internal tools</li>
                    <li>Annotated large datasets to train machine learning models for Handshakes recommendation systems</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-bold">Substitute Teacher</h5>
                  <p className="text-parchment/75 text-sm">ESS Teacher | Alpine School District | Oct 2025 - Present</p>
                  <ul className="text-parchment/60 text-sm mt-2 space-y-1 list-disc list-inside">
                    <li>Maintained a safe, focused classroom culture through effective behavior management and conflict resolution</li>
                    <li>Executed lesson plans across various grade levels, adapting quickly to ensure educational goals were met</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-bold">Venue Coordinator</h5>
                  <p className="text-parchment/75 text-sm">TheRooftopLehi | Lehi, UT | Aug 2023 - October 2025</p>
                  <ul className="text-parchment/60 text-sm mt-2 space-y-1 list-disc list-inside">
                    <li>Trained 3 new staff members in procedures related to venue coordination tasks</li>
                    <li>Resolved conflicts with customers quickly while maintaining professionalism</li>
                    <li>Set up audio-visual equipment for events including microphones, speakers, and projectors</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-bold">Camp Counselor</h5>
                  <p className="text-parchment/75 text-sm">BYU Sports | Provo, Utah | April 2025 - August 2025</p>
                  <ul className="text-parchment/60 text-sm mt-2 space-y-1 list-disc list-inside">
                    <li>Supervised groups of 20 children during recreational activities both indoors and outdoors</li>
                    <li>Monitored camper behavior to ensure compliance with established guidelines and expectations</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="reveal">
              <h4 className="text-xl font-bold text-accent mb-4 font-serif">Skills</h4>
              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill) => (
                  <div key={skill} className="px-3 py-2 bg-moss/70 text-parchment rounded text-sm border border-accent/15">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
