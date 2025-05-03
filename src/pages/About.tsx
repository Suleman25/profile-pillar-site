import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
// Import professional icons (assuming you have lucide-react installed)
import { Laptop, Code, Server, Palette, Database, UserCheck, Briefcase, GraduationCap } from 'lucide-react';

// --- Data with Icons ---
const skills = [
  { name: "React & Ecosystem", icon: Laptop, description: "Building modern, interactive UIs with React, Next.js, and state management." },
  { name: "JavaScript & TypeScript", icon: Code, description: "Developing dynamic applications with clean, efficient, and type-safe code." },
  { name: "Node.js & Backend", icon: Server, description: "Creating performant RESTful APIs and backend services using Node.js/Express." },
  { name: "CSS & Tailwind", icon: Palette, description: "Designing responsive, accessible, and beautiful UIs with modern CSS and Tailwind." },
  { name: "SQL & Databases", icon: Database, description: "Designing schemas and optimizing queries for relational databases like PostgreSQL." },
  { name: "UX/UI Principles", icon: UserCheck, description: "Applying user-centered design thinking to create intuitive and effective interfaces." },
];

const experiences = [
  {
    company: "Tech Solutions Inc.",
    position: "Junior Frontend Developer",
    period: "2023 - Present",
    icon: Briefcase, // Add relevant icon
    description:
      "Developed and maintained key features for enterprise web apps using React & TypeScript. Contributed to performance optimizations, achieving a 40% reduction in load times.",
  },
  {
    company: "Digital Innovations",
    position: "Web Development Intern",
    period: "2022 - 2023",
    icon: Briefcase,
    description:
      "Assisted senior developers in building responsive interfaces. Collaborated with UX team to implement features enhancing user engagement by 25%. Gained hands-on experience with Git and agile workflows.",
  },
];

const education = [
  {
    institution: "University of Lahore",
    degree: "B.Sc. Information Engineering Technology",
    period: "2022 - 2026",
    icon: GraduationCap, // Add relevant icon
    description:
      "Comprehensive curriculum focused on software engineering, database systems, web technologies, and computer networks. Active member of the university coding club.",
  },
];

// --- Refined Animation Variants ---
const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.17, 0.67, 0.83, 0.67] } // Smoother ease-out cubic
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Slightly faster stagger
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] } // Quick ease-out
  },
};

const paragraphVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 * i, duration: 0.6, ease: "easeOut" }
  })
};

