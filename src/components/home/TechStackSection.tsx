import { motion, AnimatePresence } from "framer-motion"; // Added AnimatePresence
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card"; // Using Card for popover styling
import { FaReact, FaNodeJs, FaJs, FaPython, FaAws, FaGithub, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiPostgresql, SiDjango } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";

// --- Consistent Animation Variants ---
const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.17, 0.67, 0.83, 0.67] }
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08, // Slightly faster stagger for logos
      delayChildren: 0.1,
    },
  },
};

// Refined item variant specifically for the tech logo items
const techItemVariant = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 200, damping: 15, mass: 0.8 } // Springy entrance
  },
  hover: {
    y: -5, // Slight lift on hover
    scale: 1.05,
    transition: { type: "spring", stiffness: 300, damping: 10 }
  }
};

const headingLineVariant = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: {
        scaleX: 1,
        opacity: 1,
        transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0], delay: 0.2 },
        originX: 0
    }
};

// Popover animation
const popoverVariants = {
    initial: { opacity: 0, scale: 0.9, y: -10 },
    animate: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 20 } },
    exit: { opacity: 0, scale: 0.9, y: -5, transition: { duration: 0.15 } }
};

// --- Tech Stack Data --- (Ensure logo paths are correct relative to your public folder)
const techStack = [
  { name: "React", icon: <FaReact className="h-full w-full" />, color: "#61DAFB", description: "Building interactive UIs with component-based architecture." },
  { name: "Node.js", icon: <FaNodeJs className="h-full w-full" />, color: "#43853D", description: "Creating efficient, scalable server-side applications." },
  { name: "JavaScript", icon: <FaJs className="h-full w-full" />, color: "#F7DF1E", description: "Implementing dynamic web functionality with modern ES features." },
  { name: "Next.js", icon: <SiNextdotjs className="h-full w-full" />, color: "#FFFFFF", description: "Optimized React apps with SSR, SSG, and file-based routing." },
  { name: "TailwindCSS", icon: <SiTailwindcss className="h-full w-full" />, color: "#06B6D4", description: "Rapidly building custom UIs with a utility-first approach." },
  { name: "MongoDB", icon: <SiMongodb className="h-full w-full" />, color: "#00ED64", description: "Flexible NoSQL database for scalable data storage." },
  { name: "PostgreSQL", icon: <BiLogoPostgresql className="h-full w-full" />, color: "#336791", description: "Powerful relational database with advanced SQL capabilities." },
  { name: "Django", icon: <SiDjango className="h-full w-full" />, color: "#44B78B", description: "High-level Python framework for secure web applications." },
  { name: "Python", icon: <FaPython className="h-full w-full" />, color: "#3776AB", description: "Versatile language for backend, data science, and automation." },
  { name: "AWS", icon: <FaAws className="h-full w-full" />, color: "#FF9900", description: "Leveraging cloud services for scalable and robust solutions." },
  { name: "GitHub", icon: <FaGithub className="h-full w-full" />, color: "#181717", description: "Version control and collaboration platform for software development." },
  { name: "HTML", icon: <FaHtml5 className="h-full w-full" />, color: "#E34F26", description: "Standard markup language for creating web pages and web applications." },
  { name: "CSS", icon: <FaCss3Alt className="h-full w-full" />, color: "#1572B6", description: "Stylesheet language used for describing the presentation of a document written in HTML." }
];


// --- Component ---
export function TechStackSection() {
  // Store the name of the tech whose description is open
  const [expandedTech, setExpandedTech] = useState<string | null>(null);

  // Toggle function remains the same
  const toggleDescription = (techName: string) => {
    setExpandedTech(prev => (prev === techName ? null : techName));
  };

  return (
    <section id="tech-stack" className="py-16 md:py-24 bg-gradient-to-b from-background via-muted/20 to-background"> {/* Consistent padding & background */}
      <div className="container">

        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants} // Use standard section variant
          className="flex flex-col items-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center gradient-text-primary mb-4">
            Technologies I Use
          </h2>
          <motion.div
            variants={headingLineVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="h-1 w-20 bg-gradient-to-r from-primary via-accent to-secondary rounded-full"
          />
        </motion.div>

        {/* Tech Stack Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }} // Trigger slightly earlier
          // Adjust grid columns for different screen sizes
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 gap-x-6 gap-y-10 md:gap-x-8 md:gap-y-12 justify-items-center"
        >
          {techStack.map((tech) => (
            // Outer container for hover effect and positioning context
            <motion.div
              key={tech.name}
              variants={techItemVariant} // Use the specific springy variant
              whileHover="hover"
              className="flex flex-col items-center gap-2 relative group cursor-pointer"
              onClick={() => toggleDescription(tech.name)} // Make the whole item clickable
              aria-expanded={expandedTech === tech.name}
              aria-controls={`tech-desc-${tech.name}`}
            >
              {/* Logo Container - enhanced styling */}
              <div
                className="w-14 h-14 md:w-16 md:h-16 p-2 flex items-center justify-center rounded-xl bg-background/50 border border-border/20 shadow-sm transition-all duration-300 group-hover:border-primary/50 group-hover:bg-muted/50"
                 // Apply a subtle shadow glow on hover using the tech's color
                style={{ '--tech-glow-color': tech.color } as React.CSSProperties}
              >
                {tech.icon}
              </div>

              {/* Tech Name */}
              <span className="text-xs sm:text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors duration-200">
                {tech.name}
              </span>

              {/* Description Popover - absolutely positioned, animated with AnimatePresence */}
              <AnimatePresence>
                {expandedTech === tech.name && (
                  <motion.div
                    id={`tech-desc-${tech.name}`}
                    role="tooltip"
                    variants={popoverVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    // Positioning: Below the item, centered horizontally
                    className="absolute top-[115%] left-1/2 -translate-x-1/2 mt-1 z-20 w-44" // Adjusted width
                    // Prevent clicks inside the popover from closing it immediately
                    onClick={(e) => e.stopPropagation()}
                  >
                     {/* Use Card for consistent popover styling */}
                     <Card className="bg-card/95 backdrop-blur-sm border-border/30 shadow-xl rounded-lg overflow-hidden">
                        <CardContent className="p-3 text-xs text-popover-foreground">
                           {tech.description}
                        </CardContent>
                     </Card>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Optional: Add a subtle hint for interaction */}
         <motion.p
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           transition={{ delay: 0.8, duration: 0.5 }}
           viewport={{ once: true }}
           className="text-center text-xs text-muted-foreground mt-12"
         >
            Click on a logo to learn more about how I use the technology.
         </motion.p>

      </div>
       {/* CSS for the hover glow effect */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes techGlow {
          0% { box-shadow: 0 0 4px 0px var(--tech-glow-color, #fff); }
          50% { box-shadow: 0 0 12px 2px var(--tech-glow-color, #fff); }
          100% { box-shadow: 0 0 4px 0px var(--tech-glow-color, #fff); }
        }
        .group:hover .group-hover\\:border-primary\\/50 { /* Target specific element */
           /* Optional: Apply a subtle animation */
           /* animation: techGlow 1.5s ease-in-out infinite; */
           box-shadow: 0 1px 3px 0 rgba(0,0,0,0.1), 0 0 8px 1px var(--tech-glow-color); /* Static glow on hover */
        }
      `}} />
    </section>
  );
}