'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    title: "Virtual Intern",
    company: "Acmegrade",
    location: "Remote",
    period: "2024",
    description: "Completed a virtual internship focused on web development and technical learning. Worked on guided projects, code reviews, and practical skill improvement.",
    achievements: [
      "Completed internship assignments in frontend and backend development",
      "Improved technical skills in React, HTML, CSS, and JavaScript",
      "Learned collaborative development practices and version control"
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-title text-center"
        >
          Work Experience
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="exp-card glass-panel p-6 sm:p-8 mb-6 sm:mb-8"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-4">
                <div className="exp-badge bg-blue-500 text-white px-3 sm:px-4 py-2 rounded-full font-semibold flex items-center gap-2 text-sm sm:text-base">
                  <Briefcase size={14} className="sm:hidden" />
                  <Briefcase size={16} className="hidden sm:block" />
                  {exp.title}
                </div>
                <div className="text-gray-300">
                  <span className="font-semibold text-white text-sm sm:text-base">{exp.company}</span>
                  <div className="flex flex-col sm:flex-row sm:gap-4 text-xs sm:text-sm text-gray-400 mt-1">
                    <span className="flex items-center gap-2">
                      <MapPin size={12} className="sm:hidden" />
                      <MapPin size={14} className="hidden sm:block" /> {exp.location}
                    </span>
                    <span className="flex items-center gap-2">
                      <Calendar size={12} className="sm:hidden" />
                      <Calendar size={14} className="hidden sm:block" /> {exp.period}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-gray-300 mb-4 text-sm sm:text-base">{exp.description}</p>

              <div className="exp-achievements">
                <h4 className="text-white font-semibold mb-2 text-sm sm:text-base">Key Achievements:</h4>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-300 text-sm sm:text-base">
                      <span className="text-blue-400 mt-1 text-xs">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}