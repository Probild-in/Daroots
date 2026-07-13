/* ============================================================
   Carpet motif generator
   Each motif is a seamless, tileable SVG rendered in the brand
   palette. Used two ways:
     - carpetBg(motif, palette)  -> section background field
     - rug(motif, palette)       -> richer tile for product/gallery
   Swap these for real product photography later (see README).
   ============================================================ */

const enc = (svg) => `url("data:image/svg+xml,${encodeURIComponent(svg)}")`

/* Real Daroots product photography in /public/rugs, grouped by weave.
   Swap any path for another product photo, the filenames are all the
   sections reference. */
export const RUGS = {
  // section backgrounds
  hero: '/rugs/hero.jpg',
  ht: '/rugs/ht.jpg',
  hk: '/rugs/hk.jpg',
  fw: '/rugs/fw.jpg',
  hl: '/rugs/hl.jpg',
  drama: '/rugs/drama.jpg',
  neutral: '/rugs/neutral.jpg',
  medallion: '/rugs/medallion.jpg',
  // named products / tiles
  warmth: '/rugs/p-warmth.jpg',
  spiral: '/rugs/p-spiral.jpg',
  planets: '/rugs/p-planets.jpg',
  marbles: '/rugs/p-marbles.jpg',
  lion: '/rugs/p-lion.jpg',
  kazak: '/rugs/p-kazak.jpg',
  kazak909: '/rugs/p-kazak909.jpg',
  stripes: '/rugs/p-stripes.jpg',
  ikat: '/rugs/p-ikat.jpg',
  madhubani: '/rugs/p-madhubani.jpg',
  kemet: '/rugs/p-kemet.jpg',
  moroccan: '/rugs/p-moroccan.jpg',
  aspen: '/rugs/p-aspen.jpg',
  aspen6: '/rugs/p-aspen6.jpg',
  teal: '/rugs/p-teal.jpg',
  colorblock: '/rugs/p-colorblock.jpg',
}
export const rugImg = (n) => `url("${RUGS[n] || n}")`

/* The four Daroots weaves, used by the Collections section. */
export const CATEGORIES = [
  {
    key: 'hand-tufted',
    name: 'Hand Tufted',
    tag: 'Artistry underfoot',
    img: '/rugs/ht.jpg',
    desc: 'Bold, painterly designs punched by hand, colour and pattern with no limits.',
  },
  {
    key: 'hand-knotted',
    name: 'Hand Knotted',
    tag: 'The heirloom weave',
    img: '/rugs/medallion.jpg',
    desc: 'Knot by knot on the loom, over months, the most enduring rug we make.',
  },
  {
    key: 'flat-weaves',
    name: 'Flat Weaves',
    tag: 'Reversible & light',
    img: '/rugs/fw.jpg',
    desc: 'Kilims, dhurries, and kazaks, flat, reversible, and rich with geometry.',
  },
  {
    key: 'handloom',
    name: 'Handloom',
    tag: 'Modern texture',
    img: '/rugs/hl.jpg',
    desc: 'Loom-woven contemporary pieces, quiet melange colour and tactile pile.',
  },
  {
    key: 'coco-coir',
    name: 'Coco & Coir',
    tag: 'Natural & hard-wearing',
    img: '/rugs/coco-cats.jpg',
    desc: 'Rugged coconut-fibre doormats and rugs, printed or natural and built to last.',
  },
]

