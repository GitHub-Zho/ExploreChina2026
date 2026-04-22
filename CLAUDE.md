# ExploreChina 2026 — Project Instructions for Claude

## What This Is
Student-led China travel program website for Canadian university students (UofT).
Live site: `www.explorechina.ca`
Two routes planned for Summer 2026:
- 10-day **Shanghai/Suzhou/Hangzhou/Beijing** (live on site)
- 10-day **Yunnan** (Kunming → Lijiang → Dali → Kunming) — not yet a web page

**Tone:** Summer camp, not a tour group. Conversational, confident, slightly irreverent. Talk like a friend who organized an amazing trip. No corporate speak.
**Audience:** Canadian university students 18–25, many first-timers to China.
**Price:** ~CAD $3,000 / 10 days (covers accommodation, in-China transport, selected activities; excludes flights).

---

## Tech Stack
- **Framework:** Astro 5.x + Tailwind CSS 3.x
- **Deployment:** Vercel (auto-deploy from GitHub)
  - `main` → production (`www.explorechina.ca`)
  - `test` → preview (`explore-china-site-git-test-yuuchennzzz-2451s-projects.vercel.app`)
- **Forms:** FormSubmit.co → `hello@explorechina.ca` (**activated**)
- **No backend.** Static site only.
- **Build:** `npm run build` — runs `scripts/quality-gate.mjs` first, then `astro build`
- **Quality gate checks:** banned URLs (source.unsplash.com), external tool links (figma/notion), unresolved TBD/TODO markers (skips HTML `placeholder=` attributes)

---

## Git Workflow — MANDATORY
1. **Always work on `test` branch first**
2. Push → verify on preview URL → get Jo's approval
3. Only then merge to `main` for production

```bash
# Working flow
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

## Key Files

```
src/
├── components/v1/            # Active components (v1 = current)
│   ├── Navbar.astro          # Fixed nav — minimal/hero/darkNav modes
│   ├── Footer.astro
│   ├── HeroSection.astro     # Full-width hero image (homepage)
│   ├── HomeDifference.astro  # "Fruit" interactive section (homepage)
│   ├── DestinationGrid.astro # Horizontal scroll gallery (wheel → horizontal JS)
│   ├── Faq.astro             # Homepage FAQ (emotional tone)
│   ├── TripWhyUs.astro       # NOT JUST/BUT rotator — used on south-china pages only
│   ├── TripRundown.astro     # "The experience" section — NOT JUST/BUT + Eat/See/Try/Go out
│   │                           Used on east-china pages. TripWhyUs + Eat columns combined.
│   └── TripPriceBreakdown.astro  # Price breakdown with bar chart — used on all trip pages
├── data/
│   ├── site.ts               # Trip FAQ, included/notIncluded, itinerary, city guides, videos
│   ├── registry.ts           # Trip registry (getTripById)
│   ├── trips/east-china.ts   # East China itinerary with landmarks
│   ├── trips/south-china.ts  # South China itinerary (has placeholder images/videos)
│   └── trips-meta.ts         # All trip metadata inc. Yunnan (status: soon, fields TBD)
├── layouts/
│   └── Layout.astro          # Base layout, SEO meta, structured data
├── pages/
│   ├── index.astro           # Homepage — story animation + HomeDifference + DestinationGrid
│   ├── about.astro
│   ├── handbook.astro
│   ├── apply.astro           # Apply form (FormSubmit.co)
│   ├── trips/
│   │   ├── east-china-2026-summer.astro   # EN trip page
│   │   └── south-china-2026-summer.astro  # EN trip page (placeholder images)
│   └── zh/                   # Chinese mirrors of all pages
├── styles/
│   └── global.css            # Global styles (~1650 lines)
scripts/
└── quality-gate.mjs          # Pre-build checks
public/
└── images/highlights/        # All local images (optimized)
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

### 2. Astro Scoped Styles
Astro scopes `<style>` by component. Modal/toast CSS must use `<style is:global>` or `:global()`, otherwise styles won't apply to dynamically shown elements.

### 3. Gallery Scroll
`DestinationGrid.astro` uses plain `overflow-x: auto` + JS that converts vertical wheel → horizontal scroll. `scroll-snap-type: x mandatory` was **removed** — it fights programmatic `scrollLeft`. Don't re-add it.

