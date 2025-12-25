
import React from 'react';
import { EDUCATION } from '../data';
import { GraduationCap, Award } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" className="scroll-mt-24 grid md:grid-cols-2 gap-12">
      <div>
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-4">
          <span className="text-primary-600">04.</span> Education
        </h2>
        <div className="space-y-6">
          {EDUCATION.map((item, idx) => (
            <div key={idx} className="flex gap-6 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-900 transition-colors">
              <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-primary-100 dark:bg-primary-900/40 flex items-center justify-center text-primary-600">
                <GraduationCap size={24} />
              </div>
              <div>
                <span className="text-sm font-bold text-primary-500">{item.year}</span>
                <h4 className="text-lg font-bold mt-1">{item.course}</h4>
                <p className="text-slate-500 dark:text-slate-400">{item.institution}</p>
                <p className="text-sm font-semibold mt-2 text-primary-600/70">{item.grade}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div>
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-4">
          <span className="text-primary-600">05.</span> Certifications
        </h2>
        <div className="space-y-6">
          <div className="flex gap-6 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-900 transition-colors">
            <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center text-indigo-600">
              <Award size={24} />
            </div>
            <div>
              <span className="text-sm font-bold text-indigo-500 uppercase">Simplilearn</span>
              <h4 className="text-xl font-bold mt-1">Front-End Development</h4>
              <p className="text-slate-600 dark:text-slate-400 mt-2">
                Focused on building responsive, interactive web applications using HTML, CSS, and JavaScript with modern industry standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
