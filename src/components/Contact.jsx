import { BOOKING_URL, branches, contact, phones } from '../data.js'

const Lines = ({ items }) =>
  items.map((line, i) => (
    <span key={i}>
      {line}
      {i < items.length - 1 && <br />}
    </span>
  ))

export default function Contact() {
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
              <a className="branch-link" href={BOOKING_URL}>Call for location →</a>
            )}
          </li>
        ))}
      </ul>

      <div className="cols two">
        <div className="rv d1">
          <h3>Bookings</h3>
          <p className="caps">
            {phones.map((p, i) => (
              <span key={p.tel}>
                <a href={`tel:${p.tel}`}>{p.display}</a>
                {i < phones.length - 1 && <br />}
              </span>
            ))}
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
