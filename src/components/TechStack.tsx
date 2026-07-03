"use client";

import { motion, Variants } from "framer-motion";
import { Cpu, Terminal, Code2, Database, Layers, Sliders, Box, Network } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

export default function TechStack() {
  const categories: SkillCategory[] = [
    {
      title: "Languages",
      icon: <Terminal className="w-4 h-4 text-amber-400" />,
      skills: ["C++", "Python", "JavaScript", "TypeScript", "SQL"]
    },
    {
      title: "Frontend Development",
      icon: <Code2 className="w-4 h-4 text-blue-400" />,
      skills: ["React", "Next.js 15", "Tailwind CSS", "HTML5/CSS3"]
    },
    {
      title: "Backend Frameworks",
      icon: <Layers className="w-4 h-4 text-purple-400" />,
      skills: ["Node.js", "Express.js", "FastAPI"]
    },
    {
      title: "Databases & ORM",
      icon: <Database className="w-4 h-4 text-emerald-400" />,
      skills: ["PostgreSQL", "SQLite", "Prisma ORM"]
    },
    {
      title: "Artificial Intelligence",
      icon: <Cpu className="w-4 h-4 text-rose-400" />,
      skills: ["OpenAI API", "Gemini API", "TensorFlow", "OpenCV", "RAG Systems", "Prompt Engineering"]
    },
    {
      title: "Developer Tools",
      icon: <Sliders className="w-4 h-4 text-cyan-400" />,
      skills: ["Git", "GitHub", "Linux", "Postman", "Vercel", "Docker"]
    },
    {
      title: "Core Computer Science",
      icon: <Network className="w-4 h-4 text-indigo-400" />,
      skills: ["DSA", "OOP", "Operating Systems", "DBMS", "Computer Networks", "System Design"]
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-black/20">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">03 / Capabilities</span>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white mt-2">
            Technical Stack
          </h2>
          <div className="h-0.5 w-12 bg-gradient-to-r from-blue-500 to-purple-500 mt-4 rounded" />
        </div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {categories.map((cat, idx) => (
            <motion.div
              variants={itemVariants}
              key={idx}
              className="glow-card border border-zinc-800/80 bg-[#0d0d0f]/50 p-6 rounded-xl hover:border-zinc-700/60 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="p-1.5 rounded bg-zinc-900 border border-zinc-800">
                    {cat.icon}
                  </div>
                  <h3 className="text-sm font-semibold tracking-wider font-mono text-zinc-200 uppercase">
                    {cat.title}
                  </h3>
                </div>

                {/* Skills Badges */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-xs px-2.5 py-1 rounded bg-zinc-900/80 border border-zinc-800/60 text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors font-sans"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
