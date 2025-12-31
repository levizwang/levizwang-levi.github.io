import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Code, Palette, Zap } from 'lucide-react';

const features = [
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
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" className="min-h-screen flex items-center py-20">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">
              About <span className="text-[#00ff88] glow-text">Me</span>
            </h2>
            <div className="w-20 h-1 bg-[#00ff88] mx-auto glow-bar"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="glass-card p-8 glow-border"
            >
              <p className="text-lg text-[#ccc] mb-6 leading-relaxed">
                I'm a passionate developer with a love for creating elegant solutions to complex problems. 
                With expertise in modern web technologies and blockchain development, I strive to build 
                applications that make a difference.
              </p>
              <p className="text-lg text-[#ccc] mb-6 leading-relaxed">
                My journey in tech started 5+ years ago, and I've been continuously learning and evolving 
                with the industry. I believe in writing clean, maintainable code and creating exceptional 
                user experiences.
              </p>
              <p className="text-lg text-[#ccc] leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open source, 
                or sharing my knowledge through technical writing.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="space-y-6"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                  className="glass-card p-6 hover:bg-[#00ff88]/10 transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-[#00ff88]/10 rounded-lg group-hover:bg-[#00ff88]/20 transition-colors">
                      <feature.icon className="w-6 h-6 text-[#00ff88]" />
                    </div>
                    <div>
                      <h3 className="text-xl mb-2 group-hover:text-[#00ff88] transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-[#888]">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