// Bright, vivid Persian-carpet palettes (ground g, primary a, secondary b, accent c)
export const PAL = {
  oxblood:  { g: '#a3162c', a: '#f2c85b', b: '#f3e9dc', c: '#0f8f78', d: '#1c3a8a' }, // bright crimson field
  ember:    { g: '#d1622a', a: '#ffd873', b: '#8a1220', c: '#f3e9dc', d: '#0f8f78' }, // terracotta
  emerald:  { g: '#0f9078', a: '#ffd873', b: '#c9203a', c: '#f3e9dc', d: '#1c3a8a' }, // bright teal
  indigo:   { g: '#274bbf', a: '#f2c85b', b: '#f3e9dc', c: '#e23b4e', d: '#0f8f78' }, // royal blue
  rust:     { g: '#c2551f', a: '#ffe1a0', b: '#7a1020', c: '#f3e9dc', d: '#12715f' },
  sand:     { g: '#f0b64a', a: '#8a1220', b: '#0f7b6c', c: '#3a0a10', d: '#c94f2a' }, // bright gold
  night:    { g: '#1e3a8a', a: '#f2c85b', b: '#e23b4e', c: '#f3e9dc', d: '#0f8f78' }, // sapphire
}

/* ---- individual seamless tiles (0..S coordinate space) ---- */

function medallion({ g, a, b, c, d }) {
  const S = 200
  return `<svg xmlns='http://www.w3.org/2000/svg' width='${S}' height='${S}' viewBox='0 0 ${S} ${S}'>
   <rect width='${S}' height='${S}' fill='${g}'/>
   <path d='M100 20 L180 100 L100 180 L20 100 Z' fill='${d || b}' opacity='0.4'/>
   <g fill='none' stroke='${a}' stroke-width='3' opacity='0.95'>
     <path d='M100 12 L188 100 L100 188 L12 100 Z'/>
     <path d='M100 42 L158 100 L100 158 L42 100 Z'/>
     <path d='M100 70 L130 100 L100 130 L70 100 Z'/>
   </g>
   <g fill='${b}' opacity='0.95'>
     <circle cx='100' cy='100' r='9'/>
     <path d='M100 78 l6 12 -6 12 -6 -12 Z'/><path d='M100 122 l6 -12 -6 -12 -6 12 Z'/>
     <path d='M78 100 l12 6 12 -6 -12 -6 Z'/><path d='M122 100 l-12 6 -12 -6 12 -6 Z'/>
   </g>
   <g fill='${c}' opacity='0.5'>
     <circle cx='0' cy='0' r='6'/><circle cx='200' cy='0' r='6'/><circle cx='0' cy='200' r='6'/><circle cx='200' cy='200' r='6'/>
     <circle cx='100' cy='0' r='3'/><circle cx='100' cy='200' r='3'/><circle cx='0' cy='100' r='3'/><circle cx='200' cy='100' r='3'/>
   </g>
   <g stroke='${a}' stroke-width='1' opacity='0.35' fill='none'>
     <path d='M0 0 L34 34 M200 0 L166 34 M0 200 L34 166 M200 200 L166 166'/>
   </g>
  </svg>`
}

function boteh({ g, a, b, c }) {
  const S = 130
  const paisley = (x, y, col, sc) =>
    `<g transform='translate(${x} ${y}) scale(${sc})'>
       <path d='M0 26 C -16 26 -16 4 0 2 C 20 0 26 20 14 30 C 6 36 -4 34 -2 26'
             fill='none' stroke='${col}' stroke-width='2.4'/>
       <circle cx='0' cy='18' r='3.4' fill='${col}'/>
     </g>`
  return `<svg xmlns='http://www.w3.org/2000/svg' width='${S}' height='${S}' viewBox='0 0 ${S} ${S}'>
    <rect width='${S}' height='${S}' fill='${g}'/>
    ${paisley(30, 20, a, 1)}
    ${paisley(95, 55, b, 0.85)}
    ${paisley(30, 90, c, 0.75)}
    ${paisley(95, 118, a, 0.9)}
    ${paisley(0, 55, b, 0.8)}
    <g fill='${a}' opacity='0.4'>
      <circle cx='65' cy='10' r='2'/><circle cx='65' cy='75' r='2'/><circle cx='0' cy='120' r='2'/><circle cx='128' cy='90' r='2'/>
    </g>
  </svg>`
}

