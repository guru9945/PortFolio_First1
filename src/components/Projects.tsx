'use client';

import { motion } from 'framer-motion';
import { ExternalLink, GitBranch } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    title: "Hotel Booking Web Application (MERN)",
    description: "Built a scalable hotel booking platform with search, booking, reservation management, authentication, payments, and media handling.",
    image: "https://i.postimg.cc/HsqSP6dW/Screenshot-2026-04-10-112706.png",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Stripe", "Cloudinary"],
    github: "#",
    demo: "https://vibestay-taupe.vercel.app/"
  },
  {
    title: "Real-Time Sign Language Detection",
    description: "Developed a webcam-based sign language recognition system using pose estimation and Vision Transformer for live gesture classification.",
    image: "https://i.postimg.cc/FR2YykXd/Gemini-Generated-Image-ghxwmghxwmghxwmg.png",
    technologies: ["Python", "OpenCV", "MediaPipe", "Vision Transformer"],
    github: "#",
    demo: "https://alliancebschool-my.sharepoint.com/personal/tgururamdasbtech22_ced_alliance_edu_in/_layouts/15/stream.aspx?id=%2Fpersonal%2Ftgururamdasbtech22%5Fced%5Falliance%5Fedu%5Fin%2FDocuments%2FDemo%2Emp4&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&ga=1&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2Ea3594ed9%2D9001%2D48ef%2D8f99%2D8d68d9415334"
  },
  {
    title: "Underwater Trash Detection",
    description: "Created a YOLOv6 object detection model to identify underwater trash in images and video for marine pollution monitoring.",
    image: "https://i.postimg.cc/BZpW1953/Gemini-Generated-Image-b8dmkb8dmkb8dmkb.png",
    technologies: ["Python", "YOLOv6", "OpenCV", "TensorFlow"],
    github: "https://github.com/guru9945/underwater_trash_detection.git",
    demo: "https://github.com/guru9945/underwater_trash_detection.git"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-20 bg-black scroll-mt-20 sm:scroll-mt-28">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-title text-center"
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="project-card glass-panel p-4 sm:p-6 group"
            >
              <div className="relative overflow-hidden rounded-xl mb-4 h-40 sm:h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  unoptimized
                  className="object-cover"
                />
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">{project.description}</p>

              <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-badge-mini bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-xs sm:text-sm">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="card-links flex gap-3 sm:gap-4">
                <a href={project.github} className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm">
                  <GitBranch size={14} className="sm:hidden" />
                  <GitBranch size={16} className="hidden sm:block" />
                  Code
                </a>
                <a href={project.demo} className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm">
                  <ExternalLink size={14} className="sm:hidden" />
                  <ExternalLink size={16} className="hidden sm:block" />
                  Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}