// ─────────────────────────────────────────────────────────────
// East China Route — the single source of truth for this trip.
// Cities: Shanghai · Suzhou · Hangzhou · Beijing
//
// Everything the site knows about this trip lives here:
// meta, dates, price display, highlights, includes/excludes,
// FAQ, videos, itinerary, city guides, page marquee cards,
// route-intro prose, price breakdown, card fields, form fields.
// The registry (src/data/registry.ts) re-exports it; pages and
// the apply form consume it from there.
// ─────────────────────────────────────────────────────────────
import type { Trip, CityGuide, ItineraryDay } from '../types';
import { EAST_CHINA_PRICE_CAD, POLICY } from '../constants';

export const eastChinaCityGuides: CityGuide[] = [
  {
    city: 'Shanghai',
    cityZh: '上海',
    heroImage:
      '/images/places/shanghai-hero-1.jpg',
    heroAlt: 'Shanghai skyline and Huangpu river at dusk',
    intro:
      "Shanghai dazzles with its fast pace and sharp contrasts, where historic lanes and classical gardens sit beside futuristic skylines. As China's most international city, it is the perfect starting point for our route: easy to enter, full of flavor, and always alive after dark.",
    introZh:
      '上海最迷人的地方在于它的反差：一边是老城厢与园林，一边是摩登天际线与夜色霓虹。作为整条路线的起点，它上手快、节奏明、吃喝玩乐都集中，是第一次到中国时最容易进入状态的一站。',
    context:
      "Shanghai matters because it shows how quickly China can shift tone within a single afternoon — treaty-port history, lane life, migrant energy, and futuristic ambition all stack on top of each other.",
    contextZh:
      '上海之所以重要，不只是因为它繁华，而是因为它把近代中国的开放、商业、移民流动与当代都市速度叠在了同一座城市里。你会很快读到一种“中国如何进入现代”的现场感。',
    feeling:
      "You feel the city through contrast: soup dumplings before neon skylines, quiet garden turns before a loud riverfront, and the sense that the trip has properly begun once everyone starts finding their rhythm together.",
    feelingZh:
      '你会通过反差去感受上海：刚吃完冒着热气的小笼包，转身就是霓虹天际线；刚走过安静园林，下一段又进入喧闹江边。对很多外国学生来说，这里会是“我真的来到中国了”的第一下落地感。',
    explore: [
      {
        title: 'Yu Garden & Old Town',
        image: '/images/highlights/yu-garden.jpg',
        titleZh: '豫园与老城厢',
        description:
          'Stone lanes, tea houses, and historic courtyards make this one of the easiest places to feel old Shanghai beneath the modern skyline.',
        descriptionZh: '青石路、茶楼与传统院落交织在一起，是感受“老上海气质”最直接的一站。',
      },
      {
        title: 'The Bund',
        image: '/images/places/shanghai-hero-1.jpg',
        titleZh: '外滩',
        description:
          'The riverfront gives you the postcard contrast of colonial facades on one side and Pudong towers on the other.',
        descriptionZh: '一边是万国建筑群，一边是浦东高楼群，外滩是理解上海反差感的核心场景。',
      },
      {
        title: 'City God Temple Area',
        image: '/images/highlights/city-god-temple.jpg',
        titleZh: '城隍庙商圈',
        description:
          'A dense area for snacks, temple culture, and high-energy people-watching close to the old-town core.',
        descriptionZh: '适合边走边吃、看人流、感受传统商业氛围，是很典型的上海热闹区。',
      },
      {
        title: "Jing'an Temple",
        image: '/images/highlights/jingan-temple.jpg',
        titleZh: '静安寺',
        description:
          'One of Shanghai\'s oldest and most famous Buddhist temples, with striking golden architecture set against the modern cityscape.',
        descriptionZh: '上海最古老、最著名的佛教寺院之一，金色建筑与现代都市形成强烈反差。',
      },
      {
        title: 'Nanjing Road',
        image: '/images/places/shanghai-nanjing-road-1.jpg',
        titleZh: '南京路',
        description:
          'A classic high-energy commercial street for first impressions, shopping, and urban night atmosphere.',
        descriptionZh: '如果你想快速感受上海最直接的城市活力与夜间商业氛围，南京路很有代表性。',
      },
      {
        title: 'Arrival reset & social options',
        image: '/images/places/shanghai-arrival-reset-1.jpg',
        titleZh: '抵达恢复与社交选项',
        description:
          'Depending on arrival energy, the first Shanghai block can include a recovery-style spa moment and an optional local nightlife social add-on.',
        descriptionZh: '根据到达状态，上海首段可安排偏恢复型的放松活动，也会预留可选夜生活社交时间。',
      },
    ],
    foodHighlight: {
      title: 'Xiaolongbao',
      titleZh: '小笼包',
      description:
        "One bite and you'll understand why Shanghai's soup dumplings are a comfort classic — thin skin, rich broth, and a very dangerous ability to make you order a second basket.",
      descriptionZh: '一口咬下去就能明白为什么小笼包会变成上海最经典的城市味道：皮薄、汤鲜，而且很容易让人再加一笼。',
    },
    gallery: [
      '/images/places/shanghai-hero-1.jpg',
      '/images/places/gallery-shanghai-night-1.jpg',
      '/images/places/gallery-beijing-1.jpg',
      '/images/places/shanghai-nanjing-road-1.jpg',
      '/images/places/beijing-hero-1.jpg',
    ],
  },
  {
    city: 'Suzhou',
    cityZh: '苏州',
    heroImage:
      '/images/places/suzhou-hero-1.jpg',
    heroAlt: 'Suzhou garden architecture and water reflections',
    intro:
      "Suzhou is known for its elegant, slower-living beauty. Compared with Shanghai's speed, it feels calmer and more refined, which makes it the perfect one-day cultural reset within the route.",
    introZh:
      '相比上海的快节奏，苏州更安静、更精致，也更适合把旅行速度慢下来。它像是一段文化缓冲带，让整个行程的节奏更有层次。',
    context:
      "Suzhou gives students a different chapter of China: canal trade, scholar-garden aesthetics, and the Jiangnan idea of refinement that has shaped poetry, painting, and elite culture for centuries.",
    contextZh:
      '苏州会让人看到中国的另一面：不是超大城市的速度，而是运河贸易、园林审美与江南文人气质怎样一起塑造了一种很深的文化想象。很多“中式优雅”的源头，都能在这里找到影子。',
    feeling:
      "The pace softens here. You notice water sounds, shaded paths, slower conversation, and the relief of moving as a small group through a city that feels intimate instead of overwhelming.",
    feelingZh:
      '到了这里，身体会先松下来：会注意到水声、树影、桥边的停顿，也会发现大家聊天变慢了。它不是那种要你一直追着看的城市，而是会把人轻轻放进一种更安静的旅行状态里。',
    explore: [
      {
        title: 'National Museum Visit',
        image: '/images/highlights/suzhou-museum.jpg',
        titleZh: '博物馆参观',
        description:
          'A curated museum stop helps make the Jiangnan aesthetic and regional history feel legible instead of decorative.',
        descriptionZh: '通过馆藏和展陈去理解江南审美与地方历史，会让苏州不只是“好看”，而是真正更好懂。',
      },
      {
        title: 'Dress-up Experience',
        image: '/images/highlights/hanfu.jpg',
        titleZh: '汉服体验',
        description:
          'A playful cultural block where participants can step into historical styling and connect with traditional Chinese visual culture.',
        descriptionZh: '用更轻松的方式接近传统文化，既适合体验，也很适合留下有记忆点的照片。',
      },
      {
        title: 'Classical Gardens',
        image: '/images/highlights/suzhou-garden-new.jpg',
        titleZh: '苏州园林',
        description:
          'UNESCO-listed gardens where every rock, pond, and corridor is a masterclass in classical Chinese landscape design.',
        descriptionZh: '列入联合国教科文组织世界遗产的园林，每一处山石、池水和回廊都是中国古典园林设计的极致。',
      },
      {
        title: 'Canal atmosphere',
        image: '/images/highlights/suzhou-canal.jpg',
        titleZh: '运河氛围',
        description:
          'Walking the canal areas gives the day an easy rhythm and creates a strong contrast with the vertical energy of Shanghai.',
        descriptionZh: '运河边的步行节奏会很自然地把人从都市模式切换到更松弛的旅行状态。',
      },
      {
        title: 'Local snacks & tea stops',
        titleZh: '小吃与茶歇',
        description:
          'Short food breaks keep the day social and low-pressure while introducing simple regional flavors.',
        descriptionZh: '小吃和茶歇会让整天的体验更轻松，也更容易把苏州的地方口味记住。',
      },
    ],
    foodHighlight: {
      title: 'Local Snacks & Tea Stops',
      titleZh: '小吃与茶歇',
      description:
        'In Suzhou, the memorable moments are often the quiet ones: a small dessert, a tea stop, a canal-side pause, and a little reset between bigger landmarks.',
      descriptionZh: '苏州让人记住的往往不是最热闹的瞬间，而是那些小而安静的停顿：一份点心、一杯茶、一次运河边的喘口气。',
    },
    gallery: [
      '/images/places/suzhou-hero-1.jpg',
      '/images/places/suzhou-hero-1.jpg',
      '/images/places/gallery-suzhou-2.jpg',
      '/images/places/gallery-suzhou-3.jpg',
      '/images/places/gallery-shanghai-night-1.jpg',
    ],
  },
  {
    city: 'Hangzhou',
    cityZh: '杭州',
    heroImage:
      '/images/highlights/hero-homepage.jpg',
    heroAlt: 'West Lake in Hangzhou with traditional pavilion scenery',
    intro:
      'Hangzhou is a poetic lakeside city celebrated for soft scenery and a calmer pace. Centered around West Lake, it feels like a landscape painting you can walk through rather than just photograph from a distance.',
    introZh:
      '杭州是一座很“有画面感”的城市，西湖的路径、水面、树影和缓慢节奏，会让整段旅程突然多出一种轻柔的呼吸感。',
    context:
      'Hangzhou has long stood for beauty with substance — an old capital, a center of tea culture, and a place Chinese literature keeps returning to whenever it wants to describe cultivated calm.',
    contextZh:
      '杭州的重要性在于，它不是单纯“风景好看”的城市。它曾是都城，也和茶文化、文人书写、江南生活理想深度绑定；很多中国人提到“有文化的松弛感”，脑子里浮现的就是杭州。',
    feeling:
      'This is where the route starts breathing differently: lake air, long sightlines, temple bells, tea fragrance, and a mood that makes photos, friendships, and quiet moments all land a little deeper.',
    feelingZh:
      '这会是整段路线里最会“呼吸”的一天：湖面、远景、寺院钟声、茶香和更慢的步子，会让拍照、聊天和发呆都变得特别自然。很多人会在这里第一次真正放下赶路感。',
    explore: [
      {
        title: 'West Lake',
        image: '/images/highlights/hero-homepage.jpg',
        titleZh: '西湖',
        description:
          'The lake gives the route its most classic “slow-beauty” day: easy walking, views that change gradually, and strong photo value without needing a rushed schedule.',
        descriptionZh: '西湖是整条路线里最典型的“慢美感”段落，不需要赶，反而越慢越好看。',
      },
      {
        title: 'Lingyin Temple',
        image: '/images/places/hangzhou-lingyin-1.jpg',
        titleZh: '灵隐寺',
        description:
          'This adds a more spiritual and historical tone to the Hangzhou day, balancing scenery with cultural depth.',
        descriptionZh: '灵隐寺会给杭州这一站增加更厚一点的文化与宗教气息，不只是看风景。',
      },
      {
        title: 'Longjing tea atmosphere',
        image: '/images/places/hangzhou-longjing-1.jpg',
        titleZh: '龙井茶文化氛围',
        description:
          'Tea culture is one of Hangzhou’s strongest identity markers, and it helps this stop feel specifically local rather than generically scenic.',
        descriptionZh: '龙井茶文化会让杭州不只是“景色漂亮”，而是更具体地和本地生活方式连起来。',
      },
      {
        title: 'Lakeside walking & photo blocks',
        image: '/images/places/hangzhou-lakeside-1.jpg',
        titleZh: '湖边步行与拍照段落',
        description:
          'The route is naturally good for photos, lighter conversation, and lower-stress pacing after bigger urban days.',
        descriptionZh: '在连续几天城市节奏之后，杭州特别适合放慢脚步、拍照和轻松聊天。',
      },
    ],
    foodHighlight: {
      title: 'Dongpo Pork',
      titleZh: '东坡肉',
      description:
        'Hangzhou-style braised pork is rich, glossy, and slow-cooked until tender — exactly the kind of classic regional dish that makes a city easier to remember.',
      descriptionZh: '东坡肉是杭州非常有代表性的经典味道：浓郁、软糯、带一点甜咸交织的酱香。',
    },
    gallery: [
      '/images/highlights/hero-homepage.jpg',
      '/images/places/gallery-hangzhou-1.jpg',
      '/images/places/xiamen-hulishan-1.jpg',
      '/images/places/gallery-hangzhou-2.jpg',
      '/images/places/gallery-hangzhou-3.jpg',
    ],
  },
  {
    city: 'Beijing',
    cityZh: '北京',
    heroImage:
      '/images/places/beijing-hero-1.jpg',
    heroAlt: 'Historic palace rooftops in Beijing',
    intro:
      'Beijing closes the route with scale, history, and symbolic weight. It is where the trip shifts from “we are traveling in China” to “we are standing inside places we have known by name for years.”',
    introZh:
      '北京是整段路线最有“收束感”的一站。到了这里，旅程会从“在中国旅行”变成“真的走进那些以前只在书里和照片里见过的地方”。',
    context:
      'Beijing matters because so much of modern and imperial China runs through it: dynastic planning, political power, university life, and the national symbols many international students already recognize before they arrive.',
    contextZh:
      '北京的重要性很直接：无论是帝国时期的空间秩序，还是当代中国的政治中心、大学氛围与国家象征，很多外部世界对中国的想象都在这里聚合。所以它会像整条路线的“总章回”。',
    feeling:
      'The city feels larger in every sense — wider avenues, heavier history, bigger landmarks, and then surprisingly human moments in hutongs or student exchanges that make the capital feel personal rather than distant.',
    feelingZh:
      '你会先感到它“大”——路更宽、历史更重、地标更有压迫感；但真正让人记住的，常常是胡同里的人味、校园交流里的真实对话，以及那种“首都也能被自己走近”的瞬间。',
    explore: [
      {
        title: 'The Great Wall',
        image: '/images/places/beijing-great-wall-2.jpg',
        titleZh: '长城',
        description:
          'The full-day Great Wall block is the biggest landmark moment of the route and one of the clearest memory anchors for participants.',
        descriptionZh: '长城是整条路线里最强的地标记忆点之一，也是很多人对这次旅行最期待的一天。',
      },
      {
        title: 'The Forbidden City',
        image: '/images/places/beijing-forbidden-city-1.jpg',
        titleZh: '故宫',
        description:
          'A dense historical site that gives the Beijing section its imperial scale and visual drama.',
        descriptionZh: '故宫会把北京的历史厚度和空间尺度一下子拉满，是最典型的“必须亲眼看一次”的地方。',
      },
      {
        title: 'Beijing Hutongs',
        image: '/images/places/beijing-hutong-1.jpg',
        titleZh: '北京胡同',
        description:
          'The hutong blocks let the city feel human again after the grand monument scale, giving participants a more intimate urban texture.',
        descriptionZh: '在故宫、长城这种大体量地标之后，胡同会让北京重新回到“能走进生活里”的状态。',
      },
      {
        title: 'Tsinghua & Peking University exchange day',
        image: '/images/places/xiamen-university-1.jpg',
        titleZh: '清华 / 北大学生交流日',
        description:
          'The student exchange block gives the trip a real people-to-people dimension rather than leaving it as pure sightseeing.',
        descriptionZh: '这部分会让整段行程不只是看景点，而是真正发生人与人的交流。',
      },
      {
        title: 'Final Social Night',
        titleZh: '结营社交夜',
        description:
          'A closing evening for stories, photos, and the emotional wrap-up that usually turns a route into a shared memory.',
        descriptionZh: '结营夜会把这次旅行真正变成“共同记忆”，而不只是十天的行程表。',
      },
    ],
    foodHighlight: {
      title: 'Beijing Lamb Hot Pot',
      titleZh: '北京羊肉火锅',
      description:
        'Thin lamb slices in a bubbling pot are best experienced with a table of friends and a long conversation after a full day out.',
      descriptionZh: '北京羊肉火锅特别适合和一群人一起吃：热气、节奏、聊天，都会让这顿饭很容易变成旅途里的高光。',
    },
    gallery: [
      '/images/places/beijing-hero-1.jpg',
      '/images/places/gallery-beijing-1.jpg',
      '/images/places/gallery-beijing-2.jpg',
      '/images/places/xiamen-hulishan-1.jpg',
      '/images/places/gallery-shanghai-night-1.jpg',
    ],
  },
];

