"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

interface TimelineEntry {
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  points: string[];
}

export default function Experience() {
  const entries: TimelineEntry[] = [
    {
      role: "Web Developer Intern",
      company: "CodSoft",
      location: "Remote",
      period: "Jan 2026 – Feb 2026",
      type: "Internship",
      points: [
        "Built dynamic single-page web applications utilizing React and state management hooks.",
        "Integrated RESTful APIs to deliver dynamic content updates and asynchronous form submittals.",
        "Improved frontend performance metrics by refactoring components and reducing redundant rendering paths.",
        "Developed custom, reusable modular components matching high-fidelity design layouts.",
        "Collaborated with developers in Agile sprints to coordinate task delivery and code reviews."
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 relative bg-black/40 border-y border-zinc-900">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">04 / History</span>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white mt-2">
            Experience
          </h2>
          <div className="h-0.5 w-12 bg-gradient-to-r from-blue-500 to-purple-500 mt-4 rounded" />
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l border-zinc-800 ml-3 md:ml-6 space-y-12 py-4">
          {entries.map((entry, index) => (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              key={index}
              className="relative pl-8 md:pl-12 group"
            >
              {/* Timeline marker */}
              <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full border border-indigo-500 bg-zinc-950 group-hover:bg-indigo-400 group-hover:scale-125 transition-all" />

              {/* Experience Card */}
              <div className="glow-card border border-zinc-800/80 bg-[#0d0d0f]/50 p-6 md:p-8 rounded-xl space-y-4">
                
                {/* Header Information */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-2">
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-zinc-100 group-hover:text-white transition-colors">
                      {entry.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-indigo-400 mt-1">
                      <span>{entry.company}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-800" />
                      <span className="text-zinc-500">{entry.type}</span>
                    </div>
                  </div>
                  
                  {/* Period and Location */}
                  <div className="flex flex-col items-start md:items-end text-xs font-mono text-zinc-500 gap-1 mt-1 md:mt-0">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {entry.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      {entry.location}
                    </span>
                  </div>
                </div>

                {/* Key Bullet Points */}
                <ul className="space-y-3 pt-2 text-xs md:text-sm text-zinc-400 font-sans list-none">
                  {entry.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2.5 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-700 mt-2 shrink-0" />
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
