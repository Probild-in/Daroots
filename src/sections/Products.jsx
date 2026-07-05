import Section from '../components/Section'
import Reveal from '../components/Reveal'
import Tilt from '../components/Tilt'
import { rugImg } from '../lib/patterns'

const PRODUCTS = [
  ['Isfahan Medallion', 'Silk & wool · 8×10 ft', 'isfahan'],
  ['Tabriz Floral', 'Hand-knotted · 9×12 ft', 'tabriz'],
  ['Qom Silk', 'Pure silk · 6×9 ft', 'qom'],
  ['Kashan Garden', 'Wool pile · 8×11 ft', 'kashan'],
  ['Ardabil Star', 'Wool & silk · 10×14 ft', 'ardabil'],
  ['Heriz Camel', 'Wool pile · 9×12 ft', 'heriz'],
  ['Bijar Herati', 'Hand-knotted · 7×10 ft', 'bijar'],
  ['Bidjar Modern', 'Wool pile · 6×9 ft', 'bidjar'],
]

export default function Products() {
  return (
    <Section
      id="products"
      className="pad"
      photo="/rugs/tabriz.jpg"
      scrim="linear-gradient(180deg, rgba(12,5,4,0.52), rgba(12,5,4,0.7))"
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