// --- Component ---
export default function About() {
  return (
    <div className="flex-1 pb-24 md:pb-32"> {/* Consistent padding bottom */}

      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        className="pt-20 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-background via-background to-muted/30" // Subtle gradient
      >
        <div className="container max-w-4xl">
            <div className="text-center mb-12 md:mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight gradient-text-primary mb-4">
                About Me
              </h1>
              <motion.p
                variants={paragraphVariants} custom={0}
                className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
              >
                Crafting seamless digital experiences with code and creativity.
              </motion.p>
            </div>

            {/* Polished About Me Content Card */}
            <motion.div
              variants={containerVariants} // Apply stagger to paragraphs inside
              className="bg-background/60 backdrop-blur-lg border border-border/20 rounded-xl shadow-sm p-6 md:p-10 relative overflow-hidden"
            >
              {/* Optional subtle background element */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-50 -z-10"></div>

              <div className="relative z-10 space-y-5">
                <motion.p variants={paragraphVariants} custom={1} className="text-base md:text-lg leading-relaxed text-foreground/90">
                  I'm a dedicated Full-Stack Developer driven by a passion for building elegant and efficient web solutions. My journey started with a fascination for how technology connects people, evolving into a deep dive into modern web development practices.
                </motion.p>

                <motion.p variants={paragraphVariants} custom={2} className="text-base md:text-lg leading-relaxed text-foreground/90">
                  Leveraging expertise in <strong className="font-medium text-primary">React</strong>, <strong className="font-medium text-primary">TypeScript</strong>, and <strong className="font-medium text-secondary">Node.js</strong>, I architect and implement robust applications focusing on user experience and performance. My skills extend to database design (<strong className="font-medium text-primary">SQL/PostgreSQL</strong>) and crafting visually appealing, responsive interfaces with <strong className="font-medium text-primary">Tailwind CSS</strong>.
                </motion.p>

                <motion.p variants={paragraphVariants} custom={3} className="text-base md:text-lg leading-relaxed text-foreground/90">
                  Currently pursuing a B.Sc. in Information Engineering Technology, I actively seek opportunities to apply theoretical knowledge to real-world challenges. I thrive in collaborative environments, value clean code principles, and am committed to continuous learning in this ever-evolving field.
                </motion.p>

                {/* Integrated Accordion for Philosophy/Approach */}
                <motion.div variants={paragraphVariants} custom={4} className="pt-4">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="approach" className="border-border/30">
                      <AccordionTrigger className="text-base font-medium text-primary hover:text-primary/90 hover:no-underline">
                        My Development Approach
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground text-sm md:text-base pt-2">
                        I prioritize user-centric design, performance optimization, and writing maintainable, well-documented code. My goal is to deliver solutions that are not only functional but also scalable and delightful to use.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="philosophy" className="border-border/30 border-b-0">
                       <AccordionTrigger className="text-base font-medium text-primary hover:text-primary/90 hover:no-underline">
                        Continuous Learning
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground text-sm md:text-base pt-2">
                        Technology evolves rapidly. I dedicate consistent time to exploring new tools, frameworks, and best practices to ensure I bring current and innovative solutions to every project.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </motion.div>
              </div>
            </motion.div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <section className="py-16 md:py-24">
        <div className="container max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }} // Trigger animation when 30% is visible
            variants={sectionVariants}
            className="mb-12 md:mb-16 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight gradient-text-secondary">
              Technical Expertise
            </h2>
            <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-xl mx-auto">
              Core technologies and tools I utilize to build robust applications.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{ scale: 1.03, transition: { type: 'spring', stiffness: 300, damping: 15 } }}
                className="group" // Add group for potential group-hover effects
              >
                {/* Using Card component for consistency */}
                <Card className="h-full bg-background/50 border-border/20 hover:border-primary/40 hover:bg-muted/40 transition-colors duration-300 shadow-sm hover:shadow-md">
                  <CardHeader className="flex flex-row items-start gap-4 pb-4">
                    <div className="p-2 bg-primary/10 rounded-full">
                      <skill.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors pt-1"> {/* Use CardTitle */}
                      {skill.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{skill.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Experience & Education Section (Combined or Separate) - Example with Combined Title */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container max-w-5xl">
           <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
            className="mb-12 md:mb-16 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight gradient-text">
              My Journey
            </h2>
            <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-xl mx-auto">
              Professional experience and academic background.
            </p>
          </motion.div>

          {/* Experience */}
           <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="space-y-8 mb-16" // Add space between items and margin bottom
           >
             <h3 className="text-2xl font-semibold text-center text-primary mb-6">Work Experience</h3>
             {experiences.map((exp) => (
              <motion.div
                key={exp.company}
                variants={itemVariants}
                whileHover={{ scale: 1.015, transition: { type: 'spring', stiffness: 300, damping: 15 } }}
                className="group"
              >
                <Card className="bg-background/70 backdrop-blur-sm border-border/20 hover:border-border/40 transition-colors duration-300 shadow-sm hover:shadow-md overflow-hidden">
                   {/* Optional Accent Border */}
                   <div className="w-1 bg-primary/70 absolute left-0 top-0 bottom-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                   <CardHeader className="relative pl-6"> {/* Add padding left for accent */}
                    <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-1 sm:gap-4">
                      <CardTitle className="text-xl text-primary">{exp.position}</CardTitle>
                      <span className="text-xs sm:text-sm font-medium text-muted-foreground whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>
                    <CardDescription className="text-base font-medium pt-1">{exp.company}</CardDescription>
                  </CardHeader>
                  <CardContent className="relative pl-6">
                    <p className="text-muted-foreground text-sm md:text-base">{exp.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
           </motion.div>

          {/* Education */}
           <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="space-y-8" // Add space between items
           >
             <h3 className="text-2xl font-semibold text-center text-primary mb-6">Education</h3>
             {education.map((edu) => (
              <motion.div
                key={edu.degree}
                variants={itemVariants}
                whileHover={{ scale: 1.015, transition: { type: 'spring', stiffness: 300, damping: 15 } }}
                className="group"
              >
                <Card className="bg-background/70 backdrop-blur-sm border-border/20 hover:border-border/40 transition-colors duration-300 shadow-sm hover:shadow-md overflow-hidden">
                   {/* Optional Accent Border */}
                   <div className="w-1 bg-secondary/70 absolute left-0 top-0 bottom-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                   <CardHeader className="relative pl-6">
                     <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-1 sm:gap-4">
                      <CardTitle className="text-xl text-secondary">{edu.degree}</CardTitle> {/* Maybe use secondary color */}
                      <span className="text-xs sm:text-sm font-medium text-muted-foreground whitespace-nowrap">
                        {edu.period}
                      </span>
                    </div>
                    <CardDescription className="text-base font-medium pt-1">{edu.institution}</CardDescription>
                  </CardHeader>
                  <CardContent className="relative pl-6">
                    <p className="text-muted-foreground text-sm md:text-base">{edu.description}</p>
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