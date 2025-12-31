import { ImageWithFallback } from './figma/ImageWithFallback';
import { SectionDivider } from './SectionDivider';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  tags?: string[];
  image?: string;
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: '2025 重新定义的生活',
    excerpt: 'AI 生产力革命与迷茫、迎来新生命、努力搞钱、不合时宜的开源思维、赛博生活',
    date: '2025年12月25日',
    category: '日记本',
    tags: ['年终总结'],
    image: 'https://images.unsplash.com/photo-1624194243441-c9d1176e99fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwY2F0fGVufDF8fHx8MTc2NzE3MDg4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: '2',
    title: '欧洲旅游VLOG | 巴塞罗那 罗马 梵蒂冈 威尼斯 米兰 苏黎世 因特拉肯 巴黎',
    excerpt: '2022年12月...',
    date: '2025年12月20日',
    category: '创作集',
    tags: ['vlog'],
    image: 'https://images.unsplash.com/photo-1677690489325-e6a4d2594d76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldXJvcGVhbiUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NjcxMTEyNTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: '3',
    title: '上古神器 Beancount：Crypto 与 AI 时代的复式记账终极方案',
    excerpt: '很多时候我们觉得记账麻烦，并不是 UI 不够漂亮、交互不够顺滑，而是记账方法不够科学。当方法足够科学时，你甚至不需要 UI，一个 CLI + 几个纯文本文件 + 一套清晰语法，就能把财务世界描述得非常准确',
    date: '2025年12月12日',
    category: '分享境',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbnxlbnwxfHx8fDE3NjcxNTQ3NjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: '4',
    title: '一个六岁开源项目的崩溃与新生',
    excerpt: '我有一个维护了六年的开源项目—— RSSHub，它正在面临崩溃。表面上，它有接近 30k Stars、900 多 Contributors、每月 3 亿多次请求和数不清的用户、每月几十刀的赞助、有源源不断的 issue 和 pr、代码几乎每天更新，非常健康和充满活力',
    date: '2024年3月10日',
    category: '创作集',
    image: 'https://images.unsplash.com/photo-1717343824623-06293a62a70d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwbWFwfGVufDF8fHx8MTc2NzE3MDg4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: '5',
    title: '和帕鲁生活在一起的两周',
    excerpt: '哪个小男孩没幻想过生活在这样一个充满宝可梦伙伴的世界，它们能听懂且愿意倾听我们说话，有着不同的特点和强大的技能，而且都很可爱，我们可以跟它们睡觉吃饭、并肩作战探索世界，永远不再孤独，不管是谁都可以找到最适合自己的宝可梦',
    date: '2024年2月18日',
    category: '闲言语',
    image: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW5zZXQlMjBwZXJzb258ZW58MXx8fHwxNzY3MTcwODg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: '6',
    title: 'Twitter 对开源项目发起 DDoS 攻击',
    excerpt: 'Twitter 被马斯克收购后，从去年 8 月开始，他们对开源第三方集成和第三方客户端进行了一系列明里暗里的打压和攻击，这样做是为了阻止用户通过非官方客户端访问和使用 Twitter，来增加公司的广告和会员营收',
    date: '2024年1月28日',
    category: '闲言语',
  },
  {
    id: '7',
    title: '如何优雅编译一个 Markdown 文档',
    excerpt: 'Markdown 是一种广泛使用的轻量级标记语言，允许人们使用易读易写的纯文本格式编写文档，也是 xLog 主要使用的文章格式，本文就以 xLog Flavored Markdown 为例来说明如何优雅地解析一个 Markdown 文档',
    date: '2024年1月18日',
    category: '分享境',
  },
];

