import type { APIRoute } from 'astro';

const routes = [
  '',
  '/about',
  '/handbook',
  '/trips/explore-china-2026-summer',
  '/zh',
  '/zh/about',
  '/zh/handbook',
  '/zh/trips/explore-china-2026-summer',
];

export const GET: APIRoute = ({ site }) => {
  const baseUrl = site ?? new URL('https://www.explorechina.ca');
  const now = new Date().toISOString();

  const urls = routes
    .map((route) => {
      const url = new URL(route || '/', baseUrl).toString();
      return [
        '  <url>',
        `    <loc>${url}</loc>`,
        `    <lastmod>${now}</lastmod>`,
        '  </url>',
      ].join('\n');
    })
    .join('\n');

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    urls,
    '</urlset>',
  ].join('\n');

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
