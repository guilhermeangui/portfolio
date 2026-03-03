import { useStaggerReveal } from '../../hooks/useScrollReveal'
import ScrollReveal from '../common/ScrollReveal'
import './Projects.styl'

const projects = [
  {
    name: 'Onze — Design System',
    description:
      'Led the development and maintenance of the company's React component library. Standardized UI tokens, documentation, and patterns used across all product surfaces.',
    tags: ['React', 'TypeScript', 'Stylus', 'Figma', 'Storybook'],
    color: '#0EA5E9',
    emoji: '🎨',
    highlight: true,
    link: null,
  },
  {
    name: 'Onze — Pension App',
    description:
      'Developed key features for a private pension web app — onboarding flows, portfolio dashboards, profitability reports, and investment management tools.',
    tags: ['React', 'TypeScript', 'Fintech', 'REST APIs'],
    color: '#06B6D4',
    emoji: '💼',
    highlight: false,
    link: null,
  },
  {
    name: 'Futuritos',
    description:
      'Private pension gifting platform for families, incubated by InovaBRA (Bradesco). Built the entire web architecture, frontend, and backoffice from scratch.',
    tags: ['JavaScript', 'PHP', 'HTML5', 'Bradesco InovaBRA'],
    color: '#7C3AED',
    emoji: '🚀',
    highlight: false,
    link: 'https://futuritos.com.br',
  },
  {
    name: 'BuscaTaxi',
    description:
      'Real-time coordination app for taxi drivers and stands. Planned and developed the full web solution including maps integration and driver management panel.',
    tags: ['JavaScript', 'PHP', 'Maps', 'Real-time'],
    color: '#F59E0B',
    emoji: '🚕',
    highlight: false,
    link: null,
  },
  {
    name: 'Speedy Revolution',
    description:
      'Modular and customizable web platform where clients requested new features on-demand, delivered as independent system modules. Maintained over 4 years.',
    tags: ['JavaScript', 'PHP', 'CSS3', 'Modular Architecture'],
    color: '#10B981',
    emoji: '⚙️',
    highlight: false,
    link: 'https://speedyrevolution.com.br',
  },
]

export default function Projects() {
  const listRef = useStaggerReveal(0.05)

  return (
    <section className="projects" id="projects">
      <div className="container">
        <ScrollReveal>
          <p className="section-label">Work</p>
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">
            A selection of things I've built — from fintech apps to platform tools.
          </p>
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
                      aria-label="Visit project"
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
