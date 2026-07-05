import Section from '../components/Section'
import Reveal from '../components/Reveal'
import Tilt from '../components/Tilt'
import { rugImg } from '../lib/patterns'

export default function Collections() {
  return (
    <Section
      id="collections"
      className="pad"
      photo="/rugs/ardabil.jpg"
      pos="center 30%"
      scrim="linear-gradient(180deg, rgba(12,5,4,0.5), rgba(12,5,4,0.68))"
    >
      <div className="wrap">
        <div className="section-head">
          <Reveal>
            <span className="eyebrow">Curated by region &amp; era</span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="display">Featured Collections</h2>
          </Reveal>
        </div>

        <div className="collections">
          <Reveal>
            <Tilt>
              <div className="tile" style={{ aspectRatio: '16 / 11' }}>
                <div className="tile__rug" style={{ '--rug': rugImg('heriz') }} />
                <div className="tile__glow" />
                <span className="tile__tag">Heritage series</span>
                <div className="tile__meta">
                  <div className="t">The Anatolian Line</div>
                  <div className="s">Geometric · village-woven · wool</div>
                </div>
                <span className="repl">Replace with collection photo</span>
              </div>
            </Tilt>
          </Reveal>

          <Reveal delay={120}>
            <div className="custom-card">
              <span className="eyebrow">Made to your room</span>
              <h3 className="display">Custom Rugs</h3>
              <p className="muted">
                Bring us a colour, a floor plan, or a feeling. We translate it into a hand-knotted
                piece sized precisely to your space.
              </p>
              <ul>
                <li>Any size, shape, or palette</li>
                <li>Your motif or one of ours, redrawn</li>
                <li>Sample knots approved before weaving</li>
              </ul>
              <a className="btn btn--emerald mt-s" href="#contact" style={{ alignSelf: 'flex-start' }}>
                Enquire about custom <span className="btn__arrow">→</span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
