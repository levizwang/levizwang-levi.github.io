import { motion } from 'motion/react';
import { Github, Linkedin, Twitter, ChevronDown } from 'lucide-react';

export function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-6">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="inline-block w-32 h-32 rounded-full bg-gradient-to-br from-[#00ff88] to-[#00cc6a] p-1 glow-avatar mb-6"
            >
              <div className="w-full h-full rounded-full bg-[#0a0a0a] flex items-center justify-center text-5xl">
                👨‍💻
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mb-4 text-[#00ff88] tracking-widest text-sm"
          >
            WELCOME TO MY PORTFOLIO
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-6"
          >
            <span className="block text-5xl md:text-7xl mb-2">Hi, I'm</span>
            <span className="text-6xl md:text-8xl text-[#00ff88] glow-text">Your Name</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-xl md:text-2xl text-[#888] mb-8 max-w-2xl mx-auto"
          >
            Full Stack Developer | Blockchain Enthusiast | Creative Problem Solver
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex gap-4 justify-center mb-12"
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-3 hover:bg-[#00ff88]/20 transition-all duration-300 group"
            >
              <Github className="w-6 h-6 group-hover:text-[#00ff88] transition-colors" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-3 hover:bg-[#00ff88]/20 transition-all duration-300 group"
            >
              <Linkedin className="w-6 h-6 group-hover:text-[#00ff88] transition-colors" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-3 hover:bg-[#00ff88]/20 transition-all duration-300 group"
            >
              <Twitter className="w-6 h-6 group-hover:text-[#00ff88] transition-colors" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="flex gap-4 justify-center"
          >
            <button
              onClick={scrollToAbout}
              className="px-8 py-3 bg-[#00ff88] text-[#0a0a0a] rounded hover:bg-[#00cc6a] transition-all duration-300 glow-button"
            >
              Explore My Work
            </button>
            <button className="px-8 py-3 glass-card hover:bg-[#00ff88]/10 transition-all duration-300">
              Download CV
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
          onClick={scrollToAbout}
        >
          <ChevronDown className="w-8 h-8 text-[#00ff88]" />
        </motion.div>
      </div>
    </section>
  );
}
