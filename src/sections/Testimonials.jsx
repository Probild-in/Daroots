import { useEffect, useState } from 'react'
import Section from '../components/Section'
import Reveal from '../components/Reveal'

const TESTIMONIALS = [
  {
    title: 'Flawless Execution and Premium Curation',
    quote:
      'When handling large-scale international rollouts, you need a partner who can command the supply chain without compromising on design integrity. Daroots manages to bridge the gap between regional artistry and global enterprise standards seamlessly. We received exactly what we envisioned, right on schedule, without having to navigate the usual sourcing friction.',
    who: 'Olivia',
    loc: 'New York, USA',
  },
  {
    title: 'An Indispensable Asset to Our Supply Chain',
    quote:
      'Daroots operates with a level of precision that is rare in this industry. Their ability to deliver premium textile collections across the seven seas while maintaining impeccable quality control makes them an elite partner. Whether they are coordinating directly at the source or leveraging an exclusive network, the result is always the same: absolute perfection.',
    who: 'Al-Mansoori',
    loc: 'Doha, Qatar',
  },
]

export default function Testimonials() {
  const [i, setI] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % TESTIMONIALS.length), 7000)
    return () => clearInterval(id)
  }, [])

  const t = TESTIMONIALS[i]

  return (
    <Section
      id="clients"
      className="pad"
      photo="/rugs/medallion.jpg"
      pos="center 40%"
      scrim="radial-gradient(75% 90% at 50% 45%, rgba(12,5,4,0.82), rgba(12,5,4,0.95))"
    >
      <div className="wrap">
        <Reveal className="quote quote--wide">
          <div className="stars">★★★★★</div>
          <div className="quote__fade" key={i}>
            <h3 className="quote__title">{t.title}</h3>
            <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
            <div className="who">{t.who} · {t.loc}</div>
          </div>
          <div className="quote__dots">
            {TESTIMONIALS.map((_, n) => (
              <button
                key={n}
                className={n === i ? 'is-active' : ''}
                onClick={() => setI(n)}
                aria-label={`Show testimonial ${n + 1}`}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
