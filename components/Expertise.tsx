
import React from 'react';
import { Globe, Bot, Workflow, FileText, Monitor, Database } from 'lucide-react';

const expertises = [
  {
    title: 'Web Scraping',
    description: 'High-performance data extraction from complex, dynamic websites with proxy rotation and anti-detect tech.',
    icon: <Globe className="w-6 h-6 text-blue-400" />,
    tools: ['Playwright', 'Selenium', 'BS4', 'Anti-bot Handling']
  },
  {
    title: 'Bot Development',
    description: 'Autonomous browser agents for form filling, real-time data sync, and background task scheduling.',
    icon: <Bot className="w-6 h-6 text-purple-400" />,
    tools: ['API Integration', 'Browser Hybrid', 'Authentication Flow']
  },
  {
    title: 'Document AI & OCR',
    description: 'Document Understanding workflows using AI to extract structured data from PDFs, Invoices, and scanned images.',
    icon: <FileText className="w-6 h-6 text-indigo-400" />,
    tools: ['Document Understanding', 'Amazon Textract', 'LLM Processing', 'OCR']
  },
  {
    title: 'RPA & Workflows',
    description: 'End-to-end business process optimization using Python-based bots and UiPath enterprise studio.',
    icon: <Workflow className="w-6 h-6 text-blue-500" />,
    tools: ['Enterprise RPA', 'Error Handling', 'Logging']
  },
  {
    title: 'Desktop Automation',
    description: 'Legacy system interaction and desktop-based repetitive tasks where no API exists.',
    icon: <Monitor className="w-6 h-6 text-teal-400" />,
    tools: ['PyAutoGUI', 'Win32API', 'Surface Automation']
  },
  {
    title: 'Data Pipelines',
    description: 'Automated ingestion and syncing between disparate data sources, CRMs, and custom databases.',
    icon: <Database className="w-6 h-6 text-cyan-400" />,
    tools: ['SQL', 'NoSQL', 'Webhooks', 'ETL Bots']
  }
];

export const Expertise: React.FC = () => {
  return (
    <section id="expertise" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 uppercase tracking-tight">Precision-Engineered Expertise</h2>
          <p className="text-slate-400 text-lg">Scalable automation services tailored for enterprise growth.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertises.map((item, idx) => (
            <div key={idx} className="glass-card p-8 rounded-2xl group">
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold font-heading mb-3">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {item.tools.map((tool, tidx) => (
                  <span key={tidx} className="text-[10px] uppercase tracking-wider font-semibold px-2 py-1 rounded bg-white/5 border border-white/5 text-slate-500">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
