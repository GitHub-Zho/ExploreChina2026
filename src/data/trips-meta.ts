// Single source of truth for trip card data.
// Used by: src/pages/trips/index.astro, src/pages/zh/trips/index.astro,
//          and the homepage itinerary section (src/pages/index.astro).
//
// Route names (title/titleZh) are imported from the canonical trip data files
// so changing a name in site.ts or south-china.ts updates everywhere at once.

import { currentTrip } from './site';
import { southChinaTrip } from './south-china';
import { EAST_CHINA_PRICE_CAD, SOUTH_CHINA_PRICE_CAD } from './registry';

export type TripStatus = 'open' | 'soon';

export interface TripMeta {
  id: string;
  href: string;
  hrefZh: string;
  title: string;
  titleZh: string;
  subtitle: string;
  subtitleZh: string;
  status: TripStatus;
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
  // Cultural identity fields
  sealChar: string;
  arcTitle: string;
  arcTitleZh: string;
  culturalFocus: string;
  culturalFocusZh: string;
}

export const tripsMeta: TripMeta[] = [
  {
    id: 'east-china',
    href: '/trips/east-china-2026-summer',
    hrefZh: '/zh/trips/east-china-2026-summer',
    title: currentTrip.title,        // ← site.ts
    titleZh: currentTrip.titleZh,    // ← site.ts
    subtitle: 'Shanghai · Suzhou · Hangzhou · Beijing',
    subtitleZh: '上海 · 苏州 · 杭州 · 北京',
    status: 'open',
    image: '/images/highlights/suzhou-canal.jpg',
    imageAlt: 'Suzhou canal watertown',
    imageAltZh: '苏州运河古镇',
    description:
      "A route through the spine of mainstream Chinese civilization. This is the China that shows up in most books and most heads — but the version most books get wrong is the scale. Everything is bigger, louder, and stranger than you expected.",
    descriptionZh:
      '中国主流文明的中轴线。这是出现在大多数书里的中国——但书里永远没写清楚的，是它的尺度。一切都比你想象的更宏大、更喧嚣、也更奇异。',
    duration: '10 Days',
    durationZh: '10 天',
    cities: '4 Cities',
    citiesZh: '4 座城市',
    departure: 'Jun 8 & Jul 8',
    departureZh: '6月8日 / 7月8日',
    price: `CAD ~$${EAST_CHINA_PRICE_CAD.toLocaleString()}`,
    sealChar: '都',
    arcTitle: 'The Dynastic Arc',
    arcTitleZh: '都 · 帝都弧线',
    culturalFocus: 'Imperial Authority · Literati Aesthetics · Classical Gardens · Urban Dynamism',
    culturalFocusZh: '皇权 · 文人审美 · 江南园林 · 当代都市张力',
  },
  {
    id: 'south-china',
    href: '/trips/south-china-2026-summer',
    hrefZh: '/zh/trips/south-china-2026-summer',
    title: southChinaTrip.title,     // ← south-china.ts
    titleZh: southChinaTrip.titleZh, // ← south-china.ts
    subtitle: 'Xiamen · Quanzhou · Chaoshan · Shenzhen',
    subtitleZh: '厦门 · 泉州 · 潮汕 · 深圳',
    status: 'open',
    image: '/images/places/xiamen-hero-1.jpg',
    imageAlt: 'Xiamen Gulangyu Island coastal view',
    imageAltZh: '厦门鼓浪屿海岸风光',
    description:
      "This is the coast Chinatowns came from. If you know anyone Chinese outside of China, their family probably left through here.",
    descriptionZh:
      '这是世界各地唐人街的出发地。如果你认识任何一个海外华人，他们的家族很可能从这里出发。',
    duration: '10 Days',
    durationZh: '10 天',
    cities: '4 Cities',
    citiesZh: '4 座城市',
    departure: 'Jun 20 & Jul 20',
    departureZh: '6月20日 / 7月20日',
    price: `CAD ~$${SOUTH_CHINA_PRICE_CAD.toLocaleString()}`,
    sealChar: '侨',
    arcTitle: 'The Diaspora Coast',
    arcTitleZh: '侨 · 离散海岸',
    culturalFocus: 'Mazu Maritime Faith · Gongfu Tea · Ancestral Clan Halls · Maritime Diaspora',
    culturalFocusZh: '妈祖信仰 · 功夫茶 · 宗祠族群 · 下南洋历史',
  },
  {
    // Yunnan has no data file yet — name managed here until one is created
    id: 'yunnan',
    href: '/trips/yunnan-2026-summer',
    hrefZh: '/zh/trips/yunnan-2026-summer',
    title: 'South of the Clouds',
    titleZh: '彩云之南',
    subtitle: 'Kunming · Lijiang · Dali · Kunming',
    subtitleZh: '昆明 · 丽江 · 大理 · 昆明',
    status: 'soon',
    image: '',
    imageAlt: 'Yunnan mountain landscape',
    imageAltZh: '云南山地风光',
    description:
      "The other China. Ethnic minority cultures, mountain towns older than most dynasties, and landscapes that never fully belonged to any single empire. After ten days here, you stop thinking of 'China' as one thing.",
    descriptionZh:
      '另一个中国。少数民族文化、比大多数朝代更古老的山地古镇，以及从未完全归属于任何帝国的自然景观。在这里待过十天，你会停止把"中国"当成一件事情来理解。',
    duration: '10 Days',
    durationZh: '10 天',
    cities: '4 Cities',
    citiesZh: '4 座城市',
    departure: 'TBD',
    departureZh: '待定',
    price: 'TBD',
    sealChar: '山',
    arcTitle: 'Mountain & Frontier',
    arcTitleZh: '山 · 边疆之路',
    culturalFocus: 'Bai Ethnic Culture · Naxi Heritage · Tea Horse Road · Alpine Landscapes',
    culturalFocusZh: '白族 · 纳西族 · 茶马古道 · 高原自然',
  },
];
