import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Download, Send } from "lucide-react"; // Added Send icon
import { Link } from "react-router-dom"; // Assuming you might use this for contact
import { Button } from "@/components/ui/button"; // Keep using your Button component
import { useState, useEffect } from "react";

// Refined Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 }, // Slightly increased y for more noticeable entry
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15, // Slightly increased delay
      duration: 0.8, // Slightly longer duration
      ease: [0.4, 0, 0.2, 1] // Smoother ease ('easeOutExpo' like)
    }
  })
};

const staggerContainer = {
  hidden: {}, // No need for opacity here, handled by children
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.4 // Start slightly later
    }
  }
};

const titleCycleVariants = {
  initial: { opacity: 0, y: 25 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -25 },
  transition: {
    type: "spring",
    stiffness: 150,
    damping: 20,
    duration: 0.6
  }
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.85, rotate: -5 }, // Start slightly rotated
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 1.0,
      type: "spring",
      stiffness: 80,
      damping: 15,
      delay: 0.5 // Delay image appearance slightly
    }
  },
  hover: {
    scale: 1.03,
    boxShadow: "0 15px 40px rgba(0, 0, 0, 0.15)", // Enhanced shadow
    transition: { duration: 0.4, ease: "easeOut" }
  }
};

const jobTitles = [
  "Software Engineer",
  "Full-Stack Developer",
  "Social Media Marketer",
  "Creative Technologist" // Added another title
];

export function HeroSection() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % jobTitles.length);
    }, 3500); // Slightly longer interval

    return () => clearInterval(interval);
  }, []);

  const handleDownloadResume = () => {
    try {
      const link = document.createElement("a");
      link.href = "/CV[1].docx"; // Ensure this path is correct in your /public folder
      link.download = "Muhammad_Suleman_CV.docx";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading resume:", error);
      // Consider using a toast notification library for better UX
      alert("Sorry, there was an error downloading the resume. Please try again later.");
    }
  };

  return (
    <section className="hero-section-bg relative min-h-screen flex flex-col justify-center py-20 md:py-32 overflow-hidden"> {/* Added padding, overflow hidden, custom bg */}
      <div className="container relative z-10"> {/* Ensure content is above bg effects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 items-center"> {/* Increased gap */}

          {/* Text Content Column */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col gap-6 text-center md:text-left" // Center text on mobile
          >
            <motion.div variants={fadeInUp} custom={0}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tighter leading-tight"> {/* Tighter tracking, bold weight */}
                <span className="block text-muted-foreground/80 text-lg sm:text-xl font-medium mb-2">Hi, I'm</span> {/* Subdued intro */}
                <motion.span
                  className="block premium-gradient-text" // Apply custom gradient class
                  // Optional: animate gradient on hover/focus if needed
                >
                  Muhammad Suleman
                </motion.span>
              </h1>

              <div className="h-16 mt-4"> {/* Height adjusted for potentially taller text */}
                <AnimatePresence mode="wait">
                  <motion.p
                    key={currentTitleIndex}
                    className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground" // Use foreground color, slightly bolder
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={titleCycleVariants} // Use refined variants
                    transition={titleCycleVariants.transition}
                  >
                    {jobTitles[currentTitleIndex]}
                  </motion.p>
                </AnimatePresence>
              </div>
            </motion.div>

            <motion.p
              variants={fadeInUp}
              custom={1}
              className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto md:mx-0" // Max width for readability
            >
              Passionate about crafting elegant, high-performance digital experiences.
              Bridging the gap between creative ideas and robust technical solutions.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              variants={fadeInUp}
              custom={2}
              className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mt-6" // Responsive button layout
            >
               {/* Primary CTA - Example: Contact or Projects */}
              <Link to="/contact" className="w-full sm:w-auto"> {/* Link example */}
                <Button
                    size="lg"
                    className="w-full sm:w-auto button-glow-effect icon-lift-rotate group" // Added effects
                    variant="default" // Assuming default is your primary style
                >
                    Get in Touch
                    <Send className="ml-2 h-4 w-4 transition-transform duration-300 ease-out" />
                </Button>
              </Link>

              {/* Secondary CTA - Resume */}
              <Button
                onClick={handleDownloadResume}
                variant="secondary" // Use standard secondary variant
                size="lg"
                className="w-full sm:w-auto button-glow-effect icon-lift-rotate group" // Added effects
              >
                <span>My Resume</span>
                <Download className="ml-2 h-4 w-4 transition-transform duration-300 ease-out" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Image Column */}
          <motion.div
            initial="hidden"
            animate="visible"
            whileHover="hover"
            variants={imageVariants}
            className="flex justify-center items-center relative group" // Group for potential child hover effects
          >
             {/* Apply animated border here */}
            <div className="relative rounded-3xl p-1.5 animated-gradient-border image-border"> {/* Added padding for border, new border class */}
               <div className="rounded-[calc(1.5rem-6px)] overflow-hidden shadow-xl w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"> {/* Slightly larger on lg, inner rounding */}
                   {/* Optional: Inner subtle gradient overlay */}
                   <div className="absolute inset-0 bg-gradient-to-br from-black/0 via-black/0 to-black/10 opacity-60 group-hover:opacity-80 transition-opacity duration-300 z-10"></div>
                   <img
                     src="/lovable-uploads/cdd634d0-9844-4f05-88b1-6c2d27daec5f.png"
                     alt="Muhammad Suleman - Professional Portrait" // More descriptive alt text
                     className="w-full h-full object-cover relative z-0 transform scale-105 group-hover:scale-100 transition-transform duration-700 ease-out" // Subtle zoom out on hover
                   />
               </div>
            </div>
          </motion.div>
        </div>
      </div>
       {/* Optional: Add subtle shapes or background elements absolutely positioned */}
       {/* Example:
       <div className="absolute top-1/4 left-10 w-32 h-32 bg-primary/5 rounded-full filter blur-2xl opacity-50 animate-pulse"></div>
       <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-secondary/5 rounded-full filter blur-3xl opacity-50 animation-delay-400 animate-pulse"></div>
       */}
    </section>
  );
}