export const eastChinaItinerary: ItineraryDay[] = [
  {
    day: 'Day 0 / 1',
    dayZh: '第0/1天',
    city: 'Shanghai',
    cityZh: '上海',
    title: 'Land, rest, and hot spring',
    titleZh: '落地、休息与泡汤',
    plan: 'Arrival support, hotel check-in, SIM/payment/transit setup — then unwind with a hot spring to shake off the long-haul flight.',
    planZh: '完成抵达、入住、SIM/支付/交通设置，然后泡温泉放松，好好从长途飞行中缓过来。',
    landmarks: [],
  },
  {
    day: 'Day 2',
    dayZh: '第2天',
    city: 'Suzhou',
    cityZh: '苏州',
    title: 'Museum, canal rhythm, and evening atmosphere',
    titleZh: '博物馆、运河节奏与夜间氛围',
    plan: 'Suzhou museum and Jiangnan atmosphere, with canal-side walking and a softer evening city rhythm before return.',
    planZh: '通过馆藏、运河步行和更安静的城市夜景，体验与上海完全不同的江南气质。',
    landmarks: [
      {
        name: 'Suzhou Museum',
        nameZh: '苏州博物馆',
        image: '/images/highlights/top-suzhou-museum.jpg',
        background: `Suzhou Museum was designed by architect I.M. Pei — a Suzhou native — and opened in 2006 as his self-described gift to his hometown. The building blends traditional Jiangnan elements (whitewashed walls, dark roof tiles, geometric water features) with modernist precision, creating a structure that feels both ancient and completely contemporary. The collection spans ceramics, calligraphy, and ancient Suzhou crafts across dynasties; the building itself is widely considered the highlight.`,
        backgroundZh: `苏州博物馆由建筑师贝聿铭——苏州人——设计，于2006年开馆，是他亲口称之为"给故乡的礼物"的作品。建筑将江南传统元素（粉墙黛瓦、几何水景）与现代主义精准结合，营造出既古典又极具当代感的空间。馆藏涵盖历代陶瓷、书法与苏州传统工艺；建筑本身往往被认为是最值得看的展品。`,
      },
      {
        name: 'Pingjiang Road',
        nameZh: '平江路',
        image: '/images/places/suzhou-pingjiang-2.jpg',
        background: `Pingjiang Road is one of Suzhou's oldest streets, running parallel to the Pingjiang River canal for approximately 1.6 kilometres through the northeastern part of the old city. The street preserves the traditional water-town urban form that defined Suzhou before modernisation: stone-paved lanes, whitewashed walls, arched bridges crossing the narrow canal, and residential compounds with internal courtyards. Some buildings along the street date to the Song Dynasty (960–1279 AD). The area has been carefully restored and is one of the best-preserved historic neighbourhoods in the Yangtze Delta region.`,
        backgroundZh: `平江路是苏州最古老的街道之一，沿平江河蜿蜒约1.6公里，穿越古城东北部。这条街道保留了苏州现代化以前传统水乡城市的空间形态：青石板路、粉墙黛瓦、石拱桥跨越狭窄水道，两岸是带有内院的传统民居。部分建筑可追溯至宋代（960–1279年）。这一片区经过精心修缮，是长三角地区保存最完整的历史街区之一。`,
      },
    ],
  },
  {
    day: 'Day 3',
    dayZh: '第3天',
    city: 'Shanghai',
    cityZh: '上海',
    title: 'Old Shanghai + skyline contrast',
    titleZh: '老城氛围与天际线反差',
    plan: 'Yu Garden, Old Town, and Bund skyline blocks that give the clearest contrast between historical Shanghai and modern urban scale.',
    planZh: '豫园、老城厢与外滩组合在一起，最能体现上海”传统与现代并置”的城市感。',
    landmarks: [
      {
        name: 'The Bund',
        nameZh: '外滩',
        image: '/images/places/shanghai-bund-night-1.jpg',
        background: `The Bund is a waterfront promenade in central Shanghai running along the western bank of the Huangpu River. The 52 buildings lining the Bund — built between 1860 and 1940 — represent the full range of Western architectural styles that defined the treaty port era: neoclassical, Art Deco, Gothic Revival, and Beaux-Arts. During the early 20th century, the Bund was the financial centre of the Far East, housing the headquarters of every major international bank and trading house operating in Asia. The buildings are now largely occupied by luxury brands and restaurants.`,
        backgroundZh: `外滩是上海市中心沿黄浦江西岸延伸的滨水长廊。沿线52栋建筑建于1860至1940年间，汇聚了条约口岸时代西方建筑风格的全谱系：新古典主义、装饰艺术、哥特复兴与布杂艺术。20世纪初，外滩是远东的金融中心，各大国际银行与洋行的亚洲总部均设于此。这些建筑如今大多已由奢侈品牌与餐厅进驻。`,
      },
      {
        name: 'Yu Garden',
        nameZh: '豫园',
        image: '/images/places/shanghai-yu-garden-1.jpg',
        background: `Yu Garden is a classical Chinese garden built between 1559 and 1577 during the Ming Dynasty by Pan Yunduan, an official who wanted a peaceful retreat for his elderly father. The garden covers approximately 2 hectares and features 30 distinct scenic areas including rockeries, pavilions, ponds, and covered walkways, all designed according to traditional southern Chinese garden principles. After Pan's death the garden fell into disrepair and was later used as a military headquarters during the Small Swords Society uprising of 1853. Major restoration was completed in the 1960s.`,
        backgroundZh: `豫园是一座明代古典园林，由官员潘允端于1559至1577年间为其年迈父亲修建，作为颐养天年的静谧庭院。园区约2公顷，包含30处各具特色的景区，叠山、水榭、厅堂与游廊依照江南园林传统营造。潘允端身后园林逐渐荒废，1853年小刀会起义期间曾被用作军事指挥部。20世纪60年代完成了重要的修复工程。`,
      },
    ],
  },
  {
    day: 'Day 4',
    dayZh: '第4天',
    city: 'Shanghai',
    cityZh: '上海',
    title: 'Flexible city day',
    titleZh: '弹性城市探索日',
    plan: 'A flexible block for food districts, slower neighborhood exploration, shopping, or optional social/nightlife time.',
    planZh: '这一天会给大家留出更多自由度，用来吃、逛、拍照、补充休息或参加可选社交安排。',
    landmarks: [
      {
        name: 'French Concession',
        nameZh: '法租界',
        image: '/images/places/shanghai-french-concession-1.jpg',
        background: `The former French Concession was established in 1849 and operated as a semi-autonomous zone administered by France until 1943. Its tree-lined streets — particularly on Wukang Road, Fuxing Road, and Huaihai Road — are lined with 1920s and 1930s French colonial villas, Art Deco apartment buildings, and shikumen (stone-gate) lane houses. The neighbourhood housed a significant proportion of Shanghai's international community during the Republican era and became a centre of political intrigue: Sun Yat-sen, Zhou Enlai, and various foreign intelligence operatives all operated from here.`,
        backgroundZh: `法租界于1849年设立，作为法国管辖的半自治区域运营至1943年。武康路、复兴路、淮海路等街道两侧种植法国梧桐，沿线分布着1920至30年代的法式花园洋房、装饰艺术公寓与石库门里弄建筑。中华民国时期，这一街区聚居了上海大量国际社群，也是各方政治活动的中心：孙中山、周恩来及多国情报人员均在此活动。`,
      },
    ],
  },
  {
    day: 'Day 5',
    dayZh: '第5天',
    city: 'Hangzhou',
    cityZh: '杭州',
    title: 'West Lake and cultural calm',
    titleZh: '西湖与文化松弛感',
    plan: 'West Lake, Lingyin Temple, and tea-culture atmosphere create the quietest and most scenic day of the route.',
    planZh: '西湖、灵隐寺和茶文化氛围会让整段路线在这一天进入最舒展、最有画面感的状态。',
    landmarks: [
      {
        name: 'West Lake',
        nameZh: '西湖',
        image: '/images/places/hangzhou-west-lake-1.jpg',
        background: `West Lake was designated a UNESCO World Heritage Cultural Landscape in 2011, recognising it as a landscape that has profoundly influenced garden design, painting, poetry, and philosophy across China, Japan, and Korea for over a millennium. The lake was originally a coastal lagoon that became separated from Hangzhou Bay by gradual silting; it was maintained and managed as an engineered landscape from the Tang Dynasty onward. The poet Su Dongpo (Su Shi) built the Su Causeway across the lake during his tenure as Hangzhou's governor in 1089 — it remains one of the lake's defining features. During the Southern Song Dynasty (1127–1279), Hangzhou served as the imperial capital and West Lake became synonymous with cultural refinement.`,
        backgroundZh: `西湖于2011年列入UNESCO世界文化遗产，作为文化景观被认定为千余年来对中、日、韩园林设计、绘画、诗歌与哲学影响深远的地方。西湖最初是一处与杭州湾相连的海岸泻湖，因泥沙淤积逐渐与海湾分离，自唐代起经人工规划管理延续至今。1089年苏东坡（苏轼）任杭州知州期间修筑苏堤横贯湖面，至今仍是西湖的标志性景观。南宋（1127–1279年）建都杭州期间，西湖成为文人雅士心中高雅品位的象征。`,
      },
      {
        name: 'Lingyin Temple',
        nameZh: '灵隐寺',
        image: '/images/places/hangzhou-lingyin-1.jpg',
        background: `Lingyin Temple — translated as Temple of the Soul's Retreat — was founded in 328 AD by an Indian Buddhist monk named Huili, who believed the surrounding hills resembled those of his homeland in India. The temple complex has been destroyed and rebuilt sixteen times over its 1,700-year history. The current main hall houses a 24.8-metre camphor wood statue of Maitreya Buddha (the future Buddha), completed in 1956. In the cliff face opposite the temple, over 300 stone carvings of Buddhist figures were carved between the Five Dynasties period and the Yuan Dynasty (907–1368 AD).`,
        backgroundZh: `灵隐寺意为"灵魂隐居之所"，相传于公元328年由印度僧人慧理创建，他认为此处山形与故乡印度相似。这座寺庙在1700年历史中经历了十六次毁建。现存大雄宝殿内供奉着一尊高24.8米的香樟木弥勒佛像，建成于1956年。寺庙对面的飞来峰崖壁上，保存着五代至元代（907–1368年）间雕凿的300余尊摩崖石刻造像。`,
      },
    ],
  },
  {
    day: 'Day 6',
    dayZh: '第6天',
    city: 'Beijing',
    cityZh: '北京',
    title: 'Transfer north and settle in',
    titleZh: '北上转场与入住适应',
    plan: 'Transfer north to Beijing, settle into the new city pace, and reset before the landmark-heavy final phase.',
    planZh: '完成北上转场、入住和节奏切换，为后面更集中、更重量级的地标段做准备。',
    landmarks: [
      {
        name: 'Drum Tower District',
        nameZh: '鼓楼街区',
        image: '/images/places/beijing-drum-tower-itin-1.jpg',
        background: 'The Drum Tower anchors a neighborhood of hutong lanes that have survived Beijing\'s rapid development. A low-key evening here — rooftop bars, local dumpling spots, the distant sound of evening drums — makes for the right introduction to the old city.',
        backgroundZh: '鼓楼是这片胡同街区的地标，也是北京少数在快速发展中留存下来的旧城核心。傍晚在这里溜达——屋顶酒吧、街边饺子馆、远处传来的鼓声——是进入老北京最自然的方式。',
      },
    ],
  },
  {
    day: 'Day 7',
    dayZh: '第7天',
    city: 'Beijing',
    cityZh: '北京',
    title: 'Great Wall full-day block',
    titleZh: '长城全天行程',
    plan: 'A full-day Great Wall experience that acts as one of the strongest emotional and visual anchors of the entire route.',
    planZh: '长城会是这次路线里最强的视觉与情绪锚点之一，也是很多人最早记住的一天。',
    landmarks: [
      {
        name: 'Great Wall of China',
        nameZh: '长城',
        image: '/images/places/beijing-great-wall-2.jpg',
        background: `The Great Wall of China is not a single continuous structure but a series of fortifications built by successive Chinese states and dynasties over more than 2,000 years, beginning in the 7th century BC. The most well-preserved sections — and those visited today — were built by the Ming Dynasty between 1368 and 1644, stretching approximately 8,850 kilometres from Jiayuguan in the west to Hushan in the east. The wall served as a military frontier, a customs checkpoint, and a communication network: beacons along the wall could relay signals from one end to the other in a matter of hours. The Mutianyu and Jiankou sections north of Beijing are among the most dramatic in terms of topography; Badaling is the most visited.`,
        backgroundZh: `长城并非一道连续的单一建筑，而是中国历代王朝历经逾2000年分段修建的军事防线，最早可追溯至公元前7世纪。保存最完好、如今开放参观的段落建于明代（1368–1644年），全长约8850公里，西起嘉峪关，东至虎山。长城兼具军事边境、海关关卡与通讯网络的功能：沿线烽火台可在数小时内将信号从一端传至另一端。北京北部的慕田峪与箭扣段地势最为险峻壮观，八达岭是参观人数最多的段落。`,
      },
    ],
  },
  {
    day: 'Day 8',
    dayZh: '第8天',
    city: 'Beijing',
    cityZh: '北京',
    title: 'Imperial Beijing day',
    titleZh: '帝都文化日',
    plan: 'Forbidden City plus Summer Palace, with pacing designed to keep the day substantial but still manageable.',
    planZh: '故宫与颐和园放在同一天，会把北京的历史体量与文化密度集中呈现出来。',
    landmarks: [
      {
        name: 'Forbidden City',
        nameZh: '故宫',
        image: '/images/places/beijing-forbidden-city-1.jpg',
        background: `The Forbidden City was the imperial palace of the Ming and Qing dynasties, constructed between 1406 and 1420 under the Yongle Emperor. At 720,000 square metres with 980 surviving buildings, it is the largest collection of preserved ancient wooden structures in the world. For nearly 500 years — from 1420 to 1912 — no commoner was permitted to enter without imperial summons; the complex was entirely sealed from the city around it. It housed 24 emperors across two dynasties. The name derives from the Forbidden Purple City: a reference to the Purple Star in Chinese astronomy, representing the celestial abode of the supreme deity, around which all stars revolve.`,
        backgroundZh: `故宫是明清两代的皇家宫殿，由明成祖朱棣于1406至1420年间下令修建。建筑群占地72万平方米，现存980座建筑，是世界上规模最大的古代木结构建筑群。自1420年至1912年近五百年间，未经皇帝召见的平民一律不得入内——宫城与周围城市之间形成了绝对的隔断。两朝共24位皇帝在此居住。名称源自"紫禁城"：紫，取自中国天文学中紫微星——天帝居所，众星环绕其运行。`,
      },
      {
        name: 'Summer Palace',
        nameZh: '颐和园',
        image: '/images/highlights/top-beijing-summer-palace.jpg',
        background: `The Summer Palace is Beijing's largest imperial garden at 2.9 square kilometres, with Kunming Lake covering three-quarters of its area. Originally built in the 18th century as an imperial retreat, it was expanded by Empress Dowager Cixi in the late 19th century using funds earmarked for the navy — a decision that became one of the most scrutinised in Qing history. Longevity Hill, the 728-metre Long Corridor painted with over 14,000 scenes, and the Marble Boat are its signature landmarks. It is the closest thing Beijing has to a classical Chinese garden at full imperial scale.`,
        backgroundZh: `颐和园是北京最大的皇家园林，总面积2.9平方公里，其中昆明湖占四分之三。最初建于18世纪，作为皇家避暑胜地，后由慈禧太后在19世纪末用海军经费大规模扩建，这一决策成为清史上争议最大的事件之一。万寿山、绘有14000余幅彩画的728米长廊与石舫是其标志性景观，也是北京最接近完整皇家规制的古典园林。`,
      },
      {
        name: 'Temple of Heaven',
        nameZh: '天坛',
        image: '/images/places/beijing-temple-heaven-1.jpg',
        background: `The Temple of Heaven was built between 1406 and 1420 and served as the site of annual imperial ceremonies in which the emperor — as the Son of Heaven and mediator between humanity and the divine — conducted rites to pray for good harvests. The complex is designed on the principle that heaven is round and earth is square: the main structures are circular, set within square enclosures. The emperor arrived by processional route, having fasted and purified himself for three days. From 1368 to 1912, the ceremonies at the Temple of Heaven were the most sacred event in the Chinese imperial calendar. The complex covers 273 hectares — almost four times the area of the Forbidden City.`,
        backgroundZh: `天坛建于1406至1420年间，是皇帝每年举行祭天仪式的场所——皇帝作为天子，是人间与上天之间的中介，在此祈求五谷丰登。建筑群以天圆地方为设计原则：主体建筑为圆形，置于方形围墙之内。皇帝须斋戒沐浴三天后，经仪仗出行至此。自1368年至1912年，天坛祭天是中国皇家历法中最为神圣的仪式。建筑群占地273公顷，面积约为故宫的四倍。`,
      },
    ],
  },
  {
    day: 'Day 9',
    dayZh: '第9天',
    city: 'Beijing',
    cityZh: '北京',
    title: 'Student exchange + closing night',
    titleZh: '学生交流 + 结营之夜',
    plan: 'A local student exchange block followed by a closing social night to turn the itinerary into a shared group memory.',
    planZh: '先做同龄交流，再用结营夜收束情绪和关系，让路线从”行程”变成”共同经历”。',
    landmarks: [
      {
        name: 'Beijing Hutongs',
        nameZh: '北京胡同',
        image: '/images/places/beijing-hutong-1.jpg',
        background: `Hutongs are the traditional narrow alleyways and courtyard residential compounds (siheyuan) of Beijing, most of them dating to the Yuan, Ming, and Qing dynasties. At their peak in the early 20th century, Beijing had over 3,000 hutong neighbourhoods; urban demolition since the 1950s has reduced this to fewer than 1,000, with the most intact areas concentrated around the Drum Tower, Nanluoguxiang, and Shichahai. A siheyuan courtyard compound is structured around a central courtyard facing south, with the main hall on the north side and subsidiary rooms on the east and west — a spatial logic that reflects Confucian family hierarchy. Several hundred hutong lanes remain designated as historically protected areas.`,
        backgroundZh: `胡同是北京传统的狭窄里弄与四合院民居区，大多建于元、明、清三代。20世纪初鼎盛时期，北京曾有逾3000条胡同；1950年代以来的城市拆建使这一数字降至不足1000条，现存最完整的区域主要集中在鼓楼、南锣鼓巷与什刹海一带。四合院的格局以南向的中央院落为核心，正房居北，厢房分列东西——这种空间逻辑反映了儒家的家庭伦理秩序。目前仍有数百条胡同被列为历史文化保护街区。`,
      },
    ],
  },
  {
    day: 'Day 10',
    dayZh: '第10天',
    city: 'Beijing',
    cityZh: '北京',
    title: 'Half-day city explore and departure',
    titleZh: '半日城市漫游与离境',
    plan: 'Departure coordination, airport support, and a clean outbound finish.',
    planZh: '完成离境协调与机场支持，让整个旅程有一个清晰、不慌乱的收尾。',
    landmarks: [],
  },
];

