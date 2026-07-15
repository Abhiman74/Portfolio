"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Cpu, Sparkles, TrendingUp, Compass, ArrowUpRight, X, Layers, AlertTriangle, Lightbulb, GitFork } from "lucide-react";
import { Github } from "@/components/Icons";

interface Project {
  id: number;
  title: string;
  category: string;
  isFeatured?: boolean;
  tagline: string;
  problem: string;
  solution: string;
  features: string[];
  stack: string[];
  github: string;
  demo?: string;
  graphic: React.ReactNode;
  
  // Detailed popup contents
  architecture?: string;
  challenges?: string;
  learnings?: string;
  improvements?: string;
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "InterviewIQ",
      category: "AI-Powered Technical Interview Platform",
      isFeatured: true,
      tagline: "Adaptive Interview Preparation and Real-time Analytics",
      problem: "Traditional technical interview preparation platforms focus on static coding challenges and fail to replicate real-world interview conditions, feedback on pacing, and speech habits.",
      solution: "InterviewIQ is a fully automated technical mock interview platform. By uploading a resume and job description, it generates custom questions, checks Monaco editor code entries, and monitors speech pacing, filler words, and explanations.",
      features: [
        "AI Interview Generation",
        "Resume + Job Description RAG",
        "Monaco Code Editor integration",
        "Speech Analytics (WPM tracking & filler word analysis)",
        "Filler Word Detection & interactive metrics dashboard"
      ],
      stack: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Prisma ORM", "Gemini API", "Web Speech API"],
      github: "https://github.com/Abhiman74/interviewiq",
      demo: "#",
      graphic: (
        <div className="absolute inset-0 bg-[#111113] flex flex-col justify-end p-6 border-b border-[#262626]">
          <div className="flex items-center gap-2 mb-2 text-[#8B5CF6]">
            <Sparkles className="w-4 h-4 animate-pulse" />
            <span className="text-[10px] font-mono tracking-widest uppercase">AI Engine Active</span>
          </div>
          <div className="text-[#A1A1AA] font-mono text-[9px] leading-relaxed select-none overflow-hidden h-20">
            {`> const response = await gemini.generateContent(prompt);\n> SpeechRecognition.startListening();\n> fillerWordsDetected: ["uh", "like", "basically"]\n> codeEvaluationScore: 89/100`}
          </div>
        </div>
      ),
      architecture: `
      +------------------+     +-------------------+
      |   User Upload    | --> | Resume + JD RAG   |
      +------------------+     +-------------------+
                                         |
                                         v
      +------------------+     +-------------------+
      | Monaco Editor    | <-- | Adaptive AI Gen   |
      +------------------+     +-------------------+
                |                        |
                v                        v
      +------------------+     +-------------------+
      | Speech Analytics | --> | Performance Graph |
      +------------------+     +-------------------+
      `,
      challenges: "Synchronizing real-time Web Speech API audio stream capture with frontend syntax checks inside the Monaco Editor, while maintaining responsive UI threads without layout lag.",
      learnings: "Deepened knowledge in prompt structure design (RAG frameworks) and custom state management patterns in React to track sub-second speech feedback variables cleanly.",
      improvements: "Plan to integrate multimodal video analysis to evaluate facial expressions and body language cues, creating a full virtual interviewer simulation."
    },
    {
      id: 2,
      title: "Saarthi AI",
      category: "Conversational Financial Assistant",
      tagline: "Voice-driven financial rescuing & bilingual guidance",
      problem: "Millions of non-English speakers face systemic financial exclusion due to complex banking terms and steep digital product interfaces.",
      solution: "Developed an assistant to recover failed transactions, explain terms, and provide tailored investment tips using Hindi + English voice processing.",
      features: [
        "Financial Inclusion & Literacy Assistant",
        "Failed Transaction Diagnostic Guide",
        "Investment Guidance & Bilingual Conversational flow",
        "Voice Input / Output (Hindi + English)"
      ],
      stack: ["Next.js", "React", "TypeScript", "Tailwind", "Gemini API"],
      github: "https://github.com/Abhiman74",
      demo: "#",
      graphic: (
        <div className="absolute inset-0 bg-[#111113] flex flex-col justify-end p-6 border-b border-[#262626]">
          <div className="flex items-center gap-2 mb-2 text-[#4F46E5]">
            <Compass className="w-4 h-4 animate-pulse" />
            <span className="text-[10px] font-mono tracking-widest uppercase">Multilingual NLP Active</span>
          </div>
          <div className="flex gap-1.5 items-end justify-center h-16 w-full">
            <span className="w-1.5 h-6 bg-white/20 rounded-full animate-[pulse_1s_infinite_100ms]" />
            <span className="w-1.5 h-12 bg-white/20 rounded-full animate-[pulse_1.2s_infinite_300ms]" />
            <span className="w-1.5 h-14 bg-[#4F46E5] rounded-full animate-[pulse_0.8s_infinite_500ms]" />
            <span className="w-1.5 h-10 bg-white/20 rounded-full animate-[pulse_1.1s_infinite_200ms]" />
            <span className="w-1.5 h-8 bg-white/20 rounded-full animate-[pulse_0.9s_infinite_400ms]" />
          </div>
        </div>
      ),
      architecture: `
      +------------------+
      | Voice Input (HI) |
      +------------------+
                |
                v
      +------------------+
      | Gemini API       |
      | Translate + Reasoning
      +------------------+
                |
                v
      +------------------------+
      | Audio/Visual Advice    |
      | Transaction Rescue Map |
      +------------------------+
      `,
      challenges: "Resolving specialized banking error acronyms and regional dialects to prevent LLM hallucinations during high-stakes transaction failure diagnostic paths.",
      learnings: "Mastered building highly optimized system prompts and system guidance models to produce consistent structured JSON responses from the Gemini API.",
      improvements: "Intending to expand support to more regional Indian languages and link to actual mock banking transaction APIs to provide real-time transaction correction."
    },
    {
      id: 3,
      title: "QuantAI Trader",
      category: "AI Stock Analysis Platform",
      tagline: "LSTM Neural Nets & Volume Structure Tracking",
      problem: "Retail traders lack programmatic, institutional-grade tools to verify liquidity sweeps, analyze institutional zones, and forecast stock trends.",
      solution: "Created an analytical system that forecasts prices via LSTM neural nets, estimates market structure (BOS/CHoCH), and charts portfolio distributions.",
      features: [
        "LSTM Time-Series Forecasting",
        "Portfolio Tracking & allocation audits",
        "Institutional Zone detection (Orderblocks)",
        "Market Structure mapping"
      ],
      stack: ["FastAPI", "Python", "Streamlit", "SQLite", "TensorFlow", "OpenCV"],
      github: "https://github.com/Abhiman74",
      demo: "#",
      graphic: (
        <div className="absolute inset-0 bg-[#111113] flex flex-col justify-end p-6 border-b border-[#262626]">
          <div className="flex items-center gap-2 mb-2 text-[#10B981]">
            <TrendingUp className="w-4 h-4" />
            <span className="text-[10px] font-mono tracking-widest uppercase">LSTM Price Pipeline</span>
          </div>
          <div className="w-full h-16 flex items-end">
            <svg viewBox="0 0 100 40" className="w-full h-full text-[#10B981]/70">
              <path d="M0,35 Q15,25 30,28 T60,10 T90,2 T100,5" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="300" className="animate-[dash_2.5s_ease-in-out_infinite]" />
              <line x1="60" y1="0" x2="60" y2="40" stroke="rgba(255,255,255,0.05)" />
            </svg>
          </div>
        </div>
      ),
      architecture: `
      +--------------------+     +-------------------+
      | Live Market Feed   | --> | LSTM Price Engine |
      +--------------------+     +-------------------+
                                           |
                                           v
      +--------------------+     +-------------------+
      | Streamlit UI       | <-- | Liquidity Finder  |
      +--------------------+     +-------------------+
      `,
      challenges: "Minimizing overfitting in long-term stock predictions during highly volatile earnings events or unexpected macroeconomic announcements.",
      learnings: "Gained significant experience in scaling Python matrix calculations, cleaning financial time-series data, and training ML models in TensorFlow.",
      improvements: "Plan to integrate sentiment analysis pipelines tracking real-time finance news streams and social feeds (Twitter/Reddit)."
    },
    {
      id: 4,
      title: "AI Traffic Light Control",
      category: "Adaptive Traffic Optimization",
      tagline: "Reinforcement Learning & CV Vehicle Density Scheduling",
      problem: "Traditional traffic control grids operate on static schedules, resulting in traffic congestion, unnecessary idle fuel burn, and delays.",
      solution: "Engineered a closed-loop simulation that counts cars via computer vision and schedules light phases using Q-learning algorithms.",
      features: [
        "Computer Vision vehicle detection",
        "Q-Learning scheduling reinforcement agent",
        "Density calculation",
        "Simulation environment"
      ],
      stack: ["Python", "OpenCV", "Reinforcement Learning", "Q-Learning"],
      github: "https://github.com/Abhiman74",
      graphic: (
        <div className="absolute inset-0 bg-[#111113] flex flex-col justify-end p-6 border-b border-[#262626]">
          <div className="flex items-center gap-2 mb-2 text-[#F59E0B]">
            <Cpu className="w-4 h-4" />
            <span className="text-[10px] font-mono tracking-widest uppercase">RL Grid Optimizer</span>
          </div>
          <div className="grid grid-cols-3 gap-1 w-20 mx-auto mb-2 opacity-60">
            <div className="w-5 h-5 border border-[#262626] bg-[#E11D48]/40 rounded-sm" />
            <div className="w-5 h-5 border border-[#262626] bg-white/5 rounded-sm" />
            <div className="w-5 h-5 border border-[#262626] bg-[#059669]/40 rounded-sm" />
          </div>
        </div>
      ),
      architecture: `
      +--------------------+
      | Video Stream Feed  |
      +--------------------+
                |
                v
      +--------------------+
      | OpenCV Car Count   |
      +--------------------+
                |
                v
      +--------------------+
      | Q-Learning Solver  |
      | Optimal Phase Switch
      +--------------------+
      `,
      challenges: "Ensuring frame processing speeds remain high (30fps+) on consumer hardware while running the reinforcement learning optimization cycles simultaneously.",
      learnings: "Learned how to map visual bounding boxes to numeric mathematical states, design custom rewards, and implement Q-Learning tables from scratch.",
      improvements: "Hope to transition to deep reinforcement learning (DQN) models capable of controlling multiple intersection grids at once."
    }
  ];

  return (
    <section id="projects" className="py-28 relative bg-[#09090B] border-t border-[#262626]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-xs font-mono text-[#71717A] uppercase tracking-widest">02 / Portfolio</span>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mt-2 font-sans">
            Featured Projects
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-[#4F46E5] to-[#8B5CF6] mt-4 rounded-full" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="premium-card flex flex-col justify-between group h-full cursor-pointer select-none"
            >
              {/* Visual Graphic Header */}
              <div className="relative h-44 w-full bg-[#111113] overflow-hidden">
                {project.graphic}
                {project.isFeatured && (
                  <span className="absolute top-4 right-4 text-[9px] font-mono px-2.5 py-0.5 rounded-full border border-indigo-500/30 bg-indigo-950/20 text-[#8B5CF6] font-bold">
                    Featured
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div className="space-y-4">
                  {/* Title / Category */}
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-[#8B5CF6] transition-colors font-sans">
                      {project.title}
                    </h3>
                  </div>

                  <span className="inline-block text-[10px] font-mono font-medium px-2 py-0.5 rounded border border-[#262626] bg-[#111113] text-[#A1A1AA]">
                    {project.category}
                  </span>

                  <p className="text-sm text-[#A1A1AA] leading-relaxed font-sans">
                    {project.solution}
                  </p>
                </div>

                {/* Tech stack & Action bar */}
                <div className="mt-6 pt-5 border-t border-[#262626] space-y-4">
                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((t) => (
                      <span
                        key={t}
                        className="text-[9px] font-mono px-2.5 py-0.5 rounded-full bg-[#111113] border border-[#262626] text-[#71717A] font-semibold"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Trigger Detail Action */}
                  <div className="flex items-center gap-1 text-[11px] font-mono text-[#8B5CF6] font-semibold group-hover:translate-x-1 transition-transform">
                    <span>View Architecture &amp; Implementation Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Premium Detailed Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6">
            {/* Modal Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
            />
            
            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-3xl bg-[#111113] border border-[#262626] text-white rounded-2xl shadow-2xl p-6 md:p-8 z-10 max-h-[85vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                aria-label="Close detailed project view"
                className="absolute top-6 right-6 p-2 rounded-full border border-[#262626] bg-[#111113] hover:bg-white/5 transition-all text-[#A1A1AA] hover:text-white cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Header */}
              <div className="space-y-2 mb-6">
                <span className="text-[10px] font-mono text-[#8B5CF6] uppercase tracking-widest">Project Detail</span>
                <h3 className="text-3xl font-extrabold text-white font-sans">{selectedProject.title}</h3>
                <p className="text-xs text-[#71717A] font-mono">{selectedProject.category}</p>
              </div>

              {/* Divider */}
              <hr className="border-[#262626] mb-6" />

              {/* Tabs Container */}
              <div className="space-y-6 text-sm text-[#A1A1AA] leading-relaxed">
                
                {/* 1. Problem & Solution */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2 bg-[#09090B]/50 p-4 rounded-xl border border-[#262626]">
                    <span className="flex items-center gap-1.5 text-xs font-mono text-[#E11D48] font-bold uppercase tracking-wider">
                      <AlertTriangle className="w-3.5 h-3.5" />
                      Problem
                    </span>
                    <p className="text-xs text-[#A1A1AA]">{selectedProject.problem}</p>
                  </div>
                  <div className="space-y-2 bg-[#09090B]/50 p-4 rounded-xl border border-[#262626]">
                    <span className="flex items-center gap-1.5 text-xs font-mono text-[#10B981] font-bold uppercase tracking-wider">
                      <Lightbulb className="w-3.5 h-3.5" />
                      Solution
                    </span>
                    <p className="text-xs text-[#A1A1AA]">{selectedProject.solution}</p>
                  </div>
                </div>

                {/* 2. Key Capabilities */}
                <div className="space-y-3">
                  <span className="text-xs font-mono text-white font-bold uppercase tracking-wider block">Key Capabilities:</span>
                  <ul className="space-y-1.5 text-xs grid grid-cols-1 md:grid-cols-2 gap-x-6">
                    {selectedProject.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2 text-[#A1A1AA]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6] mt-2 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 3. Architecture & Diagrams */}
                {selectedProject.architecture && (
                  <div className="space-y-3">
                    <span className="flex items-center gap-1.5 text-xs font-mono text-white font-bold uppercase tracking-wider">
                      <Layers className="w-4 h-4 text-[#8B5CF6]" />
                      Pipeline Architecture
                    </span>
                    <pre className="p-4 bg-[#09090B] border border-[#262626] rounded-xl overflow-x-auto font-mono text-[10px] text-[#A1A1AA] leading-relaxed">
                      {selectedProject.architecture}
                    </pre>
                  </div>
                )}

                {/* 4. Engineering Challenges & Learnings */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                  {selectedProject.challenges && (
                    <div className="space-y-1.5">
                      <span className="text-xs font-mono text-white font-bold uppercase tracking-wider block">Technical Challenges:</span>
                      <p className="text-xs text-[#71717A]">{selectedProject.challenges}</p>
                    </div>
                  )}
                  {selectedProject.learnings && (
                    <div className="space-y-1.5">
                      <span className="text-xs font-mono text-white font-bold uppercase tracking-wider block">Key Learnings:</span>
                      <p className="text-xs text-[#71717A]">{selectedProject.learnings}</p>
                    </div>
                  )}
                </div>

                {/* 5. Future Improvements */}
                {selectedProject.improvements && (
                  <div className="space-y-1.5 border-t border-[#262626] pt-4">
                    <span className="text-xs font-mono text-white font-bold uppercase tracking-wider block">Roadmap &amp; Future Improvements:</span>
                    <p className="text-xs text-[#71717A]">{selectedProject.improvements}</p>
                  </div>
                )}

                {/* 6. Footer stack badges & links */}
                <div className="border-t border-[#262626] pt-5 mt-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1">
                    {selectedProject.stack.map((t) => (
                      <span
                        key={t}
                        className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-[#09090B] border border-[#262626] text-[#71717A]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4">
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#A1A1AA] hover:text-white hover:underline"
                    >
                      <Github className="w-4 h-4" />
                      <span>Source Code</span>
                    </a>
                    {selectedProject.demo && (
                      <a
                        href={selectedProject.demo}
                        className="inline-flex items-center gap-1 text-xs font-mono font-bold text-[#8B5CF6] hover:text-white hover:underline"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
