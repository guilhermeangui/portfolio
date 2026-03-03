import ScrollReveal from '../common/ScrollReveal'
import { useStaggerReveal } from '../../hooks/useScrollReveal'
import './Contact.styl'

const links = [
  {
    icon: '✉',
    label: 'Email',
    value: 'guilherme.anguiano@outlook.com',
    href: 'mailto:guilherme.anguiano@outlook.com',
  },
  {
    icon: 'in',
    label: 'LinkedIn',
    value: 'linkedin.com/in/guilherme-anguiano',
    href: 'https://linkedin.com/in/guilherme-anguiano',
  },
  {
    icon: '⬡',
    label: 'GitHub',
    value: 'github.com/guilherme-anguiano',
    href: 'https://github.com/guilherme-anguiano',
  },
]

export default function Contact() {
  const linksRef = useStaggerReveal(0.1)

  return (
    <section className="contact" id="contact">
      <div className="container">
        <ScrollReveal>
          <p className="section-label">Let's talk</p>
          <h2 className="contact__title">
            Open to great
            <span className="contact__title-accent"> opportunities</span>
          </h2>
          <p className="contact__subtitle">
            I'm looking for remote roles in Brazil or the US, and hybrid positions
            in São Paulo (up to 2 days/week). If you're building something interesting,
            let's connect.
          </p>
        </ScrollReveal>

        <div className="contact__links" ref={linksRef}>
          {links.map(link => (
            <a
              key={link.label}
              href={link.href}
              className="contact__link stagger-item"
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              <span className="contact__link-icon">{link.icon}</span>
              <div className="contact__link-body">
                <span className="contact__link-label">{link.label}</span>
                <span className="contact__link-value">{link.value}</span>
              </div>
              <span className="contact__link-arrow">→</span>
            </a>
          ))}
        </div>

        <ScrollReveal delay={400}>
          <div className="contact__footer">
            <p>
              Built with React + Stylus · Santos, SP · {new Date().getFullYear()}
            </p>
            <p className="contact__footer-name">Guilherme Anguiano</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
