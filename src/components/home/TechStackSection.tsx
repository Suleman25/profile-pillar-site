
import { motion } from "framer-motion";

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

// Tech stack with logos
const techStack = [
  { name: "React", icon: "/logos/react.svg", color: "#61DAFB" },
  { name: "Node.js", icon: "/logos/nodejs.svg", color: "#43853D" },
  { name: "JavaScript", icon: "/logos/javascript.svg", color: "#F7DF1E" },
  { name: "Next.js", icon: "/logos/nextjs.svg", color: "#FFFFFF" },
  { name: "TailwindCSS", icon: "/logos/tailwindcss.svg", color: "#06B6D4" },
  { name: "MongoDB", icon: "/logos/mongodb.svg", color: "#00ED64" },
  { name: "PostgreSQL", icon: "/logos/postgresql.svg", color: "#336791" },
  { name: "Django", icon: "/logos/django.svg", color: "#44B78B" }
];

export function TechStackSection() {
  return (
    <section className="py-20 bg-background/60">
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-bold text-center mb-12 gradient-text-secondary"
        >
          My Tech Stack
        </motion.h2>
        
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
              className="flex flex-col items-center justify-center gap-3"
            >
              <motion.div
                className="w-14 h-14 flex items-center justify-center overflow-hidden rounded-lg"
                whileHover={{ 
                  y: -3,
                  boxShadow: `0 0 8px 1px ${tech.color}70`
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img 
                  src={tech.icon} 
                  alt={tech.name} 
                  className="w-full h-full"
                />
              </motion.div>
              <motion.span 
                className="text-xs font-medium text-muted-foreground"
                whileHover={{ 
                  scale: 1.1,
                  color: tech.color
                }}
              >
                {tech.name}
              </motion.span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
