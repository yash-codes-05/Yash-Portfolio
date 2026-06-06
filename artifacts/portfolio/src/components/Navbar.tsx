import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Code, Cpu, Activity, Mail, GraduationCap } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", href: "#about", icon: <Code className="w-4 h-4" /> },
    { name: "Stack", href: "#skills", icon: <Cpu className="w-4 h-4" /> },
    { name: "Projects", href: "#projects", icon: <Activity className="w-4 h-4" /> },
    { name: "Education", href: "#education", icon: <GraduationCap className="w-4 h-4" /> },
    { name: "Contact", href: "#contact", icon: <Mail className="w-4 h-4" /> },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-border py-4" : "bg-transparent py-6"
      }`}
      data-testid="navbar"
    >
      <div className="container mx-auto px-6 max-w-6xl flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group" data-testid="link-home">
          <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:border-primary/50 transition-colors">
            <Terminal className="w-4 h-4 text-primary" />
          </div>
          <span className="font-mono font-bold text-lg tracking-tight text-foreground">
            YS<span className="text-primary">_</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8" data-testid="nav-links">
          {navItems.map((item, i) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-mono text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
              data-testid={`link-${item.name.toLowerCase()}`}
            >
              <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-primary">
                {item.icon}
              </span>
              <span className="group-hover:translate-x-1 transition-transform duration-300">
                // {item.name}
              </span>
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="md:hidden w-8 h-8 rounded bg-primary/10 flex items-center justify-center border border-primary/20"
          data-testid="link-contact-mobile"
        >
          <Mail className="w-4 h-4 text-primary" />
        </a>
      </div>
    </motion.header>
  );
}
