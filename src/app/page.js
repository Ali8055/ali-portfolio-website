import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";
import { Great_Vibes, Poppins } from "next/font/google";
import WorkAndEducation from "./components/WorkAndEducation";
import SkillsSection from "./components/SkillsSection";

// const greatVibesFont = localFont({ src: "GreatVibes-Regular.otf" });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col ">
      <div className="container mt-24 mx-auto  py-4">
        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        <WorkAndEducation />
        <SkillsSection />
        <ProjectsSection />
        <EmailSection />
      </div>
    </main>
  );
}
