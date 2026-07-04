"use client";

import { Mail } from "lucide-react";
import { Github, Linkedin } from "@/components/Icons";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)]/30 py-12">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Info */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="font-semibold text-[var(--text)] tracking-tight text-sm font-sans flex items-center gap-0.5 font-sans">
            AS<span className="w-1.5 h-1.5 rounded-full bg-blue-600 inline-block mb-1"></span>
          </span>
          <span className="text-[10px] text-[var(--muted)] font-mono">
            &copy; {new Date().getFullYear()} Abhiman Singh Saharan. All rights reserved.
          </span>
        </div>

        {/* Middle: Status */}
        <div className="text-[10px] text-[var(--muted)] font-mono text-center md:text-left">
          Designed with Apple/Stripe aesthetics. Built with Next.js &amp; Tailwind CSS.
        </div>

        {/* Right: Socials */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Abhiman74"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--text-secondary)] hover:text-[var(--text)] transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/abhiman-singh-623176216/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--text-secondary)] hover:text-[var(--text)] transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="mailto:abhimansaharan1@gmail.com"
            className="text-[var(--text-secondary)] hover:text-rose-600 transition-colors"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

      </div>
    </footer>
  );
}
