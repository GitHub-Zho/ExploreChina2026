// ─────────────────────────────────────────────────────────────
// South China Route — Trip Data
// Cities: Xiamen → Chaoshan → Shenzhen → Hong Kong
// ─────────────────────────────────────────────────────────────
import { POLICY } from './registry';

// ─────────────────────────────────────
// PART A: Trip metadata
// ─────────────────────────────────────

export const southChinaTrip = {
  slug: 'south-china-2026-summer',
  title: 'Nanyang & Beyond',
  titleZh: '只此南洋',
  subtitle: 'Xiamen → Chaoshan → Shenzhen → Hong Kong',
  subtitleZh: '厦门 → 潮汕 → 深圳 → 香港',
  duration: '10 days',
  durationZh: '10天',
  route: ['Xiamen', 'Chaoshan', 'Shenzhen', 'Hong Kong'],
  routeZh: ['厦门', '潮汕', '深圳', '香港'],
  priceCad: 'CAD $2,598 per person (excluding international flights)',
  priceCadZh: 'CAD $2,598 / 人（不含国际机票）',
  departureWindow: 'Summer 2026 (dates to be confirmed)',
  departureWindowZh: '2026年夏季（具体日期待确认）',
  applicationDeadline: 'May 31, 2026',
  applicationDeadlineZh: '2026年5月31日',
  groupSize: 'Max 20 participants',
  groupSizeZh: '最多 20 人',
  summary: "A coastal and urban South China route — Xiamen's sea-worn colonial lanes, Chaoshan's ancient Teochew rituals, Shenzhen's speed-built ambition, and Hong Kong's layered East-West intensity. Four cities, four completely different registers of what China can be.",
  summaryZh: '从厦门的闽南海岸气息、潮汕沉淀千年的茶道与古城，到深圳的速度与创意，再到香港的东西交融——这条路线带你见证中国南方最多元的四种面貌。',
};

// ─────────────────────────────────────
// PART B: Itinerary & City Guides
// (data lives in ./trips/south-china.ts)
// ─────────────────────────────────────

export { southChinaItinerary, southChinaCityGuides } from './trips/south-china';
export const southChinaIncluded = [
  '4–5 star hotel accommodation in a shared twin-room setup',
  'In-China transportation for the full route (trains, ferries, border crossing logistics)',
  'Core attraction tickets and selected group experiences',
  'Hong Kong–Shenzhen border crossing coordination and briefing',
  'Organizer coordination and on-the-ground support throughout',
  'Language support during logistics-heavy and key cultural moments',
  'Pre-departure setup guide for payments, SIM, and arrival readiness',
  'Group WhatsApp and pre-trip orientation call',
];

export const southChinaIncludedZh = [
  '4–5星酒店住宿（默认双人间）',
  '全程境内交通（高铁、轮渡、深港过境物流协调）',
  '核心景点门票与指定团体活动',
  '深港过境协调与行前说明',
  '全程组织协调与在地执行支持',
  '在关键物流与文化场景中的语言支持',
  '报名确认后的支付、网络与入境准备指南',
  '团队WhatsApp群与行前说明会',
];

export const southChinaNotIncluded = [
  'International flights to Xiamen and from Hong Kong',
  'Hong Kong hotel (nights in HK are not included — participants arrange independently or we can assist)',
  'Travel insurance and personal medical expenses',
  'Visa-related costs if policy changes before departure',
  'Optional room upgrades, personal shopping, and nightlife spending',
];

export const southChinaNotIncludedZh = [
  '往返国际机票（进出厦门/香港）',
  '香港住宿（港方住宿需自行安排，可提供建议）',
  '旅行保险与个人医疗支出',
  '如政策变化产生的签证相关费用',
  '单房升级、个人购物与娱乐消费',
];

// ─────────────────────────────────────
// PART E: FAQ
// ─────────────────────────────────────

