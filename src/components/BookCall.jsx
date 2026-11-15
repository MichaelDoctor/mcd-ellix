import { phones } from '../data.js'

export default function BookCall() {
  return (
    <section className="tribe book">
      <h2 className="rv">book your<br />appointment</h2>
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
        <small>Relax · Rejuvenate · Restore</small>
      </div>
    </section>
  )
}
