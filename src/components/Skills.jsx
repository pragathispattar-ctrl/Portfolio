import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BarChart2, 
  Code2, 
  Sparkles, 
  Briefcase, 
  GitPullRequest, 
  ShieldCheck, 
  CheckCircle2, 
  Layers,
  LayoutGrid,
  ListFilter,
  ChevronLeft,
  ChevronRight,
  Bot,
  Zap,
  Check,
  ArrowRight,
  Award,
  ShieldAlert,
  CheckCircle,
  GitBranch,
  Columns,
  Target,
  ExternalLink
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import FloatingTechIcons from './FloatingTechIcons';
import { getBrandIcon } from './BrandIcons';

const categoryIcons = {
  "Data Analytics": BarChart2,
  "Languages & Tools": Code2,
  "AI & Automation": Sparkles,
  "Operations & Program Management": Briefcase,
  "Product Ownership & Agile": GitPullRequest,
  "Professional Attributes": ShieldCheck
};

const certIcons = {
  Award: Award,
  ShieldAlert: ShieldAlert,
  CheckCircle: CheckCircle,
  GitBranch: GitBranch,
  Columns: Columns,
  Target: Target,
  Sparkles: Sparkles
};

export default function Skills() {
  const { skillCategories, certifications } = portfolioData;
  const [activeMainTab, setActiveMainTab] = useState('skills'); // 'skills' | 'certifications'
  const [activeSubcatFilter, setActiveSubcatFilter] = useState('subcategories'); // 'subcategories' | 'all'
  const [currentIndex, setCurrentIndex] = useState(2); // Start on AI & Automation (index 2) by default
  const [direction, setDirection] = useState(0);

  const [certIndex, setCertIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const visibleCertCards = windowWidth >= 1024 ? 3 : windowWidth >= 640 ? 2 : 1;
  const maxCertIndex = Math.max(0, certifications.length - visibleCertCards);

  const prevCertSlide = () => {
    setCertIndex((prev) => (prev <= 0 ? maxCertIndex : prev - 1));
  };

  const nextCertSlide = () => {
    setCertIndex((prev) => (prev >= maxCertIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? skillCategories.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === skillCategories.length - 1 ? 0 : prev + 1));
  };

  const jumpToSlide = (idx) => {
    setDirection(idx > currentIndex ? 1 : -1);
    setCurrentIndex(idx);
  };

  const currentCategory = skillCategories[currentIndex];
  const isCurrentAI = currentCategory?.isHighlighted;
  const CurrentIcon = categoryIcons[currentCategory?.title] || Layers;

  // Variants for carousel slide animation
  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 120 : -120,
      opacity: 0,
      scale: 0.96
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring', stiffness: 320, damping: 30 },
        opacity: { duration: 0.25 }
      }
    },
    exit: (dir) => ({
      x: dir > 0 ? -120 : 120,
      opacity: 0,
      scale: 0.96,
      transition: {
        x: { type: 'spring', stiffness: 320, damping: 30 },
        opacity: { duration: 0.2 }
      }
    })
  };

  return (
    <section id="skills" className="py-16 sm:py-20 relative overflow-hidden bg-slate-50 dark:bg-[#040813] transition-colors duration-300">
      {/* Background ambient gradient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-400/30 text-cyan-700 dark:text-cyan-300 text-xs font-mono uppercase tracking-wider mb-4">
            <Layers className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
            <span>Capability Matrix & Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 dark:text-white tracking-tight mb-4">
            Skills & <span className="bg-gradient-to-r from-cyan-600 via-sky-500 to-purple-600 dark:from-cyan-400 dark:to-purple-400 bg-clip-text text-transparent">Certifications</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed">
            A comprehensive spectrum of data analytics, agile workflows, risk management frameworks, and accredited industry certifications.
          </p>
        </div>

        {/* PRIMARY TAB SWITCHER: Skills vs Certifications */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <div className="inline-flex items-center p-1.5 rounded-2xl bg-slate-200/90 dark:bg-white/[0.05] border border-slate-300 dark:border-white/[0.1] shadow-xs">
            <button
              onClick={() => setActiveMainTab('skills')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-mono transition-all duration-200 ${
                activeMainTab === 'skills'
                  ? 'bg-cyan-600 dark:bg-cyan-500 text-white font-bold shadow-md shadow-cyan-500/20'
                  : 'text-slate-700 dark:text-slate-300 hover:text-black dark:hover:text-white'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>Technical Skills & Tools</span>
            </button>

            <button
              onClick={() => setActiveMainTab('certifications')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-mono transition-all duration-200 ${
                activeMainTab === 'certifications'
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold shadow-md shadow-purple-500/20'
                  : 'text-slate-700 dark:text-slate-300 hover:text-black dark:hover:text-white'
              }`}
            >
              <Award className="w-4 h-4 text-amber-300" />
              <span>Industry Certifications ({certifications.length})</span>
            </button>
          </div>
        </div>

        {/* TAB 1: TECHNICAL SKILLS & TOOLS (Floating Ecosystem + Carousel) */}
        {activeMainTab === 'skills' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
          >
            {/* Central Floating Tools Ecosystem with Real Brand Logos */}
            <FloatingTechIcons />

            {/* Section Title & View Mode Toggle */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-16 mb-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
                  <span>Skill Categories & Functional Subcategories</span>
                  <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-cyan-100 dark:bg-cyan-950/60 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-400/30">
                    Interactive Carousel
                  </span>
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Browse each capability category and inspect its functional subcategories and tools.
                </p>
              </div>

              {/* Subcat vs Unified View Mode Toggle */}
              <div className="inline-flex items-center p-1 rounded-xl bg-slate-200/80 dark:bg-white/[0.05] border border-slate-300/80 dark:border-white/[0.1] shrink-0">
                <button
                  onClick={() => setActiveSubcatFilter('subcategories')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                    activeSubcatFilter === 'subcategories'
                      ? 'bg-white dark:bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 font-semibold shadow-sm border border-slate-200 dark:border-cyan-400/40'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  <LayoutGrid className="w-3.5 h-3.5" />
                  <span>Subcategories</span>
                </button>

                <button
                  onClick={() => setActiveSubcatFilter('all')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                    activeSubcatFilter === 'all'
                      ? 'bg-white dark:bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 font-semibold shadow-sm border border-slate-200 dark:border-cyan-400/40'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  <ListFilter className="w-3.5 h-3.5" />
                  <span>All Tools</span>
                </button>
              </div>
            </div>

            {/* Carousel Quick-Jump Category Navigation Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 no-scrollbar">
              {skillCategories.map((cat, idx) => {
                const isSelected = currentIndex === idx;
                const isCatAI = cat.isHighlighted;
                const CatIcon = categoryIcons[cat.title] || Layers;

                return (
                  <button
                    key={cat.title}
                    onClick={() => jumpToSlide(idx)}
                    className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono whitespace-nowrap transition-all duration-200 shrink-0 ${
                      isSelected
                        ? isCatAI
                          ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold shadow-md shadow-purple-500/25 border border-purple-400'
                          : 'bg-cyan-600 dark:bg-cyan-500 text-white font-bold shadow-md shadow-cyan-500/25 border border-cyan-400'
                        : isCatAI
                          ? 'bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-400/30 hover:border-purple-400'
                          : 'bg-white dark:bg-white/[0.04] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/[0.08] hover:border-cyan-400/50 hover:text-cyan-700 dark:hover:text-cyan-200'
                    }`}
                  >
                    <CatIcon className="w-3.5 h-3.5" />
                    <span>{cat.title}</span>
                    {isCatAI && (
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-300 animate-ping" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Carousel Presentation Container */}
            <div className="relative max-w-4xl mx-auto">
              
              {/* Main Carousel Card with AnimatePresence */}
              <div className="min-h-[460px] relative">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className={`p-6 sm:p-10 rounded-3xl glass-card relative flex flex-col justify-between overflow-hidden shadow-2xl transition-all ${
                      isCurrentAI
                        ? 'border-2 border-purple-500/50 dark:border-purple-400/50 bg-gradient-to-b from-purple-50/80 via-white to-white dark:from-purple-950/30 dark:via-[#090f1e] dark:to-[#040813] shadow-purple-500/10 dark:shadow-purple-500/20'
                        : 'border border-slate-200 dark:border-white/[0.1] bg-white/90 dark:bg-[#070b16]/90'
                    }`}
                  >
                    {/* Glowing top line accent */}
                    <div 
                      className={`absolute top-0 left-0 right-0 h-1.5 ${
                        isCurrentAI
                          ? 'bg-gradient-to-r from-purple-500 via-sky-400 to-cyan-400'
                          : 'bg-gradient-to-r from-cyan-500 via-sky-400 to-indigo-500'
                      }`}
                    />

                    <div>
                      {/* Top Bar with Category, Counter & Carousel Arrows */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-white/[0.08] pb-5 mb-6">
                        <div className="flex items-center gap-3.5">
                          <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm ${
                            isCurrentAI
                              ? 'bg-purple-100 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400 border border-purple-300 dark:border-purple-400/40'
                              : 'bg-cyan-50 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-400/30'
                          }`}>
                            <CurrentIcon className="w-6 h-6" />
                          </div>

                          <div>
                            <div className="flex items-center gap-2">
                              <h4 className="text-2xl font-display font-bold text-slate-900 dark:text-white">
                                {currentCategory.title}
                              </h4>
                              {isCurrentAI && (
                                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-purple-100 dark:bg-purple-900/60 text-purple-700 dark:text-purple-300 border border-purple-300 dark:border-purple-400/40 animate-pulse">
                                  TECH & AI CORE
                                </span>
                              )}
                            </div>
                            <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-0.5">
                              {currentCategory.skills.length} Specialized Capabilities • Category {currentIndex + 1} of {skillCategories.length}
                            </p>
                          </div>
                        </div>

                        {/* Next / Prev Navigation Controls */}
                        <div className="flex items-center gap-2 self-end sm:self-auto">
                          <span className="text-xs font-mono text-slate-400 dark:text-slate-500 mr-2">
                            0{currentIndex + 1} / 0{skillCategories.length}
                          </span>
                          <button
                            onClick={prevSlide}
                            aria-label="Previous skill category"
                            className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/[0.05] border border-slate-200 dark:border-white/[0.1] hover:border-cyan-400 hover:bg-slate-200 dark:hover:bg-white/[0.1] text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-300 transition-all focus:outline-none"
                          >
                            <ChevronLeft className="w-4 h-4" />
                          </button>
                          <button
                            onClick={nextSlide}
                            aria-label="Next skill category"
                            className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/[0.05] border border-slate-200 dark:border-white/[0.1] hover:border-cyan-400 hover:bg-slate-200 dark:hover:bg-white/[0.1] text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-300 transition-all focus:outline-none"
                          >
                            <ChevronRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      {/* Category Description */}
                      <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 font-light leading-relaxed mb-6">
                        {currentCategory.description}
                      </p>

                      {/* Subcategories Layout */}
                      {activeSubcatFilter === 'subcategories' && currentCategory.subcategories ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                          {currentCategory.subcategories.map((subcat, sIdx) => (
                            <div 
                              key={sIdx} 
                              className="p-4 rounded-2xl bg-slate-50/80 dark:bg-white/[0.02] border border-slate-200 dark:border-white/[0.06] hover:border-cyan-400/40 transition-colors"
                            >
                              <div className="flex items-center justify-between mb-3">
                                <span className="text-xs font-mono font-bold text-cyan-800 dark:text-cyan-300 uppercase tracking-wider">
                                  {subcat.name}
                                </span>
                                <span className="text-[10px] font-mono text-slate-400">
                                  {subcat.tools.length} Tools
                                </span>
                              </div>

                              <div className="flex flex-wrap gap-2">
                                {subcat.tools.map((tool, tIdx) => {
                                  const brandIcon = getBrandIcon(tool, "w-4 h-4");
                                  return (
                                    <span
                                      key={tIdx}
                                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono bg-white dark:bg-white/[0.05] text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-white/[0.08] hover:border-cyan-400/50 hover:shadow-sm transition-all"
                                    >
                                      {brandIcon ? brandIcon : <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 dark:bg-cyan-400" />}
                                      <span>{tool}</span>
                                    </span>
                                  );
                                })}
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        /* Unified Flat View */
                        <div className="flex flex-wrap gap-2.5 mb-6 p-4 rounded-2xl bg-slate-50/80 dark:bg-white/[0.02] border border-slate-200 dark:border-white/[0.06]">
                          {currentCategory.skills.map((skill, sIdx) => {
                            const brandIcon = getBrandIcon(skill, "w-4 h-4");
                            return (
                              <span
                                key={sIdx}
                                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono bg-white dark:bg-white/[0.05] text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-white/[0.08] hover:border-cyan-400/50 transition-all shadow-2xs"
                              >
                                {brandIcon ? brandIcon : <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 dark:bg-cyan-400" />}
                                <span>{skill}</span>
                              </span>
                            );
                          })}
                        </div>
                      )}
                    </div>

                    {/* Card Footer with Verification Indicator */}
                    <div className="pt-4 border-t border-slate-200 dark:border-white/[0.08] flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400">
                      <span className="flex items-center gap-1.5">
                        <CheckCircle2 className={`w-4 h-4 ${isCurrentAI ? 'text-purple-600 dark:text-purple-400' : 'text-cyan-600 dark:text-cyan-400'}`} />
                        <span>{isCurrentAI ? 'Anthropic Claude 101 Accredited & Spec-Driven' : 'Verified Professional Application'}</span>
                      </span>

                      <button
                        onClick={nextSlide}
                        className="inline-flex items-center gap-1 text-cyan-600 dark:text-cyan-400 hover:underline font-semibold"
                      >
                        <span>Next Category</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Carousel Pagination Dots */}
              <div className="flex items-center justify-center gap-2 mt-6">
                {skillCategories.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => jumpToSlide(idx)}
                    aria-label={`Jump to category ${idx + 1}`}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      currentIndex === idx 
                        ? idx === 2 
                          ? 'w-8 bg-purple-500 dark:bg-purple-400 shadow-sm'
                          : 'w-8 bg-cyan-500 dark:bg-cyan-400 shadow-sm'
                        : 'w-2.5 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400'
                    }`}
                  />
                ))}
              </div>

            </div>
          </motion.div>
        )}

        {/* TAB 2: INDUSTRY CERTIFICATIONS (Integrated from the Skills Section - 3-Card Carousel) */}
        {activeMainTab === 'certifications' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="space-y-6 max-w-6xl mx-auto"
          >
            {/* Certifications Description Banner */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-50 via-white to-cyan-50 dark:from-purple-950/30 dark:via-[#090f1e] dark:to-cyan-950/20 border border-purple-200 dark:border-purple-400/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Award className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  <span className="text-xs font-mono font-bold text-purple-700 dark:text-purple-300 uppercase tracking-wider">
                    Accredited Credentials
                  </span>
                </div>
                <h4 className="text-xl font-display font-bold text-slate-900 dark:text-white">
                  7 Professional Certifications
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                  Rigorous domain verification across agile project delivery, Six Sigma process optimization, business analysis, and AI prompt engineering.
                </p>
              </div>

              {/* Navigation Controls & Counter */}
              <div className="flex items-center gap-3 shrink-0 self-end sm:self-auto">
                <span className="text-xs font-mono text-slate-400 dark:text-slate-500 mr-1">
                  0{certIndex + 1} / 0{certifications.length}
                </span>
                <button
                  onClick={prevCertSlide}
                  aria-label="Previous certification"
                  className="p-2.5 rounded-xl bg-white dark:bg-white/[0.05] border border-slate-200 dark:border-white/[0.1] hover:border-purple-400 hover:bg-slate-100 dark:hover:bg-white/[0.1] text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-300 transition-all shadow-xs"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextCertSlide}
                  aria-label="Next certification"
                  className="p-2.5 rounded-xl bg-white dark:bg-white/[0.05] border border-slate-200 dark:border-white/[0.1] hover:border-purple-400 hover:bg-slate-100 dark:hover:bg-white/[0.1] text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-300 transition-all shadow-xs"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Certifications Carousel Track */}
            <div className="overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-500 ease-out"
                style={{
                  transform: `translateX(-${certIndex * (100 / visibleCertCards)}%)`
                }}
              >
                {certifications.map((cert, index) => {
                  const IconComponent = certIcons[cert.icon] || Award;
                  const isClaude = cert.title.includes('Claude');
                  const isGoogle = cert.title.includes('Google');

                  return (
                    <div 
                      key={index}
                      className="w-full sm:w-1/2 lg:w-1/3 shrink-0 p-2.5"
                    >
                      <div
                        className={`h-full group p-6 rounded-2xl glass-card flex flex-col justify-between border transition-all duration-300 shadow-xs hover:shadow-md relative overflow-hidden bg-white/90 dark:bg-[#070b16]/90 ${
                          isGoogle
                            ? 'border-cyan-300 dark:border-cyan-500/40 hover:border-cyan-400'
                            : isClaude
                              ? 'border-purple-300 dark:border-purple-500/40 hover:border-purple-400'
                              : 'border-slate-200 dark:border-white/[0.08] hover:border-cyan-400/40'
                        }`}
                      >
                        {/* Glowing top line */}
                        <div 
                          className={`absolute top-0 left-0 right-0 h-1 ${
                            isGoogle
                              ? 'bg-gradient-to-r from-cyan-400 to-sky-400'
                              : isClaude
                                ? 'bg-gradient-to-r from-purple-400 to-indigo-400'
                                : 'bg-gradient-to-r from-slate-200 to-cyan-400 dark:from-white/10 dark:to-cyan-400'
                          }`}
                        />

                        <div>
                          <div className="flex items-center justify-between mb-4">
                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform ${
                              isGoogle
                                ? 'bg-cyan-50 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-400/30'
                                : isClaude
                                  ? 'bg-purple-100 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400 border border-purple-200 dark:border-purple-400/30'
                                  : 'bg-slate-100 dark:bg-white/[0.05] text-cyan-600 dark:text-cyan-400 border border-slate-200 dark:border-white/[0.1]'
                            }`}>
                              <IconComponent className="w-5 h-5" />
                            </div>
                            <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-white/[0.04] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/[0.08]">
                              {cert.category}
                            </span>
                          </div>

                          <h4 className="text-lg font-display font-semibold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors leading-snug mb-2">
                            {cert.title}
                          </h4>

                          <p className="text-xs font-mono text-slate-500 dark:text-slate-400">
                            Issued by <span className="font-semibold text-slate-700 dark:text-slate-300">{cert.issuer}</span>
                          </p>
                        </div>

                        <div className="mt-5 pt-3 border-t border-slate-100 dark:border-white/[0.06] flex items-center justify-between gap-2">
                          {cert.link ? (
                            <a
                              href={cert.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-bold bg-cyan-50 dark:bg-cyan-500/15 border border-cyan-200 dark:border-cyan-400/40 text-cyan-800 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-500/25 transition-all shadow-2xs"
                            >
                              <span>Verify Credential</span>
                              <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          ) : (
                            <span className="text-xs font-mono text-cyan-700 dark:text-cyan-400 font-semibold flex items-center gap-1">
                              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                              <span>Verified Curriculum</span>
                            </span>
                          )}

                          <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500 shrink-0">
                            Accredited
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Pagination Dots for Certifications Carousel */}
            <div className="flex items-center justify-center gap-2 mt-5">
              {Array.from({ length: maxCertIndex + 1 }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCertIndex(idx)}
                  aria-label={`Go to certification slide ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    certIndex === idx 
                      ? 'w-7 bg-purple-500 dark:bg-purple-400 shadow-sm' 
                      : 'w-2 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        )}

      </motion.div>
    </section>
  );
}
