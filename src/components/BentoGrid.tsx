"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, Mail, Sparkles, MapPin, GraduationCap, Calendar, BookOpen, Award, Cpu, TrendingUp, Compass, ArrowUpRight, CheckCircle2, Flame, GitPullRequest, GitFork, Star, Send, AlertCircle, CheckCircle, Download, X, Briefcase, ExternalLink, Code, Phone } from "lucide-react";
import { Github, Linkedin } from "@/components/Icons";

interface BentoCard {
  id: string;
  category: "about" | "projects" | "skills" | "stats" | "experience";
  size: string; // Tailwind grid span classes
  element: React.ReactNode;
  popupContent: React.ReactNode;
}

const TechPill = ({ label }: { label: string }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case "C++":
        return (
          <span className="inline-flex items-center justify-center w-4 h-4 rounded bg-[#00599C]/10 text-[#00599C] font-bold text-[8px] font-sans">C++</span>
        );
      case "Python":
        return (
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2c-5.5 0-5 2-5 4v2h5v1H5c-2 0-3 1-3 3v5c0 2 1 3 3 3h2v-2c0-2 1.5-3 3-3h5c1.5 0 3-1 3-3v-4c0-2-.5-4-5-4H12zm0 1c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zm0 14c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z" fill="#3776AB" />
            <path d="M12 22c5.5 0 5-2 5-4v-2h-5v-1h7c2 0 3-1 3-3v-5c0-2-1-3-3-3h-2v2c0 2-1.5 3-3 3h-5c-1.5 0-3 1-3 3v4c0 2 .5 4 5 4h5zm0-1c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z" fill="#FFD43B" />
          </svg>
        );
      case "JavaScript":
        return (
          <div className="w-3.5 h-3.5 bg-[#F7DF1E] text-black rounded-sm flex items-center justify-center font-sans font-black text-[8px] select-none">JS</div>
        );
      case "TypeScript":
        return (
          <div className="w-3.5 h-3.5 bg-[#3178C6] text-white rounded-sm flex items-center justify-center font-sans font-bold text-[8px] select-none">TS</div>
        );
      case "SQL":
        return (
          <svg className="w-3.5 h-3.5 text-[var(--muted)] dark:text-[var(--metadata)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <ellipse cx="12" cy="5" rx="9" ry="3" />
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
            <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
          </svg>
        );
      case "React":
        return (
          <svg className="w-3.5 h-3.5 text-[#61DAFB] animate-[spin_10s_linear_infinite]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(0 12 12)" />
            <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
            <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
            <circle cx="12" cy="12" r="1.5" fill="currentColor" />
          </svg>
        );
      case "Next.js":
        return (
          <svg className="w-3.5 h-3.5 text-black dark:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <circle cx="12" cy="12" r="10" />
            <path d="M8 16V8l8 8V8" />
          </svg>
        );
      case "TailwindCSS":
        return (
          <svg className="w-3.5 h-3.5 text-[#06B6D4]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 .5C8.5 4 6 7.5 6 11c0 3.5 3 6.5 6.5 6.5 2.5 0 4.5-2 4.5-4.5 0-2-1.5-3.5-3.5-3.5-1 0-2 .5-2 1.5s1 1.5 1.5 1.5c1 0 1.5-.5 1.5-1 0-.6-.4-1-.8-1 .4 0 .8-.4.8-1 0-1-1-2-2.5-2C9.5 7.5 8 9.5 8 11.5s1.5 4 4.5 4 4-2 4-4.5c0-3.5-2.5-7-6.5-10.5z" />
          </svg>
        );
      case "Node.js":
        return (
          <svg className="w-3.5 h-3.5 text-[#339933]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm-1 16.5l-6-3V9l6 3v6.5zm8-3l-6 3V12l6-3v6.5z" />
          </svg>
        );
      case "Express.js":
        return (
          <div className="w-3.5 h-3.5 bg-zinc-800 text-white rounded-full flex items-center justify-center font-sans font-black text-[6px] select-none">EX</div>
        );
      case "FastAPI":
        return (
          <svg className="w-3.5 h-3.5 text-[#009688]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 9h-6l4-7-11 11h6l-4 9 11-13z" />
          </svg>
        );
      case "PostgreSQL":
        return (
          <svg className="w-3.5 h-3.5 text-[#4169E1]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2c5.5 0 9 3.5 9 8s-3.5 8-9 8-7-2-7-5.5S6.5 7 12 2zm0 12c2.5 0 4-1.5 4-4s-1.5-4-4-4-4 1.5-4 4 1.5 4 4 4z" />
          </svg>
        );
      case "SQLite":
        return (
          <svg className="w-3.5 h-3.5 text-[#003B57]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4 6h16v3H4zm0 5h16v3H4zm0 5h16v3H4z" />
          </svg>
        );
      case "Prisma ORM":
        return (
          <svg className="w-3.5 h-3.5 text-[var(--text)] dark:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M12 2L2 22h20L12 2z" />
          </svg>
        );
      case "OpenAI API":
        return (
          <svg className="w-3.5 h-3.5 text-[#10A37F]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M21.7 11.5c.3-1.1-.3-2.2-1.3-2.6-.2-.1-.4-.1-.6-.1h-1.5c0-.6-.2-1.2-.5-1.7-.5-1-1.6-1.5-2.7-1.3l-1.3.4C13.2 5.5 12.4 5 11.5 5c-1.1 0-2.2.7-2.6 1.7-.1.2-.1.4-.1.6v1.5c-.6 0-1.2.2-1.7.5-1 .5-1.5 1.6-1.3 2.7l.4 1.3C5.5 14.1 5 14.9 5 15.8c0 1.1.7 2.2 1.7 2.6.2.1.4.1.6.1h1.5c0 .6.2 1.2.5 1.7.5 1 1.6 1.5 2.7 1.3l1.3-.4c.6.7 1.4 1.2 2.3 1.2 1.1 0 2.2-.7 2.6-1.7.1-.2.1-.4.1-.6v-1.5c.6 0 1.2-.2 1.7-.5 1-.5 1.5-1.6 1.3-2.7l-.4-1.3c.7-.6 1.2-1.4 1.2-2.3z" />
          </svg>
        );
      case "Gemini API":
        return (
          <svg className="w-3.5 h-3.5 text-[var(--accent)] animate-pulse" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l2.5 7.5L22 12l-7.5 2.5L12 22l-2.5-7.5L2 12l7.5-2.5L12 2z" />
          </svg>
        );
      case "TensorFlow":
        return (
          <svg className="w-3.5 h-3.5 text-[#FF9E0F]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 3.3l7 3.5v6.4l-7 3.5-7-3.5V8.8l7-3.5z" />
          </svg>
        );
      case "OpenCV":
        return (
          <svg className="w-3.5 h-3.5 text-[#00FF00]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <circle cx="12" cy="7" r="4" stroke="red" />
            <circle cx="7" cy="15" r="4" stroke="green" />
            <circle cx="17" cy="15" r="4" stroke="blue" />
          </svg>
        );
      case "RAG":
        return (
          <svg className="w-3.5 h-3.5 text-[var(--muted)] dark:text-[var(--metadata)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        );
      case "Git":
        return (
          <svg className="w-3.5 h-3.5 text-[#F05032]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="18" cy="18" r="3" />
            <circle cx="6" cy="6" r="3" />
            <circle cx="6" cy="18" r="3" />
            <path d="M6 9v6M9 15l9-9" />
          </svg>
        );
      case "GitHub":
        return (
          <svg className="w-3.5 h-3.5 text-[var(--text)] dark:text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.5 2 2 6.5 2 12c0 4.4 2.9 8.2 6.8 9.5.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.4-1.1.6-1.3-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1 .8-.2 1.7-.3 2.5-.3.9 0 1.8.1 2.5.3 2-1.4 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.8-2.3 4.7-4.6 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5C19.1 20.2 22 16.4 22 12c0-5.5-4.5-10-10-10z" />
          </svg>
        );
      case "Linux":
        return (
          <svg className="w-3.5 h-3.5 text-[var(--text)] dark:text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zm-1 5h2v6h-2V7zm0 8h2v2h-2v-2z" />
          </svg>
        );
      case "Postman":
        return (
          <svg className="w-3.5 h-3.5 text-[#FF6C37]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 22h20L12 2zm0 4l6.5 12H5.5L12 6z" />
          </svg>
        );
      default:
        return <span className="w-2 h-2 rounded-full bg-zinc-400"></span>;
    }
  };

  return (
    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[var(--border)] bg-[var(--secondary-bg)] text-xs text-[var(--text-secondary)] font-sans shadow-xs font-semibold hover:opacity-80 transition-all select-none">
      {getIcon(label)}
      <span>{label}</span>
    </div>
  );
};


