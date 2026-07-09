import Section from '../components/Section'
import Reveal from '../components/Reveal'

export default function YourDesign() {
  return (
    <Section
      id="your-design"
      className="pad band"
      photo="/rugs/drama.jpg"
      pos="center 30%"
      scrim="linear-gradient(110deg, rgba(12,5,4,0.78) 34%, rgba(12,5,4,0.4))"
    >
      <div className="wrap split">
        <div>
          <Reveal><span className="eyebrow">Create your design</span></Reveal>
          <Reveal delay={80}>
            <h2 className="display mt-s">
              Your Design. <br /><em>Our Craft.</em>
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="lede mt-s">
              Some ideas deserve more than a shelf pick. Hand us a mood, an heirloom, or an
              architect's drawing, and we translate it into a rug woven only once, for you.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <a className="btn mt-m" href="#contact">Let's create your design <span className="btn__arrow">→</span></a>
          </Reveal>
        </div>

        <Reveal delay={140}>
          <ul className="checks">
            {[
              ['Consult', 'We map palette, size, and setting with your team.'],
              ['Sample', 'A woven swatch confirms colour and density before scale-up.'],
              ['Weave', 'Master artisans knot your piece over months, not minutes.'],
              ['Finish', 'Hand-washed, sun-dried, and clipped to bring the pile to life.'],
              ['Deliver', 'Insured door-to-door shipping with full export papers.'],
            ].map(([b, t]) => (
              <li key={b}>
                <b>{b}</b>
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  )
}
