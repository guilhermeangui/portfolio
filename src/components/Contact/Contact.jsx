import { useLanguage } from '../../context/LanguageContext'
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
  const { t } = useLanguage()
  const c = t.contact

  return (
    <section className="contact" id="contact">
      <div className="container">
        <ScrollReveal>
          <p className="section-label">{c.label}</p>
          <h2 className="contact__title">
            {c.title}
            <span className="contact__title-accent">{c.titleAccent}</span>
          </h2>
          <p className="contact__subtitle">{c.subtitle}</p>
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
            <p>{c.footer} {new Date().getFullYear()}</p>
            <p className="contact__footer-name">Guilherme Anguiano</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
