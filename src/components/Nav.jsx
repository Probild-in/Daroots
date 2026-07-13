import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const COLLECTIONS = [
  ['Hand Tufted', '/collections/hand-tufted'],
  ['Hand Knotted', '/collections/hand-knotted'],
  ['Flat Weaves', '/collections/flat-weaves'],
  ['Handloom', '/collections/handloom'],
]
const LINKS = [
  ['Craft', '/#craft'],
  ['Materials', '/#materials'],
  ['Process', '/#process'],
  ['Contact', '#contact'],
]

export default function Nav() {
  const [solid, setSolid] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${solid ? 'is-solid' : ''}`}>
      <Link className="nav__logo" to="/" aria-label="Daroots home">
        <img src="/logos/daroots-icon.svg" alt="Daroots" />
      </Link>

      <nav className="nav__links" aria-label="Primary">
        <div className="nav__drop">
          <Link to="/#collections" className="nav__droptrigger">
            Collections
          </Link>
          <div className="nav__menu">
            {COLLECTIONS.map(([label, href]) => (
              <Link key={href} to={href}>{label}</Link>
            ))}
          </div>
        </div>
        {LINKS.map(([label, href]) =>
          href.startsWith('/') ? (
            <Link key={href} to={href}>{label}</Link>
          ) : (
            <a key={href} href={href}>{label}</a>
          ),
        )}
      </nav>

      <a className="btn nav__cta" href="#contact">
        Request Catalogue <span className="btn__arrow">→</span>
      </a>
      <button className="nav__burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen((v) => !v)}>
        Menu
      </button>

      {open && (
        <div className="nav__mobile" onClick={() => setOpen(false)}>
          <span className="nav__mobilehead">Collections</span>
          {COLLECTIONS.map(([label, href]) => (
            <Link key={href} to={href} className="nav__mobilesub">{label}</Link>
          ))}
          {LINKS.map(([label, href]) =>
            href.startsWith('/') ? (
              <Link key={href} to={href}>{label}</Link>
            ) : (
              <a key={href} href={href}>{label}</a>
            ),
          )}
        </div>
      )}
    </header>
  )
}
