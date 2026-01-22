export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  tags?: string[];
  image?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: '2025: Redefining Life',
    excerpt: 'AI productivity revolution and confusion, welcoming new life, striving for money, untimely open source thinking, cyber life',
    date: 'Dec 25, 2025',
    category: 'Diaries',
    tags: ['Year-end Summary'],
    image: 'https://images.unsplash.com/photo-1624194243441-c9d1176e99fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwY2F0fGVufDF8fHx8MTc2NzE3MDg4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: '2',
    title: 'European Travel VLOG | Barcelona Rome Vatican Venice Milan Zurich Interlaken Paris',
    excerpt: 'Dec 2022...',
    date: 'Dec 20, 2025',
    category: 'Creations',
    tags: ['vlog'],
    image: 'https://images.unsplash.com/photo-1677690489325-e6a4d2594d76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldXJvcGVhbiUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NjcxMTEyNTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: '3',
    title: 'Ancient Artifact Beancount: The Ultimate Double-Entry Bookkeeping Solution in the Crypto and AI Era',
    excerpt: 'Often we find bookkeeping troublesome not because the UI isn\'t pretty or the interaction isn\'t smooth, but because the method isn\'t scientific enough. When the method is scientific enough, you don\'t even need a UI. A CLI + a few plain text files + a clear syntax can describe the financial world very accurately.',
    date: 'Dec 12, 2025',
    category: 'Sharings',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbnxlbnwxfHx8fDE3NjcxNTQ3NjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: '4',
    title: 'The Collapse and Rebirth of a Six-Year-Old Open Source Project',
    excerpt: 'I have an open source project I\'ve maintained for six years — RSSHub, and it is facing collapse. On the surface, it has nearly 30k Stars, over 900 Contributors, over 300 million requests per month, countless users, tens of dollars in sponsorship per month, a steady stream of issues and PRs, and code updates almost every day. It looks very healthy and vibrant.',
    date: 'Mar 10, 2024',
    category: 'Creations',
    image: 'https://images.unsplash.com/photo-1717343824623-06293a62a70d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwbWFwfGVufDF8fHx8MTc2NzE3MDg4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: '5',
    title: 'Two Weeks Living with Palu',
    excerpt: 'Which little boy hasn\'t fantasized about living in a world full of Pokémon partners? They can understand and are willing to listen to us, have different characteristics and powerful skills, and are all very cute. We can sleep and eat with them, fight side by side to explore the world, never be lonely again, and anyone can find the Pokémon that suits them best.',
    date: 'Feb 18, 2024',
    category: 'Chats',
    image: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW5zZXQlMjBwZXJzb258ZW58MXx8fHwxNzY3MTcwODg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: '6',
    title: 'Twitter Launches DDoS Attack on Open Source Projects',
    excerpt: 'After Twitter was acquired by Musk, starting from August last year, they have carried out a series of overt and covert crackdowns and attacks on open source third-party integrations and third-party clients. This is to prevent users from accessing and using Twitter through unofficial clients, in order to increase the company\'s advertising and membership revenue.',
    date: 'Jan 28, 2024',
    category: 'Chats',
  },
  {
    id: '7',
    title: 'How to Elegantly Compile a Markdown Document',
    excerpt: 'Markdown is a widely used lightweight markup language that allows people to write documents in an easy-to-read and easy-to-write plain text format. It is also the main article format used by xLog. This article uses xLog Flavored Markdown as an example to explain how to elegantly parse a Markdown document.',
    date: 'Jan 18, 2024',
    category: 'Sharings',
  },
];