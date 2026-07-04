"use client";

import { motion } from "framer-motion";
import { GitPullRequest, GitFork, Star } from "lucide-react";
import { Github } from "@/components/Icons";

export default function GitHubStats() {
  // Generate random data for mock contribution board
  // 53 columns (weeks) x 7 rows (days)
  const rows = 7;
  const cols = 35; // Shortened for design fitting
  
  // Static array of opacity classes to mimic contribution activity
  const activityPattern = [
    0, 1, 2, 1, 0, 3, 2, 0, 1, 0, 4, 3, 1, 2, 0, 1, 1, 2, 3, 0,
    2, 1, 0, 1, 4, 2, 0, 1, 3, 2, 1, 0, 2, 1, 0, 3, 4, 2, 1, 0,
    0, 1, 2, 1, 0, 3, 2, 0, 1, 0, 4, 3, 1, 2, 0, 1, 1, 2, 3, 0,
    1, 2, 3, 4, 1, 2, 0, 1, 1, 0, 2, 3, 1, 0, 2, 4, 3, 1, 0, 2,
    0, 1, 2, 1, 0, 3, 2, 0, 1, 0, 4, 3, 1, 2, 0, 1, 1, 2, 3, 0,
    2, 1, 0, 1, 4, 2, 0, 1, 3, 2, 1, 0, 2, 1, 0, 3, 4, 2, 1, 0,
    1, 2, 3, 4, 1, 2, 0, 1, 1, 0, 2, 3, 1, 0, 2, 4, 3, 1, 0, 2,
    0, 1, 2, 1, 0, 3, 2, 0, 1, 0, 4, 3, 1, 2, 0, 1, 1, 2, 3, 0,
    2, 1, 0, 1, 4, 2, 0, 1, 3, 2, 1, 0, 2, 1, 0, 3, 4, 2, 1, 0,
    1, 2, 3, 4, 1, 2, 0, 1, 1, 0, 2, 3, 1, 0, 2, 4, 3, 1, 0, 2,
    0, 1, 2, 1, 0, 3, 2, 0, 1, 0, 4, 3, 1, 2, 0, 1, 1, 2, 3, 0,
    2, 1, 0, 1, 4, 2, 0, 1, 3, 2, 1, 0, 2, 1, 0, 3, 4, 2, 1, 0,
  ];

  const getBgColor = (level: number) => {
    switch (level) {
      case 1: return "bg-emerald-950/40";
      case 2: return "bg-emerald-800/60";
      case 3: return "bg-emerald-600/80";
      case 4: return "bg-emerald-400";
      default: return "bg-zinc-900/60";
    }
  };

  const languages = [
    { name: "TypeScript", percentage: 45, color: "bg-blue-500" },
    { name: "Python", percentage: 30, color: "bg-yellow-500" },
    { name: "JavaScript", percentage: 15, color: "bg-amber-400" },
    { name: "C++", percentage: 10, color: "bg-rose-500" }
  ];

  return (
    <div className="glow-card border border-zinc-800/80 bg-[#0d0d0f]/50 p-6 md:p-8 rounded-xl space-y-6">
      
      {/* Header */}
      <div className="flex items-center justify-between border-b border-zinc-900 pb-4">
        <div className="flex items-center gap-3">
          <div className="p-1.5 rounded bg-zinc-900 border border-zinc-800">
            <Github className="w-5 h-5 text-zinc-100" />
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-wider font-mono text-zinc-200 uppercase">
              GitHub Pipeline
            </h3>
            <p className="text-xxs font-mono text-zinc-500">CONTRIBUTION PIPELINE &amp; STATS</p>
          </div>
        </div>
        
        <a 
          href="https://github.com/Abhiman74" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-xxs font-mono text-zinc-400 hover:text-white border border-zinc-800 bg-zinc-950 px-2.5 py-1 rounded"
        >
          Follow @Abhiman74
        </a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Mock Contribution Graph */}
        <div className="lg:col-span-8 space-y-4">
          <div className="flex justify-between items-center text-xs font-mono text-zinc-400">
            <span>342 contributions in the last year</span>
            <div className="flex items-center gap-1 text-[10px]">
              <span>Less</span>
              <span className="w-2.5 h-2.5 rounded-sm bg-zinc-900" />
              <span className="w-2.5 h-2.5 rounded-sm bg-emerald-950/40" />
              <span className="w-2.5 h-2.5 rounded-sm bg-emerald-800/60" />
              <span className="w-2.5 h-2.5 rounded-sm bg-emerald-600/80" />
              <span className="w-2.5 h-2.5 rounded-sm bg-emerald-400" />
              <span>More</span>
            </div>
          </div>
          
          {/* Grid Box */}
          <div className="border border-zinc-900 bg-zinc-950/40 p-4 rounded-lg overflow-x-auto">
            <div className="grid grid-flow-col gap-1 min-w-[380px]" style={{ gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))` }}>
              {Array.from({ length: rows * cols }).map((_, i) => {
                const activityLevel = activityPattern[i % activityPattern.length];
                return (
                  <div
                    key={i}
                    className={`w-2.5 h-2.5 rounded-sm ${getBgColor(activityLevel)} transition-all hover:scale-125 hover:z-10`}
                    title={`${activityLevel} contributions`}
                  />
                );
              })}
            </div>
          </div>
        </div>

        {/* Languages Summary */}
        <div className="lg:col-span-4 space-y-4">
          <h4 className="text-xs font-semibold tracking-wider font-mono text-zinc-300 uppercase">
            Primary Stack Usage
          </h4>
          
          {/* Languages Stack Bar */}
          <div className="h-2 w-full rounded-full overflow-hidden flex bg-zinc-900">
            {languages.map((lang, idx) => (
              <div
                key={idx}
                style={{ width: `${lang.percentage}%` }}
                className={`${lang.color} h-full`}
              />
            ))}
          </div>

          {/* Languages details */}
          <div className="space-y-2 pt-2">
            {languages.map((lang, idx) => (
              <div key={idx} className="flex items-center justify-between text-xs font-mono text-zinc-400">
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${lang.color}`} />
                  <span>{lang.name}</span>
                </div>
                <span>{lang.percentage}%</span>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}
