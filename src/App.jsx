import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SmoothScroll from './components/SmoothScroll'
import { initScroll3D } from './lib/scroll3d'
import Nav from './components/Nav'
import Footer from './sections/Footer'
import Home from './pages/Home'
import CategoryPage from './pages/CategoryPage'

/* Resets scroll and re-wires the scroll-driven 3D effects on every route change. */
function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (!hash) {
      if (window.__lenis) window.__lenis.scrollTo(0, { immediate: true })
      else window.scrollTo(0, 0)
    }
    let cleanup
    const t = setTimeout(() => {
      cleanup = initScroll3D()
      ScrollTrigger.refresh()
      if (hash) {
        const el = document.querySelector(hash)
        if (el) {
          if (window.__lenis) window.__lenis.scrollTo(el, { offset: -80 })
          else el.scrollIntoView()
        }
      }
    }, 360)
    return () => {
      clearTimeout(t)
      cleanup?.()
    }
  }, [pathname, hash])
  return null
}

export default function App() {
  return (
    <>
      <SmoothScroll />
      <ScrollManager />
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collections/:slug" element={<CategoryPage />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