// ─────────────────────────────────────────────────────────────
// The assembled Trip object — the only export consumers need.
// ─────────────────────────────────────────────────────────────

export const eastChinaTrip: Trip = {
  kind: 'trip',
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
  status: 'open',
  heroImage: '/images/highlights/forbidden-city.jpg',
  heroImageAlt: 'Forbidden City, Beijing',
  heroImageAltZh: '北京故宫鸟瞰',
  tagline: 'Canal towns, ancient gardens, West Lake, and the Forbidden City.',
  taglineZh: '运河古镇、江南园林、西湖、故宫。',
  duration: '10 days',
  durationZh: '10天',
  priceCad: EAST_CHINA_PRICE_CAD,
  priceDisplay: `CAD $${EAST_CHINA_PRICE_CAD.toLocaleString()} per person (excluding international flights)`,
  priceDisplayZh: `CAD $${EAST_CHINA_PRICE_CAD.toLocaleString()} / 人（不含国际机票）`,
  groupSize: 'Max 20 participants',
  groupSizeZh: '最多 20 人',
  departureWindow: 'Jul 8, 2026',
  departureWindowZh: '2026年7月8日',
  applicationDeadline: 'May 31, 2026',
  applicationDeadlineZh: '2026年5月31日',
  summary:
    'Imperial Beijing, classical gardens of Suzhou and Hangzhou, and Shanghai rewriting itself every ten years.',
  summaryZh:
    '帝都北京、江南园林、改写自身的现代上海。',
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
  faq: [
    {
      q: `What exactly does CAD $${EAST_CHINA_PRICE_CAD.toLocaleString()} cover?`,
      a: '10 nights of accommodation, all transport between cities within China, group activities, and full organizer support. International flights, travel insurance, and personal spending (food beyond group meals, souvenirs, etc.) are not included. We send a detailed breakdown after your application is confirmed.',
    },
    {
      q: 'How physically demanding is the route?',
      a: 'You should be comfortable walking 10,000–15,000 steps on active days. That said, big landmark days alternate with lighter afternoons, free-wander time, and recovery days after city transfers. Nobody gets dragged anywhere.',
    },
    {
      q: 'What about food allergies or dietary restrictions?',
      a: "Tell us early and we plan around it. China's food scene is enormous — vegetarian, halal, gluten-free, and other options exist in every city on the route. Some are easier than others, but we always have a backup plan and a food guide.",
    },
    {
      q: "What's the group size?",
      a: 'We keep it between 15–25 people. Small enough that everyone knows each other by name. Large enough that you can find your own crowd within the group.',
    },
    {
      q: 'What if I need to cancel after paying?',
      a: `We get it — plans change. A ${POLICY.depositPct}% deposit is required to hold your spot, with the balance due ${POLICY.balanceDueNote}. If you cancel before ${POLICY.refundDeadline}: ${POLICY.refundBeforeDeadline}. After that point: ${POLICY.refundAfterDeadline} is returned. If you find a replacement participant, a full refund is available at any time.`,
    },
  ],
  faqZh: [
    {
      q: `CAD $${EAST_CHINA_PRICE_CAD.toLocaleString()} 具体包含什么？`,
      a: '10晚住宿、中国境内城市间所有交通、团体活动和全程组织支持。国际机票、旅行保险和个人花销（团餐以外的餐饮、纪念品等）不包含。确认报名后我们会发详细费用清单。',
    },
    {
      q: '行程对体力要求高吗？',
      a: '活跃日大概走 10,000–15,000 步。但重点景点日和轻松时间交替安排，城市转场后有恢复日。不会被拖着走。',
    },
    {
      q: '有食物过敏或饮食限制怎么办？',
      a: '提前告诉我们就好。中国的餐饮选择非常丰富——路线上每座城市都能找到素食、清真、无麸质等方案。出发前我们也会提供饮食指南。',
    },
    {
      q: '团队有多少人？',
      a: '我们控制在 15–25 人之间。小到每个人都能记住彼此的名字，大到你能在群体里找到自己最合拍的人。',
    },
    {
      q: '付款后需要取消怎么办？',
      a: `我们理解计划会变。需预付${POLICY.depositPct}%定金锁定名额，余款在${POLICY.balanceDueNoteZh}前结清。${POLICY.refundDeadlineZh}前取消：${POLICY.refundBeforeDeadlineZh}。此后取消：退还${POLICY.refundAfterDeadlineZh}。如能找到替换参与者，可在任何时间申请全额退款。`,
    },
  ],
  videos: [
    {
      title: 'China Made Me Question Who I Am',
      titleZh: '中国让我开始质疑自己',
      creator: 'Alex Cisse',
      url: 'https://www.youtube.com/watch?v=a5O_PaVQJrw',
      note: 'A personal story about identity and belonging — what it feels like to be truly out of your comfort zone.',
      noteZh: '一个关于身份认同与归属感的真实故事——走出舒适圈的真实感受。',
    },
    {
      title: 'We Visited Unbelievable Places in China (that actually exist)',
      titleZh: '我们去了中国那些难以置信的地方',
      creator: 'Kara and Nate',
      url: 'https://www.youtube.com/watch?v=9cQZVzrmddg',
      note: 'Five jaw-dropping destinations across China — a taste of how diverse the country really is.',
      noteZh: '五个令人惊叹的中国目的地——感受这个国家有多丰富多元。',
    },
    {
      title: "The WORLD Won't Believe CHINA Looks Like This",
      titleZh: '世界不会相信中国竟然长这样',
      creator: 'On Tour With Dridgers',
      url: 'https://www.youtube.com/watch?v=3Hgsazml114',
      note: 'China through fresh eyes — landscapes and cities that challenge every stereotype.',
      noteZh: '用全新视角看中国——颠覆刻板印象的风景与城市。',
    },
    {
      title: "SHOCKED in CHINA'S ROMANTIC MEGACITY You've NEVER Heard Of",
      titleZh: '震撼！你从未听说过的中国浪漫大都市',
      creator: 'Sun Kissed Bucket List',
      url: 'https://www.youtube.com/watch?v=3NPSp_N6KaI',
      note: 'Discovering a lesser-known Chinese megacity — proof that the best experiences are off the beaten path.',
      noteZh: '发现一座鲜为人知的中国大都市——最好的体验往往在主流之外。',
    },
    {
      title: 'SHOCKED by this crazy city in China (FIRST TIME IN CHONGQING)',
      titleZh: '第一次去重庆，被这座魔幻城市震撼了',
      creator: 'JetLag Warriors',
      url: 'https://www.youtube.com/watch?v=BnTHXUJpD6w',
      note: 'First-timer reactions to Chongqing — the cyberpunk mountain city that defies gravity.',
      noteZh: '第一次来重庆的真实反应——这座赛博朋克山城颠覆想象。',
    },
  ],
  itinerary: eastChinaItinerary,
  cityGuides: eastChinaCityGuides,
  highlightStrip: {
    en: [
      [
        { src: '/images/highlights/ec-bund.jpg', alt: 'Shanghai Bund skyline at night', caption: 'A waterfront that rewrote the skyline and never looked back' },
        { src: '/images/highlights/ec-suzhou-garden.jpg', alt: 'Suzhou classical garden', caption: 'Where every rock, pond, and gate was placed with intention' },
        { src: '/images/highlights/ec-forbidden-city.jpg', alt: 'Forbidden City Beijing', caption: 'A city within walls, built for emperors and time itself' },
        { src: '/images/highlights/ec-pingjiang-canal.jpg', alt: 'Suzhou Pingjiang Road canal at night', caption: 'Canal streets where time slows to a quiet rhythm' },
        { src: '/images/highlights/ec-west-lake.jpg', alt: 'West Lake Hangzhou', caption: 'Lake light, willow shade, and a calm that settles before you do' },
        { src: '/images/highlights/ec-lingyin-temple.jpg', alt: 'Lingyin Temple Hangzhou', caption: 'Stillness held in stone, incense, and hillside air' },
        { src: '/images/highlights/ec-summer-palace.jpg', alt: 'Summer Palace Beijing', caption: 'Painted beams stretching further than you expect, step after step' },
        { src: '/images/highlights/ec-great-wall.jpg', alt: 'Great Wall of China in fog', caption: 'Ridges, wind, and a line that disappears before it finishes' },
        { src: '/images/highlights/ec-shanghai-coffee.jpg', alt: 'Shanghai coffee street scene', caption: 'Side streets where the city pauses before the next corner' },
      ],
      [
        { src: '/images/highlights/ec-shanghai-nightlife.jpg', alt: 'Shanghai nightlife illuminated building', caption: 'Lights, music, and a version of the city that only shows up late' },
        { src: '/images/highlights/ec-hanfu.jpg', alt: 'Hanfu traditional dress experience', caption: 'Fabric, movement, and a different way of occupying the same streets' },
        { src: '/images/highlights/ec-tea-plantation.jpg', alt: 'Hangzhou tea plantation terraces', caption: 'Terraces shaped by hands, weather, and years of repetition' },
        { src: '/images/highlights/ec-high-speed-rail.jpg', alt: 'China high-speed rail train', caption: 'Distance collapsing into a view that never stays the same for long' },
        { src: '/images/highlights/ec-night-market.jpg', alt: 'Night market food stalls and lanterns', caption: 'Heat, smoke, and too many things happening at once to choose easily' },
        { src: '/images/highlights/ec-guardian-statue.jpg', alt: 'Chinese guardian foo dog statue', caption: 'Guardians that have watched centuries pass in silence' },
        { src: '/images/highlights/ec-temple-prayer.jpg', alt: 'Person praying at incense burner', caption: 'Smoke, prayer, and the weight of something people still believe in' },
        { src: '/images/highlights/ec-museum-space.jpg', alt: 'Person walking through museum interior', caption: "Form, light, and a space that doesn't explain itself" },
        { src: '/images/highlights/ec-soup-dumplings.jpg', alt: 'Xiaolongbao soup dumplings Shanghai', caption: 'Soup dumplings, straight from the steamer' },
      ],
    ],
    zh: [
      [
        { src: '/images/highlights/ec-bund.jpg', alt: '上海外滩夜景', caption: '改写了天际线的外滩，今日依旧气势不减' },
        { src: '/images/highlights/ec-suzhou-garden.jpg', alt: '苏州古典园林', caption: '每一块石、每一方水，都有人用心放置' },
        { src: '/images/highlights/ec-forbidden-city.jpg', alt: '北京故宫', caption: '城墙之内的城，为帝王和时间而建' },
        { src: '/images/highlights/ec-pingjiang-canal.jpg', alt: '苏州平江路夜晚运河', caption: '时间在这条水街里慢了下来' },
        { src: '/images/highlights/ec-west-lake.jpg', alt: '杭州西湖', caption: '湖光、柳影，以及一种先于你落定的宁静' },
        { src: '/images/highlights/ec-lingyin-temple.jpg', alt: '杭州灵隐寺', caption: '石刻、香烟与山间空气共同承载的静谧' },
        { src: '/images/highlights/ec-summer-palace.jpg', alt: '北京颐和园', caption: '彩绘廊柱，一步接一步延伸得比你想象的更远' },
        { src: '/images/highlights/ec-great-wall.jpg', alt: '雾中长城', caption: '山脊、风声，以及一道消失于视野之外的边界' },
        { src: '/images/highlights/ec-shanghai-coffee.jpg', alt: '上海咖啡街巷', caption: '城市在这些小巷里放慢脚步，等着你转过下一个弯' },
      ],
      [
        { src: '/images/highlights/ec-shanghai-nightlife.jpg', alt: '上海夜生活灯光', caption: '灯光、音乐，以及这座城市只在深夜才展示的那面' },
        { src: '/images/highlights/ec-hanfu.jpg', alt: '汉服体验', caption: '布料、动作，以及穿越同一街道的另一种方式' },
        { src: '/images/highlights/ec-tea-plantation.jpg', alt: '杭州茶园梯田', caption: '由双手、天气与年复一年的重复塑造出的梯田' },
        { src: '/images/highlights/ec-high-speed-rail.jpg', alt: '中国高铁', caption: '距离折叠进一道不断变化的窗外风景' },
        { src: '/images/highlights/ec-night-market.jpg', alt: '夜市食摊与灯笼', caption: '热气、炊烟，以及多到让你难以抉择的诱惑' },
        { src: '/images/highlights/ec-guardian-statue.jpg', alt: '中国石兽雕像', caption: '守望了数个世纪，沉默至今' },
        { src: '/images/highlights/ec-temple-prayer.jpg', alt: '寺庙前祈祷', caption: '烟雾、祈祷，以及人们仍在相信的某种重量' },
        { src: '/images/highlights/ec-museum-space.jpg', alt: '博物馆空间', caption: '形式、光线，以及一个无需解释自己的空间' },
        { src: '/images/highlights/ec-soup-dumplings.jpg', alt: '上海小笼包', caption: '刚出笼的小笼包' },
      ],
    ],
  },
  routeIntro: {
    headline: 'This is our signature route — and it might look like every other China itinerary at first glance.',
    headlineZh: '「这是我们的招牌路线——乍一看可能和所有其他中国行程没什么两样。」',
    body: "Shanghai, Suzhou, Hangzhou, Beijing. The same four names you'll find on a dozen tour packages. But the way Paris has a thousand tours and only a few that make you fall in love with it — the cities aren't what make a trip unforgettable. It's how you move through them, who you're with, and the moments no brochure ever mentions.",
    bodyZh: '上海、苏州、杭州、北京。你在无数旅游套餐上都能看到这四个名字。但就像巴黎有一千种游法，只有少数几种会让你真正爱上它——让一段旅程难忘的，从来不是城市本身，而是你怎么走过它、和谁一起走，以及那些任何宣传册都不会提到的瞬间。',
    pivot: 'This is that version of China.',
    pivotZh: '这就是那个版本的中国。',
    colophonHtml: '10 days &nbsp;&middot;&nbsp; 4 cities &nbsp;&middot;&nbsp; Zero planning<br>All you need is curiosity and a half-empty suitcase.',
    colophonHtmlZh: '十天 &nbsp;&middot;&nbsp; 四座城 &nbsp;&middot;&nbsp; 一群对的人',
    panels: [
      {
        city: 'Shanghai',
        cityZh: '上海',
        prose: 'Shanghai moves like a city that has not decided whether it is finished yet. The Bund is all colonial stone and river fog in the morning; the towers across the water are all glass and light after dark. In between is the French Concession — plane trees lining the sidewalks, a lane house converted to a coffee shop, the smell of rain on stone. You will eat something here that you cannot explain precisely and will think about for weeks afterward.',
        proseZh: '上海是一座还没决定自己是否建完的城市。外滩的清晨是石材与江雾；对岸的高楼入夜之后是玻璃与灯光。中间是法租界——梧桐树夹道，石库门弄堂改成了咖啡馆，石板路上有雨水的气息。你会在这里吃到一样无法准确描述的东西，然后在之后很多个星期里还会想起它。',
      },
      {
        city: 'Suzhou',
        cityZh: '苏州',
        prose: 'The classical gardens of Suzhou were designed to produce a specific feeling: the sense that you have stepped sideways into a different relationship with time. Water moves through them slowly. The framing of rocks and plants through windows is deliberate — each view is composed. Outside the gardens, the canal streets are narrow and wet-stone and still residential. Old women hang laundry over the water. The canal is working infrastructure, not scenery.',
        proseZh: '苏州的古典园林是为了制造一种特定的感受而建造的：让你觉得自己侧身走进了另一种和时间的关系。水在其中流动得很慢。山石与花木透过窗框的取景是刻意为之的——每一个视角都是构图。园林外面，河道边的小巷窄而湿润，还有人在住。老妇人在水面上晾衣服。运河是生活设施，不是景色。',
      },
      {
        city: 'Hangzhou',
        cityZh: '杭州',
        prose: 'West Lake is better at dawn than at any other time — before the tour boats, when the mist is still on the water and the Su Causeway is quiet enough that you can hear the birds. The tea fields above the city are a different kind of quiet: geometric and green and smelling of fresh leaf. In the afternoon the light on the lake is gold. The Song dynasty poets wrote about this and were not exaggerating.',
        proseZh: '西湖在清晨最好——游船还没出来，水面还有薄雾，苏堤上安静到可以听见鸟叫。湖上方的茶园是另一种安静：整齐的、绿的、带着新叶气味的。下午湖光是金色的。宋朝的诗人写过这些，并没有夸张。',
      },
      {
        city: 'Beijing',
        cityZh: '北京',
        prose: 'Beijing is a city that knows it is the capital. The scale is intentional — the long avenues, the monumental squares, the Forbidden City which is large enough that you cannot see across it. But what stays with you is the hutongs: the lanes behind the drum tower where old Beijing still exists at the pace it always had, where the smell of coal smoke mixes with cooking and someone\'s radio is playing Peking opera from a window two floors up.',
        proseZh: '北京是一座知道自己是首都的城市。那个规模是刻意的——宽阔的大道、纪念碑式的广场、大到看不到对面的故宫。但你会记住的是胡同：鼓楼后面的那些小巷，北京旧有的生活节奏还在那里，煤烟味混着炒菜声，某个二楼的窗户里有人在听京剧。',
      },
    ],
  },
  priceBreakdown: [
    { label: 'Accommodation', labelZh: '住宿', noteHtml: '<strong>4–5★ hotel</strong>, shared double room', noteHtmlZh: '<strong>4–5星酒店</strong>，双人间', pct: 32 },
    { label: 'Food & dining', labelZh: '餐饮', noteHtml: 'Local specialty restaurants daily', noteHtmlZh: '每日特色餐厅', pct: 26 },
    { label: 'Activities & tickets', labelZh: '活动与门票', noteHtml: 'Entrance fees + special programming', noteHtmlZh: '景点门票及特色活动', pct: 16 },
    { label: 'Guide & local transport', labelZh: '导游及市内交通', noteHtml: 'Professional guide + daily in-city', noteHtmlZh: '专业导游及每日市内交通', pct: 8 },
    { label: 'City-to-city transfers', labelZh: '城市间交通', noteHtml: 'High-speed rail & domestic flights', noteHtmlZh: '高铁及国内航班', pct: 14 },
  ],
  card: {
    subtitle: 'Shanghai · Suzhou · Hangzhou · Beijing',
    subtitleZh: '上海 · 苏州 · 杭州 · 北京',
    image: '/images/highlights/forbidden-city.jpg',
    imageAlt: 'Forbidden City, Beijing',
    imageAltZh: '北京故宫',
    description:
      "A route through the spine of mainstream Chinese civilization. This is the China that shows up in most books and most heads — but the version most books get wrong is the scale. Everything is bigger, louder, and stranger than you expected.",
    descriptionZh:
      '中国主流文明的中轴线。这是出现在大多数书里的中国——但书里永远没写清楚的，是它的尺度。一切都比你想象的更宏大、更喧嚣、也更奇异。',
    duration: '10 Days',
    durationZh: '10 天',
    cities: '4 Cities',
    citiesZh: '4 座城市',
    sealChar: '都',
    arcTitle: 'The Dynastic Arc',
    arcTitleZh: '都 · 帝都弧线',
    culturalFocus: 'Imperial Authority · Literati Aesthetics · Classical Gardens · Urban Dynamism',
    culturalFocusZh: '皇权 · 文人审美 · 江南园林 · 当代都市张力',
  },
  form: {
    scheduleId: 'classic-jul',
    formLabel: 'Classic Route',
    arrive: 'Shanghai',
    depart: 'Beijing → Toronto',
    color: '#C47A32',
  },
  seo: {
    title: 'Shanghai to Beijing: 10-Day China Student Trip 2026 | Explore China',
    titleZh: '上海·苏州·杭州·北京 10天学生旅行 2026 | 探索中国',
    description: `2026 summer student trip to China from Canada. 10-day route: Shanghai, Suzhou, Hangzhou, Beijing. Includes accommodation, transport, cultural activities. ~CAD $${EAST_CHINA_PRICE_CAD.toLocaleString()}.`,
    descriptionZh: '2026 年学生带队中国夏季行程，从加拿大出发，10 天走访上海、苏州、杭州与北京。',
  },
};
