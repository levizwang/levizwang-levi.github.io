
import { Github, Twitter, Mail, Rss } from 'lucide-react';
import avatarImage from '../assets/IMG_4812.JPG';

export const siteConfig = {
  name: "Levi",
  title: "Here is Levi",
  description: "Code is cheap, show me the prompt!",
  bio: "Ex-PwC IT Auditor → Ex-Bytedance AI Evaluation Expert → Current Fintech AI Engineer\nPart-time Web3 Analyst & Professional Liquidated Trader & Smart Contract Auditor",
  startDate: "2026-01-01",
  avatar: avatarImage,
  
  social: [
    {
      name: "RSS",
      url: "feed",
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
    { name: "Home", path: "/" },
    { name: "Posts", path: "/posts" },
    { name: "Projects", path: "/projects" },
  ],
};
