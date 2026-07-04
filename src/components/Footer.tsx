"use client";

import { Mail } from "lucide-react";
import { Github, Linkedin } from "@/components/Icons";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-900 bg-zinc-950/20 py-12">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Info */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="font-mono text-zinc-300 font-semibold tracking-wider text-xs">
            &lt;ABHIMAN /&gt;
          </span>
          <span className="text-[10px] text-zinc-500 font-mono">
            &copy; {new Date().getFullYear()} Abhiman Singh Saharan. All rights reserved.
          </span>
        </div>

        {/* Middle: Status */}
        <div className="text-[10px] text-zinc-500 font-mono text-center md:text-left">
          Designed with Stripe/Vercel styling cues. Built with Next.js &amp; Tailwind CSS.
        </div>

        {/* Right: Socials */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Abhiman74"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-white transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-white transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="mailto:abhimansaharan@gmail.com"
            className="text-zinc-500 hover:text-white transition-colors"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

      </div>
    </footer>
  );
}
