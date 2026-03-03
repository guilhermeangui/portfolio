import { useStaggerReveal } from '../../hooks/useScrollReveal'
import ScrollReveal from '../common/ScrollReveal'
import './Experience.styl'

const jobs = [
  {
    role: 'Senior Frontend Developer',
    company: 'Onze',
    period: 'Jul 2022 – Feb 2026',
    duration: '3 yrs 8 mos',
    location: 'Remote · São Paulo, SP',
    type: 'Private pension fintech · incubated by Red Ventures',
    color: '#0EA5E9',
    bullets: [
      'Led the company\'s Design System, building and maintaining a React component library that standardized the product UI and accelerated feature development cycles across the entire team.',
      'Developed and maintained the private pension application, implementing onboarding flows, profitability reports, portfolio dashboards, and investment management tools built in React.',
      'Mastered complex pension industry business rules, becoming the technical reference for the product team on feature feasibility, architecture decisions, and requirements definition.',
      'Collaborated directly with designers to ensure visual fidelity between Figma prototypes and production, balancing aesthetic quality with performance and accessibility standards.',
      'Conducted code reviews and contributed to evolving the team\'s frontend engineering practices, including code quality standards and component reusability strategies.',
    ],
    tags: ['React', 'TypeScript', 'Design Systems', 'Figma', 'Fintech'],
  },
  {
    role: 'Frontend Developer',
    company: 'Red Ventures',
    period: 'Jul 2020 – Jul 2022',
    duration: '2 yrs 1 mo',
    location: 'São Paulo, SP',
    type: 'Digital performance company',
    color: '#EF4444',
    bullets: [
      'Developed and maintained high-performance interfaces for digital products using React and modern JavaScript (ES6+), delivering features within agile development cycles.',
      'Collaborated with multidisciplinary product, design, and backend teams to deliver high-quality digital experiences, aligning technical and business needs.',
      'Implemented reusable and scalable components following WCAG accessibility, web performance, and responsive/mobile-first design best practices.',
    ],
    tags: ['React', 'JavaScript', 'CSS3', 'Agile'],
  },
  {
    role: 'Junior Frontend Developer',
    company: 'Red Ventures',
    period: 'Sep 2019 – Jul 2020',
    duration: '11 mos',
    location: 'São Paulo, SP',
    type: 'Digital performance company',
    color: '#EF4444',
    bullets: [
      'Contributed to web interface development using React and JavaScript, participating in the complete feature development lifecycle — from planning through production deployment.',
      'Joined high-performance agile teams, developing cross-functional collaboration skills and absorbing software engineering best practices in a large-scale environment.',
    ],
    tags: ['React', 'JavaScript', 'HTML5'],
  },
  {
    role: 'Web Analyst',
    company: 'Speedy Officer do Brasil',
    period: '2017 – 2019',
    duration: '2 yrs',
    location: 'Santos, SP',
    type: 'Web development agency',
    color: '#7C3AED',
    bullets: [
      'Led the full-stack web development of Futuritos (futuritos.com.br), a private pension gifting platform for families, incubated by InovaBRA (Bradesco) — responsible for the complete web architecture, frontend, and backoffice tooling built from scratch.',
      'Managed the development team end-to-end: gathered requirements, planned deliverables, delegated tasks, and coordinated execution across multiple simultaneous projects.',
      'Built and shipped additional web products including BuscaTaxi (a real-time taxi coordination app), Speedy Revolution, and Multitabelas using JavaScript, PHP, HTML5, and CSS3.',
      'Designed wireframes, layouts, and mockups for new features, acting as the bridge between business requirements and technical implementation.',
    ],
    tags: ['JavaScript', 'PHP', 'HTML5', 'CSS3'],
  },
  {
    role: 'Senior Web Developer',
    company: 'Speedy Officer do Brasil',
    period: '2012 – 2016',
    duration: '4 yrs',
    location: 'Santos, SP',
    type: 'Web development agency',
    color: '#7C3AED',
    bullets: [
      'Developed and maintained the Speedy Revolution platform, a modular and customizable system delivering new on-demand modules according to client requirements.',
      'Worked with JavaScript, PHP, HTML5 and CSS3 to build and maintain medium-scale web solutions, creating layouts and contributing to interface design.',
    ],
    tags: ['JavaScript', 'PHP', 'HTML5', 'CSS3'],
  },
]

export default function Experience() {
  const listRef = useStaggerReveal(0.05)

  return (
    <section className="experience" id="experience">
      <div className="container">
        <ScrollReveal>
          <p className="section-label">Career</p>
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">
            10+ years building interfaces — from agency work to fintech at scale.
          </p>
        </ScrollReveal>

        <div className="experience__timeline" ref={listRef}>
          {jobs.map((job, i) => (
            <div key={i} className="experience__item stagger-item">
              <div className="experience__line-col">
                <div
                  className="experience__dot"
                  style={{ background: job.color, boxShadow: `0 0 12px ${job.color}60` }}
                />
                {i < jobs.length - 1 && <div className="experience__connector" />}
              </div>

              <div className="experience__card">
                <div className="experience__header">
                  <div>
                    <h3 className="experience__role">{job.role}</h3>
                    <div className="experience__meta">
                      <span className="experience__company" style={{ color: job.color }}>
                        {job.company}
                      </span>
                      <span className="experience__sep">·</span>
                      <span className="experience__type">{job.type}</span>
                    </div>
                    <div className="experience__meta experience__meta--sub">
                      <span>{job.location}</span>
                      <span className="experience__sep">·</span>
                      <span>{job.period}</span>
                      <span className="experience__duration">{job.duration}</span>
                    </div>
                  </div>
                </div>

                <ul className="experience__bullets">
                  {job.bullets.map((b, j) => (
                    <li key={j} className="experience__bullet">{b}</li>
                  ))}
                </ul>

                <div className="experience__tags">
                  {job.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
