import Navbar from "@/components/Navbar";
import Loader from "@/components/Loader";
import CommandPalette from "@/components/CommandPalette";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import Experience from "@/components/Experience";
import GitHubStats from "@/components/GitHubStats";
import LeetCodeStats from "@/components/LeetCodeStats";
import Currently from "@/components/Currently";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Intro Loader */}
      <Loader />

      {/* Interactive Global Utilities */}
      <ScrollProgress />
      <CommandPalette />

      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Main Sequential Scroll Sections */}
      <main className="flex-1 w-full">
        <Hero />
        <About />
        <Projects />
        <TechStack />
        <Experience />
        <GitHubStats />
        <LeetCodeStats />
        <Currently />
        <Contact />
      </main>

      {/* Global Footer */}
      <Footer />
    </>
  );
}
