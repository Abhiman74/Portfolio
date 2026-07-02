"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Mail } from "lucide-react";
import { Github, Linkedin } from "@/components/Icons";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Tech Stack", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Stats", href: "#leetcode" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-[#09090b]/80 backdrop-blur-md border-b border-zinc-800/60 shadow-lg shadow-black/10"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="font-mono text-zinc-100 font-semibold tracking-wider hover:text-white transition-colors">
          &lt;ABHIMAN /&gt;
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-medium text-zinc-400 hover:text-zinc-100 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Social Actions / Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://github.com/Abhiman74"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-zinc-100 transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-zinc-100 transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-3.5 py-1.5 rounded-full bg-zinc-100 text-[#09090b] text-xs font-semibold hover:bg-white hover:scale-105 transition-all shadow-md"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-1 text-zinc-400 hover:text-zinc-100 md:hidden"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-full left-0 w-full bg-[#09090b]/95 border-b border-zinc-800/80 backdrop-blur-md py-6 px-6 md:hidden flex flex-col gap-4 shadow-xl"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-sm font-medium text-zinc-400 hover:text-zinc-100 py-1 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <hr className="border-zinc-800 my-1" />
          <div className="flex items-center justify-between">
            <div className="flex gap-4">
              <a
                href="https://github.com/Abhiman74"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-zinc-100 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-zinc-100 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 rounded-full bg-zinc-100 text-[#09090b] text-xs font-semibold"
            >
              Hire Me
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
}
