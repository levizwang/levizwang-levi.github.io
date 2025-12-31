import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Mail, MapPin } from 'lucide-react';
import { contactData } from '../data/content';

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="min-h-screen flex items-center py-20">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">
              {contactData.title} <span className="text-[#00ff88] glow-text">{contactData.highlight}</span>
            </h2>
            <div className="w-20 h-1 bg-[#00ff88] mx-auto glow-bar"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h3 className="text-2xl mb-6">{contactData.subtitle}</h3>
              <p className="text-[#888] mb-8 leading-relaxed">
                {contactData.description}
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#00ff88]/10 rounded-lg">
                    <Mail className="w-6 h-6 text-[#00ff88]" />
                  </div>
                  <div>
                    <h4 className="mb-1">Email</h4>
                    <a href={`mailto:${contactData.email}`} className="text-[#888] hover:text-[#00ff88] transition-colors">
                      {contactData.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#00ff88]/10 rounded-lg">
                    <MapPin className="w-6 h-6 text-[#00ff88]" />
                  </div>
                  <div>
                    <h4 className="mb-1">Location</h4>
                    <p className="text-[#888]">{contactData.location}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm text-[#888]">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#00ff88]/20 rounded focus:border-[#00ff88] focus:outline-none transition-colors text-[#e0e0e0]"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm text-[#888]">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#00ff88]/20 rounded focus:border-[#00ff88] focus:outline-none transition-colors text-[#e0e0e0]"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2 text-sm text-[#888]">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#00ff88]/20 rounded focus:border-[#00ff88] focus:outline-none transition-colors text-[#e0e0e0] resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-[#00ff88] to-[#00cc6a] text-[#0a0a0a] font-bold rounded hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
