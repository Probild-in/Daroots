import { useEffect } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/* Inertial smooth scroll (Lenis) wired into GSAP's ticker so
   ScrollTrigger-driven carpet unrolls stay perfectly in sync. */
export default function SmoothScroll() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return

    const lenis = new Lenis({ lerp: 0.09, smoothWheel: true, wheelMultiplier: 1 })
    lenis.on('scroll', ScrollTrigger.update)

    const raf = (time) => lenis.raf(time * 1000)
    gsap.ticker.add(raf)
    gsap.ticker.lagSmoothing(0)

    // refresh once fonts/layout settle
    const t = setTimeout(() => ScrollTrigger.refresh(), 400)

    return () => {
      clearTimeout(t)
      gsap.ticker.remove(raf)
      lenis.destroy()
    }
  }, [])

  return null
}
