import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  ArrowUpRight,
  Sun,
  Moon,
  FileText,
  ChevronDown,
  Download,
  Eye,
  ExternalLink
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const resumeRef = useRef(null);

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  const previewUrl = (portfolioData.personal.resumeDriveUrl && !portfolioData.personal.resumeDriveUrl.includes('1Bxxxx'))
    ? portfolioData.personal.resumeDriveUrl
    : (portfolioData.personal.resumePdfUrl || '/resume.pdf');

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Close resume dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (resumeRef.current && !resumeRef.current.contains(e.target)) {
        setResumeOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl && sectionEl.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? 'bg-white/90 dark:bg-[#060a12]/85 backdrop-blur-md border-b border-slate-200 dark:border-white/[0.08] shadow-lg shadow-black/5 dark:shadow-black/40 py-3.5'
        : 'bg-transparent py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Personal Brand */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-electric-violet/20 border border-cyan-400/40 dark:border-cyan-400/30 group-hover:border-cyan-400 transition-colors shadow-sm shadow-cyan-500/20">
              <span className="font-display font-bold text-lg text-cyan-500 dark:text-cyan-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                P
              </span>
              <div className="absolute -inset-0.5 rounded-xl bg-cyan-400/20 blur opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            <div className="flex flex-col">
              <span className="font-display font-semibold text-base sm:text-lg text-slate-900 dark:text-white tracking-tight flex items-center gap-1.5">
                {portfolioData.personal.name}
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 dark:bg-cyan-400 animate-pulse" />
              </span>
              <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-widest hidden sm:inline-block">
                BA • Program & Ops • Data • Product
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-1.5 p-1.5 rounded-full bg-slate-100/80 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/[0.06] backdrop-blur-sm">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs lg:text-sm font-medium transition-all duration-200 ${isActive
                    ? 'text-cyan-600 dark:text-cyan-300 font-semibold'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-white/[0.04]'
                    }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 rounded-full bg-cyan-500/10 dark:bg-cyan-500/15 border border-cyan-400/50 dark:border-cyan-400/40 shadow-sm shadow-cyan-500/10 dark:shadow-cyan-500/20"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                </a>
              );
            })}

            {/* Resume Dropdown Trigger */}
            <div className="relative" ref={resumeRef}>
              <button
                onClick={() => setResumeOpen(!resumeOpen)}
                className={`relative flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs lg:text-sm font-medium transition-all duration-200 ${resumeOpen
                  ? 'bg-cyan-50 dark:bg-cyan-500/15 text-cyan-700 dark:text-cyan-300 font-semibold border border-cyan-300 dark:border-cyan-400/40 shadow-xs'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-white/[0.04]'
                  }`}
                aria-expanded={resumeOpen}
                aria-label="Resume options"
              >
                <FileText className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                <span>Resume</span>
                <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${resumeOpen ? 'rotate-180 text-cyan-500' : ''}`} />
              </button>

              {/* Dropdown Card */}
              <AnimatePresence>
                {resumeOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full mt-2 right-0 w-64 p-2 rounded-2xl bg-white/95 dark:bg-[#070b16]/95 border border-slate-200 dark:border-white/[0.1] shadow-2xl backdrop-blur-xl z-50 text-left"
                  >
                    <div className="px-3 py-2 border-b border-slate-100 dark:border-white/[0.06] mb-1">
                      <p className="text-xs font-display font-bold text-slate-900 dark:text-white">Curriculum Vitae</p>
                      <p className="text-[10px] font-mono text-slate-500 dark:text-slate-400">Google Drive & PDF Access</p>
                    </div>

                    {/* Preview in New Tab */}
                    <a
                      href={previewUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setResumeOpen(false)}
                      className="flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-mono font-medium text-slate-700 dark:text-slate-200 hover:bg-cyan-50 dark:hover:bg-cyan-500/15 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors group"
                    >
                      <div className="w-7 h-7 rounded-lg bg-cyan-100 dark:bg-cyan-500/20 flex items-center justify-center text-cyan-600 dark:text-cyan-400 shrink-0 group-hover:scale-105 transition-transform">
                        <Eye className="w-3.5 h-3.5" />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-semibold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 flex items-center gap-1">
                          Preview in New Tab
                          <ExternalLink className="w-3 h-3 opacity-60" />
                        </span>
                        <span className="text-[10px] text-slate-500 dark:text-slate-400">Open Google Drive / View</span>
                      </div>
                    </a>

                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Right Action CTA & Theme Toggle */}
          <div className="hidden md:flex items-center gap-2.5">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="p-2 rounded-xl bg-slate-100 dark:bg-white/[0.05] border border-slate-200 dark:border-white/[0.1] text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-300 hover:border-cyan-400/40 transition-all"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="relative inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-cyan-700 dark:text-cyan-300 bg-cyan-50 dark:bg-cyan-950/60 border border-cyan-200 dark:border-cyan-400/30 hover:border-cyan-400 hover:bg-cyan-100 dark:hover:bg-cyan-900/50 hover:shadow-cyan-glow transition-all duration-200"
            >
              <span>Get In Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
            </a>
          </div>

          {/* Mobile Right Bar: Theme Toggle & Hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="p-2 rounded-lg bg-slate-100 dark:bg-white/[0.05] border border-slate-200 dark:border-white/[0.1] text-slate-600 dark:text-slate-300"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08] text-slate-700 dark:text-slate-300 hover:text-black dark:hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-cyan-500 dark:text-cyan-400" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-white/95 dark:bg-[#060a12]/95 border-b border-slate-200 dark:border-white/[0.1] backdrop-blur-xl px-4 pt-3 pb-6 shadow-2xl"
          >
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${isActive
                      ? 'bg-cyan-50 dark:bg-cyan-500/15 text-cyan-600 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-400/30 font-semibold'
                      : 'text-slate-700 dark:text-slate-300 hover:text-black dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.04]'
                      }`}
                  >
                    <span>{item.name}</span>
                    {isActive && <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 dark:bg-cyan-400" />}
                  </a>
                );
              })}

              {/* Dedicated Mobile Resume Card with Preview & Download */}
              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08] my-2">
                <div className="flex items-center justify-between mb-2.5">
                  <span className="text-xs font-mono font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                    <span>Curriculum Vitae</span>
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">Drive / PDF</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={previewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-mono font-semibold bg-white dark:bg-white/[0.08] border border-slate-200 dark:border-white/[0.1] text-slate-800 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-300 shadow-2xs"
                  >
                    <Eye className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                    <span>Preview</span>
                  </a>
                  <a
                    href="/resume.pdf"
                    download="Pragathi_Pattar_Resume.pdf"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-mono font-semibold bg-cyan-600 text-white dark:bg-cyan-500 shadow-sm shadow-cyan-500/20"
                  >
                    <Download className="w-3.5 h-3.5 text-white" />
                    <span>Download</span>
                  </a>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-200 dark:border-white/[0.06] flex flex-col gap-2">
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="w-full text-center py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-cyan-glow"
                >
                  Contact Pragathi
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
