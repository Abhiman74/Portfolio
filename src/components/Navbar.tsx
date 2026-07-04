"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download, Sun, Moon } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem("theme") === "dark" || 
      (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches);
    
    setIsDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const nextDark = !isDarkMode;
    setIsDarkMode(nextDark);
    if (nextDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const navLinks = [
    { name: "Home", href: "#about" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-45 py-4 px-6 md:px-12 flex items-center justify-between">
      {/* Left Logo */}
      <a href="#about" className="text-xl font-bold tracking-tight text-[var(--text)] flex items-center gap-0.5 font-sans">
        AS<span className="w-1.5 h-1.5 rounded-full bg-blue-600 inline-block"></span>
      </a>

      {/* Center Floating Pill Navigation */}
      <nav className="hidden md:flex items-center gap-0.5 bg-[var(--card)]/80 border border-[var(--border)] backdrop-blur-xl px-2 py-1.5 rounded-full shadow-md">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="px-4 py-2 text-xs font-semibold text-[var(--text-secondary)] hover:text-[var(--text)] rounded-full hover:bg-[var(--surface)] transition-all font-sans"
          >
            {link.name}
          </a>
        ))}
      </nav>

      {/* Right Controls */}
      <div className="hidden md:flex items-center gap-4">
        {/* Dark Mode Toggle Switch */}
        <button
          onClick={toggleDarkMode}
          className="relative w-12 h-6.5 rounded-full bg-[var(--surface)] p-0.5 flex items-center cursor-pointer transition-colors duration-300"
        >
          <div
            className={`w-5.5 h-5.5 rounded-full bg-[var(--card)] flex items-center justify-center shadow transition-all duration-300 ${
              isDarkMode ? "translate-x-5.5" : "translate-x-0"
            }`}
          >
            {isDarkMode ? (
              <Moon className="w-3.5 h-3.5 text-zinc-300 animate-pulse" />
            ) : (
              <Sun className="w-3.5 h-3.5 text-amber-500" />
            )}
          </div>
        </button>

        {/* Download Resume Button */}
        <a
          href="/resume.pdf"
          download
          className="inline-flex items-center gap-1.5 px-4.5 py-2.5 rounded-full border border-[var(--border)] bg-[var(--card)] hover:bg-[var(--surface)] text-[var(--text-secondary)] hover:text-[var(--text)] text-xs font-bold transition-all shadow-sm font-sans"
        >
          <span>Resume</span>
          <Download className="w-3.5 h-3.5 text-[var(--muted)]" />
        </a>
      </div>

      {/* Mobile Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-[var(--text-secondary)] hover:text-[var(--text)] md:hidden bg-[var(--card)] border border-[var(--border)] rounded-full shadow-sm"
      >
        {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
      </button>

      {/* Mobile Nav Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-18 left-6 right-6 bg-[var(--card)]/95 border border-[var(--border)] backdrop-blur-md rounded-3xl p-6 md:hidden flex flex-col gap-4 shadow-xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-semibold text-[var(--text-secondary)] hover:text-[var(--text)] py-1 transition-colors font-sans"
              >
                {link.name}
              </a>
            ))}
            <hr className="border-[var(--border)] my-1" />
            <div className="flex items-center justify-between">
              <button
                onClick={toggleDarkMode}
                className="relative w-12 h-6.5 rounded-full bg-[var(--surface)] p-0.5 flex items-center cursor-pointer transition-colors duration-300"
              >
                <div
                  className={`w-5.5 h-5.5 rounded-full bg-[var(--card)] flex items-center justify-center shadow transition-all duration-300 ${
                    isDarkMode ? "translate-x-5.5" : "translate-x-0"
                  }`}
                >
                  {isDarkMode ? (
                    <Moon className="w-3 h-3 text-zinc-300" />
                  ) : (
                    <Sun className="w-3 h-3 text-amber-500" />
                  )}
                </div>
              </button>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-1 px-4 py-2 rounded-full border border-[var(--border)] bg-[var(--card)] text-[var(--text-secondary)] hover:text-[var(--text)] text-xs font-bold"
              >
                <span>Resume</span>
                <Download className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
