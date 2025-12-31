import React from 'react';
import { siteConfig } from '../../config/site';

export function About() {
  return (
    <div className="relative z-30 max-w-4xl pb-1 mx-auto mt-10 bg-white dark:bg-background md:rounded-t-md text-neutral-900 dark:text-neutral-100">
      <div className="relative flex flex-col px-5 pt-6 border-t border-b-0 md:border-r md:border-l md:pt-20 lg:px-0 justify-stretch md:rounded-t-2xl border-neutral-200 dark:border-neutral-800">
        <h1 className="w-full max-w-2xl mx-auto text-3xl font-bold text-left md:mb-8 md:text-4xl dark:text-neutral-100 lg:text-5xl">关于</h1>
        
        <section className="relative w-full max-w-2xl mx-auto mt-10">
          <article className="w-full max-w-2xl mx-auto prose-sm prose px-7 lg:px-0 lg:prose-lg dark:prose-invert prose-h3:font-bold prose-h4:font-bold prose-code:font-medium prose-a:underline prose-a:decoration-dashed prose-a:decoration-neutral-300 prose-a:underline-offset-4 prose-a:text-inherit prose-a:font-normal">
            <ul>
              {siteConfig.about.intro.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h2 id="footprints">足迹</h2>
            <p>不是一个旅游爱好者，但经常世界各地搬家</p>
            <div className="bg-neutral-100 dark:bg-neutral-900 p-4 rounded-lg my-4">
              <p className="text-sm text-neutral-500 dark:text-neutral-400">（地图组件在此处展示：{siteConfig.about.footprints.join(' → ')}）</p>
            </div>

            <h2 id="contact">抓到我</h2>
            <p>在互联网常常混迹在这些地方</p>
            <p>🍃 动态：</p>
            <ul>
              {siteConfig.about.contact.dynamic.map((item, index) => (
                <li key={index}>
                  {item.url ? (
                    <a href={item.url} target="_blank" rel="noopener noreferrer">{item.label}</a>
                  ) : (
                    item.label
                  )}
                </li>
              ))}
            </ul>

            <p>✨ 即时通讯：</p>
            <ul>
              {siteConfig.about.contact.im.map((item, index) => (
                <li key={index}>
                  <a href={item.url} target="_blank" rel="noopener noreferrer">{item.label}</a>
                </li>
              ))}
            </ul>

            <p>🎡 游戏：</p>
            <ul>
              {siteConfig.about.contact.game.map((item, index) => (
                <li key={index}>
                  {item.url ? (
                    <a href={item.url} target="_blank" rel="noopener noreferrer">{item.label}</a>
                  ) : (
                    item.label
                  )}
                </li>
              ))}
            </ul>

            <h2 id="blog">本博客</h2>
            <ul>
              {siteConfig.about.blogHistory.map((item, index) => (
                <li key={index}>
                  {item.text}
                  {item.subItems && (
                    <ul>
                      {item.subItems.map((subItem, subIndex) => (
                        <li key={subIndex}>{subItem}</li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </article>
        </section>
      </div>
    </div>
  );
}
