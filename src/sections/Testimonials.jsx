import Section from '../components/Section'
import Reveal from '../components/Reveal'

export default function Testimonials() {
  return (
    <Section
      id="clients"
      className="pad"
      photo="/rugs/ardabil.jpg"
      pos="center 40%"
      scrim="radial-gradient(75% 90% at 50% 45%, rgba(12,5,4,0.6), rgba(12,5,4,0.82))"
    >
      <div className="wrap">
        <Reveal className="quote">
          <div className="stars">★★★★★</div>
          <blockquote>
            "Their Isfahan medallion elevated our penthouse project beyond anything we imagined.
            The craftsmanship is extraordinary — clients ask about the rug before they ask about
            the view."
          </blockquote>
          <div className="who">Isabelle Fournier · Principal, Atelier LV Interiors</div>
        </Reveal>
      </div>
    </Section>
  )
}
