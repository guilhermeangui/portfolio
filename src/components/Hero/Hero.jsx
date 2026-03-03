import { useTypewriter } from '../../hooks/useTypewriter'
import { useLanguage } from '../../context/LanguageContext'
import './Hero.styl'

export default function Hero() {
  const { t } = useLanguage()
  const typed = useTypewriter(t.hero.roles, { typeSpeed: 75, deleteSpeed: 40, pauseTime: 2200 })

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero" id="hero">
      <div className="hero__bg">
        <div className="hero__orb hero__orb--1" />
        <div className="hero__orb hero__orb--2" />
        <div className="hero__orb hero__orb--3" />
        <div className="hero__grid" />
      </div>

      <div className="container hero__content">
        <div className="hero__eyebrow">
          <span className="hero__dot" />
          {t.hero.available}
        </div>

        <h1 className="hero__name">
          Guilherme
          <span className="hero__name-last"> Anguiano</span>
        </h1>

        <div className="hero__typewriter">
          <span className="hero__typed">{typed}</span>
          <span className="hero__cursor" aria-hidden="true">|</span>
        </div>

        <p className="hero__description">
          {t.hero.descriptionLine1}
          <br />
          {t.hero.descriptionLine2}
        </p>

        <div className="hero__actions">
          <button className="btn btn-primary" onClick={() => scrollTo('projects')}>
            {t.hero.viewProjects}
          </button>
          <button className="btn btn-ghost" onClick={() => scrollTo('contact')}>
            {t.hero.getInTouch}
          </button>
          <a
            className="hero__social-icon"
            href="https://linkedin.com/in/guilherme-anguiano"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </a>
          <a
            className="hero__social-icon"
            href="mailto:guilherme.anguiano@outlook.com"
            aria-label="Email"
          >
            <EmailIcon />
          </a>
        </div>

        <div className="hero__stats">
          <div className="hero__stat">
            <span className="hero__stat-value">10+</span>
            <span className="hero__stat-label">{t.hero.yearsLabel}</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-value">∞</span>
            <span className="hero__stat-label">{t.hero.componentsLabel}</span>
          </div>
        </div>
      </div>

      <button
        className="hero__scroll-indicator"
        onClick={() => scrollTo('about')}
        aria-label={t.hero.scrollLabel}
      >
        <span />
      </button>
    </section>
  )
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function EmailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}
