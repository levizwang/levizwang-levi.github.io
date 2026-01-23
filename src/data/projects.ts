import mev1Image from '../projects/SOLANA_MEV.jpg';

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
    name: 'SOLANA_MEV',
    description: 'This project is a Solana MEV bot that reads the internet for you',
    image: mev1Image,
    link: 'https://github.com/levizwang/Solana-MEV',
  }
];
