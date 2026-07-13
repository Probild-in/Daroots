import Section from '../components/Section'
import Reveal from '../components/Reveal'
import BeforeAfter from '../components/BeforeAfter'

export default function CraftStory() {
  return (
    <Section
      id="craft"
      className="pad"
      photo="/rugs/medallion.jpg"
      scrim="linear-gradient(180deg, rgba(12,5,4,0.82), rgba(12,5,4,0.95))"
    >
      <div className="wrap split">
        <Reveal>
          <BeforeAfter
            leftImg="/rugs/story-ancient.jpg"
            rightImg="/rugs/story-modern.jpg"
            leftLabel="Ancient"
            rightLabel="Modern"
            alt="Daroots rug craft"
          />
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
              A carpet is not a fast covering. It is a narrative, woven by hand, tied by hands
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
        </div>
      </div>
    </Section>
  )
}
