
import { motion } from "framer-motion";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

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

const experiences = [
  {
    company: "Tech Solutions Inc.",
    position: "Junior Frontend Developer",
    period: "2023 - Present",
    description:
      "Leading frontend development for enterprise web applications. Implementing modern React patterns and optimizing performance, resulting in 40% faster load times.",
  },
  {
    company: "Digital Innovations",
    position: "Web Development Intern",
    period: "2022 - 2023",
    description:
      "Built responsive interfaces and collaborated with UX designers to implement user-centric features that increased user engagement by 25%.",
  },
];

const education = [
  {
    institution: "University of Lahore",
    degree: "Bachelor's in Information Engineering Technology",
    period: "2022 - 2026",
    description:
      "Focusing on software development, database systems, and web technologies.",
  },
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
            <div className="flex flex-col items-start">
              <motion.h2 
                variants={fadeIn} 
                className="text-2xl md:text-3xl font-bold gradient-text-primary"
              >
                About Me
              </motion.h2>
              <motion.div 
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="h-1 w-16 bg-gradient-to-r from-primary via-accent to-secondary rounded-full mt-2"
              />
            </div>
            
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
            <div className="flex flex-col items-start">
              <motion.h3 
                variants={fadeIn}
                className="text-xl md:text-2xl font-bold gradient-text-secondary"
              >
                Technical Skills
              </motion.h3>
              <motion.div 
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="h-1 w-16 bg-gradient-to-r from-accent to-primary rounded-full mt-2"
              />
            </div>
            
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
                      animate={{ rotate: expandedSkill === skill.id ? 90 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-primary"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </motion.div>
                  </div>
                  
                  {expandedSkill === skill.id && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-3 text-sm text-muted-foreground px-4 py-3 border-l-2 border-primary/30 bg-primary/5 rounded-r-md"
                    >
                      {skill.description}
                    </motion.p>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mt-16"
        >
          <div className="flex flex-col items-center mb-10">
            <motion.h2 
              variants={fadeIn}
              className="text-2xl md:text-3xl font-bold gradient-text-primary text-center"
            >
              Work Experience
            </motion.h2>
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="section-heading-line"
            />
          </div>
          
          <div className="grid grid-cols-1 gap-6 max-w-5xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div 
                key={exp.company} 
                variants={itemVariants}
                custom={index}
                whileHover={{ scale: 1.02 }}
                className="overflow-hidden"
              >
                <Card className="glass-card hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                      <CardTitle className="text-primary flex items-center">
                        {exp.position}
                        <motion.span 
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + index * 0.1 }}
                          className="ml-2"
                        >
                          <ChevronRight className="h-4 w-4 text-accent inline" />
                        </motion.span>
                      </CardTitle>
                      <span className="text-sm font-medium text-muted-foreground">
                        {exp.period}
                      </span>
                    </div>
                    <CardDescription className="font-medium text-lg">
                      {exp.company}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{exp.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mt-16"
        >
          <div className="flex flex-col items-center mb-10">
            <motion.h2 
              variants={fadeIn}
              className="text-2xl md:text-3xl font-bold gradient-text-primary text-center"
            >
              Education
            </motion.h2>
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="section-heading-line"
            />
          </div>
          
          <div className="grid grid-cols-1 gap-6 max-w-5xl mx-auto">
            {education.map((edu, index) => (
              <motion.div 
                key={edu.degree} 
                variants={itemVariants}
                custom={index}
                whileHover={{ scale: 1.02 }}
                className="overflow-hidden"
              >
                <Card className="glass-card hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                      <CardTitle className="text-primary flex items-center">
                        {edu.degree}
                        <motion.span 
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + index * 0.1 }}
                          className="ml-2"
                        >
                          <ChevronRight className="h-4 w-4 text-accent inline" />
                        </motion.span>
                      </CardTitle>
                      <span className="text-sm font-medium text-muted-foreground">
                        {edu.period}
                      </span>
                    </div>
                    <CardDescription className="font-medium text-lg">
                      {edu.institution}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{edu.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
