import Section from '../components/Section'
import Reveal from '../components/Reveal'

const FEATURES = [
  ['Hand-knotted craft', 'Every rug is tied knot by knot: no machines, no shortcuts. The irregular beauty is the signature.'],
  ['Natural materials', 'Highland wool, mulberry silk, and cotton, coloured with vegetable and mineral dyes.'],
  ['Worldwide shipping', 'Insured shipping worldwide. We have exported to 40+ countries, with customs handled end to end.'],
  ['Export quality', 'Each piece is graded, washed, and inspected against a fixed standard before it leaves.'],
  ['Create your design', 'Your size, palette, and motif, approved before a single knot is tied.'],
  ['Trade programme', 'Dedicated pricing and lead times for designers, architects, and hospitality buyers.'],
]

export default function WhyChoose() {
  return (
    <Section
      id="why"
      className="pad"
      photo="/rugs/hl.jpg"
      scrim="linear-gradient(180deg, rgba(12,5,4,0.8), rgba(12,5,4,0.94))"
    >
      <div className="wrap">
        <div className="section-head center">
          <Reveal><span className="eyebrow">Why buyers choose us</span></Reveal>
          <Reveal delay={80}><h2 className="display">Why Choose <em>Daroots</em></h2></Reveal>
        </div>

        <div className="features features--3">
          {FEATURES.map(([title, body], i) => (
            <Reveal key={title} className="feature" delay={(i % 3) * 70}>
              <span className="feature__n">{String(i + 1).padStart(2, '0')}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
