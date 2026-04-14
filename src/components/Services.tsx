'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Code, Cloud, Smartphone } from 'lucide-react';

const services = [
  {
    icon: <Brain className="text-blue-400" size={40} />,
    title: "AI/ML Solutions",
    description: "Developing intelligent systems, predictive models, and automation solutions using cutting-edge machine learning techniques."
  },
  {
    icon: <Code className="text-blue-400" size={40} />,
    title: "Full Stack Development",
    description: "Building scalable web applications with modern technologies, from concept to deployment and maintenance."
  },
  {
    icon: <Cloud className="text-blue-400" size={40} />,
    title: "Cloud Architecture",
    description: "Designing and implementing cloud-native solutions with AWS, ensuring scalability, security, and cost-efficiency."
  },
  {
    icon: <Smartphone className="text-blue-400" size={40} />,
    title: "Mobile Development",
    description: "Creating responsive mobile applications and progressive web apps with cross-platform compatibility."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-title text-center"
        >
          Services
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="service-card glass-panel p-4 sm:p-6 text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="sm:hidden">
                  {React.cloneElement(service.icon, { size: 32 })}
                </div>
                <div className="hidden sm:block">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-300 text-sm sm:text-base">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}