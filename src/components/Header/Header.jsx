import { useState, useEffect } from 'react'
import { useTheme } from '../../context/ThemeContext'
import { useLanguage } from '../../context/LanguageContext'
import './Header.styl'

export default function Header() {
  const { theme, toggle } = useTheme()
  const { lang, toggleLang, t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (e) => {
    e.preventDefault()
    const target = document.querySelector(e.currentTarget.getAttribute('href'))
    if (target) target.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="header__inner container">
        <a href="#hero" className="header__logo" onClick={handleNav}>
          <span className="header__logo-bracket">&lt;</span>
          GA
          <span className="header__logo-bracket">/&gt;</span>
        </a>

        <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}>
          {t.header.nav.map(({ href, label }) => (
            <a key={href} href={href} className="header__nav-link" onClick={handleNav}>
              {label}
            </a>
          ))}
          <a
            href={t.header.resumeFile}
            className="btn btn-primary header__cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.header.resume}
          </a>
        </nav>

        <div className="header__actions">
          <button
            className="header__lang-toggle"
            onClick={toggleLang}
            aria-label="Toggle language"
          >
            {lang === 'en-US' ? 'EN' : 'PT'}
          </button>

          <button
            className="header__theme-toggle"
            onClick={toggle}
            aria-label={t.header.toggleTheme}
          >
            {theme === 'dark' ? '☀' : '◑'}
          </button>

          <button
            className={`header__burger ${menuOpen ? 'header__burger--open' : ''}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label={t.header.toggleMenu}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}
