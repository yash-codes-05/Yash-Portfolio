import { motion } from "framer-motion";
import { Terminal, Mail, MapPin, Phone, Github } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-32 relative flex flex-col items-center justify-center min-h-[70vh]" data-testid="section-contact">
      <div className="absolute inset-0 bg-primary/5" style={{ clipPath: 'polygon(0 10%, 100% 0, 100% 90%, 0 100%)' }} />

      <div className="container mx-auto px-6 max-w-2xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-6">
            <Terminal className="w-8 h-8 text-primary" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="text-contact-title">
            Get In Touch
          </h2>

          <p className="text-muted-foreground text-lg mb-10 max-w-lg mx-auto" data-testid="text-contact-description">
            Looking for internship or entry-level DevOps / Software Engineering opportunities. My inbox is always open, whether it's a question about infrastructure, a project collab, or just to talk tech.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <a
              href="mailto:yashsira@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-md hover:bg-primary/90 transition-all hover:-translate-y-1"
              data-testid="link-contact-email"
            >
              <Mail className="w-5 h-5" />
              yashsira@gmail.com
            </a>
            <a
              href="https://github.com/yash-codes-05"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-secondary border border-border text-foreground font-bold rounded-md hover:border-primary/50 hover:bg-secondary/80 transition-all hover:-translate-y-1"
              data-testid="link-contact-github"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 text-muted-foreground text-sm font-mono"
          >
            <span className="flex items-center gap-2" data-testid="text-contact-location">
              <MapPin className="w-4 h-4 text-primary" />
              Lucknow, Uttar Pradesh
            </span>
            <span className="hidden sm:block text-border">|</span>
            <a
              href="tel:+917238854915"
              className="flex items-center gap-2 hover:text-primary transition-colors"
              data-testid="link-contact-phone"
            >
              <Phone className="w-4 h-4 text-primary" />
              +91 72388 54915
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
