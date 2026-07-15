"use client";

import { motion, Variants } from "framer-motion";
import { GraduationCap, Award, Calendar, BookOpen, Sparkles, CheckCircle2 } from "lucide-react";

export default function About() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
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
    <section id="about" className="py-28 relative overflow-hidden bg-[#09090B] border-t border-[#262626]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-xs font-mono text-[#71717A] uppercase tracking-widest">01 / Profile</span>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mt-2 font-sans">
            About Me
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-[#4F46E5] to-[#8B5CF6] mt-4 rounded-full" />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
        >
          {/* Left Side: Bio */}
          <motion.div variants={itemVariants} className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-sans leading-tight">
              Engineering high-performance applications with product thinking.
            </h3>
            
            <p className="text-lg text-[#A1A1AA] leading-relaxed font-sans">
              I'm a Software Engineering student passionate about <span className="highlight-text">AI Engineering</span>, <span className="highlight-text">Backend Development</span>, developer tools, and building products that solve meaningful real-world problems. I enjoy turning ideas into scalable software while combining engineering excellence with <span className="highlight-text">Product Management</span> frameworks.
            </p>
            
            <p className="text-base text-[#71717A] leading-relaxed font-sans">
              Focusing heavily on optimizing <span className="highlight-text">Developer Experience</span>, building <span className="highlight-text">Distributed Systems</span>, and applying structured <span className="highlight-text">Problem Solving</span> to latency-critical services. I aim to create AI applications that are robust, responsive, and beautifully designed.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl border border-[#262626] bg-[#111113]/50">
                <span className="text-[10px] font-mono text-[#8B5CF6] uppercase tracking-wider block mb-1">Passions</span>
                <span className="text-sm font-semibold text-white font-sans">GenAI &amp; Backend</span>
              </div>
              <div className="p-4 rounded-xl border border-[#262626] bg-[#111113]/50">
                <span className="text-[10px] font-mono text-[#8B5CF6] uppercase tracking-wider block mb-1">Strengths</span>
                <span className="text-sm font-semibold text-white font-sans">Product Engineering</span>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Education & Certifications */}
          <motion.div variants={itemVariants} className="lg:col-span-5 space-y-6">
            {/* Education Card */}
            <div className="border border-[#262626] bg-[#111113] p-6 rounded-2xl space-y-4 shadow-xl">
              <div className="flex items-center gap-3">
                <GraduationCap className="w-5 h-5 text-[#4F46E5]" />
                <h4 className="text-xs font-semibold text-white uppercase tracking-wider font-mono">
                  Education
                </h4>
              </div>
              
              <div className="space-y-4 font-sans">
                {/* Bennett University */}
                <div className="space-y-2">
                  <div>
                    <h5 className="text-base font-semibold text-white">
                      B.Tech Computer Science Engineering
                    </h5>
                    <p className="text-xs text-[#A1A1AA] mt-0.5">Bennett University</p>
                  </div>
                  <div className="flex items-center justify-between text-xs font-mono text-[#71717A]">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      2023 – 2027
                    </span>
                    <span className="flex items-center gap-1.5 font-bold text-white">
                      <BookOpen className="w-3.5 h-3.5 text-[#4F46E5]" />
                      CGPA: 8.35 / 10
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications Card */}
            <div className="border border-[#262626] bg-[#111113] p-6 rounded-2xl space-y-4 shadow-xl">
              <div className="flex items-center gap-3">
                <Award className="w-5 h-5 text-[#8B5CF6]" />
                <h4 className="text-xs font-semibold text-white uppercase tracking-wider font-mono">
                  Certifications
                </h4>
              </div>

              <ul className="space-y-3.5 text-xs text-[#A1A1AA] font-mono">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] mt-0.5 shrink-0" />
                  <span>Certified Ethical Hacker (CEH) – EC-Council</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] mt-0.5 shrink-0" />
                  <span>CUDA Fundamentals – Accelerated Computing</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] mt-0.5 shrink-0" />
                  <span>BITSOM Product Management (GenAI &amp; Agentic AI)</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
