
import { HeroSection } from "@/components/home/HeroSection";
import { TechStackSection } from "@/components/home/TechStackSection";
import { FeaturedProjectsSection } from "@/components/home/FeaturedProjectsSection";
import { CTASection } from "@/components/home/CTASection";
import { AboutSection } from "@/components/home/AboutSection";
import { ContactSection } from "@/components/home/ContactSection";

export default function Home() {
  return (
    <div className="flex-1">
      <HeroSection />
      <div id="about">
        <AboutSection />
      </div>
      <div id="tech-stack">
        <TechStackSection />
      </div>
      <div id="projects">
        <FeaturedProjectsSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
      <CTASection />
    </div>
  );
}
