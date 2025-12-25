
import React from 'react';
import { PERSONAL_INFO } from '../data';
import { ArrowRight, ChevronDown, Database, Code2, Globe, Cloud } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-[90vh] pt-32 pb-20 flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full hero-gradient pointer-events-none -z-10 opacity-60"></div>

      {/* Decorative Floating Icons - Optimized for both themes */}
      <div className="absolute top-[15%] left-[10%] text-indigo-500/10 dark:text-slate-800 animate-float opacity-40 dark:opacity-20 pointer-events-none">
        <Code2 size={64} />
      </div>
      <div className="absolute top-[25%] right-[15%] text-indigo-500/10 dark:text-slate-800 animate-float-delayed opacity-40 dark:opacity-20 pointer-events-none">
        <Cloud size={56} />
      </div>
      <div className="absolute bottom-[20%] left-[15%] text-indigo-500/10 dark:text-slate-800 animate-float-delayed opacity-40 dark:opacity-20 pointer-events-none">
        <Database size={48} />
      </div>
      <div className="absolute bottom-[30%] right-[10%] text-indigo-500/10 dark:text-slate-800 animate-float opacity-40 dark:opacity-20 pointer-events-none">
        <Globe size={52} />
      </div>

      {/* Status Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 text-[10px] font-black tracking-[0.2em] text-emerald-600 dark:text-emerald-400 uppercase bg-emerald-500/10 border border-emerald-500/20 rounded-full">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
        Available for hire
      </div>

      {/* Heading Container */}
      <div className="max-w-5xl mb-12 px-4 z-10">
        <h1 className="text-xl md:text-3xl text-slate-500 dark:text-slate-400 font-bold mb-4">
          Hi, I'm <span className="text-indigo-600 dark:text-white font-black">Deepak Yarramsetti</span>
        </h1>
        <h2 className="text-5xl md:text-9xl font-black tracking-tighter leading-none text-slate-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-b dark:from-white dark:to-slate-500 mb-6 transition-colors">
          Java Full Stack Developer
        </h2>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
          Building high-quality, scalable applications using <span className="text-indigo-600 dark:text-indigo-400 font-black">Java</span>, <span className="text-indigo-600 dark:text-indigo-400 font-black">Spring Boot</span>, and <span className="text-indigo-600 dark:text-indigo-400 font-black">Modern Frameworks</span>.
        </p>
      </div>

      {/* Call to Action Buttons */}
      <div className="flex flex-wrap justify-center gap-5 z-10">
        <a
          href="#projects"
          className="group flex items-center gap-3 px-10 py-4 bg-indigo-600 text-white font-black rounded-full transition-all hover:scale-105 active:scale-95 shadow-xl shadow-indigo-500/30 hover:bg-indigo-700"
        >
          View My Work
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </a>
        <a
          href={PERSONAL_INFO.resumeLink}
          download="Deepak-Yarramsetti-Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-10 py-4 bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white font-bold rounded-full transition-all hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-slate-300 dark:hover:border-white/20 backdrop-blur-sm shadow-lg"
        >
          Resume <ChevronDown size={20} />
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-400 dark:text-slate-600 animate-bounce cursor-pointer">
        <a href="#about"><ChevronDown size={32} /></a>
      </div>
    </section>
  );
};

export default Hero;
