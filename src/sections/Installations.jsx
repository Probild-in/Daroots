import Section from '../components/Section'
import Reveal from '../components/Reveal'
import { rugImg } from '../lib/patterns'

const CELLS = [
  ['m-a', 'kashan'],
  ['m-b', 'ardabil'],
  ['m-c', 'heriz'],
  ['m-d', 'bijar'],
  ['m-e', 'qom'],
  ['m-f', 'bidjar'],
]

export default function Installations() {
  return (
    <Section
      id="installations"
      className="pad"
      photo="/rugs/isfahan.jpg"
      scrim="linear-gradient(180deg, rgba(12,5,4,0.5), rgba(12,5,4,0.68))"
    >
      <div className="wrap">
        <div className="section-head">
          <Reveal><span className="eyebrow">From private villas to grand hotel lobbies</span></Reveal>
          <Reveal delay={80}><h2 className="display mt-s">Installations Worldwide</h2></Reveal>
        </div>

        <div className="masonry">
          {CELLS.map(([cls, img], i) => (
            <Reveal key={cls} className={`cell ${cls}`} delay={i * 60}>
              <div className="tile__rug" style={{ '--rug': rugImg(img) }} />
              <div className="tile__glow" />
              <span className="repl">Replace with install photo</span>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
