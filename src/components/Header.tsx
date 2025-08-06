import { useState, useEffect, useRef } from "react"; // Added useRef
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"; // Added useReducedMotion

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/#about" },
  { name: "Projects", path: "/#projects" },
  { name: "Certifications", path: "/#certificates" },
  { name: "Contact", path: "/#contact" },
];

const headerVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

// --- Enhanced Dock Animation Settings ---
const DOCK_MAX_SCALE = 1.6; // Max scale when mouse is directly over
const DOCK_MIN_SCALE = 1.0; // Default scale
const DOCK_MAX_Y = -16;     // Max lift when mouse is directly over
const DOCK_EFFECT_RADIUS = 100; // Pixels: How far the mouse effect spreads
// Smoother Spring - less stiff, slightly more damping for less oscillation
const dockItemSpring = {
  type: "spring",
  stiffness: 350,
  damping: 25,
  mass: 0.7,
};
// --------------------------------------

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mouseX, setMouseX] = useState<number | null>(null); // Track mouse X within the nav container
  const navRef = useRef<HTMLUListElement>(null); // Ref for the desktop nav container (ul)
  const location = useLocation();
  const shouldReduceMotion = useReducedMotion(); // Respect accessibility settings

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      // Simplified active section detection (same as previous version)
      let currentSection = "";
      const sections = ["about", "projects", "certificates", "contact"];
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= window.innerHeight * 0.4) {
            currentSection = sectionId;
            break;
          }
        }
      }
      if (window.scrollY < window.innerHeight * 0.3 && currentSection === "") {
         setActiveSection("");
      } else if (currentSection) {
        setActiveSection(currentSection);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section based on location hash
  useEffect(() => {
    if (location.pathname === "/") {
      const hash = location.hash.replace('#', '');
      setActiveSection(hash || '');
    } else {
       setActiveSection('');
    }
  }, [location]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    setIsMenuOpen(false);

    if (path.startsWith('/#')) {
      const targetId = path.replace('/#', '');
      const element = document.getElementById(targetId);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      } else if (location.pathname !== "/") {
         window.location.href = path;
      }
    } else {
       window.location.href = path;
    }
  };

  // Determine if a nav item is active (same as previous version)
  const isActive = (path: string) => {
    if (path === "/" && !activeSection && location.pathname === "/") return true;
    if (path === "/#about" && activeSection === "about") return true;
    if (path === "/#projects" && activeSection === "projects") return true;
    if (path === "/#certificates" && activeSection === "certificates") return true; // Added for Certifications
    if (path === "/#contact" && activeSection === "contact") return true;
    return false;
  };

  // --- Mouse Move Handler for Dock Effect ---
  const handleMouseMove = (event: React.MouseEvent<HTMLUListElement>) => {
    if (shouldReduceMotion || !navRef.current) return; // Skip if reduced motion or ref not ready

    const rect = navRef.current.getBoundingClientRect();
    // Calculate mouse X relative to the navigation container's left edge
    const relativeMouseX = event.clientX - rect.left;
    setMouseX(relativeMouseX);
  };

  const handleMouseLeave = () => {
    setMouseX(null); // Reset when mouse leaves the container
  };
  // ----------------------------------------

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={headerVariants}
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? "border-b bg-background/90 backdrop-blur-lg shadow-md"
          : "bg-transparent backdrop-blur-sm"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        {/* Logo/Brand */}
        <Link to="/" className="flex items-center gap-2" onClick={(e) => scrollToSection(e, "/")}>
           {/* ... (logo motion div remains the same) ... */}
           <motion.div
            className="text-xl font-bold gradient-text-primary"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            M Suleman
          </motion.div>
        </Link>

        {/* Desktop Navigation - Centered with Enhanced Dock Effect */}
        <nav className="hidden md:flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 h-full">
          {/* Container for mouse tracking */}
          <motion.ul
            ref={navRef}
            className="flex items-end space-x-1 h-full px-4" // Added padding X, adjust space-x
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {navItems.map((item, i) => {
              // --- Calculate dynamic scale/y based on mouse proximity ---
              const itemRef = useRef<HTMLLIElement>(null); // Ref for each item

              // Calculate transform based on mouseX (if available) or default
              const getTransform = () => {
                if (mouseX === null || !itemRef.current || shouldReduceMotion) {
                  return { scale: DOCK_MIN_SCALE, y: 0 }; // Default state
                }

                const itemRect = itemRef.current.getBoundingClientRect();
                // Calculate item center X relative to the nav container's left edge
                const itemCenterX = itemRect.left + itemRect.width / 2 - (navRef.current?.getBoundingClientRect().left ?? 0);

                // Calculate distance between mouse and item center
                const distance = Math.abs(mouseX - itemCenterX);

                // Calculate intensity (0 to 1) based on distance and radius
                // Using a cosine-based falloff for smoother transition than linear
                let intensity = 0;
                 if (distance < DOCK_EFFECT_RADIUS) {
                    // Map distance (0 to radius) to angle (0 to PI/2)
                    const angle = (distance / DOCK_EFFECT_RADIUS) * (Math.PI / 2);
                    // Cosine gives a smooth 1 to 0 falloff
                    intensity = Math.cos(angle);
                 }


                // Clamp intensity just in case
                intensity = Math.max(0, Math.min(1, intensity));

                // Interpolate scale and y based on intensity
                const scale = DOCK_MIN_SCALE + (DOCK_MAX_SCALE - DOCK_MIN_SCALE) * intensity;
                const y = DOCK_MAX_Y * intensity; // Negative Y for lifting up

                return { scale, y };
              };

              // Get the current transform values
              const { scale, y } = getTransform();
              // -------------------------------------------------------------

              return (
                <motion.li
                  key={item.name}
                  ref={itemRef} // Assign ref to the li
                  className="relative flex items-center justify-center" // Use flex for easier centering if needed
                  // Animate scale and y using the calculated values
                  animate={{ scale: scale, y: y }}
                  transition={dockItemSpring} // Apply the smooth spring animation
                >
                  <Link
                    to={item.path}
                    onClick={(e) => scrollToSection(e, item.path)}
                    className={`relative block whitespace-nowrap px-3 py-2 text-sm font-medium transition-colors duration-200 ease-out rounded-md ${
                      isActive(item.path)
                        ? "text-primary"
                        : "text-foreground/80 hover:text-foreground"
                    }`}
                    style={{ transformOrigin: 'bottom center' }} // Keep scaling from bottom
                  >
                    {item.name}
                    {isActive(item.path) && (
                      <motion.div
                        layoutId="nav-underline"
                        className="absolute bottom-[-6px] left-1 right-1 h-[3px] bg-gradient-to-r from-primary via-accent to-secondary rounded-full" // Thicker, adjusted position/inset
                        initial={false}
                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                        style={{ originX: 0.5 }} // Ensure underline scales from center if needed
                      />
                    )}
                  </Link>
                </motion.li>
              );
            })}
          </motion.ul>
        </nav>

        {/* Right side: Theme Toggle & Mobile Menu Button */}
        <div className="flex items-center gap-2">
          {/* ... (ThemeToggle and Mobile Button remain the same) ... */}
           <ThemeToggle />
          <Button className="md:hidden" variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle Menu">
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                  key={isMenuOpen ? "x" : "menu"}
                  initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
                  transition={{ duration: 0.2 }}
                >
                 {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </motion.div>
            </AnimatePresence>
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
         {/* ... (Mobile menu motion div remains the same) ... */}
          {isMenuOpen && (
          <motion.div
            key="mobile-menu"
            className="md:hidden absolute w-full bg-background/95 backdrop-blur-lg border-b border-border shadow-lg overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="container py-4 grid gap-2">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.2 }}
                >
                  <Link
                    to={item.path}
                    onClick={(e) => scrollToSection(e, item.path)}
                    className={`block px-4 py-3 text-base font-medium rounded-md transition-colors ${
                      isActive(item.path)
                        ? "bg-primary/10 text-primary"
                        : "hover:bg-accent/50 hover:text-accent-foreground"
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}