function anatolian({ g, a, b, c }) {
  const S = 120
  return `<svg xmlns='http://www.w3.org/2000/svg' width='${S}' height='${S}' viewBox='0 0 ${S} ${S}'>
    <rect width='${S}' height='${S}' fill='${g}'/>
    <g stroke='${a}' stroke-width='2.4' fill='none'>
      <path d='M60 14 L86 34 L86 66 L60 86 L34 66 L34 34 Z'/>
      <path d='M60 30 L74 40 L74 60 L60 70 L46 60 L46 40 Z' stroke='${b}'/>
    </g>
    <path d='M60 42 l8 9 -8 9 -8 -9 Z' fill='${c}'/>
    <g stroke='${b}' stroke-width='2' fill='none' opacity='0.9'>
      <path d='M0 0 L14 0 L14 14 M120 0 L106 0 L106 14 M0 120 L14 120 L14 106 M120 120 L106 120 L106 106'/>
      <path d='M0 60 l10 -10 -10 -10 M120 60 l-10 -10 10 -10 M0 60 l10 10 -10 10 M120 60 l-10 10 10 10'/>
    </g>
    <g fill='${a}' opacity='0.55'><circle cx='0' cy='0' r='3'/><circle cx='120' cy='0' r='3'/><circle cx='0' cy='120' r='3'/><circle cx='120' cy='120' r='3'/></g>
  </svg>`
}

function tribal({ g, a, b, c }) {
  const S = 100
  const hookDiamond = (cx, cy, col) =>
    `<g stroke='${col}' stroke-width='2.2' fill='none'>
       <path d='M${cx} ${cy - 26} L${cx + 26} ${cy} L${cx} ${cy + 26} L${cx - 26} ${cy} Z'/>
       <path d='M${cx} ${cy - 14} L${cx + 14} ${cy} L${cx} ${cy + 14} L${cx - 14} ${cy} Z'/>
       <path d='M${cx - 26} ${cy} l-6 -6 M${cx + 26} ${cy} l6 -6 M${cx - 26} ${cy} l-6 6 M${cx + 26} ${cy} l6 6'/>
     </g>`
  return `<svg xmlns='http://www.w3.org/2000/svg' width='${S}' height='${S}' viewBox='0 0 ${S} ${S}'>
    <rect width='${S}' height='${S}' fill='${g}'/>
    ${hookDiamond(50, 50, a)}
    ${hookDiamond(0, 0, b)}${hookDiamond(100, 0, b)}${hookDiamond(0, 100, b)}${hookDiamond(100, 100, b)}
    <rect x='47' y='47' width='6' height='6' fill='${c}'/>
  </svg>`
}

function floral({ g, a, b, c }) {
  const S = 150
  const flower = (x, y, col) =>
    `<g transform='translate(${x} ${y})' fill='none' stroke='${col}' stroke-width='2'>
       <circle r='5' fill='${col}'/>
       <path d='M0 -16 q8 8 0 16 q-8 -8 0 -16 M0 16 q8 -8 0 -16 q-8 8 0 16 M-16 0 q8 8 16 0 q-8 -8 -16 0 M16 0 q-8 8 -16 0 q8 -8 16 0'/>
     </g>`
  return `<svg xmlns='http://www.w3.org/2000/svg' width='${S}' height='${S}' viewBox='0 0 ${S} ${S}'>
    <rect width='${S}' height='${S}' fill='${g}'/>
    <g stroke='${a}' stroke-width='1.6' fill='none' opacity='0.8'>
      <path d='M0 75 Q37 20 75 75 T150 75 M0 75 Q37 130 75 75 T150 75'/>
      <path d='M75 0 Q20 37 75 75 T75 150 M75 0 Q130 37 75 75 T75 150'/>
    </g>
    ${flower(75, 75, b)}
    ${flower(0, 0, c)}${flower(150, 0, c)}${flower(0, 150, c)}${flower(150, 150, c)}
  </svg>`
}

