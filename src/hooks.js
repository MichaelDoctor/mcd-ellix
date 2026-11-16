import { useEffect, useRef } from 'react'

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

/** Fades in every `.rv` element the first time it scrolls into view. */
export function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        }),
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    )
    document.querySelectorAll('.rv').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

/** Drifts an element vertically relative to the viewport center. */
export function useParallax(strength = 40) {
  const ref = useRef(null)
  useEffect(() => {
    if (prefersReducedMotion()) return
    let raf
    const tick = () => {
      const el = ref.current
      if (el) {
        const r = el.parentElement.getBoundingClientRect()
        if (r.bottom > 0 && r.top < innerHeight) {
          const p = (r.top + r.height / 2 - innerHeight / 2) / innerHeight
          el.style.transform = `translateY(${p * -strength}px) scale(1.05)`
        }
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [strength])
  return ref
}
