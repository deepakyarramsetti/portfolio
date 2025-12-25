
import React from 'react';
import { PERSONAL_INFO } from '../data';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-slate-500 font-medium">
          © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
        </p>
        
        <p className="flex items-center gap-1.5 text-slate-500 font-medium">
          Made with <Heart size={16} className="text-red-500 fill-red-500" /> using React & Tailwind
        </p>
        
        <div className="flex gap-6">
          <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary-600 transition-colors">LinkedIn</a>
          <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">GitHub</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
