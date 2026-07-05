import Section from '../components/Section'

export default function Hero() {
  return (
    <>
      <Section
        id="top"
        className="hero"
        photo="/rugs/hero-persian.jpg"
        pos="center"
        revealOnLoad
        scrim="linear-gradient(180deg, rgba(12,5,4,0.34) 0%, rgba(12,5,4,0.36) 42%, rgba(12,5,4,0.88) 100%)"
      >
        <div className="wrap hero__inner">
          <span className="eyebrow reveal is-in">Handwoven since 1948 · Exported to 40+ countries</span>
          <h1 className="display mt-s">
            Handcrafted Rugs <em>for</em> Timeless Spaces
          </h1>
          <p className="lede mt-m">
            Daroots weaves heritage carpets by hand and ships them to homes, hotels, and
            galleries worldwide — each knot tied by artisans, each piece a room's quiet centrepiece.
          </p>
          <div className="row-cta">
            <a className="btn" href="#collections">
              Explore Collections <span className="btn__arrow">→</span>
            </a>
            <a className="btn btn--ghost" href="#contact">
              Request a Catalogue
            </a>
          </div>
        </div>
        <div className="hero__scroll" aria-hidden="true">
          Scroll to unroll <span />
        </div>
      </Section>

      <div className="statbar">
        {[
          ['75', 'Years of craft'],
          ['40+', 'Export markets'],
          ['1.2M', 'Knots per rug'],
          ['100%', 'Hand-knotted'],
        ].map(([n, l]) => (
          <div className="statbar__item" key={l}>
            <div className="statbar__n">{n}</div>
            <div className="statbar__l">{l}</div>
          </div>
        ))}
      </div>
    </>
  )
}
