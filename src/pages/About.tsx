import { motion } from "framer-motion";
import { ArrowDown, BookOpen, Briefcase, Code, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

// Skills data
const skills = [
  { name: "JavaScript", category: "Languages" },
  { name: "TypeScript", category: "Languages" },
  { name: "HTML/CSS", category: "Languages" },
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Redux", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Express", category: "Backend" },
  { name: "MongoDB", category: "Backend" },
  { name: "PostgreSQL", category: "Backend" },
  { name: "Supabase", category: "Backend" },
  { name: "Git", category: "Tools" },
  { name: "Docker", category: "Tools" },
  { name: "Jest", category: "Tools" },
  { name: "GitHub Actions", category: "Tools" }
];

// Group skills by category
const groupedSkills = skills.reduce((acc, skill) => {
  if (!acc[skill.category]) {
    acc[skill.category] = [];
  }
  acc[skill.category].push(skill);
  return acc;
}, {} as Record<string, typeof skills>);

export default function About() {
  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-3xl md:text-5xl font-bold">About Me</h1>
            <p className="mt-4 text-xl text-muted-foreground">
              Get to know more about my background, skills, and what motivates me.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="section-padding bg-muted/50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-6"
            >
              <h2 className="text-2xl md:text-3xl font-bold">My Journey</h2>
              <div className="prose dark:prose-invert">
                <p>
                  I'm a passionate Software Engineer with over 5 years of experience building web applications.
                  My journey began when I built my first website in college, and I've been hooked ever since.
                </p>
                <p>
                  With a background in Computer Science from the University of Lahore, I've developed a strong 
                  foundation in software development principles and practices. I enjoy solving complex problems and
                  creating user-friendly interfaces that deliver exceptional experiences.
                </p>
                <p>
                  Throughout my career, I've worked with various technologies and frameworks, allowing me to
                  develop a versatile skill set that can be applied to different projects. I'm particularly
                  interested in web performance optimization and building accessible applications.
                </p>
                <p>
                  When I'm not coding, you can find me exploring hiking trails, reading tech blogs, or
                  experimenting with new recipes in the kitchen.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-bold">Education</h3>
                </div>
                <div className="space-y-4">
                  <div className="rounded-lg bg-card p-4 shadow">
                    <h4 className="font-semibold">BSc in Information Engineering Technology</h4>
                    <p className="text-sm text-muted-foreground">
                      University of Lahore • 2021 - 2025
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-bold">Experience</h3>
                </div>
                <div className="space-y-4">
                  <div className="rounded-lg bg-card p-4 shadow">
                    <h4 className="font-semibold">Senior Software Engineer</h4>
                    <p className="text-sm text-muted-foreground">
                      Tech Solutions Inc. • 2021 - Present
                    </p>
                  </div>
                  <div className="rounded-lg bg-card p-4 shadow">
                    <h4 className="font-semibold">Software Developer</h4>
                    <p className="text-sm text-muted-foreground">
                      WebDev Agency • 2018 - 2021
                    </p>
                  </div>
                  <div className="rounded-lg bg-card p-4 shadow">
                    <h4 className="font-semibold">Junior Developer</h4>
                    <p className="text-sm text-muted-foreground">
                      Startup Co. • 2017 - 2018
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="mt-12 flex justify-center">
            <Button variant="outline" size="lg">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold">
              <span className="flex items-center justify-center gap-2">
                <Code className="h-6 w-6 text-primary" />
                My Skills
              </span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              I've developed expertise in various technologies throughout my career.
              Here are some of the key skills I bring to the table.
            </p>
          </motion.div>

          <div className="grid gap-8">
            {Object.entries(groupedSkills).map(([category, skills], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="space-y-4"
              >
                <h3 className="text-xl font-semibold">{category}</h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium"
                    >
                      {skill.name}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section className="py-20 bg-primary/5">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold">My Goals</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              I'm constantly learning and evolving as a developer.
              Here are some of the things I'm currently focused on:
            </p>

            <div className="mt-8 grid gap-4">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                className="p-4 rounded-lg bg-background shadow-sm"
              >
                <p className="font-medium">Mastering Cloud Architecture</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="p-4 rounded-lg bg-background shadow-sm"
              >
                <p className="font-medium">Contributing to Open Source Projects</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="p-4 rounded-lg bg-background shadow-sm"
              >
                <p className="font-medium">Exploring AI/ML Integration in Web Apps</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className="p-4 rounded-lg bg-background shadow-sm"
              >
                <p className="font-medium">Sharing Knowledge Through Technical Writing</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
