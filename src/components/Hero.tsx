"use client";

import { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import { ArrowUpRight, FileText, Sparkles, MapPin } from "lucide-react";
import { Github } from "@/components/Icons";

const CODE_SNIPPET = `# RAG Pipeline for InterviewIQ
from openai import OpenAI
from pgvector import VectorStore

def generate_questions(resume, jd):
    db = VectorStore(conn_str=POSTGRES_URL)
    embeds = OpenAI().embeddings.create(input=[jd])
    context = db.similarity_search(embeds[0])
    
    prompt = f"Analyze resume: {resume} against context"
    response = OpenAI().chat.completions.create(
        model="gpt-4o",
        messages=[{"role": "user", "content": prompt}]
    )
    return response.choices[0].message`;

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < CODE_SNIPPET.length) {
      const timeout = setTimeout(() => {
        setTypedText((prev) => prev + CODE_SNIPPET[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 15);
      return () => clearTimeout(timeout);
    } else {
      // Loop coding effect after 5 seconds of pause
      const timeout = setTimeout(() => {
        setTypedText("");
        setCharIndex(0);
      }, 5000);
      return () => clearTimeout(timeout);
    }
  }, [charIndex]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  // Helper to colorize Python code inside the text area
  const highlightCode = (code: string) => {
    // Simple custom regex syntax highlighter for Python
    return code.split(/(\s+)/).map((part, i) => {
      if (part.startsWith("#")) {
        return <span key={i} className="code-comment">{part}</span>;
      }
      if (["def", "from", "import", "return", "class", "as"].includes(part)) {
        return <span key={i} className="code-keyword font-semibold">{part}</span>;
      }
      if (part.match(/^[a-zA-Z0-9_]+\(/)) {
        const funcName = part.slice(0, -1);
        return <span key={i}><span className="code-function">{funcName}</span>(</span>;
      }
      if (part.startsWith('"') || part.startsWith("'") || part.startsWith("f\"") || part.startsWith("f'")) {
        return <span key={i} className="code-string">{part}</span>;
      }
      if (part.match(/^\d+$/)) {
        return <span key={i} className="code-number">{part}</span>;
      }
      if (["=", "+", "-", "*", "/", "[", "]", "{", "}"].includes(part)) {
        return <span key={i} className="code-operator">{part}</span>;
      }
      return <span key={i} className="code-variable">{part}</span>;
    });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[95vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#09090B]"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

      {/* Futuristic Floating Aura Shapes */}
      <div className="absolute top-[20%] left-[20%] w-[350px] h-[350px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-[20%] right-[20%] w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse duration-4000" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center z-10">
        
        {/* Left Column: Text Information */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col items-start space-y-6 text-left"
        >
          {/* Status Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#262626] bg-[#111113] text-[#A1A1AA] text-xs font-mono shadow-md select-none"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#8B5CF6] animate-pulse" />
            <span>Open to Software Engineering &amp; Product Management Opportunities</span>
          </motion.div>

          {/* Heading */}
          <div className="space-y-3">
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-7xl lg:text-[76px] font-extrabold tracking-tight text-white leading-[1.05] font-sans"
            >
              Hi, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#8B5CF6]">
                Abhiman Singh Saharan
              </span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg font-mono text-[#A1A1AA] tracking-wide"
            >
              Software Engineer • AI Engineer • Aspiring Product Manager
            </motion.p>
          </div>

          {/* Tagline / Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-[19px] text-[#A1A1AA] leading-relaxed max-w-2xl font-sans"
          >
            Building intelligent software where <span className="highlight-text">AI</span> meets <span className="highlight-text">Scalable Software</span>. I enjoy creating <span className="highlight-text">Full Stack</span> platforms, <span className="highlight-text">Distributed Systems</span>, <span className="highlight-text">LLMs</span> integrations, <span className="highlight-text">Backend Engineering</span>, <span className="highlight-text">Product Thinking</span>, and optimizing <span className="highlight-text">Prompt Engineering</span>.
          </motion.p>

          {/* Location & Education Info */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[#71717A] text-xs font-mono border-t border-[#262626] pt-4 w-full"
          >
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#71717A]" />
              Greater Noida, India
            </span>
            <span className="flex items-center gap-1.5">
              <span>🎓</span>
              Bennett University
            </span>
          </motion.div>

          {/* Action CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-4 w-full pt-2"
          >
            {/* Primary CTA */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 justify-center px-6 h-12 rounded-lg bg-gradient-to-r from-[#4F46E5] to-[#8B5CF6] text-white text-sm font-semibold font-mono hover:opacity-95 active:scale-95 transition-all shadow-lg shadow-indigo-600/10 cursor-pointer"
            >
              <span>Get In Touch</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            {/* Secondary CTA: GitHub */}
            <a
              href="https://github.com/Abhiman74"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 justify-center px-5 h-12 rounded-lg border border-[#262626] bg-[#111113] text-[#A1A1AA] hover:text-white text-sm font-semibold font-mono hover:bg-white/5 active:scale-95 transition-all"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>

            {/* Resume Button */}
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 justify-center px-5 h-12 rounded-lg border border-[#262626] bg-[#111113] text-[#A1A1AA] hover:text-white text-sm font-semibold font-mono hover:bg-white/5 active:scale-95 transition-all cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>Resume</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column: Code Editor Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 hidden lg:block"
        >
          <div className="relative group">
            {/* Subtle glow border effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#4F46E5] to-[#8B5CF6] rounded-xl blur-md opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200" />
            
            <div className="relative border border-[#262626] bg-[#111113] rounded-xl overflow-hidden shadow-2xl backdrop-blur-sm">
              {/* Header bar controls */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-[#262626] bg-[#111113]">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E11D48] opacity-80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#D97706] opacity-80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#059669] opacity-80" />
                </div>
                <span className="text-[10px] font-mono text-[#71717A]">interviewiq_eval.py</span>
              </div>

              {/* Code Editor Body */}
              <div className="p-5 font-mono text-[11px] leading-relaxed overflow-x-auto min-h-[280px]">
                <div className="flex gap-4">
                  {/* Line numbers */}
                  <div className="text-[#71717A] text-right select-none flex flex-col">
                    {Array.from({ length: 15 }).map((_, i) => (
                      <span key={i} className="text-xxs">{i + 1}</span>
                    ))}
                  </div>
                  {/* Typed code */}
                  <pre className="text-left whitespace-pre">
                    <code>
                      {highlightCode(typedText)}
                      <span className="w-1.5 h-3.5 bg-indigo-500 inline-block animate-pulse ml-0.5" />
                    </code>
                  </pre>
                </div>
              </div>

              {/* Connection Status Bar */}
              <div className="px-5 py-3 border-t border-[#262626] bg-[#09090B]/50 flex items-center justify-between text-[10px] text-[#A1A1AA] font-mono">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-ping" />
                  <span>Active Connection</span>
                </span>
                <span className="text-[#8B5CF6] font-semibold">Gemini RAG System v1.5</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
