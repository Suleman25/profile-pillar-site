
import { Link } from "react-router-dom";
import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

// Animation variants
const footerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

const iconVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20
    }
  },
  hover: {
    scale: 1.2,
    transition: {
      duration: 0.2
    }
  }
};

export function Footer() {
  return (
    <motion.footer 
      className="border-t"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={footerVariants}
    >
      <div className="container py-8 md:py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <motion.div 
            variants={itemVariants}
            className="flex flex-col items-center md:items-start gap-2"
          >
            <Link to="/" className="font-bold text-xl">
              <span className="gradient-text-primary">Muhammad Suleman</span>
            </Link>
            <p className="text-sm text-muted-foreground text-center md:text-left">
              Software Engineer & Full-Stack Developer
            </p>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="flex gap-4"
          >
            <motion.a
              href="https://github.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-2 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              aria-label="GitHub"
              variants={iconVariants}
              whileHover="hover"
            >
              <Github className="h-5 w-5" />
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-2 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              aria-label="LinkedIn"
              variants={iconVariants}
              whileHover="hover"
            >
              <Linkedin className="h-5 w-5" />
            </motion.a>
            <motion.a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-2 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              aria-label="Instagram"
              variants={iconVariants}
              whileHover="hover"
            >
              <Instagram className="h-5 w-5" />
            </motion.a>
            <motion.a
              href="mailto:sulemanjamil177@gmail.com"
              className="rounded-full p-2 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              aria-label="Email"
              variants={iconVariants}
              whileHover="hover"
            >
              <Mail className="h-5 w-5" />
            </motion.a>
          </motion.div>
        </div>
        
        <motion.div 
          variants={itemVariants}
          className="mt-8 pt-6 border-t text-center text-sm text-muted-foreground"
        >
          <p>Developed by Muhammad Suleman</p>
        </motion.div>
      </div>
    </motion.footer>
  );
}
