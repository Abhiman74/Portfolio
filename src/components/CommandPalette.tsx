"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, CornerDownLeft, ExternalLink, Mail, FileText } from "lucide-react";
import { Github, Linkedin } from "@/components/Icons";

interface CommandItem {
  id: string;
  title: string;
  category: string;
  shortcut?: string[];
  action: () => void;
  icon?: React.ReactNode;
}

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const sections = [
    { id: "hero", name: "Home" },
    { id: "about", name: "About Me" },
    { id: "projects", name: "Projects" },
    { id: "skills", name: "Tech Stack" },
    { id: "experience", name: "Experience" },
    { id: "leetcode", name: "LeetCode & Stats" },
    { id: "contact", name: "Contact" }
  ];

  const commands: CommandItem[] = [
    ...sections.map(section => ({
      id: `scroll-${section.id}`,
      title: `Jump to ${section.name}`,
      category: "Navigation",
      action: () => {
        const el = document.getElementById(section.id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
        setIsOpen(false);
      }
    })),
    {
      id: "social-github",
      title: "Open GitHub Profile",
      category: "External Links",
      shortcut: ["G", "H"],
      icon: <Github className="w-4 h-4" />,
      action: () => {
        window.open("https://github.com/Abhiman74", "_blank");
        setIsOpen(false);
      }
    },
    {
      id: "social-linkedin",
      title: "Open LinkedIn Profile",
      category: "External Links",
      shortcut: ["L", "I"],
      icon: <Linkedin className="w-4 h-4" />,
      action: () => {
        window.open("https://linkedin.com", "_blank"); // Add LinkedIn placeholder
        setIsOpen(false);
      }
    },
    {
      id: "action-email",
      title: "Send Email",
      category: "Actions",
      icon: <Mail className="w-4 h-4" />,
      action: () => {
        window.open("mailto:abhimansaharan@gmail.com");
        setIsOpen(false);
      }
    },
    {
      id: "action-resume",
      title: "Download Resume",
      category: "Actions",
      shortcut: ["R", "S"],
      icon: <FileText className="w-4 h-4" />,
      action: () => {
        alert("Resume download triggered (placeholder)");
        setIsOpen(false);
      }
    }
  ];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen(prev => !prev);
      }
      
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Autofocus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      setSelectedIndex(0);
      setSearch("");
    }
  }, [isOpen]);

  const filteredCommands = commands.filter(cmd =>
    cmd.title.toLowerCase().includes(search.toLowerCase()) ||
    cmd.category.toLowerCase().includes(search.toLowerCase())
  );

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex(prev => (prev + 1) % filteredCommands.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex(prev => (prev - 1 + filteredCommands.length) % filteredCommands.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (filteredCommands[selectedIndex]) {
        filteredCommands[selectedIndex].action();
      }
    }
  };

  // Scroll active item into view
  useEffect(() => {
    if (listRef.current) {
      const activeEl = listRef.current.children[selectedIndex] as HTMLElement;
      if (activeEl) {
        activeEl.scrollIntoView({ block: "nearest" });
      }
    }
  }, [selectedIndex]);

  return (
    <>
      {/* Floating K trigger info in page corners */}
      <div className="fixed bottom-6 right-6 z-40 hidden md:block">
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 px-3 py-2 rounded-lg border border-zinc-800 bg-[#0d0d0f]/90 text-zinc-400 text-xs shadow-lg backdrop-blur hover:text-zinc-200 transition-all active:scale-95"
        >
          <span>Press</span>
          <kbd className="px-1.5 py-0.5 rounded border border-zinc-700 bg-zinc-800 text-[10px] font-mono leading-none">⌘</kbd>
          <kbd className="px-1.5 py-0.5 rounded border border-zinc-700 bg-zinc-800 text-[10px] font-mono leading-none">K</kbd>
          <span>to navigate</span>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh]">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            />

            {/* Menu Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: -8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -8 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="relative w-full max-w-lg mx-4 rounded-xl border border-zinc-800 bg-[#121214] shadow-2xl shadow-black/50 overflow-hidden"
              onKeyDown={handleKeyDown}
            >
              {/* Input Bar */}
              <div className="flex items-center gap-3 px-4 border-b border-zinc-800/80">
                <Search className="w-5 h-5 text-zinc-500 shrink-0" />
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Type a command or search..."
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setSelectedIndex(0);
                  }}
                  className="w-full h-12 bg-transparent text-sm text-zinc-200 placeholder-zinc-500 focus:outline-none"
                />
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-xxs px-1.5 py-0.5 rounded border border-zinc-800 bg-zinc-900 text-zinc-500 hover:text-zinc-300 transition-colors"
                >
                  ESC
                </button>
              </div>

              {/* Items List */}
              <div
                ref={listRef}
                className="max-h-[320px] overflow-y-auto p-2 space-y-0.5"
              >
                {filteredCommands.length > 0 ? (
                  filteredCommands.map((cmd, index) => {
                    const isSelected = index === selectedIndex;
                    return (
                      <button
                        key={cmd.id}
                        onClick={cmd.action}
                        onMouseEnter={() => setSelectedIndex(index)}
                        className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-left text-xs transition-all ${
                          isSelected
                            ? "bg-zinc-800/80 text-white"
                            : "text-zinc-400 hover:text-zinc-200"
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          {cmd.icon ? (
                            cmd.icon
                          ) : (
                            <CornerDownLeft className="w-3.5 h-3.5 text-zinc-600" />
                          )}
                          <span>{cmd.title}</span>
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-zinc-900 text-zinc-600 ml-2 font-mono">
                            {cmd.category}
                          </span>
                        </div>

                        {cmd.shortcut && (
                          <div className="flex items-center gap-1">
                            {cmd.shortcut.map(key => (
                              <kbd
                                key={key}
                                className="px-1.5 py-0.5 rounded border border-zinc-700 bg-zinc-800 text-[10px] font-mono text-zinc-400"
                              >
                                {key}
                              </kbd>
                            ))}
                          </div>
                        )}
                      </button>
                    );
                  })
                ) : (
                  <div className="py-8 text-center text-zinc-500 text-xs font-mono">
                    No results found for &quot;{search}&quot;
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
