// ─────────────────────────────────────────────────────────────
// Site-wide configuration — contact channels and shared page
// content that is NOT trip-specific.
//
// Trip data does not live here. It lives in src/data/trips/*
// and is consumed through src/data/registry.ts.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'Explore China',
  nameZh: '探索中国',
  tagline: 'Student-led China travel program for Canada-based participants',
  description:
    'A student-led route through Shanghai, Suzhou, Hangzhou, and Beijing, designed for people who want culture, structure, and shared travel energy instead of generic sightseeing.',
  email: 'hello@explorechina.ca',
  // Official account — will carry all new content going forward.
  // Currently empty, so user-facing CTAs point at the legacy
  // account below until content moves over (then flip the CTAs).
  instagram: '@explorechina.travel',
  instagramUrl: 'https://www.instagram.com/explorechina.travel',
  // Legacy account holding past event records (Cam CAPI Society).
  instagramLegacy: 'camcapysoc',
  instagramLegacyUrl: 'https://www.instagram.com/camcapysoc',
  wechat: 'ExploreChinaTrip',
};

// ─────────────────────────────────────────────────────────────
// Analytics & ad tracking — leave an ID empty and that provider's
// script is NOT loaded at all (zero third-party requests).
// Activation steps + event reference: docs/ANALYTICS-AND-TRACKING.md
// ─────────────────────────────────────────────────────────────
export const analytics = {
  /** GA4 measurement ID, e.g. 'G-XXXXXXXXXX' (free — analytics.google.com) */
  ga4MeasurementId: '',
  /** Meta Pixel ID, e.g. '1234567890' (free — business.facebook.com → Events Manager) */
  metaPixelId: '',
};

export const aboutContent = {
  heroTitle: 'About Explore China',
  heroTitleZh: '关于 Explore China',
  // Hero subtitle rendered under the about-page title.
  // (heroSub intentionally differs from heroText — it is the shorter line.)
  heroSub:
    'A travel project shaped by people who wanted China to feel exciting, social, and real — not rushed, awkward, or overly packaged.',
  heroSubZh:
    'Explore China 是一个由学生发起的旅行项目。我们想做的是：让一次去中国的旅行既令人兴奋，又有人情味和安全感，而不是赶场、尴尬或过度包装。',
  heroText:
    'A student-led travel project shaped by people who wanted China travel to feel exciting, social, and emotionally manageable — not rushed, awkward, or overly packaged.',
  heroTextZh:
    'Explore China 是一个由学生发起的旅行项目。我们想做的是：让一次去中国的旅行既令人兴奋，又有人情味和安全感，而不是赶场、尴尬或过度包装。',
  whoWeAre:
    'We are a student-led community built around culture, conversation, and shared experiences. Some people join because they grew up close to Chinese culture. Others join because they are simply curious and want to travel with a good group. Both belong here.',
  whoWeAreZh:
    '我们是一群以文化、交流与共同体验为核心的学生组织者。有些人和中国文化本来就很近，有些人只是单纯好奇、想和靠谱的人一起旅行——这两种人都适合这里。',
  story:
    'This trip started from a simple idea: what if travel could feel both exciting and safe at the same time? Many of us know what it feels like to navigate unfamiliar places far from home. We wanted a route that blends iconic landmarks with local atmosphere, shared meals, social connection, and enough structure that people can relax into the experience.',
  storyZh:
    '这次行程起点其实很简单：我们想试试看，旅行能不能同时做到“很兴奋”又“很安心”。很多人都懂那种离开熟悉环境、进入陌生城市时的紧张感，所以我们想设计一条既有地标、又有生活感、既能认识人、又不会失控的路线。',
  teamIntro: 'The team',
  teamIntroZh: '团队',
  team: [
    { role: 'Program lead', roleZh: '项目统筹', name: 'Team Lead', bio: 'Coordinates route flow, communications, and participant-facing logistics.', bioZh: '负责路线节奏、沟通与对参与者的整体协同。' },
    { role: 'City experience lead', roleZh: '城市体验负责人', name: 'City Curator', bio: 'Shapes city pacing, cultural blocks, and atmosphere-driven recommendations.', bioZh: '负责城市节奏设计、文化段落与体验建议。' },
    { role: 'Operations support', roleZh: '执行支持', name: 'Ops Support', bio: 'Helps keep transport, check-ins, and on-trip support clear and human.', bioZh: '负责转场、入住与在地支持，让执行过程更清晰也更有人情味。' },
  ],
};
