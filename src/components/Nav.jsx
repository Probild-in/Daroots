import { useEffect, useState } from 'react'

const LINKS = [
  ['Collections', '#collections'],
  ['Craft', '#craft'],
  ['Materials', '#materials'],
  ['Process', '#process'],
  ['Contact', '#contact'],
]

export default function Nav() {
  const [solid, setSolid] = useState(false)
  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${solid ? 'is-solid' : ''}`}>
      <a className="nav__logo" href="#top" aria-label="Daroots home">
        <img src="/logos/daroots-full-cream.svg" alt="Daroots" />
      </a>
      <nav className="nav__links" aria-label="Primary">
        {LINKS.map(([label, href]) => (
          <a key={href} href={href}>
            {label}
          </a>
        ))}
      </nav>
      <a className="btn nav__cta" href="#contact">
        Request Catalogue <span className="btn__arrow">→</span>
      </a>
      <button className="nav__burger" aria-label="Menu">Menu</button>
    </header>
  )
}
