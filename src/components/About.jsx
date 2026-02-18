export default function About() {
  return (
    <section id="about" className="py-20 bg-primary">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <img 
              src="https://via.placeholder.com/400x400?text=Your+Photo" 
              alt="About Me" 
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="fade-in">
            <p className="text-slate-300 mb-4 leading-relaxed">
                    Motivated Information Systems student with hands-on experience in data analysis, software development, and business operations. Passionate about leveraging technology to improve decision-making through data-driven insights
            </p>
            <p className="text-slate-300 mb-6 leading-relaxed">
              When I'm not coding, you can find me running trails, staying active with sports, and testing new tech outdoors,
              all while balancing school and personal projects that sharpen my professional skills.
            </p>
            <div className="space-y-2">
              <p className="text-slate-300"><span className="font-bold text-accent">Location:</span> Provo, Utah</p>
              <p className="text-slate-300"><span className="font-bold text-accent">Email:</span> Sampbaer@gmail.com</p>
              <p className="text-slate-300"><span className="font-bold text-accent">Phone:</span> (346) 546-5647</p>
              <p className="text-slate-300"><span className="font-bold text-accent">Looking for:</span> Internship Opportunities</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
