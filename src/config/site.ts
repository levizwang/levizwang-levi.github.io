
import { Mail, Linkedin } from 'lucide-react';
import { FaXTwitter } from 'react-icons/fa6';
import { FaGithub, FaEthereum } from 'react-icons/fa';
import { SiBinance, SiSolana } from 'react-icons/si';
import { AiOutlineZhihu } from 'react-icons/ai';
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
      name: "X",
      url: "https://x.com/Levi2Crypto",
      icon: FaXTwitter,
      size: 16
    },
    {
      name: "GitHub",
      url: "https://github.com/levizwang",
      icon: FaGithub,
      size: 20
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/levizwang",
      icon: Linkedin,
      size: 20
    },
    {
      name: "Binance",
      url: "https://app.binance.com/uni-qr/cpro/Levi_eth",
      icon: SiBinance,
      size: 20
    },
    {
      name: "Ethereum",
      url: "https://etherscan.io/address/0x0cfd6476c2fc06455548514227129dbea35f9a3e",
      icon: FaEthereum,
      size: 20
    },
    {
      name: "Solana",
      url: "https://explorer.solana.com/address/26QWQzwStTLSfh67KfLxnKQWrenfvKA6L3u2MbSdjzdv",
      icon: SiSolana,
      size: 20
    },
    {
      name: "Zhihu",
      url: "https://www.zhihu.com/people/levi.eth",
      icon: AiOutlineZhihu,
      size: 20
    },
    {
      name: "Email",
      url: "mailto:wang.z.levi@gmail.com",
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
