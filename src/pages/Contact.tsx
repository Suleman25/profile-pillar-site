
import { useState } from "react";
import { motion } from "framer-motion";
import { Loader2, Mail, MapPin, MessageSquare, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Contact info animation variants
const iconAnimation = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  },
  hover: { 
    scale: 1.2,
    rotate: 5,
    transition: { type: "spring", stiffness: 400, damping: 10 }
  }
};

const textAnimation = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { type: "spring", stiffness: 100, damping: 10 }
  }
};

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Get In Touch
            </h1>
            <p className="mt-4 text-xl text-muted-foreground">
              Have a question or want to work together? Drop me a message!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-10"
            >
              <motion.div variants={fadeInUp}>
                <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                  Contact Information
                </h2>
                <p className="text-muted-foreground">
                  Feel free to reach out through any of these channels. I'm always
                  open to discussing new projects, creative ideas, or
                  opportunities to be part of your vision.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="space-y-6">
                <motion.div 
                  className="flex items-start space-x-4"
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: true }}
                >
                  <motion.div 
                    className="bg-primary/10 p-3 rounded-full"
                    variants={iconAnimation}
                  >
                    <Mail className="h-6 w-6 text-primary" />
                  </motion.div>
                  <motion.div variants={textAnimation}>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-muted-foreground">hello@example.com</p>
                  </motion.div>
                </motion.div>

                <motion.div 
                  className="flex items-start space-x-4"
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: true }}
                >
                  <motion.div 
                    className="bg-primary/10 p-3 rounded-full"
                    variants={iconAnimation}
                  >
                    <Phone className="h-6 w-6 text-primary" />
                  </motion.div>
                  <motion.div variants={textAnimation}>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </motion.div>
                </motion.div>

                <motion.div 
                  className="flex items-start space-x-4"
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: true }}
                >
                  <motion.div 
                    className="bg-primary/10 p-3 rounded-full"
                    variants={iconAnimation}
                  >
                    <MapPin className="h-6 w-6 text-primary" />
                  </motion.div>
                  <motion.div variants={textAnimation}>
                    <h3 className="font-medium">Location</h3>
                    <p className="text-muted-foreground">
                      San Francisco, California
                    </p>
                  </motion.div>
                </motion.div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="pt-8 border-t border-border"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.h3 
                  className="text-lg font-medium mb-4"
                  variants={{ 
                    hidden: { opacity: 0, y: 10 }, 
                    visible: { opacity: 1, y: 0, transition: { delay: 0.2 } } 
                  }}
                >
                  Availability
                </motion.h3>
                <motion.p 
                  className="text-muted-foreground"
                  variants={{ 
                    hidden: { opacity: 0, y: 10 }, 
                    visible: { opacity: 1, y: 0, transition: { delay: 0.3 } } 
                  }}
                >
                  I'm currently available for freelance work or full-time
                  positions. If you have a project that needs coding skills, I'm
                  your developer!
                </motion.p>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-card rounded-xl shadow-sm border p-6 md:p-8"
            >
              <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Send a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Your email"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="What's this about?"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Your message"
                    rows={6}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
