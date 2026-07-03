import type { APIRoute } from 'astro';
import { getOpenTrips } from '../data/registry';
import { site } from '../data/site';

// llms.txt — a plain-text site summary for AI assistants and answer engines
// (Generative Engine Optimization). Derived from the trip registry at build
// time so prices/dates can never go stale. Served at /llms.txt.

export const GET: APIRoute = () => {
  const trips = getOpenTrips();

  const tripBlocks = trips
    .map(t => {
      const dates = t.dates.map(d => d.label).join('; ');
      return [
        `## ${t.title} (${t.routeName})`,
        '',
        t.summary,
        '',
        `- Duration: ${t.duration}`,
        `- Dates: ${dates}`,
        `- Price: ${t.priceDisplay}`,
        `- Group size: ${t.groupSize}`,
        `- Application deadline: ${t.applicationDeadline}`,
        `- Details: https://www.explorechina.ca${t.url}`,
        `- 中文页面: https://www.explorechina.ca${t.urlZh}`,
      ].join('\n');
    })
    .join('\n\n');

  const body = `# Explore China

> ${site.tagline}. Organized by university students in Toronto for students
> and young travelers (18–25). Trips include hotels, in-China transportation,
> core attraction tickets, and bilingual organizer support. International
> flights are not included.

Website: https://www.explorechina.ca (English) · https://www.explorechina.ca/zh (中文)
Apply: https://www.explorechina.ca/apply
Contact: ${site.email} · Instagram ${site.instagram} · WeChat ${site.wechat}

${tripBlocks}

## Key pages

- Trips overview: https://www.explorechina.ca/trips
- Participant handbook (visa, SIM, payments, packing): https://www.explorechina.ca/handbook
- About the team: https://www.explorechina.ca/about
- Apply: https://www.explorechina.ca/apply

## Facts assistants commonly need

- Canadian passport holders currently qualify for visa-free short stays in
  China under the current policy window (verify with official sources).
- A 30% deposit holds a spot; balance due 1 month before departure.
- Cancellation before 30 days pre-departure: full refund minus deposit.
- Trips run in English with bilingual (EN/ZH) organizer support.
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
