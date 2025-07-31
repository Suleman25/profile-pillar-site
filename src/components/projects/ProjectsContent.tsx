import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Github, ListTodo, Code, BarChart3, Layers, MessageSquare, MessageCircle, Calculator, User, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Project data
const projects = [
  {
    id: 1,
    title: "Todo-Buddy",
    description:
      "A comprehensive task management application with drag-and-drop functionality, categories, priorities, and deadline notifications to boost productivity. Built with Supabase for authentication and data storage.",
    image: "/lovable-uploads/38806cf3-03a7-4ad9-a41d-8849fbcfba42.png",
    icon: <ListTodo className="h-24 w-24 text-primary" />,
    category: "Web",
    tags: ["React", "TypeScript", "TailwindCSS", "Supabase"],
    githubUrl: "https://github.com/Suleman25/lovable-todo-buddy",
    demoUrl: "#",
  },
  {
    id: 2,
    title: "Joy Sync Message",
    description: "A real-time chat application dashboard built with React, Tailwind CSS, Shadcn UI, Supabase, and Socket.io, developed using Vite and deployed with Vercel for seamless communication.",
    image: "/lovable-uploads/chat-app-dashboard.png",
    icon: <MessageSquare className="h-24 w-24 text-primary" />,
    category: "Web",
    tags: ["React", "TailwindCSS", "Shadcn UI", "Supabase", "Socket.io", "Vite", "Vercel"],
    githubUrl: "https://github.com/Suleman25/joy-sync-message.git",
    demoUrl: "#",
  },
  {
    id: 3,
    title: "Chatbot",
    description: "An AI-powered chatbot using React, Tailwind CSS, and Google AI Studio's Gemini API for natural language processing.",
    image: "/lovable-uploads/chat-bot.png",
    icon: <MessageCircle className="h-24 w-24 text-primary" />,
    category: "AI",
    tags: ["React", "TailwindCSS", "Google AI Studio", "Gemini API"],
    githubUrl: "https://github.com/Suleman25/chatbot.git",
    demoUrl: "#",
  },
  {
    id: 4,
    title: "Age Calculator",
    description: "A simple web-based age calculator application built with React, TypeScript, and Tailwind CSS.",
    image: "/lovable-uploads/age-calculator.png",
    icon: <Calculator className="h-24 w-24 text-primary" />,
    category: "Web",
    tags: ["React", "TypeScript", "TailwindCSS"],
    githubUrl: "https://github.com/Suleman25/CodeAlpha_AgeCalculator.git",
    demoUrl: "#",
  },
  {
    id: 5,
    title: "Profile Pillar Site",
    description: "A personal portfolio website to showcase projects and skills.",
    image: "/lovable-uploads/portfolio.png",
    icon: <User className="h-24 w-24 text-primary" />,
    category: "Web",
    tags: ["React", "TypeScript", "TailwindCSS", "Vite"],
    githubUrl: "https://github.com/Suleman25/profile-pillar-site.git",
    demoUrl: "#",
  },
];

// Categories for filtering
const categories = ["All", "Web", "Mobile", "AI"];

interface ProjectsContentProps {
  isHomePage?: boolean;
}

export function ProjectsContent({ isHomePage = false }: ProjectsContentProps) {
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter projects based on active category
  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((project) => project.category === activeCategory);

  return (
    <div className="flex-1">
      {!isHomePage && (
        // Hero Section only on the dedicated Projects page
        <section className="py-20 md:py-32">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">My Projects</h1>
              <p className="mt-4 text-xl text-muted-foreground">
                Explore my latest work and the technologies I've used to build them.
              </p>
            </motion.div>
          </div>
        </section>
      )}

      {/* Featured Projects Section */}
      <section className="section-padding">
        <div className="container">
          {isHomePage && (
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold gradient-text text-center">
                Featured Projects
              </h2>
              <motion.div 
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="section-heading-line"
              />
            </motion.div>
          )}

          {/* Filter */}
          <div className="mb-8 flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="h-full"
              >
                <Card className="h-full flex flex-col overflow-hidden group">
                  <div className="aspect-video w-full overflow-hidden bg-muted flex items-center justify-center">
                    {project.image ? (
                      <motion.img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.05 }}
                      />
                    ) : (
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className="flex items-center justify-center p-8 bg-primary/10 rounded-full"
                      >
                        {project.icon}
                      </motion.div>
                    )}
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>{project.title}</CardTitle>
                      <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                        {project.category}
                      </span>
                    </div>
                    <CardDescription>
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex items-center justify-between">
                    {project.demoUrl && project.demoUrl !== "#" && (
                      <Button variant="ghost" size="sm" asChild>
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                          View Demo
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button variant={project.demoUrl && project.demoUrl !== "#" ? "outline" : "ghost"} size={project.demoUrl && project.demoUrl !== "#" ? "icon" : "sm"} asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                          {project.demoUrl && project.demoUrl !== "#" ? <Github className="h-4 w-4" /> : "View on GitHub"}
                          {project.demoUrl && project.demoUrl === "#" && <Github className="ml-2 h-4 w-4" />}
                        </a>
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="py-12 text-center">
              <p className="text-muted-foreground">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
