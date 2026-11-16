import { homeService, payments, phones, visitOptions } from '../data.js'
import logo from '../assets/logo-badge.png'

export default function BookCall() {
  return (
    <section className="tribe book">
      <div className="book-head">
        <img src={logo} alt="MCD Ellix Massage and Spa logo" className="book-badge rv" width="180" height="180" />
        <h2 className="rv d1">book your<br />appointment</h2>
      </div>
      <div className="rv d1">
        <p className="caps" style={{ marginTop: 0 }}>
          For inquiries and to book an appointment, call or text us:
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
