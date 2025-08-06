
import { HeroSection } from "@/components/home/HeroSection";
import { TechStackSection } from "@/components/home/TechStackSection";
import { FeaturedProjectsSection } from "@/components/home/FeaturedProjectsSection";
import { CTASection } from "@/components/home/CTASection";
import { AboutSection } from "@/components/home/AboutSection";
import { ContactSection } from "@/components/home/ContactSection";
import { CertificatesSection } from "@/components/home/CertificatesSection";
import { ProjectsContent } from "@/components/projects/ProjectsContent";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
export default function Home() {
  return (
    <div className="flex-1">
      <SmoothCursor />
      <HeroSection />
      <AboutSection />
      <TechStackSection />
      <div id="projects">
        <ProjectsContent isHomePage={true} />
      </div>
      <CertificatesSection />
      <ContactSection />
      <CTASection />
    </div>
  );
}
