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
    '/rugs/mat-wool.jpg',
    ['/rugs/p-haveri.jpg', '/rugs/p-marbles.jpg', '/rugs/p-morrican.jpg'],
  ],
  [
    'Silk',
    'Pure mulberry',
    'Fine detail & statement floors',
    'Mulberry silk catches light like water and lets our weavers pack in ultra-fine knots. We reserve it for the most intricate medallions, delicate highlights, and the pieces meant to be handed down. The result is a luminous, jewel-like surface that shifts as you move around it.',
    '/rugs/mat-silk.jpg',
    ['/rugs/p-madhubani.jpg', '/rugs/p-hk2.jpg', '/rugs/p-satin.jpg'],
  ],
  [
    'Bamboo Silk',
    'Plant-based viscose',
    'Modern, low-sheen glamour',
    'Bamboo silk is a plant-based viscose with the fluid drape and lustre of true silk at a friendlier price. Soft, cool, and reflective, it brings a quiet glamour to contemporary designs and pairs beautifully with wool for contrast and highlights.',
    '/rugs/mat-bamboo.jpg',
    ['/rugs/p-aspen6.jpg', '/rugs/p-aspen.jpg', '/rugs/p-colorblock.jpg'],
  ],
  [
    'Cotton',
    'Long-staple',
    'Flat weaves & foundations',
    'Long-staple cotton forms the taut, stable foundation beneath every knotted rug, and the flat, reversible face of our kilims and dhurries. Strong and breathable, it holds a rug true to shape and takes bright, clean colour for crisp geometry.',
    '/rugs/mat-cotton.jpg',
    ['/rugs/p-ps04.jpg', '/rugs/p-kazak.jpg', '/rugs/p-ikat.jpg'],
  ],
  [
    'Jute',
    'Natural fibre',
    'Relaxed, organic interiors',
    'Undyed jute brings an earthy, matte texture and an honest, grounding weight. Hard-wearing and renewable, it adds natural tone to handloom pieces and layers beautifully under a finer rug for a relaxed, organic feel.',
    '/rugs/mat-jute.jpg',
    ['/rugs/p-colorblock2.jpg', '/rugs/p-aspen5.jpg', '/rugs/p-kazak111.jpg'],
  ],
  [
    'Tencel',
    'Eucalyptus lyocell',
    'Sustainable sheen & soft drape',
    'Tencel is a botanic lyocell spun from sustainably harvested eucalyptus pulp. It carries the cool, fluid drape and gentle sheen of silk, resists moisture, and stays naturally soft underfoot, an eco-conscious fibre we blend for lustrous highlights and modern, low-impact designs.',
    '/rugs/p-satin.jpg',
    ['/rugs/p-romance.jpg', '/rugs/p-splash.jpg', '/rugs/p-rhythm.jpg'],
  ],
  [
    'Mohair',
    'Lustrous goat fibre',
    'Plush, light-catching luxury',
    'Mohair comes from the Angora goat and is prized for its high lustre, resilience, and silk-like softness. It takes dye brilliantly and lends a plush, light-catching halo to the pile, a fibre we reserve for indulgent, texture-rich statement rugs.',
    '/rugs/mat-mohair.jpg',
    ['/rugs/p-planets.jpg', '/rugs/p-splashbird.jpg', '/rugs/p-warmth.jpg'],
  ],
  [
    'Merino',
    'Fine soft wool',
    'Soft, cosy living spaces',
    'Merino is an especially fine, crimped wool that feels remarkably soft underfoot while keeping the natural durability and stain resistance of wool. Its tight, even fibre gives a smooth, cosy surface, ideal for bedrooms, living rooms, and anywhere comfort comes first.',
    '/rugs/mat-merino.jpg',
    ['/rugs/p-kemet.jpg', '/rugs/p-hk1000.jpg', '/rugs/p-rhythm.jpg'],
  ],
  [
    'Coco & Coir',
    'Coconut husk fibre',
    'Rugged, natural-texture floors',
    'Coir is a coarse, hard-wearing fibre spun from coconut husk. Naturally tough, water-tolerant, and richly earthy in tone, it brings a rugged, organic texture to entryways, layering pieces, and natural-fibre rugs built to take heavy use.',
    '/rugs/mat-coir.jpg',
    ['/rugs/coco-cats.jpg', '/rugs/coco-cat.jpg', '/rugs/coco-dog.jpg'],
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
      scrim="linear-gradient(180deg, rgba(12,5,4,0.82), rgba(12,5,4,0.95))"
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
