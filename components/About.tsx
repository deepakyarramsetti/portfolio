
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="md:w-1/3 relative">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 bg-slate-200">
            <img
              src="https://picsum.photos/seed/deepak/400/400"
              alt="Deepak Yarramsetti"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl -z-10"></div>
        </div>

        <div className="md:w-2/3 space-y-6">
          <h2 className="text-3xl md:text-4xl font-black flex items-center gap-4 text-slate-900 dark:text-white">
            <span className="text-indigo-600 font-black">01.</span> About Me
          </h2>
          <div className="space-y-4 text-slate-600 dark:text-slate-400 text-lg leading-relaxed font-medium">
            <p>
              I am a dedicated <strong className="text-slate-900 dark:text-white font-bold">Java Full Stack Developer</strong> with over 1.5 years of experience building robust web applications. I bridge the gap between frontend elegance and backend power.
            </p>
            <p>
              Transitioning from Mechanical Engineering into software development has given me a unique perspective on precision and scalability. I specialize in <strong className="text-indigo-600 dark:text-indigo-400 font-bold">Spring Boot</strong>, <strong className="text-indigo-600 dark:text-indigo-400 font-bold">React</strong>, and <strong className="text-indigo-600 dark:text-indigo-400 font-bold">Angular</strong>.
            </p>
            <p>
              I enjoy solving real-world problems, collaborating with cross-functional teams, and continuously learning modern technologies to deliver <strong className="text-slate-900 dark:text-white font-bold">high-quality, scalable, and user-centric solutions</strong>.
            </p>

          </div>

          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 shadow-sm">
              <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest mb-1">Experience</p>
              <p className="text-2xl font-black text-slate-900 dark:text-white">1.5+ Years</p>
            </div>
            <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 shadow-sm">
              <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest mb-1">Projects Done</p>
              <p className="text-2xl font-black text-slate-900 dark:text-white">10+ Completed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
