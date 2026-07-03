"use client";

import { motion, Variants } from "framer-motion";
import { ArrowUpRight, FileText, Sparkles, MapPin } from "lucide-react";
import { Github } from "@/components/Icons";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden"
    >
      {/* Background patterns */}
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="absolute inset-0 gradient-glow pointer-events-none" />

      {/* Floating abstract aura shape */}
      <div className="absolute top-[30%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[500px] h-[300px] bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10 py-16">
        
        {/* Text Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col items-start space-y-6 text-left"
        >
          {/* Status Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-[#0d0d0f]/80 text-zinc-400 text-xs shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-indigo-400 animate-pulse" />
            <span>Open to SWE &amp; PM Roles</span>
          </motion.div>

          {/* Name & Title */}
          <div className="space-y-2">
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-6xl font-bold tracking-tight bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent font-sans"
            >
              Abhiman Singh Saharan
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg font-mono text-zinc-400 tracking-wide"
            >
              Software Engineer • AI Engineer • Aspiring Product Manager
            </motion.p>
          </div>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl font-medium text-zinc-300 leading-relaxed max-w-xl"
          >
            Building products where <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent font-semibold">AI meets scalable software</span>. Focused on taking intelligent applications from idea to deployment.
          </motion.p>

          {/* Location / Status */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-2 text-zinc-500 text-xs font-mono"
          >
            <MapPin className="w-3.5 h-3.5 text-zinc-600" />
            <span>Greater Noida, India</span>
            <span className="w-1 h-1 rounded-full bg-zinc-800" />
            <span>Final Year CS Student @ Bennett University</span>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-4 w-full pt-2"
          >
            {/* Primary CTA */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 justify-center px-6 h-11 rounded-lg bg-zinc-100 text-[#09090b] text-sm font-semibold hover:bg-white active:scale-95 transition-all shadow-lg"
            >
              <span>Get in touch</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            {/* Secondary CTA - GitHub */}
            <a
              href="https://github.com/Abhiman74"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 justify-center px-5 h-11 rounded-lg border border-zinc-800 bg-[#0d0d0f]/60 text-zinc-300 text-sm font-medium hover:bg-zinc-800/40 hover:text-white active:scale-95 transition-all"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>

            {/* Resume Button */}
            <button
              onClick={() => alert("Resume file download triggered (Placeholder)")}
              className="inline-flex items-center gap-2 justify-center px-5 h-11 rounded-lg border border-zinc-800 bg-[#0d0d0f]/60 text-zinc-300 text-sm font-medium hover:bg-zinc-800/40 hover:text-white active:scale-95 transition-all"
            >
              <FileText className="w-4 h-4" />
              <span>Resume</span>
            </button>
          </motion.div>
        </motion.div>

        {/* Visual Showcase (Mock code / RAG visual) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 hidden lg:block"
        >
          <div className="glow-card border border-zinc-800 bg-[#0d0d0f]/90 rounded-xl overflow-hidden shadow-2xl backdrop-blur-sm">
            {/* Header controls */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-900 bg-zinc-950/50">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
              </div>
              <span className="text-[10px] font-mono text-zinc-500">interview_ai_rag.py</span>
            </div>

            {/* Code Content */}
            <pre className="p-5 font-mono text-[11px] text-zinc-400 leading-6 overflow-x-auto">
              <code>
                <span className="text-zinc-500"># Initializing RAG Pipeline for InterviewIQ</span>{"\n"}
                <span className="text-purple-400">from</span> openai <span className="text-purple-400">import</span> OpenAI{"\n"}
                <span className="text-purple-400">from</span> pgvector <span className="text-purple-400">import</span> VectorStore{"\n"}
                {"\n"}
                <span className="text-blue-400">def</span> <span className="text-emerald-400">generate_interview_questions</span>(resume_path, jd):{"\n"}
                {"  "}db = VectorStore(conn_str=POSTGRES_URL){"\n"}
                {"  "}embeddings = OpenAI().embeddings.create(input=[jd]){"\n"}
                {"  "}context = db.similarity_search(embeddings[<span className="text-orange-400">0</span>]){"\n"}
                {"  "}{"\n"}
                {"  "}prompt = f<span className="text-amber-500">&quot;Analyze resume against context: {"{"}context{"}"}&quot;</span>{"\n"}
                {"  "}response = OpenAI().chat.completions.create({"\n"}
                {"    "}model=<span className="text-amber-500">&quot;gpt-4o&quot;</span>,{"\n"}
                {"    "}messages=[{"{"}{"\n"}
                {"      "}<span className="text-amber-500">&quot;role&quot;</span>: <span className="text-amber-500">&quot;user&quot;</span>,{"\n"}
                {"      "}<span className="text-amber-500">&quot;content&quot;</span>: prompt{"\n"}
                {"    "}{"}"}]{"\n"}
                {"  "}){"\n"}
                {"  "}<span className="text-purple-400">return</span> response.choices[<span className="text-orange-400">0</span>].message{"\n"}
              </code>
            </pre>

            {/* Visual indicator of API processing */}
            <div className="px-5 py-3 border-t border-zinc-900 bg-zinc-950/30 flex items-center justify-between text-[10px] text-zinc-500 font-mono">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                Active Connection
              </span>
              <span className="text-indigo-400">Gemini RAG System v1.2</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Subtle Bottom scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-50">
        <span className="text-[10px] font-mono text-zinc-500 tracking-widest uppercase">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-1 h-3 rounded-full bg-zinc-600"
        />
      </div>
    </section>
  );
}
