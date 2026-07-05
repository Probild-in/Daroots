import SmoothScroll from './components/SmoothScroll'
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
