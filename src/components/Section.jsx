import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { pattern } from '../lib/patterns'

/* A full section whose carpet "unrolls" as the roll travels down it.
   --reveal (0 -> 1) is driven by scroll (or on load for the hero) and
   feeds both the clip-path of the rug and the position of the roll. */
export default function Section({
  id,
  motif = 'medallion',
  pal = 'oxblood',
  scale = 340,
  photo, // path to a real carpet image; overrides the generated motif
  pos = 'center',
  ground,
  scrim,
  revealOnLoad = false,
  showRoll = true,
  className = '',
  children,
}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      el.style.setProperty('--reveal', 1)
      return
    }
    el.style.setProperty('--reveal', 0)

    let tween
    if (revealOnLoad) {
      tween = gsap.to(el, { '--reveal': 1, duration: 1.7, ease: 'power3.out', delay: 0.25 })
    } else {
      tween = gsap.fromTo(
        el,
        { '--reveal': 0 },
        {
          '--reveal': 1,
          ease: 'none',
          scrollTrigger: { trigger: el, start: 'top 82%', end: 'top 26%', scrub: 0.5 },
        },
      )
    }
    return () => {
      if (tween?.scrollTrigger) tween.scrollTrigger.kill()
      tween?.kill()
    }
  }, [revealOnLoad])

  const style = photo
    ? {
        '--carpet-pattern': `url("${photo}")`,
        '--carpet-scale': 'cover',
        '--carpet-repeat': 'no-repeat',
        '--carpet-pos': pos,
      }
    : {
        '--carpet-pattern': pattern(motif, pal),
        '--carpet-scale': `${scale}px`,
      }
  if (ground) style['--carpet-ground'] = ground
  if (scrim) style['--carpet-scrim'] = scrim

  return (
    <section id={id} ref={ref} className={`section ${className}`} style={style}>
      <div className="section__carpet">
        <div className="section__carpet-inner" />
      </div>
      <div className="section__scrim" />
      {showRoll && (
        <div className="section__roll" aria-hidden="true">
          <div className="roll-tube">
            <span className="roll-cap" />
          </div>
        </div>
      )}
      <div className="section__content">{children}</div>
    </section>
  )
}
