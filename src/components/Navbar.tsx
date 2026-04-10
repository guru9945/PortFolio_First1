'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Code2, Moon, Sun } from 'lucide-react';

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = mounted ? theme : 'dark';

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="group inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-gradient-to-br from-cyan-400 to-blue-600 shadow-[0_20px_50px_-30px_rgba(56,189,248,0.9)] ring-1 ring-white/15 transition-transform duration-300 hover:-translate-y-0.5">
            <Code2 size={22} className="text-slate-950" />
          </div>
          <div>
            <p className="text-lg font-semibold text-white tracking-tight">Gururamdas TP</p>
            <p className="text-xs uppercase tracking-[0.22em] text-slate-300">AI / ML Engineer</p>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="nav-links flex gap-6">
            {['home', 'about', 'skills', 'experience', 'projects', 'services', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-gray-300 hover:text-white transition-colors capitalize"
              >
                {section}
              </button>
            ))}
          </div>
          <button
            onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors"
            aria-label="Toggle theme"
          >
            {currentTheme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
}