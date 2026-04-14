'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const phrases = ["AI/ML Engineer", "Full Stack Developer", "Data-Driven Problem Solver"];

  useEffect(() => {
    const type = () => {
      const currentPhrase = phrases[currentIndex];
      if (isDeleting) {
        setCurrentText(currentPhrase.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentIndex((currentIndex + 1) % phrases.length);
        }
      } else {
        setCurrentText(currentPhrase.substring(0, currentText.length + 1));
        if (currentText === currentPhrase) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }
    };

    const timer = setTimeout(type, isDeleting ? 100 : 150);
    return () => clearTimeout(timer);
  }, [currentText, currentIndex, isDeleting]);

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-black opacity-90"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMzAgMTBhMjAgMjAgMCAwIDEgMCA0MCAyMCAyMCAwIDAgMSAwLTQweiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjM2I4MmY2IiBzdHJva2Utd2lkdGg9IjAuMiIgb3BhY2l0eT0iMC4xIi8+PC9zdmc+')] opacity-25"></div>

      <div className="container mx-auto px-4 sm:px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Profile */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center order-1 lg:order-1"
          >
            <div className="profile-card glass-panel p-4 sm:p-6 max-w-sm flex flex-col items-center gap-4 sm:gap-6">
              <Image
                src="https://i.postimg.cc/tJPHzxqs/Professional-modern-headshot-with-cool-tones.png"
                alt="Gururamdas TP"
                width={260}
                height={260}
                unoptimized
                className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full object-cover object-top border-4 border-blue-500 shadow-2xl"
              />
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                <span className="badge-icon text-xs sm:text-sm">AI/ML</span>
                <span className="badge-icon text-xs sm:text-sm">Full Stack</span>
              </div>
            </div>
          </motion.div>

          {/* Right side - Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-2 lg:order-2 text-center lg:text-left"
          >
            <div className="text-blue-500 text-base sm:text-lg font-medium mb-3 sm:mb-4 flex items-center justify-center lg:justify-start gap-3">
              <span className="w-8 sm:w-12 h-1 bg-blue-500"></span>
              Hello, I'm
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent leading-tight">
              Gururamdas TP
            </h1>
            <div className="text-lg sm:text-xl text-gray-300 mb-4 sm:mb-6">
              <span className="text-blue-400">I'm a </span>
              <span className="font-semibold text-white">{currentText}</span>
              <span className="animate-pulse">|</span>
            </div>
            <p className="text-gray-400 mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0 text-sm sm:text-base leading-relaxed">
              Passionate about building intelligent systems and scalable web applications.
              Transforming ideas into reality through code and data.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <a
                href="https://drive.google.com/file/d/1UkPJqs0oHd7Nupp3-yWolHPWQtUQAFXc/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary inline-flex items-center justify-center text-sm sm:text-base"
              >
                Download CV
              </a>
              <a
                href="#projects"
                className="btn btn-outline inline-flex items-center justify-center text-sm sm:text-base"
              >
                View Projects
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}