import Section from '../components/Section'
import Reveal from '../components/Reveal'

const INSTALLS = [
  ['inst-canada.jpg', 'Canada'],
  ['inst-us.jpg', 'United States'],
  ['inst-saudi.jpg', 'Saudi Arabia'],
  ['inst-newzealand.jpg', 'New Zealand'],
]

export default function Installations() {
  return (
    <Section
      id="installations"
      className="pad"
      photo="/rugs/fw.jpg"
      scrim="linear-gradient(180deg, rgba(12,5,4,0.8), rgba(12,5,4,0.94))"
    >
      <div className="wrap">
        <div className="section-head">
          <Reveal><span className="eyebrow">From private villas to grand hotel lobbies</span></Reveal>
          <Reveal delay={80}><h2 className="display mt-s">Installations Worldwide</h2></Reveal>
        </div>

        <div className="installs">
          {INSTALLS.map(([img, country], i) => (
            <Reveal key={country} className="install" delay={i * 70}>
              <img
                className="install__img"
                src={`/rugs/${img}`}
                alt={`Daroots rug installation in ${country}`}
                loading="lazy"
              />
              <span className="install__country">
                <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
                  <path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" fill="currentColor" />
                </svg>
                {country}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
