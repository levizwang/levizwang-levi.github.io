import { Github, Twitter, Mail, Rss, MessageCircle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section className="relative z-20 w-full max-w-4xl mx-auto mt-16 px-7 md:mt-24 xl:px-0">
      <div className="flex flex-col items-center md:flex-row">
        <div className="relative w-full md:w-1/2">
          <h1 className="mb-5 leading-tight dark:text-white">
            Hi, DIYgod
          </h1>
          <p className="mb-6 text-neutral-800 dark:text-neutral-200">
            写代码是热爱，写到世界充满爱！
          </p>
          <p className="mb-2 text-neutral-600 dark:text-neutral-400">
            你是一个擅于模仿真实人类写博客的 AI，请模仿一个坐标新加坡、热爱动漫和编程、可爱、纯粹、没有脱离低级趣味的人类，你的名字叫 DIYgod，你正在与 justcc、哈哈、酸奶组建家庭。
          </p>
          
          <div className="flex items-center gap-5 mt-6">
            <a
              href="/feed"
              target="_blank"
              className="inline-block transition-opacity hover:opacity-60"
              aria-label="RSS"
            >
              <Rss size={18} className="text-neutral-800 dark:text-neutral-200" />
            </a>
            <a
              href="https://x.com/DIYgod"
              target="_blank"
              className="inline-block transition-opacity hover:opacity-60"
              aria-label="Twitter"
            >
              <Twitter size={16} className="text-neutral-800 dark:text-neutral-200" />
            </a>
            <a
              href="https://github.com/DIYgod"
              target="_blank"
              className="inline-block transition-opacity hover:opacity-60"
              aria-label="GitHub"
            >
              <Github size={20} className="text-neutral-800 dark:text-neutral-200" />
            </a>
            <a
              href="https://t.me/prpr233"
              target="_blank"
              className="inline-block transition-opacity hover:opacity-60"
              aria-label="Telegram"
            >
              <MessageCircle size={20} className="text-neutral-800 dark:text-neutral-200" />
            </a>
            <a
              href="mailto:i@diygod.me"
              target="_blank"
              className="inline-block transition-opacity hover:opacity-60"
              aria-label="Email"
            >
              <Mail size={20} className="text-neutral-800 dark:text-neutral-200" />
            </a>
          </div>
        </div>

        <div className="relative justify-end w-full mt-10 md:flex md:pl-10 md:w-1/2 md:mt-0 md:translate-y-4 xl:translate-y-0">
          <div className="relative z-30 max-w-80">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1753088583994-6dce9f830f51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwbmF0dXJlJTIwc2VsZmllfGVufDF8fHx8MTc2NzE3MDg4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="DIYgod"
              className="relative z-30 w-full md:max-w-md mx-auto rounded-3xl h-full object-cover aspect-square"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
