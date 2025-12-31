import { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Blog } from './components/Blog';
import { Contact } from './components/Contact';
import { Navigation } from './components/Navigation';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'blog', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e0e0e0] relative overflow-hidden">
      {/* Animated background grid */}
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#00ff8820 1px, transparent 1px), linear-gradient(90deg, #00ff8820 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Glow effects */}
      <div className="fixed top-20 -left-40 w-96 h-96 bg-[#00ff88] rounded-full blur-[150px] opacity-20 pointer-events-none"></div>
      <div className="fixed bottom-20 -right-40 w-96 h-96 bg-[#00ff88] rounded-full blur-[150px] opacity-20 pointer-events-none"></div>

      <Navigation activeSection={activeSection} />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Blog />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="border-t border-[#00ff88]/20 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center text-sm text-[#888]">
          <p>© 2025 Personal Blog. Built with React & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}
