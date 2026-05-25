import { southChinaItinerary, southChinaCityGuides } from './trips/south-china';
import { eastChinaItinerary, eastChinaCityGuides } from './trips/east-china';

export const EAST_CHINA_PRICE_CAD = 2488;
export const SOUTH_CHINA_PRICE_CAD = 1688;

export const POLICY = {
  depositPct: 30,
  balanceDueNote: '1 month before departure',
  balanceDueNoteZh: '出发前一个月',
  refundBeforeDeadline: 'Full refund minus deposit',
  refundBeforeDeadlineZh: '全额退款（定金不退）',
  refundAfterDeadline: '30% of total trip cost',
  refundAfterDeadlineZh: '退还总费用的30%',
  refundDeadline: '30 days before departure',
  refundDeadlineZh: '出发前30天',
} as const;

export interface TripDate {
  label: string;
  labelZh: string;
  start: string; // ISO date or '' if not yet confirmed
  end: string;   // ISO date or '' if not yet confirmed
}

export interface Trip {
  id: string;
  url: string;
  urlZh: string;
  title: string;
  titleZh: string;
  subtitle: string;       // one-line summary / tagline
  subtitleZh: string;
  routeName: string;      // city route string, e.g. "Shanghai → Suzhou → Hangzhou → Beijing"
  routeNameZh: string;
  heroImage: string;
  tagline: string;        // short evocative line (used in cards)
  taglineZh: string;
  duration: string;
  price: string;
  status: 'open' | 'coming-soon' | 'closed';
  dates: TripDate[];
  highlights: string[];
  highlightsZh: string[];
  includes: string[];
  includesZh: string[];
  excludes: string[];
  excludesZh: string[];
  summary: string;
  summaryZh: string;
  departureWindow: string;
  departureWindowZh: string;
  priceCad: string;
  priceCadZh: string;
  groupSize: string;
  groupSizeZh: string;
  applicationDeadline: string;
  applicationDeadlineZh: string;
  itinerary: any[];
  cityGuides: any[];
}

