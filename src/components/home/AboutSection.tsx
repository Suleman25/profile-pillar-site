import { motion, AnimatePresence } from "framer-motion"; // Added AnimatePresence for Accordion content
import { ChevronRight, Briefcase, GraduationCap, Laptop, Code, Server, Palette, Database, Users, Megaphone, Settings } from 'lucide-react'; // Added relevant icons
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"; // Using Shadcn Accordion

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
      staggerChildren: 0.1,
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
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] }
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

const headingLineVariant = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: {
        scaleX: 1,
        opacity: 1,
        transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0], delay: 0.2 },
        originX: 0 // Animate from left
    }
};


// --- Data with Icons ---
const skills = [
  { id: "frontend", name: "Frontend Development", icon: Laptop, description: "Building responsive and interactive UIs using React, Next.js, TypeScript, and Tailwind CSS. Proficient with state management and animation libraries like Framer Motion." },
  { id: "backend", name: "Backend Development", icon: Server, description: "Creating robust server-side applications with Node.js, Express, and REST APIs. Experienced in authentication, data validation, and API design." },
  { id: "database", name: "Database Management", icon: Database, description: "Designing schemas and writing efficient SQL queries for PostgreSQL. Experience with ORMs like Prisma, data normalization, and indexing." },
  { id: "marketing", name: "Social Media Marketing", icon: Megaphone, description: "Developing and executing social media strategies to boost brand awareness and engagement. Skilled in content creation, analytics, and campaign optimization." },
  { id: "uiux", name: "UI/UX Principles", icon: Palette, description: "Applying user-centered design principles for intuitive interfaces. Familiar with wireframing, prototyping, and ensuring accessibility standards." },
  { id: "devops", name: "DevOps Practices", icon: Settings, description: "Basic understanding of CI/CD pipelines, containerization with Docker, and deployment on platforms like Vercel. Familiar with Git workflows." },
];

const experiences = [
  { company: "Tech Solutions Inc.", position: "Junior Frontend Developer", period: "2023 - Present", icon: Briefcase, description: "Developed key features for enterprise web apps using React & TypeScript. Contributed to performance optimizations, reducing load times by 40%." },
  { company: "Digital Innovations", position: "Web Development Intern", period: "2022 - 2023", icon: Briefcase, description: "Assisted in building responsive interfaces and collaborated with UX team on user-centric features, increasing engagement by 25%. Gained experience with Git and agile methods." },
];

const education = [
  { institution: "University of Lahore", degree: "B.Sc. Information Engineering Technology", period: "2022 - 2026", icon: GraduationCap, description: "Comprehensive curriculum in software engineering, databases, web technologies, and networks. Active in university coding club." },
];

