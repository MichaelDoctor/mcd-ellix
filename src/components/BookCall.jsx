import { booking, contact, homeService, payments, phones, visitOptions } from '../data.js'
import logo from '../assets/logo-badge.webp'
import { useMessengerLink } from '../hooks.js'

const icon = {
  call: (
    <path d="M6.6 10.8a15.2 15.2 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1z" />
  ),
  text: (
    <path d="M4 4h16a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H8l-4 4V5a1 1 0 0 1 1-1zm3 5h10M7 12h7" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  ),
  messenger: (
    <path d="M12 3C7 3 3 6.7 3 11.3c0 2.6 1.3 4.9 3.3 6.4V21l3-1.7c.9.3 1.8.4 2.7.4 5 0 9-3.7 9-8.3S17 3 12 3zm.9 11.1-2.3-2.4-4.4 2.4 4.9-5.2 2.3 2.4 4.4-2.4z" />
  ),
}

export default function BookCall() {
  const messenger = useMessengerLink()
  const actions = [
    { key: 'messenger', label: 'Messenger', href: messenger.href, external: true },
    { key: 'call', label: 'Call', href: booking.call },
    { key: 'text', label: 'Text', href: booking.text },
  ]

  return (
    <section className="tribe book" id="book">
      <div className="book-head">
        <img src={logo} alt="MCD Ellix Massage and Spa logo" className="book-badge rv" width="180" height="180" />
        <h2 className="rv d1">book your<br />appointment</h2>
      </div>
      <div className="rv d1">
        <p className="caps" style={{ marginTop: 0 }}>
          For inquiries and bookings, message us on Facebook Messenger, call or text:
        </p>
        <div className="book-actions">
          {actions.map((a) => (
            <a
              key={a.key}
              href={a.href}
              className={`btn${a.key === 'messenger' ? ' solid' : ''}`}
              {...(a.external && { target: '_blank', rel: 'noopener noreferrer' })}
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">{icon[a.key]}</svg>
              {a.label}
            </a>
          ))}
        </div>
        <p className="book-fallback" hidden={messenger.onDesktop}>
          No Messenger app?{' '}
          <a href={contact.facebook} target="_blank" rel="noopener noreferrer">
            Message us from our Facebook page ↗
          </a>
        </p>
        <ul className="phones">
          {phones.map((p) => (
            <li key={p.tel}>
              <a href={`tel:${p.tel}`}>{p.display}</a>
            </li>
          ))}
        </ul>
        <ul className="choices">
          {visitOptions.map((o) => (
            <li key={o}>{o}</li>
          ))}
        </ul>
        <div className="home-note">
          <h3>Home service</h3>
          <p>{homeService.area} {homeService.fee}</p>
        </div>
        <small>Payment: {payments.join(' & ')}</small>
      </div>
    </section>
  )
}
