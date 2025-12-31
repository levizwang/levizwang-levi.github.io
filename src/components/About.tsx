import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { aboutData } from '../data/content';

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
              {aboutData.title} <span className="text-[#00ff88] glow-text">{aboutData.highlight}</span>
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
              {aboutData.description.map((paragraph, index) => (
                <p key={index} className={`text-lg text-[#ccc] leading-relaxed ${index !== aboutData.description.length - 1 ? 'mb-6' : ''}`}>
                  {paragraph}
                </p>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="space-y-6"
            >
              {aboutData.features.map((feature, index) => (
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
