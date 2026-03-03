import { createContext, useContext, useState } from 'react'
import { translations } from '../i18n/translations'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('portfolio-lang') || 'en-US'
  })

  const toggleLang = () => {
    const next = lang === 'en-US' ? 'pt-BR' : 'en-US'
    setLang(next)
    localStorage.setItem('portfolio-lang', next)
  }

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
