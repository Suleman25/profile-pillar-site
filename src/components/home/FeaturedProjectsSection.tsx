
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// This component is now just a wrapper that provides a title and section heading
export function FeaturedProjectsSection() {
  return (
    <section className="section-padding">
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
        </motion.div>
      </div>
    </section>
  );
}
