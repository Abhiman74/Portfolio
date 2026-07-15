"use client";

import { motion } from "framer-motion";
import { Trophy, Flame, CheckCircle2, Award, Zap } from "lucide-react";

export default function LeetCodeStats() {
  const topics = [
    "Arrays & Hashing",
    "Binary Search",
    "Dynamic Programming",
    "Graphs",
    "Trees",
    "Hashing",
    "Sliding Window"
  ];

  return (
    <section id="leetcode" className="py-28 relative bg-[#09090B] border-t border-[#262626]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-xs font-mono text-[#71717A] uppercase tracking-widest">06 / Algorithms</span>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mt-2 font-sans">
            LeetCode DSA Standings
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-[#4F46E5] to-[#8B5CF6] mt-4 rounded-full" />
        </div>

        {/* Dashboard grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Block: Problem Ring Metric */}
          <div className="lg:col-span-5 premium-card p-8 flex flex-col items-center justify-center space-y-6">
            <div className="flex items-center gap-2.5 self-start mb-2 border-b border-[#262626] pb-3 w-full">
              <Trophy className="w-5 h-5 text-[#F59E0B]" />
              <h3 className="text-sm font-bold tracking-wider font-mono text-white uppercase">
                Solved Standings
              </h3>
            </div>

            <div className="relative w-40 h-40 flex items-center justify-center">
              {/* Background circular ring */}
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="80"
                  cy="80"
                  r="68"
                  className="stroke-[#262626]"
                  strokeWidth="8"
                  fill="transparent"
                />
                {/* Foreground circular ring */}
                <motion.circle
                  cx="80"
                  cy="80"
                  r="68"
                  className="stroke-[#F59E0B]"
                  strokeWidth="8"
                  fill="transparent"
                  strokeDasharray="427"
                  initial={{ strokeDashoffset: 427 }}
                  whileInView={{ strokeDashoffset: 427 - (427 * 170) / 300 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  strokeLinecap="round"
                />
              </svg>
              
              {/* Center Metrics Text */}
              <div className="absolute text-center space-y-0.5">
                <span className="text-4xl font-extrabold text-white tracking-tight font-sans">170+</span>
                <p className="text-[9px] font-mono text-[#71717A] uppercase tracking-widest">Total Solved</p>
              </div>
            </div>

            {/* Metrics distribution columns */}
            <div className="flex gap-6 text-center font-mono text-xs pt-2">
              <div>
                <span className="text-[#10B981] font-bold block text-base">82</span>
                <span className="text-[#71717A] text-[9px] uppercase tracking-wider">Easy</span>
              </div>
              <div className="border-l border-[#262626] pl-6">
                <span className="text-[#F59E0B] font-bold block text-base">78</span>
                <span className="text-[#71717A] text-[9px] uppercase tracking-wider">Medium</span>
              </div>
              <div className="border-l border-[#262626] pl-6">
                <span className="text-[#E11D48] font-bold block text-base">10</span>
                <span className="text-[#71717A] text-[9px] uppercase tracking-wider">Hard</span>
              </div>
            </div>
          </div>

          {/* Right Block: Contest Ratings & Favorite Topics */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-6">
            
            {/* Contest rating info card */}
            <div className="premium-card p-6 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#111113] border border-[#262626] flex items-center justify-center">
                  <Zap className="w-5 h-5 text-[#8B5CF6]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white font-sans">Competitive Profile</h4>
                  <p className="text-xs text-[#71717A] font-mono mt-0.5">Leetcode Profile: Sano_codes</p>
                </div>
              </div>
              <div className="text-right">
                <span className="text-xl font-mono font-extrabold text-white block">1570+</span>
                <span className="text-[9px] text-[#71717A] font-mono uppercase tracking-wider">Peak CodeChef Rating</span>
              </div>
            </div>

            {/* Favorite Topics Grid */}
            <div className="premium-card p-6 flex-1 flex flex-col justify-between space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-[#A1A1AA]">
                <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                <span>Core Data Structures &amp; Algorithms Proficiency:</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {topics.map((topic, i) => (
                  <span
                    key={i}
                    className="text-xs font-mono px-3.5 py-2 rounded-xl border border-[#262626] bg-[#09090B] text-[#A1A1AA] hover:text-white transition-colors cursor-default"
                  >
                    {topic}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#F59E0B]/5 border border-[#F59E0B]/10 text-xs font-mono text-[#F59E0B]/90 mt-2">
                <Flame className="w-4 h-4 text-[#F59E0B] animate-pulse" />
                <span>Active DSA Solver. Enhancing conceptual capacity under speed checks.</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
