import { useRef } from 'react'

/* Pointer-driven 3D tilt for cards. Disabled feel on touch is fine, 
   it simply never fires without a hovering pointer. */
export default function Tilt({ className = '', max = 9, children }) {
  const ref = useRef(null)

  const onMove = (e) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width - 0.5
    const py = (e.clientY - r.top) / r.height - 0.5
    el.style.transform = `perspective(820px) rotateY(${px * max}deg) rotateX(${-py * max}deg) translateY(-4px)`
  }
  const reset = () => {
    if (ref.current) ref.current.style.transform = ''
  }

  return (
    <div ref={ref} className={`tilt ${className}`} onMouseMove={onMove} onMouseLeave={reset}>
      {children}
    </div>
  )
}
