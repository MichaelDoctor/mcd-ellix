const INK = '#1c1a16'
const stroke = { fill: 'none', stroke: INK, strokeWidth: 2.4, strokeLinecap: 'round' }

const sigils = [
  {
    label: 'Relax',
    art: (
      <g {...stroke}>
        <path d="M48 14a22 22 0 1 0 18 34 18 18 0 1 1-18-34z" fill={INK} />
        <path d="M8 66h64M18 72h44" />
      </g>
    ),
  },
  {
    label: 'Rejuvenate',
    art: (
      <g {...stroke}>
        <path d="M40 70V40" />
        <path d="M40 44C22 44 12 30 14 12c18 0 28 12 26 32z" fill={INK} />
        <path d="M40 52c12 0 22-8 24-22-14 0-22 8-24 22z" fill={INK} />
        <circle cx="40" cy="74" r="3" fill={INK} stroke="none" />
      </g>
    ),
  },
  {
    label: 'Restore',
    art: (
      <g fill={INK}>
        <ellipse cx="40" cy="64" rx="26" ry="9" />
        <ellipse cx="40" cy="47" rx="18" ry="7" />
        <ellipse cx="40" cy="33" rx="12" ry="5.5" />
        <ellipse cx="40" cy="21" rx="7" ry="4" />
        <path d="M40 6v8" {...stroke} />
      </g>
    ),
  },
]

export default function Values() {
  return (
    <section className="values" id="values">
      <h2 className="display rv">
        Come in <span className="script">&amp; slow down</span>
      </h2>
      <ul className="sigils three" aria-label="What we cultivate">
        {sigils.map((s, i) => (
          <li key={s.label} className={`rv d${Math.min(i + 1, 4)}`}>
            <svg viewBox="0 0 80 80" aria-hidden="true">{s.art}</svg>
            <span>{s.label}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
