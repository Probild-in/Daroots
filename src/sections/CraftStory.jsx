import Section from '../components/Section'
import Reveal from '../components/Reveal'
import { rugImg } from '../lib/patterns'

const SWATCHES = ['#7c1224', '#c9a24b', '#1e4a3c', '#1c3a8a', '#f3e9dc']

export default function CraftStory() {
  return (
    <Section
      id="craft"
      className="pad"
      photo="/rugs/kashan-silk.jpg"
      scrim="linear-gradient(180deg, rgba(12,5,4,0.55), rgba(12,5,4,0.72))"
    >
      <div className="wrap split">
        <Reveal>
          <div className="tile" style={{ aspectRatio: '4 / 5' }}>
            <div className="tile__rug" style={{ '--rug': rugImg('qom') }} />
            <div className="tile__glow" />
            <span className="tile__tag">On the loom · Bhadohi atelier</span>
            <div className="tile__meta">
              <div className="t">The vertical loom</div>
              <div className="s">18 months · two weavers</div>
            </div>
            <span className="repl">Replace with loom photo</span>
          </div>
        </Reveal>

        <div className="head">
          <Reveal>
            <span className="eyebrow">The Daroots story</span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="display">
              Where Ancient Craft <br />
              Meets <em>Modern Vision</em>
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="lede">
              A carpet is not a fast covering. It is a narrative — woven by hand, tied by hands
              that have learned their art across generations.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <p className="muted mt-s" style={{ maxWidth: '46ch' }}>
              From natural fibres to the final wash, every rug passes through the hands of dyers,
              weavers, and finishers who treat each piece as their own. We keep the old motifs alive
              while designing for the rooms of today.
            </p>
          </Reveal>
          <Reveal delay={280}>
            <div className="swatches">
              {SWATCHES.map((c) => (
                <span className="swatch" key={c} style={{ background: c }} />
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
