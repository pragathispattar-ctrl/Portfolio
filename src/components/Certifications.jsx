import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldAlert, CheckCircle, GitBranch, Columns, Target, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const certIcons = {
  Award: Award,
  ShieldAlert: ShieldAlert,
  CheckCircle: CheckCircle,
  GitBranch: GitBranch,
  Columns: Columns,
  Target: Target,
  Sparkles: Sparkles
};

export default function Certifications() {
  const { certifications } = portfolioData;

  return (
    <section id="certifications" className="py-20 relative overflow-hidden bg-slate-50 dark:bg-[#030712] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-400/30 text-cyan-700 dark:text-cyan-300 text-xs font-mono uppercase tracking-wider mb-4">
            <Award className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
            <span>Industry Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white tracking-tight mb-3">
            Professional <span className="bg-gradient-to-r from-cyan-600 via-sky-500 to-purple-600 dark:from-cyan-400 dark:to-purple-400 bg-clip-text text-transparent">Certifications</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base font-light">
            Verified mastery across project management, Six Sigma process control, agile scrum, and AI prompting.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
          {certifications.map((cert, index) => {
            const IconComponent = certIcons[cert.icon] || Award;
            const isClaude = cert.title.includes('Claude');

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className={`group p-5 rounded-2xl glass-card flex flex-col justify-between border transition-all duration-300 ${
                  isClaude
                    ? 'border-purple-300 dark:border-purple-500/40 bg-purple-50/50 dark:bg-purple-950/20 shadow-md shadow-purple-500/10'
                    : 'border-slate-200 dark:border-white/[0.08] hover:border-cyan-400/40'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform ${
                      isClaude
                        ? 'bg-purple-100 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400 border border-purple-200 dark:border-purple-400/30'
                        : 'bg-cyan-50 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-400/30'
                    }`}>
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-100 dark:bg-white/[0.04] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/[0.08]">
                      {cert.category}
                    </span>
                  </div>

                  <h3 className="text-base font-display font-semibold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors leading-snug mb-1">
                    {cert.title}
                  </h3>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200 dark:border-white/[0.06] flex items-center justify-between">
                  <span className="text-xs font-mono text-cyan-700 dark:text-cyan-400 font-semibold">
                    {cert.issuer}
                  </span>
                  <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400">
                    Verified
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
