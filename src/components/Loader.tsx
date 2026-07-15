"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      // Enable scroll after loading finishes
      document.body.style.overflow = "unset";
    }, 2200);

    // Disable scroll while loading
    document.body.style.overflow = "hidden";

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#09090B]"
        >
          <div className="relative flex flex-col items-center max-w-xs w-full px-6">
            {/* Logo/Name Typing Animation */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-2xl font-semibold tracking-widest text-foreground font-mono mb-4"
            >
              &lt;ABHIMAN /&gt;
            </motion.h1>
            
            {/* Progress line */}
            <div className="w-40 h-[2px] bg-card rounded-full overflow-hidden relative">
              <motion.div
                initial={{ left: "-100%" }}
                animate={{ left: "100%" }}
                transition={{
                  repeat: 0,
                  duration: 1.8,
                  ease: "easeInOut",
                }}
                className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 w-full"
              />
            </div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="text-xs text-muted-foreground mt-3 font-mono"
            >
              INITIALIZING EXPERIENCE
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
