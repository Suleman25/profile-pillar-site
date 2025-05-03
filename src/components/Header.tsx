import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronRight } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/#about" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/#contact" },
];

const headerVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeInOut"
    }
  }
};

const navItemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * i,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const location = useLocation();

  // Handle scroll events to determine active section and update active nav
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Check which section is currently in view
      const sections = ["about", "projects", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          } else if (window.scrollY < 300) {
            setActiveSection("");
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    // Set active section based on current location
    if (location.pathname === "/projects") {
      setActiveSection("projects");
    } else if (location.pathname === "/contact") {
      setActiveSection("contact");
    } else if (location.pathname === "/about") {
      setActiveSection("about");
    } else if (location.pathname === "/") {
      // Check for hash on homepage
      const hash = location.hash.replace('#', '');
      if (hash) {
        setActiveSection(hash);
      } else {
        setActiveSection("");
      }
    }
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Smooth scroll to section or navigate to page
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    // Always prevent default for proper handling
    e.preventDefault();
    
    // Handle direct page links
    if (path === "/projects") {
      window.location.href = path;
      return;
    }
    
    // If it's a hash link on the homepage
    if (path.startsWith('/#')) {
      const targetId = path.replace('/#', '');
      const element = document.getElementById(targetId);
      
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 80,
          behavior: 'smooth'
        });
        setActiveSection(targetId);
      } else {
        // If we're not on the homepage, navigate there first
        window.location.href = path;
      }
    } else {
      // Handle regular navigation
      window.location.href = path;
    }
  };

  // Determine if a nav item is active
  const isActive = (path: string) => {
    if (path === "/") return activeSection === "" && location.pathname === "/";
    if (path === "/projects") return location.pathname === "/projects";
    if (path === "/#about") return activeSection === "about";
    if (path === "/#contact") return activeSection === "contact";
    return false;
  };

  return (
    <motion.header 
      initial="hidden"
      animate="visible"
      variants={headerVariants}
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled 
          ? "border-b bg-background/90 backdrop-blur-lg shadow-md" 
          : "bg-background/5 backdrop-blur-sm"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <motion.div 
            className="text-xl font-bold gradient-text-primary"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            M Suleman
          </motion.div>
        </Link>

        {/* Desktop Navigation - Centered */}
        <nav className="hidden md:flex items-center justify-center absolute left-1/2 transform -translate-x-1/2">
          <ul className="flex space-x-8">
            {navItems.map((item, i) => (
              <motion.li
                key={item.name}
                custom={i}
                variants={navItemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={item.path}
                  onClick={(e) => scrollToSection(e, item.path)}
                  className={`relative text-sm font-medium py-2 transition-colors ${
                    isActive(item.path)
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  {item.name}
                  {isActive(item.path) && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary via-accent to-secondary"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>

        {/* Right side with theme toggle */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button className="md:hidden" variant="ghost" size="icon" onClick={toggleMenu}>
            <Menu className={`h-5 w-5 ${isMenuOpen ? "hidden" : "block"}`} />
            <X className={`h-5 w-5 ${isMenuOpen ? "block" : "hidden"}`} />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <motion.div 
          className="md:hidden absolute w-full bg-background/95 backdrop-blur-lg border-b border-border"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container py-4 grid gap-3">
            {navItems.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={item.path}
                  onClick={(e) => {
                    scrollToSection(e, item.path);
                    setIsMenuOpen(false);
                  }}
                  className={`block px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActive(item.path)
                      ? "bg-primary/10 text-primary"
                      : "hover:bg-accent/10 hover:text-accent"
                  }`}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
