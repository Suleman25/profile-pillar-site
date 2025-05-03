import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

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

// Text animation variants
const textRevealVariants = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: { delay: 0.05 * i, duration: 0.5 }
  })
};

const paragraphVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.3 * i, duration: 0.7, ease: "easeOut" }
  })
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
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-14">
              <h1 className="text-3xl md:text-5xl font-bold gradient-text mb-8">
                About Me
              </h1>
            </div>

            {/* Enhanced About Me Content */}
            <div className="glass-card rounded-xl p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 z-0"></div>
              <div className="relative z-10">
                <motion.p 
                  custom={0}
                  variants={paragraphVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-lg leading-relaxed mb-5"
                >
                  I'm a passionate full-stack developer with a strong foundation in both front-end and back-end technologies. My journey in software development began with a curiosity about how digital experiences are crafted, which led me to dive deep into the world of web development.
                </motion.p>
                
                <motion.p 
                  custom={1}
                  variants={paragraphVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-lg leading-relaxed mb-5"
                >
                  With expertise in <span className="text-primary font-medium">React</span>, <span className="text-primary font-medium">JavaScript</span>, and <span className="text-secondary font-medium">Node.js</span>, I build responsive and intuitive user interfaces that deliver exceptional user experiences. My background in database management with <span className="text-primary font-medium">SQL</span> and <span className="text-secondary font-medium">PostgreSQL</span> allows me to design efficient data structures that power robust applications.
                </motion.p>
                
                <motion.p 
                  custom={2}
                  variants={paragraphVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-lg leading-relaxed mb-5"
                >
                  I'm currently pursuing my Bachelor's degree in Information Engineering Technology at the University of Lahore, where I'm expanding my knowledge in software architecture, system design, and emerging technologies. Beyond technical skills, I value clean code, thoughtful architecture, and collaborative development processes.
                </motion.p>
                
                <motion.p 
                  custom={3}
                  variants={paragraphVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-lg leading-relaxed"
                >
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through tech communities. I believe in continuous learning and pushing the boundaries of what's possible with code.
                </motion.p>
                
                <div className="mt-8 border-t border-white/10 pt-6">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="approach" className="border-white/10">
                      <AccordionTrigger className="text-primary hover:text-primary font-medium">My Approach to Development</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        I approach each project with a focus on user experience, performance, and maintainability. By combining technical expertise with creative problem-solving, I develop solutions that not only meet but exceed expectations. I believe in writing clean, well-documented code and embracing modern development practices.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="philosophy" className="border-white/10">
                      <AccordionTrigger className="text-primary hover:text-primary font-medium">My Learning Philosophy</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        The tech landscape is ever-evolving, and I'm committed to growing with it. I dedicate time each week to learning new technologies, refining my skills, and staying updated with industry best practices. This continuous learning mindset enables me to bring innovative solutions to every challenge.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </div>
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
            <h2 className="text-2xl md:text-3xl font-bold gradient-text">
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
            <h2 className="text-2xl md:text-3xl font-bold gradient-text">
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
