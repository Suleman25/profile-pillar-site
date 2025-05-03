import { useState } from "react";
import { motion } from "framer-motion";
import { Loader2, Mail, MapPin, MessageSquare, Phone, Send } from "lucide-react"; // Added Send icon
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast"; // Assuming this hook exists and works
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; // Import Card for consistency

// --- Consistent Animation Variants (from About component) ---
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

const paragraphVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 * i, duration: 0.6, ease: "easeOut" }
  })
};

// --- Refined Contact Item Animations ---
const contactItemWrapperVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] }
    },
    hover: {
        // Subtle lift and background change on hover for the whole item
        scale: 1.02,
        backgroundColor: "hsl(var(--muted) / 0.5)", // Example: use muted color with transparency
        transition: { type: "spring", stiffness: 300, damping: 15 }
    }
};

const iconWrapperAnimation = {
  initial: { scale: 0.8, opacity: 0 },
  animate: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 200, damping: 12, delay: 0.1 } // Slightly adjusted spring
  },
  hover: { // Hover effect on the icon itself (optional, keep subtle)
    scale: 1.1,
    transition: { type: "spring", stiffness: 400, damping: 10 }
  }
};

const textAnimation = { // Simple fade-in for text, parent handles stagger/slide
  initial: { opacity: 0, x: -10 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: "easeOut", delay: 0.2 }
  }
};


