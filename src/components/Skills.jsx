import { skillGroups } from '../data/profile'

export default function Skills() {
  return (
    <section id="skills" className="section" aria-labelledby="skills-title">
      <h2 id="skills-title">Technical skills</h2>
      <dl className="skill-list">{skillGroups.map((group) => (
        <div key={group.title}><dt>{group.title}</dt><dd>{group.skills}</dd></div>
      ))}</dl>
    </section>
  )
}
