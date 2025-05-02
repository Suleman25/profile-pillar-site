
import { Link } from "react-router-dom";
import { Github, Instagram, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-8 md:py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link to="/" className="font-bold text-xl">
              <span className="text-primary">Muhammad Suleman</span>
            </Link>
            <p className="text-sm text-muted-foreground text-center md:text-left">
              Software Engineer & Full-Stack Developer
            </p>
          </div>
          
          <div className="flex gap-4">
            <a
              href="https://github.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-2 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-2 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-2 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="mailto:sulemanjamil177@gmail.com"
              className="rounded-full p-2 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t text-center text-sm text-muted-foreground">
          <p>Developed by Muhammad Suleman</p>
        </div>
      </div>
    </footer>
  );
}
