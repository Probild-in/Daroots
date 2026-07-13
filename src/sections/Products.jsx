import Section from '../components/Section'
import Reveal from '../components/Reveal'
import Tilt from '../components/Tilt'

const PRODUCTS = [
  ['Aeon Wing', 'Hand Tufted', '/rugs/ht-aeon-wing.jpg'],
  ['Blue Swirls', 'Hand Tufted', '/rugs/ht-blue-swirls.jpg'],
  ['Safari Spectrum', 'Hand Tufted', '/rugs/ht-safari-spectrum.jpg'],
  ['Sacred Quill', 'Hand Tufted', '/rugs/ht-sacred-quill.jpg'],
  ['Butterfly Rest', 'Hand Tufted', '/rugs/ht-butterfly-rest.jpg'],
  ['Colored Strata', 'Hand Tufted', '/rugs/ht-colored-strata.jpg'],
  ['Grey Ammonite', 'Hand Tufted', '/rugs/ht-grey-ammonite.jpg'],
  ['Ink Splatter', 'Hand Tufted', '/rugs/ht-ink-splatter.jpg'],
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
                  <div className="tile__rug" style={{ backgroundImage: `url("${img}")` }} />
                  <div className="tile__glow" />
                  <div className="tile__meta">
                    <div className="t">{name}</div>
                    <div className="s">{spec}</div>
                  </div>
                </div>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
