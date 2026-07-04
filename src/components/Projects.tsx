"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Cpu, Sparkles, TrendingUp, Compass, ArrowUpRight } from "lucide-react";
import { Github } from "@/components/Icons";

interface Project {
  id: number;
  title: string;
  category: string;
  tagline: string;
  problem: string;
  solution: string;
  features: string[];
  stack: string[];
  github: string;
  demo?: string;
  graphic: React.ReactNode;
}

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const projects: Project[] = [
    {
      id: 1,
      title: "InterviewIQ",
      category: "Full-Stack",
      tagline: "AI-Powered Technical Interview Simulator",
      problem: "Traditional mock interviews are expensive, hard to schedule, and lack objective performance metrics.",
      solution: "Built a fully automated simulation platform that records speech, monitors fillers, and evaluates code inputs live via Gemini API and RAG.",
      features: [
        "AI Interview Generation",
        "Resume + Job Description RAG",
        "Monaco Code Editor integration",
        "Real-time Speech Analytics (Filler Word / WPM tracking)",
        "Interactive Analytics Dashboard"
      ],
      stack: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Prisma", "Gemini API"],
      github: "https://github.com/Abhiman74/interviewiq",
      demo: "#",
      graphic: (
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex flex-col justify-end p-6 border-b border-zinc-800">
          <div className="flex items-center gap-2 mb-2 text-indigo-400">
            <Sparkles className="w-4 h-4 animate-pulse" />
            <span className="text-[10px] font-mono tracking-widest uppercase">AI Engine Active</span>
          </div>
          <div className="text-zinc-500 font-mono text-[9px] leading-relaxed select-none overflow-hidden h-20">
            {`> const response = await gemini.generateContent(prompt);\n> SpeechRecognition.startListening();\n> fillerWordsDetected: ["uh", "like", "basically"]\n> codeEvaluationScore: 89/100`}
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: "Saarthi AI",
      category: "AI & ML",
      tagline: "Voice-First Multilingual Financial Mentor",
      problem: "Lack of financial literacy and technical accessibility excludes rural populations from modern digital banking services.",
      solution: "Developed a voice-driven conversational mentor with offline/online support for Hindi & English to assist with investments and failed transaction issues.",
      features: [
        "AI Investment Assistant",
        "Failed Transaction Diagnostic Guide",
        "Native Voice Input/Output support",
        "Dual language (Hindi + English) system"
      ],
      stack: ["Next.js", "React", "TypeScript", "TailwindCSS", "Gemini API"],
      github: "https://github.com/Abhiman74",
      demo: "#",
      graphic: (
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 flex flex-col justify-end p-6 border-b border-zinc-800">
          <div className="flex items-center gap-2 mb-2 text-blue-400">
            <Compass className="w-4 h-4 animate-pulse" />
            <span className="text-[10px] font-mono tracking-widest uppercase">Financial Inclusion Map</span>
          </div>
          <div className="flex gap-1.5 items-end justify-center h-16 w-full">
            <span className="w-1.5 h-6 bg-zinc-800 rounded-full animate-[pulse_1s_infinite_100ms]" />
            <span className="w-1.5 h-12 bg-zinc-800 rounded-full animate-[pulse_1.2s_infinite_300ms]" />
            <span className="w-1.5 h-14 bg-indigo-500/80 rounded-full animate-[pulse_0.8s_infinite_500ms]" />
            <span className="w-1.5 h-10 bg-zinc-800 rounded-full animate-[pulse_1.1s_infinite_200ms]" />
            <span className="w-1.5 h-8 bg-zinc-800 rounded-full animate-[pulse_0.9s_infinite_400ms]" />
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: "QuantAI Trader",
      category: "AI & ML",
      tagline: "LSTM-Powered Stock Forecasting & Analysis Platform",
      problem: "Retail traders lack access to institutional liquidity insights and predictive modeling algorithms.",
      solution: "Created an analytical system that tracks market structure dynamics, estimates institutional liquidity, and forecasts price via LSTM neural nets.",
      features: [
        "Market Structure Analysis (Break of Structure / Choch)",
        "LSTM Time-Series Price Forecasting",
        "Portfolio Allocation Tracking",
        "FastAPI Backend & Streamlit Presentation Layer"
      ],
      stack: ["FastAPI", "Python", "SQLite", "Streamlit", "TensorFlow"],
      github: "https://github.com/Abhiman74",
      demo: "#",
      graphic: (
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 flex flex-col justify-end p-6 border-b border-zinc-800">
          <div className="flex items-center gap-2 mb-2 text-emerald-400">
            <TrendingUp className="w-4 h-4" />
            <span className="text-[10px] font-mono tracking-widest uppercase">LSTM Price Forecast</span>
          </div>
          <div className="w-full h-16 flex items-end">
            <svg viewBox="0 0 100 40" className="w-full h-full text-emerald-500/70">
              <path d="M0,35 Q15,25 30,28 T60,10 T90,2 T100,5" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="300" className="animate-[dash_2.5s_ease-in-out_infinite]" />
              <line x1="60" y1="0" x2="60" y2="40" stroke="rgba(255,255,255,0.05)" />
            </svg>
          </div>
        </div>
      )
    },
    {
      id: 4,
      title: "AI Traffic Light Control System",
      category: "Systems",
      tagline: "Adaptive Traffic Optimization using RL",
      problem: "Fixed-time traffic controllers generate massive idle delays and unnecessary carbon footprints in urban settings.",
      solution: "Engineered a closed-loop adaptive model that reads video frames, detects vehicle counts via OpenCV, and schedules lights via Q-Learning.",
      features: [
        "Live vehicle detection & tracking",
        "Q-Learning Reinforcement model",
        "Real-time traffic density optimization",
        "Custom desktop testing dashboard"
      ],
      stack: ["Python", "OpenCV", "Reinforcement Learning", "Q-Learning"],
      github: "https://github.com/Abhiman74",
      graphic: (
        <div className="absolute inset-0 bg-gradient-to-br from-rose-500/20 to-amber-500/20 flex flex-col justify-end p-6 border-b border-zinc-800">
          <div className="flex items-center gap-2 mb-2 text-rose-400">
            <Cpu className="w-4 h-4" />
            <span className="text-[10px] font-mono tracking-widest uppercase">RL Grid Optimizer</span>
          </div>
          <div className="grid grid-cols-3 gap-1 w-20 mx-auto mb-2 opacity-50">
            <div className="w-5 h-5 border border-zinc-800 bg-rose-500/40 rounded-sm" />
            <div className="w-5 h-5 border border-zinc-800 bg-zinc-900 rounded-sm" />
            <div className="w-5 h-5 border border-zinc-800 bg-emerald-500/40 rounded-sm" />
          </div>
        </div>
      )
    },
    {
      id: 5,
      title: "TradeFlow",
      category: "Systems",
      tagline: "Institutional-Grade Electronic Trading Platform",
      problem: "Standard retail platforms struggle with microsecond matching performance and fail to provide standard FIX endpoints.",
      solution: "Engineered a distributed platform with a FIX 4.4 gateway, synchronous pre-trade risk engine, and ultra-low-latency in-memory book matching under 500ns.",
      features: [
        "Multi-session FIX 4.4 Protocol Gateway (TCP)",
        "In-Memory Matching Engine (<500ns execution latency)",
        "Symbol Routing over Redis Pub/Sub heartbeats",
        "Write Pipeline offloaded to Apache Kafka",
        "GBM price simulation via Node.js Worker Threads"
      ],
      stack: ["Next.js 15", "Node.js", "TypeScript", "Redis", "Apache Kafka", "PostgreSQL", "Prisma"],
      github: "https://github.com/Abhiman74/tradeflow",
      demo: "#",
      graphic: (
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 flex flex-col justify-end p-6 border-b border-zinc-800">
          <div className="flex items-center gap-2 mb-2 text-cyan-400">
            <Cpu className="w-4 h-4" />
            <span className="text-[10px] font-mono tracking-widest uppercase">Matching Latency: 240ns</span>
          </div>
          <div className="text-zinc-500 font-mono text-[9px] leading-relaxed select-none overflow-hidden h-20">
            {`> [FIX 4.4] TCP Connection Client -> Port 9878\n> NewOrderSingle 35=D (AAPL, BUY, 100, LIMIT)\n> Risk Engine: APPROVED\n> Match result: FILLED (Order matched in 240ns)\n> Kafka: Publish tradeflow.audit`}
          </div>
        </div>
      )
    }
  ];

  const categories = ["All", "AI & ML", "Full-Stack", "Systems"];

  const filteredProjects = projects.filter(
    (p) => filter === "All" || p.category === filter
  );

  return (
    <section id="projects" className="py-24 relative bg-black/40 border-y border-zinc-900">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">02 / Portfolio</span>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white mt-2">
              Featured Projects
            </h2>
            <div className="h-0.5 w-12 bg-gradient-to-r from-blue-500 to-purple-500 mt-4 rounded" />
          </div>
          
          {/* Category Filter */}
          <div className="flex flex-wrap items-center gap-2 mt-6 md:mt-0 bg-[#0d0d0f]/90 border border-zinc-800/80 p-1.5 rounded-lg">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3.5 py-1.5 rounded-md text-xs font-medium transition-all ${
                  filter === cat
                    ? "bg-zinc-800 text-white shadow-sm"
                    : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                key={project.id}
                className="glow-card glow-card-hover border border-zinc-800/80 bg-[#0d0d0f]/70 rounded-xl overflow-hidden shadow-xl flex flex-col justify-between group h-full"
              >
                {/* Visual Graphics Header */}
                <div className="relative h-44 w-full bg-zinc-950 overflow-hidden">
                  {project.graphic}
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    {/* Header: Title / Category */}
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-zinc-100 group-hover:text-white transition-colors">
                        {project.title}
                      </h3>
                      <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded border border-zinc-800 bg-zinc-900/60 text-zinc-400">
                        {project.category}
                      </span>
                    </div>

                    {/* Tagline */}
                    <p className="text-xs font-medium font-mono text-zinc-400">
                      {project.tagline}
                    </p>

                    {/* Problem / Solution */}
                    <div className="space-y-2 text-xs text-zinc-400">
                      <div>
                        <strong className="text-zinc-500 font-mono text-[10px] tracking-wider uppercase block">Problem:</strong>
                        <p>{project.problem}</p>
                      </div>
                      <div>
                        <strong className="text-zinc-500 font-mono text-[10px] tracking-wider uppercase block">Solution:</strong>
                        <p>{project.solution}</p>
                      </div>
                    </div>

                    {/* Bullet Features */}
                    <div className="pt-2">
                      <strong className="text-zinc-500 font-mono text-[10px] tracking-wider uppercase block mb-1.5">Key Capabilities:</strong>
                      <ul className="space-y-1 text-xs text-zinc-300">
                        {project.features.map((feat, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="w-1 h-1 rounded-full bg-indigo-500 mt-2 shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Tech stack & Action bar */}
                  <div className="mt-6 pt-5 border-t border-zinc-900 space-y-4">
                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.stack.map((t) => (
                        <span
                          key={t}
                          className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-500 font-semibold"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* CTA Links */}
                    <div className="flex items-center gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white transition-colors"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Source Code</span>
                      </a>
                      
                      {project.demo && (
                        <a
                          href={project.demo}
                          className="inline-flex items-center gap-1 text-xs text-zinc-400 hover:text-white transition-colors ml-auto"
                        >
                          <span>Live Demo</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
