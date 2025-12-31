import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { blogData } from '../data/content';

export function Blog() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="blog" className="min-h-screen flex items-center py-20">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">
              {blogData.title} <span className="text-[#00ff88] glow-text">{blogData.highlight}</span>
            </h2>
            <div className="w-20 h-1 bg-[#00ff88] mx-auto glow-bar"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogData.posts.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="glass-card p-6 hover:bg-[#00ff88]/5 transition-all duration-300 group cursor-pointer"
              >
                <div className="mb-4">
                  <span
                    className="inline-block px-3 py-1 rounded-full text-sm border"
                    style={{
                      color: post.color,
                      borderColor: `${post.color}40`,
                      backgroundColor: `${post.color}10`
                    }}
                  >
                    {post.category}
                  </span>
                </div>

                <h3 className="text-xl mb-3 group-hover:text-[#00ff88] transition-colors leading-snug">
                  {post.title}
                </h3>
                
                <p className="text-[#888] mb-6 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between text-sm text-[#888] pt-4 border-t border-[#333]">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-2 text-[#00ff88] text-sm opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  Read More <ArrowRight className="w-4 h-4" />
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