// --- Component ---
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
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);

    // --- Replace with your actual API endpoint ---
    // Example using fetch:
    try {
       // const response = await fetch('/api/contact', {
       //   method: 'POST',
       //   headers: { 'Content-Type': 'application/json' },
       //   body: JSON.stringify(formData),
       // });
       // if (!response.ok) {
       //   throw new Error('Network response was not ok');
       // }
       // const result = await response.json();

       // Simulate API Success
       await new Promise(resolve => setTimeout(resolve, 1500));

       toast({
         title: "Message Sent Successfully!",
         description: "Thank you for reaching out. I'll get back to you as soon as possible.",
         variant: "default", // Or 'success' if you have one
       });
       setFormData({ name: "", email: "", subject: "", message: "" });

    } catch (error) {
       console.error("Failed to send message:", error);
       toast({
         title: "Uh Oh! Something went wrong.",
         description: "Couldn't send your message. Please try again later or contact me directly via email.",
         variant: "destructive",
       });
    } finally {
       setIsSubmitting(false);
    }
    // --- End API call simulation/replacement ---
  };

  return (
    <div className="flex-1 pb-24 md:pb-32"> {/* Consistent padding */}

      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        className="pt-20 pb-16 md:pt-32 md:pb-24 text-center bg-gradient-to-b from-background via-background to-muted/30"
      >
        <div className="container max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight gradient-text-primary mb-4">
            Get In Touch
          </h1>
          <motion.p
             variants={paragraphVariants} custom={0} initial="hidden" animate="visible"
             className="text-lg md:text-xl text-muted-foreground"
          >
            Let's connect! Whether you have a project idea, a question, or just want to say hello, I'd love to hear from you.
          </motion.p>
        </div>
      </motion.section>

      {/* Contact Info & Form Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 md:gap-16">

            {/* Contact Info Column (Takes 2/5 width on large screens) */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={containerVariants} // Stagger children inside
              className="lg:col-span-2 space-y-10"
            >
              {/* Intro Text */}
               <motion.div variants={itemVariants}>
                 <h2 className="text-2xl md:text-3xl font-semibold mb-4 gradient-text-secondary">Contact Details</h2>
                 <p className="text-base text-muted-foreground leading-relaxed">
                   Reach out directly through the channels below. I'm always open to discussing new projects, creative ideas, or potential collaborations.
                 </p>
               </motion.div>

              {/* Contact Items List */}
              <div className="space-y-6">
                {[
                  { icon: Mail, title: "Email", value: "sulemanjamil177@gmail.com", href: "mailto:sulemanjamil177@gmail.com" },
                  { icon: Phone, title: "Phone", value: "+92 321 1431470", href: "tel:+923211431470" },
                  { icon: MapPin, title: "Location", value: "Lahore, Pakistan", href: null }, // No href for location usually
                ].map((item) => (
                  <motion.a
                    key={item.title}
                    href={item.href ?? undefined} // Only add href if it exists
                    target={item.href ? "_blank" : undefined} // Open mail/tel links in new tab/app
                    rel={item.href ? "noopener noreferrer" : undefined}
                    className="flex items-center space-x-4 p-4 rounded-lg transition-colors duration-300 group" // Added padding, rounded, group
                    variants={contactItemWrapperVariants} // Use the wrapper variant for hover bg etc.
                    initial="hidden" // Let container handle initial/animate
                    whileHover="hover" // Trigger hover state on the wrapper
                  >
                    <motion.div
                      className="flex-shrink-0 p-3 bg-primary/10 rounded-full" // Consistent icon background
                      variants={iconWrapperAnimation} // Animate the icon wrapper itself
                      initial="initial"
                      animate="animate"
                      whileHover="hover" // Apply direct hover to icon too (optional)
                    >
                      <item.icon className="h-5 w-5 text-primary" />
                    </motion.div>
                    <motion.div
                      className="flex-grow"
                      variants={textAnimation} // Animate text block
                      initial="initial"
                      animate="animate"
                    >
                      <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.value}</p>
                    </motion.div>
                  </motion.a>
                ))}
              </div>

              {/* Availability */}
              <motion.div
                variants={itemVariants}
                className="pt-6 border-t border-border/30"
              >
                <h3 className="text-lg font-semibold mb-3 text-foreground">Availability</h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Actively seeking freelance projects and full-time opportunities. Let's build something great together!
                </p>
              </motion.div>
            </motion.div>

            {/* Contact Form Column (Takes 3/5 width on large screens) */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={sectionVariants} // Use section variant for the whole card fade-in
              className="lg:col-span-3"
            >
              {/* Using Card for consistent styling */}
              <Card className="bg-background/60 backdrop-blur-lg border border-border/20 rounded-xl shadow-lg p-6 md:p-10 h-full">
                <CardHeader className="p-0 mb-6">
                  <CardTitle className="text-2xl md:text-3xl font-semibold gradient-text">Send a Direct Message</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name and Email side-by-side */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-sm font-medium">Name</Label>
                        <Input
                          id="name" name="name" required autoComplete="name"
                          value={formData.name} onChange={handleChange}
                          placeholder="Your Full Name"
                          className="bg-input/50 border-border/30 focus:border-primary" // Subtle input styling
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                        <Input
                          id="email" name="email" type="email" required autoComplete="email"
                          value={formData.email} onChange={handleChange}
                          placeholder="your.email@example.com"
                          className="bg-input/50 border-border/30 focus:border-primary"
                        />
                      </div>
                    </div>

                    {/* Subject */}
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-sm font-medium">Subject</Label>
                      <Input
                        id="subject" name="subject" required
                        value={formData.subject} onChange={handleChange}
                        placeholder="Reason for contacting"
                         className="bg-input/50 border-border/30 focus:border-primary"
                      />
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm font-medium">Message</Label>
                      <Textarea
                        id="message" name="message" required rows={5} // Slightly fewer rows maybe
                        value={formData.message} onChange={handleChange}
                        placeholder="Please type your detailed message here..."
                         className="bg-input/50 border-border/30 focus:border-primary min-h-[120px]" // Min height
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <Button
                        type="submit"
                        className="w-full py-3 text-base font-semibold" // Slightly larger button
                        disabled={isSubmitting}
                        aria-live="polite" // Announce changes for screen readers
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-5 w-5" /> {/* Changed icon */}
                            Send Message
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}