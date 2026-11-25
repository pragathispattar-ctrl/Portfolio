import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Download, 
  ExternalLink, 
  Briefcase, 
  GraduationCap, 
  Award, 
  Code2, 
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Resume() {
  const { personal, experience, education, certifications, skillCategories } = portfolioData;

  return (
    <section id="resume" className="py-16 sm:py-20 relative overflow-hidden bg-white dark:bg-[#040813] transition-colors duration-300">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-400/30 text-cyan-700 dark:text-cyan-300 text-xs font-mono uppercase tracking-wider mb-4">
            <FileText className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
            <span>Curriculum Vitae</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 dark:text-white tracking-tight mb-3">
            Professional <span className="bg-gradient-to-r from-cyan-600 via-sky-500 to-purple-600 dark:from-cyan-400 dark:to-purple-400 bg-clip-text text-transparent">Resume</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base font-light">
            Review the complete qualifications, track record, and verified credentials of Pragathi Pattar.
          </p>
        </div>

        {/* Action Buttons Top Bar */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <a
            href="/resume.pdf"
            download="Pragathi_Pattar_Resume.pdf"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl font-semibold text-sm sm:text-base text-black bg-gradient-to-r from-cyan-400 to-sky-400 shadow-cyan-glow hover:shadow-cyan-glow-lg transition-all transform hover:-translate-y-0.5"
          >
            <Download className="w-4 h-4 text-black" />
            <span>Download Resume (.PDF)</span>
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl font-medium text-sm sm:text-base text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-white/[0.04] hover:bg-slate-200 dark:hover:bg-white/[0.08] border border-slate-200 dark:border-white/[0.12] hover:border-cyan-400/40 transition-all"
          >
            <ExternalLink className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            <span>View Resume (New Tab)</span>
          </a>
        </div>

        {/* Futuristic Resume Preview Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto rounded-3xl glass-panel p-6 sm:p-10 border border-slate-200 dark:border-white/[0.1] shadow-2xl relative overflow-hidden"
        >
          {/* Top scanning accent */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-500" />

          {/* Resume Header */}
          <div className="border-b border-slate-200 dark:border-white/[0.08] pb-6 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-3xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
                {personal.name}
              </h3>
              <p className="text-xs font-mono text-cyan-700 dark:text-cyan-400 mt-1 uppercase tracking-wider font-semibold">
                {personal.location} • {personal.phone} • {personal.email}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-50 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-400/30 font-medium">
                Verified Document
              </span>
            </div>
          </div>

          {/* Section: Professional Summary / Objective */}
          <div className="mb-8">
            <h4 className="text-xs font-mono text-cyan-700 dark:text-cyan-400 uppercase tracking-widest mb-2.5 flex items-center gap-2 font-semibold">
              <ShieldCheck className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              <span>Professional Objective</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-light p-4 rounded-xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/[0.05]">
              {personal.aboutBio}
            </p>
          </div>

          {/* Section: Experience Summary */}
          <div className="mb-8">
            <h4 className="text-xs font-mono text-cyan-700 dark:text-cyan-400 uppercase tracking-widest mb-3 flex items-center gap-2 font-semibold">
              <Briefcase className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              <span>Professional Experience</span>
            </h4>
            {experience.map((exp, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/[0.05] mb-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <h5 className="text-sm font-display font-bold text-slate-900 dark:text-white">
                    {exp.company} — <span className="text-cyan-700 dark:text-cyan-300">{exp.role}</span>
                  </h5>
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400">{exp.period}</span>
                </div>
                <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300 font-light">
                  {exp.responsibilities.map((r, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-2">
                      <span className="text-cyan-600 dark:text-cyan-400 mt-0.5">•</span>
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Section: Education & Certifications Summary */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <h4 className="text-xs font-mono text-cyan-700 dark:text-cyan-400 uppercase tracking-widest mb-3 flex items-center gap-2 font-semibold">
                <GraduationCap className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span>Education</span>
              </h4>
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/[0.05]">
                <h5 className="text-sm font-bold text-slate-900 dark:text-white">{education.institution}</h5>
                <p className="text-xs text-cyan-700 dark:text-cyan-300 mt-0.5 font-medium">{education.degree}</p>
                <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-0.5">{education.period}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 font-light">
                  Statistics, data interpretation, and clear reporting
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-mono text-cyan-700 dark:text-cyan-400 uppercase tracking-widest mb-3 flex items-center gap-2 font-semibold">
                <Award className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span>Key Certifications ({certifications.length})</span>
              </h4>
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/[0.05] space-y-1.5">
                {certifications.slice(0, 4).map((c, cIdx) => (
                  <div key={cIdx} className="text-xs text-slate-700 dark:text-slate-300 flex items-center justify-between">
                    <span className="truncate pr-2">• {c.title}</span>
                    <span className="text-[10px] font-mono text-cyan-700 dark:text-cyan-400 shrink-0 font-medium">{c.issuer}</span>
                  </div>
                ))}
                {certifications.length > 4 && (
                  <p className="text-[10px] font-mono text-slate-500 dark:text-slate-400 pt-1">
                    +{certifications.length - 4} additional accredited certifications
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Section: Core Skills Matrix Preview */}
          <div>
            <h4 className="text-xs font-mono text-cyan-700 dark:text-cyan-400 uppercase tracking-widest mb-3 flex items-center gap-2 font-semibold">
              <Code2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              <span>Technical & Operations Competencies</span>
            </h4>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/[0.05] flex flex-wrap gap-1.5">
              {[
                "Power BI", "Excel", "SQL", "Python", "Google Sheets", 
                "Jira", "Confluence", "Miro", "Agile & Scrum", "Kanban", 
                "Process Mapping (SOPs)", "UAT", "Risk Management", 
                "Claude 101", "Prompt Engineering", "Product Ownership"
              ].map((s, sIdx) => (
                <span
                  key={sIdx}
                  className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white dark:bg-white/[0.04] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/[0.08]"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Footer note */}
          <div className="mt-8 pt-4 border-t border-slate-200 dark:border-white/[0.08] flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400">
            <span>Source of truth: Pragathi Pattar Resume</span>
            <a
              href="/resume.pdf"
              download="Pragathi_Pattar_Resume.pdf"
              className="text-cyan-600 dark:text-cyan-400 hover:underline transition-colors flex items-center gap-1 font-semibold"
            >
              <span>Download Full PDF</span>
              <Download className="w-3.5 h-3.5" />
            </a>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
