import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import Experience from "@/components/Experience";
import LeetCodeStats from "@/components/LeetCodeStats";
import GitHubStats from "@/components/GitHubStats";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import CustomCursor from "@/components/CustomCursor";
import CommandPalette from "@/components/CommandPalette";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <>
      {/* Intro Loader */}
      <Loader />

      {/* Global Interactive Elements */}
      <CustomCursor />
      <ScrollProgress />
      <CommandPalette />

      {/* Layout Header */}
      <Navbar />

      {/* Main Sections */}
      <main className="flex-1 w-full bg-[#09090B]">
        {/* Hero Landing */}
        <Hero />

        {/* Section 1: Profile & Bio */}
        <About />

        {/* Section 2: Portfolio Projects */}
        <Projects />

        {/* Section 3: Tech Stack */}
        <TechStack />

        {/* Section 4: Timeline Experience */}
        <Experience />

        {/* Section 5: Stats & Development Pipeline */}
        <section id="leetcode" className="py-24 relative overflow-hidden bg-black/20">
          <div className="max-w-5xl mx-auto px-6 space-y-12">
            <div>
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">05 / Analytics</span>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white mt-2">
                Problem Solving &amp; Open Source
              </h2>
              <div className="h-0.5 w-12 bg-gradient-to-r from-blue-500 to-purple-500 mt-4 rounded" />
            </div>

            <div className="grid grid-cols-1 gap-8">
              <LeetCodeStats />
              <GitHubStats />
            </div>
          </div>
        </section>

        {/* Section 6: Contact Gateway */}
        <Contact />
      </main>

      {/* Layout Footer */}
      <Footer />
    </>
  );
}
