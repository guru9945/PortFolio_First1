import { Mail, GitBranch, Code2, Terminal } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/gururamdas-tp-gururamdas-tp-89764b262/',
      icon: <Mail size={20} />
    },
    {
      name: 'GitHub',
      url: 'https://github.com/guru9945',
      icon: <GitBranch size={20} />
    },
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/u/Gururamdas/',
      icon: <Code2 size={20} />
    },
    {
      name: 'HackerRank',
      url: 'https://www.hackerrank.com/profile/ggururamdastp',
      icon: <Terminal size={20} />
    }
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="container mx-auto px-6">
        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-8">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
              title={link.name}
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-gray-400">
            © 2026 Gururamdas TP — AI/ML Engineer & full‑stack developer
          </p>
        </div>
      </div>
    </footer>
  );
}