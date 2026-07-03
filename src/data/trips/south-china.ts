// ─────────────────────────────────────────────────────────────
// South China Route — the single source of truth for this trip.
// Cities: Xiamen → Quanzhou → Chaoshan → Shenzhen (+ optional HK departure)
//
// Everything the site knows about this trip lives here.
// The registry (src/data/registry.ts) re-exports it; pages and
// the apply form consume it from there.
//
// NOTE: highlightStrip.en and .zh intentionally hold DIFFERENT
// card sets — the ZH page ships its own selection (incl. remote
// Unsplash images). Do not "sync" them without a content decision.
// ─────────────────────────────────────────────────────────────
import type { Trip, CityGuide, ItineraryDay } from '../types';
import { SOUTH_CHINA_PRICE_CAD, POLICY } from '../constants';

export const southChinaItinerary: ItineraryDay[] = [
  {
    day: 'Day 1', dayZh: '第1天',
    city: 'Xiamen', cityZh: '厦门',
    title: 'Arrival and first breath of sea air',
    titleZh: '抵达厦门，感受海边节奏',
    plan: 'Arrival at Xiamen Gaoqi International Airport. Airport pickup, hotel check-in, SIM card and Alipay/WeChat Pay setup. Evening orientation walk along Zhongshan Road — the century-old pedestrian street — and first local dinner.',
    planZh: '抵达厦门高崎国际机场，接机、入住酒店、办理SIM卡与支付设置。傍晚沿中山路步行区漫步，感受百年老街的闽南氛围，享用本地特色晚餐。',
    landmarks: [
      {
        name: 'Zhongshan Road',
        nameZh: '中山路',
        image: '/images/places/xiamen-zhongshan-itin-1.jpg',
        background: "Zhongshan Road is Xiamen's oldest commercial street, built in the 1920s in the Amoy Deco style — a hybrid of Southern Fujian shophouse architecture and European colonial facades. The covered colonnaded walkways (qilou) were designed to shelter pedestrians from tropical rain. The street was constructed after the city began reclaiming land from the sea and is now a pedestrian-only zone. Most of the original early-20th-century facades remain intact.",
        backgroundZh: '中山路是厦门最古老的商业街，建于1920年代，融合了闽南骑楼与欧式殖民立面，廊柱设计最初是为了遮蔽热带雨季。这条街建于海岸填海区之上，如今已是全步行商业区，大部分民国时期建筑立面至今保存完好。',
      },
    ],
  },
  {
    day: 'Day 2', dayZh: '第2天',
    city: 'Xiamen', cityZh: '厦门',
    title: 'Gulangyu Island — the piano island',
    titleZh: '鼓浪屿全天',
    plan: 'Full day on Gulangyu Island by ferry. UNESCO World Heritage colonial architecture, piano museum, sunken gardens, and the narrow lanes that once housed consulates from 13 nations. Evening return to Xiamen for seafood dinner at the port.',
    planZh: '乘轮渡前往鼓浪屿，游览世界文化遗产的殖民地建筑群、钢琴博物馆与菽庄花园。在迷宫般的小巷中穿行，傍晚返回厦门港，享用海鲜晚餐。',
    landmarks: [
      {
        name: 'Gulangyu Island',
        nameZh: '鼓浪屿',
        image: '/images/places/xiamen-gulangyu-itin-1.jpg',
        background: 'Gulangyu was designated a treaty port concession in 1903, and for four decades 13 nations operated consulates on this small island just 600 metres offshore from Xiamen. The resulting architecture — German consulate, British American Tobacco headquarters, Hokkien clan temples, and traditional courtyard houses all within walking distance — is now a UNESCO World Heritage Site. No motorized vehicles are permitted on the island. It is also known as Piano Island: at its peak, Gulangyu had more pianos per capita than anywhere else in China.',
        backgroundZh: '1903年鼓浪屿被辟为公共租界，此后四十年间13国在此设立领事馆。德国领事馆、英美烟草公司旧址、闽南宗祠与传统院落建筑共处步行可达的范围之内，现已列入UNESCO世界文化遗产。岛上禁止机动车进入。这里还有另一个称号——钢琴岛：鼎盛时期，鼓浪屿的人均钢琴拥有量为全国之最。',
      },
    ],
  },
  {
    day: 'Day 3', dayZh: '第3天',
    city: 'Xiamen', cityZh: '厦门',
    title: 'South Putuo Temple and the university shore',
    titleZh: '南普陀寺与厦大海岸',
    plan: "Morning at South Putuo Temple (Nanputuo) — a thousand-year Buddhist complex built into the granite hills above the sea. Walk through Xiamen University campus, widely considered the most beautiful in China. Afternoon free for Zengcuo'an village — an artist enclave by the water.",
    planZh: '上午游览南普陀寺，千年佛寺依山傍海，晨光中格外静谧。穿越厦门大学校园——被誉为中国最美大学。下午自由活动，可前往曾厝垵渔村艺术聚落漫逛。',
    landmarks: [
      {
        name: 'South Putuo Temple',
        nameZh: '南普陀寺',
        image: '/images/places/xiamen-south-putuo-itin-1.jpg',
        background: 'South Putuo Temple was originally built during the Tang Dynasty (618–907 AD) and rebuilt in its current form during the Qing Dynasty. The temple is dedicated to Guanyin, the Buddhist bodhisattva of mercy, and takes its name from the sacred Mount Putuo in Zhejiang Province — the earthly home of Guanyin. The complex climbs the granite face of Wulao Mountain directly behind Xiamen University, its pavilions stepping upward through incense smoke and stone carvings. It remains an active place of worship visited by tens of thousands of pilgrims annually.',
        backgroundZh: '南普陀寺始建于唐代，现存建筑群重建于清朝。寺庙供奉观音菩萨，得名于浙江普陀山——观音的道场。建筑群依五老山花岗岩山势层叠而上，香烟缭绕，石雕精美。至今仍是香火鼎盛的佛教圣地，每年吸引数以万计的信众朝拜。',
      },
      {
        name: 'Xiamen University',
        nameZh: '厦门大学',
        image: '/images/places/xiamen-university-itin-1.jpg',
        background: 'Xiamen University was founded in 1921 by Tan Kah Kee, a rubber and pineapple magnate from Singapore whose family had emigrated from Fujian Province. It was one of the first modern universities in China to be established entirely by private, overseas-Chinese funding. The campus design — white neoclassical buildings arranged around a cove, with a sea wall looking out toward Taiwan — reflects both the Western education model Tan admired and the coastal Fujian identity he never abandoned. The university is consistently voted the most beautiful campus in China.',
        backgroundZh: '厦门大学于1921年由新加坡华商陈嘉庚创办——其家族从福建移民南洋，后在橡胶与菠萝种植业积累财富。这是中国最早完全由海外华人私人捐资创办的现代大学之一。校园规划以西式新古典建筑环抱海湾，海堤远眺台湾，既体现了陈嘉庚对西式教育的推崇，也映射出他对闽南故土的眷恋。该校长期被评为中国最美大学。',
      },
    ],
  },
  {
    day: 'Day 4', dayZh: '第4天',
    city: 'Chaoshan', cityZh: '潮汕',
    title: 'Transfer to Chaozhou — entering the ancient city',
    titleZh: '前往潮州，走进古城',
    plan: 'High-speed train from Xiamen to Chaozhou (approx. 1.5 hours). Check in, then afternoon exploration of Chaozhou Ancient City: the stone pailou archways, the East Gate Tower, and the old streets lined with Qing-era merchant houses. First Gongfu tea ceremony in the evening.',
    planZh: '乘高铁从厦门前往潮州（约1.5小时）。入住后下午探索潮州古城：牌坊街、东门楼与清代商业街区。傍晚体验第一次功夫茶。',
    landmarks: [
      {
        name: 'Chaozhou Ancient City',
        nameZh: '潮州古城',
        image: '/images/places/chaoshan-ancient-city-itin-1.jpg',
        background: 'Chaozhou has been continuously inhabited for over 2,600 years. Its historic centre — anchored by the East Gate Tower and the stone pailou archways of Pai Fang Street — preserves one of the densest concentrations of intact Ming and Qing dynasty architecture in southern China. The city gave its name to the Teochew (Chaozhou) people and their diaspora: an estimated 15 million ethnic Teochew live outside China, primarily across Southeast Asia, where their language, cuisine, and temple customs remain largely intact across multiple generations.',
        backgroundZh: '潮州有着超过2600年的连续居住史。以东门楼与牌坊街为核心的历史街区，保存了中国华南地区最密集的明清建筑群之一。"潮州"即是潮汕人（潮州人）及其海外侨民群体的名称来源：估计有1500万潮汕人侨居海外，主要分布于东南亚各地，其语言、饮食与宗教习俗历经数代而基本保持完整。',
      },
      {
        name: 'Gongfu Tea Ceremony',
        nameZh: '功夫茶',
        image: '/images/places/chaoshan-gongfu-itin-1.jpg',
        background: 'Chaoshan Gongfu tea is considered the origin of Chinese tea ceremony culture. The ritual uses extremely small clay teapots (Yixing or local Chaozhou clay) and tiny cups, brewing high-grade oolong — typically Dan Cong from the Phoenix Mountain — in rapid infusions of 10 to 20 seconds. A formal session involves 18 specific steps. The practice developed in the Chaoshan region during the Ming Dynasty and spread globally with the Teochew diaspora. In Chaoshan, a tea session is a form of hospitality: a host who offers you tea is beginning a conversation that may last several hours.',
        backgroundZh: '潮汕功夫茶被视为中国茶道文化的源头之一。仪式使用极小的紫砂或潮州朱泥茶壶与微型茶杯，冲泡高端乌龙茶——通常是凤凰山单丛，每泡时间仅10至20秒。正式茶道分18道程序。这一习俗形成于明代潮汕地区，随潮州移民扩散至全球。在潮汕，奉茶是一种待客之道：主人为你泡茶，意味着一段可能持续数小时的对话正在开始。',
      },
    ],
  },
  {
    day: 'Day 5', dayZh: '第5天',
    city: 'Chaoshan', cityZh: '潮汕',
    title: 'Guangji Bridge, Kaiyuan Temple, and the art of slow tea',
    titleZh: '广济桥、开元寺与潮汕茶道',
    plan: 'Morning at Guangji Bridge — the Song-dynasty floating pontoon bridge, one of the most unusual ancient bridges in China. Kaiyuan Temple before noon. Afternoon: a guided Teochew Gongfu tea session learning the 18-step ritual. Dinner: Chaoshan beef hotpot — paper-thin cuts cooked in seconds.',
    planZh: '上午游览广济桥，这座宋代浮桥是中国最独特的古桥之一。参观开元寺。下午参加潮州功夫茶体验，学习18道茶艺程序。晚餐：潮汕牛肉火锅。',
    landmarks: [
      {
        name: 'Guangji Bridge',
        nameZh: '广济桥',
        image: '/images/places/chaoshan-guangji-itin-1.jpg',
        background: "Guangji Bridge spans the Han River in Chaozhou and was first completed in 1170 AD during the Southern Song Dynasty. It is one of China's four great ancient bridges. Its most distinctive feature is a central section of 18 pontoon boats that can be untethered and floated aside to allow river traffic to pass — a functional engineering solution that has been in operation, in various forms, for over 850 years. The bridge has been destroyed and rebuilt multiple times by floods and wars; significant restoration work was completed in 2007.",
        backgroundZh: '广济桥横跨潮州韩江，始建于南宋1170年，是中国四大古桥之一。其最独特之处在于中间18只梭船构成的浮动桥段，可以解开浮锚让船只通过——这一功能性工程设计已以各种形式沿用逾850年。该桥历经洪水与战火多次损毁重建，2007年完成了重要的修复工程。',
      },
      {
        name: 'Kaiyuan Temple',
        nameZh: '开元寺',
        image: '/images/places/chaoshan-kaiyuan-itin-1.jpg',
        background: 'Kaiyuan Temple was founded in 738 AD during the Tang Dynasty by imperial decree — Emperor Xuanzong ordered a Kaiyuan Temple built in every prefecture of the empire. The Chaozhou version survived where many others were destroyed, and its current structure preserves Tang and Song dynasty architectural elements within a Qing-period renovation. The temple complex includes a central hall, two flanking pagodas, and a courtyard of ancient banyan trees that are estimated to be several hundred years old.',
        backgroundZh: '开元寺建于唐玄宗开元二十六年（738年），奉皇帝御旨在全国各州府各建一座开元寺。潮州开元寺在历史上屡遭破坏却幸存至今，现存建筑保留了唐宋结构与清代修缮的痕迹。寺内主殿、双塔与庭院中数棵树龄数百年的古榕树共同构成了这一建筑群。',
      },
    ],
  },
  {
    day: 'Day 6', dayZh: '第6天',
    city: 'Chaoshan', cityZh: '潮汕',
    title: 'Shantou old bund and transfer prep',
    titleZh: '汕头老埠头与出发前准备',
    plan: 'Morning transfer to Shantou (30 min by taxi or bus). Walk the Shantou Old Bund — the 1860s treaty port waterfront along the Han River estuary. Visit the Zhongshan Park area and the covered walkway arcades (qi lou) of the old commercial district. Evening: train or bus prep for Shenzhen.',
    planZh: '上午前往汕头（约30分钟）。漫步汕头老埠头，这段1860年代的条约港岸线如今静静伫立在韩江入海口。游览骑楼老街区。傍晚准备前往深圳的交通。',
    landmarks: [
      {
        name: 'Shantou Old Bund',
        nameZh: '汕头老埠头',
        image: '/images/places/chaoshan-shantou-itin-1.jpg',
        background: 'Shantou was forced open as a treaty port in 1860 under the Convention of Peking following the Second Opium War. At its peak in the early 20th century, it was one of the busiest ports in southern China, processing the emigration of millions of Teochew-speaking Fujianese to Southeast Asia. The Old Bund waterfront along the Han River estuary preserves the 1920s-era customs house, merchant warehouses, and qilou (covered arcade) commercial streets that defined the treaty port era. The city declined as Hong Kong absorbed regional trade after 1949.',
        backgroundZh: '汕头于1860年《北京条约》签订后被迫开辟为通商口岸。20世纪初鼎盛时期，这里是华南最繁忙的港口之一，数以百万计的潮州移民从此出发前往东南亚。老埠头沿韩江入海口的岸线保留了1920年代的海关大楼、商行仓库与骑楼商业街，是条约口岸时代的历史见证。1949年后随着香港逐渐承接区域贸易，汕头港逐渐式微。',
      },
    ],
  },
  {
    day: 'Day 7', dayZh: '第7天',
    city: 'Shenzhen', cityZh: '深圳',
    title: 'Into the city that invented itself',
    titleZh: '抵达深圳，感受速度',
    plan: 'Travel from Chaoshan to Shenzhen by high-speed train (approx. 2 hours). Hotel check-in near Nanshan or Futian. Afternoon: OCT Loft Creative Zone — converted factory buildings now housing galleries, design studios, and independent cafés. Evening: rooftop drinks at Hou Hai bar district with bay views.',
    planZh: '乘高铁从潮汕抵达深圳（约2小时）。入住南山或福田附近酒店。下午：华侨城创意文化园（OCT LOFT）——废旧工厂改造的艺术区，画廊与独立咖啡馆云集。傍晚在后海酒吧区享用海湾夜景。',
    landmarks: [
      {
        name: 'OCT Loft Creative Zone',
        nameZh: '华侨城创意文化园',
        image: '/images/places/shenzhen-oct-itin-1.jpg',
        background: "OCT Loft was developed in the early 2000s by the state-owned Overseas Chinese Town corporation, converting a former industrial compound into an arts and creative district. Shenzhen, built from scratch after 1980, had no inherited cultural infrastructure — its museums, galleries, and creative districts all had to be deliberately constructed. OCT Loft became the centre of this effort: its converted factory buildings now house independent galleries, design studios, record shops, and a concentration of independently-owned cafés that is unusually high for mainland China. It represents Shenzhen's characteristic approach: take any given problem and solve it with speed and design.",
        backgroundZh: 'OCT LOFT由国有企业华侨城集团于2000年代初开发，将旧工业厂区改造为艺术创意园区。深圳是1980年后从零开始建起的城市，没有任何既有的文化基础设施——博物馆、画廊、创意区全部需要主动建造。OCT LOFT成为这一努力的核心：改建后的厂房建筑群现已入驻独立画廊、设计工作室、唱片店与密集程度在内地罕见的独立咖啡馆。这正是深圳一贯的做法：任何问题，用速度和设计来解决。',
      },
    ],
  },
  {
    day: 'Day 8', dayZh: '第8天',
    city: 'Shenzhen', cityZh: '深圳',
    title: 'Dafen Village, the bay, and creative Shenzhen',
    titleZh: '大芬油画村、深圳湾与创意城市',
    plan: "Morning at Dafen Oil Painting Village — the neighborhood that once produced 60% of the world's reproduced oil paintings. Walk through the open studios. Afternoon: Shenzhen Bay Park coastal greenway with skyline views of both Shenzhen and Hong Kong. Evening: free time in the Futian area.",
    planZh: '上午前往大芬油画村——这里曾产出全球60%的复制油画。开放式工作室可以直接进入参观。下午：深圳湾公园海岸绿道，同时眺望深港两座城市天际线。傍晚自由活动。',
    landmarks: [
      {
        name: 'Dafen Oil Painting Village',
        nameZh: '大芬油画村',
        image: '/images/places/shenzhen-dafen-itin-1.jpg',
        background: "In 1989, a Hong Kong art dealer named Huang Jiang relocated his reproduction painting operation to the Dafen neighbourhood of Shenzhen, hiring local painters to produce oil painting copies at scale. The industry grew rapidly: at its peak, Dafen employed over 8,000 painters and produced an estimated 60% of the world's commercially reproduced oil paintings. Works range from Van Gogh and Monet reproductions to custom portraits and hotel lobby art. The village has since developed a parallel original art scene, with painters who settled here for the reproduction trade and stayed to develop their own practice.",
        backgroundZh: '1989年，香港艺术商人黄江将其复制油画业务迁至深圳大芬村，雇用本地画师批量生产。产业迅速壮大：鼎盛时期大芬共有8000余名职业画师，据估计产出了全球60%的商业复制油画，从梵高、莫奈名作到定制肖像与酒店装饰画一应俱全。如今村内也发展出了原创艺术生态——许多最初为复制画而来的画师留下来，逐渐开拓出了自己的创作方向。',
      },
      {
        name: 'Shenzhen Bay Park',
        nameZh: '深圳湾公园',
        image: '/images/places/shenzhen-bay-itin-1.jpg',
        background: "Shenzhen Bay Park is a 15-kilometre coastal greenway built on reclaimed land along the bay that separates Shenzhen from Hong Kong's New Territories. On a clear day, the hills of Hong Kong's Lantau Island are visible across the water. The bay is a major stopover point for migratory birds on the East Asian-Australasian Flyway, and the park includes wetland areas that attract flocks of egrets, black-faced spoonbills, and dunlins during migration season. The Deep Bay rail-road crossing visible from the park is one of the border checkpoints between mainland China and Hong Kong.",
        backgroundZh: '深圳湾公园是一条沿填海地带修建的15公里海滨绿道，隔海与香港新界相望，晴天可见大屿山山影。深圳湾是东亚—澳大利西亚候鸟迁徙路线上的重要中转站，公园内的湿地区域每年吸引白鹭、黑脸琵鹭等珍稀候鸟栖息。从公园眺望可见的深圳湾大桥是深港之间的重要口岸之一。',
      },
    ],
  },
  {
    day: 'Day 9', dayZh: '第9天',
    city: 'Hong Kong', cityZh: '香港',
    title: 'Cross the border — Kowloon and Temple Street',
    titleZh: '过境香港，九龙与庙街',
    plan: 'Morning cross into Hong Kong via MTR Lo Wu / Lok Ma Chau or high-speed rail to West Kowloon (19 minutes). Hotel check-in in Tsim Sha Tsui or Mong Kok. Afternoon: walk Kowloon — the Avenue of Stars, Tsim Sha Tsui waterfront, and Nathan Road. Evening: Temple Street Night Market — fortune tellers, dai pai dong stalls, and old Kowloon energy.',
    planZh: '上午过境香港（乘高铁至西九龙站仅19分钟）。入住尖沙咀或旺角附近酒店。下午：漫步九龙——星光大道、尖沙咀海旁与弥敦道。傍晚：庙街夜市——算命摊、大排档与旧九龙风情。',
    landmarks: [
      {
        name: 'Tsim Sha Tsui Waterfront',
        nameZh: '尖沙咀海旁',
        image: '/images/places/hk-tsim-sha-tsui-1.jpg',
        background: "The Tsim Sha Tsui waterfront in Kowloon faces the full sweep of Hong Kong Island's financial district across Victoria Harbour. The promenade runs from the old Kowloon-Canton Railway Clock Tower (1915) — the only remaining structure of the colonial-era rail terminus — along the Avenue of Stars. The view from this waterfront is one of the most photographed urban panoramas in the world. The density of the skyline visible from here — over 9,000 high-rise buildings on the island alone — represents the highest concentration of skyscrapers of any city on earth.",
        backgroundZh: '尖沙咀海旁位于九龙，正对维多利亚港对岸的香港岛金融区。海滨长廊从1915年建成的九广铁路钟楼（殖民时期铁路总站唯一存留的建筑）延伸至星光大道。这片海旁是全球拍摄次数最多的城市全景之一。从这里望去，对岸香港岛密集的天际线中有逾9000栋高层建筑，是地球上摩天楼密度最高的城市地带。',
      },
      {
        name: 'Temple Street Night Market',
        nameZh: '庙街夜市',
        image: '/images/places/hk-temple-street-2.jpg',
        background: "Temple Street in Yau Ma Tei, Kowloon, has operated as a working-class night market since the 1920s. Named for the Tin Hau Temple at its centre, the market runs from late afternoon until well past midnight. Street stalls sell watches, electronics, jade, clothing, and seafood. Cantonese opera performances and fortune tellers — palm readers, face readers, and bird-cage practitioners who train birds to select fortune cards — still occupy the southern section of the street. It is one of Hong Kong's last remaining night markets and one of the most intact examples of the street-level commercial culture the city has largely built over.",
        backgroundZh: '庙街位于九龙油麻地，自1920年代起便是香港传统的平民夜市。以中段的天后庙命名，每天从傍晚营业至深夜。地摊出售手表、电器、翡翠、成衣与海鲜。粤剧表演与算命摊——看手相、观面相、用训练过的鸟儿挑选签文——至今仍在街道南段延续。这是香港最后留存的夜市之一，也是这座城市大半已被高楼覆盖的街头商业文化最完整的留存。',
      },
    ],
  },
  {
    day: 'Day 10', dayZh: '第10天',
    city: 'Hong Kong', cityZh: '香港',
    title: 'Victoria Peak, Central, and departure',
    titleZh: '太平山顶、中环，然后离港',
    plan: 'Morning: Peak Tram to Victoria Peak for the iconic panorama over both sides of the harbour. Walk through Central and Sheung Wan — PMQ creative hub, Hollywood Road antique dealers, and the narrow Mid-Levels escalator. Afternoon departure transfer to Hong Kong International Airport (HKIA).',
    planZh: '上午：乘山顶缆车前往太平山顶，俯瞰维多利亚港两岸全景。漫步中环与上环——PMQ创意中心、荷李活道古玩街、半山扶梯。下午前往香港国际机场，结束旅程。',
    landmarks: [
      {
        name: 'Victoria Peak',
        nameZh: '太平山顶',
        image: '/images/places/hk-victoria-peak-3.jpg',
        background: "Victoria Peak is the highest point on Hong Kong Island at 552 metres. During the British colonial period, residence on the Peak was legally restricted to Europeans — a racial zoning policy that persisted until 1947 and shaped the social geography of the city in ways still visible today. The Peak Tram, opened in 1888, is one of the world's oldest funicular railways still in continuous operation. The view from the Peak Galleria encompasses both sides of Victoria Harbour — the full skyline of Hong Kong Island on one side and the Kowloon Peninsula stretching to the northern hills on the other.",
        backgroundZh: '太平山是香港岛的最高点，海拔552米。英国殖民时期，山顶居住权曾以法律形式限定仅供欧洲人居住——这一种族区隔政策直至1947年才废除，其影响至今仍隐约可见于这座城市的社会地理格局之中。1888年开通的山顶缆车是世界上仍在持续运营的最古老缆索铁路之一。从山顶凌霄阁俯瞰，维多利亚港两岸尽收眼底——一侧是香港岛全景天际线，另一侧是向北延伸至山峦的九龙半岛。',
      },
      {
        name: 'Star Ferry',
        nameZh: '天星小轮',
        image: '/images/places/hk-star-ferry-itin-1.jpg',
        background: "The Star Ferry has crossed Victoria Harbour since 1888, connecting Hong Kong Island to Kowloon. The fare for the lower deck costs less than USD $0.30 — making it one of the world's great cheap urban experiences. The green-and-white double-deck ferries, built in the 1950s through 1970s, remain largely unchanged in design. In 2006, the demolition of the original Star Ferry Pier on the Hong Kong Island side — replaced by reclaimed land — triggered some of the largest heritage protests in the city's post-colonial history. The crossing takes approximately 10 minutes.",
        backgroundZh: '天星小轮自1888年起穿梭于维多利亚港，连接香港岛与九龙。下层舱位票价不足0.3美元，是全球性价比最高的城市体验之一。现役的绿白双层渡轮建造于1950至70年代，船体设计至今基本未变。2006年，香港岛原天星码头因填海工程被拆除，引发了香港后殖民时代规模最大的历史建筑保育抗议之一。每程约10分钟。',
      },
    ],
  },
];

