
import React from 'react';
import { EXPERIENCE } from '../data';
import { Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20">
      <h2 className="text-3xl md:text-4xl font-black mb-12 flex items-center gap-4 text-slate-900 dark:text-white">
        <span className="text-indigo-600 font-black">03.</span> Professional Journey
      </h2>
      
      <div className="space-y-12 relative before:absolute before:left-0 md:before:left-1/2 before:top-0 before:bottom-0 before:w-0.5 before:bg-slate-200 dark:before:bg-slate-800">
        {EXPERIENCE.map((exp, idx) => (
          <div key={idx} className={`relative flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
            <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full glass-navbar border border-slate-200 dark:border-slate-800 flex items-center justify-center z-10 text-indigo-600 shadow-xl">
              <Briefcase size={20} />
            </div>
            
            <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${idx % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 text-left'}`}>
              <div className="p-6 rounded-2xl glass-navbar border border-slate-200 dark:border-slate-800 hover:shadow-2xl transition-all duration-500 group">
                <span className="text-xs font-black text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">{exp.period}</span>
                <h3 className="text-2xl font-black mt-1 text-slate-900 dark:text-white">{exp.role}</h3>
                <p className="text-lg font-bold text-slate-500 mb-4">{exp.company}</p>
                
                <ul className={`space-y-2 mb-6 text-slate-600 dark:text-slate-400 text-sm font-medium ${idx % 2 === 0 ? 'md:items-end' : ''}`}>
                  {exp.description.map((desc, dIdx) => (
                    <li key={dIdx} className="flex gap-2">
                      <span className={`flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 ${idx % 2 === 0 ? 'md:hidden' : ''}`}></span>
                      {desc}
                    </li>
                  ))}
                </ul>
                
                <div className={`flex flex-wrap gap-2 ${idx % 2 === 0 ? 'md:justify-end' : ''}`}>
                  {exp.technologies.map((tech, tIdx) => (
                    <span key={tIdx} className="px-2 py-0.5 text-[10px] font-black rounded bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 uppercase tracking-tighter">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="hidden md:block w-1/2"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
