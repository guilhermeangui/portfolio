import { useScrollReveal } from '../../hooks/useScrollReveal'

export default function ScrollReveal({ children, className = '', direction = 'up', delay = 0 }) {
  const dirClass = direction === 'left' ? 'reveal-left' : direction === 'right' ? 'reveal-right' : 'reveal'
  const ref = useScrollReveal()

  return (
    <div
      ref={ref}
      className={`${dirClass} ${className}`}
      style={{ transitionDelay: delay ? `${delay}ms` : undefined }}
    >
      {children}
    </div>
  )
}
