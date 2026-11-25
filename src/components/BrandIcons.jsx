import React from 'react';

export const PythonIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M63.6 5.8c-28.7 0-26.9 12.4-26.9 12.4l.1 12.9h27.4v3.9H26.3S6.8 32.8 6.8 61.6c0 28.7 17.1 27.7 17.1 27.7h10.2v-14.3s-.6-17.1 16.8-17.1h27.2v-26s.8-26.1-14.5-26.1zm-15 8.1c2.6 0 4.7 2.1 4.7 4.7s-2.1 4.7-4.7 4.7-4.7-2.1-4.7-4.7 2.1-4.7 4.7-4.7z" fill="#387EB8"/>
    <path d="M64.4 122.2c28.7 0 26.9-12.4 26.9-12.4l-.1-12.9H63.8v-3.9h37.9s19.5 2.2 19.5-26.6c0-28.7-17.1-27.7-17.1-27.7h-10.2v14.3s.6 17.1-16.8 17.1H50v26s-.8 26.1 14.4 26.1zm15-8.1c-2.6 0-4.7-2.1-4.7-4.7s2.1-4.7 4.7-4.7 4.7 2.1 4.7 4.7-2.1 4.7-4.7 4.7z" fill="#FFE052"/>
  </svg>
);

export const PowerBIIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="16" width="6" height="12" rx="1.5" fill="#E6AD10" />
    <rect x="13" y="10" width="6" height="18" rx="1.5" fill="#F2C811" />
    <rect x="22" y="4" width="6" height="24" rx="1.5" fill="#F9DE5A" />
  </svg>
);

export const ExcelIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="26" height="26" rx="4" fill="#107C41" />
    <path d="M19 8h8v16h-8z" fill="#185C37" opacity="0.5" />
    <path d="M19 12h8v4h-8zm0 5h8v4h-8z" fill="#21A366" />
    <rect x="5" y="7" width="14" height="18" rx="2" fill="#0E5C2F" />
    <path d="M9 11.5l2.8 4.5L9 20.5h2.2l1.7-3.1 1.7 3.1h2.2l-2.8-4.5 2.8-4.5h-2.2l-1.7 3.1-1.7-3.1H9z" fill="#ffffff" />
  </svg>
);

export const SQLIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="16" cy="8" rx="11" ry="4" fill="#00f0ff" fillOpacity="0.8" />
    <path d="M5 8v6c0 2.2 4.9 4 11 4s11-1.8 11-4V8" stroke="#00f0ff" strokeWidth="2" />
    <path d="M5 14v6c0 2.2 4.9 4 11 4s11-1.8 11-4v-6" stroke="#00f0ff" strokeWidth="2" />
    <path d="M5 20v6c0 2.2 4.9 4 11 4s11-1.8 11-4v-6" stroke="#00f0ff" strokeWidth="2" />
  </svg>
);

export const GoogleSheetsIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 3h13l7 7v19H6V3z" fill="#0F9D58" />
    <path d="M19 3v7h7" fill="#87CEAC" />
    <rect x="10" y="14" width="12" height="11" rx="1" fill="#ffffff" />
    <path d="M10 17h12M10 21h12M15 14v11" stroke="#0F9D58" strokeWidth="1.5" />
  </svg>
);

export const JiraIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 2.5a13.5 13.5 0 00-9.5 4L16 16l9.5-9.5a13.5 13.5 0 00-9.5-4z" fill="#0052CC" />
    <path d="M6.5 6.5A13.5 13.5 0 002.5 16c0 3.7 1.5 7.1 4 9.5L16 16 6.5 6.5z" fill="#2684FF" />
    <path d="M16 16l9.5 9.5a13.5 13.5 0 004-9.5c0-3.7-1.5-7.1-4-9.5L16 16z" fill="#0052CC" />
    <path d="M6.5 25.5A13.5 13.5 0 0016 29.5a13.5 13.5 0 009.5-4L16 16 6.5 25.5z" fill="#2684FF" />
  </svg>
);

export const ConfluenceIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 23.5c1.8-1.5 5.5-2.7 8.2-1.3l4.3 2.3c2.3 1.2 5 .6 6.6-1.5l1.9-2.5C29 19 28.5 17 26.5 16c-3-1.5-6.8-.7-9.5.7L12.7 19c-2.3 1.2-5 .6-6.6-1.5L4.2 15C3 16.5 3.5 18.5 5.5 19.5c.5.3 1 .6 1.5.8v3.2z" fill="#2684FF"/>
    <path d="M25 8.5c-1.8 1.5-5.5 2.7-8.2 1.3l-4.3-2.3C10.2 6.3 7.5 6.9 5.9 9L4 11.5C3 13 3.5 15 5.5 16c3 1.5 6.8.7 9.5-.7l4.3-2.3c2.3-1.2 5-.6 6.6 1.5l1.9 2.5c1.2-1.5.7-3.5-1.3-4.5-.5-.3-1-.6-1.5-.8V8.5z" fill="#0052CC"/>
  </svg>
);

export const TrelloIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="26" height="26" rx="5" fill="#0079BF" />
    <rect x="7" y="7" width="7" height="15" rx="2" fill="#ffffff" />
    <rect x="18" y="7" width="7" height="10" rx="2" fill="#ffffff" />
  </svg>
);

