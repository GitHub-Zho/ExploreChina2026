# ExploreChina 2026 — Project Instructions for Claude

## What This Is
Student-led China travel program website for Canadian university students (UofT).
Live site: `www.explorechina.ca`
Two routes live for Summer 2026, one staged:
- 10-day **East China** (Shanghai/Suzhou/Hangzhou/Beijing) — open, Jul 8
- 10-day **South China** (Xiamen/Quanzhou/Chaoshan/Shenzhen) — open, Jul 20
- 10-day **Yunnan** (Kunming → Lijiang → Dali) — `status: 'coming-soon'` stub in `src/data/trips/yunnan.ts`

**Tone:** Summer camp, not a tour group. Conversational, confident, slightly irreverent. Talk like a friend who organized an amazing trip. No corporate speak.
**Audience:** Canadian university students 18–25, many first-timers to China.
**Business direction:** future consulting services will join trips as a second product family (see Offering seam below).

---

## Tech Stack
- **Framework:** Astro 5.x + Tailwind CSS 3.x (+ React for the one ApplyForm island)
- **Deployment:** Vercel (auto-deploy from GitHub)
  - `main` → production (`www.explorechina.ca`)
  - `test` → preview (`explore-china-site-git-test-yuuchennzzz-2451s-projects.vercel.app`)
- **Forms:**
  - Apply form → Google Apps Script → Google Sheet (`GOOGLE_SHEET_URL` in ApplyForm.jsx). NOT FormSubmit.
  - Homepage contact form → FormSubmit.co → `site.email` (**activation is bound to the exact email string**)
- **No backend.** Static site only.
- **Build:** `npm run build` = quality gate → `astro check` → `astro build`. All three must pass.

---

## Git Workflow — MANDATORY
1. **Always work on `test` branch first**
2. Push → verify on preview URL → get Jo's approval
3. Only then merge to `main` for production

```bash
git checkout test
# ... make changes ...
git push origin test          # triggers Vercel preview

# After Jo approves
git checkout main
git merge test --no-edit
git push origin main          # triggers production deploy
```

**After every push**, report the URL to Jo:
- After `git push origin test` → `https://explore-china-site-git-test-yuuchennzzz-2451s-projects.vercel.app`
- After `git push origin main` → `https://www.explorechina.ca`

**This repo stores website code only** — no workspace configs, AGENTS.md, SOUL.md, memory files, etc.

---

## Data Architecture — Single Source of Truth (READ THIS FIRST)

Every trip fact lives in exactly ONE file. Pages are templates and must never
carry trip facts. The quality gate enforces the price rule at build time.

```
src/data/
├── types.ts          # All interfaces; Trip has kind:'trip'; Offering union
│                     # is the seam for future product families (services)
├── constants.ts      # Prices + POLICY + combo fee. Leaf module.
│                     # THE ONLY FILE WHERE PRICE DIGITS ARE ALLOWED.
├── site.ts           # Site-wide: email, Instagram×2 (official
│                     # @explorechina.travel — currently empty; legacy
│                     # camcapysoc — where CTAs point until content moves),
│                     # WeChat, aboutContent. Nothing trip-specific.
├── registry.ts       # TRIPS assembly + getTripById/getOpenTrips/getTripByUrl
│                     # + derived tripsMeta card projection (never hand-edit)
└── trips/*.ts        # ONE complete typed Trip per file: meta, dates,
                      # includes/excludes, FAQ, videos, itinerary, cityGuides,
                      # highlightStrip, routeIntro prose, priceBreakdown,
                      # card, form, seo
```

Rules:
1. **Change a price** → `constants.ts` only. Pages/cards/FAQ/SEO/form all derive. The gate fails the build if a price literal appears in pages/components.
2. **Change dates/route/copy** → the trip's file in `src/data/trips/`. Cards, sitemap, and ApplyForm options derive from it.
3. **ApplyForm island imports `constants.ts`, never the registry** — the registry drags every trip's prose into client JS (38KB→167KB when tried). Trip schedule reaches the form as props computed in `apply.astro`/`zh/apply.astro`.
4. **`form.scheduleId` is written to the Google Sheet** — never change it for an existing trip.
5. **Adding a trip / product family** → follow the README playbooks ("How to add a new trip", "How to add a new product family"). Yunnan launch = fill its stub + copy the SC page pair.

## Key Files

```
src/
├── components/v1/            # Active components (all take lang/isZh props)
│   ├── Navbar.astro          # Fixed nav — minimal/hero/darkNav modes
│   ├── Footer.astro
│   ├── HeroSection.astro     # Full-width hero image (homepage)
│   ├── HomeDifference.astro  # "Fruit" interactive section (homepage)
│   ├── DestinationGrid.astro # Horizontal scroll gallery (wheel → horizontal JS)
│   ├── Faq.astro             # Homepage FAQ (emotional tone)
│   ├── TripRundown.astro     # "The experience" section (has own route prop data)
│   └── TripPriceBreakdown.astro  # Bar chart; requires price+items props from trip
├── components/ApplyForm.jsx  # React island; schedule via props; Google Sheet post
├── data/                     # See Data Architecture above
├── layouts/Layout.astro      # SEO meta, hreflang, structured data (email from site.ts)
├── pages/                    # EN tree + zh/ mirror tree (gate enforces parity)
└── styles/global.css         # ~2,950 lines global styles
scripts/quality-gate.mjs      # 7 checks — see README
```

