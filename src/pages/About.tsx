
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const skills = [
  { name: "React", level: 90 },
  { name: "TypeScript", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "CSS/Tailwind", level: 95 },
  { name: "UX/UI Design", level: 75 },
];

const experiences = [
  {
    company: "Tech Solutions Inc.",
    position: "Senior Frontend Developer",
    period: "2022 - Present",
    description:
      "Led frontend development for enterprise web applications. Implemented modern React patterns and optimized performance, resulting in 40% faster load times.",
  },
  {
    company: "Digital Innovations",
    position: "Frontend Developer",
    period: "2019 - 2022",
    description:
      "Built responsive interfaces and collaborated with UX designers to implement user-centric features that increased user engagement by 25%.",
  },
  {
    company: "Creative Web Agency",
    position: "Web Developer Intern",
    period: "2018 - 2019",
    description:
      "Assisted in developing marketing websites for clients using React and worked on improving accessibility standards.",
  },
];

const education = [
  {
    institution: "University of Technology",
    degree: "Master's in Computer Science",
    period: "2017 - 2019",
    description:
      "Focused on Human-Computer Interaction and Advanced Web Technologies. Graduated with honors.",
  },
  {
    institution: "State University",
    degree: "Bachelor's in Software Engineering",
    period: "2013 - 2017",
    description:
      "Core curriculum included data structures, algorithms, and software development methodologies.",
  },
];

// Animation variants
const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 }
  },
};

export default function About() {
  return (
    <div className="flex-1 pb-20">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-background to-muted/50">
        <div className="container">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              About Me
            </h1>
            <p className="mt-6 text-xl text-muted-foreground">
              I'm a passionate frontend developer with over 5 years of
              experience crafting beautiful and functional user interfaces. I
              specialize in React, TypeScript, and modern web technologies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-padding">
        <div className="container max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
            className="mb-12 text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
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
            viewport={{ once: true }}
            variants={containerVariants}
            className="space-y-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                custom={index}
                className="space-y-2"
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">
                    {skill.level}%
                  </span>
                </div>
                <Progress value={skill.level} className="h-2" />
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
            viewport={{ once: true }}
            variants={sectionVariants}
            className="mb-12 text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Work Experience
            </h2>
            <p className="mt-4 text-muted-foreground">
              My professional journey in software development.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 gap-6"
          >
            {experiences.map((exp, index) => (
              <motion.div 
                key={exp.company} 
                variants={itemVariants}
                custom={index}
              >
                <Card className="bg-background/80 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                      <CardTitle>{exp.position}</CardTitle>
                      <span className="text-sm font-medium text-muted-foreground">
                        {exp.period}
                      </span>
                    </div>
                    <CardDescription className="text-primary font-medium">
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
            viewport={{ once: true }}
            variants={sectionVariants}
            className="mb-12 text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Education
            </h2>
            <p className="mt-4 text-muted-foreground">
              My academic background and certifications.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 gap-6"
          >
            {education.map((edu, index) => (
              <motion.div 
                key={edu.degree} 
                variants={itemVariants}
                custom={index}
              >
                <Card className="bg-background/80 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                      <CardTitle>{edu.degree}</CardTitle>
                      <span className="text-sm font-medium text-muted-foreground">
                        {edu.period}
                      </span>
                    </div>
                    <CardDescription className="text-primary font-medium">
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
