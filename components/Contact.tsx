
import React, { useState } from 'react';
import { Mail, Linkedin, Send, MessageSquare } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-8">Let's Build the Future of Your Workflow</h2>
            <p className="text-slate-400 text-lg mb-12 leading-relaxed">
              Tell me about your process. Whether it's a simple scraper or a complex enterprise RPA migration, I'll handle the automation architecture and delivery.
            </p>
            
            <div className="space-y-6">
              <a href="mailto:hello@rpadev.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 glass-card rounded-xl flex items-center justify-center text-slate-400 group-hover:text-white transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-1">Email</div>
                  <div className="text-lg font-medium group-hover:text-purple-400 transition-colors">hello@rpadev.com</div>
                </div>
              </a>
              
              <a href="#" className="flex items-center gap-4 group">
                <div className="w-12 h-12 glass-card rounded-xl flex items-center justify-center text-slate-400 group-hover:text-white transition-all">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-1">LinkedIn</div>
                  <div className="text-lg font-medium group-hover:text-purple-400 transition-colors">linkedin.com/in/rpa-specialist</div>
                </div>
              </a>

              <a href="#" className="flex items-center gap-4 group">
                <div className="w-12 h-12 glass-card rounded-xl flex items-center justify-center text-slate-400 group-hover:text-white transition-all">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-1">Instant</div>
                  <div className="text-lg font-medium group-hover:text-purple-400 transition-colors">t.me/automation_pro</div>
                </div>
              </a>
            </div>
          </div>

          <div className="glass-card p-10 rounded-[2.5rem]">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-6">
                  <Send className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Message Sent Successfully</h3>
                <p className="text-slate-400">I'll get back to you within 24 hours to discuss your project.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-purple-400 hover:text-purple-300 font-medium"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-400 mb-2 uppercase tracking-wider">Full Name</label>
                  <input 
                    type="text" 
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                    className="w-full bg-slate-900/50 border border-white/5 rounded-xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-400 mb-2 uppercase tracking-wider">Email Address</label>
                  <input 
                    type="email" 
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                    className="w-full bg-slate-900/50 border border-white/5 rounded-xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-400 mb-2 uppercase tracking-wider">Project Description</label>
                  <textarea 
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                    className="w-full bg-slate-900/50 border border-white/5 rounded-xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all resize-none"
                    placeholder="Tell me about the process you want to automate..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-gradient-main text-white py-5 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:opacity-90 active:scale-[0.98] transition-all disabled:opacity-50 shadow-lg shadow-purple-900/10"
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <>
                      Send Inquiry
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
