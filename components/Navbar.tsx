
import React, { useState, useEffect } from 'react';
import { Sun, Moon, Github, Code2 } from 'lucide-react';

interface NavbarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleTheme }) => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
      const scrollPos = window.scrollY + 120;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPos >= element.offsetTop && scrollPos < element.offsetTop + element.offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-4xl">
      <div className="glass-navbar rounded-full px-4 py-2 flex items-center justify-between shadow-xl">
        {/* Branding */}
        <div className="flex items-center gap-2 pl-2" aria-label="Brand">
          <div className="w-8 h-8 rounded-lg bg-indigo-600/10 dark:bg-indigo-600/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
            <Code2 size={18} />
          </div>
          <div className="hidden sm:block">
            <span className="text-sm font-bold tracking-tight text-slate-900 dark:text-white">Deepak</span>
            <p className="text-[10px] text-indigo-600 dark:text-indigo-400 font-extrabold leading-none uppercase tracking-widest">Developer</p>
          </div>
        </div>

        {/* Links */}
        <nav className="flex items-center gap-1 sm:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`px-3 py-1.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${activeSection === link.id
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20'
                  : 'text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white'
                }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 pr-1 border-l border-slate-200 dark:border-white/10 ml-2 pl-4">
          <button
            onClick={toggleTheme}
            className="p-2 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white transition-colors"
            title="Toggle Theme"
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a
            href="https://github.com/deepakyarramsetti"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white transition-all"
            title="GitHub Profile"
          >
            <Github size={18} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
