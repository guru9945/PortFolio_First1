'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Copy, Send } from 'lucide-react';

export default function Contact() {
  const [stats, setStats] = useState({ projects: 0 });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  useEffect(() => {
    const targetStats = { projects: 12 };
    const duration = 2000;
    const steps = 60;
    const increment = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setStats({
        projects: Math.floor(targetStats.projects * progress)
      });

      if (currentStep >= steps) clearInterval(timer);
    }, increment);

    return () => clearInterval(timer);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText('ggururamdastp@gmail.com');
    alert('Email copied to clipboard!');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatusMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Email send failed');
      }

      setStatusMessage('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatusMessage('Failed to send message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-title text-center"
        >
          Let's Connect
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
            <p className="text-gray-300 mb-8">
              I'm always interested in new opportunities and collaborations.
              Feel free to reach out for projects, partnerships, or just to say hello!
            </p>

            <div className="space-y-4 mb-8">
              <div className="contact-item flex items-center gap-4">
                <div className="bg-blue-500 p-3 rounded-full">
                  <Mail className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-white font-medium">Email</p>
                  <p className="text-gray-300">ggururamdastp@gmail.com</p>
                </div>
                <button onClick={copyEmail} className="copy-btn ml-auto p-2 bg-gray-700 rounded hover:bg-gray-600 transition-colors">
                  <Copy size={16} className="text-white" />
                </button>
              </div>

              <div className="contact-item flex items-center gap-4">
                <div className="bg-blue-500 p-3 rounded-full">
                  <Phone className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-white font-medium">Phone</p>
                  <p className="text-gray-300">+91 XXXXX XXXXX</p>
                </div>
              </div>

              <div className="contact-item flex items-center gap-4">
                <div className="bg-blue-500 p-3 rounded-full">
                  <MapPin className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-white font-medium">Location</p>
                  <p className="text-gray-300">India</p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">{stats.projects}+</div>
                <div className="text-gray-300">Projects</div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-panel p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
                  required
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none resize-none"
                  required
                ></textarea>
              </div>
              <button type="submit" disabled={isLoading} className="btn btn-primary w-full flex items-center justify-center gap-2">
                <Send size={16} />
                {isLoading ? 'Sending...' : 'Send Message'}
              </button>
              {statusMessage && (
                <p className="mt-4 text-sm text-gray-300">{statusMessage}</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}