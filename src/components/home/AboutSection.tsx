
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
};

const skills = [
  {
    id: 1,
    name: "Frontend Development",
    description: "Building responsive and interactive user interfaces using React, JavaScript, and modern CSS frameworks like Tailwind CSS. Experienced in creating engaging UI components and animations with Framer Motion."
  },
  {
    id: 2,
    name: "Backend Development",
    description: "Creating robust server-side applications with Node.js, Express, and working with REST APIs. Implementing authentication systems, data validation, and efficient database queries."
  },
  {
    id: 3,
    name: "Database Management",
    description: "Designing database schemas and writing efficient queries using SQL, PostgreSQL, and MongoDB. Experience with data normalization, indexing strategies, and query optimization for improved performance."
  },
  {
    id: 4,
    name: "Social Media Marketing",
    description: "Developing and implementing social media strategies to increase brand awareness and engagement. Creating content calendars, analyzing metrics, and optimizing campaigns based on audience insights."
  },
  {
    id: 5,
    name: "UI/UX Design",
    description: "Creating user-centered designs that balance aesthetics with functionality. Skilled in wireframing, prototyping, and implementing responsive designs that provide excellent user experiences across devices."
  },
  {
    id: 6,
    name: "DevOps Practices",
    description: "Setting up CI/CD pipelines, container deployment with Docker, and managing cloud infrastructure on platforms like AWS and Vercel. Experience with automated testing and monitoring systems."
  }
];

export function AboutSection() {
  const [expandedSkill, setExpandedSkill] = useState<number | null>(null);

  const toggleSkill = (skillId: number) => {
    setExpandedSkill(expandedSkill === skillId ? null : skillId);
  };

  return (
    <section id="about" className="section-padding bg-background/60">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.h2 
              variants={fadeIn} 
              className="text-2xl md:text-3xl font-bold gradient-text-primary"
            >
              About Me
            </motion.h2>
            
            <motion.div 
              variants={fadeIn}
              className="space-y-4 text-muted-foreground"
            >
              <motion.p 
                variants={fadeIn} 
                className="leading-relaxed"
              >
                Hello! I'm Muhammad Suleman, a passionate Software Engineer and Full-Stack Developer with a keen interest in building innovative digital solutions. Currently pursuing my Bachelor's in Information Engineering Technology at the University of Lahore (2022-2026), I combine academic knowledge with practical experience to create impactful applications.
              </motion.p>
              
              <motion.p 
                variants={fadeIn} 
                className="leading-relaxed"
              >
                My journey in technology began with a fascination for how software can solve real-world problems. Over the years, I've developed expertise in JavaScript, React, Node.js, and database technologies including SQL and PostgreSQL. I'm committed to writing clean, efficient code that delivers exceptional user experiences.
              </motion.p>
              
              <motion.p 
                variants={fadeIn} 
                className="leading-relaxed"
              >
                Beyond coding, I have a strong background in Social Media Marketing, allowing me to bridge the gap between technical implementation and effective digital presence. This dual perspective helps me create solutions that are not only technically sound but also aligned with business objectives and user needs.
              </motion.p>
            </motion.div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.h3 
              variants={fadeIn}
              className="text-xl md:text-2xl font-bold gradient-text-secondary"
            >
              Technical Skills
            </motion.h3>
            
            <div className="space-y-4">
              {skills.map((skill) => (
                <motion.div
                  key={skill.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="skill-card"
                >
                  <div 
                    onClick={() => toggleSkill(skill.id)}
                    className="flex justify-between items-center cursor-pointer"
                  >
                    <h4 className="font-medium text-lg">{skill.name}</h4>
                    <motion.div
                      animate={{ rotate: expandedSkill === skill.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="h-4 w-4 text-muted-foreground" />
                    </motion.div>
                  </div>
                  
                  {expandedSkill === skill.id && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-2 text-sm text-muted-foreground"
                    >
                      {skill.description}
                    </motion.p>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
