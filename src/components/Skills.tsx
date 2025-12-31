import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { skillsData } from '../data/content';

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="skills" className="min-h-screen flex items-center py-20">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">
              {skillsData.title} <span className="text-[#00ff88] glow-text">{skillsData.highlight}</span>
            </h2>
            <div className="w-20 h-1 bg-[#00ff88] mx-auto glow-bar"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillsData.categories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
                className="glass-card p-8 hover:bg-[#00ff88]/5 transition-all duration-300"
              >
                <h3 className="text-2xl mb-6 text-[#00ff88]">{category.title}</h3>
                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-[#ccc]">{skill.name}</span>
                        <span className="text-[#00ff88]">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-[#1a1a1a] rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{
                            delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.3,
                            duration: 1,
                            ease: 'easeOut'
                          }}
                          className="h-full bg-gradient-to-r from-[#00ff88] to-[#00cc6a] glow-bar"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
