// ─────────────────────────────────────────────────────────────
// Yunnan Route — coming-soon stub.
// Cities: Kunming → Lijiang → Dali → Kunming
//
// This file demonstrates the "add a trip" contract: a Trip with
// status 'coming-soon' renders as a listing card automatically
// and is excluded from the apply form (form: null) and from
// open-trip queries (getOpenTrips).
//
// To launch this trip:
//   1. Add YUNNAN_PRICE_CAD to src/data/constants.ts, set priceCad
//   2. Fill dates, itinerary, cityGuides, faq, includes/excludes,
//      highlightStrip, routeIntro, priceBreakdown, seo, form
//   3. Flip status to 'open'
//   4. Create the two page files (see README: "How to add a trip")
// ─────────────────────────────────────────────────────────────
import type { Trip } from '../types';

export const yunnanTrip: Trip = {
  kind: 'trip',
  id: 'yunnan-2026-summer',
  url: '/trips/yunnan-2026-summer',
  urlZh: '/zh/trips/yunnan-2026-summer',
  title: 'South of the Clouds',
  titleZh: '彩云之南',
  subtitle: 'Kunming · Lijiang · Dali · Kunming',
  subtitleZh: '昆明 · 丽江 · 大理 · 昆明',
  routeName: 'Kunming → Lijiang → Dali → Kunming',
  routeNameZh: '昆明 → 丽江 → 大理 → 昆明',
  status: 'coming-soon',
  heroImage: '/images/places/yunnan-horses-mountain.jpg',
  heroImageAlt: 'Horses and riders on a mountain ridge in Yunnan',
  heroImageAltZh: '云南山脊上的骑手与马队',
  tagline: 'Ethnic minority cultures, mountain towns, and the Tea Horse Road.',
  taglineZh: '少数民族文化、山地古镇与茶马古道。',
  duration: '10 days',
  durationZh: '10天',
  priceCad: null,
  priceDisplay: 'TBD',
  priceDisplayZh: '待定',
  groupSize: 'Max 20 participants',
  groupSizeZh: '最多 20 人',
  departureWindow: 'TBD',
  departureWindowZh: '待定',
  applicationDeadline: 'TBD',
  applicationDeadlineZh: '待定',
  summary:
    "The other China. Ethnic minority cultures, mountain towns older than most dynasties, and landscapes that never fully belonged to any single empire.",
  summaryZh:
    '另一个中国。少数民族文化、比大多数朝代更古老的山地古镇，以及从未完全归属于任何帝国的自然景观。',
  dates: [],
  highlights: [],
  highlightsZh: [],
  includes: [],
  includesZh: [],
  excludes: [],
  excludesZh: [],
  faq: [],
  faqZh: [],
  videos: [],
  itinerary: [],
  cityGuides: [],
  highlightStrip: null,
  routeIntro: null,
  priceBreakdown: null,
  card: {
    subtitle: 'Kunming · Lijiang · Dali · Kunming',
    subtitleZh: '昆明 · 丽江 · 大理 · 昆明',
    image: '/images/places/yunnan-horses-mountain.jpg',
    imageAlt: 'Horses and riders on a mountain ridge in Yunnan',
    imageAltZh: '云南山脊上的骑手与马队',
    description:
      "The other China. Ethnic minority cultures, mountain towns older than most dynasties, and landscapes that never fully belonged to any single empire. After ten days here, you stop thinking of 'China' as one thing.",
    descriptionZh:
      '另一个中国。少数民族文化、比大多数朝代更古老的山地古镇，以及从未完全归属于任何帝国的自然景观。在这里待过十天，你会停止把"中国"当成一件事情来理解。',
    duration: '10 Days',
    durationZh: '10 天',
    cities: '4 Cities',
    citiesZh: '4 座城市',
    sealChar: '山',
    arcTitle: 'Mountain & Frontier',
    arcTitleZh: '山 · 边疆之路',
    culturalFocus: 'Bai Ethnic Culture · Naxi Heritage · Tea Horse Road · Alpine Landscapes',
    culturalFocusZh: '白族 · 纳西族 · 茶马古道 · 高原自然',
  },
  form: null,
  seo: {
    description: 'Yunnan student travel route — Kunming, Lijiang, Dali. Coming soon.',
    descriptionZh: '云南学生旅行线路——昆明、丽江、大理。即将上线。',
  },
};
