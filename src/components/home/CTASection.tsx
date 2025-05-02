
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-20 bg-primary/5">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
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
  );
}
