import ScrollReveal from '../common/ScrollReveal'
import './About.styl'

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container about__inner">
        <ScrollReveal direction="left" className="about__image-col">
          <div className="about__avatar">
            {/* Replace the img src with your actual photo */}
            <div className="about__avatar-placeholder">GA</div>
            <div className="about__avatar-ring" />
            <div className="about__avatar-badge">
              <span>🇧🇷</span>
              Santos, SP
            </div>
          </div>
        </ScrollReveal>

        <div className="about__text-col">
          <ScrollReveal>
            <p className="section-label">About me</p>
            <h2 className="section-title">
              I build things that<br />
              <span className="about__title-accent">actually matter</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <p className="about__body">
              I'm a Senior Frontend Developer based in Santos, Brazil, with over 10 years
              of experience turning complex requirements into clean, performant interfaces.
              My sweet spot is React — I think in components, care deeply about UX, and
              believe a well-built Design System is one of the highest-leverage investments
              a product team can make.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="about__body">
              Most recently at <strong>Onze</strong>, I led the Design System and maintained
              a private pension app serving thousands of users in the fintech space. Before
              that, I sharpened my skills at <strong>Red Ventures</strong>, a digital
              performance powerhouse where I learned what building at scale really means.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <p className="about__body">
              I'm currently open to remote opportunities — both in Brazil and the US — and
              available for hybrid roles in São Paulo (up to 2 days/week).
            </p>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <div className="about__interests">
              <span className="tag">⚡ React</span>
              <span className="tag">🎨 Design Systems</span>
              <span className="tag">🔷 TypeScript</span>
              <span className="tag">🌎 Remote-first</span>
              <span className="tag">🤝 Cross-functional</span>
              <span className="tag">♿ Accessibility</span>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
