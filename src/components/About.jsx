import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Cpu,
  BarChart3,
  Kanban,
  Layers,
  CheckCircle2,
  GraduationCap,
  Target,
  ShieldAlert,
  GitMerge,
  Sparkles,
  Atom,
  Bot,
  Zap,
  Code,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const iconMap = {
  Cpu: Cpu,
  BarChart3: BarChart3,
  Kanban: Kanban,
  Layers: Layers,
  CheckCircle2: CheckCircle2,
};

export default function About() {
  const { personal, aboutHighlights, education } = portfolioData;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const visibleCards = windowWidth >= 1024 ? 3 : windowWidth >= 640 ? 2 : 1;
  const maxIndex = Math.max(0, aboutHighlights.length - visibleCards);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <section id="about" className="py-16 sm:py-20 relative overflow-hidden bg-slate-50 dark:bg-[#040814] transition-colors duration-300">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-40 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

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
            <Sparkles className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
            <span>Executive Profile</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 dark:text-white tracking-tight mb-4">
            About <span className="bg-gradient-to-r from-cyan-600 via-sky-500 to-purple-600 dark:from-cyan-400 dark:to-purple-400 bg-clip-text text-transparent">Pragathi Pattar</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed">
            Bridging analytical rigor, technical curiosity, and operational execution to streamline workflows, eliminate bottlenecks, and scale business performance.
          </p>
        </div>

        {/* Narrative & Bio Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-stretch">

          {/* Main Bio Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 p-8 rounded-2xl glass-panel relative border border-slate-200 dark:border-white/[0.09] flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/[0.08] pb-4 mb-6">
                <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-widest font-semibold">
                  Professional Identity & Trajectory
                </span>
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                  Pune, Maharashtra
                </span>
              </div>

              <div className="space-y-4 text-slate-700 dark:text-slate-300 leading-relaxed text-base sm:text-lg font-light">
                <p>
                  I am an operations-focused, data-driven professional with hands-on experience coordinating cross-functional teams, tracking operational performance through dashboards, and driving projects from planning to execution on the ground.
                </p>
                <p>
                  Having built a solid base in problem solving, process improvement, and risk management through an operations internship at an automation company (<span className="text-slate-900 dark:text-white font-medium">Indusnex LLP</span>) and three self-directed Agile projects, I specialize in translating complex operational data into decisive business actions.
                </p>
                <p>
                  Comfortable leveraging <span className="text-cyan-600 dark:text-cyan-300 font-medium">Excel, Power BI, and SQL</span> to turn raw logs into clear dashboards and product insights, I am focused on bridging technical and business teams to drive outcomes as an aspiring Business Analyst, Program / Operations Manager, Data Analyst, or Product Owner.
                </p>
              </div>
            </div>

            {/* Quick Core Competencies Tags */}
            <div className="pt-6 mt-6 border-t border-slate-200 dark:border-white/[0.08] flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-md text-xs font-mono bg-cyan-50 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-400/20 font-medium">
                Operations Coordination
              </span>
              <span className="px-3 py-1 rounded-md text-xs font-mono bg-purple-50 dark:bg-purple-500/10 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-400/20 font-medium">
                Risk Management
              </span>
              <span className="px-3 py-1 rounded-md text-xs font-mono bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-400/20 font-medium">
                UAT & QA Testing
              </span>
              <span className="px-3 py-1 rounded-md text-xs font-mono bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-400/20 font-medium">
                Power BI & DAX
              </span>
              <span className="px-3 py-1 rounded-md text-xs font-mono bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-400/20 font-medium">
                Product Ownership & Agile
              </span>
            </div>
          </motion.div>

          {/* Academic Foundation Mini Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-4 p-8 rounded-2xl glass-panel relative border border-slate-200 dark:border-white/[0.09] flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-cyan-50 dark:bg-cyan-500/15 border border-cyan-200 dark:border-cyan-400/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400 mb-6">
                <GraduationCap className="w-6 h-6" />
              </div>

              <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-widest block mb-1 font-semibold">
                Academic Foundation
              </span>
              <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-2">
                {education.degree}
              </h3>
              <p className="text-sm text-slate-700 dark:text-slate-300 font-medium mb-1">
                {education.institution}
              </p>
              <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mb-6">
                {education.period}
              </p>

              <div className="space-y-2.5">
                <p className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Quantitative Grounding:
                </p>
                {education.foundation.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-white/[0.08]">
              <span className="text-xs text-slate-500 dark:text-slate-400">
                Rigorous scientific analytical training translated directly into technology systems.
              </span>
            </div>
          </motion.div>

        </div>

        {/* Highlighting the Tech & AI Mindset: Spotlight Callout Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-purple-50 via-white to-cyan-50 dark:from-purple-950/40 dark:via-[#090f1d] dark:to-cyan-950/30 border border-purple-200 dark:border-purple-400/30 shadow-lg dark:shadow-purple-500/10 mb-16 relative overflow-hidden"
        >
          {/* Glowing top line */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-purple-500 via-sky-400 to-cyan-400" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 text-xs font-mono uppercase tracking-wider mb-3">
                <Atom className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                <span>Distinctive Advantage</span>
              </div>
              <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-2">
                Biotechnology Degree × Modern Technical & AI Mindset
              </h3>
              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-light">
                {personal.techMindsetBio}
              </p>
            </div>

            <div className="md:col-span-4 grid grid-cols-2 gap-3">


              <div className="p-3.5 rounded-xl bg-white/80 dark:bg-white/[0.04] border border-cyan-200 dark:border-cyan-400/20 text-center">
                <Zap className="w-5 h-5 text-cyan-600 dark:text-cyan-400 mx-auto mb-1.5" />
                <p className="text-xs font-bold text-slate-900 dark:text-white">Spec-Driven Dev</p>
                <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">Prompt & BMAD</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Highlight Cards Carousel (Max 3 visible on desktop, responsive, with navigation) */}
        <div className="mt-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 dark:text-white">
                  Core Functional Highlights
                </h3>
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-cyan-100 dark:bg-cyan-950/60 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-400/30">
                  Interactive Carousel
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Explore key pillars across operations, analytics, Agile, business intelligence, and process improvement.
              </p>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center gap-2 self-end sm:self-auto">
              <span className="text-xs font-mono text-slate-400 dark:text-slate-500 mr-2">
                {String(currentIndex + 1).padStart(2, '0')} / {String(aboutHighlights.length).padStart(2, '0')}
              </span>
              <button
                onClick={handlePrev}
                aria-label="Previous highlight card"
                className="p-2.5 rounded-xl bg-white dark:bg-white/[0.05] border border-slate-200 dark:border-white/[0.1] hover:border-cyan-400/50 hover:bg-slate-100 dark:hover:bg-white/[0.1] text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-300 transition-all shadow-xs focus:outline-none"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next highlight card"
                className="p-2.5 rounded-xl bg-white dark:bg-white/[0.05] border border-slate-200 dark:border-white/[0.1] hover:border-cyan-400/50 hover:bg-slate-100 dark:hover:bg-white/[0.1] text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-300 transition-all shadow-xs focus:outline-none"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Carousel Track Container */}
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`
              }}
            >
              {aboutHighlights.map((highlight, index) => {
                const IconComponent = iconMap[highlight.icon] || BarChart3;
                return (
                  <div
                    key={highlight.id}
                    className="w-full sm:w-1/2 lg:w-1/3 shrink-0 p-2.5"
                  >
                    <div className="h-full group p-6 rounded-2xl glass-card flex flex-col justify-between border border-slate-200 dark:border-white/[0.09] hover:border-cyan-400/50 transition-all duration-300 shadow-xs hover:shadow-md relative overflow-hidden bg-white/90 dark:bg-[#070b16]/90">
                      {/* Top line accent */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />

                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <div className="w-10 h-10 rounded-xl bg-cyan-50 dark:bg-white/[0.05] border border-cyan-200 dark:border-white/[0.1] group-hover:border-cyan-400/50 flex items-center justify-center text-cyan-600 dark:text-cyan-400 transition-colors">
                            <IconComponent className="w-5 h-5" />
                          </div>
                          <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-white/[0.04] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/[0.08]">
                            {highlight.badge}
                          </span>
                        </div>

                        <h4 className="text-lg font-display font-semibold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors mb-2">
                          {highlight.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                          {highlight.description}
                        </p>
                      </div>

                      <div className="mt-5 pt-3 border-t border-slate-100 dark:border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate-400 dark:text-slate-500">
                        <span>Pillar 0{index + 1}</span>
                        <span className="text-cyan-600 dark:text-cyan-400 font-medium group-hover:translate-x-1 transition-transform inline-flex items-center gap-0.5">
                          View details →
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2 mt-5">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${currentIndex === idx
                  ? 'w-7 bg-cyan-500 dark:bg-cyan-400 shadow-sm'
                  : 'w-2 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400'
                  }`}
              />
            ))}
          </div>
        </div>

      </motion.div>
    </section>
  );
}
