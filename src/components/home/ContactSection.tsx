import { useState } from "react";
import { motion } from "framer-motion";
import { Loader2, Mail, MapPin, Phone, Send, Github, Linkedin, Instagram } from "lucide-react"; // Added Send, Loader2, social icons
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label"; // Import Label
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast"; // Corrected path assuming it's in ui
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; // Import Card components

// --- Consistent Animation Variants (from previous examples) ---
const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.17, 0.67, 0.83, 0.67] }
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] }
  },
};

// Reusing refined contact item animations
const contactItemWrapperVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0], delay: 0.1 } // Add slight delay
    },
    hover: {
        scale: 1.03, // Subtle scale on hover
        backgroundColor: "hsl(var(--muted) / 0.5)",
        transition: { type: "spring", stiffness: 350, damping: 15 }
    }
};

const iconWrapperAnimation = {
  initial: { scale: 0.8, opacity: 0 },
  animate: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 200, damping: 12, delay: 0.2 }
  },
};

const textAnimation = {
  initial: { opacity: 0, x: -10 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: "easeOut", delay: 0.3 }
  }
};


// --- Data with Lucide Components ---
const contactInfo = [
  { icon: Mail, title: "Email", value: "sulemanjamil177@gmail.com", href: "mailto:sulemanjamil177@gmail.com" },
  // Use your actual phone number or keep placeholder if preferred
  { icon: Phone, title: "Phone", value: "+92 321 1431470", href: "tel:+923211431470" },
  { icon: MapPin, title: "Location", value: "Lahore, Pakistan", href: "https://maps.google.com/?q=Lahore,Pakistan" },
];

const socialLinks = [
    { href: "https://github.com/sulemanwebdev", icon: Github, label: "GitHub" }, // Add your actual link
    { href: "https://linkedin.com/in/sulemanjamiil", icon: Linkedin, label: "LinkedIn" }, // Add your actual link
    { href: "https://instagram.com/suleman.codes", icon: Instagram, label: "Instagram" }, // Add your actual link
];


// --- Component ---
export function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);

    // --- Replace with your actual API endpoint/logic ---
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. I'll respond as soon as possible.",
        variant: "default",
      });
      setFormData({ name: "", email: "", message: "" }); // Clear form on success

    } catch (error) {
      console.error("Submission error:", error);
      toast({
        title: "Submission Failed",
        description: "Something went wrong. Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
    // --- End API call simulation/replacement ---
  };

  return (
    // Consistent section padding and subtle background
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants} // Stagger direct children (title container, grid)
          className="space-y-12 md:space-y-16" // Consistent spacing
        >
          {/* Section Header */}
          <motion.div
            variants={itemVariants} // Animate title block as one item
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight gradient-text-primary mb-4">
              Get In Touch
            </h2>
            <p className="text-base md:text-lg text-muted-foreground">
              Have a project in mind or just want to connect? Send me a message!
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 md:gap-12">

            {/* Contact Form (Spanning 3 columns on large screens) */}
            <motion.div
              variants={itemVariants} // Animate the form card as one item
              className="lg:col-span-3"
            >
              <Card className="h-full bg-background/60 backdrop-blur-md border border-border/20 rounded-xl shadow-lg p-6 md:p-8">
                <CardHeader className="p-0 mb-6">
                   <CardTitle className="text-2xl font-semibold">Send a Message</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                   <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="space-y-1.5">
                           <Label htmlFor="name">Name</Label>
                           <Input id="name" name="name" required autoComplete="name" placeholder="Your Name" value={formData.name} onChange={handleChange} className="bg-input/50"/>
                        </div>
                        <div className="space-y-1.5">
                           <Label htmlFor="email">Email</Label>
                           <Input id="email" name="email" type="email" required autoComplete="email" placeholder="your.email@example.com" value={formData.email} onChange={handleChange} className="bg-input/50"/>
                        </div>
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="message">Message</Label>
                        <Textarea id="message" name="message" required placeholder="How can I help you today?" rows={5} value={formData.message} onChange={handleChange} className="bg-input/50 min-h-[100px]"/>
                      </div>
                      <div className="pt-2">
                        <Button type="submit" className="w-full py-2.5" disabled={isSubmitting} aria-live="polite">
                           {isSubmitting ? (
                             <> <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending... </>
                           ) : (
                             <> <Send className="mr-2 h-4 w-4" /> Send Message </>
                           )}
                        </Button>
                      </div>
                   </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Info & Socials (Spanning 2 columns on large screens) */}
            <motion.div
              variants={containerVariants} // Stagger the cards inside this column
              className="lg:col-span-2 space-y-8" // Space between cards
            >
              {/* Contact Info Card */}
              <Card className="bg-background/60 backdrop-blur-md border border-border/20 rounded-xl shadow-lg overflow-hidden">
                <CardHeader>
                   <CardTitle className="text-xl font-semibold">Contact Details</CardTitle>
                </CardHeader>
                <CardContent className="pt-2 pb-4 px-4"> {/* Adjust padding */}
                  <div className="space-y-3">
                    {contactInfo.map((item) => (
                      <motion.a
                        key={item.title}
                        href={item.href}
                        target={item.href.startsWith('http') || item.href.startsWith('mailto') || item.href.startsWith('tel') ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 p-3 rounded-lg transition-colors duration-200 group" // Padding inside link
                        variants={contactItemWrapperVariants}
                        initial="hidden" // Let parent container handle stagger
                        animate="visible" // Let parent container handle stagger
                        whileHover="hover"
                      >
                        <motion.div
                          className="flex-shrink-0 h-10 w-10 flex items-center justify-center bg-primary/10 rounded-full"
                          variants={iconWrapperAnimation} initial="initial" animate="animate"
                        >
                           <item.icon className="h-5 w-5 text-primary" />
                        </motion.div>
                        <motion.div variants={textAnimation} initial="initial" animate="animate">
                           <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">{item.title}</p>
                           <p className="text-sm text-muted-foreground">{item.value}</p>
                        </motion.div>
                      </motion.a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Social Media Card */}
              <Card className="bg-background/60 backdrop-blur-md border border-border/20 rounded-xl shadow-lg">
                <CardHeader>
                   <CardTitle className="text-xl font-semibold">Connect Online</CardTitle>
                </CardHeader>
                <CardContent>
                   <p className="text-sm text-muted-foreground mb-4">
                      Follow my work and connect on social platforms.
                   </p>
                   <div className="flex flex-wrap gap-3">
                      {socialLinks.map((link) => (
                         <motion.a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Visit my ${link.label} profile`}
                            whileHover={{ y: -3, scale: 1.05, transition: { type: 'spring', stiffness: 300 } }}
                            whileTap={{ scale: 0.95 }}
                            className="h-10 w-10 inline-flex items-center justify-center rounded-lg bg-muted/60 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-200"
                         >
                           <link.icon className="h-5 w-5" />
                         </motion.a>
                      ))}
                   </div>
                </CardContent>
              </Card>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}