"use client";

import { motion, Variants } from "framer-motion";
import { Cpu, Terminal, Code2, Database, Sliders, Server, LayoutGrid } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  description: string;
  skills: string[];
}

export default function TechStack() {
  const categories: SkillCategory[] = [
    {
      title: "Languages",
      icon: <Terminal className="w-4 h-4 text-[#F59E0B]" />,
      description: "Strong fundamentals in compile-time structures, modern systems, and typing systems.",
      skills: ["C++", "Python", "TypeScript", "JavaScript", "SQL"]
    },
    {
      title: "Frontend",
      icon: <Code2 className="w-4 h-4 text-[#60A5FA]" />,
      description: "Building responsive, highly optimized, and modern interactive user interfaces.",
      skills: ["React", "Next.js", "TailwindCSS"]
    },
    {
      title: "Backend",
      icon: <Server className="w-4 h-4 text-[#8B5CF6]" />,
      description: "Developing robust, scalable APIs, database integrations, and middleware systems.",
      skills: ["Node.js", "Express.js", "FastAPI", "Prisma ORM", "PostgreSQL", "SQLite"]
    },
    {
      title: "AI / Machine Learning",
      icon: <Cpu className="w-4 h-4 text-[#E11D48]" />,
      description: "Designing semantic architectures, custom agent prompts, and model pipelines.",
      skills: ["Gemini API", "OpenAI API", "RAG", "Prompt Engineering", "TensorFlow", "OpenCV"]
    },
    {
      title: "Developer Tools",
      icon: <Sliders className="w-4 h-4 text-[#06B6D4]" />,
      description: "Version control, system commands, automation, and diagnostic toolchains.",
      skills: ["Git", "GitHub", "Linux", "Postman"]
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
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="tech-stack" className="py-28 relative overflow-hidden bg-[#09090B] border-t border-[#262626]">
      {/* Background decoration */}
      <div className="absolute top-[40%] right-[10%] w-[300px] h-[300px] bg-indigo-500/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-xs font-mono text-[#71717A] uppercase tracking-widest">03 / Capabilities</span>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mt-2 font-sans">
            Technical Stack
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-[#4F46E5] to-[#8B5CF6] mt-4 rounded-full" />
        </div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {categories.map((cat, idx) => (
            <motion.div
              variants={itemVariants}
              key={idx}
              className="premium-card p-6 flex flex-col justify-between"
            >
              {/* Terminal Window Header Decoration */}
              <div className="flex items-center justify-between border-b border-[#262626] pb-4 mb-4">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-white/10" />
                  <span className="w-2 h-2 rounded-full bg-white/10" />
                  <span className="w-2 h-2 rounded-full bg-white/10" />
                </div>
                <span className="text-[10px] font-mono text-[#71717A]">stack_module.sh</span>
              </div>

              <div className="space-y-4">
                {/* Category Title & Icon */}
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-[#111113] border border-[#262626] flex items-center justify-center">
                    {cat.icon}
                  </div>
                  <h3 className="text-sm font-bold tracking-wider font-mono text-white uppercase">
                    {cat.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-xs text-[#A1A1AA] leading-relaxed font-sans">
                  {cat.description}
                </p>

                {/* Skills Badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-xs font-mono px-2.5 py-1.5 rounded-lg bg-[#09090B] border border-[#262626] text-[#A1A1AA] hover:text-white hover:border-[#8B5CF6]/50 transition-colors cursor-default"
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
