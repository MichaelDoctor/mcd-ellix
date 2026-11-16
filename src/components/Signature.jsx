import { BOOKING_URL, addOns, peso } from '../data.js'
import mark from '../assets/logo-mark.png'

const numerals = ['i.', 'ii.', 'iii.', 'iv.']

// Spotlight on the house signature treatment (text-led, no photo).
export default function Signature() {
  return (
    <section className="signature" id="signature">
      <img src={mark} alt="" aria-hidden="true" className="sig-watermark" />

      <header className="sig-head">
        <p className="eyebrow accent rv">Our signature</p>
        <h2 className="display rv d1">
          MCD All-In <span className="script">Signature Massage</span>
        </h2>
        <p className="sig-price rv d2">
          <span className="eyebrow">1 hour</span>
          <span className="amount">{peso(1000)}</span>
        </p>
        <p className="caps rv d2">
          Our most-loved treatment: a full-body massage finished with your choice of one specialty add-on.
        </p>
      </header>

      <p className="eyebrow sig-pick rv">Choose one</p>
      <ul className="sig-cards">
        {addOns.map((a, i) => (
          <li key={a.name} className={`rv d${i + 1}`}>
            <span className="num">{numerals[i]}</span>
            <h3>{a.name}</h3>
            {a.desc && <p>{a.desc}</p>}
          </li>
        ))}
      </ul>

      <div className="sig-cta rv">
        <a href={BOOKING_URL} className="btn solid">Book the signature</a>
      </div>
    </section>
  )
}