export function BlogList() {
  return (
    <>
      <SectionDivider label="我写的文章" />
      
      <section id="articles" className="max-w-4xl mx-auto px-7 lg:px-0">
        <h2 className="leading-10 tracking-tight text-neutral-900 dark:text-neutral-100">
          文章
        </h2>
        
        <p className="mb-2 mt-2 text-neutral-600 dark:text-neutral-400">
          分类：{' '}
          <a href="#" className="hover:underline decoration-dashed underline-offset-4">
            创作集 (26)
          </a>
          、{' '}
          <a href="#" className="hover:underline decoration-dashed underline-offset-4">
            分享境 (17)
          </a>
          、{' '}
          <a href="#" className="hover:underline decoration-dashed underline-offset-4">
            研习坊 (16)
          </a>
          、{' '}
          <a href="#" className="hover:underline decoration-dashed underline-offset-4">
            日记本 (13)
          </a>
        </p>
        
        <p className="mb-6 text-neutral-600 dark:text-neutral-400">
          标签：{' '}
          <a href="#" className="hover:underline decoration-dashed underline-offset-4">
            #年终总结 (6)
          </a>
          、{' '}
          <a href="#" className="hover:underline decoration-dashed underline-offset-4">
            #新坑 (6)
          </a>
          、{' '}
          <a href="#" className="hover:underline decoration-dashed underline-offset-4">
            #vlog (5)
          </a>
        </p>

        <div className="w-full max-w-4xl mx-auto my-7 xl:px-0">
          <div className="flex flex-col items-start justify-start md:flex-row md:space-x-7">
            <div className="w-full space-y-7">
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  className="relative border border-transparent border-dashed cursor-pointer px-6 py-5 md:p-7 group rounded-2xl"
                  tabIndex={0}
                >
                  <span className="absolute inset-0 z-20 w-full h-full duration-300 ease-out bg-white border border-dashed dark:bg-neutral-950 rounded-2xl border-neutral-300 dark:border-neutral-600 group-hover:-translate-x-1 group-hover:-translate-y-1"></span>
                  <span className="absolute inset-0 z-10 w-full h-full duration-300 ease-out border border-dashed rounded-2xl border-neutral-300 dark:border-neutral-600 group-hover:translate-x-1 group-hover:translate-y-1"></span>
                  
                  <div className="flex relative z-30 duration-300 ease-out group-hover:-translate-x-1 group-hover:-translate-y-1">
                    <div className="flex-1">
                      <h3 className="flex items-center mb-3">
                        <a href="#" className="leading-tight tracking-tight dark:text-neutral-100">
                          {post.title}
                        </a>
                        <svg
                          className="group-hover:translate-x-0 flex-shrink-0 translate-y-0.5 -translate-x-1 w-2.5 h-2.5 stroke-current ml-1 transition-all ease-in-out duration-200 transform"
                          viewBox="0 0 13 15"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g
                            stroke="none"
                            strokeWidth="1"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <g stroke="currentColor" strokeWidth="2.4">
                              <polyline
                                className="transition-all duration-200 ease-out opacity-0 delay-0 group-hover:opacity-100"
                                points="5.33333333 0 10.8333333 5.5 5.33333333 11"
                              />
                              <line
                                className="transition-all duration-200 ease-out transform -translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                                x1="10.8333333"
                                y1="5.5"
                                x2="0.833333333"
                                y2="5.16666667"
                              />
                            </g>
                          </g>
                        </svg>
                      </h3>
                      
                      <p className="text-neutral-600 dark:text-neutral-400 line-clamp-3 break-all">
                        {post.excerpt}
                      </p>
                      
                      <div className="mt-2.5 text-neutral-800 dark:text-neutral-300">
                        {post.date} ·{' '}
                        <a href="#" className="hover:underline decoration-dashed underline-offset-4">
                          {post.category}
                        </a>
                        {post.tags && (
                          <>
                            {' · '}
                            <span className="inline-flex flex-wrap gap-1">
                              {post.tags.map((tag) => (
                                <a
                                  key={tag}
                                  href="#"
                                  className="hover:underline decoration-dashed underline-offset-4"
                                >
                                  #{tag}
                                </a>
                              ))}
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                    
                    {post.image && (
                      <div className="hidden ml-2 size-32 md:block md:ml-7">
                        <ImageWithFallback
                          src={post.image}
                          alt={post.title}
                          className="aspect-square object-cover rounded-xl"
                        />
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center w-full py-5">
          <a
            href="/posts"
            className="inline-flex w-auto px-4 py-2 mt-5 duration-300 ease-out border rounded-full bg-neutral-900 dark:bg-white dark:text-neutral-900 text-neutral-100 hover:border-neutral-700 border-neutral-900 dark:hover:border-neutral-300 hover:bg-white dark:hover:bg-black dark:hover:text-white hover:text-neutral-900"
          >
            查看所有文章
          </a>
        </div>
      </section>
    </>
  );
}
