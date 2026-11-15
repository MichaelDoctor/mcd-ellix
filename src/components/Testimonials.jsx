import { useCallback, useEffect, useState } from 'react'
import { testimonials } from '../data.js'
import { prefersReducedMotion } from '../hooks.js'

export default function Testimonials() {
  const [cur, setCur] = useState(0)
  const [paused, setPaused] = useState(false)
  const n = testimonials.length
  const go = useCallback((i) => setCur(((i % n) + n) % n), [n])

  useEffect(() => {
    if (paused || prefersReducedMotion()) return
    const t = setInterval(() => setCur((c) => (c + 1) % n), 7000)
    return () => clearInterval(t)
  }, [paused, n, cur])

  return (
    <section
      className="love"
      aria-roledescription="carousel"
      aria-label="Client words"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <p className="eyebrow rv">Kind words</p>
      <h2 className="rv d1">client love</h2>
      <div className="slides">
        {testimonials.map((t, i) => (
          <figure key={i} className={`slide${i === cur ? ' on' : ''}`} aria-hidden={i !== cur} aria-label={`${i + 1} of ${n}`}>
            <blockquote className="caps">“{t.quote}”</blockquote>
            <cite>{t.name}</cite>
          </figure>
        ))}
      </div>
      <div className="dots">
        <button className="arrow" aria-label="Previous review" onClick={() => go(cur - 1)}>←</button>
        {testimonials.map((_, i) => (
          <button key={i} aria-label={`Show review ${i + 1}`} aria-current={i === cur} onClick={() => go(i)} />
        ))}
        <button className="arrow" aria-label="Next review" onClick={() => go(cur + 1)}>→</button>
      </div>
    </section>
  )
}
