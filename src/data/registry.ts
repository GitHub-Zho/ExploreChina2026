// ─────────────────────────────────────────────────────────────
// Offering registry — the single entry point for trip data.
//
// Each trip lives in ONE file under src/data/trips/ as a typed
// `Trip` object. This module assembles them, exposes lookup
// helpers, and derives the card projection used by listing pages.
//
// Adding a trip = create the data file, import it, append to
// TRIPS. Cards, sitemap, and the apply form pick it up from here.
// (Future product families — e.g. consulting services — get their
// own directory + type and join an Offering union in types.ts.)
// ─────────────────────────────────────────────────────────────
import type { Trip, TripDate } from './types';
import { eastChinaTrip } from './trips/east-china';
import { southChinaTrip } from './trips/south-china';
import { yunnanTrip } from './trips/yunnan';

// Shared constants re-exported so consumers have one import path.
export {
  EAST_CHINA_PRICE_CAD,
  SOUTH_CHINA_PRICE_CAD,
  COMBO_TRANSITION_FEE_CAD,
  POLICY,
} from './constants';
export type { Trip, TripDate } from './types';

export const TRIPS: Trip[] = [eastChinaTrip, southChinaTrip, yunnanTrip];

export const getTripById = (id: string): Trip | undefined =>
  TRIPS.find(t => t.id === id);

export const getOpenTrips = (): Trip[] =>
  TRIPS.filter(t => t.status === 'open');

export const getTripByUrl = (url: string): Trip | undefined =>
  TRIPS.find(t => t.url === url || t.urlZh === url);

// ─────────────────────────────────────────────────────────────
// Card projection — derived, never hand-maintained.
// Listing pages and the homepage consume `tripsMeta`; every field
// comes from the trip objects, so card data can never contradict
// the canonical trip data.
// ─────────────────────────────────────────────────────────────

const MONTHS_EN = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const shortDate = (d: TripDate): string => {
  const [, m, day] = d.start.split('-').map(Number);
  return `${MONTHS_EN[m - 1]} ${day}`;
};

const shortDateZh = (d: TripDate): string => {
  const [, m, day] = d.start.split('-').map(Number);
  return `${m}月${day}日`;
};

export interface TripCardMeta {
  id: string;
  href: string;
  hrefZh: string;
  title: string;
  titleZh: string;
  subtitle: string;
  subtitleZh: string;
  status: 'open' | 'soon';
  image: string;
  imageAlt: string;
  imageAltZh: string;
  description: string;
  descriptionZh: string;
  duration: string;
  durationZh: string;
  cities: string;
  citiesZh: string;
  departure: string;
  departureZh: string;
  price: string;
  sealChar: string;
  arcTitle: string;
  arcTitleZh: string;
  culturalFocus: string;
  culturalFocusZh: string;
}

const toCardMeta = (t: Trip): TripCardMeta => ({
  id: t.id,
  href: t.url,
  hrefZh: t.urlZh,
  title: t.title,
  titleZh: t.titleZh,
  subtitle: t.card.subtitle,
  subtitleZh: t.card.subtitleZh,
  status: t.status === 'open' ? 'open' : 'soon',
  image: t.card.image,
  imageAlt: t.card.imageAlt,
  imageAltZh: t.card.imageAltZh,
  description: t.card.description,
  descriptionZh: t.card.descriptionZh,
  duration: t.card.duration,
  durationZh: t.card.durationZh,
  cities: t.card.cities,
  citiesZh: t.card.citiesZh,
  departure: t.dates.length ? t.dates.map(shortDate).join(' & ') : 'TBD',
  departureZh: t.dates.length ? t.dates.map(shortDateZh).join(' / ') : '待定',
  price: t.priceCad != null ? `CAD ~$${t.priceCad.toLocaleString()}` : 'TBD',
  sealChar: t.card.sealChar,
  arcTitle: t.card.arcTitle,
  arcTitleZh: t.card.arcTitleZh,
  culturalFocus: t.card.culturalFocus,
  culturalFocusZh: t.card.culturalFocusZh,
});

export const tripsMeta: TripCardMeta[] = TRIPS.map(toCardMeta);
