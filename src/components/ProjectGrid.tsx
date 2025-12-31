import { ImageWithFallback } from './figma/ImageWithFallback';
import { SectionDivider } from './SectionDivider';

interface Project {
  id: string;
  name: string;
  description: string;
  image: string;
  link?: string;
}

const projects: Project[] = [
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
];

export function ProjectGrid() {
  return (
    <>
      <SectionDivider label="我做的项目" />
      
      <section id="projects" className="max-w-4xl mx-auto px-7 lg:px-0">
        <h2 className="leading-10 tracking-tight text-neutral-900 dark:text-neutral-100">
          项目
        </h2>

        <div className="grid items-stretch w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 mt-7">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex flex-col items-stretch duration-300 ease-out p-7 sm:p-3 group h-100 rounded-2xl"
            >
              <span className="absolute inset-0 z-20 block w-full h-full duration-300 ease-out bg-transparent border border-transparent border-dashed group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:border group-hover:border-neutral-300 dark:group-hover:border-neutral-600 group-hover:border-dashed rounded-2xl group-hover:bg-white dark:group-hover:bg-neutral-950"></span>
              <span className="absolute inset-0 z-10 block w-full h-full duration-300 ease-out border border-dashed rounded-2xl border-neutral-300 dark:border-neutral-600 group-hover:translate-x-1 group-hover:translate-y-1"></span>
              
              <span className="relative z-30 block duration-300 ease-out group-hover:-translate-x-1 group-hover:-translate-y-1">
                <span className="block w-full">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.name}
                    className="w-full h-auto rounded-lg aspect-[16/9] object-cover"
                  />
                </span>
                <span className="block w-full px-1 mt-5 mb-1 sm:mt-3">
                  <span className="flex items-center mb-0 tracking-tight text-neutral-900 dark:text-neutral-100">
                    <span>{project.name}</span>
                    <svg
                      className="group-hover:translate-x-0 group-hover:translate-y-0 -rotate-45 translate-y-1 -translate-x-1 w-2.5 h-2.5 stroke-current ml-1 transition-all ease-in-out duration-200 transform"
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
                  </span>
                  <span className="text-neutral-600 dark:text-neutral-400 block truncate">
                    {project.description}
                  </span>
                </span>
              </span>
            </a>
          ))}
        </div>

        <div className="flex items-center justify-center w-full py-5">
          <a
            href="/projects"
            className="inline-flex w-auto px-4 py-2 mt-5 duration-300 ease-out border rounded-full bg-neutral-900 dark:bg-white dark:text-neutral-900 text-neutral-100 hover:border-neutral-700 border-neutral-900 dark:hover:border-neutral-300 hover:bg-white dark:hover:bg-black dark:hover:text-white hover:text-neutral-900"
          >
            查看所有项目
          </a>
        </div>
      </section>
    </>
  );
}
