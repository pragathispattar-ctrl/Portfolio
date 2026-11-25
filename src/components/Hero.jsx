import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, FileText, Sparkles, ChevronRight, BarChart3, ShieldCheck, Database, Compass, Atom, Bot } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const { personal } = portfolioData;
  const roles = personal.roles; // ["Business Analyst", "Program & Operations Manager", "Data Analyst", "Product Owner"]

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 35 : 75;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < currentRole.length) {
          setDisplayedText(currentRole.substring(0, displayedText.length + 1));
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 2200);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(currentRole.substring(0, displayedText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentRoleIndex, roles]);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-grid-pattern transition-colors duration-300"
    >
      {/* Ambient Radial Lights */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 dark:bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 dark:bg-electric-violet/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Introduction & CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 dark:bg-cyan-950/50 border border-cyan-200 dark:border-cyan-400/30 text-cyan-700 dark:text-cyan-300 text-xs font-mono uppercase tracking-wider mb-5 shadow-sm shadow-cyan-500/10">
              <span className="w-2 h-2 rounded-full bg-cyan-500 dark:bg-cyan-400 animate-ping" />
              <span>Business Analysis • Program & Ops • Product Owner</span>
            </div>

            {/* Intro & Name */}
            <h2 className="text-slate-500 dark:text-slate-400 text-lg sm:text-xl font-medium tracking-wide mb-2">
              {personal.heroIntro}
            </h2>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
              <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-600 dark:from-white dark:via-slate-100 dark:to-slate-400 bg-clip-text text-transparent">
                {personal.name}
              </span>
            </h1>

            {/* Typewriter Role Header with FIXED "Aspiring " */}
            <div className="h-14 sm:h-16 flex items-center flex-wrap gap-2.5 mb-5">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-slate-800 dark:text-slate-200">
                Aspiring
              </span>
              <div className="inline-flex items-center">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold bg-gradient-to-r from-cyan-600 via-sky-500 to-purple-600 dark:from-cyan-400 dark:via-sky-300 dark:to-purple-400 bg-clip-text text-transparent">
                  {displayedText}
                </span>
                <span className="inline-block w-0.5 h-7 sm:h-9 bg-cyan-500 dark:bg-cyan-400 ml-1.5 animate-pulse" />
              </div>
            </div>

            {/* Highlighted Tech Mindset & AI Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-400/30 text-purple-700 dark:text-purple-300 text-xs font-mono mb-6">
              <Atom className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              <span>Biotech Quantitative Foundation × Modern Tech Mindset & GenAI</span>
            </div>

            {/* Resume-backed Tagline */}
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mb-8 font-light">
              "{personal.heroTagline}"
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href="#projects"
                onClick={(e) => scrollToSection(e, 'projects')}
                className="group relative inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-black bg-gradient-to-r from-cyan-400 via-cyan-300 to-sky-400 shadow-cyan-glow hover:shadow-cyan-glow-lg transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span>Explore My Work</span>
                <ChevronRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
              </a>

            
            </div>

            {/* Quick Badges / Trust Metric Indicators */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200 dark:border-white/[0.08] w-full max-w-xl">
              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">LOCATION</p>
                <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 mt-0.5">{personal.location}</p>
              </div>
              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">ACADEMIC</p>
                <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 mt-0.5">B.Tech Biotech</p>
              </div>
              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">TOOLKIT</p>
                <p className="text-sm font-semibold text-cyan-600 dark:text-cyan-300 mt-0.5">AI & Six Sigma</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Futuristic Large Portrait Frame & Ambient Data Widgets */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-[330px] sm:max-w-[380px] lg:max-w-[400px] aspect-[4/5] sm:h-[490px] group">
              {/* Outer Glowing Cyber Ring */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-cyan-500/25 via-sky-400/15 to-purple-600/30 blur-2xl opacity-75 group-hover:opacity-100 transition-opacity animate-pulse-slow" />

              {/* Rotating Dashed Orbit Border */}
              <div className="absolute -inset-2 rounded-3xl border border-dashed border-cyan-400/30 dark:border-cyan-400/20 animate-spin pointer-events-none" style={{ animationDuration: '35s' }} />

              {/* Glassmorphism Main Frame */}
              <div className="relative w-full h-full rounded-3xl p-2.5 bg-gradient-to-b from-white/95 via-white/80 to-slate-100/90 dark:from-white/[0.1] dark:via-white/[0.04] dark:to-[#070c18] backdrop-blur-2xl border border-slate-200/90 dark:border-white/[0.15] shadow-2xl overflow-hidden flex flex-col">

                {/* Full-bleed Portrait Stage */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-100 dark:bg-[#080e1c] flex items-center justify-center">

                  {/* Subtle Grid Pattern Behind Fallback */}
                  <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none z-10" />

                  {/* Top Status HUD Badge (Over Photo) */}
                  <div className="absolute top-3.5 left-3.5 z-20 flex items-center gap-2 px-3 py-1 rounded-full bg-white/85 dark:bg-black/60 backdrop-blur-md border border-slate-200/80 dark:border-white/10 text-[11px] font-mono font-semibold text-slate-800 dark:text-slate-200 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>TECH MINDSET</span>
                  </div>

                  {/* Top Right Tag (Over Photo) */}
                  <div className="absolute top-3.5 right-3.5 z-20 px-2.5 py-1 rounded-full bg-white/85 dark:bg-black/60 backdrop-blur-md border border-slate-200/80 dark:border-white/10 text-[10px] font-mono text-cyan-700 dark:text-cyan-300 font-semibold shadow-sm">
                    P. PATTAR
                  </div>

                  {/* Actual Photo (Fills Frame) or Fallback SVG */}
                  {personal.avatarImage && !imgError ? (
                    <img
                      src={personal.avatarImage}
                      alt={personal.name}
                      onError={() => setImgError(true)}
                      className="w-full h-full object-cover object-top filter brightness-[1.02] contrast-[1.02] group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  ) : (
                    /* Large High-Tech Executive Portrait Silhouette fallback */
                    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-slate-100 via-white to-slate-200 dark:from-slate-900 dark:via-[#0c1428] dark:to-[#040814] relative p-4">
                      <svg
                        viewBox="0 0 200 240"
                        className="w-full h-full max-h-[82%]"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <defs>
                          <linearGradient id="avatarGradLarge" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#00f0ff" />
                            <stop offset="100%" stopColor="#8b5cf6" />
                          </linearGradient>
                        </defs>
                        <circle cx="100" cy="85" r="48" fill="url(#avatarGradLarge)" fillOpacity="0.85" />
                        <path
                          d="M18 225 C 18 160, 48 145, 100 145 C 152 145, 182 160, 182 225 Z"
                          fill="url(#avatarGradLarge)"
                          fillOpacity="0.75"
                        />
                        <circle cx="100" cy="85" r="45" stroke="#ffffff" strokeWidth="1.5" strokeOpacity="0.4" />
                        <rect x="74" y="75" width="20" height="11" rx="3" stroke="#00f0ff" strokeWidth="2" />
                        <rect x="106" y="75" width="20" height="11" rx="3" stroke="#00f0ff" strokeWidth="2" />
                        <line x1="94" y1="80.5" x2="106" y2="80.5" stroke="#00f0ff" strokeWidth="2" />
                      </svg>
                    </div>
                  )}

                  {/* Bottom Vignette & Executive Identity Bar */}
                  <div className="absolute bottom-0 inset-x-0 z-20 p-4 pt-12 bg-gradient-to-t from-slate-950/95 via-slate-950/60 to-transparent text-white">
                    <div className="flex items-end justify-between">
                      <div>
                        <h3 className="font-display font-bold text-lg sm:text-xl text-white tracking-tight leading-snug drop-shadow-sm">
                          Pragathi Pattar
                        </h3>
                        <p className="text-xs font-mono text-cyan-300 font-medium mt-0.5">
                          BA • Program & Operations • Product
                        </p>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/20 backdrop-blur-md border border-white/20 text-white shrink-0">
                        2025 Grad
                      </span>
                    </div>

                    <div className="mt-2.5 pt-2 border-t border-white/15 flex items-center justify-between text-[10px] font-mono text-slate-300">
                      <span>EXCEL</span>
                      <span className="text-cyan-300 font-bold">SQL • POWER BI</span>
                      <span>GENAI</span>
                    </div>
                  </div>

                </div>

                {/* Floating Abstract Element 1: Top Right */}
                <motion.div
                  animate={{ y: [-4, 4, -4] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -top-3.5 -right-3 sm:-right-4 px-3 py-2 rounded-xl bg-white/95 dark:bg-[#090f1d]/95 backdrop-blur-md border border-slate-200 dark:border-cyan-400/30 shadow-lg shadow-cyan-500/10 flex items-center gap-2 z-30"
                >
                </motion.div>

                {/* Floating Abstract Element 2: Bottom Left */}
                <motion.div
                  animate={{ y: [4, -4, 4] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -bottom-3.5 -left-3 sm:-left-4 px-3 py-2 rounded-xl bg-white/95 dark:bg-[#090f1d]/95 backdrop-blur-md border border-slate-200 dark:border-purple-500/30 shadow-lg shadow-purple-500/10 flex items-center gap-2 z-30"
                >
                  <div className="p-1 rounded-lg bg-purple-500/15 text-purple-600 dark:text-purple-400">
                    <Bot className="w-4 h-4" />
                  </div>
                </motion.div>

              </div>
            </div>
          </motion.div>

        </div>

        {/* Scroll Indicator */}
        <div className="pt-16 sm:pt-20 flex flex-col items-center justify-center">
          <a
            href="#about"
            onClick={(e) => scrollToSection(e, 'about')}
            className="flex flex-col items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors group focus:outline-none"
            aria-label="Scroll to About section"
          >
            <span className="text-xs font-mono tracking-widest uppercase">Scroll to explore</span>
            <div className="w-5 h-8 rounded-full border border-slate-400 dark:border-slate-600 flex items-start justify-center p-1 group-hover:border-cyan-500 dark:group-hover:border-cyan-400 transition-colors">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                className="w-1 h-2 rounded-full bg-cyan-500 dark:bg-cyan-400"
              />
            </div>
          </a>
        </div>

      </div>
    </section>
  );
}
