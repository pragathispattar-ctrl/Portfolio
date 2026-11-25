import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  CheckCircle2, 
  Sparkles, 
  ExternalLink,
  Target
} from 'lucide-react';
import { GithubIcon, NotionIcon, getBrandIcon } from './BrandIcons';

export default function ProjectCaseStudyModal({ project, isOpen, onClose }) {
  // Prevent body scroll while modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto pt-20 sm:pt-24 pb-10">
        {/* Backdrop (above navbar) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/70 dark:bg-black/85 backdrop-blur-md z-[100]"
        />

        {/* Brief Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-3xl bg-white dark:bg-[#070b16] border border-slate-200 dark:border-cyan-500/30 shadow-2xl p-6 sm:p-8 z-[101] text-slate-900 dark:text-white my-auto custom-scrollbar"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-white/[0.06] dark:hover:bg-white/[0.12] text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white border border-slate-200 dark:border-white/[0.1] focus:outline-none transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="mb-4 pr-10">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono uppercase tracking-wider bg-cyan-50 dark:bg-cyan-950/60 border border-cyan-200 dark:border-cyan-400/40 text-cyan-700 dark:text-cyan-300 font-semibold">
                {project.badge}
              </span>
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                {project.category}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 dark:text-white tracking-tight leading-snug">
              {project.title}
            </h3>
          </div>

          {/* Direct External Action Links */}
          <div className="flex flex-wrap items-center gap-2.5 mb-5 pb-4 border-b border-slate-100 dark:border-white/[0.08]">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-mono font-semibold bg-slate-900 text-white dark:bg-white dark:text-black hover:opacity-90 transition-opacity shadow-xs"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>View on GitHub</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
            )}

            {project.notionUrl && (
              <a
                href={project.notionUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-mono font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-white/[0.08] dark:hover:bg-white/[0.14] text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-white/[0.12] transition-colors shadow-xs"
              >
                <NotionIcon className="w-3.5 h-3.5" />
                <span>Open Notion Documentation</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
            )}
          </div>

          {/* Brief Overview */}
          <div className="mb-5">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5 font-semibold flex items-center gap-1.5">
              <Target className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
              <span>Project Objective</span>
            </h4>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-light">
              {project.description}
            </p>
          </div>

          {/* Key Activities (Brief 3 items) */}
          <div className="mb-5">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2 font-semibold">
              Execution Highlights
            </h4>
            <ul className="space-y-2">
              {project.keyActivities.slice(0, 3).map((act, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                  <span>{act}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Outcome & Impact Box */}
          <div className="p-4 rounded-2xl bg-cyan-50/70 dark:bg-cyan-950/30 border border-cyan-200 dark:border-cyan-400/30 mb-5">
            <h4 className="text-xs font-mono text-cyan-800 dark:text-cyan-300 uppercase tracking-wider mb-1.5 flex items-center gap-1.5 font-bold">
              <Sparkles className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
              <span>Strategic Impact</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-light leading-relaxed">
              {project.insights}
            </p>
          </div>

          {/* Tools & Methodologies */}
          <div className="mb-6">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2 font-semibold">
              Tools & Technologies
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.tools.map((tool, idx) => {
                const brandIcon = getBrandIcon(tool, "w-3 h-3");
                return (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-100 dark:bg-white/[0.05] text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-white/[0.08]"
                  >
                    {brandIcon ? brandIcon : <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />}
                    <span>{tool}</span>
                  </span>
                );
              })}
            </div>
          </div>

          {/* Modal Footer */}
          <div className="pt-4 border-t border-slate-100 dark:border-white/[0.08] flex items-center justify-between">
            <span className="text-[11px] font-mono text-slate-400">
              Verified Project Showcase
            </span>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-mono font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-white/[0.08] dark:hover:bg-white/[0.12] text-slate-900 dark:text-white border border-slate-200 dark:border-white/[0.12] transition-colors"
            >
              Close
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
