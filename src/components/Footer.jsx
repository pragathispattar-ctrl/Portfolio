import React from 'react';
import { Mail, Linkedin, ArrowUp, Heart } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { GithubIcon, NotionIcon } from './BrandIcons';

export default function Footer() {
  const { personal, contact } = portfolioData;
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-slate-100 dark:bg-[#02050d] border-t border-slate-200 dark:border-white/[0.08] overflow-hidden pt-12 pb-8 transition-colors duration-300">
      {/* Subtle animated gradient divider */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 dark:via-cyan-400/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-200 dark:border-white/[0.06]">
          
          {/* Left Brand */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400 font-display font-bold text-sm">
              P
            </div>
            <div>
              <p className="text-slate-900 dark:text-white font-display font-semibold text-base">
                {personal.name}
              </p>
              <p className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                Aspiring Business Analyst • Program Management & Operations • Data Analyst • Product Owner
              </p>
            </div>
          </div>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={`mailto:${contact.email}`}
              aria-label="Send Email"
              className="p-2.5 rounded-xl bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08] text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-400/40 transition-colors shadow-2xs"
            >
              <Mail className="w-4 h-4" />
            </a>

            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-xl bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08] text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-400/40 transition-colors shadow-2xs"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            {personal.github && (
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-xl bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08] text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-400/40 transition-colors shadow-2xs"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            )}

            {personal.notionPortfolio && (
              <a
                href={personal.notionPortfolio}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Notion Portfolio"
                className="p-2.5 rounded-xl bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08] text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-400/40 transition-colors shadow-2xs"
              >
                <NotionIcon className="w-4 h-4" />
              </a>
            )}

            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="p-2.5 rounded-xl bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08] text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-400/40 transition-colors ml-2 shadow-2xs"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Dynamic Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400 gap-2 text-center sm:text-left">
          <p>
            © {currentYear} {personal.name}. All rights reserved.
          </p>
          <p className="text-[11px]">
            Engineered with React, Vite & Tailwind CSS • Designed for Operations & Analytics Excellence
          </p>
        </div>
      </div>
    </footer>
  );
}