export default function BentoGrid() {
  const [filter, setFilter] = useState("All");
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  // Lock scrolling when modal is active
  useEffect(() => {
    if (selectedCard) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedCard]);

  // Contact form state
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [contactStatus, setContactStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setContactStatus("error");
      setErrorMsg("Please fill in all fields.");
      return;
    }
    setContactStatus("submitting");
    setTimeout(() => {
      setContactStatus("success");
      setForm({ name: "", email: "", message: "" });
    }, 1500);
  };

  const cards: BentoCard[] = [
    // 1. Profile / About Card (Large)
    {
      id: "about",
      category: "about",
      size: "lg:col-span-2 lg:row-span-2 md:col-span-2",
      element: (
        <div className="p-8 h-full flex flex-col md:grid md:grid-cols-12 gap-6 md:items-stretch">
          {/* Left Block */}
          <div className="md:col-span-7 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-200 bg-green-50 text-green-700 text-[10px] font-mono font-bold self-start">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                <span>Open to Opportunities</span>
              </div>
              <div className="space-y-2">
                <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--text)] dark:text-white font-sans leading-tight">
                  Hi, I'm <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Abhiman Singh Saharan</span> 👋
                </h1>
                <p className="text-xs sm:text-sm font-bold text-[var(--muted)] dark:text-[var(--metadata)] font-sans">
                  Software Engineer | AI Engineer | Aspiring Product Manager
                </p>
              </div>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] dark:text-[var(--metadata)] leading-relaxed font-sans pt-1">
                I build products where AI meets scalable software. I focus on distributed systems, latency optimization, and intuitive design interfaces.
              </p>
            </div>
                       <div className="flex flex-wrap items-center gap-2 text-xs font-sans pt-2">
              <a href="#projects" className="px-5 py-2.5 bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 rounded-full font-bold hover:translate-y-[-2px] hover:shadow-md transition-all shadow-sm">
                Explore Projects &rarr;
              </a>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedCard("contact-quick");
                }}
                className="px-5 py-2.5 border border-[var(--border)] bg-[var(--card)] text-[var(--text-secondary)] hover:text-[var(--text)] hover:translate-y-[-2px] hover:shadow-md rounded-full font-bold transition-all shadow-sm cursor-pointer"
              >
                Contact Me
              </button>
            </div>
          </div>

          {/* Right Block: Avatar & Location Badge */}
          <div className="md:col-span-5 flex flex-col items-center gap-4 bg-[var(--card)] border border-[var(--border)] p-6 rounded-[32px] shadow-sm self-center justify-self-center w-full max-w-[240px]">
            <div className="relative w-full aspect-square rounded-[24px] overflow-hidden border border-[var(--border)] shadow-xs">
              <img 
                src="/avatar.jpg" 
                alt="Abhiman Singh Saharan" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col items-center gap-1.5 text-center">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-950 text-zinc-300 text-[10px] font-mono font-semibold shadow-xs select-none">
                <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                <span>Greater Noida, India</span>
              </span>
            </div>
          </div>
        </div>
      ),
      popupContent: (
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <img src="/avatar.jpg" alt="Abhiman Singh Saharan" className="w-20 h-20 rounded-full object-cover border-2 border-[var(--secondary-border)] dark:border-[var(--border)] shadow-sm" />
            <div>
              <h3 className="text-2xl font-bold text-[var(--text)] dark:text-white">Abhiman Singh Saharan</h3>
              <p className="text-sm text-[var(--link)] dark:text-[var(--link)] font-semibold font-mono">SWE &amp; AI Engineer • Bennett University</p>
            </div>
          </div>
          <hr className="border-[var(--border)] dark:border-[var(--border)]" />
          <div className="space-y-4 text-[var(--text-secondary)] dark:text-[var(--metadata)] text-sm leading-relaxed font-sans">
            <p>
              I am a Computer Science Engineering student at Bennett University. My focus lies at the intersection of AI modeling, backend developer experience, and distributed architectures.
            </p>
            <p>
              Whether it's building low-latency matching engines (TradeFlow), writing custom GraphQL integrations, or designing voice-first financial tools (Saarthi AI), I build with performance, security, and clean typography in mind.
            </p>
            <h4 className="font-bold text-[var(--text)]  font-mono text-xs uppercase tracking-wider pt-2">Product Design Philosophy</h4>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong>Speed first:</strong> Fast interaction feedback keeps users engaged.</li>
              <li><strong>Typographic Hierarchy:</strong> High-impact font weights make scanning effortless.</li>
              <li><strong>Intelligent Defaults:</strong> Minimizing inputs yields superior user conversion.</li>
            </ul>
          </div>
        </div>
      )
    },

    // 2. Education Card (Small)
    {
      id: "education-quick",
      category: "about",
      size: "lg:col-span-1 lg:row-span-1 md:col-span-1",
      element: (
        <div className="p-6 h-full flex flex-col justify-between space-y-4">
          <div className="flex items-center gap-2 text-[var(--metadata)] dark:text-[var(--muted)]">
            <GraduationCap className="w-4 h-4 text-[var(--accent)]" />
            <span className="text-[10px] font-mono uppercase tracking-widest">Education</span>
          </div>
          <div>
            <h4 className="text-base font-bold text-[var(--text)] dark:text-white leading-tight">B.Tech CSE</h4>
            <p className="text-xs text-[var(--muted)] font-mono mt-0.5">Bennett University</p>
          </div>
          <div className="inline-flex self-start px-2.5 py-1 rounded bg-indigo-50 dark:bg-indigo-950/40 text-[var(--link)] dark:text-[var(--link)] text-[10px] font-mono font-bold">
            CGPA: 8.3/10
          </div>
        </div>
      ),
      popupContent: (
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <GraduationCap className="w-8 h-8 text-[var(--accent)]" />
            <div>
              <h3 className="text-xl font-bold text-[var(--text)] dark:text-white">B.Tech Computer Science Engineering</h3>
              <p className="text-sm text-[var(--muted)] dark:text-[var(--metadata)]">Bennett University • 2023 – 2027</p>
            </div>
          </div>
          <hr className="border-[var(--border)] dark:border-[var(--border)]" />
          <div className="space-y-4 font-sans text-sm text-[var(--text-secondary)] dark:text-[var(--metadata)]">
            <div className="flex items-center justify-between bg-[var(--secondary-bg)] dark:bg-[var(--secondary-bg)] p-4 rounded-2xl border border-[var(--border)] dark:border-[var(--border)]">
              <span className="font-semibold text-[var(--text)] ">Academic Standing</span>
              <span className="font-mono bg-[var(--secondary-bg)] dark:bg-indigo-900 text-[var(--text)] dark:text-indigo-300 px-3 py-1 rounded-full text-xs font-bold">CGPA: 8.3 / 10</span>
            </div>
            <h4 className="font-bold text-[var(--text)]  font-mono text-xs uppercase tracking-wider pt-2">Core Technical Coursework</h4>
            <div className="grid grid-cols-2 gap-3 font-mono text-xs">
              <div className="bg-[var(--secondary-bg)] dark:bg-[var(--secondary-bg)] p-2.5 rounded-xl border border-[var(--border)] dark:border-[var(--border)]">✓ Data Structures &amp; Algorithms</div>
              <div className="bg-[var(--secondary-bg)] dark:bg-[var(--secondary-bg)] p-2.5 rounded-xl border border-[var(--border)] dark:border-[var(--border)]">✓ Database Management (DBMS)</div>
              <div className="bg-[var(--secondary-bg)] dark:bg-[var(--secondary-bg)] p-2.5 rounded-xl border border-[var(--border)] dark:border-[var(--border)]">✓ Operating Systems (OS)</div>
              <div className="bg-[var(--secondary-bg)] dark:bg-[var(--secondary-bg)] p-2.5 rounded-xl border border-[var(--border)] dark:border-[var(--border)]">✓ Computer Networks (CN)</div>
              <div className="bg-[var(--secondary-bg)] dark:bg-[var(--secondary-bg)] p-2.5 rounded-xl border border-[var(--border)] dark:border-[var(--border)]">✓ Object-Oriented Programming</div>
              <div className="bg-[var(--secondary-bg)] dark:bg-[var(--secondary-bg)] p-2.5 rounded-xl border border-[var(--border)] dark:border-[var(--border)]">✓ System Design</div>
            </div>
          </div>
        </div>
      )
    },

    // 3. Email Card (Small)
    {
      id: "email-card",
      category: "about",
      size: "lg:col-span-1 lg:row-span-1 md:col-span-1",
      element: (
        <div className="p-6 h-full flex flex-col justify-between space-y-4">
          <div className="flex items-center gap-2 text-[var(--metadata)] dark:text-[var(--muted)]">
            <Mail className="w-4 h-4 text-rose-500" />
            <span className="text-[10px] font-mono uppercase tracking-widest">Email</span>
          </div>
          <div>
            <h4 className="text-xs font-bold text-[var(--text)]  font-mono truncate">abhimansaharan1@gmail.com</h4>
            <p className="text-[11px] text-[var(--muted)] dark:text-[var(--metadata)] font-sans mt-0.5">Let's connect!</p>
          </div>
          <a href="mailto:abhimansaharan1@gmail.com" className="text-[10px] font-mono text-[var(--link)] dark:text-[var(--link)] font-bold hover:underline">
            Write email &rarr;
          </a>
        </div>
      ),
      popupContent: (
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-[var(--text)] dark:text-white">Email Contact</h3>
          <p className="text-sm text-[var(--text-secondary)] dark:text-[var(--metadata)]">
            Drop an email to discuss opportunities or projects at: <br />
            <a href="mailto:abhimansaharan1@gmail.com" className="text-[var(--link)] dark:text-[var(--link)] font-bold hover:underline">abhimansaharan1@gmail.com</a>
          </p>
        </div>
      )
    },

    // 4. LinkedIn Card (Small)
    {
      id: "linkedin-card",
      category: "about",
      size: "lg:col-span-1 lg:row-span-1 md:col-span-1",
      element: (
        <div className="p-6 h-full flex flex-col justify-between space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono text-[var(--metadata)] dark:text-[var(--muted)] uppercase tracking-widest">LinkedIn</span>
            <Linkedin className="w-5 h-5 text-[#0A66C2]" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-[var(--text)] dark:text-white leading-tight">LinkedIn</h4>
            <p className="text-[11px] text-[var(--muted)] dark:text-[var(--metadata)] font-sans mt-0.5">Let's connect!</p>
          </div>
          <a href="https://www.linkedin.com/in/abhiman-singh-623176216/" target="_blank" rel="noopener noreferrer" className="text-[10px] font-mono text-[var(--link)] dark:text-[var(--link)] font-bold hover:underline">
            Profile link &rarr;
          </a>
        </div>
      ),
      popupContent: (
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-[var(--text)] dark:text-white font-sans">LinkedIn Profile</h3>
          <p className="text-sm text-[var(--text-secondary)] dark:text-[var(--metadata)]">
            Reach out for discussions on software engineering, product telemetry, and technical PM roles.
          </p>
          <a href="https://www.linkedin.com/in/abhiman-singh-623176216/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-4.5 py-2 bg-[#0A66C2] text-white rounded-full text-xs font-semibold">
            <span>Connect on LinkedIn</span> <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      )
    },

    // 5. LeetCode Card (Small)
    {
      id: "leetcode",
      category: "stats",
      size: "lg:col-span-1 lg:row-span-1 md:col-span-1",
      element: (
        <div className="p-6 h-full flex flex-col justify-between space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono text-[var(--metadata)] dark:text-[var(--muted)] uppercase tracking-widest">LeetCode</span>
            <Trophy className="w-4 h-4 text-amber-500" />
          </div>
          <div>
            <h4 className="text-2xl font-black text-[var(--text)] dark:text-white font-mono">170+</h4>
            <p className="text-[10px] text-[var(--muted)] dark:text-[var(--metadata)] font-mono mt-0.5">Problems Solved</p>
          </div>
          <div className="inline-flex self-start px-2 py-0.5 rounded bg-amber-50 dark:bg-amber-950/30 text-amber-700 dark:text-amber-400 text-[9px] font-mono font-bold animate-pulse">
            Consistent Learner 🔥
          </div>
        </div>
      ),
      popupContent: (
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Trophy className="w-8 h-8 text-amber-500" />
            <div>
              <h3 className="text-xl font-bold text-[var(--text)] dark:text-white">LeetCode Stats</h3>
              <p className="text-xs text-[var(--muted)] dark:text-[var(--metadata)]">Profile: Sano_codes</p>
            </div>
          </div>
          <hr className="border-[var(--border)] dark:border-[var(--border)]" />
          <div className="space-y-4 font-sans text-sm text-[var(--text-secondary)] dark:text-[var(--metadata)]">
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900 p-3 rounded-2xl">
                <span className="text-emerald-700 dark:text-emerald-400 font-bold block text-lg font-mono">82</span>
                <span className="text-[10px] text-emerald-600 dark:text-emerald-500 font-semibold font-mono">Easy</span>
              </div>
              <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-100 dark:border-amber-900 p-3 rounded-2xl">
                <span className="text-amber-700 dark:text-amber-400 font-bold block text-lg font-mono">78</span>
                <span className="text-[10px] text-amber-600 dark:text-amber-500 font-semibold font-mono">Medium</span>
              </div>
              <div className="bg-rose-50 dark:bg-rose-950/20 border border-rose-100 dark:border-rose-900 p-3 rounded-2xl">
                <span className="text-rose-700 dark:text-rose-400 font-bold block text-lg font-mono">10</span>
                <span className="text-[10px] text-rose-600 dark:text-rose-500 font-semibold font-mono">Hard</span>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // 6. GitHub Card (Small)
    {
      id: "github",
      category: "stats",
      size: "lg:col-span-1 lg:row-span-1 md:col-span-1",
      element: (
        <div className="p-6 h-full flex flex-col justify-between space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono text-[var(--metadata)] dark:text-[var(--muted)] uppercase tracking-widest">GitHub</span>
            <Github className="w-4 h-4 text-[var(--text)] " />
          </div>
          <div>
            <h4 className="text-base font-bold text-[var(--text)] dark:text-white leading-tight">Abhiman74</h4>
            <p className="text-[10px] text-green-650 dark:text-green-400 font-mono mt-0.5 font-bold">Active Developer</p>
          </div>
          <a 
            href="https://github.com/Abhiman74" 
            target="_blank" 
            rel="noopener noreferrer" 
            onClick={(e) => e.stopPropagation()} 
            className="text-[10px] font-mono text-[var(--link)] dark:text-[var(--link)] font-bold hover:underline inline-flex items-center gap-1"
          >
            <span>github.com/Abhiman74</span> <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
      ),
      popupContent: (
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Github className="w-8 h-8 text-[var(--text)] dark:text-white" />
            <div>
              <h3 className="text-xl font-bold text-[var(--text)] dark:text-white">GitHub Repositories</h3>
              <p className="text-xs text-[var(--muted)] dark:text-[var(--metadata)]">@Abhiman74</p>
            </div>
          </div>
          <hr className="border-[var(--border)] dark:border-[var(--border)]" />
          <div className="space-y-3 text-xs font-mono text-[var(--text-secondary)] dark:text-[var(--metadata)]">
            <a href="https://github.com/Abhiman74/interviewiq" target="_blank" rel="noopener noreferrer" className="block p-3 bg-[var(--secondary-bg)] dark:bg-[var(--secondary-bg)] border border-[var(--border)] dark:border-[var(--border)] rounded-xl hover:border-zinc-300 dark:hover:border-zinc-700">
              <strong className="text-[var(--text)] dark:text-white block">interviewiq &rarr;</strong>
              <span className="text-[10px] text-[var(--muted)] dark:text-[var(--metadata)]">AI coding interview platform with Monaco &amp; Web Speech RAG details.</span>
            </a>
            <a href="https://github.com/Abhiman74/tradeflow" target="_blank" rel="noopener noreferrer" className="block p-3 bg-[var(--secondary-bg)] dark:bg-[var(--secondary-bg)] border border-[var(--border)] dark:border-[var(--border)] rounded-xl hover:border-zinc-300 dark:hover:border-zinc-700">
              <strong className="text-[var(--text)] dark:text-white block">tradeflow &rarr;</strong>
              <span className="text-[10px] text-[var(--muted)] dark:text-[var(--metadata)]">Low-latency matching engine and simulations.</span>
            </a>
          </div>
        </div>
      )
    },

    // 7. Currently Card (Small)
    {
      id: "currently",
      category: "about",
      size: "lg:col-span-1 lg:row-span-1 md:col-span-1",
      element: (
        <div className="p-6 h-full flex flex-col justify-between space-y-4">
          <div className="flex items-center gap-2 text-[var(--metadata)] dark:text-[var(--muted)]">
            <Compass className="w-4 h-4 text-amber-500" />
            <span className="text-[10px] font-mono uppercase tracking-widest">Currently</span>
          </div>
          <div>
            <h4 className="text-sm font-bold text-[var(--text)] dark:text-white leading-tight">Final Year Student</h4>
            <p className="text-[10px] text-[var(--muted)] dark:text-[var(--metadata)] font-sans mt-0.5 leading-relaxed">
              Building • Learning • Growing
            </p>
          </div>
          <div className="flex items-center gap-1.5 text-[9px] font-mono text-[var(--muted)] dark:text-[var(--metadata)]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            <span>Available for Full-time roles</span>
          </div>
        </div>
      ),
      popupContent: (
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-[var(--text)] dark:text-white">Student Status</h3>
          <p className="text-sm text-[var(--text-secondary)] dark:text-[var(--metadata)] leading-relaxed font-sans">
            Preparing for graduation in 2027. Concentrating on software architecture, prompt design benchmarks, and system robustness under stress testing.
          </p>
        </div>
      )
    },

    // 8. Project: InterviewIQ (Large card)
    {
      id: "interviewiq-project",
      category: "projects",
      size: "lg:col-span-2 lg:row-span-2 md:col-span-2",
      element: (
        <div className="p-8 h-full flex flex-col justify-between space-y-6 group">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono text-[var(--metadata)] dark:text-[var(--muted)] uppercase tracking-widest">Flagship Project</span>
              <span className="text-[9px] font-mono px-2.5 py-0.5 rounded-full border border-[var(--secondary-border)] bg-indigo-50 dark:bg-indigo-950/20 text-[var(--link)] dark:text-[var(--link)] font-bold">Featured</span>
            </div>
            <div className="space-y-2">
              <h2 className="text-4xl font-extrabold text-[var(--text)] dark:text-white font-sans tracking-tight group-hover:text-blue-600 transition-colors">
                InterviewIQ
              </h2>
              <p className="text-xs text-[var(--muted)] font-mono">AI-Powered Technical Interview Platform</p>
            </div>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] dark:text-[var(--metadata)] leading-relaxed font-sans">
              Generates adaptive coding questions based on resumes and job descriptions (RAG) while tracking Monaco coding logic, WPM pacing, and speech metrics.
            </p>
          </div>
          <div className="flex flex-wrap gap-1">
            {["React", "TypeScript", "Node.js", "Express.js", "PostgreSQL", "Prisma ORM", "Gemini API", "Monaco Editor", "Web Speech API"].map(t => (
              <span key={t} className="text-[8px] font-mono font-bold px-2 py-0.5 rounded bg-[var(--secondary-bg)] dark:bg-[var(--secondary-bg)] border border-[var(--border)] dark:border-[var(--border)] text-[var(--muted)] dark:text-[var(--metadata)]">{t}</span>
            ))}
          </div>
          <div className="flex items-center gap-4 pt-2 text-xs font-mono font-semibold">
            <a href="https://github.com/Abhiman74/interviewiq" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="inline-flex items-center gap-1 text-[var(--text-secondary)] dark:text-[var(--metadata)] hover:text-black dark:hover:text-white">
              <Github className="w-4 h-4" /> <span>GitHub</span> <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      ),
      popupContent: (
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-bold text-[var(--text)] dark:text-white">InterviewIQ</h3>
            <p className="text-xs text-[var(--link)] dark:text-[var(--link)] font-mono mt-1">AI-Powered Technical Interview Platform</p>
          </div>
          <hr className="border-[var(--border)] dark:border-[var(--border)]" />
          <div className="space-y-4 text-sm text-[var(--text-secondary)] dark:text-[var(--metadata)] leading-relaxed font-sans">
            <p><strong>Problem:</strong> Traditional interview preparation platforms mostly focus on solving coding questions and fail to simulate an actual interview. Candidates receive little feedback on communication, explanation quality, and overall interview performance.</p>
            <p><strong>Solution:</strong> InterviewIQ creates an end-to-end interview experience where users can upload their resume and a target job description to receive personalized interview sessions. It combines AI-generated questions, a built-in coding environment, speech analytics, and performance tracking to closely replicate real technical interviews.</p>
            <h4 className="font-bold text-[var(--text)]  font-mono text-xs uppercase tracking-wider">Demonstrates:</h4>
            <ul className="list-disc pl-5 space-y-1 text-xs">
              <li>Full-stack development</li>
              <li>Backend API design</li>
              <li>Database schema design</li>
              <li>AI integration &amp; Prompt engineering</li>
              <li>RAG implementation &amp; Speech analytics</li>
            </ul>
          </div>
        </div>
      )
    },

    // 9. Project: Saarthi AI (Medium card)
    {
      id: "saarthi-project",
      category: "projects",
      size: "lg:col-span-2 lg:row-span-1 md:col-span-1",
      element: (
        <div className="p-6 h-full flex flex-col justify-between space-y-4 group">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono text-[var(--metadata)] dark:text-[var(--muted)] uppercase tracking-widest">FinTech Product</span>
              <span className="text-[8px] font-mono px-2 py-0.5 rounded bg-[var(--secondary-bg)] dark:bg-[var(--secondary-bg)] border border-[var(--border)] dark:border-[var(--border)] text-[var(--muted)]">BITSOM Challenge</span>
            </div>
            <h3 className="text-xl font-bold text-[var(--text)] dark:text-white font-sans group-hover:text-blue-600 transition-colors">Saarthi AI</h3>
            <p className="text-xs text-[var(--text-secondary)] dark:text-[var(--metadata)] leading-relaxed font-sans">
              Conversational financial assistant designed to improve accessibility and transaction rescue pathways in Hindi &amp; English.
            </p>
          </div>
          <div className="flex flex-wrap gap-1">
            {["Next.js", "React", "TypeScript", "Tailwind CSS", "Design Thinking"].map(t => (
              <span key={t} className="text-[8px] font-mono px-1.5 py-0.5 rounded bg-[var(--secondary-bg)] dark:bg-[var(--secondary-bg)] border border-[var(--border)] dark:border-[var(--border)] text-[var(--muted)]">{t}</span>
            ))}
          </div>
        </div>
      ),
      popupContent: (
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-bold text-[var(--text)] dark:text-white">Saarthi AI</h3>
            <p className="text-xs text-[var(--link)] dark:text-[var(--link)] font-mono mt-1">Trustworthy AI Financial Mentor</p>
          </div>
          <hr className="border-[var(--border)] dark:border-[var(--border)]" />
          <div className="space-y-4 text-sm text-[var(--text-secondary)] dark:text-[var(--metadata)] leading-relaxed font-sans">
            <p><strong>Problem:</strong> Millions of users lack access to trustworthy financial advice because financial products are often complex and difficult to understand. Users struggle when transactions fail, when choosing/opening investment products, or when learning basic financial concepts.</p>
            <p><strong>Solution:</strong> Saarthi AI provides conversational financial guidance in both English and Hindi through an intuitive AI assistant capable of answering questions, explaining concepts, and guiding users through common financial scenarios.</p>
            <h4 className="font-bold text-[var(--text)]  font-mono text-xs uppercase tracking-wider">Features:</h4>
            <ul className="list-disc pl-5 space-y-1 text-xs">
              <li><strong>Ask Saarthi:</strong> Conversational AI assistant for finance questions.</li>
              <li><strong>Failed Transaction Assistant:</strong> Guides users through common failure codes.</li>
              <li><strong>Bilingual Voice:</strong> High accuracy translation models.</li>
            </ul>
          </div>
        </div>
      )
    },

    // 10. Project: QuantAI Trader (Medium card)
    {
      id: "quantai-project",
      category: "projects",
      size: "lg:col-span-2 lg:row-span-1 md:col-span-1",
      element: (
        <div className="p-6 h-full flex flex-col justify-between space-y-4 group">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono text-[var(--metadata)] dark:text-[var(--muted)] uppercase tracking-widest">Market Forecasting</span>
            </div>
            <h3 className="text-xl font-bold text-[var(--text)] dark:text-white font-sans group-hover:text-blue-600 transition-colors">QuantAI Trader</h3>
            <p className="text-xs text-[var(--text-secondary)] dark:text-[var(--metadata)] leading-relaxed font-sans">
              Combines real-time market pipelines with LSTM neural nets to detect institutional zones and volume spikes.
            </p>
          </div>
          <div className="flex flex-wrap gap-1">
            {["Streamlit", "FastAPI", "SQLite", "Python", "LSTM"].map(t => (
              <span key={t} className="text-[8px] font-mono px-1.5 py-0.5 rounded bg-[var(--secondary-bg)] dark:bg-[var(--secondary-bg)] border border-[var(--border)] dark:border-[var(--border)] text-[var(--muted)]">{t}</span>
            ))}
          </div>
        </div>
      ),
      popupContent: (
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-bold text-[var(--text)] dark:text-white">QuantAI Trader</h3>
            <p className="text-xs text-[var(--link)] dark:text-[var(--link)] font-mono mt-1">AI-Powered Stock Market Analysis Platform</p>
          </div>
          <hr className="border-[var(--border)] dark:border-[var(--border)]" />
          <div className="space-y-4 text-sm text-[var(--text-secondary)] dark:text-[var(--metadata)] leading-relaxed font-sans">
            <p><strong>Problem:</strong> Retail traders often lack institutional-grade tools for understanding market structure and making informed decisions.</p>
            <p><strong>Solution:</strong> The platform visualizes market behavior, identifies liquidity zones, tracks portfolios, and generates AI-assisted stock predictions using machine learning models.</p>
            <h4 className="font-bold text-[var(--text)]  font-mono text-xs uppercase tracking-wider">Features:</h4>
            <ul className="list-disc pl-5 space-y-1 text-xs">
              <li>LSTM Stock Forecasting layer.</li>
              <li>NY session volume spike highlights.</li>
              <li>Portfolio tracking and active watchlists.</li>
            </ul>
          </div>
        </div>
      )
    },

    // 11. Project: AI Traffic Light (Medium card)
    {
      id: "traffic-project",
      category: "projects",
      size: "lg:col-span-2 lg:row-span-1 md:col-span-1",
      element: (
        <div className="p-6 h-full flex flex-col justify-between space-y-4 group">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono text-[var(--metadata)] dark:text-[var(--muted)] uppercase tracking-widest">Reinforcement Learning</span>
            </div>
            <h3 className="text-xl font-bold text-[var(--text)] dark:text-white font-sans group-hover:text-blue-600 transition-colors">AI Traffic Light</h3>
            <p className="text-xs text-[var(--text-secondary)] dark:text-[var(--metadata)] leading-relaxed font-sans">
              Optimizes signal schedules dynamically using OpenCV vehicle counts and reinforcement learning policies.
            </p>
          </div>
          <div className="flex flex-wrap gap-1">
            {["Python", "OpenCV", "Reinforcement Learning", "Q-Learning"].map(t => (
              <span key={t} className="text-[8px] font-mono px-1.5 py-0.5 rounded bg-[var(--secondary-bg)] dark:bg-[var(--secondary-bg)] border border-[var(--border)] dark:border-[var(--border)] text-[var(--muted)]">{t}</span>
            ))}
          </div>
        </div>
      ),
      popupContent: (
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-bold text-[var(--text)] dark:text-white">AI Traffic Light Control System</h3>
            <p className="text-xs text-[var(--link)] dark:text-[var(--link)] font-mono mt-1">Adaptive Signal Optimization using Reinforcement Learning</p>
          </div>
          <hr className="border-[var(--border)] dark:border-[var(--border)]" />
          <div className="space-y-4 text-sm text-[var(--text-secondary)] dark:text-[var(--metadata)] leading-relaxed font-sans">
            <p><strong>Problem:</strong> Traditional traffic lights operate using fixed timers and cannot adapt to real-time traffic density.</p>
            <p><strong>Solution:</strong> The system detects vehicles from live video feeds, estimates traffic density, and applies reinforcement learning (Q-learning) to optimize signal timings dynamically, reducing congestion delays by up to 30%.</p>
          </div>
        </div>
      )
    },

    // 12. Project: TradeFlow (Medium card)
    {
      id: "tradeflow-project",
      category: "projects",
      size: "lg:col-span-2 lg:row-span-1 md:col-span-1",
      element: (
        <div className="p-6 h-full flex flex-col justify-between space-y-4 group">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono text-[var(--metadata)] dark:text-[var(--muted)] uppercase tracking-widest">Trading simulator</span>
            </div>
            <h3 className="text-xl font-bold text-[var(--text)] dark:text-white font-sans group-hover:text-blue-600 transition-colors">TradeFlow</h3>
            <p className="text-xs text-[var(--text-secondary)] dark:text-[var(--metadata)] leading-relaxed font-sans">
              High-frequency exchange matching simulator using FIX 4.4 protocol gateways and Kafka logs.
            </p>
          </div>
          <div className="flex flex-wrap gap-1">
            {["Next.js 15", "Kafka", "FIX 4.4", "C++ Engine"].map(t => (
              <span key={t} className="text-[8px] font-mono px-1.5 py-0.5 rounded bg-[var(--secondary-bg)] dark:bg-[var(--secondary-bg)] border border-[var(--border)] dark:border-[var(--border)] text-[var(--muted)]">{t}</span>
            ))}
          </div>
        </div>
      ),
      popupContent: (
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-bold text-[var(--text)] dark:text-white">TradeFlow</h3>
            <p className="text-xs text-[var(--link)] dark:text-[var(--link)] font-mono mt-1">Institutional-Grade Electronic Exchange Simulator</p>
          </div>
          <hr className="border-[var(--border)] dark:border-[var(--border)]" />
          <div className="space-y-4 text-sm text-[var(--text-secondary)] dark:text-[var(--metadata)] leading-relaxed font-sans">
            <p><strong>Overview:</strong> Features a FIX 4.4 TCP gateway, pre-trade risk engine, and ultra-low-latency in-memory book matching under 500ns, archiving order transactions via Apache Kafka cluster configurations.</p>
          </div>
        </div>
      )
    },

    // 13. Tech Stack Card (Large)
    {
      id: "skills-languages",
      category: "skills",
      size: "lg:col-span-1 lg:row-span-1 md:col-span-1",
      element: (
        <div className="p-5 h-full flex flex-col justify-between space-y-3">
          <div className="flex items-center justify-between text-[var(--metadata)] dark:text-[var(--muted)]">
            <span className="text-[9px] font-mono uppercase tracking-widest">Languages</span>
            <Code className="w-3.5 h-3.5 text-blue-500" />
          </div>
          <div className="flex flex-wrap gap-1">
            <TechPill label="C++" />
            <TechPill label="Python" />
            <TechPill label="JavaScript" />
            <TechPill label="TypeScript" />
            <TechPill label="SQL" />
          </div>
          <span className="text-[8px] font-mono text-[var(--metadata)] dark:text-[var(--muted)]">Details &rarr;</span>
        </div>
      ),
      popupContent: (
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-[var(--text)] dark:text-white">Programming Languages</h3>
          <hr className="border-[var(--border)] dark:border-[var(--border)]" />
          <div className="space-y-3 font-mono text-xs text-[var(--text-secondary)] dark:text-[var(--metadata)]">
            <div>
              <strong className="text-[var(--text)] dark:text-white block">C++ (Proficient)</strong>
              <p className="text-[11px] text-[var(--muted)]">Used for contest solving on LeetCode/CodeChef and building low-latency matching engines (TradeFlow).</p>
            </div>
            <div>
              <strong className="text-[var(--text)] dark:text-white block">TypeScript &amp; JavaScript</strong>
              <p className="text-[11px] text-[var(--muted)]">Standard for web application logic, Next.js components, and React frontend development.</p>
            </div>
            <div>
              <strong className="text-[var(--text)] dark:text-white block">Python &amp; SQL</strong>
              <p className="text-[11px] text-[var(--muted)]">Used in machine learning model scripting, OpenCV pipelines, and relational database queries.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "skills-frontend",
      category: "skills",
      size: "lg:col-span-1 lg:row-span-1 md:col-span-1",
      element: (
        <div className="p-5 h-full flex flex-col justify-between space-y-3">
          <div className="flex items-center justify-between text-[var(--metadata)] dark:text-[var(--muted)]">
            <span className="text-[9px] font-mono uppercase tracking-widest">Frontend</span>
            <Sparkles className="w-3.5 h-3.5 text-cyan-500" />
          </div>
          <div className="flex flex-wrap gap-1">
            <TechPill label="React" />
            <TechPill label="Next.js" />
            <TechPill label="TailwindCSS" />
          </div>
          <span className="text-[8px] font-mono text-[var(--metadata)] dark:text-[var(--muted)]">Details &rarr;</span>
        </div>
      ),
      popupContent: (
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-[var(--text)] dark:text-white">Frontend Web Stack</h3>
          <hr className="border-[var(--border)] dark:border-[var(--border)]" />
          <div className="space-y-3 font-mono text-xs text-[var(--text-secondary)] dark:text-[var(--metadata)]">
            <div>
              <strong className="text-[var(--text)] dark:text-white block">React.js &amp; Next.js 15</strong>
              <p className="text-[11px] text-[var(--muted)]">Experienced in App Router architectures, dynamic loading, server components, and performance audits.</p>
            </div>
            <div>
              <strong className="text-[var(--text)] dark:text-white block">Tailwind CSS &amp; Responsive Layouts</strong>
              <p className="text-[11px] text-[var(--muted)]">Building elegant responsive grid layouts, custom transitions, animations, and clean off-white themes.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "skills-backend",
      category: "skills",
      size: "lg:col-span-1 lg:row-span-1 md:col-span-1",
      element: (
        <div className="p-5 h-full flex flex-col justify-between space-y-3">
          <div className="flex items-center justify-between text-[var(--metadata)] dark:text-[var(--muted)]">
            <span className="text-[9px] font-mono uppercase tracking-widest">Backend</span>
            <Cpu className="w-3.5 h-3.5 text-emerald-500" />
          </div>
          <div className="flex flex-wrap gap-1">
            <TechPill label="Node.js" />
            <TechPill label="Express.js" />
            <TechPill label="FastAPI" />
          </div>
          <span className="text-[8px] font-mono text-[var(--metadata)] dark:text-[var(--muted)]">Details &rarr;</span>
        </div>
      ),
      popupContent: (
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-[var(--text)] dark:text-white">Backend Engineering</h3>
          <hr className="border-[var(--border)] dark:border-[var(--border)]" />
          <div className="space-y-3 font-mono text-xs text-[var(--text-secondary)] dark:text-[var(--metadata)]">
            <div>
              <strong className="text-[var(--text)] dark:text-white block">RESTful Backend design</strong>
              <p className="text-[11px] text-[var(--muted)]">Creating scalable endpoints in Node.js/Express.js and FastAPI (Python) with standard middleware validation.</p>
            </div>
            <div>
              <strong className="text-[var(--text)] dark:text-white block">Security &amp; Performance</strong>
              <p className="text-[11px] text-[var(--muted)]">Implementing JWT tokens, rate limiting, and optimizing database fetch execution speeds.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "skills-databases",
      category: "skills",
      size: "lg:col-span-1 lg:row-span-1 md:col-span-1",
      element: (
        <div className="p-5 h-full flex flex-col justify-between space-y-3">
          <div className="flex items-center justify-between text-[var(--metadata)] dark:text-[var(--muted)]">
            <span className="text-[9px] font-mono uppercase tracking-widest">Databases &amp; ORM</span>
            <Briefcase className="w-3.5 h-3.5 text-[var(--accent)]" />
          </div>
          <div className="flex flex-wrap gap-1">
            <TechPill label="PostgreSQL" />
            <TechPill label="SQLite" />
            <TechPill label="Prisma ORM" />
          </div>
          <span className="text-[8px] font-mono text-[var(--metadata)] dark:text-[var(--muted)]">Details &rarr;</span>
        </div>
      ),
      popupContent: (
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-[var(--text)] dark:text-white">Databases &amp; ORM</h3>
          <hr className="border-[var(--border)] dark:border-[var(--border)]" />
          <div className="space-y-3 font-mono text-xs text-[var(--text-secondary)] dark:text-[var(--metadata)]">
            <div>
              <strong className="text-[var(--text)] dark:text-white block">Relational Modeling</strong>
              <p className="text-[11px] text-[var(--muted)]">Designing clean, normalized schemas in PostgreSQL and SQLite with indexing for speed.</p>
            </div>
            <div>
              <strong className="text-[var(--text)] dark:text-white block">Prisma ORM</strong>
              <p className="text-[11px] text-[var(--muted)]">Type-safe database queries, automated schema migrations, and relational seeding configurations.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "skills-ai",
      category: "skills",
      size: "lg:col-span-1 lg:row-span-1 md:col-span-1",
      element: (
        <div className="p-5 h-full flex flex-col justify-between space-y-3">
          <div className="flex items-center justify-between text-[var(--metadata)] dark:text-[var(--muted)]">
            <span className="text-[9px] font-mono uppercase tracking-widest">AI / ML</span>
            <Flame className="w-3.5 h-3.5 text-orange-500" />
          </div>
          <div className="flex flex-wrap gap-1">
            <TechPill label="OpenAI API" />
            <TechPill label="Gemini API" />
            <TechPill label="TensorFlow" />
            <TechPill label="OpenCV" />
            <TechPill label="RAG" />
          </div>
          <span className="text-[8px] font-mono text-[var(--metadata)] dark:text-[var(--muted)]">Details &rarr;</span>
        </div>
      ),
      popupContent: (
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-[var(--text)] dark:text-white">AI &amp; Machine Learning</h3>
          <hr className="border-[var(--border)] dark:border-[var(--border)]" />
          <div className="space-y-3 font-mono text-xs text-[var(--text-secondary)] dark:text-[var(--metadata)]">
            <div>
              <strong className="text-[var(--text)] dark:text-white block">Generative AI Models</strong>
              <p className="text-[11px] text-[var(--muted)]">Integrating OpenAI API and Gemini API with custom system prompts and output schema formatting guidelines.</p>
            </div>
            <div>
              <strong className="text-[var(--text)] dark:text-white block">Retrieval-Augmented Generation (RAG)</strong>
              <p className="text-[11px] text-[var(--muted)]">Designing custom semantic search indexes, chunking strategies, and parsing document metadata.</p>
            </div>
            <div>
              <strong className="text-[var(--text)] dark:text-white block">Computer Vision &amp; OpenCV</strong>
              <p className="text-[11px] text-[var(--muted)]">Object counting, real-time image matrix classification, and frame parsing (AI Traffic Light).</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "skills-tools",
      category: "skills",
      size: "lg:col-span-1 lg:row-span-1 md:col-span-1",
      element: (
        <div className="p-5 h-full flex flex-col justify-between space-y-3">
          <div className="flex items-center justify-between text-[var(--metadata)] dark:text-[var(--muted)]">
            <span className="text-[9px] font-mono uppercase tracking-widest">Tools</span>
            <TrendingUp className="w-3.5 h-3.5 text-[var(--accent)]" />
          </div>
          <div className="flex flex-wrap gap-1">
            <TechPill label="Git" />
            <TechPill label="GitHub" />
            <TechPill label="Linux" />
            <TechPill label="Postman" />
          </div>
          <span className="text-[8px] font-mono text-[var(--metadata)] dark:text-[var(--muted)]">Details &rarr;</span>
        </div>
      ),
      popupContent: (
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-[var(--text)] dark:text-white">Developer Tools</h3>
          <hr className="border-[var(--border)] dark:border-[var(--border)]" />
          <div className="space-y-3 font-mono text-xs text-[var(--text-secondary)] dark:text-[var(--metadata)]">
            <div>
              <strong className="text-[var(--text)] dark:text-white block">Version Control &amp; Environments</strong>
              <p className="text-[11px] text-[var(--muted)]">Managing Git repos, branch merging strategies, standard pull request reviews, and Linux terminal scripts.</p>
            </div>
            <div>
              <strong className="text-[var(--text)] dark:text-white block">API Testing &amp; Postman</strong>
              <p className="text-[11px] text-[var(--muted)]">Building collections, mocking endpoints, writing automated scripts for endpoint testing.</p>
            </div>
          </div>
        </div>
      )
    },

    // 14. GitHub Activity
    {
      id: "github-activity",
      category: "stats",
      size: "lg:col-span-1 lg:row-span-1 md:col-span-1",
      element: (
        <div className="p-6 h-full flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-[9px] font-mono text-[var(--muted)] uppercase tracking-widest">GitHub Activity</span>
            <Github className="w-4 h-4 text-[var(--muted)]" />
          </div>
          <div className="space-y-1.5 my-3">
            <div className="text-[11px] font-mono text-[var(--muted)]">Recent Activity</div>
            <ul className="text-[9px] font-sans text-[var(--text-secondary)] space-y-1">
              <li>• Pushed 3 commits to InterviewIQ</li>
              <li>• Opened 2 pull requests</li>
              <li>• Starred 5 repositories</li>
            </ul>
          </div>
          <a href="https://github.com/Abhiman74" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="text-[9px] font-mono text-[var(--text-secondary)] hover:text-[var(--text)] inline-flex items-center gap-1">
            <span>View GitHub Profile</span> &rarr;
          </a>
        </div>
      ),
      popupContent: (
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-[var(--text)] dark:text-white">GitHub Activity Log</h3>
          <p className="text-sm text-[var(--text-secondary)] font-sans">
            Syncing repositories, configuring branch policies, and writing automated CI/CD actions.
          </p>
        </div>
      )
    },

    // 15. LeetCode Stats
    {
      id: "leetcode-stats",
      category: "stats",
      size: "lg:col-span-1 lg:row-span-1 md:col-span-1",
      element: (
        <div className="p-6 h-full flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-[9px] font-mono text-[var(--muted)] uppercase tracking-widest">LeetCode Stats</span>
            <Trophy className="w-4 h-4 text-amber-500" />
          </div>
          <div className="flex items-center gap-3 my-3">
            <div className="relative w-12 h-12 flex items-center justify-center shrink-0">
              <svg className="w-full h-full transform -rotate-90">
                <circle cx="24" cy="24" r="20" className="stroke-zinc-200 dark:stroke-zinc-800" strokeWidth="3" fill="transparent" />
                <circle cx="24" cy="24" r="20" className="stroke-orange-500" strokeWidth="3" fill="transparent" strokeDasharray="125" strokeDashoffset={125 - (125 * 170) / 300} strokeLinecap="round" />
              </svg>
              <span className="absolute text-[10px] font-bold text-[var(--text)] font-mono">170</span>
            </div>
            <div className="text-[9px] font-mono text-[var(--text-secondary)] space-y-0.5">
              <div>Easy: <span className="text-emerald-500 font-bold">82</span></div>
              <div>Medium: <span className="text-amber-500 font-bold">78</span></div>
              <div>Hard: <span className="text-rose-500 font-bold">10</span></div>
            </div>
          </div>
          <a href="https://leetcode.com/u/Sano_codes/" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="text-[9px] font-mono text-[var(--text-secondary)] hover:text-[var(--text)] inline-flex items-center gap-1">
            <span>View LeetCode Profile</span> &rarr;
          </a>
        </div>
      ),
      popupContent: (
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-[var(--text)] dark:text-white">LeetCode Stats Details</h3>
          <p className="text-sm text-[var(--text-secondary)] dark:text-[var(--metadata)] font-sans">
            Contest solving speed, complex graph algorithms, tree traversal optimizations.
          </p>
        </div>
      )
    },

    // 16. Achievements Card (Small)
    {
      id: "achievements",
      category: "experience",
      size: "lg:col-span-1 lg:row-span-1 md:col-span-1",
      element: (
        <div className="p-6 h-full flex flex-col justify-between space-y-4">
          <div className="flex items-center gap-2 text-[var(--metadata)] dark:text-[var(--muted)]">
            <Award className="w-4 h-4 text-amber-500" />
            <span className="text-[10px] font-mono uppercase tracking-widest">Achievements</span>
          </div>
          <ul className="text-xs font-mono text-[var(--text-secondary)] space-y-1">
            <li>🏆 SIH Rank 73</li>
            <li>🏀 Basketball Team</li>
            <li>📈 CodeChef 1570+</li>
          </ul>
        </div>
      ),
      popupContent: (
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Award className="w-8 h-8 text-amber-500" />
            <div>
              <h3 className="text-xl font-bold text-[var(--text)] dark:text-white font-sans">Milestones</h3>
              <p className="text-xs text-[var(--muted)] dark:text-[var(--metadata)]">Honors &amp; Context</p>
            </div>
          </div>
          <hr className="border-[var(--border)] dark:border-[var(--border)]" />
          <div className="space-y-4 text-sm text-[var(--text-secondary)] dark:text-[var(--metadata)] font-sans">
            <div className="space-y-3">
              <div>
                <strong className="text-[var(--text)] dark:text-white">Smart India Hackathon (SIH) Rank 73:</strong>
                <p className="text-xs text-[var(--muted)] dark:text-[var(--metadata)] mt-0.5">Designed a custom cryptographic document hashing signature mechanism to prevent certificate forgery.</p>
              </div>
              <div>
                <strong className="text-[var(--text)] dark:text-white">Bennett University Basketball Team:</strong>
                <p className="text-xs text-[var(--muted)] dark:text-[var(--metadata)] mt-0.5">Participating in inter-university matches, fostering teamwork under speed-pressure environments.</p>
              </div>
              <div>
                <strong className="text-[var(--text)] dark:text-white">CodeChef Competitive Coding:</strong>
                <p className="text-xs text-[var(--muted)] dark:text-[var(--metadata)] mt-0.5">Competitive rating peak at 1570+.</p>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // 17. Experience Card (Medium)
    {
      id: "experience",
      category: "experience",
      size: "lg:col-span-2 lg:row-span-1 md:col-span-2",
      element: (
        <div className="p-6 h-full flex flex-col justify-between space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono text-[var(--metadata)] dark:text-[var(--muted)] uppercase tracking-widest">Experience</span>
            <span className="text-[9px] font-mono text-[var(--link)] dark:text-[var(--link)] font-bold">CodSoft Intern</span>
          </div>
          <div>
            <h4 className="text-base font-bold text-[var(--text)] dark:text-white leading-tight">Web Developer Intern</h4>
            <p className="text-xs text-[var(--muted)] font-mono mt-0.5">CodSoft • Jan 2026 – Feb 2026</p>
          </div>
          <p className="text-xs text-[var(--text-secondary)] dark:text-[var(--metadata)] leading-relaxed font-sans">
            Developed responsive React.js apps, optimized rendering by 22%, and integrated REST APIs.
          </p>
        </div>
      ),
      popupContent: (
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Briefcase className="w-8 h-8 text-[var(--accent)]" />
            <div>
              <h3 className="text-xl font-bold text-[var(--text)] dark:text-white">Web Developer Intern</h3>
              <p className="text-xs text-[var(--muted)] dark:text-[var(--metadata)]">CodSoft • January 2026 – February 2026</p>
            </div>
          </div>
          <hr className="border-[var(--border)] dark:border-[var(--border)]" />
          <div className="space-y-4 text-xs font-sans text-[var(--text-secondary)] dark:text-[var(--metadata)] leading-relaxed">
            <h4 className="font-bold text-[var(--text)]  font-mono text-[10px] uppercase tracking-wider">Responsibilities:</h4>
            <ul className="list-disc pl-5 space-y-1.5 text-[var(--text-secondary)] dark:text-[var(--metadata)]">
              <li>Developed responsive React.js applications, optimizing frontend rendering times by 22% and ensuring cross-browser compatibility.</li>
              <li>Built reusable React components and integrated RESTful APIs to maintain fast, stateful interactions.</li>
              <li>Debugged production issues and improved application stability.</li>
              <li>Collaborated with a team of four developers using Agile methodologies and sprint reviews.</li>
            </ul>
          </div>
        </div>
      )
    },

    // 18. CEH Certification Card (Medium)
    {
      id: "cert-ceh",
      category: "experience",
      size: "lg:col-span-1 lg:row-span-1 md:col-span-1",
      element: (
        <div className="p-6 h-full flex flex-col justify-between space-y-4">
          <div className="flex items-center gap-2 text-[var(--metadata)] dark:text-[var(--muted)]">
            <Award className="w-4 h-4 text-blue-500" />
            <span className="text-[10px] font-mono uppercase tracking-widest">CEH Certificate</span>
          </div>
          <div>
            <h4 className="text-sm font-bold text-[var(--text)] dark:text-white leading-tight">Certified Ethical Hacker</h4>
            <p className="text-[10px] text-[var(--muted)] dark:text-[var(--metadata)] font-mono mt-0.5">EC-Council (2026)</p>
          </div>
          <div className="text-[9px] font-mono text-[var(--muted)] dark:text-[var(--metadata)]">
            Cert No: ECC3108296475
          </div>
        </div>
      ),
      popupContent: (
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Award className="w-8 h-8 text-blue-500" />
            <div>
              <h3 className="text-xl font-bold text-[var(--text)] dark:text-white">Certified Ethical Hacker (CEH)</h3>
              <p className="text-xs text-[var(--muted)] dark:text-[var(--metadata)]">EC-Council • Issued on 17 Feb, 2026</p>
            </div>
          </div>
          <hr className="border-[var(--border)] dark:border-[var(--border)]" />
          <div className="space-y-4 text-sm text-[var(--text-secondary)] dark:text-[var(--metadata)] leading-relaxed font-sans">
            <p><strong>Certification ID:</strong> ECC3108296475</p>
            <p>
              Validates credentials in cybersecurity threat vectors, including foot-printing and reconnaissance, scanning networks, system hacking, malware threats, sniffing, social engineering, denial of service, session hijacking, evading IDS/firewalls, hacking web servers/applications, SQL injection, wireless network hacking, cloud computing security, and cryptography.
            </p>
          </div>
        </div>
      )
    },

    // 19. BITSOM Certification Card (Medium)
    {
      id: "cert-bitsom",
      category: "experience",
      size: "lg:col-span-1 lg:row-span-1 md:col-span-1",
      element: (
        <div className="p-6 h-full flex flex-col justify-between space-y-4">
          <div className="flex items-center gap-2 text-[var(--metadata)] dark:text-[var(--muted)]">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span className="text-[10px] font-mono uppercase tracking-widest">BITSOM Certification</span>
          </div>
          <div>
            <h4 className="text-sm font-bold text-[var(--text)] dark:text-white leading-tight">Product Management with GenAI</h4>
            <p className="text-[10px] text-[var(--metadata)] dark:text-[var(--metadata)] font-mono mt-0.5">BITSOM &amp; Masai (2026)</p>
          </div>
          <div className="text-[9px] font-mono text-[var(--muted)] dark:text-[var(--metadata)]">
            Excellence in Evaluation
          </div>
        </div>
      ),
      popupContent: (
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Sparkles className="w-8 h-8 text-amber-500" />
            <div>
              <h3 className="text-xl font-bold text-[var(--text)] dark:text-white">Product Management with Generative &amp; Agentic AI</h3>
              <p className="text-xs text-[var(--muted)] dark:text-[var(--metadata)]">BITS School of Management (BITSOM)</p>
            </div>
          </div>
          <hr className="border-[var(--border)] dark:border-[var(--border)]" />
          <div className="space-y-4 text-sm text-[var(--text-secondary)] dark:text-[var(--metadata)] leading-relaxed font-sans">
            <p><strong>Student Code:</strong> bitsom_pm_25111440</p>
            <p><strong>Evaluation Excellence:</strong> Awarded a Certificate of Excellence in Evaluation for Product Management with Generative &amp; Agentic AI from BITSOM in collaboration with Masai.</p>
            <p>This program covers end-to-end product design lifecycle mapping, customer telemetry, rapid prototyping frameworks, and AI chatbot workflow optimization.</p>
          </div>
        </div>
      )
    },

    // 20. Contact Card (Form widget)
    {
      id: "contact",
      category: "about",
      size: "lg:col-span-2 lg:row-span-1 md:col-span-2",
      element: (
        <div className="p-6 h-full flex flex-col justify-between space-y-4">
          <div>
            <span className="text-[10px] font-mono text-[var(--metadata)] dark:text-[var(--muted)] uppercase tracking-widest">Inquiries Gateway</span>
            <form onSubmit={handleContactSubmit} className="grid grid-cols-2 gap-3 mt-3">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                placeholder="Name"
                disabled={contactStatus === "submitting" || contactStatus === "success"}
                className="col-span-1 h-8 px-2.5 rounded bg-[var(--secondary-bg)]/5 dark:bg-[var(--surface)] border border-[var(--border)] dark:border-[var(--border)] text-xs focus:outline-none focus:border-zinc-400 dark:focus:border-zinc-700 text-[var(--text)] dark:text-white"
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                placeholder="Email"
                disabled={contactStatus === "submitting" || contactStatus === "success"}
                className="col-span-1 h-8 px-2.5 rounded bg-[var(--secondary-bg)]/5 dark:bg-[var(--surface)] border border-[var(--border)] dark:border-[var(--border)] text-xs focus:outline-none focus:border-zinc-400 dark:focus:border-zinc-700 text-[var(--text)] dark:text-white"
              />
              <textarea
                name="message"
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                placeholder="Your message..."
                disabled={contactStatus === "submitting" || contactStatus === "success"}
                rows={1}
                className="col-span-2 p-2 rounded bg-[var(--secondary-bg)]/5 dark:bg-[var(--surface)] border border-[var(--border)] dark:border-[var(--border)] text-xs focus:outline-none focus:border-zinc-400 dark:focus:border-zinc-700 text-[var(--text)] dark:text-white resize-none"
              />
              <button
                type="submit"
                disabled={contactStatus === "submitting" || contactStatus === "success"}
                className="col-span-2 h-8 rounded bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 text-[11px] font-mono font-bold hover:translate-y-[-1px] hover:shadow-xs transition-all disabled:opacity-50 cursor-pointer"
              >
                {contactStatus === "submitting" ? "Transmitting..." : contactStatus === "success" ? "Message Transmitted ✓" : "Transmit Message"}
              </button>
            </form>
          </div>
        </div>
      ),
      popupContent: (
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-[var(--text)] dark:text-white">Direct Contact Details</h3>
          <hr className="border-[var(--border)] dark:border-[var(--border)]" />
          <div className="space-y-3 font-mono text-sm text-[var(--text-secondary)] dark:text-[var(--metadata)]">
            <div>
              <span className="text-xs text-[var(--metadata)] uppercase tracking-widest block">Phone</span>
              <a href="tel:+917827137992" className="text-[var(--link)] dark:text-[var(--link)] font-bold hover:underline inline-flex items-center gap-1">
                <Phone className="w-4 h-4" /> <span>+91 7827137992</span>
              </a>
            </div>
            <div>
              <span className="text-xs text-[var(--metadata)] uppercase tracking-widest block">Gmail</span>
              <a href="mailto:abhimansaharan1@gmail.com" className="text-[var(--link)] dark:text-[var(--link)] font-bold hover:underline inline-flex items-center gap-1">
                <Mail className="w-4 h-4" /> <span>abhimansaharan1@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      )
    }
  ];

  const filters = ["All", "Projects", "Skills", "Stats & Info"];

  const filteredCards = cards.filter(card => {
    if (filter === "All") return true;
    if (filter === "Projects") return card.category === "projects";
    if (filter === "Skills") return card.category === "skills";
    if (filter === "Stats & Info") return card.category === "stats" || card.category === "experience" || card.category === "about";
    return true;
  });

  // Handle virtual card click overrides (e.g. contact popup triggered from Hero button)
  const activePopupId = selectedCard === "contact-quick" ? "contact" : selectedCard;
  const activePopupCard = cards.find(c => c.id === activePopupId);

  return (
    <div className="max-w-7xl mx-auto px-6 py-24 space-y-12">
      
      {/* Navigation Filter Pills */}
      <div className="flex justify-center">
        <div className="flex items-center gap-1 bg-white dark:bg-[var(--secondary-bg)] border border-[var(--border)]/60 dark:border-[var(--border)] p-1 rounded-full shadow-sm">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                filter === f
                  ? "bg-[var(--secondary-bg)] dark:bg-white text-white dark:text-[var(--text)] shadow-sm"
                  : "text-[var(--muted)] dark:text-[var(--metadata)] hover:text-[var(--text)] dark:hover:text-white hover:bg-[var(--secondary-bg)] dark:hover:bg-zinc-850"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Bento Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 auto-rows-max"
      >
        <AnimatePresence mode="popLayout">
          {filteredCards.map((card) => {
            const isDark = card.id === "github-activity" || card.id === "leetcode-stats";
            return (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1]
                }}
                key={card.id}
                id={card.id}
                onClick={() => setSelectedCard(card.id)}
                className={`${card.size} bento-card cursor-pointer group overflow-hidden flex flex-col justify-between bg-[var(--card)] border border-[var(--border)] text-[var(--text)] shadow-xs hover:shadow-md transition-all`}
              >
                {card.element}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Click-to-Popup Modal Dialog */}
      <AnimatePresence>
        {selectedCard && activePopupCard && (
          <div className="fixed inset-0 z-[99999] flex items-center justify-center p-6">
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCard(null)}
              className="absolute inset-0 bg-black/40 backdrop-blur-md"
            />
            
            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-xl bg-[var(--card)] border border-[var(--border)] text-[var(--text)] rounded-[32px] shadow-2xl p-8 z-10 max-h-[85vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCard(null)}
                className="absolute top-6 right-6 p-2 rounded-full border border-[var(--border)] hover:bg-[var(--secondary-bg)] transition-all text-[var(--text-secondary)] hover:text-[var(--text)] cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Popup Content */}
              <div className="text-[var(--text)]">
                {selectedCard === "contact-quick" ? (
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-[var(--text)] dark:text-white">Direct Contact</h3>
                    <hr className="border-[var(--border)] dark:border-[var(--border)]" />
                    <div className="space-y-3 font-mono text-sm">
                      <div>
                        <span className="text-xs text-[var(--muted)] uppercase tracking-widest block">Phone</span>
                        <a href="tel:+917827137992" className="text-[var(--link)] dark:text-[var(--link)] font-bold hover:underline inline-flex items-center gap-1">
                          <Phone className="w-4 h-4" /> <span>+91 7827137992</span>
                        </a>
                      </div>
                      <div>
                        <span className="text-xs text-[var(--muted)] uppercase tracking-widest block">Gmail</span>
                        <a href="mailto:abhimansaharan1@gmail.com" className="text-[var(--link)] dark:text-[var(--link)] font-bold hover:underline inline-flex items-center gap-1">
                          <Mail className="w-4 h-4" /> <span>abhimansaharan1@gmail.com</span>
                        </a>
                      </div>
                    </div>
                  </div>
                ) : (
                  activePopupCard.popupContent
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