// --- Component ---
export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-gradient-to-b from-background via-muted/20 to-background"> {/* Consistent padding & background */}
      <div className="container">

        {/* Main About & Skills Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-start" // Use items-start
        >
          {/* About Me Text Column */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="flex flex-col items-start mb-2">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight gradient-text-primary">
                About Me
              </h2>
               {/* Animated underline */}
              <motion.div
                variants={headingLineVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="h-1 w-20 bg-gradient-to-r from-primary via-accent to-secondary rounded-full mt-2"
              />
            </div>

            {/* Staggered paragraphs */}
            <motion.div
              variants={containerVariants} // Stagger paragraphs inside
              className="space-y-4 text-muted-foreground text-base leading-relaxed"
            >
              <motion.p variants={paragraphVariants} custom={0}>
                Hello! I'm Muhammad Suleman, a dedicated Software Engineer and Full-Stack Developer driven by building innovative and impactful digital solutions. My academic journey in Information Engineering Technology is complemented by hands-on experience, allowing me to bridge theory and practice effectively.
              </motion.p>
              <motion.p variants={paragraphVariants} custom={1}>
                My passion lies in leveraging technologies like <strong className="font-medium text-primary">React</strong>, <strong className="font-medium text-primary">Node.js</strong>, and <strong className="font-medium text-primary">TypeScript</strong> to create clean, efficient, and user-centric applications. I focus on writing maintainable code and following best practices to deliver high-quality results.
              </motion.p>
              <motion.p variants={paragraphVariants} custom={2}>
                 With a background that also includes <strong className="font-medium text-secondary">Social Media Marketing</strong>, I bring a unique perspective that connects technical development with strategic digital presence, ensuring solutions meet both user needs and business goals.
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Skills Accordion Column */}
          <motion.div variants={itemVariants} className="space-y-6">
             <div className="flex flex-col items-start mb-2">
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight gradient-text-secondary">
                My Skillset
              </h3>
               <motion.div
                variants={headingLineVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="h-1 w-20 bg-gradient-to-r from-secondary via-accent to-primary rounded-full mt-2"
              />
            </div>

            {/* Using Shadcn Accordion for Skills */}
            <Accordion type="single" collapsible className="w-full space-y-2">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.id}
                  custom={index} // For potential staggering if needed within accordion itself
                  variants={itemVariants} // Animate each accordion item
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                >
                  <AccordionItem
                    value={`item-${skill.id}`}
                    className="border border-border/20 rounded-lg bg-background/50 backdrop-blur-sm px-4 transition-shadow hover:shadow-md"
                  >
                    <AccordionTrigger className="text-base md:text-lg font-medium hover:no-underline py-4 text-left">
                      <div className="flex items-center gap-3">
                        <skill.icon className="h-5 w-5 text-primary flex-shrink-0" />
                        <span>{skill.name}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground pt-1 pb-4 pl-2 border-l-2 border-primary/30 ml-[14px]"> {/* Adjusted padding/margin for content */}
                      {skill.description}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="mt-16 md:mt-24" // Consistent margin top
        >
          <div className="flex flex-col items-center mb-10 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight gradient-text text-center">
              Work Experience
            </h2>
            <motion.div
              variants={headingLineVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="h-1 w-20 bg-gradient-to-r from-primary via-accent to-secondary rounded-full mt-2"
            />
          </div>

          <div className="grid grid-cols-1 gap-6 md:gap-8 max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, transition: { type: 'spring', stiffness: 300, damping: 15 } }}
                className="group"
              >
                <Card className="bg-background/60 backdrop-blur-md border border-border/20 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                   <div className="w-1.5 bg-primary/70 absolute left-0 top-0 bottom-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                   <CardHeader className="relative pl-6">
                     <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-1 sm:gap-4">
                      <CardTitle className="text-xl text-primary flex items-center gap-2">
                          <exp.icon className="h-5 w-5 text-primary/80 inline-block flex-shrink-0"/>
                          {exp.position}
                      </CardTitle>
                      <span className="text-xs sm:text-sm font-medium text-muted-foreground whitespace-nowrap pt-1 sm:pt-0">
                        {exp.period}
                      </span>
                    </div>
                    <CardDescription className="text-base font-medium pt-1">{exp.company}</CardDescription>
                  </CardHeader>
                  <CardContent className="relative pl-6 pb-5">
                    <p className="text-muted-foreground text-sm md:text-base">{exp.description}</p>
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
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="mt-16 md:mt-24"
        >
           <div className="flex flex-col items-center mb-10 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight gradient-text-secondary text-center">
              Education
            </h2>
             <motion.div
              variants={headingLineVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="h-1 w-20 bg-gradient-to-r from-secondary via-accent to-primary rounded-full mt-2"
            />
          </div>

          <div className="grid grid-cols-1 gap-6 md:gap-8 max-w-4xl mx-auto">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, transition: { type: 'spring', stiffness: 300, damping: 15 } }}
                className="group"
              >
                <Card className="bg-background/60 backdrop-blur-md border border-border/20 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                   <div className="w-1.5 bg-secondary/70 absolute left-0 top-0 bottom-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                   <CardHeader className="relative pl-6">
                     <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-1 sm:gap-4">
                       <CardTitle className="text-xl text-secondary flex items-center gap-2">
                          <edu.icon className="h-5 w-5 text-secondary/80 inline-block flex-shrink-0"/>
                          {edu.degree}
                      </CardTitle>
                      <span className="text-xs sm:text-sm font-medium text-muted-foreground whitespace-nowrap pt-1 sm:pt-0">
                        {edu.period}
                      </span>
                    </div>
                    <CardDescription className="text-base font-medium pt-1">{edu.institution}</CardDescription>
                  </CardHeader>
                  <CardContent className="relative pl-6 pb-5">
                    <p className="text-muted-foreground text-sm md:text-base">{edu.description}</p>
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