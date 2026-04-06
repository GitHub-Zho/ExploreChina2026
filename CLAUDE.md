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
│   ├── HeroSection.astro     # Full-width hero image
│   ├── DestinationGrid.astro # Horizontal scroll gallery (wheel → horizontal JS)
│   └── Faq.astro             # Homepage FAQ (emotional tone)
├── data/
│   ├── site.ts               # Trip data, trip FAQ, about content, team members
│   └── cities.ts             # City section data
├── layouts/
│   └── Layout.astro          # Base layout, SEO meta, structured data
├── pages/
│   ├── index.astro           # Homepage — 1100+ lines, includes story animation
│   ├── about.astro
│   ├── handbook.astro
│   ├── trips/explore-china-2026-summer.astro
│   ├── success.astro
│   └── zh/                   # Chinese mirrors of all pages
├── styles/
│   └── global.css            # Global styles (~1640 lines)
scripts/
└── quality-gate.mjs          # Pre-build checks
public/
└── images/highlights/        # All local images (optimized)
```

**Legacy (ignore):** `src/pages/v2/`, `src/components/v3/` — old iterations, not linked.

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

---

## Pending Tasks

| Priority | Task | Notes |
|----------|------|-------|
| High | Add English trip description copy | Evocative prose for Shanghai/Beijing route — draft exists but not yet in site |
| High | Yunnan route page | Full itinerary exists in Notion, no web page yet |
| Medium | About page team photos | Currently uses initial avatars — needs real photos |
| Low | Handbook content review | Has sections, may need 2026 updates |
| Done | ~~FormSubmit.co activation~~ | ✅ Activated |

---

## Brand / Design
- **Colors:** Warm earth tones. Red accent `#b91c1c` (Tailwind `red-700`). Stone/neutral for body text. Near-black for dark sections.
- **Typography:** System fonts via Tailwind. Story section uses `clamp()` for responsive sizing.
- **Language:** EN primary, ZH mirror. Jo writes ZH content direction.
- **Nav:** About page is in all nav locations (desktop, mobile, hero minimal nav, footer). Watch for duplicate links — this was a recurring bug.

---

## Handoff Note
Previously developed using OpenClaw (Claude-based tool). Now continuing in Claude Code / Cowork. Same codebase, same workflow. Context dump from previous session available if needed.