---

## Critical Gotchas

### 1. Story Section — DO NOT TOUCH CASUALLY
`src/pages/index.astro` contains a poem-style swipe animation (the site's centerpiece). It's the most fragile part:
- Swipe/drag triggers a curtain open → typewriter poem (7 pages)
- Mac trackpad fix: 2:1 angle tolerance, 15% threshold
- All lines fade together (not staggered) — Jo's explicit preference
- Breathing dot pulses while user reads; text fades only after dot finishes
- Background warms progressively: `#fdfcfb` → `#f5f1e9`
- **Always test on both desktop (mouse) and mobile (touch) after any change here.**
- Frontmatter imports may be edited; the story markup/JS/CSS may not.

### 2. Astro Scoped Styles
Astro scopes `<style>` by component. Modal/toast CSS must use `<style is:global>` or `:global()`, otherwise styles won't apply to dynamically shown elements.

### 3. Gallery Scroll
`DestinationGrid.astro` uses plain `overflow-x: auto` + JS that converts vertical wheel → horizontal scroll. `scroll-snap-type: x mandatory` was **removed** — it fights programmatic `scrollLeft`. Don't re-add it.

### 4. IntersectionObserver Reliability
Unreliable for elements already in viewport on page load (especially post-Vercel deploy). Don't depend on it for initial visibility states.

### 5. Quality Gate
Runs before every build — 7 checks (banned image endpoints, external tool links, TBD/TODO in pages, image refs exist, internal links resolve, **no price literals outside src/data**, EN↔ZH route parity). `npm run quality` runs it alone; `GATE_LIST_UNREFERENCED=1` also lists orphan images. It skips HTML `placeholder=` attributes.

### 6. Images
- All local images in `public/images/` (~34MB), compressed to ≤2000px
- The ZH south-china highlight strip uses 4 remote `images.unsplash.com` URLs (allowed; only `source.unsplash.com` is banned)
- 10 unreferenced `hk-*`/`hongkong-*` images are intentional spares for future HK content
- Never use `/736x/` Pinterest thumbnails — always `/originals/` resolution

### 7. FAQ — Two Separate Sets, No Overlap
- **Homepage** (`Faq.astro`): Emotional — "不会中文能来吗?", "安全吗?", etc.
- **Trip pages** (`trip.faq`/`trip.faqZh` in the trip data files): Practical — pricing, cancellation, dietary, group size

### 8. Trip-Page Accordions & Marquees
- All four trip pages use the `.stop-list` text accordion (the old landmark-carousel was fully removed — markup, JS, and CSS)
- EN highlight marquees animate via rAF JS; **ZH marquees are static by design** (no `hs-cycle3` CSS exists)
- South China EN and ZH highlight strips intentionally show **different card sets** — do not "sync" them without a content decision
- Marquee clone cards are rendered by mapping the same data array again with `aria-hidden="true"` — never duplicate the data

### 9. Font Sizes — Always Responsive
All font sizes must use `clamp()` or `vw` units. Never fixed `px` values. This caused a recurring layout bug in the past.

### 10. Pip Width (HomeDifference)
Fruit pips use `position: absolute` + `white-space: pre-line` + `width: max-content`. Never remove `width: max-content` or text collapses to one word per line.

### 11. Tailwind Does NOT Scan .ts Files
`tailwind.config.mjs` content glob deliberately excludes `.ts` so strings in data files can't churn the generated CSS. If you ever put markup with Tailwind classes into a data file (don't), it won't get styles.

### 12. `astro check` Runs In The Build
Page `<script>` blocks are type-checked. Use type annotations and non-null assertions (`!`) to satisfy it — never change runtime logic just for types. `<script is:inline>` blocks are not checked.

---

## Pending Tasks

| Priority | Task | Notes |
|----------|------|-------|
| High | Yunnan route launch | Stub exists (`trips/yunnan.ts`, status coming-soon); follow README "How to add a new trip" |
| Medium | ApplyForm Chinese translation | ~900 strings; form is EN even at `/zh/apply` |
| Medium | About page team photos | Currently uses initial avatars — needs real photos |
| Medium | South China Xiamen video | Placeholder card was removed; add one real `Video` entry in `trips/south-china.ts` when a URL exists |
| Low | Handbook EN/ZH structural reconciliation | Content divergence documented, not a bug |
| Low | Instagram CTA switch | When @explorechina.travel has content: point homepage CTA at `site.instagramUrl` (one line) |

---

## Brand / Design
- **Colors:** Warm earth tones. Red accent `#c8102e`. Stone/neutral for body text. Near-black for dark sections (`#141210`, `#1e1a17`).
- **Typography:** Playfair Display (display/headings) + Inter (body). All font sizes use `clamp()` for responsive sizing.
- **Language:** EN primary, ZH mirror. Jo writes ZH content direction.
- **Nav:** About page is in all nav locations (desktop, mobile, hero minimal nav, footer). Watch for duplicate links — this was a recurring bug.

---

## Handoff Note
The data layer was rebuilt in July 2026 (typed single-source architecture, quality gates, derived projections). If something in this file contradicts the code, trust the code and fix this file in the same commit.
