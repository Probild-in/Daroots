import { Link } from 'react-router-dom'

const COLS = [
  ['Collections', [['Hand Tufted', '/collections/hand-tufted'], ['Hand Knotted', '/collections/hand-knotted'], ['Flat Weaves', '/collections/flat-weaves'], ['Handloom', '/collections/handloom'], ['Coco & Coir', '/collections/coco-coir']]],
  ['Company', [['Our story', '/#craft'], ['Installations', '/#installations'], ['Why Daroots', '/#why'], ['Contact', '#contact']]],
  ['Trade', [['Custom rugs', '/#your-design'], ['Wholesale', '#contact'], ['Catalogue', '#contact'], ['Shipping', '#contact']]],
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__top">
        <div className="footer__logo">
          <img src="/logos/daroots-full-cream.svg" alt="Daroots" />
        </div>
        {COLS.map(([title, links]) => (
          <div key={title}>
            <h4>{title}</h4>
            <ul>
              {links.map(([label, href]) => (
                <li key={label}>
                  {href.startsWith('/') ? <Link to={href}>{label}</Link> : <a href={href}>{label}</a>}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="wrap footer__bar">
        <span>© {new Date().getFullYear()} Daroots Carpets. All rights reserved.</span>
        <span>Handwoven in India · Shipped worldwide</span>
      </div>
      <div className="wrap footer__credits">
        Fibre photos via Wikimedia Commons: bamboo (snapsbycw), cotton (Michael Bass-Deschênes),
        jute (Biswarup Ganguly), mohair (AnnaKika) CC BY 2.0/3.0; coir (TheOilLamp) CC BY-SA 4.0.
      </div>
    </footer>
  )
}