function lattice({ g, a, b, c }) {
  const S = 80
  return `<svg xmlns='http://www.w3.org/2000/svg' width='${S}' height='${S}' viewBox='0 0 ${S} ${S}'>
    <rect width='${S}' height='${S}' fill='${g}'/>
    <g stroke='${a}' stroke-width='2' fill='none'>
      <path d='M0 40 L40 0 L80 40 L40 80 Z'/>
      <path d='M40 0 L80 40 M0 40 L40 80'/>
    </g>
    <circle cx='40' cy='40' r='4' fill='${b}'/>
    <g fill='${c}' opacity='0.7'><circle cx='0' cy='0' r='3'/><circle cx='80' cy='0' r='3'/><circle cx='0' cy='80' r='3'/><circle cx='80' cy='80' r='3'/></g>
  </svg>`
}

function herringbone({ g, a, b }) {
  const S = 48
  return `<svg xmlns='http://www.w3.org/2000/svg' width='${S}' height='${S}' viewBox='0 0 ${S} ${S}'>
    <rect width='${S}' height='${S}' fill='${g}'/>
    <g stroke='${a}' stroke-width='3' fill='none' opacity='0.55'>
      <path d='M0 0 L12 12 L0 24 M0 24 L12 36 L0 48'/>
      <path d='M24 0 L36 12 L24 24 M24 24 L36 36 L24 48'/>
      <path d='M12 12 L24 24 M12 36 L24 48 M36 12 L48 24 M36 36 L48 48'/>
    </g>
    <g stroke='${b}' stroke-width='3' fill='none' opacity='0.4'>
      <path d='M12 0 L24 12 L12 24 M36 0 L48 12 L36 24'/>
    </g>
  </svg>`
}

function kilim({ g, a, b, c }) {
  const S = 120
  return `<svg xmlns='http://www.w3.org/2000/svg' width='${S}' height='${S}' viewBox='0 0 ${S} ${S}'>
    <rect width='${S}' height='${S}' fill='${g}'/>
    <g fill='${a}' opacity='0.85'>
      <path d='M0 20 L15 5 L30 20 L45 5 L60 20 L75 5 L90 20 L105 5 L120 20 L120 26 L0 26 Z'/>
      <path d='M0 94 L15 79 L30 94 L45 79 L60 94 L75 79 L90 94 L105 79 L120 94 L120 100 L0 100 Z'/>
    </g>
    <rect x='0' y='40' width='120' height='4' fill='${b}'/>
    <rect x='0' y='76' width='120' height='4' fill='${b}'/>
    <g fill='${c}' opacity='0.7'>
      <rect x='10' y='50' width='16' height='16' transform='rotate(45 18 58)'/>
      <rect x='54' y='50' width='16' height='16' transform='rotate(45 62 58)'/>
      <rect x='98' y='50' width='16' height='16' transform='rotate(45 106 58)'/>
    </g>
  </svg>`
}

function vine({ g, a, b, c }) {
  const S = 160
  return `<svg xmlns='http://www.w3.org/2000/svg' width='${S}' height='${S}' viewBox='0 0 ${S} ${S}'>
    <rect width='${S}' height='${S}' fill='${g}'/>
    <g stroke='${a}' stroke-width='2' fill='none' opacity='0.85'>
      <path d='M0 40 Q40 0 80 40 T160 40'/>
      <path d='M0 120 Q40 80 80 120 T160 120'/>
    </g>
    <g fill='${b}'><circle cx='40' cy='20' r='4'/><circle cx='120' cy='20' r='4'/><circle cx='40' cy='100' r='4'/><circle cx='120' cy='100' r='4'/></g>
    <g fill='${c}' opacity='0.6'><circle cx='0' cy='80' r='3'/><circle cx='80' cy='80' r='3'/><circle cx='160' cy='80' r='3'/></g>
  </svg>`
}

const MOTIFS = { medallion, boteh, anatolian, tribal, floral, lattice, herringbone, kilim, vine }

export function pattern(motif, palName = 'oxblood') {
  const fn = MOTIFS[motif] || medallion
  return enc(fn(PAL[palName] || PAL.oxblood))
}

// convenience for tile "rug" swatches with varied color stories
export function rug(motif, palName) {
  return pattern(motif, palName)
}
