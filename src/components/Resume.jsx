import { FaDownload } from 'react-icons/fa'

export default function Resume() {
  return (
    <section id="resume" className="py-20 bg-secondary">
      <div className="container max-w-3xl">
        <h2 className="section-title">Resume</h2>
        
        <div className="bg-primary rounded-lg p-8 mb-8 fade-in border border-slate-700">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Samuel Baer</h3>
              <p className="text-slate-300 text-sm">Sampbaer@gmail.com | (346)-546-5647 | Provo, Utah</p>
            </div>
            <a 
              href="/resume.pdf" 
              download="Samuel_Baer_Resume.pdf"
              className="btn btn-primary flex items-center gap-2"
            >
              <FaDownload /> Download PDF
            </a>
          </div>

          <div className="space-y-8">
            {/* Professional Profile */}
            <div className="fade-in">
              <h4 className="text-xl font-bold text-accent mb-4">Professional Profile</h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                Motivated Information Systems student with hands-on experience in data analysis, software development, and business operations. Passionate about leveraging technology to improve decision-making through data-driven insights.
              </p>
            </div>

            {/* Education */}
            <div className="fade-in">
              <h4 className="text-xl font-bold text-accent mb-4">Education</h4>
              <div className="border-l-2 border-accent pl-4">
                <h5 className="font-bold">Bachelor of Science (B.S.) Information Systems</h5>
                <p className="text-slate-300 text-sm">Utah Valley University | Orem, Utah</p>
                <p className="text-slate-400 text-sm mt-1">Expected graduation: April 2027</p>
                <p className="text-slate-400 text-sm mt-2">Relevant coursework: Database Management, Data Analytics, Python Programming, Systems Analysis</p>
              </div>
            </div>

            {/* Experience */}
            <div className="fade-in">
              <h4 className="text-xl font-bold text-accent mb-4">Experience</h4>
              <div className="space-y-6 border-l-2 border-accent pl-4">
                <div>
                  <h5 className="font-bold">AI Annotator</h5>
                  <p className="text-slate-300 text-sm">Handshake AI | Remote | Nov 2025 – Present</p>
                  <ul className="text-slate-400 text-sm mt-2 space-y-1 list-disc list-inside">
                    <li>Analyzed, categorized, and validated user-generated content and behavioral patterns using internal tools</li>
                    <li>Annotated large datasets to train machine learning models for Handshakes recommendation systems</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-bold">Substitute Teacher</h5>
                  <p className="text-slate-300 text-sm">ESS Teacher | Alpine School District | Oct 2025 – Present</p>
                  <ul className="text-slate-400 text-sm mt-2 space-y-1 list-disc list-inside">
                    <li>Maintained a safe, focused classroom culture through effective behavior management and conflict resolution</li>
                    <li>Executed lesson plans across various grade levels, adapting quickly to ensure educational goals were met</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-bold">Venue Coordinator</h5>
                  <p className="text-slate-300 text-sm">TheRooftopLehi | Lehi, UT | Aug 2023 – October 2025</p>
                  <ul className="text-slate-400 text-sm mt-2 space-y-1 list-disc list-inside">
                    <li>Trained 3 new staff members in procedures related to venue coordination tasks</li>
                    <li>Resolved conflicts with customers quickly while maintaining professionalism</li>
                    <li>Set up audio-visual equipment for events including microphones, speakers, and projectors</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-bold">Camp Counselor</h5>
                  <p className="text-slate-300 text-sm">BYU Sports | Provo, Utah | April 2025 – August 2025</p>
                  <ul className="text-slate-400 text-sm mt-2 space-y-1 list-disc list-inside">
                    <li>Supervised groups of 20 children during recreational activities both indoors and outdoors</li>
                    <li>Monitored camper behavior to ensure compliance with established guidelines and expectations</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="fade-in">
              <h4 className="text-xl font-bold text-accent mb-4">Skills</h4>
              <div className="grid grid-cols-2 gap-3">
                {['Python', 'Statistics', 'SQL', 'Excel', 'Azure', 'Critical Thinking', 'Problem Solving', 'Collaboration', 'Curiosity'].map((skill) => (
                  <div key={skill} className="px-3 py-2 bg-slate-700 text-slate-200 rounded text-sm">
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
