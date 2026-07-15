"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, Award, ShieldAlert, Sparkles } from "lucide-react";

interface TimelineEntry {
  title: string;
  subtitle: string;
  type: string;
  period: string;
  location?: string;
  icon: React.ReactNode;
  points: string[];
  gradient: string;
}

export default function Experience() {
  const entries: TimelineEntry[] = [
    {
      title: "Web Developer Intern",
      subtitle: "CodSoft",
      type: "Professional Experience",
      period: "Jan 2026 – Feb 2026",
      location: "Remote",
      icon: <Briefcase className="w-4 h-4 text-[#60A5FA]" />,
      gradient: "from-[#60A5FA] to-[#3B82F6]",
      points: [
        "Developed responsive React.js single-page applications, reducing redundant state-renders and improving visual frame speeds.",
        "Integrated RESTful API services dynamically, ensuring async form validation and secure endpoint query execution.",
        "Refactored styling into component-level clean structures, optimizing load size metrics by 22%."
      ]
    },
    {
      title: "Product Management (GenAI & Agentic AI)",
      subtitle: "BITS School of Management (BITSOM)",
      type: "Academic Specialization",
      period: "Jul 2025 – Dec 2025",
      location: "Masai Collaboration",
      icon: <Sparkles className="w-4 h-4 text-[#8B5CF6]" />,
      gradient: "from-[#4F46E5] to-[#8B5CF6]",
      points: [
        "Completed a 6-month specialized Product Management program focusing on Generative AI architectures, prompt design, and agentic workflows.",
        "Awarded the Certificate of Excellence in Evaluation for high performance in product design prototypes and customer telemetry.",
        "Engineered voice-first conversational assistants (Saarthi AI) mapping transaction rescue pathways for low-literacy users."
      ]
    },
    {
      title: "Smart India Hackathon Finalist (Rank 73)",
      subtitle: "Ministry of Education, Govt. of India",
      type: "National Achievement",
      period: "2024",
      icon: <Award className="w-4 h-4 text-[#F59E0B]" />,
      gradient: "from-[#F59E0B] to-[#D97706]",
      points: [
        "Ranked 73rd nationally out of thousands of teams in the premier government-backed hackathon.",
        "Designed and implemented a custom cryptographic document hashing signature mechanism to prevent certificate forgery.",
        "Demonstrated a distributed system verification architecture processing real-time file hashes securely."
      ]
    }
  ];

  return (
    <section id="experience" className="py-28 relative bg-[#09090B] border-t border-[#262626]">
      <div className="absolute top-[10%] left-[50%] -translate-x-[50%] w-[600px] h-[300px] bg-purple-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-xs font-mono text-[#71717A] uppercase tracking-widest">04 / Journey</span>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mt-2 font-sans">
            Experience &amp; Milestones
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-[#4F46E5] to-[#8B5CF6] mt-4 rounded-full" />
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l border-[#262626] ml-3 md:ml-6 space-y-12 py-4">
          {entries.map((entry, index) => (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              key={index}
              className="relative pl-8 md:pl-12 group"
            >
              {/* Timeline marker with glow */}
              <div className="absolute left-[-6px] top-2.5 w-3 h-3 rounded-full bg-[#09090B] border-2 border-[#262626] flex items-center justify-center group-hover:scale-125 transition-all duration-300">
                <div className="w-1 h-1 rounded-full bg-[#8B5CF6]" />
              </div>

              {/* Experience Card */}
              <div className="premium-card p-6 md:p-8 space-y-4">
                
                {/* Header Information */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-3">
                  <div>
                    {/* Role Title */}
                    <h3 className="text-xl font-bold text-white group-hover:text-[#8B5CF6] transition-colors font-sans">
                      {entry.title}
                    </h3>
                    {/* Subtitle / Company */}
                    <div className="flex flex-wrap items-center gap-2 text-xs font-mono mt-1 text-[#8B5CF6]">
                      <span className="font-semibold">{entry.subtitle}</span>
                      <span className="w-1 h-1 rounded-full bg-[#71717A]" />
                      <span className="text-[#71717A]">{entry.type}</span>
                    </div>
                  </div>
                  
                  {/* Period and Location */}
                  <div className="flex flex-col items-start md:items-end text-xs font-mono text-[#71717A] gap-1 mt-1 md:mt-0 select-none">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#71717A]" />
                      {entry.period}
                    </span>
                    {entry.location && (
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-[#71717A]" />
                        {entry.location}
                      </span>
                    )}
                  </div>
                </div>

                {/* Key Bullet Points */}
                <ul className="space-y-3 pt-2 text-sm text-[#A1A1AA] font-sans list-none">
                  {entry.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2.5 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#262626] border border-[#71717A] mt-2 shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