### 4. IntersectionObserver Reliability
Unreliable for elements already in viewport on page load (especially post-Vercel deploy). Don't depend on it for initial visibility states.

### 5. Quality Gate
Runs before every build. Catches `placeholder` as a keyword — patched to skip HTML `placeholder=` attributes. Run `npm run quality` to test gate independently.

### 6. Images
- All images in `public/images/highlights/` — local and optimized
- One remaining Unsplash image: Bund at Night in DestinationGrid
- Never use `/736x/` Pinterest thumbnails — always use `/originals/` resolution

### 7. FAQ — Two Separate Sets, No Overlap
- **Homepage** (`Faq.astro`): Emotional — "不会中文能来吗?", "安全吗?", etc.
- **Trip page** (`site.ts`): Practical — pricing, cancellation, dietary, group size

### 8. East China vs South China Accordion
- **Both** accordions now use `.stop-list` (text only) — landmark-carousel JS removed from both pages
- The `.landmark-carousel` CSS still exists in global.css but is no longer used on trip pages

### 9. Font Sizes — Always Responsive
All font sizes must use `clamp()` or `vw` units. Never fixed `px` values. This caused a recurring layout bug in the past.

### 10. Pip Width (HomeDifference)
Fruit pips use `position: absolute` + `white-space: pre-line` + `width: max-content`. Never remove `width: max-content` or text collapses to one word per line.

### 11. Data Architecture — Single Source of Truth
**Before writing any value inline, ask: does this belong in a data file?**

Any value that appears in more than one place, or that could change, lives in a data file — not hardcoded in a component or page.

**Data hierarchy:**
- `src/data/registry.ts` — canonical trip data: title, price constants (`EAST_CHINA_PRICE_CAD`, `SOUTH_CHINA_PRICE_CAD`), route names, dates, summaries. Import these everywhere — apply form, trip pages, metadata.
- `src/data/trips-meta.ts` — card-facing data for listing pages and homepage: description snippets, seal characters, arc titles, cultural focus lines. References registry constants for price.
- `src/data/trips/*.ts` — detailed itinerary, city guides, FAQ, included/not-included per route.
- `src/components/` — components import from data files; never hardcode trip-specific strings, prices, dates, or route names.

**Checklist before hardcoding a value:**
1. Does this value appear on more than one page or component? → data file
2. Could it change (price, date, city name, route)? → data file
3. Is it part of a trip's identity? → registry or trips-meta
4. Is it a constant used in calculations (price math, combo pricing)? → named export in registry.ts

**Common violations to avoid:**
- Hardcoded prices in forms — use `EAST_CHINA_PRICE_CAD` / `SOUTH_CHINA_PRICE_CAD`
- Hardcoded route city strings — use `trip.routeName` from registry
- Hardcoded departure dates — use `trip.departureWindow` or `trip.dates[]`
- Page-level descriptions duplicated across EN and ZH pages — share from trips-meta or registry

---

## Pending Tasks

| Priority | Task | Notes |
|----------|------|-------|
| High | Yunnan route page | No page yet; `trips-meta.ts` has entry with `status: 'soon'` and TBD fields |
| Medium | About page team photos | Currently uses initial avatars — needs real photos |
| Medium | South China placeholder content | `src/data/trips/south-china.ts` has placeholder images and one placeholder YouTube URL |
| Done | ~~English trip description copy~~ | ✅ Route intro section added to east-china page with city prose |
| Done | ~~Handbook content review~~ | ✅ Comprehensive content in place |
| Done | ~~FormSubmit.co activation~~ | ✅ Activated |

---

## Brand / Design
- **Colors:** Warm earth tones. Red accent `#c8102e`. Stone/neutral for body text. Near-black for dark sections (`#141210`, `#1e1a17`).
- **Typography:** Playfair Display (display/headings) + Inter (body). Story section and all font sizes use `clamp()` for responsive sizing.
- **Language:** EN primary, ZH mirror. Jo writes ZH content direction.
- **Nav:** About page is in all nav locations (desktop, mobile, hero minimal nav, footer). Watch for duplicate links — this was a recurring bug.

---

## Handoff Note
Previously developed using OpenClaw (Claude-based tool). Now continuing in Claude Code. Same codebase, same workflow.
