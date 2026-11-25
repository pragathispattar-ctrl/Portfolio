import React from 'react';
import { 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip 
} from 'recharts';
import { 
  CheckCircle2, 
  AlertTriangle, 
  ArrowRight, 
  Clock, 
  ShieldAlert, 
  Bot, 
  MessageSquare, 
  Cpu, 
  Sparkles,
  Layers
} from 'lucide-react';

export default function ProjectCardVisual({ project }) {
  // 1. Customer Shopping Behavior: Donut chart & subscriber revenue comparison
  if (project.id === 'customer-shopping-behavior') {
    const pieData = [
      { name: 'Subscribers (45% Rev)', value: 45, color: '#00f0ff' },
      { name: 'Non-Subscribers (55% Rev)', value: 55, color: '#64748b' }
    ];

    return (
      <div className="w-full h-48 rounded-xl bg-slate-100/90 dark:bg-black/50 border border-slate-200 dark:border-white/[0.08] p-3 flex flex-col justify-between overflow-hidden transition-colors">
        <div className="flex items-center justify-between text-[11px] font-mono text-cyan-700 dark:text-cyan-400 border-b border-slate-200 dark:border-white/[0.06] pb-1.5 font-semibold">
          <span>COHORT REVENUE SPLIT</span>
          <span className="text-slate-500 dark:text-slate-400">SNOWFLAKE SQL</span>
        </div>

        <div className="grid grid-cols-12 items-center gap-2 h-28">
          <div className="col-span-6 h-full relative flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={28}
                  outerRadius={44}
                  paddingAngle={4}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="text-[10px] font-mono text-cyan-700 dark:text-cyan-300 font-bold">45%</span>
            </div>
          </div>

          <div className="col-span-6 flex flex-col justify-center gap-2 text-xs">
            <div className="p-1.5 rounded-lg bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-400/20">
              <p className="text-[10px] font-mono text-slate-500 dark:text-slate-400 font-medium">SUBSCRIBER SPEND</p>
              <p className="text-xs font-bold text-cyan-800 dark:text-cyan-300">+68% Higher</p>
            </div>
            <div className="p-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/[0.06]">
              <p className="text-[10px] font-mono text-slate-500 dark:text-slate-400 font-medium">LOYAL BASE</p>
              <p className="text-xs font-bold text-slate-800 dark:text-slate-200">15% Retention</p>
            </div>
          </div>
        </div>

        <div className="text-[10px] font-mono text-slate-500 dark:text-slate-400 truncate">
          Live Power BI Automated Workflow
        </div>
      </div>
    );
  }

  // 2. Cafe Sales Analysis: Bar Chart showing Feb-Jun growth and morning rush
  if (project.id === 'cafe-sales-analysis') {
    const barData = [
      { month: 'Feb', rev: 52 },
      { month: 'Mar', rev: 76 },
      { month: 'Apr', rev: 95 },
      { month: 'May', rev: 108 },
      { month: 'Jun', rev: 113 }
    ];

    return (
      <div className="w-full h-48 rounded-xl bg-slate-100/90 dark:bg-black/50 border border-slate-200 dark:border-white/[0.08] p-3 flex flex-col justify-between overflow-hidden transition-colors">
        <div className="flex items-center justify-between text-[11px] font-mono text-cyan-700 dark:text-cyan-400 border-b border-slate-200 dark:border-white/[0.06] pb-1.5 font-semibold">
          <span>SALES ACCELERATION (FEB–JUN)</span>
          <span className="text-emerald-600 dark:text-emerald-400 font-bold">+118% GROWTH</span>
        </div>

        <div className="h-28 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={barData} margin={{ top: 8, right: 8, left: -25, bottom: 0 }}>
              <XAxis dataKey="month" stroke="#64748b" fontSize={10} tickLine={false} />
              <YAxis stroke="#64748b" fontSize={9} tickLine={false} axisLine={false} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#0b1329', borderColor: 'rgba(0,240,255,0.3)', borderRadius: '8px', fontSize: '11px', color: '#ffffff' }}
                itemStyle={{ color: '#00f0ff' }}
                formatter={(val) => [`$${val}K`, 'Revenue']}
              />
              <Bar dataKey="rev" fill="#0284c7" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 dark:text-slate-400">
          <span>8-10 AM PEAK: <strong className="text-cyan-700 dark:text-cyan-300 font-bold">$256K</strong></span>
          <span>WHOLE BEAN TOP SKU</span>
        </div>
      </div>
    );
  }

  // 3. TechNova: Project Timeline with Payroll Trial & Cutover risk highlighted
  if (project.id === 'technova-hr-lms') {
    const stages = project.timelineStages || [];

    return (
      <div className="w-full h-48 rounded-xl bg-slate-100/90 dark:bg-black/50 border border-slate-200 dark:border-white/[0.08] p-3 flex flex-col justify-between overflow-hidden transition-colors">
        <div className="flex items-center justify-between text-[11px] font-mono text-cyan-700 dark:text-cyan-400 border-b border-slate-200 dark:border-white/[0.06] pb-1.5 font-semibold">
          <span>DEPLOYMENT TIMELINE & RISK GATES</span>
          <span className="text-purple-600 dark:text-purple-400 font-bold">6 STAGES</span>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-6 gap-1.5 my-auto">
          {stages.map((stg, i) => (
            <div
              key={i}
              className={`p-2 rounded-lg flex flex-col items-center justify-center text-center transition-all ${
                stg.highlighted
                  ? 'bg-purple-100 dark:bg-purple-950/60 border border-purple-300 dark:border-purple-400/40 text-purple-900 dark:text-purple-200 shadow-sm'
                  : 'bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.06] text-slate-700 dark:text-slate-300'
              }`}
            >
              <span className={`text-[10px] font-mono uppercase font-bold ${stg.highlighted ? 'text-purple-700 dark:text-purple-300' : 'text-slate-600 dark:text-slate-400'}`}>
                {stg.stage}
              </span>
              {stg.highlighted && (
                <span className="text-[8px] font-mono text-cyan-700 dark:text-cyan-300 mt-1 uppercase font-semibold">
                  Risk Gate
                </span>
              )}
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 dark:text-slate-400 pt-1 border-t border-slate-200 dark:border-white/[0.06]">
          <span className="text-purple-700 dark:text-purple-300 flex items-center gap-1 font-semibold">
            <AlertTriangle className="w-3 h-3 text-purple-600 dark:text-purple-400" />
            2-Wk Payroll Trial Executed
          </span>
          <span>100% Deliverable Audit</span>
        </div>
      </div>
    );
  }

  // 4. SpendSmart: Feature Acceptance & Scope Creep Controls Dashboard
  if (project.id === 'spendsmart-expense-app') {
    return (
      <div className="w-full h-48 rounded-xl bg-slate-100/90 dark:bg-black/50 border border-slate-200 dark:border-white/[0.08] p-3 flex flex-col justify-between overflow-hidden transition-colors">
        <div className="flex items-center justify-between text-[11px] font-mono text-cyan-700 dark:text-cyan-400 border-b border-slate-200 dark:border-white/[0.06] pb-1.5 font-semibold">
          <span>QUALITY ASSURANCE & SCOPE CONTROL</span>
          <span className="text-emerald-600 dark:text-emerald-400 font-bold">16 / 16 PASSED</span>
        </div>

        <div className="grid grid-cols-2 gap-2 my-auto">
          <div className="p-2.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-400/20 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 font-medium">FEATURE CRITERIA</span>
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <p className="text-base font-bold text-slate-900 dark:text-white mt-1">16 Criteria</p>
            <p className="text-[9px] font-mono text-emerald-700 dark:text-emerald-300 font-medium">Audited before sign-off</p>
          </div>

          <div className="p-2.5 rounded-lg bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-400/20 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 font-medium">SCOPE CREEP RISK</span>
              <ShieldAlert className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
            </div>
            <p className="text-base font-bold text-slate-900 dark:text-white mt-1">5 Risks Tracked</p>
            <p className="text-[9px] font-mono text-amber-700 dark:text-amber-300 font-medium">Change control rules</p>
          </div>
        </div>

        <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 dark:text-slate-400 pt-1 border-t border-slate-200 dark:border-white/[0.06]">
          <span>Agile/Scrum Framework</span>
          <span className="text-cyan-700 dark:text-cyan-300 font-semibold">Issue Lifecycle QA</span>
        </div>
      </div>
    );
  }

  // 5. ShopEase: AI Conversation Flow & Vendor Redundancy Node Map
  if (project.id === 'shopease-ai-chatbot') {
    return (
      <div className="w-full h-48 rounded-xl bg-slate-100/90 dark:bg-black/50 border border-slate-200 dark:border-white/[0.08] p-3 flex flex-col justify-between overflow-hidden transition-colors">
        <div className="flex items-center justify-between text-[11px] font-mono text-cyan-700 dark:text-cyan-400 border-b border-slate-200 dark:border-white/[0.06] pb-1.5 font-semibold">
          <span>CONVERSATION STATE MACHINE</span>
          <span className="text-cyan-700 dark:text-cyan-300 font-bold">&gt;=90% ACCURACY GATE</span>
        </div>

        <div className="flex items-center justify-between gap-1 my-auto px-1">
          <div className="flex flex-col items-center text-center">
            <div className="w-7 h-7 rounded-lg bg-cyan-50 dark:bg-cyan-500/20 border border-cyan-200 dark:border-cyan-400/40 flex items-center justify-center text-cyan-700 dark:text-cyan-300 mb-1">
              <MessageSquare className="w-3.5 h-3.5" />
            </div>
            <span className="text-[9px] font-mono text-slate-700 dark:text-slate-300 leading-tight">Question</span>
          </div>

          <ArrowRight className="w-3 h-3 text-slate-400 dark:text-slate-600 shrink-0" />

          <div className="flex flex-col items-center text-center">
            <div className="w-7 h-7 rounded-lg bg-purple-50 dark:bg-purple-500/20 border border-purple-200 dark:border-purple-400/40 flex items-center justify-center text-purple-700 dark:text-purple-300 mb-1">
              <Bot className="w-3.5 h-3.5" />
            </div>
            <span className="text-[9px] font-mono text-slate-700 dark:text-slate-300 leading-tight">LLM Resp</span>
          </div>

          <ArrowRight className="w-3 h-3 text-slate-400 dark:text-slate-600 shrink-0" />

          <div className="flex flex-col items-center text-center">
            <div className="w-7 h-7 rounded-lg bg-emerald-50 dark:bg-emerald-500/20 border border-emerald-200 dark:border-emerald-400/40 flex items-center justify-center text-emerald-700 dark:text-emerald-300 mb-1">
              <Sparkles className="w-3.5 h-3.5" />
            </div>
            <span className="text-[9px] font-mono text-slate-700 dark:text-slate-300 leading-tight">Validate</span>
          </div>

          <ArrowRight className="w-3 h-3 text-slate-400 dark:text-slate-600 shrink-0" />

          <div className="flex flex-col items-center text-center">
            <div className="w-7 h-7 rounded-lg bg-amber-50 dark:bg-amber-500/20 border border-amber-200 dark:border-amber-400/40 flex items-center justify-center text-amber-700 dark:text-amber-300 mb-1">
              <Layers className="w-3.5 h-3.5" />
            </div>
            <span className="text-[9px] font-mono text-slate-700 dark:text-slate-300 leading-tight">Escalate</span>
          </div>
        </div>

        <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 dark:text-slate-400 pt-1 border-t border-slate-200 dark:border-white/[0.06]">
          <span className="text-cyan-700 dark:text-cyan-300 font-bold">2 Backup Vendors Contracted</span>
          <span>5 Project Risks Mitigated</span>
        </div>
      </div>
    );
  }

  return null;
}
