
import { motion } from "framer-motion";
import { ArrowRight, Github, ListTodo, Code, BarChart3, Layers } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function FeaturedProjectsSection() {
  const featuredProjects = [
    {
      id: 1,
      title: "Todo-Buddy",
      description:
        "A comprehensive task management application with drag-and-drop functionality, categories, priorities, and deadline notifications to boost productivity. Built with Supabase for authentication and data storage.",
      image: "/lovable-uploads/38806cf3-03a7-4ad9-a41d-8849fbcfba42.png",
      icon: <ListTodo className="h-16 w-16 text-primary" />,
      tags: ["React", "TypeScript", "TailwindCSS", "Supabase"],
      githubUrl: "https://github.com/Suleman25/lovable-todo-buddy",
      demoUrl: "#",
    },
    {
      id: 2,
      title: "Analytics Dashboard",
      description:
        "Interactive analytics dashboard with real-time data visualization, customizable widgets, and comprehensive reporting features.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      icon: <BarChart3 className="h-16 w-16 text-primary" />,
      tags: ["React", "TypeScript", "Recharts", "Redux"],
      githubUrl: "#",
      demoUrl: "#",
    },
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold gradient-text-primary text-center">
            Featured Projects
          </h2>
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="section-heading-line"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-6 flex justify-center"
          >
            <Button asChild variant="outline" className="hover-arrow">
              <Link to="/projects">
                View All Projects
                <motion.span 
                  className="custom-arrow"
                  initial={{ x: 0 }}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowRight className="ml-2 h-4 w-4" />
                </motion.span>
              </Link>
            </Button>
          </motion.div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group rounded-lg overflow-hidden border bg-card text-card-foreground shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-video w-full overflow-hidden bg-muted flex items-center justify-center">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold text-muted-foreground transition-colors duration-200 hover:bg-primary/10 hover:text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <Link
                    to="/projects"
                    className="text-sm font-medium text-primary hover-arrow fancy-underline"
                  >
                    View Details
                    <motion.span 
                      className="custom-arrow"
                      initial={{ x: 0 }}
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowRight className="ml-1 h-3 w-3 inline" />
                    </motion.span>
                  </Link>
                  <div className="flex items-center gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full p-1.5 text-muted-foreground hover:text-foreground transition-colors hover:bg-muted"
                      aria-label="GitHub"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full p-1.5 text-muted-foreground hover:text-foreground transition-colors hover:bg-muted"
                      aria-label="Live Demo"
                    >
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
