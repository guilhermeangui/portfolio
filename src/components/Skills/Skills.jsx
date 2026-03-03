import { useStaggerReveal } from '../../hooks/useScrollReveal'
import { useLanguage } from '../../context/LanguageContext'
import ScrollReveal from '../common/ScrollReveal'
import './Skills.styl'

const skillGroups = [
  {
    icon: '⚡',
    skills: [
      { name: 'React', level: 5 },
      { name: 'JavaScript (ES6+)', level: 5 },
      { name: 'TypeScript', level: 4 },
      { name: 'HTML5', level: 5 },
      { name: 'CSS3', level: 5 },
    ],
  },
  {
    icon: '🎨',
    skills: [
      { name: 'Stylus', level: 5 },
      { name: 'Sass / SCSS', level: 5 },
      { name: 'Styled Components', level: 4 },
      { name: 'Design Systems', level: 5 },
      { name: 'Figma', level: 4 },
      { name: 'UX / UI', level: 4 },
    ],
  },
  {
    icon: '🛠',
    skills: [
      { name: 'Git / GitHub', level: 5 },
      { name: 'REST APIs', level: 4 },
      { name: 'Node.js', level: 3 },
      { name: 'Webpack / Vite', level: 4 },
      { name: 'Agile / Scrum', level: 4 },
      { name: 'Accessibility (a11y)', level: 4 },
    ],
  },
  {
    icon: '📦',
    skills: [
      { name: 'PHP', level: 3 },
      { name: 'AngularJS / Angular', level: 3 },
      { name: 'jQuery', level: 3 },
      { name: 'SQL Server', level: 2 },
      { name: 'Bootstrap', level: 3 },
    ],
  },
]

function DotLevel({ level }) {
  return (
    <div className="skill__dots">
      {[1, 2, 3, 4, 5].map(n => (
        <span key={n} className={`skill__dot ${n <= level ? 'skill__dot--filled' : ''}`} />
      ))}
    </div>
  )
}

export default function Skills() {
  const gridRef = useStaggerReveal(0.05)
  const { t } = useLanguage()
  const s = t.skills

  const groups = skillGroups.map((g, i) => ({ ...g, category: s.categories[i] }))

  return (
    <section className="skills" id="skills">
      <div className="container">
        <ScrollReveal>
          <p className="section-label">{s.label}</p>
          <h2 className="section-title">{s.title}</h2>
          <p className="section-subtitle">{s.subtitle}</p>
        </ScrollReveal>

        <div className="skills__grid" ref={gridRef}>
          {groups.map((group, i) => (
            <div key={i} className="skills__card stagger-item">
              <div className="skills__card-header">
                <span className="skills__icon">{group.icon}</span>
                <h3 className="skills__category">{group.category}</h3>
              </div>
              <div className="skills__list">
                {group.skills.map(skill => (
                  <div key={skill.name} className="skill__item">
                    <span className="skill__name">{skill.name}</span>
                    <DotLevel level={skill.level} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
