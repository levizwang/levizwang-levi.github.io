import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
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
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="projects" className="min-h-screen flex items-center py-20">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">
              Featured <span className="text-[#00ff88] glow-text">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-[#00ff88] mx-auto glow-bar"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="glass-card p-6 hover:bg-[#00ff88]/5 transition-all duration-300 group cursor-pointer"
              >
                <div className={`h-2 w-full bg-gradient-to-r ${project.gradient} mb-6 rounded-full glow-bar`}></div>
                
                <h3 className="text-xl mb-3 group-hover:text-[#00ff88] transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-[#888] mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-[#00ff88]/10 text-[#00ff88] rounded-full text-sm border border-[#00ff88]/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 glass-card hover:bg-[#00ff88]/20 transition-all text-sm group/link"
                  >
                    <Github className="w-4 h-4 group-hover/link:text-[#00ff88] transition-colors" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-[#00ff88]/10 hover:bg-[#00ff88]/20 rounded transition-all text-sm text-[#00ff88] group/link"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
