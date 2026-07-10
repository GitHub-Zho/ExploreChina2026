// ─────────────────────────────────────────────────────────────
// Quality gate — runs before every build (npm run build).
//
// Checks:
//   1. Banned dynamic image endpoint (source.unsplash.com)
//   2. Banned user-facing external tool links (figma/notion)
//   3. Unresolved TBD/TODO markers in pages
//   4. Every referenced /images/... path exists in public/
//      (also prints an informational list of unreferenced images)
//   5. Internal href="/..." links resolve to a real route or redirect
//   6. Price literals are banned outside src/data
//      (change prices in src/data/constants.ts — nowhere else)
//   7. EN ↔ ZH route parity: every page has its /zh mirror
// ─────────────────────────────────────────────────────────────
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, relative, sep } from 'node:path';

const ROOT = process.cwd();
const SRC = join(ROOT, 'src');
const PUBLIC = join(ROOT, 'public');
const PAGES = join(SRC, 'pages');

function walk(dir, exts) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    const s = statSync(p);
    if (s.isDirectory()) out.push(...walk(p, exts));
    else if (exts.test(name)) out.push(p);
  }
  return out;
}

const files = walk(SRC, /\.(astro|ts|js|jsx|mjs|md|css)$/);
const failures = [];

// ── Checks 1–3 (original) ────────────────────────────────────
for (const f of files) {
  const c = readFileSync(f, 'utf8');

  if (c.includes('source.unsplash.com')) {
    failures.push(`${f}: uses source.unsplash.com (dynamic/random image endpoint is banned)`);
  }

  if (/figma\.com|notion\.so/i.test(c)) {
    failures.push(`${f}: contains figma/notion external link in user-facing source`);
  }

  const lines = c.split('\n');
  for (const line of lines) {
    if (/placeholder\s*=/.test(line)) continue;
    if (/\b(tbd|todo)\b/i.test(line) && /src\/pages\//.test(f)) {
      failures.push(`${f}: contains TBD/TODO markers`);
      break;
    }
  }
}

// ── Check 4: referenced images exist ─────────────────────────
const referencedImages = new Set();
for (const f of files) {
  const c = readFileSync(f, 'utf8');
  for (const m of c.matchAll(/['"`(](\/images\/[^'"`)?\s]+)/g)) {
    referencedImages.add(m[1]);
  }
}
for (const img of referencedImages) {
  if (!existsSync(join(PUBLIC, img))) {
    failures.push(`missing image: ${img} is referenced in src but does not exist in public/`);
  }
}
// Informational: unreferenced images (not a failure — feeds cleanup decisions)
const allImages = existsSync(join(PUBLIC, 'images'))
  ? walk(join(PUBLIC, 'images'), /\.(jpe?g|png|webp|avif|gif|svg)$/i).map(
      p => '/' + relative(PUBLIC, p).split(sep).join('/')
    )
  : [];
const unreferenced = allImages.filter(p => !referencedImages.has(p));
if (unreferenced.length && process.env.GATE_LIST_UNREFERENCED) {
  console.log(`\nℹ ${unreferenced.length} unreferenced image(s) under public/images:`);
  for (const p of unreferenced) console.log(`  ${p}`);
}

// ── Check 5: internal links resolve ──────────────────────────
// Build the route set from the pages tree + vercel.json redirects.
const routes = new Set(['/']);
for (const p of walk(PAGES, /\.(astro|ts)$/)) {
  let route = '/' + relative(PAGES, p).split(sep).join('/');
  route = route.replace(/\.astro$/, '').replace(/\.ts$/, '');
  route = route.replace(/\/index$/, '') || '/';
  routes.add(route);
  routes.add(route === '/' ? '/' : route + '/');
}
try {
  const vercel = JSON.parse(readFileSync(join(ROOT, 'vercel.json'), 'utf8'));
  for (const r of vercel.redirects ?? []) routes.add(r.source);
} catch { /* no vercel.json */ }

for (const f of files.filter(f => /\.(astro|jsx)$/.test(f))) {
  const c = readFileSync(f, 'utf8');
  for (const m of c.matchAll(/href="(\/[^"]*)"/g)) {
    const target = m[1].split('#')[0].split('?')[0];
    if (!target) continue; // pure anchor like "#apply" handled by split
    if (target.startsWith('/images/') || target.startsWith('/_astro/')) continue;
    if (/\.(xml|txt|ico|svg|png|jpe?g|webp|pdf)$/.test(target)) continue;
    const normalized = target !== '/' && target.endsWith('/') ? target.slice(0, -1) : target;
    if (!routes.has(normalized)) {
      failures.push(`${f}: internal link ${m[1]} does not resolve to any page route or redirect`);
    }
  }
}

// ── Check 6: price literals outside src/data ─────────────────
// CAD amounts must live in src/data/constants.ts only. Matches "$1,688",
// "$2488" and bare known price numbers. `${...}` template interpolation
// does not match (requires a digit right after the $).
const KNOWN_PRICES = /\b(1688|2488|2598|2398|2198|1588)\b/;
const DOLLAR_AMOUNT = /\$\d{1,3},\d{3}\b|\$\d{3,5}\b/;
for (const f of files.filter(f => !f.includes(`${sep}data${sep}`) && /\.(astro|jsx)$/.test(f))) {
  const c = readFileSync(f, 'utf8');
  const lines = c.split('\n');
  lines.forEach((line, i) => {
    if (DOLLAR_AMOUNT.test(line) || KNOWN_PRICES.test(line)) {
      failures.push(`${f}:${i + 1}: hardcoded price literal — import from src/data/constants.ts instead`);
    }
  });
}

// ── Check 7: EN ↔ ZH route parity ────────────────────────────
// Every src/pages/X.astro must have src/pages/zh/X.astro.
const PARITY_EXCEPTIONS = new Set([
  'sitemap.xml.ts',    // language-neutral
  'llms.txt.ts',       // language-neutral (links both language trees)
  'dash-8bc20e.astro', // internal unlisted dashboard (ZH UI, single page)
]);
const enPages = walk(PAGES, /\.(astro|ts)$/).filter(
  p => !relative(PAGES, p).startsWith('zh' + sep)
);
for (const p of enPages) {
  const rel = relative(PAGES, p);
  if (PARITY_EXCEPTIONS.has(rel)) continue;
  const zhTwin = join(PAGES, 'zh', rel);
  if (!existsSync(zhTwin)) {
    failures.push(`missing ZH mirror: src/pages/${rel} has no src/pages/zh/${rel}`);
  }
}

// ── Report ───────────────────────────────────────────────────
if (failures.length) {
  console.error('\n❌ Quality gate failed:\n');
  for (const e of failures) console.error(`- ${e}`);
  console.error('\nFix above issues before deploy.\n');
  process.exit(1);
}

console.log('✅ Quality gate passed');
