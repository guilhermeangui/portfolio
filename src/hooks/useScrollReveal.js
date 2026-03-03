import { useEffect, useRef } from 'react'

export function useScrollReveal(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('revealed')
          observer.unobserve(el)
        }
      },
      { threshold: options.threshold || 0.15, ...options }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return ref
}

export function useStaggerReveal(threshold = 0.1) {
  const ref = useRef(null)

  useEffect(() => {
    const container = ref.current
    if (!container) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const children = container.querySelectorAll('.stagger-item')
          children.forEach((child, i) => {
            setTimeout(() => child.classList.add('revealed'), i * 100)
          })
          observer.unobserve(container)
        }
      },
      { threshold }
    )

    observer.observe(container)
    return () => observer.disconnect()
  }, [])

  return ref
}
