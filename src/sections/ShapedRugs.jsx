import Section from '../components/Section'
import Reveal from '../components/Reveal'

const SHAPES = [
  ['cloud', 'Nimbus', 'Organic die-cut', 'sp-1', 3],
  ['panther', 'Panther', 'Sculpted silhouette', 'sp-2', 8],
  ['rose', 'Bloom', 'Layered petals', 'sp-3', 4],
  ['sneaker', 'AJ-1', 'Novelty cut-out', 'sp-4', 9],
  ['fan', 'Tide', 'Half-round', 'sp-5', 5],
]

export default function ShapedRugs() {
  return (
    <Section
      id="shaped"
      className="pad"
      photo="/rugs/hk.jpg"
      scrim="linear-gradient(180deg, rgba(10,4,3,0.86), rgba(10,4,3,0.92))"
    >
      <div className="wrap">
        <div className="section-head center">
          <Reveal><span className="eyebrow">Not just rectangles</span></Reveal>
          <Reveal delay={80}><h2 className="display">Beyond the <em>Rectangle</em></h2></Reveal>
          <Reveal delay={140}>
            <p className="lede" style={{ textAlign: 'center', marginInline: 'auto' }}>
              Hand-tufting lets us cut a rug to any silhouette: clouds, creatures, blooms,
              or your own outline. Statement pieces that anchor a room.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="shapes-stage">
        {SHAPES.map(([img, name, tag, cls, speed]) => (
            <figure key={img} className={`shape ${cls}`} data-speed={speed}>
              <img className="shape__img" src={`/rugs/shapes/${img}.webp`} alt={`${name}, shaped rug`} loading="lazy" />
              <figcaption>
                <span className="shape__name">{name}</span>
                <span className="shape__tag">{tag}</span>
              </figcaption>
            </figure>
          ))}
      </div>
    </Section>
  )
}
