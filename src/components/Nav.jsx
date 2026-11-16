import { useEffect, useState } from 'react'
import { BOOKING_URL, navLinks } from '../data.js'
import logo from '../assets/logo-mark.png'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <header
      className={`nav${scrolled ? " scrolled" : ""}${open ? " open" : ""}`}
    >
      <ul id="menu">
        {navLinks.map((l) => (
          <li key={l.href}>
            <a href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          </li>
        ))}
      </ul>
      <a href="#top" className="logo" aria-label="MCD Ellix home">
        <img src={logo} alt="" className="logo-badge" width="44" height="44" />
        <b>MCD Ellix</b>
        <i>Massage and Spa</i>
      </a>
      <div className="right">
        <a href={BOOKING_URL} className="btn">
          Book now
        </a>
        <button
          className="menu-btn"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
