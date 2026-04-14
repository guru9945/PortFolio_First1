'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Code2, Moon, Sun, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = mounted ? theme : 'dark';

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false); // Close menu on mobile after clicking
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="group inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-3xl bg-gradient-to-br from-cyan-400 to-blue-600 shadow-[0_20px_50px_-30px_rgba(56,189,248,0.9)] ring-1 ring-white/15 transition-transform duration-300 hover:-translate-y-0.5">
            <Code2 size={18} className="sm:hidden text-slate-950" />
            <Code2 size={22} className="hidden sm:block text-slate-950" />
          </div>
          <div>
            <p className="text-base sm:text-lg font-semibold text-white tracking-tight">Gururamdas TP</p>
            <p className="text-xs uppercase tracking-[0.22em] text-slate-300 hidden sm:block">AI / ML Engineer</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          {/* Desktop Navigation */}
          <div className="nav-links hidden md:flex gap-6">
            {['home', 'about', 'skills', 'experience', 'projects', 'services', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-gray-300 hover:text-white transition-colors capitalize text-sm"
              >
                {section}
              </button>
            ))}
          </div>

          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors"
            aria-label="Toggle theme"
          >
            {currentTheme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-white/10">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col gap-4">
              {['home', 'about', 'skills', 'experience', 'projects', 'services', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-left text-gray-300 hover:text-white transition-colors capitalize py-2 px-4 rounded-lg hover:bg-white/5"
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}