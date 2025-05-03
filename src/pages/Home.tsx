
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
      <AboutSection />
      <TechStackSection />
      <FeaturedProjectsSection />
      <ContactSection />
      <CTASection />
    </div>
  );
}
