"use client";

import { motion, Variants } from "framer-motion";
import { GraduationCap, Award, Calendar, BookOpen } from "lucide-react";

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
    <section id="about" className="py-24 relative overflow-hidden bg-black/20">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">01 / Profile</span>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white mt-2">
            About Me
          </h2>
          <div className="h-0.5 w-12 bg-gradient-to-r from-blue-500 to-purple-500 mt-4 rounded" />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12"
        >
          {/* Left Side: Bio */}
          <motion.div variants={itemVariants} className="md:col-span-7 space-y-6">
            <h3 className="text-lg sm:text-xl font-medium text-zinc-200">
              Building intelligent products at the intersection of AI, Scalable Code, and User-Centric Design.
            </h3>
            
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-sans">
              I am a software engineer passionate about building AI-powered products that solve meaningful real-world problems. My engineering approach balances technical quality with strong product thinking.
            </p>
            
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-sans">
              My technical focus spans artificial intelligence pipelines, API development, backend architecture, and developer tools. I enjoy bringing products from conceptual ideas to production deployment.
            </p>

            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-sans">
              Currently in my final year of Computer Science, preparing to join teams working on cutting-edge software engineering and product management challenges.
            </p>
          </motion.div>

          {/* Right Side: Quick Stats / Education Card */}
          <motion.div variants={itemVariants} className="md:col-span-5 space-y-6">
            {/* Education Card */}
            <div className="glow-card border border-zinc-800/80 bg-[#0d0d0f]/60 p-6 rounded-xl space-y-4">
              <div className="flex items-center gap-3">
                <GraduationCap className="w-5 h-5 text-indigo-400" />
                <h4 className="text-sm font-semibold text-zinc-200 uppercase tracking-wider font-mono">
                  Education
                </h4>
              </div>
              
              <div className="space-y-3 font-sans">
                <div>
                  <h5 className="text-sm font-medium text-zinc-100">
                    B.Tech Computer Science Engineering
                  </h5>
                  <p className="text-xs text-zinc-400 mt-0.5">Bennett University</p>
                </div>

                <div className="flex items-center justify-between text-xs text-zinc-400 border-t border-zinc-800/50 pt-3">
                  <span className="flex items-center gap-1.5 font-mono">
                    <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                    2022 – 2026
                  </span>
                  <span className="flex items-center gap-1.5 font-mono">
                    <BookOpen className="w-3.5 h-3.5 text-zinc-500" />
                    CGPA: 8.35 / 10
                  </span>
                </div>
              </div>
            </div>

            {/* Certifications Quick View */}
            <div className="glow-card border border-zinc-800/80 bg-[#0d0d0f]/60 p-6 rounded-xl space-y-4">
              <div className="flex items-center gap-3">
                <Award className="w-5 h-5 text-cyan-400" />
                <h4 className="text-sm font-semibold text-zinc-200 uppercase tracking-wider font-mono">
                  Key Certifications
                </h4>
              </div>

              <ul className="space-y-3.5 text-xs text-zinc-300 font-sans">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                  <span>Certified Ethical Hacker (CEH)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                  <span>Fundamentals of Accelerated Computing with CUDA</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                  <span>Product Management with Generative &amp; Agentic AI (BITSOM)</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
