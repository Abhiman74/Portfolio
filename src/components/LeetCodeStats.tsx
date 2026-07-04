"use client";

import { motion } from "framer-motion";
import { Code2, Trophy, Flame, CheckCircle2 } from "lucide-react";

export default function LeetCodeStats() {
  const topics = [
    "Arrays & Hashing",
    "Two Pointers",
    "Sliding Window",
    "Stack & Queues",
    "Binary Search",
    "Trees & Graphs",
    "Dynamic Programming",
    "Greedy Algorithms"
  ];

  return (
    <div className="glow-card border border-zinc-800/80 bg-[#0d0d0f]/50 p-6 md:p-8 rounded-xl space-y-6">
      
      {/* Header */}
      <div className="flex items-center justify-between border-b border-zinc-900 pb-4">
        <div className="flex items-center gap-3">
          <div className="p-1.5 rounded bg-zinc-900 border border-zinc-800">
            <Trophy className="w-5 h-5 text-amber-500" />
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-wider font-mono text-zinc-200 uppercase">
              LeetCode Profile
            </h3>
            <p className="text-xxs font-mono text-zinc-500">DSA &amp; PROBLEM SOLVING</p>
          </div>
        </div>
        <a 
          href="https://leetcode.com/u/Sano_codes/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-xxs font-mono text-zinc-400 hover:text-white border border-zinc-800 bg-zinc-950 px-2.5 py-1 rounded"
        >
          View Profile
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        
        {/* Solved Metric Ring */}
        <div className="md:col-span-5 flex flex-col items-center justify-center space-y-4">
          <div className="relative w-36 h-36 flex items-center justify-center">
            {/* Background circle */}
            <svg className="w-full h-full transform -rotate-90">
              <circle
                cx="72"
                cy="72"
                r="60"
                className="stroke-zinc-800/60"
                strokeWidth="8"
                fill="transparent"
              />
              {/* Foreground circle */}
              <motion.circle
                cx="72"
                cy="72"
                r="60"
                className="stroke-orange-500"
                strokeWidth="8"
                fill="transparent"
                strokeDasharray="377"
                initial={{ strokeDashoffset: 377 }}
                whileInView={{ strokeDashoffset: 377 - (377 * 170) / 300 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                strokeLinecap="round"
              />
            </svg>
            
            {/* Center Content */}
            <div className="absolute text-center space-y-0.5">
              <span className="text-3xl font-bold text-white tracking-tight">170</span>
              <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Solved</p>
            </div>
          </div>

          <div className="flex gap-4 text-center font-mono text-[10px]">
            <div>
              <span className="text-emerald-400 font-semibold block">82</span>
              <span className="text-zinc-500 text-[9px] uppercase">Easy</span>
            </div>
            <div className="border-l border-zinc-800/60 pl-4">
              <span className="text-amber-400 font-semibold block">78</span>
              <span className="text-zinc-500 text-[9px] uppercase">Medium</span>
            </div>
            <div className="border-l border-zinc-800/60 pl-4">
              <span className="text-rose-500 font-semibold block">10</span>
              <span className="text-zinc-500 text-[9px] uppercase">Hard</span>
            </div>
          </div>
        </div>

        {/* Topics List */}
        <div className="md:col-span-7 space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Demonstrated competency in key DSA topics:</span>
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            {topics.map((topic, i) => (
              <div
                key={i}
                className="flex items-center gap-2 p-2 rounded border border-zinc-850 bg-zinc-900/30 text-xs text-zinc-300 font-sans"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-orange-500/80" />
                <span>{topic}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2 p-2.5 rounded bg-orange-500/5 border border-orange-500/10 text-[10px] font-mono text-orange-400/90">
            <Flame className="w-3.5 h-3.5" />
            <span>Active problem solver. Consistently strengthening DSA conceptual foundations.</span>
          </div>
        </div>

      </div>

    </div>
  );
}
