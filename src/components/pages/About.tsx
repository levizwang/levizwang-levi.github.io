import React from 'react';

export function About() {
  return (
    <div className="relative z-30 max-w-4xl pb-1 mx-auto mt-10 bg-white dark:bg-neutral-950 md:rounded-t-md text-neutral-900">
      <div className="relative flex flex-col px-5 pt-6 border-t border-b-0 md:border-r md:border-l md:pt-20 lg:px-0 justify-stretch md:rounded-t-2xl border-neutral-200 dark:border-neutral-800">
        <h1 className="w-full max-w-2xl mx-auto text-3xl font-bold text-left md:mb-8 md:text-4xl dark:text-neutral-100 lg:text-5xl">关于</h1>
        
        <section className="relative w-full max-w-2xl mx-auto mt-10">
          <article className="w-full max-w-2xl mx-auto prose-sm prose px-7 lg:px-0 lg:prose-lg dark:prose-invert prose-h3:font-bold prose-h4:font-bold prose-code:font-medium prose-a:underline prose-a:decoration-dashed prose-a:decoration-neutral-300 prose-a:underline-offset-4 prose-a:text-inherit prose-a:font-normal">
            <ul>
              <li>人类</li>
              <li>可爱、纯粹、没有脱离低级趣味</li>
              <li>现居新加坡</li>
              <li>动漫、编程爱好者，喜欢打游戏但花的时间不多</li>
              <li>喜欢橙色和黄色</li>
              <li>家庭成员有 justcc（也常称发小）（老婆）、哈哈（女儿）、酸奶（猫咪）</li>
              <li>INTJ-O-C，95% 内向</li>
            </ul>

            <h2 id="footprints">足迹</h2>
            <p>不是一个旅游爱好者，但经常世界各地搬家</p>
            <div className="bg-neutral-100 dark:bg-neutral-900 p-4 rounded-lg my-4">
              <p className="text-sm text-neutral-500">（地图组件在此处展示：临沂 &rarr; 武汉 &rarr; 杭州 &rarr; 上海 &rarr; 英国 &rarr; 新加坡）</p>
            </div>

            <h2 id="contact">抓到我</h2>
            <p>在互联网常常混迹在这些地方</p>
            <p>🍃 动态：</p>
            <ul>
              <li><a href="https://web3.bio/diygod.eth" target="_blank" rel="noopener noreferrer">Ethereum: diygod.eth</a></li>
              <li><a href="https://t.me/awesomeDIYgod" target="_blank" rel="noopener noreferrer">Telegram 频道 @awesomeDIYgod</a></li>
              <li><a href="https://twitter.com/DIYgod" target="_blank" rel="noopener noreferrer">Twitter @DIYgod</a></li>
              <li><a href="https://github.com/DIYgod" target="_blank" rel="noopener noreferrer">GitHub @DIYgod</a></li>
              <li><a href="https://space.bilibili.com/2267573" target="_blank" rel="noopener noreferrer">bilibili @DIYgod</a></li>
              <li><a href="/feed">博客RSS</a></li>
              <li><a href="https://www.pixiv.net/users/15288095" target="_blank" rel="noopener noreferrer">pixiv @DIYgod</a></li>
              <li><a href="https://m.okjike.com/users/3EE02BC9-C5B3-4209-8750-4ED1EE0F67BB" target="_blank" rel="noopener noreferrer">即刻 @DIYgod</a></li>
              <li><a href="https://www.douban.com/people/62759792/" target="_blank" rel="noopener noreferrer">豆瓣 DIYgod</a></li>
            </ul>

            <p>✨ 即时通讯：</p>
            <ul>
              <li><a href="https://t.me/DIYgod" target="_blank" rel="noopener noreferrer">Telegram @DIYgod</a></li>
              <li><a href="https://t.me/prpr233" target="_blank" rel="noopener noreferrer">Telegram 群 @prpr233</a></li>
            </ul>

            <p>🎡 游戏：</p>
            <ul>
              <li>Steam: <a href="https://steamcommunity.com/id/diygod" target="_blank" rel="noopener noreferrer">diygod</a></li>
              <li>Nintendo Switch: SW-3404-1126-5044</li>
              <li><a href="https://psnprofiles.com/DIYgod_" target="_blank" rel="noopener noreferrer">PlayStation @DIYgod_</a></li>
            </ul>

            <h2 id="blog">本博客</h2>
            <ul>
              <li>2014 年 2 月 9 日创建</li>
              <li>早期文章因为太尴尬删了好多</li>
              <li>历史：
                <ul>
                  <li>2014 年 2 月 - 2017 年 11 月运行在 WordPress</li>
                  <li>2017 年 11 月 - 2022 年 9 月运行在 Hexo</li>
                  <li>2022 年 9 月 - 2025 年 12 月运行在 xLog</li>
                  <li>2025 年 12 月起运行在 Astro (现已重构为 React)</li>
                </ul>
              </li>
            </ul>
          </article>
        </section>
      </div>
    </div>
  );
}
