import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, CheckCircle2, Award, BookOpen } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-20 relative overflow-hidden bg-white dark:bg-[#040813] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-400/30 text-cyan-700 dark:text-cyan-300 text-xs font-mono uppercase tracking-wider mb-4">
            <GraduationCap className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white tracking-tight mb-3">
            Education & <span className="bg-gradient-to-r from-cyan-600 via-sky-500 to-purple-600 dark:from-cyan-400 dark:to-purple-400 bg-clip-text text-transparent">Quantitative Core</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base font-light">
            Rooted in scientific methodologies, data interpretation, and clear technical communication.
          </p>
        </div>

        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto rounded-3xl glass-panel p-8 sm:p-10 border border-slate-200 dark:border-white/[0.1] hover:border-cyan-400/30 transition-all shadow-xl relative overflow-hidden"
        >
          {/* Subtle accent line */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-500" />

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-white/[0.08] pb-6 mb-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400 shrink-0">
                <GraduationCap className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white">
                  {education.degree}
                </h3>
                <h4 className="text-sm sm:text-base text-slate-700 dark:text-slate-300 font-medium">
                  {education.institution}
                </h4>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08] text-xs font-mono text-cyan-700 dark:text-cyan-300 font-semibold">
              <Calendar className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
              <span>{education.period}</span>
            </div>
          </div>

          <div>
            <p className="text-xs font-mono text-cyan-700 dark:text-cyan-400 uppercase tracking-widest mb-4 flex items-center gap-2 font-semibold">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Foundational Competencies:</span>
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {education.foundation.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/[0.06]"
                >
                  <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-800 dark:text-slate-200">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-200 dark:border-white/[0.06] text-xs text-slate-500 dark:text-slate-400 text-center sm:text-left">
            Bridging analytical biotechnology research principles with scalable enterprise operations, product ownership, and data analytics.
          </div>
        </motion.div>

      </div>
    </section>
  );
}
