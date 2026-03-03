import { useState, useEffect } from 'react'
import { useTheme } from '../../context/ThemeContext'
import './Header.styl'

const navLinks = [
  { href: '#about',      label: 'About'      },
  { href: '#experience', label: 'Experience' },
  { href: '#projects',   label: 'Projects'   },
  { href: '#skills',     label: 'Skills'     },
  { href: '#contact',    label: 'Contact'    },
]

export default function Header() {
  const { theme, toggle } = useTheme()
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
          {navLinks.map(({ href, label }) => (
            <a key={href} href={href} className="header__nav-link" onClick={handleNav}>
              {label}
            </a>
          ))}
          <a
            href="/Guilherme_Anguiano_Resume_EN.pdf"
            className="btn btn-primary header__cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            Résumé ↗
          </a>
        </nav>

        <div className="header__actions">
          <button
            className="header__theme-toggle"
            onClick={toggle}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? '☀' : '◑'}
          </button>

          <button
            className={`header__burger ${menuOpen ? 'header__burger--open' : ''}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
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
