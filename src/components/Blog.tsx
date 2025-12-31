import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    title: 'Getting Started with Web3 Development',
    excerpt: 'A comprehensive guide to building your first decentralized application with Ethereum and React.',
    date: '2025-01-15',
    readTime: '8 min read',
    category: 'Web3',
    color: '#00ff88'
  },
  {
    title: 'Building Scalable React Applications',
    excerpt: 'Best practices and patterns for creating maintainable React applications that scale.',
    date: '2025-01-10',
    readTime: '6 min read',
    category: 'React',
    color: '#00cc6a'
  },
  {
    title: 'Smart Contract Security Best Practices',
    excerpt: 'Learn how to write secure smart contracts and avoid common vulnerabilities in Solidity.',
    date: '2025-01-05',
    readTime: '10 min read',
    category: 'Blockchain',
    color: '#009955'
  },
  {
    title: 'Modern CSS Techniques with Tailwind',
    excerpt: 'Explore advanced Tailwind CSS techniques for creating beautiful, responsive designs.',
    date: '2024-12-28',
    readTime: '5 min read',
    category: 'CSS',
    color: '#00ff88'
  },
  {
    title: 'TypeScript Tips for Better Code',
    excerpt: 'Leverage TypeScript features to write more robust and maintainable code.',
    date: '2024-12-20',
    readTime: '7 min read',
    category: 'TypeScript',
    color: '#00aa66'
  },
  {
    title: 'Optimizing Web Performance',
    excerpt: 'Techniques and tools for making your web applications faster and more efficient.',
    date: '2024-12-15',
    readTime: '9 min read',
    category: 'Performance',
    color: '#008844'
  }
];

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
              Latest <span className="text-[#00ff88] glow-text">Articles</span>
            </h2>
            <div className="w-20 h-1 bg-[#00ff88] mx-auto glow-bar"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
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

                <p className="text-[#888] mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex items-center gap-4 text-sm text-[#666] mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-[#00ff88] group-hover:gap-3 transition-all">
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-center mt-12"
          >
            <button className="px-8 py-3 glass-card hover:bg-[#00ff88]/10 transition-all duration-300">
              View All Articles
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
