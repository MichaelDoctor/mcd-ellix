import { useState } from 'react'
import { BOOKING_URL, menu, peso } from '../data.js'

export default function Offerings() {
  const [tab, setTab] = useState(menu[0].id)
  const active = menu.find((m) => m.id === tab)

  return (
    <section className="offerings" id="services">
      <div className="off-head">
        <h2 className="display rv">
          Services <span className="script">&amp; prices</span>
        </h2>
        <div className="tabs rv d1" role="tablist" aria-label="Service categories">
          {menu.map((m) => (
            <button
              key={m.id}
              role="tab"
              id={`tab-${m.id}`}
              aria-selected={tab === m.id}
              aria-controls="menu-panel"
              onClick={() => setTab(m.id)}
            >
              {m.label}
            </button>
          ))}
        </div>
      </div>

      <ol className="price-list" id="menu-panel" role="tabpanel" aria-labelledby={`tab-${tab}`} key={tab}>
        {active.items.map((item, i) => (
          <li key={`${item.name}-${item.time}`} style={{ animationDelay: `${i * 45}ms` }}>
            <span className="n">{String(i + 1).padStart(2, '0')}</span>
            <span className="name">
              <span className="t">{item.name}</span>
              {item.note && <span className="note">{item.note}</span>}
              {item.desc && <span className="item-desc">{item.desc}</span>}
            </span>
            <span className="time">{item.time}</span>
            <span className="leader" aria-hidden="true" />
            <span className="price">{peso(item.price)}</span>
          </li>
        ))}
      </ol>

      <div className="off-cta rv">
        <p className="eyebrow">Prices in Philippine pesos · Cash &amp; GCash accepted · Home service within Calaca</p>
        <a href={BOOKING_URL} className="btn">Call to book</a>
      </div>
    </section>
  )
}