export const NotionIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l11.455-.653c.466 0 .093-.466-.094-.606L16.276 2.06c-.42-.326-.98-.653-2.008-.56L3.06 2.387c-.607.046-.747.42-.42.746l1.82 1.075zm.933 3.685v12.457c0 .84.42 1.12 1.214 1.073l12.456-.746c.793-.047 1.026-.513 1.026-1.166V6.96c0-.653-.326-1.026-.98-1.026l-12.783.746c-.653.047-.933.42-.933 1.213zm11.942 1.353c.093.42 0 .84-.42.887l-1.027.186v7.745c-.466.28-.98.467-1.493.467-.746 0-1.12-.28-1.726-1.073l-4.106-6.438v6.205l1.4.326c.093.42 0 .84-.42.887l-3.36.233c-.093-.42 0-.84.42-.887l1.073-.233V9.897L7.96 9.664c-.093-.42 0-.84.42-.887l3.546-.233 4.386 6.718V9.757l-1.166-.233c-.093-.42 0-.84.42-.887l3.77-.28z"/>
  </svg>
);

export const GithubIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);

export const MiroIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="6" fill="#FFD02F" />
    <path d="M7 7h4l7 9-7 9H7l7-9L7 7zm11 0h4l3 9-3 9h-4l3-9-3-9z" fill="#050038" />
  </svg>
);

export const MondayIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="7" cy="22" r="3.5" fill="#FF3D57" />
    <circle cx="16" cy="18" r="3.5" fill="#FFCC00" />
    <circle cx="25" cy="14" r="3.5" fill="#00CA72" />
    <path d="M7 14v-4M16 10V6M25 6V3" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const TeamGanttIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="6" fill="#00C389" />
    <rect x="5" y="7" width="10" height="4" rx="1.5" fill="#ffffff" />
    <rect x="11" y="14" width="12" height="4" rx="1.5" fill="#ffffff" />
    <rect x="17" y="21" width="10" height="4" rx="1.5" fill="#ffffff" />
  </svg>
);

export const ClaudeIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="6" fill="#CC785C" />
    <path d="M16 5.5l1.8 6.5 6.7-1.3-4.2 5.3 5.4 4.1-6.7.7.3 6.7-5.3-4.2-4.1 5.4-.7-6.7-6.7-.3 4.2-5.3-5.4-4.1 6.7-.7L10.7 6.5l5.3 4.2z" fill="#ffffff"/>
  </svg>
);

export const GeminiIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="geminiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1BA1E3" />
        <stop offset="50%" stopColor="#9B72CB" />
        <stop offset="100%" stopColor="#D96570" />
      </linearGradient>
    </defs>
    <path d="M16 3C16 10.18 10.18 16 3 16C10.18 16 16 21.82 16 29C16 21.82 21.82 16 29 16C21.82 16 16 10.18 16 3Z" fill="url(#geminiGrad)" />
  </svg>
);

export const OpenAIIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="6" fill="#10A37F" />
    <path d="M24.7 13.2a5.7 5.7 0 00-.5-4.4 5.9 5.9 0 00-6.1-2.9 5.8 5.8 0 00-4.3-1.9 5.9 5.9 0 00-5.6 4A5.8 5.8 0 005.1 11a5.9 5.9 0 00.7 6.7 5.7 5.7 0 00.5 4.4 5.9 5.9 0 006.1 2.9 5.8 5.8 0 004.3 1.9 5.9 5.9 0 005.6-4 5.8 5.8 0 003.1-3 5.9 5.9 0 00-.7-6.7zm-8.7 11.5a4.6 4.6 0 01-3.2-1.3l.1-.1 3.8-2.2a.7.7 0 00.3-.6v-5.2l1.6.9v4.5a4.6 4.6 0 01-2.6 4zm-7.6-3.8a4.6 4.6 0 01-.6-3.4l.2.1 3.8 2.2a.7.7 0 00.7 0l4.5-2.6v1.9l-3.9 2.2a4.6 4.6 0 01-4.7-.4zm-1.8-8.4a4.6 4.6 0 012.6-2.1v4.5a.7.7 0 00.3.6l4.5 2.6-1.6.9-3.9-2.2a4.6 4.6 0 01-1.9-4.3zm12.8 1.9l-4.5-2.6 1.6-.9 3.9 2.2a4.6 4.6 0 012 4.3 4.6 4.6 0 01-2.6 2.1v-4.5a.7.7 0 00-.4-.6zm3 4.6a4.6 4.6 0 01-4.7.4l-.1-.1-3.8-2.2a.7.7 0 00-.7 0l-4.5 2.6v-1.9l3.9-2.2a4.6 4.6 0 015.3.4l.2.1a4.6 4.6 0 014.4 3.3zm-7.7-2.7l-2-1.2 2-1.2 2 1.2-2 1.2z" fill="#ffffff" />
  </svg>
);

// Fallback helper to resolve brand icon by tool name
export function getBrandIcon(toolName, className = "w-6 h-6") {
  switch (toolName) {
    case 'Python':
      return <PythonIcon className={className} />;
    case 'Power BI':
      return <PowerBIIcon className={className} />;
    case 'Microsoft Excel':
    case 'Excel':
      return <ExcelIcon className={className} />;
    case 'SQL':
    case 'Snowflake SQL':
      return <SQLIcon className={className} />;
    case 'Google Sheets':
      return <GoogleSheetsIcon className={className} />;
    case 'Jira':
      return <JiraIcon className={className} />;
    case 'Confluence':
      return <ConfluenceIcon className={className} />;
    case 'Trello':
      return <TrelloIcon className={className} />;
    case 'Notion':
      return <NotionIcon className={className} />;
    case 'GitHub':
    case 'Github':
      return <GithubIcon className={className} />;
    case 'Miro':
      return <MiroIcon className={className} />;
    case 'Monday.com':
      return <MondayIcon className={className} />;
    case 'TeamGantt':
      return <TeamGanttIcon className={className} />;
    case 'Claude':
    case 'Claude 101':
      return <ClaudeIcon className={className} />;
    case 'Gemini':
      return <GeminiIcon className={className} />;
    case 'OpenAI':
    case 'ChatGPT':
      return <OpenAIIcon className={className} />;
    default:
      return null;
  }
}
