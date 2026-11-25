import { contact, homeService, payments, phones, visitOptions } from '../data.js'
import logo from '../assets/logo-badge.webp'
import { useMessengerLink } from '../hooks.js'
import BookingButtons from './BookingButtons.jsx'

export default function BookCall() {
  const messenger = useMessengerLink()

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
        <BookingButtons />
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
