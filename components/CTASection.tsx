
import React from 'react';

export const CTASection: React.FC = () => {
  return (
    <section className="px-6 py-24">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden bg-gradient-main rounded-[3rem] px-8 py-20 md:py-32 text-center group">
          {/* Decorative shapes */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl group-hover:bg-white/10 transition-colors duration-500"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold font-heading text-white mb-8 tracking-tight">
              Have a process you want to automate?
            </h2>
            <p className="text-xl text-white/70 mb-12 font-light max-w-2xl mx-auto leading-relaxed">
              Stop fighting manual tasks. Let’s turn your complex workflows into reliable, scalable automation solutions.
            </p>
            <a 
              href="#contact" 
              className="inline-block bg-white text-slate-950 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-slate-100 hover:scale-105 active:scale-95 transition-all shadow-xl shadow-black/20"
            >
              Contact Me for Automation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
