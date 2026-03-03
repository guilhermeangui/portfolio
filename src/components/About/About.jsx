import { useLanguage } from '../../context/LanguageContext'
import ScrollReveal from '../common/ScrollReveal'
import './About.styl'

export default function About() {
  const { t } = useLanguage()
  const a = t.about

  return (
    <section className="about" id="about">
      <div className="container about__inner">
        <ScrollReveal direction="left" className="about__image-col">
          <div className="about__avatar">
            <img src="/profile.jpeg" alt="Guilherme Anguiano" className="about__avatar-placeholder" />
            <div className="about__avatar-ring" />
            <div className="about__avatar-badge">
              <span>🇧🇷</span>
              Santos, SP
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal className="about__text-col">
          <p className="section-label">{a.label}</p>
          <h2 className="section-title">
            {a.titleLine1}<br />
            <span className="about__title-accent">{a.titleAccent}</span>
          </h2>

          <p className="about__body">{a.body1}</p>
          <p className="about__body" dangerouslySetInnerHTML={{ __html: a.body2 }} />
          <p className="about__body">{a.body3}</p>

          <div className="about__interests">
            {a.tags.map(tag => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
