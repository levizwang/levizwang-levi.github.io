export interface Project {
  id: string;
  name: string;
  description: string;
  image: string;
  link?: string;
}

export const projects: Project[] = [
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
    name: 'Bilibili Web Player',
    description: 'Bilibili (゜-゜)つロ Cheers~-bilibili',
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
    description: 'Open source, simple RSS reader',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHB8ZW58MXx8fHwxNzY3MTQ1MTc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: '9',
    name: 'DXY',
    description: 'Professional social network for doctors, medical institutions, and pharmaceutical professionals',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbnxlbnwxfHx8fDE3NjcxNTQ3NjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    link: 'https://www.dxy.cn/',
  },
];