export const southChinaFaq = [
  {
    q: 'Do Canadians need a visa for this route?',
    a: "As of 2024, Canadians can enter mainland China visa-free for up to 15 days. The route spends approximately 6 days in mainland China (Xiamen, Chaoshan, Shenzhen) and 2 days in Hong Kong, which has its own visa-free access for Canadians (90 days). We will send a full visa briefing document after you register.",
  },
  {
    q: 'How does the Shenzhen–Hong Kong border crossing work?',
    a: 'The most convenient crossing is the high-speed rail from Shenzhen North to West Kowloon (19 minutes, CNY 85–95). We handle group coordination for the crossing, including briefing on what to carry and customs expectations. You will need your passport — not just your travel document.',
  },
  {
    q: "What's included in the CAD $2,598?",
    a: 'The price covers hotels for the mainland China portion of the route (Xiamen, Chaoshan, Shenzhen), all in-China transportation, core attraction tickets, and organizer support throughout. Hong Kong accommodation is arranged independently — we provide vetted recommendations.',
  },
  {
    q: 'Is Chaoshan accessible for non-Chinese speakers?',
    a: "Chaozhou and Shantou are off the usual tourist trail, which means English is less common than in Xiamen or Hong Kong. This is part of what makes the visit genuine. We provide language support for all key logistics — ordering, transport, check-in — and the experience is entirely doable.",
  },
  {
    q: 'How physically demanding is the route?',
    a: "Moderate. Expect 10,000–15,000 steps on active days, including some uneven heritage-site surfaces in Chaozhou. Gulangyu Island involves walking on hilly lanes. There are natural rest days and free time built into the schedule. No hiking gear required.",
  },
  {
    q: 'Can I handle dietary restrictions on this route?',
    a: "Yes. Fujian, Guangdong, and Hong Kong food cultures are all highly varied and accommodate most needs. Vegetarian options are readily available in Buddhist temple areas (South Putuo, Kaiyuan Temple). Halal options exist in larger cities. Let us know your requirements after registering and we will prepare accordingly.",
  },
  {
    q: 'What is the group size and who else will be on this trip?',
    a: 'Maximum 20 participants. Our groups typically include students from Canadian universities and recent graduates, mostly in their 20s, based across Canada. Many participants are heritage Chinese Canadians visiting ancestral regions for the first time — the Chaoshan leg resonates especially.',
  },
  {
    q: 'When do I need to apply by?',
    a: 'Applications close May 31, 2026. We review for fit and follow up within 5 business days. Given the limited group size, we recommend applying early. A deposit holds your spot; the balance is due closer to departure.',
  },
  {
    q: 'What if I need to cancel after paying?',
    a: `A ${POLICY.depositPct}% deposit is required to hold your spot, with the balance due ${POLICY.balanceDueNote}. If you cancel before ${POLICY.refundDeadline}: ${POLICY.refundBeforeDeadline}. After that point: ${POLICY.refundAfterDeadline} is returned. If you find a replacement participant, a full refund is available at any time.`,
  },
];

