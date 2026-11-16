import { useParallax } from '../hooks.js'

/**
 * Arched "photo" frame. Until real photography is added, it renders a
 * painterly gradient plus abstract SVG art. Pass `src` to use a real image.
 */
export default function Frame({ variant, round = false, tag, src, alt = '', children }) {
  const fill = useParallax()
  return (
    <div className={`frame ${variant}${round ? ' round' : ''} rv`}>
      <div className="fill" ref={fill}>
        {src && <img src={src} alt={alt} className="photo" />}
      </div>
      {!src && (
        <svg className="art" viewBox="0 0 400 500" aria-hidden="true">
          {children}
        </svg>
      )}
      {tag && <span className="tag">{tag}</span>}
    </div>
  )
}
