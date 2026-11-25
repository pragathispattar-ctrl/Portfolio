import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Cpu } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { getBrandIcon } from './BrandIcons';

const toolVisuals = {
  "Power BI": { color: "#F2C811", tag: "BI & Interactive Dashboards" },
  "Microsoft Excel": { color: "#107C41", tag: "DAX, Modeling & Pivot" },
  "SQL": { color: "#00f0ff", tag: "Snowflake & Advanced Querying" },
  "Python": { color: "#3776AB", tag: "Data Cleaning, EDA & Pandas" },
  "Google Sheets": { color: "#0F9D58", tag: "Collaborative Trackers" },
  "Jira": { color: "#0052CC", tag: "Agile Sprints & Backlog" },
  "Confluence": { color: "#172B4D", tag: "SOPs & Requirements Documentation" },
  "Trello": { color: "#0079BF", tag: "Kanban Boards" },
  "Notion": { color: "#000000", tag: "Knowledge Base & Specs" },
  "Miro": { color: "#FFD02F", tag: "Process Flow & Wireframes" },
  "Monday.com": { color: "#FF3D57", tag: "Workflow & Resource Tracking" },
  "TeamGantt": { color: "#00C389", tag: "Timeline Scheduling" },
  "Claude": { color: "#D97706", tag: "Anthropic Claude 101 Certified" },
  "Gemini": { color: "#38BDF8", tag: "Google Gemini AI Workflows" },
  "OpenAI": { color: "#10A37F", tag: "GPT Automation & Prompting" }
};

export default function FloatingTechIcons() {
  const { toolsEcosystem } = portfolioData;
  const [activeTool, setActiveTool] = useState(null);

  return (
    <div className="relative py-12 my-8 rounded-3xl bg-white/70 dark:bg-[#060a14]/60 border border-slate-200 dark:border-white/[0.08] backdrop-blur-xl overflow-hidden shadow-2xl transition-colors duration-300">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Futuristic Orbit Guidelines */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
        <div className="w-[320px] h-[320px] sm:w-[480px] sm:h-[480px] rounded-full border border-cyan-500/30 dark:border-cyan-400/30 border-dashed" />
        <div className="absolute w-[520px] h-[520px] sm:w-[720px] sm:h-[720px] rounded-full border border-purple-500/20 dark:border-purple-400/20" />
      </div>

      {/* Central Title Core */}
      <div className="relative z-10 text-center max-w-xl mx-auto px-4 mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-400/30 text-cyan-700 dark:text-cyan-300 text-xs font-mono uppercase tracking-wider mb-3">
          <Sparkles className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
          <span>Real Brand Tool Ecosystem</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
          Tools That Power My Work
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 font-light">
          Official toolset featuring authentic technology symbols across analytics, agile delivery, and AI automation.
        </p>

        {/* Dynamic Tooltip / Inspect Banner */}
        <div className="h-10 mt-3 flex items-center justify-center">
          {activeTool ? (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-300 dark:border-cyan-400/40 text-cyan-800 dark:text-cyan-200 text-xs font-mono shadow-sm"
            >
              <span className="font-bold">{activeTool.name}</span>
              <span className="text-slate-400">•</span>
              <span className="text-slate-600 dark:text-slate-300">{toolVisuals[activeTool.name]?.tag || activeTool.category}</span>
            </motion.div>
          ) : (
            <span className="text-xs font-mono text-slate-400 dark:text-slate-500">
              [ Tap or hover any tool symbol to inspect role ]
            </span>
          )}
        </div>
      </div>

      {/* Floating Tools Grid with Authentic Icons */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3.5 sm:gap-4">
          {toolsEcosystem.map((tool, index) => {
            const visual = toolVisuals[tool.name] || {
              color: "#00f0ff",
              tag: tool.category
            };

            const floatDuration = 3 + (index % 4) * 0.8;
            const floatDelay = (index * 0.2) % 2;

            return (
              <motion.div
                key={tool.name}
                animate={{
                  y: [-3, 4, -3],
                }}
                transition={{
                  duration: floatDuration,
                  repeat: Infinity,
                  delay: floatDelay,
                  ease: "easeInOut"
                }}
                onMouseEnter={() => setActiveTool(tool)}
                onMouseLeave={() => setActiveTool(null)}
                className="group relative cursor-pointer"
              >
                <div 
                  className="relative p-3.5 sm:p-4 rounded-xl bg-white/80 dark:bg-[#090f1e]/80 border border-slate-200 dark:border-white/[0.08] backdrop-blur-md transition-all duration-300 group-hover:-translate-y-1.5 flex flex-col items-center justify-center text-center shadow-sm dark:shadow-md overflow-hidden"
                  style={{
                    borderColor: activeTool?.name === tool.name ? visual.color : undefined,
                    boxShadow: activeTool?.name === tool.name ? `0 0 20px -3px ${visual.color}40` : undefined
                  }}
                >
                  {/* Subtle top indicator */}
                  <div 
                    className="absolute top-0 inset-x-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ backgroundColor: visual.color }}
                  />

                  {/* Real Authentic Icon Container */}
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-2.5 transition-transform duration-300 group-hover:scale-110 shadow-sm p-1.5 bg-slate-50 dark:bg-white/[0.04] border border-slate-100 dark:border-white/[0.08]">
                    {getBrandIcon(tool.name, "w-7 h-7")}
                  </div>

                  {/* Tool Name */}
                  <span className="text-xs sm:text-sm font-display font-semibold text-slate-800 dark:text-slate-200 group-hover:text-black dark:group-hover:text-white transition-colors">
                    {tool.name}
                  </span>

                  {/* Category Pill */}
                  <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 mt-1 truncate max-w-full">
                    {tool.category}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
