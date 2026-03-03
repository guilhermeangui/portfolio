import { useStaggerReveal } from '../../hooks/useScrollReveal'
import { useLanguage } from '../../context/LanguageContext'
import ScrollReveal from '../common/ScrollReveal'
import './Projects.styl'

const projectsMeta = [
  { name: 'Onze — App',   tags: ['React', 'TypeScript', 'Fintech', 'REST APIs'],          color: '#06B6D4', emoji: '💼', highlight: true,  link: 'https://www.onze.com.br' },
  { name: 'Onze — Design System', tags: ['React', 'TypeScript', 'Stylus', 'Figma', 'Storybook'], color: '#0EA5E9', emoji: '🎨', highlight: false, link: null },
  { name: 'Futuritos',            tags: ['JavaScript', 'PHP', 'HTML5', 'Bradesco InovaBRA'],       color: '#7C3AED', emoji: '🚀', highlight: false, link: null },
  { name: 'BuscaTaxi',            tags: ['JavaScript', 'PHP', 'Maps', 'Real-time'],                color: '#F59E0B', emoji: '🚕', highlight: false, link: null },
  { name: 'Speedy Revolution',    tags: ['JavaScript', 'PHP', 'CSS3', 'Modular Architecture'],     color: '#10B981', emoji: '⚙️', highlight: false, link: null },
]

export default function Projects() {
  const listRef = useStaggerReveal(0.05)
  const { t } = useLanguage()
  const p = t.projects

  const projects = projectsMeta.map((meta, i) => ({ ...meta, description: p.items[i].description }))

  return (
    <section className="projects" id="projects">
      <div className="container">
        <ScrollReveal>
          <p className="section-label">{p.label}</p>
          <h2 className="section-title">{p.title}</h2>
          <p className="section-subtitle">{p.subtitle}</p>
        </ScrollReveal>

        <div className="projects__grid" ref={listRef}>
          {projects.map((project, i) => (
            <div
              key={i}
              className={`projects__card stagger-item ${project.highlight ? 'projects__card--highlight' : ''}`}
              style={{ '--card-color': project.color }}
            >
              <div className="projects__card-header">
                <span className="projects__emoji">{project.emoji}</span>
                <div className="projects__card-name-row">
                  <h3 className="projects__name">{project.name}</h3>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="projects__link-icon"
                      aria-label={p.visitLabel}
                    >
                      ↗
                    </a>
                  )}
                </div>
              </div>

              <p className="projects__description">{project.description}</p>

              <div className="projects__tags">
                {project.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
