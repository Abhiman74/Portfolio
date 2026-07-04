"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, AlertCircle, Mail } from "lucide-react";
import { Github, Linkedin } from "@/components/Icons";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus("error");
      setErrorMsg("Please fill in all fields.");
      return;
    }
    
    // Simple Email Regex check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setStatus("error");
      setErrorMsg("Please provide a valid email address.");
      return;
    }

    setStatus("submitting");

    // Simulate database insertion or API call
    setTimeout(() => {
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-black/20">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">05 / Connection</span>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white mt-2">
            Get In Touch
          </h2>
          <div className="h-0.5 w-12 bg-gradient-to-r from-blue-500 to-purple-500 mt-4 rounded" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          {/* Left: Contact Info */}
          <div className="md:col-span-5 space-y-6">
            <h3 className="text-lg sm:text-xl font-medium text-zinc-200">
              Let&apos;s build something together.
            </h3>
            
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans">
              I am interested in Software Engineering, AI/ML Product development, and PM opportunities. Whether you have a project idea, a job posting, or just want to chat about developer tools and systems engineering, drop me a message!
            </p>

            <div className="space-y-4 pt-4 font-mono text-xs text-zinc-400">
              <a
                href="mailto:abhimansaharan@gmail.com"
                className="flex items-center gap-3 hover:text-white transition-colors"
              >
                <div className="p-2 rounded bg-zinc-900 border border-zinc-800">
                  <Mail className="w-4 h-4 text-indigo-400" />
                </div>
                <span>abhimansaharan@gmail.com</span>
              </a>

              <a
                href="https://github.com/Abhiman74"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-white transition-colors"
              >
                <div className="p-2 rounded bg-zinc-900 border border-zinc-800">
                  <Github className="w-4 h-4 text-zinc-100" />
                </div>
                <span>github.com/Abhiman74</span>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-white transition-colors"
              >
                <div className="p-2 rounded bg-zinc-900 border border-zinc-800">
                  <Linkedin className="w-4 h-4 text-blue-400" />
                </div>
                <span>linkedin.com/in/abhiman-saharan (placeholder)</span>
              </a>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="md:col-span-7">
            <div className="glow-card border border-zinc-800 bg-[#0d0d0f]/50 p-6 sm:p-8 rounded-xl">
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    disabled={status === "submitting"}
                    className="w-full h-11 px-4 rounded-lg border border-zinc-800 bg-[#09090b]/60 text-sm text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-zinc-700 focus:bg-black/80 transition-all font-sans"
                    placeholder="Jane Doe"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    disabled={status === "submitting"}
                    className="w-full h-11 px-4 rounded-lg border border-zinc-800 bg-[#09090b]/60 text-sm text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-zinc-700 focus:bg-black/80 transition-all font-sans"
                    placeholder="jane@example.com"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    disabled={status === "submitting"}
                    className="w-full p-4 rounded-lg border border-zinc-800 bg-[#09090b]/60 text-sm text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-zinc-700 focus:bg-black/80 transition-all font-sans resize-none"
                    placeholder="Let's talk about..."
                  />
                </div>

                {/* Status messages */}
                <AnimatePresence mode="wait">
                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      className="flex items-center gap-2 text-xs font-mono text-rose-400 p-3 rounded border border-rose-500/10 bg-rose-500/5"
                    >
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMsg}</span>
                    </motion.div>
                  )}

                  {status === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      className="flex items-center gap-2 text-xs font-mono text-emerald-400 p-3 rounded border border-emerald-500/10 bg-emerald-500/5"
                    >
                      <CheckCircle className="w-4 h-4 shrink-0" />
                      <span>Message received successfully. I&apos;ll get back to you shortly!</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status === "submitting" || status === "success"}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 h-11 rounded-lg bg-zinc-100 text-[#09090b] text-sm font-semibold hover:bg-white active:scale-98 transition-all disabled:opacity-50 disabled:scale-100"
                >
                  {status === "submitting" ? (
                    <span className="w-4 h-4 rounded-full border-2 border-[#09090b] border-t-transparent animate-spin" />
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>

              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
