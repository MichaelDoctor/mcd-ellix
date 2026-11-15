import { contact, phones } from '../data.js'

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
      <h2 className="rv">visit us</h2>
      <div className="cols">
        <div className="rv d1">
          <h3>Location</h3>
          <p className="caps"><Lines items={contact.address} /></p>
        </div>
        <div className="rv d2">
          <h3>Hours</h3>
          <p className="caps"><Lines items={contact.hours} /></p>
        </div>
        <div className="rv d3">
          <h3>Bookings</h3>
          <p className="caps">
            {phones.map((p) => (
              <span key={p.tel}>
                <a href={`tel:${p.tel}`}>{p.display}</a>
                <br />
              </span>
            ))}
            <a href={contact.facebook}>Facebook</a>
          </p>
        </div>
      </div>
      <div className="foot">
        <span>© {new Date().getFullYear()} LINDA by MCD Ellix Massage &amp; Spa</span>
        <a href="#top">Back to top ↑</a>
      </div>
      <p className="giant" aria-hidden="true">LINDA</p>
    </section>
  )
}
