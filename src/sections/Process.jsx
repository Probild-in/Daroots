import Section from '../components/Section'
import Reveal from '../components/Reveal'

const STEPS = [
  ['Design', 'A cartoon is drawn to scale — every knot mapped before wool ever touches the loom.'],
  ['Material selection', 'Fleece is sorted, hand-spun, and dyed in small batches for depth of colour.'],
  ['Hand weaving', 'Artisans tie each knot by hand across months, reading the design row by row.'],
  ['Finishing', 'The pile is clipped, carved, and evened to reveal the pattern in relief.'],
  ['Quality inspection', 'Each rug is graded against a fixed standard for knots, colour, and shape.'],
  ['Global delivery', 'Washed, rolled, insured, and shipped with full export documentation.'],
]

export default function Process() {
  return (
    <Section
      id="process"
      className="pad"
      photo="/rugs/heriz.jpg"
      scrim="linear-gradient(180deg, rgba(12,5,4,0.6), rgba(12,5,4,0.76))"
    >
      <div className="wrap">
        <div className="section-head">
          <Reveal><span className="eyebrow">From fleece to your floor</span></Reveal>
          <Reveal delay={80}><h2 className="display mt-s">The Craftsmanship <em>Process</em></h2></Reveal>
        </div>

        <div className="steps">
          {STEPS.map(([title, body], i) => (
            <Reveal key={title} className="step" delay={(i % 3) * 70}>
              <span className="step__n">{String(i + 1).padStart(2, '0')}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
