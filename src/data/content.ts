import { 
  Code, 
  Palette, 
  Zap, 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  MapPin 
} from 'lucide-react';

export const heroData = {
  name: "Leviz Wang",
  title: "Full Stack Developer | Blockchain Enthusiast | Creative Problem Solver",
  welcome: "WELCOME TO MY PORTFOLIO",
  greeting: "Hi, I'm",
  socialLinks: [
    { icon: Github, url: "https://github.com/levizwang" },
    { icon: Linkedin, url: "https://linkedin.com" },
    { icon: Twitter, url: "https://twitter.com" }
  ]
};

export const aboutData = {
  title: "About",
  highlight: "Me",
  description: [
    "I'm a passionate developer with a love for creating elegant solutions to complex problems. With expertise in modern web technologies and blockchain development, I strive to build applications that make a difference.",
    "My journey in tech started 5+ years ago, and I've been continuously learning and evolving with the industry. I believe in writing clean, maintainable code and creating exceptional user experiences.",
    "When I'm not coding, you can find me exploring new technologies, contributing to open source, or sharing my knowledge through technical writing."
  ],
  features: [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable and scalable code following best practices'
    },
    {
      icon: Palette,
      title: 'Creative Design',
      description: 'Crafting beautiful and intuitive user experiences'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Building fast and optimized web applications'
    }
  ]
};

export const skillsData = {
  title: "Technical",
  highlight: "Skills",
  categories: [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'Next.js', level: 88 }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'PostgreSQL', level: 82 },
        { name: 'MongoDB', level: 78 }
      ]
    },
    {
      title: 'Blockchain',
      skills: [
        { name: 'Solidity', level: 75 },
        { name: 'Web3.js', level: 80 },
        { name: 'Ethers.js', level: 82 },
        { name: 'Smart Contracts', level: 70 }
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'Docker', level: 75 },
        { name: 'AWS', level: 70 },
        { name: 'CI/CD', level: 72 }
      ]
    }
  ]
};

export const projectsData = {
  title: "Featured",
  highlight: "Projects",
  projects: [
    {
      title: 'DeFi Dashboard',
      description: 'A comprehensive dashboard for tracking DeFi protocols, built with React and Web3.js',
      tags: ['React', 'Web3.js', 'Tailwind'],
      github: 'https://github.com',
      live: 'https://example.com',
      gradient: 'from-[#00ff88] to-[#00cc6a]'
    },
    {
      title: 'NFT Marketplace',
      description: 'A decentralized marketplace for buying and selling NFTs with smart contract integration',
      tags: ['Next.js', 'Solidity', 'IPFS'],
      github: 'https://github.com',
      live: 'https://example.com',
      gradient: 'from-[#00cc6a] to-[#009955]'
    },
    {
      title: 'Task Management App',
      description: 'A modern task management application with real-time collaboration features',
      tags: ['React', 'Node.js', 'MongoDB'],
      github: 'https://github.com',
      live: 'https://example.com',
      gradient: 'from-[#009955] to-[#00ff88]'
    },
    {
      title: 'Crypto Portfolio Tracker',
      description: 'Track your cryptocurrency investments across multiple exchanges and wallets',
      tags: ['TypeScript', 'React', 'Charts'],
      github: 'https://github.com',
      live: 'https://example.com',
      gradient: 'from-[#00ff88] to-[#00aa66]'
    },
    {
      title: 'Blog Platform',
      description: 'A full-featured blogging platform with markdown support and social features',
      tags: ['Next.js', 'PostgreSQL', 'Prisma'],
      github: 'https://github.com',
      live: 'https://example.com',
      gradient: 'from-[#00aa66] to-[#008844]'
    },
    {
      title: 'Smart Contract Auditor',
      description: 'An automated tool for auditing Ethereum smart contracts and finding vulnerabilities',
      tags: ['Python', 'Solidity', 'Web3'],
      github: 'https://github.com',
      live: 'https://example.com',
      gradient: 'from-[#008844] to-[#00ff88]'
    }
  ]
};

export const blogData = {
  title: "Latest",
  highlight: "Articles",
  posts: [
    {
      title: 'Getting Started with Web3 Development',
      excerpt: 'A comprehensive guide to building your first decentralized application with Ethereum and React.',
      date: '2025-01-15',
      readTime: '8 min read',
      category: 'Web3',
      color: '#00ff88'
    },
    {
      title: 'Building Scalable React Applications',
      excerpt: 'Best practices and patterns for creating maintainable React applications that scale.',
      date: '2025-01-10',
      readTime: '6 min read',
      category: 'React',
      color: '#00cc6a'
    },
    {
      title: 'Smart Contract Security Best Practices',
      excerpt: 'Learn how to write secure smart contracts and avoid common vulnerabilities in Solidity.',
      date: '2025-01-05',
      readTime: '10 min read',
      category: 'Blockchain',
      color: '#009955'
    },
    {
      title: 'Modern CSS Techniques with Tailwind',
      excerpt: 'Explore advanced Tailwind CSS techniques for creating beautiful, responsive designs.',
      date: '2024-12-28',
      readTime: '5 min read',
      category: 'CSS',
      color: '#00ff88'
    },
    {
      title: 'TypeScript Tips for Better Code',
      excerpt: 'Leverage TypeScript features to write more robust and maintainable code.',
      date: '2024-12-20',
      readTime: '7 min read',
      category: 'TypeScript',
      color: '#00aa66'
    },
    {
      title: 'Optimizing Web Performance',
      excerpt: 'Techniques and tools for making your web applications faster and more efficient.',
      date: '2024-12-15',
      readTime: '9 min read',
      category: 'Performance',
      color: '#008844'
    }
  ]
};

export const contactData = {
  title: "Get In",
  highlight: "Touch",
  subtitle: "Let's work together",
  description: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!",
  email: "your.email@example.com",
  location: "San Francisco, CA"
};
