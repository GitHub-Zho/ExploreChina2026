# Explore China 2026 — explorechina.ca

Student-led China travel program website for Canada-based university students.
Live at **https://www.explorechina.ca** (EN) with a full Chinese mirror under `/zh/`.

Two routes are open for Summer 2026 (East China and South China), with Yunnan
staged as a coming-soon stub. The site's job is conversion: Instagram/YouTube
traffic lands here, reads a trip page, and applies via `/apply`.

## Stack

- **Astro 5** + **Tailwind CSS 3** — fully static output, no backend
- **React 18** — one island only: the apply form (`src/components/ApplyForm.jsx`)
- **Vercel** — auto-deploys from GitHub
  - `test` branch → preview (`explore-china-site-git-test-…vercel.app`)
  - `main` branch → production (`www.explorechina.ca`)
- **Integrations** (no server of our own):
  - Apply form → Google Apps Script → Google Sheet (`GOOGLE_SHEET_URL` in ApplyForm.jsx)
  - Homepage contact form → FormSubmit.co → `hello@explorechina.ca`
    (FormSubmit activation is bound to the exact email string — change it only via `site.email` and re-activate)

## Commands

| Command           | What it does                                                     |
| :---------------- | :--------------------------------------------------------------- |
| `npm install`     | Install dependencies                                              |
| `npm run dev`     | Dev server at `localhost:4321`                                    |
| `npm run quality` | Quality gate only (see below)                                     |
| `npm run check`   | `astro check` — TypeScript over pages, components, and data       |
| `npm run build`   | quality gate → type check → `astro build` (all three must pass)   |
| `npm run preview` | Serve the built `dist/` locally                                   |

## Architecture — single source of truth

Every fact about a trip (price, dates, route, copy, images, FAQ, itinerary)
lives in **exactly one file**. Pages are templates; they never carry trip facts.

```
src/data/
├── types.ts          # All interfaces. Trip carries kind:'trip' — the Offering
│                     # union is the seam for future product families.
├── constants.ts      # Prices + POLICY + combo fee. LEAF module (imports nothing).
│                     # The ONLY file where CAD price digits are allowed —
│                     # the quality gate enforces this.
├── site.ts           # Site-wide config: email, both Instagram accounts,
│                     # WeChat, about-page content. Nothing trip-specific.
├── registry.ts       # Assembles TRIPS from trips/*, exposes getTripById /
│                     # getOpenTrips / getTripByUrl and the derived tripsMeta
│                     # card projection (never hand-edit card data).
└── trips/
    ├── east-china.ts # ONE complete typed Trip object per file:
    ├── south-china.ts# meta, dates, price refs, includes/excludes, FAQ,
    └── yunnan.ts     # videos, itinerary, city guides, page marquee cards,
                      # route-intro prose, price breakdown, card + form + seo.
```

Dependency direction (enforced by convention, checked by `astro check`):

```
constants ← trips/* ← registry ← pages / components
site.ts   ←──────────────────────┘ (site-wide only)
```

**Bundle rule:** the ApplyForm island imports from `constants.ts` only.
Importing the registry there would bundle every trip's prose into client JS
(38KB → 167KB when we tried). Trip data reaches the form as serialized props
computed in `apply.astro` / `zh/apply.astro` frontmatter.

**Bilingual model:** EN pages live in `src/pages/`, ZH mirrors in
`src/pages/zh/`. Both trees read the same data files (flat `*Zh` fields).
Components take a `lang`/`isZh` prop. The quality gate fails the build if an
EN page has no ZH mirror.

## Quality gate (`scripts/quality-gate.mjs`)

Runs before every build; the build fails on any violation:

1. Banned dynamic image endpoint (`source.unsplash.com`)
2. Banned user-facing figma/notion links
3. Unresolved `TBD`/`TODO` markers in pages
4. Every referenced `/images/...` path must exist in `public/`
   (run with `GATE_LIST_UNREFERENCED=1` to list orphan images)
5. Internal `href="/..."` links must resolve to a real route or vercel redirect
6. **Price literals outside `src/data` fail the build** — change prices in
   `constants.ts`, everything else derives
7. EN ↔ ZH route parity (only `sitemap.xml.ts` is exempt)

## How to add a new trip (e.g. launching Yunnan)

1. **Data** — `src/data/trips/yunnan.ts` already exists as a stub. Fill it:
   add `YUNNAN_PRICE_CAD` to `constants.ts`, set `priceCad`, `dates`,
   `includes/excludes`, `faq/faqZh`, `itinerary`, `cityGuides`,
   `highlightStrip`, `routeIntro`, `priceBreakdown`, `seo`, and a `form`
   entry (pick a stable `scheduleId` — it is written into the Google Sheet
   and must never change afterwards). Flip `status` to `'open'`.
   For a brand-new trip: copy an existing trip file as the template and
   register it in `registry.ts` (`TRIPS` array — one import + one entry).
2. **Pages** — copy the south-china page pair
   (`src/pages/trips/south-china-2026-summer.astro` and its `zh/` mirror),
   change the `getTripById('…')` id and the canonical/alternate URLs.
   Everything else renders from the trip object.
3. **Done automatically** — listing cards (homepage + /trips), sitemap
   entries, and the apply form option all derive from the registry.
4. `npm run build` — the gate verifies images exist, links resolve, parity
   holds, and no price literal leaked into a page.

## How to add a new product family (e.g. consulting services)

The trip model is one *offering kind*. To add services:

1. Define a `Service` interface in `types.ts` with `kind: 'service'` and
   extend the union: `export type Offering = Trip | Service;`
2. Put service data files in `src/data/services/`, assemble them in the
   registry (a `SERVICES` array next to `TRIPS`).
3. Render by `kind` where offerings mix (cards, nav); give services their
   own routes + ZH mirrors (the parity check will hold you to it).
4. Do **not** widen `Trip` with service-ish optional fields — new kind,
   new interface.

## Git workflow (mandatory)

1. Work on `test`, push → verify on the Vercel preview URL
2. Only after approval: merge `test` → `main` → production deploy
3. This repo holds website code only — no agent/workspace config files

```bash
git checkout test
# ...changes...
git push origin test    # preview: explore-china-site-git-test-…vercel.app
# after approval
git checkout main && git merge test --no-edit && git push origin main
```

## Content debt / known intentional quirks

- ApplyForm is English-only (also at `/zh/apply`); translating its ~900
  strings is an open task
- Handbook EN and ZH pages are structurally different (content divergence,
  not a bug); reconcile when content is rewritten
- ZH homepage is deliberately simpler than EN (no story animation)
- ZH trip-page highlight marquees are static by design; EN rows animate
- South China EN and ZH highlight strips intentionally show different
  card sets (`highlightStrip.en` ≠ `.zh`)
- 10 unreferenced `hk-*`/`hongkong-*` images are kept as spares for future
  Hong Kong content
