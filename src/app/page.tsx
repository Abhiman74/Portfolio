import Navbar from "@/components/Navbar";
import BentoGrid from "@/components/BentoGrid";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import CommandPalette from "@/components/CommandPalette";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <>
      {/* Intro Loader */}
      <Loader />

      {/* Global Interactive Elements */}
      <ScrollProgress />
      <CommandPalette />

      {/* Header Navigation */}
      <Navbar />

      {/* Main Grid Content */}
      <main className="flex-1 w-full pt-24">
        {/* Bento Grid layout replacing traditional linear scroll sections */}
        <BentoGrid />
      </main>

      {/* Layout Footer */}
      <Footer />
    </>
  );
}
