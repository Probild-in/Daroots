import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Section from '../components/Section'
import Reveal from '../components/Reveal'
import Tilt from '../components/Tilt'
import Contact from '../sections/Contact'
import { CATEGORIES, CATEGORY_LIST } from '../lib/categories'

export default function CategoryPage() {
  const { slug } = useParams()
  const cat = CATEGORIES[slug]

  if (!cat) {
    return (
      <section className="section no-roll pad" style={{ background: 'var(--oxblood-900)' }}>
        <div className="wrap" style={{ textAlign: 'center' }}>
          <h1 className="display">Collection not found</h1>
          <Link className="btn mt-m" to="/">Back home →</Link>
        </div>
      </section>
    )
  }

  const canonical = `https://daroots.com/collections/${cat.slug}`
  const others = CATEGORY_LIST.filter((s) => s !== slug).map((s) => CATEGORIES[s]).slice(0, 3)

  const jsonld = [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://daroots.com/' },
        { '@type': 'ListItem', position: 2, name: 'Collections', item: 'https://daroots.com/#collections' },
        { '@type': 'ListItem', position: 3, name: cat.name, item: canonical },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: cat.weave,
      description: cat.seoDescription,
      brand: { '@type': 'Brand', name: 'Daroots' },
      category: cat.name,
      image: `https://daroots.com${cat.heroImg}`,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: cat.faqs.map(([q, a]) => ({
        '@type': 'Question',
        name: q,
        acceptedAnswer: { '@type': 'Answer', text: a },
      })),
    },
  ]

  return (
    <>
      <Helmet>
        <title>{cat.seoTitle}</title>
        <meta name="description" content={cat.seoDescription} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={cat.seoTitle} />
        <meta property="og:description" content={cat.seoDescription} />
        <meta property="og:type" content="product.group" />
        <meta property="og:image" content={`https://daroots.com${cat.heroImg}`} />
        <script type="application/ld+json">{JSON.stringify(jsonld)}</script>
      </Helmet>

      {/* Hero */}
      <Section
        id="cat-hero"
        className="hero"
        photo={cat.heroImg}
        pos="center"
        revealOnLoad
        scrim="linear-gradient(180deg, rgba(12,5,4,0.34) 0%, rgba(12,5,4,0.4) 45%, rgba(12,5,4,0.74) 100%)"
      >
        <div className="wrap hero__inner">
          <nav className="crumb reveal is-in" aria-label="Breadcrumb">
            <Link to="/">Home</Link> <span>/</span> <Link to="/#collections">Collections</Link>{' '}
            <span>/</span> <b>{cat.name}</b>
          </nav>
          <span className="eyebrow reveal is-in" style={{ marginTop: 14 }}>{cat.kicker}</span>
          <h1 className="display mt-s">{cat.headline}</h1>
          <p className="lede mt-m">{cat.lede}</p>
          <div className="row-cta">
            <a className="btn" href="#cat-products">See designs <span className="btn__arrow">→</span></a>
            <a className="btn btn--ghost" href="#contact">Request a quote</a>
          </div>
        </div>
      </Section>

      {/* Intro + specs */}
      <Section id="cat-intro" className="pad" photo="/rugs/neutral.jpg"
        scrim="linear-gradient(180deg, rgba(12,5,4,0.8), rgba(12,5,4,0.92))">
        <div className="wrap split">
          <div className="head">
            <Reveal><span className="eyebrow">About the weave</span></Reveal>
            <Reveal delay={80}><h2 className="display mt-s">What makes {cat.name} special</h2></Reveal>
            {cat.intro.map((p, i) => (
              <Reveal key={i} delay={140 + i * 60}>
                <p className={i === 0 ? 'lede mt-s' : 'muted mt-s'} style={{ maxWidth: '52ch' }}>{p}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120}>
            <div className="spec-card">
              <h3 className="display">At a glance</h3>
              <dl className="specs">
                {cat.specs.map(([k, v]) => (
                  <div className="specs__row" key={k}>
                    <dt>{k}</dt><dd>{v}</dd>
                  </div>
                ))}
              </dl>
              <a className="btn btn--emerald mt-s" href="#contact" style={{ alignSelf: 'flex-start' }}>
                Enquire <span className="btn__arrow">→</span>
              </a>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Room scene lifestyle mockup */}
      <Section id="cat-room" className="pad" photo="/rugs/hk.jpg"
        scrim="linear-gradient(180deg, rgba(10,4,3,0.88), rgba(10,4,3,0.95))">
        <div className="wrap">
          <div className="section-head center">
            <Reveal><span className="eyebrow">In your space</span></Reveal>
            <Reveal delay={80}><h2 className="display">Made to live with</h2></Reveal>
          </div>
          <Reveal>
            <div className="room-photo">
              <img src={cat.roomImg} alt={`${cat.name} rug styled in a room`} loading="lazy" />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <p className="muted" style={{ textAlign: 'center', maxWidth: '54ch', marginInline: 'auto', marginTop: 26 }}>
              Every {cat.name.toLowerCase()} rug is made to order in your size and palette. Share your
              design or ask for a staged room render to see it in your space.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* Products */}
      <Section id="cat-products" className="pad" photo="/rugs/hk.jpg"
        scrim="linear-gradient(180deg, rgba(12,5,4,0.82), rgba(12,5,4,0.95))">
        <div className="wrap">
          <div className="section-head">
            <Reveal><span className="eyebrow">The {cat.name} range</span></Reveal>
            <Reveal delay={80}><h2 className="display mt-s">{cat.name} Designs</h2></Reveal>
          </div>
          <div className="grid-products">
            {cat.products.map(([name, spec, img], i) => (
              <Reveal key={name} delay={(i % 4) * 60}>
                <Tilt>
                  <div className="tile">
                    <div className="tile__rug" style={{ backgroundImage: `url("${img}")` }} />
                    <div className="tile__glow" />
                    <div className="tile__meta"><div className="t">{name}</div><div className="s">{spec}</div></div>
                  </div>
                </Tilt>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Highlights */}
      <Section id="cat-why" className="pad" photo={cat.heroImg}
        scrim="linear-gradient(180deg, rgba(12,5,4,0.82), rgba(12,5,4,0.94))">
        <div className="wrap">
          <div className="section-head center">
            <Reveal><span className="eyebrow">Why {cat.name}</span></Reveal>
            <Reveal delay={80}><h2 className="display">Built for the way you live</h2></Reveal>
          </div>
          <div className="features">
            {cat.highlights.map(([t, b], i) => (
              <Reveal key={t} className="feature" delay={(i % 2) * 60}>
                <span className="feature__n">{String(i + 1).padStart(2, '0')}</span>
                <h3>{t}</h3>
                <p>{b}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section id="cat-faq" className="pad" photo="/rugs/neutral.jpg"
        scrim="linear-gradient(180deg, rgba(12,5,4,0.86), rgba(12,5,4,0.95))">
        <div className="wrap faq-wrap">
          <div className="section-head center">
            <Reveal><span className="eyebrow">Good to know</span></Reveal>
            <Reveal delay={80}><h2 className="display">{cat.name}, FAQs</h2></Reveal>
          </div>
          <div className="faq">
            {cat.faqs.map(([q, a], i) => (
              <Reveal key={q} className="faq__item" delay={i * 50}>
                <h3>{q}</h3>
                <p>{a}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Explore other collections */}
      <Section id="cat-others" className="pad-sm" photo="/rugs/hk.jpg"
        scrim="linear-gradient(180deg, rgba(12,5,4,0.8), rgba(12,5,4,0.9))">
        <div className="wrap">
          <div className="section-head center">
            <Reveal><span className="eyebrow">Keep exploring</span></Reveal>
            <Reveal delay={80}><h2 className="display">Other collections</h2></Reveal>
          </div>
          <div className="cat-grid cat-grid--3">
            {others.map((o, i) => (
              <Reveal key={o.slug} delay={(i % 3) * 70}>
                <Link className="cat-card" to={`/collections/${o.slug}`}>
                  <div className="cat-card__img" style={{ backgroundImage: `url("${o.cardImg}")` }} />
                  <div className="cat-card__glow" />
                  <div className="cat-card__body">
                    <span className="cat-card__tag">{o.tag}</span>
                    <h3 className="display">{o.name}</h3>
                    <span className="cat-card__cta">View collection →</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Contact />
    </>
  )
}
