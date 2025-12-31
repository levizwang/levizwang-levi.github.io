
import { Github, Twitter, Mail, Rss } from 'lucide-react';

export const siteConfig = {
  name: "Levi",
  title: "Here is Levi",
  description: "Code is cheap, show me the prompt!",
  bio: "前PwC IT审计师 → 前Bytedance AI评估专家 → 现互联网金融AI码农\n兼职Web3分析师 & 资深爆仓人 & 合约审计师",
  startDate: "2026-01-01",
  avatar: "/IMG_4812.JPG",
  
  social: [
    {
      name: "RSS",
      url: "/feed",
      icon: Rss,
      size: 18
    },
    {
      name: "Twitter",
      url: "https://x.com/DIYgod",
      icon: Twitter,
      size: 16
    },
    {
      name: "GitHub",
      url: "https://github.com/DIYgod",
      icon: Github,
      size: 20
    },
    {
      name: "Email",
      url: "wang.z.levi@gmail.com",
      icon: Mail,
      size: 20
    }
  ],

  nav: [
    { name: "首页", path: "/" },
    { name: "文章", path: "/posts" },
    { name: "项目", path: "/projects" },
    { name: "关于", path: "/about" },
  ],

  projects: [
    {
      id: '1',
      name: 'Folo',
      description: 'This AI RSS reader reads the internet for you',
      image: 'https://images.unsplash.com/photo-1607124010064-ec0ee718cc1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyc3MlMjBmZWVkfGVufDF8fHx8MTc2NzE3MDk0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      link: 'https://folo.is',
    },
    {
      id: '2',
      name: 'xLog',
      description: 'An open-source creative community written on the blockchain',
      image: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY3MTE1MjE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      link: 'https://xlog.app',
    },
    {
      id: '3',
      name: 'RSSHub Radar',
      description: 'Simplifies subscribing RSS and RSSHub',
      image: 'https://images.unsplash.com/photo-1655196601100-8bfb26cf99e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicm93c2VyJTIwZXh0ZW5zaW9ufGVufDF8fHx8MTc2NzE3MDk0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      link: 'https://github.com/DIYgod/RSSHub-Radar',
    },
    {
      id: '4',
      name: '哔哩哔哩 Web 播放器',
      description: '哔哩哔哩 (゜-゜)つロ 干杯~-bilibili',
      image: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMHBsYXllcnxlbnwxfHx8fDE3NjcxNzA5NDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      link: 'https://www.bilibili.com/blackboard/webplayer_history.html',
    },
    {
      id: '5',
      name: 'RSSHub',
      description: 'Everything is RSSible',
      image: 'https://images.unsplash.com/photo-1607124010064-ec0ee718cc1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyc3MlMjBmZWVkfGVufDF8fHx8MTc2NzE3MDk0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      link: 'https://docs.rsshub.app',
    },
    {
      id: '6',
      name: 'DPlayer',
      description: 'Wow, such a lovely HTML5 danmaku video player',
      image: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMHBsYXllcnxlbnwxfHx8fDE3NjcxNzA5NDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      link: 'https://dplayer.diygod.dev',
    },
    {
      id: '7',
      name: 'APlayer',
      description: 'Wow, such a beautiful HTML5 music player',
      image: 'https://images.unsplash.com/photo-1616356607338-fd87169ecf1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHBsYXllcnxlbnwxfHx8fDE3NjcxNzA5NDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      link: 'https://aplayer.js.org',
    },
    {
      id: '8',
      name: 'RSSAid',
      description: '开源、简洁的 RSS 阅读器',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHB8ZW58MXx8fHwxNzY3MTQ1MTc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: '9',
      name: '丁香园',
      description: '面向医生、医疗机构、医药从业者以及生命科学领域人士的专业性社会化网络',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbnxlbnwxfHx8fDE3NjcxNTQ3NjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      link: 'https://www.dxy.cn/',
    },
  ],

  about: {
    intro: [
      "人类",
      "可爱、纯粹、没有脱离低级趣味",
      "现居新加坡",
      "动漫、编程爱好者，喜欢打游戏但花的时间不多",
      "喜欢橙色和黄色",
      "家庭成员有 justcc（也常称发小）（老婆）、哈哈（女儿）、酸奶（猫咪）",
      "INTJ-O-C，95% 内向",
    ],
    footprints: [
      "临沂", "武汉", "杭州", "上海", "英国", "新加坡"
    ],
    contact: {
      dynamic: [
        { label: "Ethereum: diygod.eth", url: "https://web3.bio/diygod.eth" },
        { label: "Telegram 频道 @awesomeDIYgod", url: "https://t.me/awesomeDIYgod" },
        { label: "Twitter @DIYgod", url: "https://twitter.com/DIYgod" },
        { label: "GitHub @DIYgod", url: "https://github.com/DIYgod" },
        { label: "bilibili @DIYgod", url: "https://space.bilibili.com/2267573" },
        { label: "博客RSS", url: "/feed" },
        { label: "pixiv @DIYgod", url: "https://www.pixiv.net/users/15288095" },
        { label: "即刻 @DIYgod", url: "https://m.okjike.com/users/3EE02BC9-C5B3-4209-8750-4ED1EE0F67BB" },
        { label: "豆瓣 DIYgod", url: "https://www.douban.com/people/62759792/" },
      ],
      im: [
        { label: "Telegram @DIYgod", url: "https://t.me/DIYgod" },
        { label: "Telegram 群 @prpr233", url: "https://t.me/prpr233" },
      ],
      game: [
        { label: "Steam: diygod", url: "https://steamcommunity.com/id/diygod" },
        { label: "Nintendo Switch: SW-3404-1126-5044" },
        { label: "PlayStation @DIYgod_", url: "https://psnprofiles.com/DIYgod_" },
      ]
    },
    blogHistory: [
      { text: "2014 年 2 月 9 日创建" },
      { text: "早期文章因为太尴尬删了好多" },
      { 
        text: "历史：",
        subItems: [
          "2014 年 2 月 - 2017 年 11 月运行在 WordPress",
          "2017 年 11 月 - 2022 年 9 月运行在 Hexo",
          "2022 年 9 月 - 2025 年 12 月运行在 xLog",
          "2025 年 12 月起运行在 Astro (现已重构为 React)"
        ]
      }
    ]
  }
};
