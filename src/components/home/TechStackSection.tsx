
import { motion } from "framer-motion";
import { useState } from "react";

// Logo animation variants
const logoVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20
    }
  },
  hover: { 
    scale: 1.1,
    filter: "drop-shadow(0 0 6px rgba(255,255,255,0.5))",
    transition: { 
      duration: 0.3,
      ease: "easeInOut"
    }
  }
};

// Tech stack with logos and descriptions
const techStack = [
  { 
    name: "React", 
    icon: "/logos/react.svg", 
    color: "#61DAFB",
    description: "Building interactive UIs with component-based architecture and efficient state management for seamless user experiences."
  },
  { 
    name: "Node.js", 
    icon: "/logos/nodejs.svg", 
    color: "#43853D",
    description: "Creating efficient server-side applications with event-driven architecture and non-blocking I/O model."
  },
  { 
    name: "JavaScript", 
    icon: "/logos/javascript.svg", 
    color: "#F7DF1E",
    description: "Implementing dynamic web functionality with modern ES6+ features, closures, and asynchronous programming patterns."
  },
  { 
    name: "Next.js", 
    icon: "/logos/nextjs.svg", 
    color: "#FFFFFF",
    description: "Developing optimized React applications with server-side rendering, static generation, and integrated routing."
  },
  { 
    name: "TailwindCSS", 
    icon: "/logos/tailwindcss.svg", 
    color: "#06B6D4",
    description: "Creating highly customized UI designs with utility-first approach and responsive design principles."
  },
  { 
    name: "MongoDB", 
    icon: "/logos/mongodb.svg", 
    color: "#00ED64",
    description: "Building flexible document-based data models with efficient querying and aggregation pipelines."
  },
  { 
    name: "PostgreSQL", 
    icon: "/logos/postgresql.svg", 
    color: "#336791",
    description: "Designing robust relational database schemas with advanced SQL queries and transaction management."
  },
  { 
    name: "Django", 
    icon: "/logos/django.svg", 
    color: "#44B78B",
    description: "Building secure and scalable web applications with Python using Django's battle-tested framework."
  }
];

export function TechStackSection() {
  const [expandedTech, setExpandedTech] = useState<string | null>(null);

  const toggleDescription = (techName: string) => {
    setExpandedTech(expandedTech === techName ? null : techName);
  };

  return (
    <section id="tech-stack" className="py-20 bg-background/60">
      <div className="container">
        <div className="flex flex-col items-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl font-bold text-center gradient-text-secondary"
          >
            My Tech Stack
          </motion.h2>
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-3 h-1 w-32 bg-gradient-to-r from-primary via-accent to-secondary rounded-full"
          />
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6 justify-items-center">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
              variants={logoVariants}
              custom={index}
              className="flex flex-col items-center justify-center gap-3 relative"
            >
              <motion.div
                className="w-14 h-14 flex items-center justify-center overflow-hidden rounded-lg cursor-pointer"
                whileHover={{ 
                  y: -3,
                  boxShadow: `0 0 8px 1px ${tech.color}70`
                }}
                onClick={() => toggleDescription(tech.name)}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img 
                  src={tech.icon} 
                  alt={tech.name} 
                  className="w-full h-full"
                />
              </motion.div>
              <div className="flex items-center gap-1">
                <motion.span 
                  className="text-xs font-medium text-muted-foreground cursor-pointer"
                  whileHover={{ 
                    scale: 1.1,
                    color: tech.color
                  }}
                  onClick={() => toggleDescription(tech.name)}
                >
                  {tech.name}
                </motion.span>
              </div>
              
              {expandedTech === tech.name && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="absolute top-full mt-2 z-10 bg-card border border-border rounded-md shadow-lg p-3 w-48 text-xs text-muted-foreground"
                >
                  {tech.description}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
