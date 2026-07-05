import { useState } from 'react'
import Section from '../components/Section'
import Reveal from '../components/Reveal'
import { rugImg } from '../lib/patterns'

const MATERIALS = [
  ['Wool', 'Highland', 'heriz', 'Hand-spun highland wool, prized for its lanolin sheen and spring underfoot. It holds dye deeply and wears for generations — the backbone of the Daroots pile.'],
  ['Silk', 'Mulberry', 'qom', 'Mulberry silk catches light like water, letting weavers pack in ultra-fine knots. Reserved for our most detailed medallions and the pieces meant to be heirlooms.'],
  ['Cotton', 'Long-staple', 'bijar', 'Long-staple cotton forms a taut, stable foundation — the warp and weft that keeps a rug true to shape for a century of use.'],
  ['Jute', 'Natural fibre', 'bidjar', 'Undyed jute brings an earthy, matte texture and honest weight. Chosen for flatweaves and rooms that ask for something quiet and grounded.'],
]

export default function Materials() {
  const [active, setActive] = useState(0)
  const [, sub, img, body] = MATERIALS[active]

  return (
    <Section
      id="materials"
      className="pad"
      photo="/rugs/bidjar-modern.jpg"
      scrim="linear-gradient(180deg, rgba(12,5,4,0.58), rgba(12,5,4,0.74))"
    >
      <div className="wrap">
        <div className="section-head">
          <Reveal><span className="eyebrow">What a Daroots rug is made of</span></Reveal>
          <Reveal delay={80}><h2 className="display mt-s">Our Materials</h2></Reveal>
        </div>

        <Reveal>
          <div className="materials">
            <div className="mat-tabs" role="tablist" aria-label="Materials">
              {MATERIALS.map(([name, s], i) => (
                <button
                  key={name}
                  role="tab"
                  aria-selected={i === active}
                  className={`mat-tab ${i === active ? 'is-active' : ''}`}
                  onClick={() => setActive(i)}
                >
                  {name} <small>{s}</small>
                </button>
              ))}
            </div>

            <div className="mat-panel">
              <div>
                <h3 className="display" style={{ fontSize: 'clamp(1.8rem,3vw,2.6rem)' }}>
                  {MATERIALS[active][0]} <span className="muted" style={{ fontSize: '0.5em' }}>· {sub}</span>
                </h3>
                <p className="lede mt-s">{body}</p>
              </div>
              <div className="mat-swatch" style={{ '--rug': rugImg(img) }} />
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
