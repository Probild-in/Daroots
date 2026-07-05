# Daroots — Handcrafted Rugs Website

A 3D, scroll-cinematic single-page site for the Daroots carpet export brand.
Its signature: **a carpet that unrolls down the page as you scroll**, revealing a
**different woven pattern in every section** — built in the brand's oxblood / cream /
emerald / gold palette, using your real logo.

Built with **Vite + React**, **GSAP ScrollTrigger** (the unroll + reveals) and
**Lenis** (inertial smooth scroll). No backend, no photos required — every carpet
motif is generated as crisp SVG, so it stays sharp at any size and loads instantly.

## Run it

```bash
npm install      # first time only
npm run dev      # start the live dev server → http://localhost:5173
```

To build a production version you can host anywhere (Netlify, Vercel, GoDaddy, etc.):

```bash
npm run build    # outputs a static site into  dist/
npm run preview  # preview that production build locally
```

Then drag the `dist/` folder onto Netlify Drop, or connect the repo to Vercel.

## Where things live

```
public/logos/           your Daroots logo files (SVG)
src/
  App.jsx               assembles all sections in order
  styles.css            design tokens (colours, fonts) + all styling
  lib/patterns.js       the carpet motif generator (one motif per section)
  components/
    SmoothScroll.jsx    Lenis + GSAP smooth-scroll wiring
    Section.jsx         the "unrolling carpet" section wrapper
    Nav.jsx  Reveal.jsx  Tilt.jsx
  sections/             Hero, CraftStory, Collections, Products, Installations,
                        WhyChoose, YourDesign, Materials, Process, Testimonials,
                        Contact, Footer
```

## The carpet images

Every section background and tile now uses **real carpet photography** in
`public/rugs/`. Each section's unrolling background and each product/gallery tile
references one of these files by name via the `RUGS` map in `src/lib/patterns.js`.

To use **your own carpets**: drop your images into `public/rugs/` and either reuse
the same filenames, or edit the paths in `src/lib/patterns.js` (`RUGS`) and the
`photo="/rugs/…"` props in `src/sections/*`. Landscape, top-down photos of the full
rug work best as section backgrounds.

> The demo images were pulled from **Wikimedia Commons** (public-domain / Creative
> Commons museum and antique-rug photographs) purely so you can see the effect.
> Replace them with your own product photography before going live — some Commons
> files carry CC-BY attribution requirements.

## Swapping in other content
- **Copy, stats, product names** — edit the arrays at the top of each file in
  `src/sections/` (e.g. `PRODUCTS`, `MATERIALS`, `STEPS`).
- **Colours / fonts** — all defined once as CSS variables at the top of
  `src/styles.css` (`--oxblood`, `--cream`, `--gold`, `--emerald`, fonts).
- **Contact form** — `src/sections/Contact.jsx` is front-end only. Point `onSubmit`
  at your email service / CRM / form endpoint (Formspree, your API, etc.).

## Notes

- Fully responsive down to mobile.
- Respects `prefers-reduced-motion`: the carpet still shows and content still
  appears, but the roll animation and smooth-scroll switch off.
- The section carpet motifs are: medallion, boteh (paisley), Anatolian geometric,
  tribal diamonds, floral trellis, lattice, herringbone, kilim bands, and vine —
  one per section, cross-faded by the passing roll.
