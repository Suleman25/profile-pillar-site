
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  })
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const jobTitles = [
  "Software Engineer",
  "Full-Stack Developer",
  "Social Media Marketer"
];

export function HeroSection() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % jobTitles.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  const handleDownloadResume = () => {
    // Create a link element
    const link = document.createElement("a");
    
    // Set the link's href to the resume PDF file
    // Note: This assumes you have a resume.pdf file in your public folder
    link.href = "/resume.pdf";
    
    // Set download attribute to suggest a filename when downloaded
    link.download = "muhammad_suleman_resume.pdf";
    
    // Append to the document
    document.body.appendChild(link);
    
    // Trigger the click event to start the download
    link.click();
    
    // Clean up
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-[calc(100vh-4rem)] flex flex-col justify-center">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col gap-6"
          >
            <motion.div variants={fadeInUp}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                <span className="block">Hi, I'm</span>
                <motion.span 
                  className="block mt-2 gradient-text-primary"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                >
                  Muhammad Suleman
                </motion.span>
              </h1>
              
              <div className="h-16 mt-4">
                <AnimatePresence mode="wait">
                  <motion.p 
                    key={currentTitleIndex}
                    className="text-xl sm:text-2xl font-heading text-primary"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ 
                      type: "spring",
                      stiffness: 100,
                      damping: 15,
                      duration: 0.5 
                    }}
                  >
                    {jobTitles[currentTitleIndex]}
                  </motion.p>
                </AnimatePresence>
              </div>
            </motion.div>
            <motion.p 
              variants={fadeInUp} 
              custom={1} 
              className="text-lg text-muted-foreground"
            >
              I build responsive and performant web applications using modern technologies.
              Passionate about creating elegant solutions to complex problems.
            </motion.p>
            <motion.div 
              variants={fadeInUp} 
              custom={2} 
              className="flex flex-wrap gap-4"
            >
              <Button asChild size="lg" className="group">
                <Link to="#projects">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="#contact">Contact Me</Link>
              </Button>
              <Button 
                onClick={handleDownloadResume} 
                variant="secondary" 
                size="lg" 
                className="group"
              >
                <span>Download Resume</span>
                <Download className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.8,
              type: "spring",
              stiffness: 100,
              damping: 20
            }}
            className="flex justify-center"
          >
            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
              className="relative rounded-full overflow-hidden border-4 border-primary/20 shadow-xl w-64 h-64 md:w-80 md:h-80"
            >
              <img 
                src="/lovable-uploads/cdd634d0-9844-4f05-88b1-6c2d27daec5f.png"
                alt="Muhammad Suleman"
                className="w-full h-full object-cover"
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
