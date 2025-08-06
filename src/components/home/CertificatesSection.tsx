import React from 'react';
import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.17, 0.67, 0.83, 0.67] }
  },
};

const headingLineVariant = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: {
        scaleX: 1,
        opacity: 1,
        transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0], delay: 0.2 },
        originX: 0 // Animate from left
    }
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

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  imageUrl: string;
  credentialUrl: string;
  credentialId: string;
}

const certificatesData: Certificate[] = [
  {
    id: 1,
    title: "Intro to AI Engineering",
    issuer: "Scrimba (through Coursera)",
    date: "July 7, 2025",
    imageUrl: "/lovable-uploads/image.png", // Path to image.png
    credentialUrl: "https://coursera.org/share/c6e05b59af11daeaae774a695435c5eb",
    credentialId: "D3EDK5PVELEF"
  },
  {
    id: 2,
    title: "Generative AI: Prompt Engineering Basics",
    issuer: "IBM (through Coursera)",
    date: "July 7, 2025",
    imageUrl: "/lovable-uploads/IBM-2.png", // Path to IBM-2.png
    credentialUrl: "https://coursera.org/share/f33032fab2a367c7ea5a4ede90a5c30c",
    credentialId: "AHFUOSOC3ABR"
  },
];

const CertificateCard = ({ cert, ...props }: { cert: Certificate } & React.ComponentProps<typeof motion.div>) => (
  <motion.div
    className="bg-card p-6 rounded-lg shadow-lg flex flex-col items-center text-center border border-border/60"
    {...props}
  >
    <img src={cert.imageUrl} alt={cert.title} className="w-full h-32 object-cover mb-4 rounded-md" />
    <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
    <p className="text-muted-foreground">Issued by: {cert.issuer}</p>
    <p className="text-sm text-muted-foreground mt-1">Date: {cert.date}</p>
    <a 
      href={cert.credentialUrl} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="text-primary hover:underline mt-4 inline-block"
    >
      View Credential
    </a>
    <p className="text-xs text-muted-foreground mt-1 break-all">ID: {cert.credentialId}</p>
  </motion.div>
);

export function CertificatesSection() {
  return (
    <motion.section 
      id="certificates"
      className="py-16 md:py-24 bg-gradient-to-b from-background via-muted/20 to-background"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="container flex flex-col items-center gap-8 md:gap-12">
        <div className="flex flex-col items-center mb-10 md:mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold tracking-tight gradient-text text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
          >
            <span className="gradient-text-primary">My Certifications</span>
          </motion.h2>
          <motion.div
            variants={headingLineVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="h-1 w-20 bg-gradient-to-r from-primary via-accent to-secondary rounded-full mt-2"
          />
        </div>
        <motion.p
          className="max-w-[700px] text-muted-foreground md:text-xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Here are some of my certifications and achievements.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
          {certificatesData.map((cert) => (
            <CertificateCard 
              key={cert.id} 
              cert={cert} 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={itemVariants}
              whileHover={{ scale: 1.02, transition: { type: 'spring', stiffness: 300, damping: 15 } }}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}