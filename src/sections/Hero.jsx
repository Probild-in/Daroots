import Section from '../components/Section'

export default function Hero() {
  return (
    <>
      <Section
        id="top"
        className="hero"
        photo="/rugs/hero.jpg"
        pos="center"
        revealOnLoad
        scrim="linear-gradient(180deg, rgba(12,5,4,0.34) 0%, rgba(12,5,4,0.36) 42%, rgba(12,5,4,0.88) 100%)"
      >
        <div className="wrap hero__inner">
          <span className="eyebrow reveal is-in">Handwoven in the Bhadohi-Mirzapur belt · Exported to 40+ countries</span>
          <h1 className="display mt-s">
            A Legacy You Can <em>Walk On</em>
          </h1>
          <p className="lede mt-m">
            Daroots weaves hand-tufted, hand-knotted, flat-weave, and handloom rugs the slow way, 
            knot by knot, in wool and silk, and delivers them to homes, hotels, and galleries the
            world over. Rooted in craft. Made to outlast trends.
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
          ['75+', 'Years of craft'],
          ['40+', 'Export markets'],
          ['4', 'Weave traditions'],
          ['100%', 'Handmade'],
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