// ─────────────────────────────────────
// PART C: City guides
// ─────────────────────────────────────

export const southChinaCityGuides: CityGuide[] = [
  {
    city: 'Xiamen',
    cityZh: '厦门',
    heroImage: '/images/places/xiamen-hero-1.jpg',
    heroAlt: 'Gulangyu Island coastline and colonial buildings in Xiamen',
    intro: "Xiamen feels like China turned down to a more livable frequency. The sea is always there — in the smell of the morning air, in the ferry horn's echo across the channel. It's the city where China's diaspora story begins, and where you realize that \"leaving\" and \"belonging\" can mean the same thing.",
    introZh: '厦门像是把中国的频率调低了几格——节奏放慢，空气里带着海盐气息，轮渡的汽笛声穿过海峡传来。这里是闽南海外移民故事的起点，也是一座让你意识到"离开"与"归属"可以是同一件事的城市。',
    context: "Xiamen sits at the mouth of the Jiulong River, looking out toward Taiwan across the strait. It was forced open as a treaty port in 1842, and for nearly a century Gulangyu Island housed consulates from 13 nations — a compressed world city floating offshore. Today that layering shows in the architecture: Amoy deco shophouses, Hokkien clan temples, and modernist university buildings all occupying the same neighborhood.",
    contextZh: '厦门坐落于九龙江入海口，隔海峡与台湾相望。1842年被迫开埠，鼓浪屿上曾驻扎13国领事馆，形成一座浓缩的国际社区。这段历史至今仍写在建筑上：闽南骑楼、宗祠庙宇与民国风大学建筑共处一隅。',
    feeling: "You notice it first at the port — the ferry horn, the salt air, the old men playing erhu in the shade. Gulangyu is small enough to feel intimate, strange enough to feel like you've left China and found something older. On the university campus at dusk, students walk along the sea wall in slow couples and the light turns amber on the stone buildings.",
    feelingZh: '你会先在码头感受到它——轮渡的汽笛、海风的咸湿，以及老人们在树荫下拉着二胡。鼓浪屿足够小，让人感到亲密；又足够陌生，像是短暂离开了中国，走进了某个更古老的地方。黄昏时在厦大校园，石砌楼宇染成琥珀色，学生们沿着海堤慢慢走。',
    explore: [
      {
        title: 'Gulangyu Island',
        titleZh: '鼓浪屿',
        image: '/images/places/xiamen-gulangyu-1.jpg',
        description: 'A UNESCO World Heritage island reachable only by ferry, where 13-nation consulate buildings stand behind bougainvillea walls and every alley leads to a small square with a stone bench and a sea view.',
        descriptionZh: '只能乘轮渡抵达的世界文化遗产小岛，13国领事馆旧址隐于三角梅绿荫之后，每条小巷的尽头都是一片海景。',
      },
      {
        title: 'South Putuo Temple',
        titleZh: '南普陀寺',
        image: '/images/places/xiamen-south-putuo-1.jpg',
        description: 'A 10th-century Buddhist complex built into the granite hills above the sea, its pavilions stepping up the rockface between incense smoke and tropical trees.',
        descriptionZh: '始建于唐代的佛教建筑群，依花岗岩山势层层而建，香烟缭绕间海风穿堂，是厦门精神重心之所在。',
      },
      {
        title: 'Xiamen University Campus',
        titleZh: '厦门大学',
        image: '/images/places/xiamen-university-1.jpg',
        description: "Consistently voted China's most beautiful campus — a 1921 overseas-Chinese endowment where Spanish colonial arches face a cove, and the sea wall is the preferred place to sit and think.",
        descriptionZh: '被誉为中国最美大学，1921年由南洋华侨捐资创办，西式拱廊面朝海湾，海堤是学生们最爱独坐发呆的地方。',
      },
      {
        title: 'Zhongshan Road',
        titleZh: '中山路步行街',
        image: '/images/places/xiamen-zhongshan-road-1.jpg',
        description: 'The main pedestrian street of old Xiamen — a long arcade of 1920s Amoy-deco shophouses where the same families have sold peanut soup and turnip cakes for generations.',
        descriptionZh: '厦门老城的步行主街，一列列1920年代闽南骑楼拱廊之下，同一家族的花生汤与萝卜糕摊已传承数代。',
      },
      {
        title: 'Hulishan Fortress',
        titleZh: '胡里山炮台',
        image: '/images/places/xiamen-hulishan-1.jpg',
        description: 'A German-designed coastal battery from 1894 that still holds the Krupp cannon used to guard the strait — now a quiet museum of colonial military history with the sea on three sides.',
        descriptionZh: '建于1894年的德式海防炮台，至今保留着当年用于扼守海峡的克虏伯大炮，是一座三面环海的殖民地军事历史博物馆。',
      },
      {
        title: "Zengcuo'an Village",
        titleZh: '曾厝垵',
        image: '/images/places/xiamen-zengcuoan-1.jpg',
        description: "A former fishing village turned artists' colony at the edge of the sea — small guesthouses, independent bookshops, and ceramic studios spilling out onto the same narrow lanes where nets once dried.",
        descriptionZh: '渔村变身的艺术聚落，位于海岸边缘，民宿、独立书店与陶瓷工作室挤在昔日晾晒渔网的窄巷里。',
      },
    ],
    foodHighlight: {
      title: 'Sha Cha Noodles (Satay Noodle Soup)',
      titleZh: '沙茶面',
      description: "The definitive Xiamen breakfast: thin noodles in a rich, peanut-and-spice satay broth with your choice of offal, fishcake, or tofu. Not a tourist dish — locals eat this at 7am in the same stalls their grandparents used.",
      descriptionZh: '厦门最具代表性的早餐：细面条浸入浓郁花生沙茶汤底，配上猪杂、鱼丸或豆腐，是本地人从小吃到大、毫不炫耀的日常味道。',
    },
  },
  {
    city: 'Chaoshan',
    cityZh: '潮汕',
    heroImage: '/images/places/chaoshan-hero-1.jpg',
    heroAlt: 'Chaozhou ancient city pailou archways at dusk',
    intro: "Chaoshan isn't one city — it's a region, an identity, a diaspora of 15 million Teochew speakers scattered across Southeast Asia who still send money home and come back for funerals. In Chaozhou you feel the weight of something that has been maintained with tremendous care for a very long time.",
    introZh: '潮汕不是一座城，而是一种身份认同——全球有1500万潮汕人，从东南亚漂泊归来，仍寄钱回乡、返乡奔丧。在潮州，你能感受到一种被精心守护了数百年的文化分量。',
    context: "Chaozhou is one of China's oldest continuously inhabited cities — 2,600 years of documented history. Unlike most Chinese heritage sites rebuilt for tourism, parts of the old city feel genuinely lived-in: the Pailou archways on Taifu Road were erected to honor imperial examination graduates, and families still cook under them. The Teochew diaspora created a global business network from Singapore to Bangkok to San Francisco, held together by a shared cuisine and an exceptionally precise tea ritual.",
    contextZh: '潮州是中国有明确历史记载中最古老的城市之一，连续建城已逾2600年。与许多为旅游重建的古城不同，这里的老城区仍是真实的生活场所：太平路的牌坊为古代科举进士而立，至今仍有人家在牌坊下生火做饭。潮汕人建立的海外商业网络从新加坡延伸至曼谷、旧金山，靠一套共同的饮食文化与精确到极致的功夫茶仪式维系。',
    feeling: "In Chaozhou, time is measured differently. A tea session can last three hours without anyone checking their phone. The old city in the evening — the smell of incense from the clan temples, the clatter of mahjong tiles through an open window, the grandmother carrying a thermos of brewed tea to her neighbor — is the kind of scene that makes you realize some things have simply not changed.",
    feelingZh: '在潮州，时间的刻度不同寻常。一场功夫茶可以悠悠喝上三小时，没有人看手机。古城的傍晚——宗祠里飘出的香烟、敞开的窗户传来的麻将声、提着保温壶去邻居家送茶的老阿嬷——是一种让你猛然意识到"有些东西真的从未改变"的景象。',
    explore: [
      {
        title: 'Chaozhou Ancient City',
        titleZh: '潮州古城',
        image: '/images/places/chaoshan-ancient-city-1.jpg',
        description: 'A 2,600-year-old walled city where the stone pailou archways of Taifu Road still stand over a living commercial street — not a museum, but a neighborhood where people shop, eat, and dry laundry under imperial monuments.',
        descriptionZh: '2600年历史的古城，太平路的石质牌坊下仍是烟火气十足的商业街区——不是博物馆，而是真实的生活社区，市民在帝国纪念碑下买菜、晾衣。',
      },
      {
        title: 'Guangji Bridge',
        titleZh: '广济桥',
        image: '/images/places/chaoshan-guangji-bridge-1.jpg',
        description: 'A Song-dynasty floating pontoon bridge that has crossed the Han River since 1171 — 18 stone piers connected by wooden boats that are still removed each night in high flood season, as they have been for 800 years.',
        descriptionZh: '建于宋代的韩江浮桥，自1171年以来横跨韩江——18座石墩与木船相连，至今仍在汛期每晚收桥，沿用了800年的古法。',
      },
      {
        title: 'Kaiyuan Temple',
        titleZh: '开元寺',
        image: '/images/places/chaoshan-kaiyuan-temple-1.jpg',
        description: "Chaozhou's most important Buddhist temple, founded in the Tang dynasty and rebuilt across centuries. The main courtyard feels like a forest — giant banyans shading stone stelae, the smoke of a hundred incense sticks drifting through.",
        descriptionZh: '潮州最重要的佛教圣地，始建于唐代，历经各朝修缮。主庭院如同丛林——古榕遮天，石碑立于根须之间，百炷香烟缓缓穿堂而过。',
      },
      {
        title: 'Gongfu Tea Ceremony',
        titleZh: '功夫茶道体验',
        image: '/images/places/chaoshan-gongfu-tea-1.jpg',
        description: 'The Teochew tea ritual — 18 formal steps to brew a single cup of Dancong oolong in a thimble-sized cup. The precision is the point: it is a philosophy of slowness disguised as hospitality.',
        descriptionZh: '潮汕功夫茶——以18道程序冲泡一盏单丛乌龙，茶杯小如指顶。这份精确本身即是哲学：将慢的艺术包裹进待客之道。',
      },
      {
        title: 'Han Wengong Ancestral Temple',
        titleZh: '韩文公祠',
        image: '/images/places/chaoshan-han-wengong-1.jpg',
        description: 'A Song-era hilltop temple to the Tang poet-official Han Yu, who was exiled to Chaozhou in 819 AD and is credited with taming the crocodiles of the Han River through the power of his writing. Local pride, preserved in stone.',
        descriptionZh: '宋代建于笔架山上的韩愈祠，纪念这位被贬潮州的唐代文豪。相传他以一篇《祭鳄鱼文》驱走了韩江鳄鱼——地方自豪，凝固于石。',
      },
      {
        title: 'Shantou Old Bund',
        titleZh: '汕头老埠头',
        image: '/images/places/chaoshan-shantou-bund-1.jpg',
        description: "The 1860s treaty-port waterfront on the Han River estuary — a quieter, less polished cousin of Shanghai's Bund, where the colonial buildings are still occupied by local businesses and the river moves slowly past.",
        descriptionZh: '1860年代汕头的条约港岸线，沿韩江入海口延伸——比上海外滩更安静、更日常，殖民时期楼宇仍住着本地商户，江水缓缓流过。',
      },
    ],
    foodHighlight: {
      title: 'Chaoshan Beef Hotpot',
      titleZh: '潮汕牛肉火锅',
      description: "Ultra-fresh beef from local abattoirs, sliced paper-thin and cooked in seconds in a clear broth — the entire philosophy is to let the quality of the ingredient speak without interference. You will not eat hotpot the same way again.",
      descriptionZh: '当天屠宰的新鲜牛肉，薄切如纸，在清汤中涮至恰熟——一切哲学在于让食材本身说话。你会从此对火锅有全新认知。',
    },
  },
  {
    city: 'Shenzhen',
    cityZh: '深圳',
    heroImage: '/images/places/shenzhen-hero-1.jpg',
    heroAlt: 'Shenzhen skyline at night from Shenzhen Bay',
    intro: "In 1980 Shenzhen was a fishing village of 30,000 people. Today it has 17 million. That 40-year sprint from nothing to metropolis is the defining fact of the city — and it shows in everything: the architecture that doesn't pretend to be old, the residents who came from everywhere else, the energy that still feels like it's trying to prove something.",
    introZh: '1980年，深圳还是一个3万人的渔村。如今它有1700万居民。这40年从零开始的城市冲刺是深圳的核心事实——写在建筑上（从不假装古老）、写在居民脸上（来自五湖四海）、写在整座城市仍在证明自己的那股劲儿上。',
    context: "Shenzhen was China's first Special Economic Zone, created by Deng Xiaoping's signature in 1980. Its growth rate — 58% annual GDP growth in its early years — is unmatched in urban history. The city effectively has no \"old Shenzhen\" identity: everyone is from somewhere else, the oldest buildings are from the 1980s, and the unofficial slogan is \"come to Shenzhen, become someone.\" It is also China's youngest major city demographically, with a median age under 33.",
    contextZh: '深圳是中国第一个经济特区，1980年经邓小平批准成立，早年GDP年增长率高达58%，在城市史上无出其右。这座城市实际上没有"老深圳人"——所有人都来自别处，最老的建筑也不过是上世纪80年代，非官方口号是"来了就是深圳人"。深圳也是中国人口最年轻的一线城市，中位年龄不到33岁。',
    feeling: "Shenzhen at night is where you understand it. The bar districts along Hou Hai and Sea World are full of people in their 20s who moved here from every province, determined to build something. The rooftops look out over a bay with Hong Kong's lights on the other side. There's an ambition in the air that isn't aggressive — it's more like collective optimism, still warm from the original belief that this experiment would work.",
    feelingZh: '深圳的夜晚才让你真正理解这座城市。后海和海上世界的酒吧区里全是二十几岁、从各省奔来此地的年轻人，每个人都在搭建什么。从屋顶望出去，对岸就是香港的灯火。空气里有一种进取心——不是咄咄逼人，更像是集体乐观，还带着当年"这个实验会成功"的原初热度。',
    explore: [
      {
        title: 'Dafen Oil Painting Village',
        titleZh: '大芬油画村',
        image: '/images/places/shenzhen-dafen-1.jpg',
        description: "A neighborhood of open studios where artists reproduce masterworks on commission — Monet, Van Gogh, and Koons by the thousands. At its peak, Dafen produced 60% of the world's commercially reproduced oil paintings.",
        descriptionZh: '一片开放式工作室群，画师在此按订单临摹大师名作——莫奈、梵高、库恩斯批量产出。鼎盛时期，大芬村出产了全球60%的商业复制油画。',
      },
      {
        title: 'OCT Loft Creative Zone',
        titleZh: '华侨城创意文化园',
        image: '/images/places/shenzhen-oct-loft-1.jpg',
        description: "Former industrial buildings converted into a campus of galleries, design studios, architecture firms, and the best independent café scene in Shenzhen — the city's creative class concentrated into a few pleasant blocks.",
        descriptionZh: '旧工厂改造的创意园区，汇聚画廊、设计工作室、建筑事务所与深圳最好的独立咖啡馆——整座城市的创意阶层压缩在几个街区之内。',
      },
      {
        title: 'Shenzhen Bay Park',
        titleZh: '深圳湾公园',
        image: '/images/places/shenzhen-bay-park-1.jpg',
        description: "A 15-kilometer coastal greenway running along the bay, with views of the Shenzhen skyline on one side and Hong Kong's mountains on the other — popular with cyclists, families, and the after-work crowd watching the sunset.",
        descriptionZh: '沿海湾延伸的15公里绿道，一侧是深圳天际线，另一侧是香港的山脉。骑行者、家庭与下班族在此汇聚，共赏夕阳入海。',
      },
      {
        title: 'Hou Hai Bar District',
        titleZh: '后海酒吧区',
        image: '/images/places/shenzhen-hou-hai-1.jpg',
        description: "Shenzhen's rooftop bar and live music district, where new arrivals from every province mix freely. The bay views are good, the cover charges are reasonable, and the energy is younger and more open than anywhere in Beijing or Shanghai.",
        descriptionZh: '深圳的屋顶酒吧与现场音乐聚集地，来自全国各省的新移民在此自由混合。海湾景色优美，消费合理，氛围比北京或上海的任何夜场都更年轻、更开放。',
      },
      {
        title: 'Lianhua Hill Park',
        titleZh: '莲花山公园',
        image: '/images/places/shenzhen-lianhua-1.jpg',
        description: "The hill at the city's geographic center, with a famous bronze statue of Deng Xiaoping pointing southward — and a sweeping view of the CBD skyline he authorized. The park is where Shenzhen comes to breathe.",
        descriptionZh: '位于城市地理中心的山丘，矗立着邓小平南巡时指向远方的铜像，脚下便是他亲自批准建设的CBD天际线。这里是深圳市民的城市肺叶。',
      },
      {
        title: 'Sea World Plaza',
        titleZh: '海上世界广场',
        image: '/images/places/shenzhen-sea-world-1.jpg',
        description: "A repurposed cruise ship turned into a hotel and plaza on the waterfront — one of Shenzhen's stranger landmarks, surrounded by restaurants and the relaxed night market energy of the Shekou peninsula.",
        descriptionZh: '一艘改建为酒店与广场的退役邮轮停泊在海岸边——深圳最奇特的地标之一，四周是餐厅与蛇口半岛悠闲的夜市氛围。',
      },
    ],
    foodHighlight: {
      title: 'Cantonese Breakfast (Yum Cha)',
      titleZh: '港式早茶',
      description: "Shenzhen is close enough to Hong Kong and Guangdong that yum cha here is the real thing: bamboo steamers of har gow and char siu bao, loud teahouses, and the ritual of pouring tea for your elders before yourself. Sunday morning dim sum is a full two-hour event.",
      descriptionZh: '深圳与港粤接壤，这里的早茶是货真价实的：虾饺、叉烧包叠摞于竹笼，茶楼嘈杂热闹，先为长辈斟茶是刻入骨髓的礼节。周日上午的饮茶轻轻松松耗去两小时。',
    },
  },
  {
    city: 'Hong Kong',
    cityZh: '香港',
    heroImage: '/images/places/hongkong-hero-1.jpg',
    heroAlt: 'Hong Kong Victoria Harbour skyline at night',
    intro: "Hong Kong is the place where East and West stopped being metaphors and became actual streets, food stalls, and legal systems. 156 years of British rule layered onto Cantonese civilization didn't erase either — it created something genuinely new, which is what makes it impossible to fully describe and worth seeing for yourself.",
    introZh: '香港是东西方不再是比喻、而是真实街道、食档与法律体系的地方。156年英国管治叠加在粤语文明之上，没有消除任何一方——而是催生出了真正新颖的东西。这正是它难以言说、却值得亲眼目睹的原因。',
    context: "Hong Kong was ceded to Britain in 1842 after the First Opium War, and returned to China in 1997 under a \"one country, two systems\" arrangement guaranteed until 2047. The result is a city with its own legal system, currency, immigration controls, and a Cantonese-speaking identity that is distinct from mainland China. It is also one of the world's densest urban environments: 7.5 million people on 1,100 square kilometers, with 40% of the land protected as country parks.",
    contextZh: '香港于1842年第一次鸦片战争后割让予英国，1997年以"一国两制"方式回归，该安排保证至2047年。这座城市由此拥有独立的法律体系、货币、出入境管制，以及有别于中国大陆的粤语文化认同。香港也是全球人口密度最高的城市之一：750万人居于1100平方公里之上，其中40%的土地受保护为郊野公园。',
    feeling: "Hong Kong moves faster than any city I know, and somehow also slower — a dai pai dong aunty assembles your egg tart with the unhurried precision of a person who has done it 200,000 times. The tram creaks up Garden Road. The star ferry horn echoes off the towers. In Sham Shui Po, you can still find rolls of fabric and components from a different era. The city is layered, dense, and entirely real.",
    feelingZh: '香港比任何我知道的城市都跑得更快，但又莫名地更慢——大排档的阿姨以一种做了20万次才有的从容手法装好一个蛋挞。叮叮车沿花园道吱呀作响。天星小轮的汽笛声在高楼之间回荡。在深水埗，你仍能找到来自另一个时代的布料卷与零件。这座城市密不透风，层次丰富，而且完全真实。',
    explore: [
      {
        title: 'Victoria Peak',
        titleZh: '太平山顶',
        image: '/images/places/hk-victoria-peak-1.jpg',
        description: "The 552-meter summit above Central, reached by the historic Peak Tram since 1888. The panoramic view over Victoria Harbour — towers on both sides, the harbor in between — is the most reproduced image of Hong Kong, and still worth the queue.",
        descriptionZh: '中环上方552米的山顶，自1888年起由历史悠久的山顶缆车连接。俯瞰维多利亚港的全景——两岸高楼，海港居中——是香港最经典的影像，排队也值得。',
      },
      {
        title: 'Temple Street Night Market',
        titleZh: '庙街夜市',
        image: '/images/places/hk-temple-street-2.jpg',
        description: 'Old Kowloon compressed into six blocks: fortune tellers with laminated cards, dai pai dong seafood stalls, Cantonese opera performances in the public squares, and the humid energy of a thousand people all doing something at once.',
        descriptionZh: '旧九龙压缩进六个街区：塑封卡片的算命摊、海鲜大排档、广场上的粤剧表演，以及一千人同时做不同事情的湿热能量。',
      },
      {
        title: 'Sham Shui Po',
        titleZh: '深水埗',
        image: '/images/places/hk-sham-shui-po-1.jpg',
        description: "Hong Kong's densest working-class neighborhood, where electronics component markets, fabric wholesalers, and old-style cha chaan tengs are packed into the same blocks. The antidote to the tourist version of Hong Kong.",
        descriptionZh: '香港最密集的平民社区，电子零件市场、布料批发商与旧式茶餐厅挤在同一个街区。是旅游版香港的解毒剂。',
      },
      {
        title: 'Star Ferry and Victoria Harbour',
        titleZh: '天星小轮与维多利亚港',
        image: '/images/places/hk-star-ferry-1.jpg',
        description: 'The seven-minute cross-harbour ferry that has connected Kowloon to Hong Kong Island since 1888 — the HKD $2.70 fare is the best value view in Asia. The harbour is the reason the city exists.',
        descriptionZh: '自1888年以来连接九龙与港岛的七分钟渡轮——2.7港元的船票是亚洲性价比最高的观景票。这片海港，正是这座城市存在的理由。',
      },
      {
        title: 'Tai O Fishing Village',
        titleZh: '大澳渔村',
        image: '/images/places/hk-tai-o-1.jpg',
        description: "A stilt-house fishing community on Lantau Island that has largely resisted development — the Hong Kong that existed before the towers, where the shrimp paste still dries on wooden racks over tidal water.",
        descriptionZh: '大屿山上的棚屋渔村，基本抵御了城市化浪潮——高楼林立之前的香港样貌，虾膏至今仍在潮水上方的木架上晾晒。',
      },
      {
        title: 'PMQ and Sheung Wan',
        titleZh: 'PMQ与上环',
        image: '/images/places/hk-pmq-1.jpg',
        description: 'A former police married quarters converted into a creative hub in Central-West, surrounded by the antique dealers of Hollywood Road, the dried seafood wholesalers of Wing Lok Street, and the Man Mo Temple at the end of the block.',
        descriptionZh: '昔日警察已婚宿舍改建的创意园，毗邻荷李活道的古玩商、永乐街的海味批发商，以及街尾的文武庙——上环的气质在此汇聚。',
      },
    ],
    foodHighlight: {
      title: 'Hong Kong Milk Tea (Silk Stocking Tea)',
      titleZh: '港式丝袜奶茶',
      description: 'Brewed through a stocking-like filter with multiple rounds of Ceylon tea blended for bitterness, then cut with evaporated milk — the definitive Hong Kong beverage. A cha chaan teng aunty will make you a better cup than any café.',
      descriptionZh: '以丝袜状滤网多次冲泡拼配锡兰红茶，再以淡奶调和——这是香港最具代表性的饮品。茶餐厅阿姨冲的一杯，胜过任何精品咖啡馆。',
    },
  },
];

