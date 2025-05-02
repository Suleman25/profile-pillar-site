
import { motion } from "framer-motion";
import { ArrowRight, Github, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  })
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

export default function Home() {
  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-4rem)] flex flex-col justify-center">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="flex flex-col gap-6"
            >
              <motion.div variants={fadeInUp}>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                  <span className="block">Hi, I'm</span>
                  <motion.span 
                    className="text-primary block mt-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                  >
                    Muhammad Suleman
                  </motion.span>
                </h1>
                <p className="mt-4 text-xl text-muted-foreground">
                  Software Engineer & Full-Stack Developer
                </p>
              </motion.div>
              <motion.p 
                variants={fadeInUp} 
                custom={1} 
                className="text-lg text-muted-foreground"
              >
                I build responsive and performant web applications using modern technologies.
                Passionate about creating elegant solutions to complex problems.
              </motion.p>
              <motion.div 
                variants={fadeInUp} 
                custom={2} 
                className="flex flex-wrap gap-4"
              >
                <Button asChild size="lg">
                  <Link to="/projects">
                    View Projects
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/contact">Contact Me</Link>
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.8,
                type: "spring",
                stiffness: 100,
                damping: 20
              }}
              className="flex justify-center"
            >
              <motion.div 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
                className="rounded-full overflow-hidden border-4 border-primary/20 shadow-xl w-64 h-64 md:w-80 md:h-80"
              >
                <img 
                  src="/lovable-uploads/cdd634d0-9844-4f05-88b1-6c2d27daec5f.png"
                  alt="Muhammad Suleman"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Skills Section */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl font-bold text-center mb-12"
          >
            My Tech Stack
          </motion.h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              "React", "Node.js", "JavaScript", "Next.js", 
              "TailwindCSS", "MongoDB", "PostgreSQL", "Django"
            ].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                className="flex flex-col items-center justify-center p-4 rounded-lg bg-background shadow-sm transition-all"
              >
                <span className="text-sm font-medium">{skill}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="section-padding">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-between items-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold">Featured Projects</h2>
            <Button asChild variant="outline">
              <Link to="/projects">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                whileHover={{ y: -10 }}
                className="group rounded-lg overflow-hidden border bg-card text-card-foreground shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="aspect-video w-full overflow-hidden bg-muted">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    src={`https://images.unsplash.com/photo-148859052${i}505-98d2b5aba04b`}
                    alt={`Project ${i}`}
                    className="h-full w-full object-cover object-center transition-all"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold">Project Title {i}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    A brief description of this amazing project and the technologies used to build it.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold text-muted-foreground">
                      React
                    </span>
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold text-muted-foreground">
                      JavaScript
                    </span>
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold text-muted-foreground">
                      TailwindCSS
                    </span>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <Link
                      to={`/projects/${i}`}
                      className="text-sm font-medium text-primary hover:underline"
                    >
                      View Details
                    </Link>
                    <div className="flex items-center gap-2">
                      <a
                        href="#"
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
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center text-center max-w-3xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-bold">
              Let's Work Together
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              I'm currently available for freelance work or full-time positions.
              If you're interested in working together, please get in touch.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button asChild className="mt-8" size="lg">
                <Link to="/contact">Contact Me</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
