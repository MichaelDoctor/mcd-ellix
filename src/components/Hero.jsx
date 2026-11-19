import { BOOKING_URL, MOTTO } from '../data.js'
import roomCandle from '../assets/room-candle.webp'

const trunks = [
  [40, 0, 34], [170, 60, 22], [300, 20, 46],
  [1060, 40, 28], [1190, 0, 52], [1340, 80, 24],
]

export default function Hero() {
  return (
    <section className="hero">
      <div className="canopy" aria-hidden="true">
        <svg viewBox="0 0 1440 700" preserveAspectRatio="none">
          <defs>
            <linearGradient id="tr" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0" stopColor="#0f0e0a" stopOpacity="0" />
              <stop offset=".5" stopColor="#0f0e0a" stopOpacity=".9" />
              <stop offset="1" stopColor="#0f0e0a" />
            </linearGradient>
          </defs>
          <g fill="url(#tr)">
            {trunks.map(([x, y, w]) => (
              <rect key={x} x={x} y={y} width={w} height={700 - y} />
            ))}
          </g>
          <path d="M0 560 C240 520 420 600 720 570 S1200 520 1440 560 V700 H0Z" fill="#14130e" opacity=".9" />
        </svg>
        <div className="mist" />
      </div>
      <div className="hero-arch has-photo">
        <img
          src={roomCandle}
          alt="Candlelit massage room at MCD Ellix Massage and Spa"
          width="1050"
          height="1400"
          fetchPriority="high"
          decoding="async"
        />
      </div>

      <div className="hero-content">
        <h1 className="display">
          <span className="h1-eyebrow">MCD Ellix Massage &amp; Spa · Calaca · Tuy · Tagaytay</span>
          <span className="line">
            <span>Your spa where you</span>
          </span>
          <span className="line">
            <span>can <span className="script">Relax</span> &amp; <span className="script">Release</span></span>
          </span>
          <span className="line">
            <span>your stresses</span>
          </span>
        </h1>
        <a href={BOOKING_URL} className="btn solid">Call to book</a>
      </div>

      <div className="scroll-cue" aria-hidden="true">
        <span className="eyebrow" style={{ fontSize: 9 }}>Scroll</span>
        <i />
      </div>
    </section>
  )
}
