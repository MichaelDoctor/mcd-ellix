import { BOOKING_URL } from '../data.js'

const Phrase = () => (
  <span>
    Relax <em>·</em> Rejuvenate <em>·</em> Restore <em>·</em>{' '}
  </span>
)

export default function Manifesto() {
  return (
    <>
      <div className="marquee" aria-hidden="true">
        <div className="track">
          {[0, 1, 2, 3].map((i) => <Phrase key={i} />)}
        </div>
      </div>
      <section className="manifesto">
        <p className="rv">Live a healthy life and take care of yourself.</p>
        <a href={BOOKING_URL} className="btn rv d1">Book your session</a>
      </section>
    </>
  )
}
