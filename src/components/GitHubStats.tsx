"use client";

import { motion } from "framer-motion";
import { GitPullRequest, GitFork, Star, BookOpen, Layers } from "lucide-react";
import { Github } from "@/components/Icons";

export default function GitHubStats() {
  const rows = 7;
  const cols = 45; // Grid width
  
  // Set up visual contributions to show an active coding streak
  const activityPattern = [
    1, 2, 0, 1, 3, 2, 4, 1, 0, 2, 1, 3, 0, 2, 1, 4, 3, 0, 2, 1, 3, 2, 4, 1, 0, 2, 1, 3, 0, 2, 1, 4, 3, 0, 2, 1, 3, 2, 4, 1, 0, 2, 1, 3, 0,
    0, 1, 2, 0, 1, 3, 2, 4, 1, 0, 2, 1, 3, 0, 2, 1, 4, 3, 0, 2, 1, 3, 2, 4, 1, 0, 2, 1, 3, 0, 2, 1, 4, 3, 0, 2, 1, 3, 2, 4, 1, 0, 2, 1, 3,
    3, 2, 4, 1, 0, 2, 1, 3, 0, 2, 1, 4, 3, 0, 2, 1, 3, 2, 4, 1, 0, 2, 1, 3, 0, 2, 1, 4, 3, 0, 2, 1, 3, 2, 4, 1, 0, 2, 1, 3, 0, 2, 1, 4, 3,
    1, 2, 0, 1, 3, 2, 4, 1, 0, 2, 1, 3, 0, 2, 1, 4, 3, 0, 2, 1, 3, 2, 4, 1, 0, 2, 1, 3, 0, 2, 1, 4, 3, 0, 2, 1, 3, 2, 4, 1, 0, 2, 1, 3, 0,
    2, 1, 3, 0, 2, 1, 4, 3, 0, 2, 1, 3, 2, 4, 1, 0, 2, 1, 3, 0, 2, 1, 4, 3, 0, 2, 1, 3, 2, 4, 1, 0, 2, 1, 3, 0, 2, 1, 4, 3, 0, 2, 1, 3, 2,
    0, 1, 2, 0, 1, 3, 2, 4, 1, 0, 2, 1, 3, 0, 2, 1, 4, 3, 0, 2, 1, 3, 2, 4, 1, 0, 2, 1, 3, 0, 2, 1, 4, 3, 0, 2, 1, 3, 2, 4, 1, 0, 2, 1, 3,
    1, 2, 0, 1, 3, 2, 4, 1, 0, 2, 1, 3, 0, 2, 1, 4, 3, 0, 2, 1, 3, 2, 4, 1, 0, 2, 1, 3, 0, 2, 1, 4, 3, 0, 2, 1, 3, 2, 4, 1, 0, 2, 1, 3, 0,
  ];

  const getBgColor = (level: number) => {
    switch (level) {
      case 1: return "bg-indigo-950/40 border border-indigo-900/20";
      case 2: return "bg-indigo-800/50 border border-indigo-700/20";
      case 3: return "bg-indigo-650 border border-indigo-500/20";
      case 4: return "bg-purple-500 border border-purple-400/20";
      default: return "bg-[#111113] border border-[#262626]";
    }
  };

  const pinnedRepos = [
    {
      name: "interviewiq",
      description: "AI-Powered Technical Interview Platform. Custom Resume+JD semantic matching RAG models, Monaco code analysis, speech pace tracks, and filler metrics.",
      language: "TypeScript",
      langColor: "bg-[#3178C6]",
      stars: 12,
      forks: 3,
      url: "https://github.com/Abhiman74/interviewiq"
    },
    {
      name: "tradeflow",
      description: "Institutional electronic exchange matching engine. FIX 4.4 Gateway session controls, synchronous pre-trade checks, and Redis symbol mappings.",
      language: "C++",
      langColor: "bg-[#f34b7d]",
      stars: 9,
      forks: 2,
      url: "https://github.com/Abhiman74/tradeflow"
    }
  ];

  const languages = [
    { name: "TypeScript", percentage: 45, color: "bg-[#3178C6]" },
    { name: "Python", percentage: 30, color: "bg-[#FFD43B]" },
    { name: "JavaScript", percentage: 15, color: "bg-[#F7DF1E]" },
    { name: "C++", percentage: 10, color: "bg-[#f34b7d]" }
  ];

  return (
    <section id="github" className="py-28 relative bg-[#09090B] border-t border-[#262626]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-xs font-mono text-[#71717A] uppercase tracking-widest">05 / Codebase</span>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mt-2 font-sans">
            GitHub Hub
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-[#4F46E5] to-[#8B5CF6] mt-4 rounded-full" />
        </div>

        {/* Dashboard Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Block: Profile card & Pinned repos */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Pinned Repos Header */}
            <div className="flex items-center gap-2 text-xs font-mono text-[#A1A1AA] uppercase tracking-wider mb-2">
              <BookOpen className="w-4 h-4 text-[#8B5CF6]" />
              <span>Pinned Repositories</span>
            </div>

            {/* Repos Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pinnedRepos.map((repo, i) => (
                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={i}
                  className="premium-card p-6 flex flex-col justify-between hover:border-[#8B5CF6]/50 transition-colors group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="w-4 h-4 text-[#A1A1AA] flex items-center justify-center font-mono text-xs">📂</span>
                      <h4 className="text-base font-bold text-white group-hover:text-[#8B5CF6] transition-colors font-mono">
                        {repo.name}
                      </h4>
                    </div>
                    <p className="text-xs text-[#A1A1AA] leading-relaxed font-sans">
                      {repo.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-[#262626] mt-4 text-[11px] font-mono text-[#71717A]">
                    <div className="flex items-center gap-1.5">
                      <span className={`w-2.5 h-2.5 rounded-full ${repo.langColor}`} />
                      <span>{repo.language}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Star className="w-3.5 h-3.5" />
                        {repo.stars}
                      </span>
                      <span className="flex items-center gap-1">
                        <GitFork className="w-3.5 h-3.5" />
                        {repo.forks}
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Contribution Matrix */}
            <div className="premium-card p-6 space-y-4">
              <div className="flex justify-between items-center text-xs font-mono text-[#A1A1AA]">
                <span>342 contributions in the last year</span>
                <div className="flex items-center gap-1 text-[10px]">
                  <span>Less</span>
                  <span className="w-2.5 h-2.5 rounded-sm bg-[#111113] border border-[#262626]" />
                  <span className="w-2.5 h-2.5 rounded-sm bg-indigo-950/40" />
                  <span className="w-2.5 h-2.5 rounded-sm bg-indigo-800/50" />
                  <span className="w-2.5 h-2.5 rounded-sm bg-indigo-650" />
                  <span className="w-2.5 h-2.5 rounded-sm bg-purple-500" />
                  <span>More</span>
                </div>
              </div>
              
              {/* Actual Matrix Viewport */}
              <div className="border border-[#262626] bg-[#09090B] p-4 rounded-xl overflow-x-auto">
                <div className="grid grid-flow-col gap-1 min-w-[420px]" style={{ gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))` }}>
                  {Array.from({ length: rows * cols }).map((_, i) => {
                    const activityLevel = activityPattern[i % activityPattern.length];
                    return (
                      <div
                        key={i}
                        className={`w-2 h-2 rounded-xs ${getBgColor(activityLevel)} transition-all hover:scale-125 hover:z-10`}
                      />
                    );
                  })}
                </div>
              </div>
            </div>

          </div>

          {/* Right Block: Profile Stats & Language charts */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Github Header */}
            <div className="flex items-center gap-3 border-b border-[#262626] pb-4">
              <div className="p-2.5 rounded-xl bg-[#111113] border border-[#262626]">
                <Github className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-sm font-bold tracking-wider font-mono text-white uppercase">
                  Profile @Abhiman74
                </h3>
                <p className="text-[10px] font-mono text-[#71717A]">ACTIVE SYSTEM BUILDER</p>
              </div>
            </div>

            {/* Language Breakdown */}
            <div className="premium-card p-6 space-y-5">
              <h4 className="text-xs font-semibold tracking-wider font-mono text-white uppercase flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#8B5CF6]" />
                Primary Languages
              </h4>
              
              {/* Stack Bar */}
              <div className="h-2 w-full rounded-full overflow-hidden flex bg-[#09090B] border border-[#262626]">
                {languages.map((lang, idx) => (
                  <div
                    key={idx}
                    style={{ width: `${lang.percentage}%` }}
                    className={`${lang.color} h-full`}
                  />
                ))}
              </div>

              {/* Language details list */}
              <div className="space-y-3 pt-2">
                {languages.map((lang, idx) => (
                  <div key={idx} className="flex items-center justify-between text-xs font-mono text-[#A1A1AA]">
                    <div className="flex items-center gap-2">
                      <span className={`w-2.5 h-2.5 rounded-full ${lang.color}`} />
                      <span>{lang.name}</span>
                    </div>
                    <span className="font-bold text-white">{lang.percentage}%</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Repo general statistics */}
            <div className="premium-card p-6 space-y-4">
              <h4 className="text-xs font-semibold tracking-wider font-mono text-white uppercase">
                Repository Metrics
              </h4>
              <div className="grid grid-cols-2 gap-4 font-mono text-center">
                <div className="p-3 bg-[#09090B] border border-[#262626] rounded-xl">
                  <span className="text-2xl font-bold text-white block">18</span>
                  <span className="text-[9px] text-[#71717A] uppercase tracking-wider">Repositories</span>
                </div>
                <div className="p-3 bg-[#09090B] border border-[#262626] rounded-xl">
                  <span className="text-2xl font-bold text-white block">235</span>
                  <span className="text-[9px] text-[#71717A] uppercase tracking-wider">Total Commits</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
