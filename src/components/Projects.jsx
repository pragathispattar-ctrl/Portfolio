import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FolderKanban, 
  ChevronLeft, 
  ChevronRight, 
  ExternalLink, 
  Sparkles, 
  ArrowUpRight,
  Eye
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import ProjectCardVisual from './ProjectCardVisual';
import ProjectCaseStudyModal from './ProjectCaseStudyModal';
import { GithubIcon, NotionIcon, getBrandIcon } from './BrandIcons';

export default function Projects() {
  const { projects } = portfolioData;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const visibleCards = windowWidth >= 1024 ? 3 : windowWidth >= 640 ? 2 : 1;
  const maxIndex = Math.max(0, projects.length - visibleCards);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <section id="projects" className="py-16 sm:py-20 relative overflow-hidden bg-slate-50 dark:bg-[#030712] transition-colors duration-300">
      {/* Background radial glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-400/30 text-cyan-700 dark:text-cyan-300 text-xs font-mono uppercase tracking-wider mb-4">
              <FolderKanban className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
              <span>Demonstrated Business Value</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 dark:text-white tracking-tight mb-3">
              Projects & <span className="bg-gradient-to-r from-cyan-600 via-sky-500 to-purple-600 dark:from-cyan-400 dark:via-sky-300 dark:to-purple-400 bg-clip-text text-transparent">Case Studies</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed font-light">
              Explore interactive analytics pipelines, Agile quality gates, and risk management initiatives. Click any project to open its deep-dive case study.
            </p>
          </div>

          {/* Carousel Arrows & Counter */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-slate-400 dark:text-slate-500 mr-1">
              0{currentIndex + 1} / 0{projects.length}
            </span>
            <button
              onClick={prevSlide}
              aria-label="Previous project"
              className="p-3 rounded-xl bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08] hover:border-cyan-400/50 hover:bg-slate-100 dark:hover:bg-white/[0.08] text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-300 transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400 shadow-xs"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next project"
              className="p-3 rounded-xl bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08] hover:border-cyan-400/50 hover:bg-slate-100 dark:hover:bg-white/[0.08] text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-300 transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400 shadow-xs"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Slider Track Container */}
        <div className="overflow-hidden rounded-2xl">
          <div 
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`
            }}
          >
            {projects.map((project, idx) => (
              <div 
                key={project.id}
                className="w-full sm:w-1/2 lg:w-1/3 shrink-0 p-2.5"
              >
                <div
                  className="h-full group rounded-2xl glass-card p-5 sm:p-6 flex flex-col justify-between border border-slate-200 dark:border-white/[0.09] hover:border-cyan-400/50 relative overflow-hidden transition-all duration-300 shadow-xs hover:shadow-lg bg-white/95 dark:bg-[#070b16]/95"
                >
                  {/* Subtle top indicator on hover */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div>
                    {/* Header Tag and Category */}
                    <div className="flex items-center justify-between mb-2.5">
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-cyan-50 dark:bg-cyan-950/60 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-400/30 font-medium">
                        {project.badge}
                      </span>
                      <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                        {project.category.split('|')[0].trim()}
                      </span>
                    </div>

                    {/* Visual Preview / Mini Chart */}
                    <div 
                      onClick={() => setSelectedProject(project)}
                      className="mb-4 rounded-xl overflow-hidden cursor-pointer hover:opacity-95 transition-opacity"
                    >
                      <ProjectCardVisual project={project} />
                    </div>

                    {/* Project Title */}
                    <h3 
                      onClick={() => setSelectedProject(project)}
                      className="text-lg sm:text-xl font-display font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors mb-1.5 leading-snug cursor-pointer line-clamp-1"
                    >
                      {project.title}
                    </h3>

                    {/* Brief Intro */}
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-light mb-4 line-clamp-2">
                      {project.shortDescription}
                    </p>

                    {/* Tools Chips */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.tools.slice(0, 4).map((tool, tIdx) => {
                        const brandIcon = getBrandIcon(tool, "w-3 h-3");
                        return (
                          <span
                            key={tIdx}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-100 dark:bg-white/[0.04] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/[0.06]"
                          >
                            {brandIcon ? brandIcon : <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />}
                            <span>{tool}</span>
                          </span>
                        );
                      })}
                      {project.tools.length > 4 && (
                        <span className="text-[10px] font-mono text-slate-400 self-center">
                          +{project.tools.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Actions Row: GitHub / Notion Link + Inspect Button */}
                  <div className="pt-3.5 border-t border-slate-100 dark:border-white/[0.08] flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-mono font-medium bg-slate-100 hover:bg-slate-200 dark:bg-white/[0.05] dark:hover:bg-white/[0.1] text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-white/[0.1] hover:border-cyan-400/50 transition-colors"
                          title="Open GitHub Repository"
                        >
                          <GithubIcon className="w-3.5 h-3.5" />
                          <span>Code</span>
                          <ExternalLink className="w-2.5 h-2.5 text-slate-400" />
                        </a>
                      )}

                      {project.notionUrl && (
                        <a
                          href={project.notionUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-mono font-medium bg-slate-100 hover:bg-slate-200 dark:bg-white/[0.05] dark:hover:bg-white/[0.1] text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-white/[0.1] hover:border-cyan-400/50 transition-colors"
                          title="Open Notion Documentation"
                        >
                          <NotionIcon className="w-3.5 h-3.5" />
                          <span>Notion</span>
                          <ExternalLink className="w-2.5 h-2.5 text-slate-400" />
                        </a>
                      )}
                    </div>

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-mono font-semibold bg-cyan-50 hover:bg-cyan-100 dark:bg-cyan-500/10 dark:hover:bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-400/30 transition-all ml-auto group-hover:border-cyan-400/60"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Inspect</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === idx 
                  ? 'w-7 bg-cyan-500 dark:bg-cyan-400 shadow-sm' 
                  : 'w-2 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>

      </motion.div>

      {/* Case Study Deep-Dive Modal */}
      <ProjectCaseStudyModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
