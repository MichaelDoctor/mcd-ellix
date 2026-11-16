import { benefits } from '../data.js'

export default function Benefits() {
  return (
    <section className="benefits">
      <div className="head">
        <p className="eyebrow accent rv">Why it matters</p>
        <h2 className="display rv d1">
          Make rest <span className="script">a ritual</span>
        </h2>
      </div>
      <div className="cards">
        {benefits.map((b, i) => (
          <article key={b.title} className={`card rv d${i + 1}`}>
            <span className="num">{String(i + 1).padStart(2, '0')}</span>
            <h3>{b.title}</h3>
            <p className="caps">{b.body}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
