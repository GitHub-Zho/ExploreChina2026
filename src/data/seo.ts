// ─────────────────────────────────────────────────────────────
// Structured-data (JSON-LD) derivation — single source.
//
// Trip pages pass `structuredData={tripJsonLd(trip, lang)}` to Layout
// instead of hand-writing schema blocks. Everything derives from the
// Trip object, so schema can never contradict page content, and all
// four trip pages (EN + ZH) emit the same rich markup:
//   TouristTrip (with Offer + provider + image)
//   FAQPage     (mirrors the on-page FAQ — a direct answer-engine feed)
//   BreadcrumbList
// ─────────────────────────────────────────────────────────────
import type { Trip } from './types';
import { site } from './site';

const BASE = 'https://www.explorechina.ca';

export function tripJsonLd(trip: Trip, lang: 'en' | 'zh'): Record<string, unknown>[] {
  const zh = lang === 'zh';
  const url = BASE + (zh ? trip.urlZh : trip.url);
  const faq = zh ? trip.faqZh : trip.faq;

  const touristTrip: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name: zh ? trip.titleZh : trip.title,
    description: zh ? trip.seo.descriptionZh : trip.seo.description,
    url,
    image: BASE + trip.heroImage,
    touristType: zh ? '来自加拿大的在校学生与年轻旅行者' : 'Students and young travelers from Canada',
    itinerary: trip.itinerary.map(d =>
      zh ? `${d.dayZh}: ${d.cityZh} - ${d.titleZh}` : `${d.day}: ${d.city} - ${d.title}`
    ),
    provider: {
      '@type': 'Organization',
      name: site.name,
      url: BASE + '/',
      email: site.email,
    },
  };
  if (trip.priceCad != null) {
    touristTrip.offers = {
      '@type': 'Offer',
      price: trip.priceCad,
      priceCurrency: 'CAD',
      availability: 'https://schema.org/InStock',
      url: BASE + '/apply',
      description: zh ? trip.priceDisplayZh : trip.priceDisplay,
    };
  }

  const blocks: Record<string, unknown>[] = [touristTrip];

  if (faq.length) {
    blocks.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faq.map(f => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    });
  }

  blocks.push({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: zh ? '首页' : 'Home', item: BASE + (zh ? '/zh' : '/') },
      { '@type': 'ListItem', position: 2, name: zh ? '线路' : 'Trips', item: BASE + (zh ? '/zh/trips' : '/trips') },
      { '@type': 'ListItem', position: 3, name: zh ? trip.titleZh : trip.title, item: url },
    ],
  });

  return blocks;
}
