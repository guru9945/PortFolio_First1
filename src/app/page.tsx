'use client';

import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Progress Bar */}
      <div
        id="progress-bar"
        className="fixed top-0 left-0 w-full h-1 bg-blue-500 z-50 transition-all duration-100"
        style={{ width: `${scrollProgress}%` }}
      />

      <Navbar />
      <Hero />
      <About id="about" />
      <Skills id="skills" />
      <Experience id="experience" />
      <Projects id="projects" />
      <Services id="services" />
      <Contact id="contact" />
      <Footer />
    </div>
  );
}
