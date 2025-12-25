
import React from 'react';
import { SKILLS } from '../data';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-black mb-4 text-slate-900 dark:text-white">
          <span className="text-indigo-600">02.</span> My Technical Arsenal
        </h2>
        <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full"></div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {SKILLS.map((category, idx) => (
          <div 
            key={idx} 
            className="p-8 rounded-2xl glass-navbar border border-slate-200 dark:border-slate-800 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
          >
            <h3 className="text-xl font-bold mb-6 text-indigo-600 dark:text-indigo-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, sIdx) => (
                <span 
                  key={sIdx} 
                  className="px-3 py-1 text-sm font-bold rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-transparent hover:border-indigo-500/50 transition-colors"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
