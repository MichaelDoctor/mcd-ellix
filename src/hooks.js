import { useEffect, useRef, useState } from 'react'
import { booking, contact } from './data.js'

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

/** True on phones and tablets (iPhone, iPad, Android); false on computers. */
export function isMobileDevice() {
  if (typeof navigator === 'undefined') return true
  const ua = navigator.userAgent || ''
  if (/Android|iPhone|iPad|iPod|Mobile/i.test(ua)) return true
  // iPadOS reports itself as a Mac; tell them apart by touch support.
  return /Macintosh/.test(ua) && navigator.maxTouchPoints > 1
}

/**
 * Where "Messenger" links should go. Phones open the Messenger app via
 * messenger.com/t/…; computers can't open a page chat that way, so they get
 * the Facebook page (which has its own Message button).
 * The prerendered HTML uses the Messenger link; computers switch after load.
 */
export function useMessengerLink() {
  const [onDesktop, setOnDesktop] = useState(false)
  useEffect(() => {
    if (!isMobileDevice()) setOnDesktop(true)
  }, [])
  return { href: onDesktop ? contact.facebook : booking.messenger, onDesktop }
}
