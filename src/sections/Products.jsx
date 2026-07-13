import Section from '../components/Section'
import Reveal from '../components/Reveal'
import Tilt from '../components/Tilt'
import { rugImg } from '../lib/patterns'

const PRODUCTS = [
  ['Spiral Sphere', 'Hand Tufted', 'spiral'],
  ['Warmth', 'Hand Tufted', 'warmth'],
  ['Planets', 'Hand Tufted', 'planets'],
  ['Kazak 2014', 'Flat Weave', 'kazak'],
  ['Madhubani', 'Hand Knotted', 'madhubani'],
  ['Kemet', 'Hand Knotted', 'kemet'],
  ['Aspen 07', 'Handloom', 'aspen'],
  ['PS Stripes', 'Flat Weave', 'stripes'],
]

export default function Products() {
  return (
    <Section
      id="products"
      className="pad"
      photo="/rugs/hk.jpg"
      scrim="linear-gradient(180deg, rgba(12,5,4,0.8), rgba(12,5,4,0.94))"
    >
      <div className="wrap">
        <div className="section-head" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 20 }}>
          <div>
            <Reveal><span className="eyebrow">Ready to ship</span></Reveal>
            <Reveal delay={80}><h2 className="display mt-s">Featured Products</h2></Reveal>
          </div>
          <Reveal delay={140}>
            <a className="btn btn--ghost" href="#contact">Browse full catalogue <span className="btn__arrow">→</span></a>
          </Reveal>
        </div>

        <div className="grid-products">
          {PRODUCTS.map(([name, spec, img], i) => (
            <Reveal key={name} delay={(i % 4) * 70}>
              <Tilt>
                <div className="tile">
                  <div className="tile__rug" style={{ '--rug': rugImg(img) }} />
                  <div className="tile__glow" />
                  <div className="tile__meta">
                    <div className="t">{name}</div>
                    <div className="s">{spec}</div>
                  </div>
                  <span className="repl">Replace with product photo</span>
                </div>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
