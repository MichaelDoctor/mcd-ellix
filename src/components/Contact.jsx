import { BOOKING_URL, booking, branches, contact, phones } from '../data.js'
import { useMessengerLink } from '../hooks.js'

const Lines = ({ items }) =>
  items.map((line, i) => (
    <span key={i}>
      {line}
      {i < items.length - 1 && <br />}
    </span>
  ))

export default function Contact() {
  const messenger = useMessengerLink()
  return (
    <section className="contact" id="contact">
      <h2 className="rv">visit our branches</h2>
      <p className="branches-intro rv d1">
        Looking for a massage in Calaca or Tuy, Batangas, or in Tagaytay? Walk in at our Calaca branch, book an
        appointment at any branch, or get home service within Calaca.
      </p>
      <p className="eyebrow branches-sub rv d1">
        {branches.length} branches · {branches.map((b) => b.name).join(' · ')}
      </p>

      <ul className="branches">
        {branches.map((b, i) => (
          <li key={b.name} className={`branch${b.featured ? ' featured' : ''} rv d${i + 1}`}>
            <span className="branch-tag">{b.tag}</span>
            <h3>{b.heading}</h3>
            <p className="caps branch-address"><Lines items={b.address} /></p>
            <p className="branch-hours"><Lines items={b.hours} /></p>
            {b.mapUrl ? (
              <a className="branch-link" href={b.mapUrl} target="_blank" rel="noopener noreferrer">
                Get directions ↗
              </a>
            ) : (
              <a className="branch-link" href={BOOKING_URL}>Contact us for location →</a>
            )}
          </li>
        ))}
      </ul>

      <div className="cols two">
        <div className="rv d1">
          <h3>Bookings</h3>
          <p className="caps">
            <a href={messenger.href} target="_blank" rel="noopener noreferrer">
              {messenger.onDesktop ? 'Message us on Facebook ↗' : 'Message us on Messenger ↗'}
            </a>
            <br />
            {phones.map((p) => (
              <span key={p.tel}>
                Call <a href={`tel:${p.tel}`}>{p.display}</a>
                <br />
              </span>
            ))}
            <a href={booking.text}>Send a text</a>
          </p>
        </div>
        <div className="rv d2">
          <h3>Follow us</h3>
          <p className="caps">
            <a href={contact.facebook} target="_blank" rel="noopener noreferrer">Facebook ↗</a>
          </p>
        </div>
      </div>

      <div className="foot">
        <span suppressHydrationWarning>© {new Date().getFullYear()} MCD Ellix Massage &amp; Spa</span>
        <a href="#top">Back to top ↑</a>
      </div>
      <p className="giant" aria-hidden="true">MCD Ellix</p>
    </section>
  )
}
