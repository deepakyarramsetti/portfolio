
import React from 'react';
import { PROJECTS } from '../data';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20">
      <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-black flex items-center gap-4 text-slate-900 dark:text-white">
          <span className="text-indigo-600">04.</span> Featured Projects
        </h2>
        <a href="https://github.com/deepakyarramsetti" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 font-bold hover:underline">
          See all repos →
        </a>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {PROJECTS.map((project, idx) => (
          <div 
            key={idx} 
            className="group relative rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:shadow-2xl transition-all duration-500 bg-white dark:bg-slate-900"
          >
            <div className="aspect-video w-full overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent opacity-60"></div>
            </div>
            
            <div className="p-8 space-y-4">
              <div className="flex justify-between items-start">
                <h3 className="text-2xl font-black text-slate-900 dark:text-white">{project.title}</h3>
                <div className="flex items-center gap-3">
                  {project.github && (
                    <a href={project.github} className="text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                      <Github size={20} />
                    </a>
                  )}
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
              
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 pt-2">
                {project.technologies.map((tech, tIdx) => (
                  <span key={tIdx} className="text-[10px] font-black px-3 py-1 rounded-full border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 uppercase">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
