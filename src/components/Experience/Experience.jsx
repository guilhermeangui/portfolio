import { useStaggerReveal } from '../../hooks/useScrollReveal'
import { useLanguage } from '../../context/LanguageContext'
import ScrollReveal from '../common/ScrollReveal'
import './Experience.styl'

const jobsMeta = [
  { company: 'Onze',                    period: 'Jul 2022 – Feb 2026', color: '#0EA5E9', tags: ['React', 'TypeScript', 'Design Systems', 'Figma', 'Fintech'] },
  { company: 'Red Ventures',            period: 'Jul 2020 – Jul 2022', color: '#EF4444', tags: ['React', 'JavaScript', 'CSS3', 'Agile'] },
  { company: 'Red Ventures',            period: 'Sep 2019 – Jul 2020', color: '#EF4444', tags: ['React', 'JavaScript', 'HTML5'] },
  { company: 'Speedy Officer do Brasil', period: '2017 – 2019',        color: '#7C3AED', tags: ['JavaScript', 'PHP', 'HTML5', 'CSS3'] },
  { company: 'Speedy Officer do Brasil', period: '2012 – 2016',        color: '#7C3AED', tags: ['JavaScript', 'PHP', 'HTML5', 'CSS3'] },
]

export default function Experience() {
  const listRef = useStaggerReveal(0.05)
  const { t } = useLanguage()
  const e = t.experience

  const jobs = jobsMeta.map((meta, i) => ({ ...meta, ...e.jobs[i] }))

  return (
    <section className="experience" id="experience">
      <div className="container">
        <ScrollReveal>
          <p className="section-label">{e.label}</p>
          <h2 className="section-title">{e.title}</h2>
          <p className="section-subtitle">{e.subtitle}</p>
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
