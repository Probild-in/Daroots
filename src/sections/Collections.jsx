import { Link } from 'react-router-dom'
import Section from '../components/Section'
import Reveal from '../components/Reveal'
import Tilt from '../components/Tilt'
import { CATEGORIES } from '../lib/patterns'

export default function Collections() {
  return (
    <Section
      id="collections"
      className="pad"
      photo="/rugs/neutral.jpg"
      scrim="linear-gradient(180deg, rgba(12,5,4,0.62), rgba(12,5,4,0.76))"
    >
      <div className="wrap">
        <div className="section-head center">
          <Reveal>
            <span className="eyebrow">Four ways we weave</span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="display">Our Collections</h2>
          </Reveal>
        </div>

        <div className="cat-grid">
          {CATEGORIES.map((c, i) => (
            <Reveal key={c.key} delay={(i % 2) * 90}>
              <Tilt max={7}>
                <Link className="cat-card" to={`/collections/${c.key}`}>
                  <div className="cat-card__img" style={{ backgroundImage: `url("${c.img}")` }} />
                  <div className="cat-card__glow" />
                  <div className="cat-card__body">
                    <span className="cat-card__tag">{c.tag}</span>
                    <h3 className="display">{c.name}</h3>
                    <p>{c.desc}</p>
                    <span className="cat-card__cta">View collection →</span>
                  </div>
                </Link>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