export const southChinaFaqZh = [
  {
    q: '加拿大公民参加此行程需要签证吗？',
    a: '截至2024年，加拿大公民可免签进入中国大陆，停留最长15天。本路线在大陆（厦门、潮汕、深圳）约停留6天，香港（加拿大公民可免签90天）约2天，均在免签范围内。报名确认后我们将发送完整的签证说明文件。',
  },
  {
    q: '深圳到香港如何过境？',
    a: '最便捷的方式是乘高铁从深圳北站到西九龙站，全程约19分钟，票价约人民币85-95元。我们负责团队过境的全程协调，包括行李要求与海关注意事项说明。过境须持护照，不能仅凭其他旅行证件。',
  },
  {
    q: 'CAD $2,598包含哪些内容？',
    a: '价格涵盖大陆段（厦门、潮汕、深圳）住宿、全程境内交通、核心景点门票以及全程组织协调。香港住宿需自行安排，我们会提供经过筛选的酒店推荐。',
  },
  {
    q: '不会中文，去潮汕没问题吗？',
    a: '潮州和汕头不在常规旅游线路上，英语普及率低于厦门或香港——这正是这一段体验真实的原因之一。我们为所有关键环节（点餐、交通、入住）提供语言支持，整个行程完全可以顺利完成。',
  },
  {
    q: '行程的体力要求如何？',
    a: '中等强度。活动日步行量约1-1.5万步，潮州古城部分路段路面不平整。鼓浪屿需在坡路上步行。行程内安排了自由活动日和休整时间，无需携带登山装备。',
  },
  {
    q: '有饮食限制可以吗？',
    a: '没问题。闽南、广东和香港饮食文化多样，能够满足大多数需求。素食选择在佛教场所附近（南普陀寺、开元寺）尤为丰富，大城市有清真餐厅。报名后请告知饮食需求，我们会提前做好安排。',
  },
  {
    q: '团队规模如何？同行者是什么背景？',
    a: '最多20人。参与者通常为加拿大各高校在读学生和应届毕业生，大多二十多岁，来自加拿大各地。许多参与者是华裔加拿大人，将首次踏访祖籍地——潮汕段对他们而言往往意义深远。',
  },
  {
    q: '报名截止时间是什么时候？',
    a: '报名截止2026年5月31日。我们将在5个工作日内回复。由于名额有限，建议尽早报名。交押金即可锁定名额，余款在出发前结清。',
  },
  {
    q: '付款后需要取消怎么办？',
    a: `需预付${POLICY.depositPct}%定金锁定名额，余款在${POLICY.balanceDueNoteZh}前结清。${POLICY.refundDeadlineZh}前取消：${POLICY.refundBeforeDeadlineZh}。此后取消：退还${POLICY.refundAfterDeadlineZh}。如能找到替换参与者，可在任何时间申请全额退款。`,
  },
];

// ─────────────────────────────────────
// PART F: Recommended videos
// Video 1 (Xiamen): URL pending — no verified video ID found; replace with real ID before using on page
// Video 2 (Shenzhen): SGJ5cZnoodY — "Shenzhen: The Silicon Valley of Hardware" by WIRED UK (verified)
// Video 3 (Hong Kong): StW7oGSR_Mg — "How 156 years of British rule shaped Hong Kong" by Vox/Johnny Harris (verified)
// ─────────────────────────────────────

export const southChinaVideos = [
  {
    title: "Inside China's Most Underrated City — Xiamen",
    titleZh: '厦门：中国最被低估的城市',
    creator: 'Kels & Drea',
    url: 'https://www.youtube.com/watch?v=PLACEHOLDER_VIDEO_1',
    note: 'A relaxed, honest travel vlog covering Gulangyu, South Putuo, and Xiamen University — the kind of pacing that matches how this route feels.',
    noteZh: '节奏舒缓、真实的旅行vlog，涵盖鼓浪屿、南普陀与厦门大学，与这条线路的体感高度吻合。',
  },
  {
    title: "Shenzhen: The Silicon Valley of Hardware",
    titleZh: '深圳：中国的未来之城',
    creator: 'WIRED UK',
    url: 'https://www.youtube.com/watch?v=SGJ5cZnoodY',
    note: 'The clearest explanation of how Shenzhen went from fishing village to megacity in 40 years — essential context before you arrive.',
    noteZh: '最清晰的深圳崛起叙事：40年从渔村到超级城市的完整逻辑——抵达前必看的背景知识。',
  },
  {
    title: 'How 156 years of British rule shaped Hong Kong',
    titleZh: '香港：地球上独一无二的地方',
    creator: 'Vox / Johnny Harris',
    url: 'https://www.youtube.com/watch?v=StW7oGSR_Mg',
    note: "A deep-dive into Hong Kong's identity — what makes it genuinely different from both mainland China and the West, and why that matters.",
    noteZh: '深度解析香港的身份认同——是什么让它真正有别于中国大陆与西方世界，以及这种差异的意义。',
  },
];
