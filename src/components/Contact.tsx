"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, AlertCircle, Mail, Download } from "lucide-react";
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
    <section id="contact" className="py-28 relative overflow-hidden bg-[#09090B] border-t border-[#262626]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-xs font-mono text-[#71717A] uppercase tracking-widest">08 / Connection</span>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mt-2 font-sans">
            Get In Touch
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-[#4F46E5] to-[#8B5CF6] mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left: Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-2xl font-bold text-white font-sans leading-tight">
              Let's build something together.
            </h3>
            
            <p className="text-base text-[#A1A1AA] leading-relaxed font-sans">
              I am interested in Software Engineering, AI/ML Product development, and Product Management opportunities. Whether you have a project idea, a job posting, or just want to chat about system design and agentic workflows, drop me a line!
            </p>

            <div className="space-y-4 pt-4 font-mono text-xs text-[#A1A1AA]">
              {/* Direct Gmail */}
              <a
                href="mailto:abhimansaharan@gmail.com"
                className="flex items-center gap-3 hover:text-white transition-colors"
              >
                <div className="p-2.5 rounded-lg bg-[#111113] border border-[#262626]">
                  <Mail className="w-4 h-4 text-[#8B5CF6]" />
                </div>
                <span>abhimansaharan@gmail.com</span>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Abhiman74"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-white transition-colors"
              >
                <div className="p-2.5 rounded-lg bg-[#111113] border border-[#262626]">
                  <Github className="w-4 h-4 text-white" />
                </div>
                <span>github.com/Abhiman74</span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/abhiman-singh-623176216/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-white transition-colors"
              >
                <div className="p-2.5 rounded-lg bg-[#111113] border border-[#262626]">
                  <Linkedin className="w-4 h-4 text-[#60A5FA]" />
                </div>
                <span>linkedin.com/in/abhiman-singh-623176216</span>
              </a>
            </div>

            {/* Quick Actions Bar */}
            <div className="flex flex-wrap items-center gap-3 pt-6">
              <a
                href="/abhimanResume.pdf"
                download
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#262626] bg-[#111113] text-white hover:bg-white/5 text-xs font-mono font-bold transition-all shadow-sm"
              >
                <span>Download Resume</span>
                <Download className="w-4 h-4 text-[#71717A]" />
              </a>

              <a
                href="mailto:abhimansaharan@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#4F46E5] to-[#8B5CF6] text-white text-xs font-mono font-bold hover:opacity-95 transition-all shadow-sm"
              >
                <span>Send Email</span>
              </a>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7">
            <div className="premium-card p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-[10px] font-mono text-[#71717A] uppercase tracking-widest block">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    disabled={status === "submitting"}
                    className="w-full h-11 px-4 rounded-lg border border-[#262626] bg-[#09090B] text-sm text-white placeholder-[#71717A] focus:outline-none focus:border-[#8B5CF6] transition-all font-sans"
                    placeholder="Jane Doe"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-[10px] font-mono text-[#71717A] uppercase tracking-widest block">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    disabled={status === "submitting"}
                    className="w-full h-11 px-4 rounded-lg border border-[#262626] bg-[#09090B] text-sm text-white placeholder-[#71717A] focus:outline-none focus:border-[#8B5CF6] transition-all font-sans"
                    placeholder="jane@example.com"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-[10px] font-mono text-[#71717A] uppercase tracking-widest block">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    disabled={status === "submitting"}
                    className="w-full p-4 rounded-lg border border-[#262626] bg-[#09090B] text-sm text-white placeholder-[#71717A] focus:outline-none focus:border-[#8B5CF6] transition-all font-sans resize-none"
                    placeholder="Describe your project, opportunity or message here..."
                  />
                </div>

                {/* Status messages */}
                <AnimatePresence mode="wait">
                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      className="flex items-center gap-2 text-xs font-mono text-[#E11D48] p-3 rounded-lg border border-[#E11D48]/10 bg-[#E11D48]/5"
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
                      className="flex items-center gap-2 text-xs font-mono text-[#10B981] p-3 rounded-lg border border-[#10B981]/10 bg-[#10B981]/5"
                    >
                      <CheckCircle className="w-4 h-4 shrink-0" />
                      <span>Transmission successful! I will get back to you shortly.</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status === "submitting" || status === "success"}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 h-11 rounded-lg bg-gradient-to-r from-[#4F46E5] to-[#8B5CF6] text-white font-semibold font-mono text-sm hover:opacity-95 active:scale-98 transition-all disabled:opacity-50 disabled:scale-100 cursor-pointer"
                >
                  {status === "submitting" ? (
                    <span className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
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
