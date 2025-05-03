
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

// Animation variants
const fadeInVariants = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut"
    } 
  }
};

const buttonVariants = {
  hidden: { 
    opacity: 0,
    y: 10
  },
  visible: { 
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.4,
      duration: 0.5,
      ease: "easeOut"
    }
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: "easeInOut"
    }
  },
  tap: {
    scale: 0.95
  }
};

export function CTASection() {
  return (
    <section className="py-20 bg-primary/5">
      <div className="container">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInVariants}
          className="flex flex-col items-center text-center max-w-3xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-bold gradient-text-secondary">
            Let's Work Together
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            I'm currently available for freelance work or full-time positions.
            If you're interested in working together, please get in touch.
          </p>
          <motion.div
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <Button asChild className="mt-8 gradient-border" size="lg">
              <Link to="/contact">Contact Me</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
