'use client';

import { motion } from 'framer-motion';
import {
  Brain,
  Code,
  Database,
  Cloud,
  GitBranch,
  Server,
  Smartphone,
  Palette
} from 'lucide-react';

const skillCategories = [
  {
    title: "AI/ML",
    skills: [
      { name: "Python", icon: <Code size={24} /> },
      { name: "TensorFlow", icon: <Brain size={24} /> },
      { name: "PyTorch", icon: <Brain size={24} /> },
      { name: "Scikit-learn", icon: <Brain size={24} /> },
      { name: "Pandas", icon: <Database size={24} /> },
      { name: "NumPy", icon: <Database size={24} /> }
    ]
  },
  {
    title: "Full Stack Development",
    skills: [
      { name: "React", icon: <Code size={24} /> },
      { name: "Next.js", icon: <Code size={24} /> },
      { name: "Node.js", icon: <Server size={24} /> },
      { name: "TypeScript", icon: <Code size={24} /> },
      { name: "MongoDB", icon: <Database size={24} /> },
      { name: "PostgreSQL", icon: <Database size={24} /> }
    ]
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Git", icon: <GitBranch size={24} /> },
      { name: "Docker", icon: <Server size={24} /> },
      { name: "AWS", icon: <Cloud size={24} /> },
      { name: "Linux", icon: <Server size={24} /> },
      { name: "Figma", icon: <Palette size={24} /> },
      { name: "VS Code", icon: <Code size={24} /> }
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-title text-center"
        >
          Technical Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="glass-panel p-6"
            >
              <h3 className="text-xl font-bold text-white mb-6 text-center">{category.title}</h3>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                    className="skill-item flex flex-col items-center gap-2 p-3 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors"
                  >
                    <div className="text-blue-400">
                      {skill.icon}
                    </div>
                    <span className="text-white text-sm font-medium text-center">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}