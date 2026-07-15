"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Tech Stack", href: "#tech-stack" },
    { name: "Experience", href: "#experience" },
    { name: "GitHub", href: "#github" },
    { name: "LeetCode", href: "#leetcode" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#09090B]/80 border-b border-[#262626] backdrop-blur-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Left Logo */}
        <a
          href="#hero"
          className="text-lg font-extrabold tracking-tight text-white flex items-center gap-1 font-sans"
        >
          AS
          <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#4F46E5] to-[#8B5CF6] inline-block"></span>
        </a>

        {/* Center Navigation Pill */}
        <nav className="hidden md:flex items-center gap-1 bg-[#111113]/40 border border-[#262626] backdrop-blur-xl px-1.5 py-1 rounded-full shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3.5 py-1.5 text-xs font-medium text-[#A1A1AA] hover:text-white rounded-full hover:bg-white/5 transition-all font-mono"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Controls */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="/abhimanResume.pdf"
            download
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#262626] bg-[#111113] hover:bg-white/5 text-[#A1A1AA] hover:text-white text-xs font-mono transition-all shadow-sm"
          >
            <span>Resume</span>
            <Download className="w-3.5 h-3.5 text-[#71717A]" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
          className="p-2 text-[#A1A1AA] hover:text-white md:hidden bg-[#111113] border border-[#262626] rounded-full shadow-sm cursor-pointer"
        >
          {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
      </div>

      {/* Mobile Nav Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-16 left-6 right-6 bg-[#111113]/95 border border-[#262626] backdrop-blur-md rounded-2xl p-6 md:hidden flex flex-col gap-4 shadow-2xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-[#A1A1AA] hover:text-white py-1 transition-colors font-mono"
              >
                {link.name}
              </a>
            ))}
            <hr className="border-[#262626] my-1" />
            <a
              href="/abhimanResume.pdf"
              download
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full border border-[#262626] bg-[#111113] text-[#A1A1AA] hover:text-white text-xs font-mono"
            >
              <span>Resume</span>
              <Download className="w-3.5 h-3.5" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
