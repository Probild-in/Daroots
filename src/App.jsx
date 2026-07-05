import { useEffect } from 'react'
import SmoothScroll from './components/SmoothScroll'
import { initScroll3D } from './lib/scroll3d'
import Nav from './components/Nav'
import Hero from './sections/Hero'
import CraftStory from './sections/CraftStory'
import Collections from './sections/Collections'
import Products from './sections/Products'
import Installations from './sections/Installations'
import WhyChoose from './sections/WhyChoose'
import YourDesign from './sections/YourDesign'
import Materials from './sections/Materials'
import Process from './sections/Process'
import Testimonials from './sections/Testimonials'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

export default function App() {
  useEffect(() => {
    // let sections mount + fonts settle, then wire depth/parallax
    const t = setTimeout(() => {
      window.__scroll3dCleanup = initScroll3D()
    }, 300)
    return () => {
      clearTimeout(t)
      window.__scroll3dCleanup?.()
    }
  }, [])

  return (
    <>
      <SmoothScroll />
      <Nav />
      <main>
        <Hero />
        <CraftStory />
        <Collections />
        <Products />
        <Installations />
        <WhyChoose />
        <YourDesign />
        <Materials />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