export const TRIPS: Trip[] = [
  {
    id: 'east-china-2026-summer',
    url: '/trips/east-china-2026-summer',
    urlZh: '/zh/trips/east-china-2026-summer',
    title: 'Old Souls, New Lights',
    titleZh: '古韵今潮',
    subtitle:
      'A structured, student-friendly China route blending city icons, food culture, local atmosphere, and practical support from arrival to departure.',
    subtitleZh:
      '这是一条为学生与年轻旅行者设计的中国深度线路：把城市地标、本地生活感、同龄社交交流与清晰可靠的执行支持结合在一起。',
    routeName: 'Shanghai → Suzhou → Hangzhou → Beijing',
    routeNameZh: '上海 → 苏州 → 杭州 → 北京',
    heroImage: '/images/highlights/forbidden-city.jpg',
    tagline: 'Canal towns, ancient gardens, West Lake, and the Forbidden City.',
    taglineZh: '运河古镇、江南园林、西湖、故宫。',
    duration: '10 days',
    price: `CAD $${EAST_CHINA_PRICE_CAD}`,
    status: 'open',
    summary:
      'Imperial Beijing, classical gardens of Suzhou and Hangzhou, and Shanghai rewriting itself every ten years.',
    summaryZh:
      '帝都北京、江南园林、改写自身的现代上海。',
    departureWindow: 'Jul 8, 2026',
    departureWindowZh: '2026年7月8日',
    priceCad: `CAD $${EAST_CHINA_PRICE_CAD.toLocaleString()} per person (excluding international flights)`,
    priceCadZh: `CAD $${EAST_CHINA_PRICE_CAD.toLocaleString()} / 人（不含国际机票）`,
    groupSize: 'Max 20 participants',
    groupSizeZh: '最多 20 人',
    applicationDeadline: 'May 31, 2026',
    applicationDeadlineZh: '2026年5月31日',
    dates: [
      { label: 'Jul 8 – Jul 17, 2026', labelZh: '2026年7月8日 – 7月17日', start: '2026-07-08', end: '2026-07-17' },
    ],
    highlights: [
      'Airport arrival support + first-day China essentials setup',
      'A balanced route from iconic landmarks to local student exchange',
      'Clear structure with guided blocks plus flexible city time',
      'Practical support for SIM, payments, navigation, and transition days',
      'A closing social night that makes the route feel shared, not transactional',
    ],
    highlightsZh: [
      '抵达支持 + 入境后基础设置帮助',
      '地标行程与本地学生交流结合，不只是打卡',
      '结构清晰，同时保留可控的自由探索时间',
      '支付、网络、导航、转场等实际问题都有支持',
      '以结营社交夜收束，让旅程更像一段共享记忆',
    ],
    includes: [
      '4–5 star hotel accommodation in a shared twin-room setup',
      'In-China transportation according to the finalized itinerary',
      'Core attraction tickets and selected group activities',
      'Organizer coordination before departure and on the ground',
      'Language support during logistics-heavy and key cultural moments',
      'A post-registration setup guide for payments, SIM, and arrival readiness',
    ],
    includesZh: [
      '4–5星酒店住宿（默认双人间）',
      '按最终行程执行的境内交通',
      '核心景点门票与指定团体活动',
      '出发前与在地执行期间的组织协调支持',
      '在关键物流与文化场景中的语言支持',
      '报名确认后的支付、网络与入境准备指南',
    ],
    excludes: [
      'International flights to and from China',
      'Visa-related costs if policy changes before departure',
      'Travel insurance and personal medical expenses',
      'Optional room upgrades, shopping, and personal nightlife spending',
      'Meals or add-ons outside the stated group plan',
    ],
    excludesZh: [
      '往返中国的国际机票',
      '如政策变化产生的签证相关费用',
      '旅行保险与个人医疗支出',
      '单房升级、购物及个人夜生活消费',
      '团体计划之外的餐饮与个人加项',
    ],
    itinerary: eastChinaItinerary,
    cityGuides: eastChinaCityGuides,
  },
  {
    id: 'south-china-2026-summer',
    url: '/trips/south-china-2026-summer',
    urlZh: '/zh/trips/south-china-2026-summer',
    title: 'Nanyang & Beyond',
    titleZh: '只此南洋',
    subtitle:
      "A coastal and urban South China route — Xiamen's sea-worn colonial lanes, Chaoshan's ancient Teochew rituals, Shenzhen's speed-built ambition, and Hong Kong's layered East-West intensity. Four cities, four completely different registers of what China can be.",
    subtitleZh:
      '从厦门的闽南海岸气息、潮汕沉淀千年的茶道与古城，到深圳的速度与创意，再到香港的东西交融——这条路线带你见证中国南方最多元的四种面貌。',
    routeName: 'Xiamen → Quanzhou → Chaoshan → Shenzhen',
    routeNameZh: '厦门 → 泉州 → 潮汕 → 深圳',
    heroImage: '/images/places/south-china-tower-forest.jpg',
    tagline:
      "Coastal nostalgia, ancient Teochew civilization, China's fastest-growing city, and a harbour skyline that belongs to no easy category.",
    taglineZh:
      '海边的南洋气息、两千年潮州文明、中国建城速度最快的城市，还有那片说不清属于哪里的维多利亚港。',
    duration: '10 days',
    price: `CAD $${SOUTH_CHINA_PRICE_CAD.toLocaleString()}`,
    status: 'open',
    summary:
      "Quanzhou was once the world's busiest port. Chaozhou kept tea ceremony and ancestral rituals intact for a thousand years. Xiamen faces the sea its emigrants crossed. Shenzhen built itself in forty years on the same shoreline.",
    summaryZh:
      '泉州曾是全球最繁忙的港口。潮州将功夫茶与祭祖礼仪完整保存了千年。厦门望着祖先渡过的那片海。深圳在同一片海岸线上，四十年建起了一座新城。',
    departureWindow: 'Jul 20, 2026',
    departureWindowZh: '2026年7月20日',
    priceCad: `CAD $${SOUTH_CHINA_PRICE_CAD.toLocaleString()} per person (excluding international flights)`,
    priceCadZh: `CAD $${SOUTH_CHINA_PRICE_CAD.toLocaleString()} / 人（不含国际机票）`,
    groupSize: 'Max 20 participants',
    groupSizeZh: '最多 20 人',
    applicationDeadline: 'May 31, 2026',
    applicationDeadlineZh: '2026年5月31日',
    dates: [
      { label: 'Jul 20 – Jul 29, 2026', labelZh: '2026年7月20日 – 7月29日', start: '2026-07-20', end: '2026-07-29' },
    ],
    // ⚠ No highlights array existed in south-china.ts — using subtitle points as placeholder
    highlights: [
      "Xiamen's colonial Gulangyu Island — 13 former consulates, no cars",
      'Ancient Chaozhou city and Gongfu tea ceremony',
      'Shantou, the original Teochew diaspora port city',
      'Shenzhen — from fishing village to global tech hub in 40 years',
      "Hong Kong harbour skyline and East-West urban intensity",
    ],
    highlightsZh: [
      '厦门鼓浪屿——13国领事馆旧址，无机动车小岛',
      '潮州古城与功夫茶道',
      '汕头——最初的潮汕移民出洋港口城市',
      '深圳——40年从渔村到全球科技中心',
      '香港维多利亚港与东西交融的城市张力',
    ],
    includes: [
      '4–5 star hotel accommodation in a shared twin-room setup',
      'In-China transportation for the full route (trains, ferries, border crossing logistics)',
      'Core attraction tickets and selected group experiences',
      'Hong Kong–Shenzhen border crossing coordination and briefing',
      'Organizer coordination and on-the-ground support throughout',
      'Language support during logistics-heavy and key cultural moments',
      'Pre-departure setup guide for payments, SIM, and arrival readiness',
      'Group WhatsApp and pre-trip orientation call',
    ],
    includesZh: [
      '4–5星酒店住宿（默认双人间）',
      '全程境内交通（高铁、轮渡、深港过境物流协调）',
      '核心景点门票与指定团体活动',
      '深港过境协调与行前说明',
      '全程组织协调与在地执行支持',
      '在关键物流与文化场景中的语言支持',
      '报名确认后的支付、网络与入境准备指南',
      '团队WhatsApp群与行前说明会',
    ],
    excludes: [
      'International flights to Xiamen and from Hong Kong',
      'Hong Kong hotel (nights in HK are not included — participants arrange independently or we can assist)',
      'Travel insurance and personal medical expenses',
      'Visa-related costs if policy changes before departure',
      'Optional room upgrades, personal shopping, and nightlife spending',
    ],
    excludesZh: [
      '往返国际机票（进出厦门/香港）',
      '香港住宿（港方住宿需自行安排，可提供建议）',
      '旅行保险与个人医疗支出',
      '如政策变化产生的签证相关费用',
      '单房升级、个人购物与娱乐消费',
    ],
    itinerary: southChinaItinerary,
    cityGuides: southChinaCityGuides,
  },
];

export const getTripById = (id: string): Trip | undefined =>
  TRIPS.find(t => t.id === id);

export const getOpenTrips = (): Trip[] =>
  TRIPS.filter(t => t.status === 'open');

export const getTripByUrl = (url: string): Trip | undefined =>
  TRIPS.find(t => t.url === url || t.urlZh === url);
