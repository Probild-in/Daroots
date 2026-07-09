import { useState } from 'react'
import Section from '../components/Section'
import Reveal from '../components/Reveal'

/* [name, sub, bestFor, body, heroImg, [example imgs]] */
const MATERIALS = [
  [
    'Wool',
    'Hand-spun highland',
    'High-traffic & heirloom rugs',
    'Hand-spun highland wool is the backbone of the Daroots pile. Its natural lanolin gives a soft sheen, springs back underfoot, and helps the rug shrug off dirt. Wool takes vegetable and mineral dyes deeply, so colours stay rich for decades and only mellow with age.',
    '/rugs/p-moroccan.jpg',
    ['/rugs/p-haveri.jpg', '/rugs/p-marbles.jpg', '/rugs/p-morrican.jpg'],
  ],
  [
    'Silk',
    'Pure mulberry',
    'Fine detail & statement floors',
    'Mulberry silk catches light like water and lets our weavers pack in ultra-fine knots. We reserve it for the most intricate medallions, delicate highlights, and the pieces meant to be handed down. The result is a luminous, jewel-like surface that shifts as you move around it.',
    '/rugs/p-spiral.jpg',
    ['/rugs/p-madhubani.jpg', '/rugs/p-hk2.jpg', '/rugs/p-satin.jpg'],
  ],
  [
    'Bamboo Silk',
    'Plant-based viscose',
    'Modern, low-sheen glamour',
    'Bamboo silk is a plant-based viscose with the fluid drape and lustre of true silk at a friendlier price. Soft, cool, and reflective, it brings a quiet glamour to contemporary designs and pairs beautifully with wool for contrast and highlights.',
    '/rugs/p-teal.jpg',
    ['/rugs/p-aspen6.jpg', '/rugs/p-aspen.jpg', '/rugs/p-colorblock.jpg'],
  ],
  [
    'Cotton',
    'Long-staple',
    'Flat weaves & foundations',
    'Long-staple cotton forms the taut, stable foundation beneath every knotted rug, and the flat, reversible face of our kilims and dhurries. Strong and breathable, it holds a rug true to shape and takes bright, clean colour for crisp geometry.',
    '/rugs/p-stripes.jpg',
    ['/rugs/p-ps04.jpg', '/rugs/p-kazak.jpg', '/rugs/p-ikat.jpg'],
  ],
  [
    'Jute',
    'Natural fibre',
    'Relaxed, organic interiors',
    'Undyed jute brings an earthy, matte texture and an honest, grounding weight. Hard-wearing and renewable, it adds natural tone to handloom pieces and layers beautifully under a finer rug for a relaxed, organic feel.',
    '/rugs/neutral.jpg',
    ['/rugs/p-colorblock2.jpg', '/rugs/p-aspen5.jpg', '/rugs/p-kazak111.jpg'],
  ],
]

export default function Materials() {
  const [active, setActive] = useState(0)
  const [name, sub, bestFor, body, hero, examples] = MATERIALS[active]

  return (
    <Section
      id="materials"
      className="pad"
      photo="/rugs/neutral.jpg"
      scrim="linear-gradient(180deg, rgba(12,5,4,0.62), rgba(12,5,4,0.78))"
    >
      <div className="wrap">
        <div className="section-head">
          <Reveal><span className="eyebrow">What a Daroots rug is made of</span></Reveal>
          <Reveal delay={80}><h2 className="display mt-s">Our Materials</h2></Reveal>
          <Reveal delay={140}>
            <p className="lede mt-s" style={{ maxWidth: '60ch' }}>
              The fibre decides how a rug feels, wears, and ages. We hand-pick natural and
              plant-based yarns from India's weaving heartland and match each one to the design,
              the room, and the way you live.
            </p>
          </Reveal>
        </div>

        <Reveal>
          <div className="materials">
            <div className="mat-tabs" role="tablist" aria-label="Materials">
              {MATERIALS.map(([n, s], i) => (
                <button
                  key={n}
                  role="tab"
                  aria-selected={i === active}
                  className={`mat-tab ${i === active ? 'is-active' : ''}`}
                  onClick={() => setActive(i)}
                >
                  {n} <small>{s}</small>
                </button>
              ))}
            </div>

            <div className="mat-panel">
              <div>
                <h3 className="display" style={{ fontSize: 'clamp(1.8rem,3vw,2.6rem)' }}>
                  {name} <span className="muted" style={{ fontSize: '0.5em' }}>· {sub}</span>
                </h3>
                <span className="mat-bestfor">Best for: {bestFor}</span>
                <p className="lede mt-s">{body}</p>
                <div className="mat-examples">
                  {examples.map((src) => (
                    <div key={src} className="mat-example" style={{ backgroundImage: `url("${src}")` }} />
                  ))}
                </div>
                <p className="mat-caption muted">Daroots rugs woven in {name.toLowerCase()}</p>
              </div>
              <div className="mat-swatch" style={{ backgroundImage: `url("${hero}")` }} />
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
