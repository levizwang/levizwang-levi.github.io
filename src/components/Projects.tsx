import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { projectsData } from '../data/content';

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
              {projectsData.title} <span className="text-[#00ff88] glow-text">{projectsData.highlight}</span>
            </h2>
            <div className="w-20 h-1 bg-[#00ff88] mx-auto glow-bar"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsData.projects.map((project, index) => (
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

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-[#ccc] hover:text-[#00ff88] transition-colors"
                  >
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-[#ccc] hover:text-[#00ff88] transition-colors"
                  >
                    Live Demo
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
