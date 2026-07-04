// ─────────────────────────────────────────────────────────────
// Shared type definitions for all offering data.
//
// Types only — zero runtime code, so this module can never
// participate in an import cycle. Everything in src/data/trips/*
// must conform to `Trip`; pages and components import these types
// instead of redeclaring local shapes.
//
// Extensibility contract: `Trip` carries `kind: 'trip'`. A future
// product family (e.g. consulting services) adds its own interface
// with `kind: 'service'` and joins an `Offering` union here without
// touching any existing trip code.
// ─────────────────────────────────────────────────────────────

export type TripStatus = 'open' | 'coming-soon' | 'closed';

export interface TripDate {
  label: string;
  labelZh: string;
  start: string; // ISO date, '' if not yet confirmed
  end: string;   // ISO date, '' if not yet confirmed
}

export interface Landmark {
  name: string;
  nameZh: string;
  image: string;
  background: string;
  backgroundZh: string;
}

export interface ItineraryDay {
  day: string;
  dayZh: string;
  city: string;
  cityZh: string;
  title: string;
  titleZh: string;
  plan: string;
  planZh: string;
  landmarks: Landmark[];
}

export interface ExploreSpot {
  title: string;
  titleZh: string;
  /** Optional — some text-only spots (e.g. snack/tea stops) have no image. */
  image?: string;
  description: string;
  descriptionZh: string;
}

export interface FoodHighlight {
  title: string;
  titleZh: string;
  description: string;
  descriptionZh: string;
}

export interface CityGuide {
  city: string;
  cityZh: string;
  heroImage: string;
  heroAlt: string;
  intro: string;
  introZh: string;
  context: string;
  contextZh: string;
  feeling: string;
  feelingZh: string;
  explore: ExploreSpot[];
  foodHighlight: FoodHighlight;
  gallery?: string[];
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface Video {
  title: string;
  titleZh: string;
  creator: string;
  url: string;
  note: string;
  noteZh: string;
}

/** One card in the trip-page highlight marquee. */
export interface HighlightCard {
  src: string;
  alt: string;
  caption: string;
}

/**
 * Highlight marquee rows per language.
 * EN and ZH intentionally may hold different card sets
 * (the South China page does today) — do not force parity.
 */
export interface HighlightStrip {
  en: HighlightCard[][]; // rows; row 0 scrolls left, row 1 scrolls right
  zh: HighlightCard[][];
}

export interface RouteIntroPanel {
  city: string;
  cityZh: string;
  prose: string;
  proseZh: string;
}

/** The "route-intro" narrative section on trip pages. */
export interface RouteIntro {
  headline: string;
  headlineZh: string;
  body: string;
  bodyZh: string;
  pivot?: string;   // optional emphasized closing line inside the body
  pivotZh?: string;
  colophonHtml: string;   // raw HTML (may contain <br> and &nbsp;)
  colophonHtmlZh: string;
  panels: RouteIntroPanel[];
}

export interface PriceBreakdownItem {
  label: string;
  labelZh: string;
  /** May contain inline HTML like <strong>. */
  noteHtml: string;
  noteHtmlZh: string;
  pct: number;
}

/** Card-facing fields for listing pages and the homepage. */
export interface TripCardInfo {
  subtitle: string;
  subtitleZh: string;
  image: string;
  imageAlt: string;
  imageAltZh: string;
  description: string;
  descriptionZh: string;
  duration: string;
  durationZh: string;
  cities: string;
  citiesZh: string;
  sealChar: string;
  arcTitle: string;
  arcTitleZh: string;
  culturalFocus: string;
  culturalFocusZh: string;
}

/**
 * Fields the ApplyForm needs to render a selectable trip.
 * `scheduleId` is the value submitted to the Google Sheet —
 * never change it for an existing trip or historical rows
 * stop matching.
 */
export interface TripFormMeta {
  scheduleId: string;
  formLabel: string; // e.g. "Classic Route"
  arrive: string;
  depart: string;
  color: string;
}

export interface TripSeo {
  /** <title> for the EN page — lead with search keywords (route, "student
   *  trip", year), brand last. Keep ≤ ~62 chars so Google doesn't truncate. */
  title: string;
  titleZh: string;
  /** <meta name="description"> for the EN page. */
  description: string;
  /** <meta name="description"> for the ZH page. */
  descriptionZh: string;
}

/**
 * The complete data contract for one trip.
 * One file under src/data/trips/ exports exactly one Trip.
 * Pages, cards, sitemap, and the apply form all derive from it.
 */
export interface Trip {
  kind: 'trip';
  id: string;
  url: string;
  urlZh: string;
  title: string;
  titleZh: string;
  subtitle: string;
  subtitleZh: string;
  routeName: string;
  routeNameZh: string;
  status: TripStatus;
  heroImage: string;
  heroImageAlt: string;
  heroImageAltZh: string;
  tagline: string;
  taglineZh: string;
  duration: string;
  durationZh: string;
  /** Price as a number for math; null while TBD. */
  priceCad: number | null;
  /** Display strings shown on the trip-strip fact bar. */
  priceDisplay: string;
  priceDisplayZh: string;
  groupSize: string;
  groupSizeZh: string;
  departureWindow: string;
  departureWindowZh: string;
  applicationDeadline: string;
  applicationDeadlineZh: string;
  summary: string;
  summaryZh: string;
  dates: TripDate[];
  highlights: string[];
  highlightsZh: string[];
  includes: string[];
  includesZh: string[];
  excludes: string[];
  excludesZh: string[];
  faq: FaqItem[];
  faqZh: FaqItem[];
  videos: Video[];
  itinerary: ItineraryDay[];
  cityGuides: CityGuide[];
  /** null until the trip has a detail page. */
  highlightStrip: HighlightStrip | null;
  routeIntro: RouteIntro | null;
  priceBreakdown: PriceBreakdownItem[] | null;
  card: TripCardInfo;
  /** null = not selectable in the apply form yet. */
  form: TripFormMeta | null;
  seo: TripSeo;
}

/**
 * Union of all offering kinds. Currently trips only.
 * When consulting services land: `export type Offering = Trip | Service;`
 */
export type Offering = Trip;
