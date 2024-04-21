const ItemFilters = require('./app/config/ItemFilters.js')

let feedList = [
  { // <outline type="rss" text="靖技場++" title="靖技場++" xmlUrl="http://pulipuli.myqnapcloud.com/304/fc/http%3A%2F%2Fjinnsblog.blogspot.com%2Ffeeds%2Fposts%2Fdefault" htmlUrl="https://www.jinnsblog.com/"/>
    title: '靖技場 聊 3C',
    feedID: 'jinnsblog',
    feedURL: 'https://www.jinnsblog.com/feed',
    itemFilters: [
      ItemFilters['sites'].ItemFilterBlog,
      // ItemFilters['common'].ItemFilterImageEmbed,
    ],
    options: {
      selector: 'article[id] > .entry-content'
    }
  },
  { // <outline type="rss" text="要改的地方太多了，那就改天吧++" title="要改的地方太多了，那就改天吧++" xmlUrl="http://pulipuli.myqnapcloud.com/304/fc/https%3A%2F%2Fblog.user.today%2Ffeed%2F" htmlUrl="https://blog.user.today"/>
    title: '要改的地方太多了，那就改天吧',
    feedID: 'user.today',
    feedURL: 'https://blog.user.today/feed',
    itemFilters: [
      ItemFilters['sites'].ItemFilterBlog,
      // ItemFilters['common'].ItemFilterImageEmbed,
    ],
    options: {
      selector: 'article[id] > .entry__content'
    }
  },
  { // <outline type="rss" text="3C匠-喜愛玩各種3C產品++$0414-1925$" title="3C匠-喜愛玩各種3C產品++$0414-1925$" xmlUrl="http://pulipuli.myqnapcloud.com/304/fc/$0414-1925$/https%3A%2F%2F3cjohnhardware.wordpress.com%2Ffeed%2F" htmlUrl="https://3cjohnhardware.wordpress.com"/>
    title: '3C匠',
    feedID: '3cjohnhardware',
    feedURL: 'https://3cjohnhardware.wordpress.com/feed',
    itemFilters: [
      ItemFilters['sites'].ItemFilterBlog,
      // ItemFilters['common'].ItemFilterImageEmbed,
    ],
    options: {
      selector: 'article[id] > .entry-content'
    }
  },
  { // <outline type="rss" text="香腸炒章魚 :: 痞客邦 PIXNET ::++$0414-1925$" title="香腸炒章魚 :: 痞客邦 PIXNET ::++$0414-1925$" xmlUrl="http://pulipuli.myqnapcloud.com/304/fc/$0414-1925$/http%3A%2F%2Ffeed.pixnet.net%2Fblog%2Fposts%2Frss%2Fmitblog" htmlUrl="http://mitblog.pixnet.net/blog"/>
    title: '香腸炒章魚',
    feedID: 'mitblog',
    feedURL: 'https://feed.pixnet.net/blog/posts/rss/mitblog',
    thumbnail: 'https://i.ibb.co/HNYFwkF/sausage.png',
    itemFilters: [
      ItemFilters['sites'].ItemFilterBlog,
      // ItemFilters['common'].ItemFilterImageEmbed,
    ],
    options: {
      selector: '#article-content-inner[itemprop="articleBody"]'
    }
  },
  { // <outline type="rss" text="linux-apps.com - Latest Products++" title="linux-apps.com - Latest Products++" xmlUrl="http://pulipuli.myqnapcloud.com/304/fc/https%3A%2F%2Fwww.linux-apps.com%2Fcontent.rdf"/>
    title: 'Linux Apps',
    feedID: 'linux-apps',
    feedURL: 'https://www.linux-apps.com/content.rdf',
    thumbnail: 'https://www.linux-apps.com/stores/media/store_logo/storeLogo.png',
    itemFilters: [
      ItemFilters['sites'].ItemFilterLinuxApps,
      ItemFilters['common'].ItemFilterThumbnail,
    ],
  },
  { // <outline type="rss" text="梅問題．教學網++$0414-1925$" title="梅問題．教學網++$0414-1925$" xmlUrl="http://pulipuli.myqnapcloud.com/304/fc/$0414-1925$/http%3A%2F%2Ffeeds.feedburner.com%2Fminwt%2FLZgW" htmlUrl="https://www.minwt.com/"/>
    title: '梅問題．教學網',
    feedID: 'minwt',
    feedURL: 'http://feeds.feedburner.com/minwt/LZgW',
    thumbnail: 'https://www.minwt.com/images/Icon@2.png',
    itemFilters: [
      ItemFilters['sites'].ItemFilterBlog,
      // ItemFilters['common'].ItemFilterImageEmbed,
    ],
    options: {
      selector: 'article > [itemprop="articleBody"]'
    }
  },
  { // <outline type="rss" text="黑暗執行緒++" title="黑暗執行緒++" xmlUrl="http://pulipuli.myqnapcloud.com/304/fc/http%3A%2F%2Fblog.darkthread.net%2Fblogs%2Fdarkthreadtw%2Frss.aspx" htmlUrl="https://blog.darkthread.net/"/>
    title: '黑暗執行緒',
    feedID: 'darkthread',
    feedURL: 'https://blog.darkthread.net/feed/rss/',
    thumbnail: 'https://blog.darkthread.net/img/icon512x512.png',
    itemFilters: [
      ItemFilters['sites'].ItemFilterBlog,
      // ItemFilters['common'].ItemFilterImageEmbed,
    ],
    options: {
      selector: 'article > [itemprop="articleBody mainEntityOfPage"]'
    }
  },
  { // <outline type="rss" text="异次元软件世界++" title="异次元软件世界++" xmlUrl="http://pulipuli.myqnapcloud.com/304/fc/http%3A%2F%2Ffeed.iplaysoft.com%2F" htmlUrl="https://www.iplaysoft.com"/>
    title: '异次元软件世界',
    feedID: 'iplaysoft',
    feedURL: 'https://feed.iplaysoft.com',
    thumbnail: 'https://cdn.iplaysoft.com/ips/logo/200x200.png',
    itemFilters: [
      ItemFilters['sites'].ItemFilterBlog,
      // ItemFilters['common'].ItemFilterImageEmbed,
    ],
    options: {
      selector: '#content > .post > .entry-content'
    }
  },
  { // <outline type="rss" text="Linuxeden开源社区++$0413-0909$" title="Linuxeden开源社区++$0413-0909$" xmlUrl="http://pulipuli.myqnapcloud.com/304/fc/$0413-0909$,/http%3A%2F%2Fwww.linuxeden.com%2Ffeed" htmlUrl="http://www.linuxeden.com"/>
    title: '批踢踢實業坊 Hearthstone 板',
    feedID: 'ptt-Hearthstone',
    feedURL: 'https://www.ptt.cc/atom/Hearthstone.xml',
    thumbnail: 'https://i.ibb.co/Fm611Y1/Ptt-Chrome-200x198.png',
    itemFilters: [
      ItemFilters['sites'].ItemFilterBlog,
      ItemFilters['sites'].ItemFilterPTT,
    ],
    options: {
      selector: '#main-container'
    }
  },
  { // <outline type="rss" text="Linuxeden开源社区++$0413-0909$" title="Linuxeden开源社区++$0413-0909$" xmlUrl="http://pulipuli.myqnapcloud.com/304/fc/$0413-0909$,/http%3A%2F%2Fwww.linuxeden.com%2Ffeed" htmlUrl="http://www.linuxeden.com"/>
    title: '批踢踢實業坊 PokemonGo 板',
    feedID: 'ptt-PokemonGo',
    feedURL: 'https://www.ptt.cc/atom/PokemonGo.xml',
    thumbnail: 'https://i.ibb.co/Fm611Y1/Ptt-Chrome-200x198.png',
    itemFilters: [
      ItemFilters['sites'].ItemFilterBlog,
      ItemFilters['sites'].ItemFilterPTT,
    ],
    options: {
      selector: '#main-container'
    }
  },
  { // <outline type="rss" text="Linuxeden开源社区++$0413-0909$" title="Linuxeden开源社区++$0413-0909$" xmlUrl="http://pulipuli.myqnapcloud.com/304/fc/$0413-0909$,/http%3A%2F%2Fwww.linuxeden.com%2Ffeed" htmlUrl="http://www.linuxeden.com"/>
    title: 'Chrome Unboxed',
    feedID: 'chromeunboxed',
    feedURL: 'https://chromeunboxed.com/feed/',
    itemFilters: [
      ItemFilters['sites'].ItemFilterBlog,
      ItemFilters['common'].ItemFilterImageEmbed,
      ItemFilters['common'].ItemFilterThumbnailCache,
    ],
    options: {
      selector: 'article > .entry-content'
    }
  },
  { // <outline type="rss" text="FUNTOP資訊網++$0414-1925$" title="FUNTOP資訊網++$0414-1925$" xmlUrl="http://pulipuli.myqnapcloud.com/304/fc/$0414-1925$/http%3A%2F%2Ffuntop.tw%2Ffeed%2F" htmlUrl="https://funtop.tw/"/>
    title: 'FUNTOP資訊網',
    feedID: 'funtop',
    feedURL: 'https://funtop.tw/feed/',
    thumbnail: 'https://funtop.tw/wp-content/themes/funtop/img/favicon.ico?ver=1',
    itemFilters: [
      ItemFilters['sites'].ItemFilterBlog,
      ItemFilters['sites'].ItemFilterFuntop,
      // ItemFilters['common'].ItemFilterImageEmbed,
    ],
    options: {
      selector: 'article[id]',
      proxy: true
    }
  },
  { // <outline type="rss" text="學不完．教不停．用不盡 :: 痞客邦 PIXNET ::" title="學不完．教不停．用不盡 :: 痞客邦 PIXNET ::" xmlUrl="http://feeds.feedburner.com/pixnetisvincent"/>
    title: '學不完．教不停．用不盡',
    feedID: 'pixnetisvincent',
    feedURL: 'http://feeds.feedburner.com/pixnetisvincent',
    itemFilters: [
      ItemFilters['sites'].ItemFilterBlog,
      // ItemFilters['common'].ItemFilterImageEmbed,
      // ItemFilters['common'].ItemFilterThumbnailCache,
    ],
    options: {
      selector: '.article-body > .article-content > .article-content-inner'
    }
  },
  { // <outline type="rss" text="承風雅傳HSU 電腦工作室 BLOG :: 痞客邦 PIXNET ::" title="承風雅傳HSU 電腦工作室 BLOG :: 痞客邦 PIXNET ::" xmlUrl="http://feed.pixnet.net/blog/posts/rss/hsuanthony" htmlUrl="http://hsuanthony.pixnet.net/blog"/>
    title: '承風雅傳HSU 電腦工作室 BLOG',
    feedID: 'hsuanthony',
    feedURL: 'http://feed.pixnet.net/blog/posts/rss/hsuanthony',
    itemFilters: [
      ItemFilters['sites'].ItemFilterBlog,
      // ItemFilters['common'].ItemFilterImageEmbed,
      // ItemFilters['common'].ItemFilterThumbnailCache,
    ],
    options: {
      selector: '.article-body > .article-content > .article-content-inner'
    }
  },
  { // <outline type="rss" text="承風雅傳HSU 電腦工作室 BLOG :: 痞客邦 PIXNET ::" title="承風雅傳HSU 電腦工作室 BLOG :: 痞客邦 PIXNET ::" xmlUrl="http://feed.pixnet.net/blog/posts/rss/hsuanthony" htmlUrl="http://hsuanthony.pixnet.net/blog"/>
    title: '科技狗',
    feedID: '3cdogs',
    feedURL: 'https://3cdogs.com/feed/',
    itemFilters: [
      ItemFilters['sites'].ItemFilterBlog,
      // ItemFilters['common'].ItemFilterImageEmbed,
      // ItemFilters['common'].ItemFilterThumbnailCache,
    ],
    options: {
      selector: 'article[id] > .entry-content'
    }
  },
  { // <outline type="rss" text="承風雅傳HSU 電腦工作室 BLOG :: 痞客邦 PIXNET ::" title="承風雅傳HSU 電腦工作室 BLOG :: 痞客邦 PIXNET ::" xmlUrl="http://feed.pixnet.net/blog/posts/rss/hsuanthony" htmlUrl="http://hsuanthony.pixnet.net/blog"/>
    title: 'XDA',
    feedID: 'xda',
    feedURL: 'http://www.xda-developers.com/feed/',
    itemFilters: [
      ItemFilters['sites'].ItemFilterBlog,
      // ItemFilters['common'].ItemFilterImageEmbed,
      // ItemFilters['common'].ItemFilterThumbnailCache,
    ],
    options: {
      selector: '#article-body > .content-block-regular'
    }
  },
  {
    title: '极客FUN',
    feedID: 'eiefun',
    feedURL: 'https://www.eiefun.com/feed',
    itemFilters: [
      ItemFilters['sites'].ItemFilterBlog,
      // ItemFilters['common'].ItemFilterImageEmbed,
      // ItemFilters['common'].ItemFilterThumbnailCache,
    ],
    options: {
      selector: 'article[id] > .post-content-wrap > .post-content'
    }
  },
  { // <outline type="rss" text="FUNTOP資訊網++$0414-1925$" title="FUNTOP資訊網++$0414-1925$" xmlUrl="http://pulipuli.myqnapcloud.com/304/fc/$0414-1925$/http%3A%2F%2Ffuntop.tw%2Ffeed%2F" htmlUrl="https://funtop.tw/"/>
    title: 'Android Central',
    feedID: 'AndroidCentral',
    feedURL: 'https://www.androidcentral.com/rss.xml',
    itemFilters: [
      // ItemFilters['sites'].ItemFilterBlog,
      // ItemFilters['common'].ItemFilterImageEmbed,
      // ItemFilters['common'].ItemFilterThumbnailCache,
    ],
    options: {
      selector: '#article-body'
    }
  },
  { // <outline type="rss" text="FUNTOP資訊網++$0414-1925$" title="FUNTOP資訊網++$0414-1925$" xmlUrl="http://pulipuli.myqnapcloud.com/304/fc/$0414-1925$/http%3A%2F%2Ffuntop.tw%2Ffeed%2F" htmlUrl="https://funtop.tw/"/>
    title: '關鍵應用',
    feedID: 'key-chtouch',
    feedURL: 'https://key.chtouch.com/rss.xml',
    itemFilters: [
      ItemFilters['sites'].ItemFilterBlog,
      // ItemFilters['sites'].ItemFilterKeyChtouch,
      ItemFilters['common'].ItemFilterImageEmbed,
      ItemFilters['common'].ItemFilterThumbnailRemove,
    ],
    options: {
      selector: 'article > .entry-content',
      proxy: true,
    }
  },
  {
    title: '天瓏書局',
    feedID: 'tenlong',
    feedURL: 'https://sub-tenlong-2021.blogspot.com/feeds/posts/default',
    itemFilters: [
      ItemFilters['sites'].ItemFilterTenlong,
    ],
  },
  {
    title: '硬核观察 | Linux 中国◆开源社区',
    feedID: 'linux-cn-weekly-news',
    feedURL: 'http://linux.cn/rss.xml',
    itemFilters: [
      ItemFilters['sites'].ItemFilterLinuxCNWeeklyNews,
    ],
  },
  {
    title: '公視新聞網',
    feedID: 'pts-news',
    feedURL: 'https://news.pts.org.tw/xml/newsfeed.xml',
    itemFilters: [
      ItemFilters['sites'].ItemFilterBlog,
      ItemFilters['sites'].ItemFilterPTSNews
    ],
    options: {
      selector: 'body > article',
      proxy: true,
    }
  },
  {
    title: 'Ivon的部落格',
    feedID: 'ivon-huang-blog',
    feedURL: 'https://ivonblog.com/index.xml',
    itemFilters: [
      ItemFilters['sites'].ItemFilterBlog,
      ItemFilters['common'].ItemFilterImageEmbed,
    ],
    options: {
      selector: 'body main#main-content article .article-content',
    }
  },
]

// 23 / 30

// ----------------------------------------------------------------

// feedList = [
//   {
//     title: 'Ivon的部落格',
//     feedID: 'ivon-huang-blog',
//     feedURL: 'https://ivonblog.com/index.xml',
//     itemFilters: [
//       ItemFilters['sites'].ItemFilterBlog,
//       ItemFilters['common'].ItemFilterImageEmbed,
//     ],
//     options: {
//       selector: 'body main#main-content article .article-content',
//     }
//   },
// ]

module.exports = feedList
