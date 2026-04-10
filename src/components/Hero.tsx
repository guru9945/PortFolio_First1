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

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Profile */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="profile-card glass-panel p-6 max-w-sm flex flex-col items-center gap-6">
              <Image
                src="https://i.postimg.cc/bNjb71Xg/Gemini-Generated-Image-ubk4b0ubk4b0ubk4.png"
                alt="Gururamdas TP"
                width={260}
                height={260}
                className="w-64 h-64 rounded-full object-cover border-4 border-blue-500 shadow-2xl"
              />
              <div className="flex justify-center gap-3">
                <span className="badge-icon">AI/ML</span>
                <span className="badge-icon">Full Stack</span>
              </div>
            </div>
          </motion.div>

          {/* Right side - Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="text-blue-500 text-lg font-medium mb-4 flex items-center gap-3">
              <span className="w-12 h-1 bg-blue-500"></span>
              Hello, I'm
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
              Gururamdas TP
            </h1>
            <div className="text-xl text-gray-300 mb-6">
              <span className="text-blue-400">I'm a </span>
              <span className="font-semibold text-white">{currentText}</span>
              <span className="animate-pulse">|</span>
            </div>
            <p className="text-gray-400 mb-8 max-w-lg">
              Passionate about building intelligent systems and scalable web applications.
              Transforming ideas into reality through code and data.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://drive.google.com/file/d/1UkPJqs0oHd7Nupp3-yWolHPWQtUQAFXc/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary inline-flex items-center justify-center"
              >
                Download CV
              </a>
              <a
                href="#projects"
                className="btn btn-outline inline-flex items-center justify-center"
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