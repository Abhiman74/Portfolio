"use client";

import { motion } from "framer-motion";
import { Hammer, BookOpen, UserCheck } from "lucide-react";

export default function Currently() {
  const cards = [
    {
      title: "Building",
      description: "AI-powered developer tools and full-stack applications focused on real-world impact.",
      icon: <Hammer className="w-5 h-5 text-[#8B5CF6]" />,
      badge: "ACTIVE DEVELOPMENT"
    },
    {
      title: "Learning",
      description: "Advanced Data Structures & Algorithms, System Design, LLM Engineering, and Backend Architecture.",
      icon: <BookOpen className="w-5 h-5 text-[#60A5FA]" />,
      badge: "INTELLECTUAL EXPANSION"
    },
    {
      title: "Preparing",
      description: "Software Engineering and Product Management roles while continuously improving problem-solving and product thinking.",
      icon: <UserCheck className="w-5 h-5 text-[#10B981]" />,
      badge: "CAREER PLACEMENT"
    }
  ];

  return (
    <section id="currently" className="py-28 relative bg-[#09090B] border-t border-[#262626]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-xs font-mono text-[#71717A] uppercase tracking-widest">07 / Current State</span>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mt-2 font-sans">
            Currently
          </h2>
          <p className="text-sm font-mono text-[#71717A] mt-2 tracking-wider">A snapshot of my focus, projects, and active studies right now.</p>
          <div className="h-1 w-16 bg-gradient-to-r from-[#4F46E5] to-[#8B5CF6] mt-4 rounded-full" />
        </div>

        {/* 3 Columns Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              key={i}
              className="premium-card p-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Header Badge */}
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-mono text-[#71717A] uppercase tracking-widest">
                    {card.badge}
                  </span>
                  <span className="text-white/20 font-mono text-xs select-none">0{i + 1}</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#111113] border border-[#262626]">
                    {card.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white font-sans">{card.title}</h3>
                </div>

                <p className="text-sm text-[#A1A1AA] leading-relaxed font-sans pt-2">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
