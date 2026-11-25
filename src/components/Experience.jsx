import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Calendar, 
  MapPin, 
  CheckCircle, 
  Cpu, 
  FileText, 
  ShieldCheck, 
  Layers, 
  ArrowRight,
  TrendingUp,
  Activity,
  Terminal
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-16 sm:py-20 relative overflow-hidden bg-white dark:bg-[#030712] transition-colors duration-300">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-400/30 text-cyan-700 dark:text-cyan-300 text-xs font-mono uppercase tracking-wider mb-4">
            <Building2 className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
            <span>Career Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 dark:text-white tracking-tight mb-4">
            Professional <span className="bg-gradient-to-r from-cyan-600 via-sky-500 to-purple-600 dark:from-cyan-400 dark:via-sky-300 dark:to-purple-400 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed">
            Hands-on operations, cross-functional coordination, and automated data monitoring in industrial automation.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto">
          {experience.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative pl-6 sm:pl-10 pb-12 border-l-2 border-cyan-500/30 last:border-l-0 last:pb-0"
            >
              {/* Timeline Glowing Node */}
              <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-white dark:bg-[#060a14] border-2 border-cyan-500 dark:border-cyan-400 flex items-center justify-center shadow-md dark:shadow-cyan-glow">
                <div className="w-2.5 h-2.5 rounded-full bg-cyan-500 dark:bg-cyan-400 animate-pulse" />
              </div>

              {/* Experience Card */}
              <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-white/[0.1] hover:border-cyan-400/50 transition-all duration-300 shadow-xl group">
                
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 dark:border-white/[0.08] pb-5 mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-xs font-mono text-cyan-700 dark:text-cyan-400 uppercase tracking-widest px-2.5 py-0.5 rounded-md bg-cyan-50 dark:bg-cyan-950/60 border border-cyan-200 dark:border-cyan-400/30 font-semibold">
                        {item.type}
                      </span>
                      <span className="text-xs font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {item.location}
                      </span>
                    </div>

                    <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                      {item.role}
                    </h3>
                    <h4 className="text-lg font-medium text-slate-700 dark:text-slate-300 mt-0.5">
                      {item.company}
                    </h4>
                  </div>

                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08] text-slate-700 dark:text-slate-300 text-xs font-mono shrink-0">
                    <Calendar className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                    <span>{item.period}</span>
                  </div>
                </div>

                {/* Role Narrative */}
                <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-6 font-light">
                  {item.description}
                </p>

                {/* Key Responsibilities matching Resume */}
                <div className="space-y-3.5 mb-8">
                  <h5 className="text-xs font-mono text-cyan-700 dark:text-cyan-400 uppercase tracking-widest flex items-center gap-2 font-semibold">
                    <Terminal className="w-3.5 h-3.5" />
                    <span>Core Responsibilities & Deliverables:</span>
                  </h5>

                  {item.responsibilities.map((resp, rIdx) => (
                    <div key={rIdx} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      <div className="w-5 h-5 rounded-md bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 flex items-center justify-center shrink-0 mt-0.5 text-cyan-600 dark:text-cyan-400">
                        <CheckCircle className="w-3.5 h-3.5" />
                      </div>
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>

                {/* Metrics / Impact Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 p-4 rounded-xl bg-slate-50 dark:bg-black/40 border border-slate-200 dark:border-white/[0.06] mb-6">
                  {item.metrics.map((metric, mIdx) => (
                    <div key={mIdx} className="text-center sm:text-left">
                      <p className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase">{metric.label}</p>
                      <p className="text-sm font-bold text-cyan-700 dark:text-cyan-300 mt-0.5">{metric.value}</p>
                    </div>
                  ))}
                </div>

                {/* Skills & Process Tags */}
                <div>
                  <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mb-2.5 uppercase tracking-wider">
                    Technologies & Operations Practices:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.skillsUsed.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-100 dark:bg-white/[0.03] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/[0.08] hover:border-cyan-400/50 hover:text-cyan-700 dark:hover:text-cyan-200 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </motion.div>
    </section>
  );
}
