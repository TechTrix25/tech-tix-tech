# Tech Trix — Upgrade Notes

The site was migrated from a Vite + React 18 + react-router + Tailwind v3 (shadcn)
single-page app into a fresh **Next.js 15 App Router** application with a premium,
dark "agency" design system and a full GSAP + Lenis + R3F animation layer.

All original copy, routes, the contact form + webhook, contact details, and SEO/OG
meta were carried over and improved.

---

## 1. Stack

| Concern | Tech |
| --- | --- |
| Framework | **Next.js 15** (App Router, React 19, TypeScript strict) |
| Dev/Build | webpack `next dev` (default) · `next dev:turbo` for Turbopack · `next build` |
| Styling | **Tailwind CSS v4** with a design-token layer (`@theme`) |
| Animation engine | **GSAP 3** + ScrollTrigger + SplitText + Flip |
| Smooth scroll | **Lenis**, synced to GSAP ScrollTrigger via a root provider |
| Micro-interactions | **Framer Motion** (`motion`) |
| 3D | **React Three Fiber** + drei + postprocessing (lazy-loaded hero globe) |
| Images | **next/image** + sharp (blur placeholders, remote-domain allow-list) |
| Icons | **lucide-react** |
| Deploy target | **Vercel** |

### Why a migration (not an in-place upgrade)
The mandated stack (Next 15 / React 19 / Tailwind v4 / Turbopack) is fundamentally
incompatible with the old Vite + react-router + Tailwind v3 setup. Migrating was
cleaner than ripping out the router/build/CSS engine in place, and it let us wire
SSR metadata, `next/image`, and the Lenis↔ScrollTrigger integration properly.

---

## 2. What changed

- **Design direction**: midnight-navy dark theme, Space Grotesk / Inter / JetBrains
  Mono type, amber + iris accents (mint for status), glass surfaces, soft long
  shadows, site-wide grain. Replaces the old light/violet template.
- **Home page** rebuilt with an Accenture-style scroll narrative:
  Hero → trust marquee → bold statement (line reveal) → Services → pinned
  scroll-zoom showcase → Work → Process (line draws on scroll) → Stats (count-up)
  → Tech cloud → Team → Testimonials → CTA band → Footer.
- **Hero**: gradient headline with a **rotating word** (improve/scale/transform/
  accelerate), dual CTAs, floating glass cards (cursor parallax), ambient gradient
  orbs, GSAP load timeline, and a **3D particle "tech globe"** (lazy-loaded R3F,
  CSS/SVG fallback when WebGL is unavailable or motion is reduced).
- **Text animations**: hero line-reveal + rotating word; every `SectionHeading`
  title reveals word-by-word on scroll; the statement section reveals line-by-line.
- **Scroll effects**: Lenis inertia scrolling driving ScrollTrigger; parallax
  drift + zoom (`ParallaxImage`), a pinned scroll-zoom showcase, the process line
  drawing on scroll, and hero parallax/fade on exit.
- **Imagery**: all images via `next/image` with blur placeholders and dark
  overlays. A `SmartImage` wrapper falls back to a same-size gradient if a remote
  URL fails, so layout never shifts. The old animated GIFs were removed.
- **SEO**: Metadata API with per-route titles, Open Graph + Twitter cards, a
  generated OG image (`src/app/opengraph-image.tsx`), favicon, robots. The original
  meta content (keywords, handles, descriptions) was preserved.
- **Accessibility**: semantic landmarks, visible focus rings, `alt` on every image,
  `aria-label` on icon buttons, AA-contrast palette, and a full
  `prefers-reduced-motion` path (all GSAP/Framer/marquee motion disabled).
- **Contact form**: posts to the original Google Apps Script webhook (unchanged),
  with accessible labels and inline, no-shift status messaging. Map embed preserved.
- **Fix**: footer "Careers" link (a dead route in the old site) was removed.

