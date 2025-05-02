
import { HeroSection } from "@/components/home/HeroSection";
import { TechStackSection } from "@/components/home/TechStackSection";
import { FeaturedProjectsSection } from "@/components/home/FeaturedProjectsSection";
import { CTASection } from "@/components/home/CTASection";

export default function Home() {
  return (
    <div className="flex-1">
      <HeroSection />
      <TechStackSection />
      <FeaturedProjectsSection />
      <CTASection />
    </div>
  );
}
