import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/* Adds depth/3D on scroll on top of the unroll reveal:
   - carpet backgrounds sit on a deeper plane and parallax (scaled so no gaps)
   - each section's content tilts up in 3D as it rises in, then settles flat
   - product / gallery tiles drift at layered speeds for parallax depth
   - the hero carpet zooms and drifts as you leave it
   All disabled under prefers-reduced-motion. */
export function initScroll3D() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return () => {}

  const ctx = gsap.context(() => {
    // 1) Background carpets on a deeper plane (parallax the image inside the clip,
    //    so the reveal edge stays locked to the roll)
    gsap.utils.toArray('.section__carpet-img').forEach((img) => {
      const section = img.closest('.section')
      gsap.set(img, { scale: 1.22, transformOrigin: 'center center' })
      gsap.fromTo(
        img,
        { yPercent: -9 },
        {
          yPercent: 9,
          ease: 'none',
          scrollTrigger: { trigger: section, start: 'top bottom', end: 'bottom top', scrub: true },
        },
      )
    })

    // 2) Content tilts up in 3D as the section rises in, then settles flat
    gsap.utils.toArray('.section__content').forEach((content) => {
      const section = content.closest('.section')
      const isHero = section?.classList.contains('hero')
      if (isHero) return // hero has its own treatment below
      gsap.fromTo(
        content,
        { rotateX: 9, transformPerspective: 1300, transformOrigin: 'center 80%' },
        {
          rotateX: 0,
          ease: 'none',
          scrollTrigger: { trigger: section, start: 'top bottom', end: 'top 42%', scrub: 0.6 },
        },
      )
    })

    // 3) Layered parallax on tiles / gallery cells
    gsap.utils.toArray('.grid-products .tile, .masonry .cell, .collections .tile').forEach((el, i) => {
      const depth = 5 + (i % 3) * 5 // 5, 10, 15
      gsap.fromTo(
        el,
        { yPercent: -depth },
        {
          yPercent: depth,
          ease: 'none',
          scrollTrigger: {
            trigger: el.closest('.section'),
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        },
      )
    })

    // 4) Hero: carpet zooms + content drifts up as you scroll away
    const hero = document.querySelector('.hero')
    if (hero) {
      gsap.to(hero.querySelector('.section__carpet-img'), {
        scale: 1.5,
        ease: 'none',
        scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true },
      })
      gsap.to(hero.querySelector('.section__content'), {
        yPercent: -14,
        opacity: 0.35,
        ease: 'none',
        scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true },
      })
    }

    ScrollTrigger.refresh()
  })

  return () => ctx.revert()
}
