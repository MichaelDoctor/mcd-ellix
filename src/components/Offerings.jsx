import { useEffect, useState } from 'react'
import { BOOKING_URL, branches, peso } from '../data.js'
import BookingButtons from './BookingButtons.jsx'

// Each branch has a shareable link that opens its prices, e.g.
// https://mcdellixmassageandspa.com/#prices-tuy
const HASH_PREFIX = '#prices-'
const branchFromHash = (hash) => branches.find((b) => `${HASH_PREFIX}${b.slug}` === hash)

export default function Offerings() {
  // The prerendered page always starts on Calaca; a branch link switches it after load.
  const [branch, setBranch] = useState(branches[0])
  const [tab, setTab] = useState(branches[0].menu[0].id)

  useEffect(() => {
    const sync = () => {
      const b = branchFromHash(window.location.hash)
      if (b) setBranch(b)
    }
    sync()
    window.addEventListener('hashchange', sync)
    return () => window.removeEventListener('hashchange', sync)
  }, [])

  const chooseBranch = (b) => {
    setBranch(b)
    // Keep the URL shareable without jumping the page.
    window.history.replaceState(null, '', `${HASH_PREFIX}${b.slug}`)
  }

  const menu = branch.menu
  const active = menu && (menu.find((m) => m.id === tab) ?? menu[0])

  return (
    <section className="offerings" id="services">
      {branches.map((b) => (
        <span key={b.slug} id={`prices-${b.slug}`} className="anchor" aria-hidden="true" />
      ))}
      <div className="off-head">
        <h2 className="display rv">
          Massage services <span className="script">&amp; prices</span>
        </h2>
        <div className="off-controls rv d1">
          <div className="branch-switch" role="group" aria-label="Choose a branch">
            <span className="branch-switch-label">Branch</span>
            {branches.map((b) => (
              <button key={b.slug} aria-pressed={branch.slug === b.slug} onClick={() => chooseBranch(b)}>
                {b.name}
              </button>
            ))}
          </div>
          {menu && (
            <div className="tabs" role="tablist" aria-label={`${branch.name} service categories`}>
              {menu.map((m) => (
                <button
                  key={m.id}
                  role="tab"
                  id={`tab-${m.id}`}
                  aria-selected={active.id === m.id}
                  aria-controls="menu-panel"
                  onClick={() => setTab(m.id)}
                >
                  {m.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {menu ? (
        <>
          <ol
            className="price-list"
            id="menu-panel"
            role="tabpanel"
            aria-labelledby={`tab-${active.id}`}
            key={`${branch.slug}-${active.id}`}
          >
            {active.items.map((item, i) => (
              <li key={item.name} className={item.options ? 'multi' : undefined} style={{ animationDelay: `${i * 45}ms` }}>
                <span className="n">{String(i + 1).padStart(2, '0')}</span>
                <span className="name">
                  <span className="t">{item.name}</span>
                  {item.note && <span className="note">{item.note}</span>}
                  {item.desc && <span className="item-desc">{item.desc}</span>}
                </span>
                {item.options ? (
                  <span className="opts">
                    {item.options.map((o) => (
                      <span className="opt" key={o.time}>
                        <span className="time">{o.time}</span>
                        <span className="leader" aria-hidden="true" />
                        <span className="price">{peso(o.price)}</span>
                      </span>
                    ))}
                  </span>
                ) : (
                  <>
                    <span className="time">{item.time}</span>
                    <span className="leader" aria-hidden="true" />
                    <span className="price">{peso(item.price)}</span>
                  </>
                )}
              </li>
            ))}
          </ol>
          {active.note && <p className="menu-note">{active.note}</p>}
        </>
      ) : (
        <div className="inquire" key={branch.slug}>
          <p className="eyebrow">{branch.heading} · {branch.tag}</p>
          <h3>Ask us about services &amp; prices</h3>
          <p>
            Services and rates at our {branch.name} branch are shared on request. Message, call or text us and we’ll
            send you the details and help you book.
          </p>
          <BookingButtons textMessage={`Hi! Can I ask about services and prices at your ${branch.name} branch?`} />
        </div>
      )}

      <div className="off-cta rv">
        <p className="eyebrow">
          {branch.name} branch · Prices in Philippine pesos · Cash &amp; GCash accepted
          {branch.homeServiceArea && ` · Home service within ${branch.homeServiceArea}`}
        </p>
        <a href={BOOKING_URL} className="btn">Book now</a>
      </div>
    </section>
  )
}