### Packages added
`next`, `react@19`, `react-dom@19`, `gsap`, `@gsap/react`, `lenis`, `motion`,
`three`, `@react-three/fiber`, `@react-three/drei`, `@react-three/postprocessing`,
`lucide-react`, `sharp`, `clsx`, `tailwind-merge`, `tailwindcss@4`,
`@tailwindcss/postcss`. (`playwright` is a dev-only dependency used for the
verification screenshots and can be removed.)

---

## 3. Where to edit things

All content lives in **`src/data/`** — no need to touch components:

| File | Contains |
| --- | --- |
| `src/data/site.ts` | Company name, **contact email/phone/address**, **form webhook**, map embed, social URLs, nav links |
| `src/data/services.ts` | The six services (title, description, features, tech tags, image) |
| `src/data/work.ts` | Portfolio projects, categories, and per-project **metrics** |
| `src/data/content.ts` | Process phases, stats, tech-stack chips, values, about story, **team**, testimonials |

Search the codebase for `// TODO: replace` to find the few placeholders that need
real data: **team members** (names/photos), **phone number**, and the portfolio
**metric** headlines.

### Images
- Remote image hosts are allow-listed in `next.config.ts` (`images.remotePatterns`):
  `images.unsplash.com`, `picsum.photos`, `i.pravatar.cc`. Add hosts there.
- Swap an image by editing its URL in the relevant `src/data/*` file.
- Local images live in `public/img/` (logos, `about.jpeg`).

---

## 4. Tweaking colors & animation

**Colors / fonts / radii** — `src/app/globals.css`, in the `@theme` block:
```css
@theme {
  --color-base: #0a0d17;     /* page background */
  --color-surface: #121829;  /* cards / panels */
  --color-ink: #eceef6;      /* text */
  --color-muted: #9aa1ba;    /* secondary text */
  --color-amber: #ffb23e;    /* accent 1 */
  --color-iris:  #7b6cf6;    /* accent 2 */
  --color-mint:  #4fd1b5;    /* status only */
}
```
Changing a token updates utilities (`bg-surface`, `text-amber`, …) everywhere.

**Animation**
- Smooth-scroll feel: `src/components/providers/SmoothScrollProvider.tsx`
  (`duration`, `easing`).
- GSAP plugins are registered once in `src/lib/gsap.ts`.
- Hero load timeline + rotating words: `src/components/hero/Hero.tsx`
  (`ROTATING_WORDS`).
- 3D globe (point count, colors, rotation speed, bloom):
  `src/components/hero/HeroObjectScene.tsx`.
- Parallax/zoom: `src/components/ui/ParallaxImage.tsx`,
  `src/components/sections/ZoomShowcase.tsx`.
- Section heading word reveal: `src/components/ui/SectionHeading.tsx`.
- All motion respects `prefers-reduced-motion` automatically.

---

## 5. Run & deploy

```bash
npm install
npm run dev        # http://localhost:3000 (webpack engine — stable on Windows)
npm run dev:turbo  # optional Turbopack dev
npm run build      # production build
npm run start      # serve the production build
```

> **Windows note:** the default `dev` script uses the webpack engine because
> Turbopack dev emits `_buildManifest.js.tmp … ENOENT` errors on some Windows
> setups. Use `dev:turbo` if you want Turbopack. Don't run `dev` and `build`
> simultaneously — both write to `.next` and will corrupt each other.

### Deploy to Vercel
1. Push the repo to GitHub.
2. In Vercel, **New Project → import the repo**. Framework preset: **Next.js**
   (auto-detected). No build settings to change (`next build` / output is default).
3. Set the production domain, then update `site.url` in `src/data/site.ts` so
   canonical/OG URLs are absolute and correct.
4. Deploy. `next/image` optimization and the generated OG image work on Vercel
   out of the box (sharp is included).

---

## 6. Verification

- `next build` — green: all routes prerender, no TS/lint errors.
- Screenshots captured at 1440px (desktop) and 390px (mobile) for every route,
  plus a `prefers-reduced-motion: reduce` pass (see `screenshots/`).
- Reduced-motion, keyboard focus, and responsive 360px→1440px+ all verified.
