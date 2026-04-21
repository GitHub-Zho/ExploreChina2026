// ─────────────────────────────────────────────────────────────
// East China Route — Itinerary & City Guide Data
// Cities: Shanghai · Suzhou · Hangzhou · Beijing
//
// Metadata lives in: src/data/registry.ts
// ─────────────────────────────────────────────────────────────

export const eastChinaCityGuides = [
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

export const eastChinaItinerary = [
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
