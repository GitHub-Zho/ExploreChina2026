// Single source of truth for trip card data.
// Used by: src/pages/trips/index.astro, src/pages/zh/trips/index.astro,
//          and the homepage itinerary section (src/pages/index.astro).

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
}

export const tripsMeta: TripMeta[] = [
  {
    id: 'east-china',
    href: '/trips/east-china-2026-summer',
    hrefZh: '/zh/trips/east-china-2026-summer',
    title: 'Ink & Empire',
    titleZh: '水墨与帝国',
    subtitle: 'Shanghai · Suzhou · Hangzhou · Beijing',
    subtitleZh: '上海 · 苏州 · 杭州 · 北京',
    status: 'open',
    image: '/images/highlights/suzhou-canal.jpg',
    imageAlt: 'Suzhou canal watertown',
    imageAltZh: '苏州运河古镇',
    description:
      'Canal towns, ancient gardens, West Lake, and the Forbidden City. Four cities in ten days — the most complete first-time China experience.',
    descriptionZh:
      '运河古镇、江南园林、西湖、故宫——十天四城，最完整的初次中国体验。',
    duration: '10 Days',
    durationZh: '10 天',
    cities: '4 Cities',
    citiesZh: '4 座城市',
    departure: 'Summer 2026',
    departureZh: '2026 年暑期',
    price: 'CAD ~$3,000',
  },
  {
    id: 'south-china',
    href: '/trips/south-china-2026-summer',
    hrefZh: '/zh/trips/south-china-2026-summer',
    title: 'Nanyang & Beyond',
    titleZh: '南洋之外',
    subtitle: 'Xiamen · Chaoshan · Shenzhen · Hong Kong',
    subtitleZh: '厦门 · 潮汕 · 深圳 · 香港',
    status: 'open',
    image: '/images/places/hongkong-hero-1.jpg',
    imageAlt: 'Hong Kong harbour skyline',
    imageAltZh: '香港维多利亚港夜景',
    description:
      'Coastal nostalgia, ancient Teochew civilization, China\'s fastest-growing city, and a harbour skyline that belongs to no easy category. Ten days through four very different Chinas.',
    descriptionZh:
      '海边的南洋气息、两千年潮州文明、中国建城速度最快的城市，还有那片说不清属于哪里的维多利亚港。十天，四座截然不同的中国城市。',
    duration: '10 Days',
    durationZh: '10 天',
    cities: '4 Cities',
    citiesZh: '4 座城市',
    departure: 'Summer 2026',
    departureZh: '2026 年暑期',
    price: 'CAD ~$2,598',
  },
  {
    id: 'yunnan',
    href: '/trips/yunnan-2026-summer',
    hrefZh: '/zh/trips/yunnan-2026-summer',
    title: 'South of the Clouds',
    titleZh: '云南之南',
    subtitle: 'Kunming · Lijiang · Dali · Kunming',
    subtitleZh: '昆明 · 丽江 · 大理 · 昆明',
    status: 'soon',
    image: '',
    imageAlt: 'Yunnan mountain landscape',
    imageAltZh: '云南山地风光',
    description:
      'Ancient towns, minority cultures, rice terraces, and mountain landscapes. A route through one of China\'s most visually distinct provinces.',
    descriptionZh:
      '古镇、少数民族文化、梯田与山地风光——中国视觉感最强烈的省份之一。',
    duration: '10 Days',
    durationZh: '10 天',
    cities: '4 Cities',
    citiesZh: '4 座城市',
    departure: 'TBD',
    departureZh: '待定',
    price: 'TBD',
  },
];
