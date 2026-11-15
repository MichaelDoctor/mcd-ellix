import Frame from './Frame.jsx'
import { BOOKING_URL, peso } from '../data.js'

const C = '#f3ece0'
const choices = ['Ventosa', 'Hot Stone', 'Ear Candling']

// Spotlight on the house signature treatment.
export default function Signature() {
  return (
    <section className="founder" id="signature">
      <div className="split">
        <Frame variant="f3" tag="warm stones · ventosa · candling">
          <ellipse cx="200" cy="200" rx="90" ry="34" fill={C} opacity=".38" />
          <ellipse cx="200" cy="262" rx="124" ry="42" fill={C} opacity=".26" />
          <ellipse cx="200" cy="332" rx="150" ry="50" fill={C} opacity=".18" />
          <path
            d="M170 150c-14-20 14-30 0-50M210 146c-14-20 14-30 0-56M250 150c-14-20 14-30 0-50"
            stroke={C} strokeWidth="5" strokeLinecap="round" fill="none" opacity=".5"
          />
        </Frame>
        <div>
          <p className="eyebrow accent rv">Our signature</p>
          <h2 className="display rv d1">
            MCD All-In <span className="script">Signature Massage</span>
          </h2>
          <p className="eyebrow creds rv d2">1 hour · {peso(1000)}</p>
          <p className="caps rv d2">
            Our most-loved treatment: a full-body massage finished with your choice of one specialty add-on. Make it
            yours with:
          </p>
          <ul className="choices rv d3">
            {choices.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
          <a href={BOOKING_URL} className="btn rv d3">Book the signature</a>
        </div>
      </div>
    </section>
  )
}
