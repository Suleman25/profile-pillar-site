
import { motion } from "framer-motion";
import { ArrowRight, Github, ListTodo } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function FeaturedProjectsSection() {
  return (
    <section className="section-padding">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-between items-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold gradient-text-primary">
            Featured Projects
          </h2>
          <Button asChild variant="outline">
            <Link to="/projects">
              View All
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -10 }}
            className="group rounded-lg overflow-hidden border bg-card text-card-foreground shadow-sm hover:shadow-lg transition-all duration-300"
          >
            <div className="aspect-video w-full overflow-hidden bg-muted flex items-center justify-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="flex items-center justify-center p-8 bg-primary/10 rounded-full"
              >
                <ListTodo className="h-24 w-24 text-primary" />
              </motion.div>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold">Todo-Buddy</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                A comprehensive task management application with drag-and-drop functionality, categories, priorities, and deadline notifications to boost productivity.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold text-muted-foreground">
                  React
                </span>
                <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold text-muted-foreground">
                  TypeScript
                </span>
                <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold text-muted-foreground">
                  TailwindCSS
                </span>
                <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold text-muted-foreground">
                  Firebase
                </span>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <Link
                  to="/projects"
                  className="text-sm font-medium text-primary hover:underline"
                >
                  View Details
                </Link>
                <div className="flex items-center gap-2">
                  <a
                    href="https://github.com/yourusername/todo-buddy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full p-1 text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full p-1 text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="Live Demo"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
