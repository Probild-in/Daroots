import { Helmet } from 'react-helmet-async'
import Hero from '../sections/Hero'
import CraftStory from '../sections/CraftStory'
import Collections from '../sections/Collections'
import Products from '../sections/Products'
import ShapedRugs from '../sections/ShapedRugs'
import Installations from '../sections/Installations'
import WhyChoose from '../sections/WhyChoose'
import YourDesign from '../sections/YourDesign'
import Materials from '../sections/Materials'
import Process from '../sections/Process'
import Testimonials from '../sections/Testimonials'
import Contact from '../sections/Contact'

const ORG_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Daroots',
  description:
    'Daroots weaves hand-tufted, hand-knotted, flat-weave, and handloom rugs and exports them worldwide.',
  url: 'https://daroots.com/',
  logo: 'https://daroots.com/logos/daroots-icon.svg',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bhadohi',
    addressRegion: 'Uttar Pradesh',
    addressCountry: 'IN',
  },
  makesOffer: ['Hand Tufted Rugs', 'Hand Knotted Rugs', 'Flat Weave Rugs', 'Handloom Rugs'].map(
    (n) => ({ '@type': 'Offer', itemOffered: { '@type': 'Product', name: n } }),
  ),
}

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Daroots, Handcrafted Rugs for Timeless Spaces</title>
        <meta
          name="description"
          content="Daroots weaves hand-tufted, hand-knotted, flat-weave, and handloom rugs by hand and exports them worldwide. Heritage carpets and bespoke custom designs for homes, hotels, and galleries."
        />
        <link rel="canonical" href="https://daroots.com/" />
        <meta property="og:title" content="Daroots, Handcrafted Rugs for Timeless Spaces" />
        <meta
          property="og:description"
          content="Hand-tufted, hand-knotted, flat-weave, and handloom rugs, woven by hand and exported worldwide."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://daroots.com/rugs/hero.jpg" />
        <script type="application/ld+json">{JSON.stringify(ORG_JSONLD)}</script>
      </Helmet>

      <Hero />
      <CraftStory />
      <Collections />
      <Products />
      <ShapedRugs />
      <Installations />
      <WhyChoose />
      <YourDesign />
      <Materials />
      <Process />
      <Testimonials />
      <Contact />
    </>
  )
}
