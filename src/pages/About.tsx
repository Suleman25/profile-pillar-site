
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const skills = [
  { 
    name: "React", 
    icon: "💻", 
    description: "Building modern and interactive user interfaces with React and its ecosystem."
  },
  { 
    name: "JavaScript", 
    icon: "🔧", 
    description: "Developing dynamic web applications with clean and efficient JavaScript code."
  },
  { 
    name: "Node.js", 
    icon: "⚙️", 
    description: "Creating backend services and RESTful APIs with Node.js and Express."
  },
  { 
    name: "CSS/Tailwind", 
    icon: "🎨", 
    description: "Designing responsive layouts and beautiful UI components with Tailwind CSS."
  },
  { 
    name: "SQL/PostgreSQL", 
    icon: "🗄️",
    description: "Designing and optimizing database schemas and queries for efficient data management."
  },
  { 
    name: "UX/UI Design", 
    icon: "✏️",
    description: "Creating user-centered designs that balance aesthetics and functionality."
  },
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

// Animation variants
const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  },
};

export default function About() {
  return (
    <div className="flex-1 pb-20">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-background to-muted/30">
        <div className="container">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-3xl md:text-5xl font-bold gradient-text-primary">
              About Me
            </h1>
            <p className="mt-6 text-xl text-muted-foreground">
              I'm a passionate frontend developer with experience crafting beautiful and functional user interfaces. I
              specialize in React, JavaScript, and modern web technologies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-padding">
        <div className="container max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
            className="mb-12 text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold gradient-text-primary">
              Technical Skills
            </h2>
            <p className="mt-4 text-muted-foreground">
              I'm constantly learning and expanding my skill set to stay current
              with the latest technologies.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{ scale: 1.03, y: -5 }}
                className="skill-card"
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{skill.icon}</div>
                  <div>
                    <h3 className="text-lg font-medium text-primary mb-2">{skill.name}</h3>
                    <p className="text-sm text-muted-foreground">{skill.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section-padding bg-muted/30">
        <div className="container max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
            className="mb-12 text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold gradient-text-primary">
              Work Experience
            </h2>
            <p className="mt-4 text-muted-foreground">
              My professional journey in software development.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid grid-cols-1 gap-6"
          >
            {experiences.map((exp, index) => (
              <motion.div 
                key={exp.company} 
                variants={itemVariants}
                custom={index}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="glass-card overflow-hidden">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                      <CardTitle className="text-primary">{exp.position}</CardTitle>
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
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section className="section-padding">
        <div className="container max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
            className="mb-12 text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold gradient-text-primary">
              Education
            </h2>
            <p className="mt-4 text-muted-foreground">
              My academic background and qualifications.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid grid-cols-1 gap-6"
          >
            {education.map((edu, index) => (
              <motion.div 
                key={edu.degree} 
                variants={itemVariants}
                custom={index}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="glass-card overflow-hidden">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                      <CardTitle className="text-primary">{edu.degree}</CardTitle>
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
          </motion.div>
        </div>
      </section>
    </div>
  );
}