// ─────────────────────────────────────
// PART D: Included / Not Included
// ─────────────────────────────────────

// ─────────────────────────────────────────────────────────────
// The assembled Trip object — the only export consumers need.
// ─────────────────────────────────────────────────────────────

export const southChinaTrip: Trip = {
  kind: 'trip',
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
  status: 'open',
  heroImage: '/images/places/south-china-tower-forest.jpg',
  heroImageAlt: 'Quanzhou East Pagoda above city trees',
  heroImageAltZh: '泉州东塔俯瞰城市',
  tagline:
    "Coastal nostalgia, ancient Teochew civilization, China's fastest-growing city, and a harbour skyline that belongs to no easy category.",
  taglineZh:
    '海边的南洋气息、两千年潮州文明、中国建城速度最快的城市，还有那片说不清属于哪里的维多利亚港。',
  duration: '10 days',
  durationZh: '10天',
  priceCad: SOUTH_CHINA_PRICE_CAD,
  priceDisplay: `CAD $${SOUTH_CHINA_PRICE_CAD.toLocaleString()} per person (excluding international flights)`,
  priceDisplayZh: `CAD $${SOUTH_CHINA_PRICE_CAD.toLocaleString()} / 人（不含国际机票）`,
  groupSize: 'Max 20 participants',
  groupSizeZh: '最多 20 人',
  departureWindow: 'Jul 20, 2026',
  departureWindowZh: '2026年7月20日',
  applicationDeadline: 'May 31, 2026',
  applicationDeadlineZh: '2026年5月31日',
  summary:
    "Quanzhou was once the world's busiest port. Chaozhou kept tea ceremony and ancestral rituals intact for a thousand years. Xiamen faces the sea its emigrants crossed. Shenzhen built itself in forty years on the same shoreline.",
  summaryZh:
    '泉州曾是全球最繁忙的港口。潮州将功夫茶与祭祖礼仪完整保存了千年。厦门望着祖先渡过的那片海。深圳在同一片海岸线上，四十年建起了一座新城。',
  dates: [
    { label: 'Jul 20 – Jul 29, 2026', labelZh: '2026年7月20日 – 7月29日', start: '2026-07-20', end: '2026-07-29' },
  ],
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
  faq: [
    {
      q: 'Do Canadians need a visa for this route?',
      a: "As of 2024, Canadians can enter mainland China visa-free for up to 15 days. The route spends approximately 6 days in mainland China (Xiamen, Chaoshan, Shenzhen) and 2 days in Hong Kong, which has its own visa-free access for Canadians (90 days). We will send a full visa briefing document after you register.",
    },
    {
      q: 'How does the Shenzhen–Hong Kong border crossing work?',
      a: 'The most convenient crossing is the high-speed rail from Shenzhen North to West Kowloon (19 minutes, CNY 85–95). We handle group coordination for the crossing, including briefing on what to carry and customs expectations. You will need your passport — not just your travel document.',
    },
    {
      q: `What's included in the CAD $${SOUTH_CHINA_PRICE_CAD.toLocaleString()}?`,
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
  ],
  faqZh: [
    {
      q: '加拿大公民参加此行程需要签证吗？',
      a: '截至2024年，加拿大公民可免签进入中国大陆，停留最长15天。本路线在大陆（厦门、潮汕、深圳）约停留6天，香港（加拿大公民可免签90天）约2天，均在免签范围内。报名确认后我们将发送完整的签证说明文件。',
    },
    {
      q: '深圳到香港如何过境？',
      a: '最便捷的方式是乘高铁从深圳北站到西九龙站，全程约19分钟，票价约人民币85-95元。我们负责团队过境的全程协调，包括行李要求与海关注意事项说明。过境须持护照，不能仅凭其他旅行证件。',
    },
    {
      q: `CAD $${SOUTH_CHINA_PRICE_CAD.toLocaleString()}包含哪些内容？`,
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
  ],
  // Xiamen video slot intentionally removed (was a broken PLACEHOLDER URL rendering
  // on the live page). To add one back: append a Video entry with a real YouTube URL.
  videos: [
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
  ],
  itinerary: southChinaItinerary,
  cityGuides: southChinaCityGuides,
  highlightStrip: {
    en: [
      [
        { src: '/images/places/south-china-tower-forest.jpg', alt: 'Quanzhou East Pagoda rising above city trees', caption: 'A Song Dynasty pagoda that outlasted every empire that built around it' },
        { src: '/images/places/south-china-aerial-clock-tower.jpg', alt: 'Xiamen Zhongshan Road clock tower at dusk', caption: 'Zhongshan Road at dusk — colonial grid still running on foot traffic' },
        { src: '/images/highlights/xiamen-shacha-noodles-top.jpg', alt: 'Xiamen shacha noodles', caption: 'A bowl of peanut broth that Xiamen calls its own' },
        { src: '/images/places/south-china-building-red.jpg', alt: 'Southern Fujian temple with curved red-tile roof', caption: 'The oldest temples in southern Fujian still draw worshippers every morning' },
        { src: '/images/places/south-china-city-hilltop.jpg', alt: 'Xiamen coastal skyline panorama from the hills', caption: 'The city that kept facing the sea it sent its emigrants across' },
        { src: '/images/places/south-china-temple-statue.jpg', alt: 'Mazu goddess statue above colourful temple rooftops', caption: 'Mazu watches over the coast she has protected for a thousand years' },
        { src: '/images/places/south-china-shenzhen-night.jpg', alt: 'Tencent headquarters towers lit up at night in Shenzhen', caption: 'Shenzhen after midnight — a city that built itself in forty years on this shoreline' },
        { src: '/images/places/south-china-food-dimsum.jpg', alt: 'Rows of bamboo steamers filled with Cantonese dim sum', caption: 'Cantonese dim sum — a table of steamers that keeps arriving until you say stop' },
        { src: '/images/places/south-china-food-bowls.jpg', alt: 'Oysters, clams and abalone on a coastal seafood table', caption: 'Oysters, clams, abalone — pulled from water you can still see from the table' },
      ],
      [
        { src: '/images/places/south-china-food-bowls.jpg', alt: 'Oysters, clams and abalone on a coastal seafood table', caption: 'Oysters, clams, abalone — pulled from water you can still see from the table' },
        { src: '/images/places/south-china-food-dimsum.jpg', alt: 'Rows of bamboo steamers filled with Cantonese dim sum', caption: 'Cantonese dim sum — a table of steamers that keeps arriving until you say stop' },
        { src: '/images/places/south-china-shenzhen-night.jpg', alt: 'Tencent headquarters towers lit up at night in Shenzhen', caption: 'Shenzhen after midnight — a city that built itself in forty years on this shoreline' },
        { src: '/images/places/south-china-temple-statue.jpg', alt: 'Mazu goddess statue above colourful temple rooftops', caption: 'Mazu watches over the coast she has protected for a thousand years' },
        { src: '/images/places/south-china-city-hilltop.jpg', alt: 'Xiamen coastal skyline panorama from the hills', caption: 'The city that kept facing the sea it sent its emigrants across' },
        { src: '/images/places/south-china-building-red.jpg', alt: 'Southern Fujian temple with curved red-tile roof', caption: 'The oldest temples in southern Fujian still draw worshippers every morning' },
        { src: '/images/highlights/xiamen-shacha-noodles-top.jpg', alt: 'Xiamen shacha noodles', caption: 'A bowl of peanut broth that Xiamen calls its own' },
        { src: '/images/places/south-china-aerial-clock-tower.jpg', alt: 'Xiamen Zhongshan Road clock tower at dusk', caption: 'Zhongshan Road at dusk — colonial grid still running on foot traffic' },
        { src: '/images/places/south-china-tower-forest.jpg', alt: 'Quanzhou East Pagoda rising above city trees', caption: 'A Song Dynasty pagoda that outlasted every empire that built around it' },
      ],
    ],
    zh: [
      [
        { src: 'https://images.unsplash.com/photo-1574285013029-29296a71930e?auto=format&fit=crop&w=600&q=80', alt: '鼓浪屿殖民建筑', caption: '十三国领事馆驻扎过的海岛，岛上没有汽车' },
        { src: '/images/highlights/xiamen-shacha-noodles-top.jpg', alt: '厦门沙茶面', caption: '厦门人的一碗沙茶面——花生与香料的秘方' },
        { src: '/images/places/chaoshan-paifang-street-1.jpg', alt: '潮州牌坊街古石牌楼', caption: '潮汕从未让现代化改变的那条牌坊街' },
        { src: 'https://images.unsplash.com/photo-1557872943-16a5ac26437e?auto=format&fit=crop&w=600&q=80', alt: '潮汕牛肉火锅', caption: '刚从市场送来的鲜牛肉，涮进清汤里' },
        { src: 'https://images.unsplash.com/photo-1512632578888-169bbbc64f33?auto=format&fit=crop&w=600&q=80', alt: '深圳现代天际线', caption: '三十年前的渔村，如今住着一千七百万人' },
        { src: 'https://images.unsplash.com/photo-1536240478700-b869ad10e128?auto=format&fit=crop&w=600&q=80', alt: '香港维多利亚港天星小轮', caption: '十一分钟的渡轮，两座截然不同的城市' },
      ],
      [
        { src: 'https://images.unsplash.com/photo-1536240478700-b869ad10e128?auto=format&fit=crop&w=600&q=80', alt: '香港维多利亚港天星小轮', caption: '十一分钟的渡轮，两座截然不同的城市' },
        { src: 'https://images.unsplash.com/photo-1512632578888-169bbbc64f33?auto=format&fit=crop&w=600&q=80', alt: '深圳现代天际线', caption: '三十年前的渔村，如今住着一千七百万人' },
        { src: 'https://images.unsplash.com/photo-1557872943-16a5ac26437e?auto=format&fit=crop&w=600&q=80', alt: '潮汕牛肉火锅', caption: '刚从市场送来的鲜牛肉，涮进清汤里' },
        { src: '/images/places/chaoshan-paifang-street-1.jpg', alt: '潮州牌坊街古石牌楼', caption: '潮汕从未让现代化改变的那条牌坊街' },
        { src: '/images/highlights/xiamen-shacha-noodles-top.jpg', alt: '厦门沙茶面', caption: '厦门人的一碗沙茶面——花生与香料的秘方' },
        { src: 'https://images.unsplash.com/photo-1574285013029-29296a71930e?auto=format&fit=crop&w=600&q=80', alt: '鼓浪屿殖民建筑', caption: '十三国领事馆驻扎过的海岛，岛上没有汽车' },
      ],
    ],
  },
  routeIntro: {
    headline: 'Four cities. Four different Chinas.',
    headlineZh: '四座城市。四种截然不同的中国。',
    body: "The South China Route moves through the coast that the world's Chinatowns came from. Xiamen's sea-worn lanes and diaspora nostalgia, Quanzhou — once the world's busiest port — where Mazu temples and stone mosques stand on the same street, Chaoshan's ancient Teochew civilization still running on tea and beef and thousand-year-old rituals, and Shenzhen: forty years old, seventeen million people, still figuring out what it is.",
    bodyZh: '华南线路穿越的，是世界各地唐人街的出发地：厦门的海风与闽南离散情结、泉州——曾经的全球第一大港——妈祖庙与古清真寺并肩而立的地方、潮汕沉积千年的潮州文明，以及深圳，四十年在同一片海岸线上建起了一座一千七百万人的城市。',
    colophonHtml: '10 days &nbsp;&middot;&nbsp; Xiamen &middot; Quanzhou &middot; Chaoshan &middot; Shenzhen',
    colophonHtmlZh: '10天 &nbsp;&middot;&nbsp; 厦门 &middot; 泉州 &middot; 潮汕 &middot; 深圳',
    panels: [
      {
        city: 'Xiamen',
        cityZh: '厦门',
        prose: "The sea arrives before the city does. You smell it first — salt and rain and something faintly sweet that turns out to be incense from the temple at the end of the lane. On Gulangyu the streets are too narrow for cars, which means you hear everything: piano scales from a second-floor window, the clatter of a bicycle, someone's grandmother arguing with a fruit seller. The pace is different here. You will notice it by the end of the first afternoon.",
        proseZh: '海比城市先到。你先闻到它——盐味、雨气，还有一丝来自巷子尽头庙宇的香烟。鼓浪屿的路窄得不够车过，于是你听见了一切：二楼窗户里的钢琴音阶，自行车经过的声音，有人的阿嬷在和水果摊吵架。节奏在这里不一样，你第一个下午就能感觉到。',
      },
      {
        city: 'Quanzhou',
        cityZh: '泉州',
        prose: 'Marco Polo called this harbour the finest he had ever seen. That was the thirteenth century. The Tang dynasty mosque still stands. The Song dynasty temple still holds its incense smoke. In the side streets you find stone carvings in Arabic and Tamil alongside Chinese characters — because this was the port the whole world passed through, and it kept the marks. The diaspora that built Chinatowns from Vancouver to Singapore started leaving from docks like these.',
        proseZh: '马可·波罗说这里是他见过最好的港口，那是十三世纪。唐代清真寺还在。宋代寺庙的香火还在续。街边的石刻上有阿拉伯文、泰米尔文和汉字并排——因为这曾是全世界都要经过的港口，它留下了所有人的痕迹。从温哥华到新加坡，建起唐人街的那批离乡者，就是从这样的码头出发的。',
      },
      {
        city: 'Chaoshan',
        cityZh: '潮汕',
        prose: "Chaoshan moves at the speed of tea. A session here is not a tourist activity — it's how people talk. Your host will fill the tiny cup before it empties; refusing means you want to leave. Sit long enough and the conversation finds its own rhythm. The beef at dinner was in a paddock this morning. The noodles were made by hand two hours ago. Everything is closer to its source than you expect.",
        proseZh: '潮汕按功夫茶的速度运转。在这里，喝茶不是旅游项目，是人们说话的方式。主人会在杯子见底前续满；拒绝意味着你要走了。坐够久，对话会找到自己的节奏。晚饭桌上的牛肉今天早上还在田里，面条两个小时前刚手工做好。一切都比你以为的更靠近它的来处。',
      },
      {
        city: 'Shenzhen',
        cityZh: '深圳',
        prose: 'Shenzhen announces itself through scale. The buildings are enormous and new and completely unapologetic about it. There is no nostalgia here — the city is 45 years old and knows it. What you find instead is energy: the electronics market where engineers source components at 8am, the art district that appeared in a former factory compound, the young residents who came from everywhere else and are still figuring out what kind of place this is.',
        proseZh: '深圳用体量宣告自己。楼很高，很新，毫不道歉。这座城市45岁，它知道。没有怀旧，只有能量：电子市场里清晨八点就来取货的工程师，旧厂房里长出来的艺术区，从四面八方来的年轻人，还在摸索这地方究竟是什么。',
      },
    ],
  },
  priceBreakdown: [
    { label: 'Accommodation', labelZh: '住宿', noteHtml: '<strong>4–5★ hotel</strong>, shared double room', noteHtmlZh: '<strong>4–5星酒店</strong>，双人间', pct: 37 },
    { label: 'Food & dining', labelZh: '餐饮', noteHtml: 'Local specialty restaurants daily', noteHtmlZh: '每日特色餐厅', pct: 31 },
    { label: 'Activities & tickets', labelZh: '活动与门票', noteHtml: 'Entrance fees + special programming', noteHtmlZh: '景点门票及特色活动', pct: 13 },
    { label: 'Guide & local transport', labelZh: '导游及市内交通', noteHtml: 'Professional guide + daily in-city', noteHtmlZh: '专业导游及每日市内交通', pct: 9 },
    { label: 'City-to-city transfers', labelZh: '城市间交通', noteHtml: 'High-speed rail & coastal trains', noteHtmlZh: '高铁及沿海列车', pct: 9 },
  ],
  card: {
    subtitle: 'Xiamen · Quanzhou · Chaoshan · Shenzhen',
    subtitleZh: '厦门 · 泉州 · 潮汕 · 深圳',
    image: '/images/places/south-china-tower-forest.jpg',
    imageAlt: 'Quanzhou East Pagoda rising above city trees',
    imageAltZh: '泉州东塔俯瞰城市',
    description:
      "This is the coast Chinatowns came from. If you know anyone Chinese outside of China, their family probably left through here.",
    descriptionZh:
      '这是世界各地唐人街的出发地。如果你认识任何一个海外华人，他们的家族很可能从这里出发。',
    duration: '10 Days',
    durationZh: '10 天',
    cities: '4 Cities',
    citiesZh: '4 座城市',
    sealChar: '侨',
    arcTitle: 'The Diaspora Coast',
    arcTitleZh: '侨 · 离散海岸',
    culturalFocus: 'Mazu Maritime Faith · Gongfu Tea · Ancestral Clan Halls · Maritime Diaspora',
    culturalFocusZh: '妈祖信仰 · 功夫茶 · 宗祠族群 · 下南洋历史',
  },
  form: {
    scheduleId: 'south-jul',
    formLabel: 'South China Route',
    arrive: 'Xiamen',
    depart: 'Shenzhen / Hong Kong',
    color: '#2E8B57',
  },
  seo: {
    title: 'Xiamen to Shenzhen: South China Student Trip 2026 | Explore China',
    titleZh: '厦门·泉州·潮汕·深圳 华南学生旅行 2026 | 探索中国',
    description: "A 10-day student travel route through Xiamen, Quanzhou, Chaoshan and Shenzhen — diaspora coast, Mazu maritime faith, Gongfu tea, and China's fastest-built city.",
    descriptionZh: '探索中国华南线路——10天走访厦门、泉州、潮汕与深圳，海上丝路、妈祖信仰、功夫茶文化与中国速度最快的新兴城市。',
  },
};
