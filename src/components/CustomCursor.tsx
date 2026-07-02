"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 40, stiffness: 400, mass: 0.4 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Hide native cursor only on fine pointer devices (desktops)
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!isFinePointer) return;

    document.body.classList.add("custom-cursor-active");

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 6);
      cursorY.set(e.clientY - 6);
      if (!visible) setVisible(true);
    };

    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    const handleHoverStart = () => setHovered(true);
    const handleHoverEnd = () => setHovered(false);

    // Attach hover listeners to interactive elements
    const attachHoverListeners = () => {
      const targets = document.querySelectorAll("a, button, input, textarea, select, [role='button'], .clickable");
      targets.forEach((target) => {
        target.addEventListener("mouseenter", handleHoverStart);
        target.addEventListener("mouseleave", handleHoverEnd);
      });
    };

    attachHoverListeners();

    // Create an observer to watch for DOM updates and attach to new elements
    const observer = new MutationObserver(() => {
      attachHoverListeners();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      observer.disconnect();
    };
  }, [cursorX, cursorY, visible]);

  if (!visible) return null;

  return (
    <>
      {/* Outer subtle halo trailing cursor */}
      <motion.div
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={{
          scale: hovered ? 3 : 1,
          backgroundColor: hovered ? "rgba(139, 92, 246, 0.15)" : "transparent",
          borderColor: hovered ? "rgba(139, 92, 246, 0.4)" : "rgba(255, 255, 255, 0.25)",
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.2 }}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-zinc-500 pointer-events-none z-50 mix-blend-screen hidden md:block"
      />
      {/* Inner dot */}
      <motion.div
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={{
          scale: hovered ? 0.5 : 1,
        }}
        className="fixed top-0 left-0 w-3 h-3 rounded-full bg-indigo-500 pointer-events-none z-50 translate-x-[10px] translate-y-[10px] hidden md:block"
      />
    </>
  );
}
