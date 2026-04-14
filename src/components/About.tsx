'use client';

import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-title text-center"
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Bio Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-panel p-6 sm:p-8"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Who I Am</h3>
            <p className="text-gray-300 leading-relaxed mb-4 text-sm sm:text-base">
              I'm Gururamdas TP, an aspiring AI/ML engineer and full-stack developer who is building practical web projects while learning advanced technologies.
            </p>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              I completed a virtual internship at Acmegrade, where I gained experience working on web development tasks and improving my technical skills through real-world guidance.
            </p>
          </motion.div>

          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-panel p-6 sm:p-8"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Education</h3>
            <div className="space-y-4 sm:space-y-6">
              <div className="edu-row flex items-start gap-3 sm:gap-4">
                <div className="edu-icon bg-blue-500 p-2 rounded-full flex-shrink-0">
                  <GraduationCap size={18} className="sm:hidden text-white" />
                  <GraduationCap size={20} className="hidden sm:block text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-white font-semibold text-sm sm:text-base">B.Tech in Computer Science & Engineering</h4>
                  <p className="text-gray-300 text-sm">Specialization: AI/ML</p>
                  <p className="text-gray-400 text-xs">CGPA: 8.1</p>
                  <p className="text-gray-400 text-xs flex items-center gap-2 mt-1">
                    <Calendar size={12} className="sm:hidden" />
                    <Calendar size={14} className="hidden sm:block" /> Graduating 2026
                  </p>
                </div>
              </div>

              <div className="edu-row flex items-start gap-3 sm:gap-4">
                <div className="edu-icon bg-blue-500 p-2 rounded-full flex-shrink-0">
                  <GraduationCap size={18} className="sm:hidden text-white" />
                  <GraduationCap size={20} className="hidden sm:block text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-white font-semibold text-sm sm:text-base">12th Grade (PUC)</h4>
                  <p className="text-gray-300 text-sm">Sri Basaveshwara P.U College</p>
                  <p className="text-gray-400 text-xs">Percentage: 85%</p>
                  <p className="text-gray-400 text-xs flex items-center gap-2 mt-1">
                    <Calendar size={12} className="sm:hidden" />
                    <Calendar size={14} className="hidden sm:block" /> 2022
                  </p>
                </div>
              </div>

              <div className="edu-row flex items-start gap-3 sm:gap-4">
                <div className="edu-icon bg-blue-500 p-2 rounded-full flex-shrink-0">
                  <GraduationCap size={18} className="sm:hidden text-white" />
                  <GraduationCap size={20} className="hidden sm:block text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-white font-semibold text-sm sm:text-base">10th Grade (SSLC)</h4>
                  <p className="text-gray-300 text-sm">Morarji Desai Residential School</p>
                  <p className="text-gray-400 text-xs">Percentage: 91.04%</p>
                  <p className="text-gray-400 text-xs flex items-center gap-2 mt-1">
                    <Calendar size={12} className="sm:hidden" />
                    <Calendar size={14} className="hidden sm:block" /> 2020
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}