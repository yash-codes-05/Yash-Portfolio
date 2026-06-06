import { motion } from "framer-motion";
import { Terminal, Send } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-32 relative flex flex-col items-center justify-center min-h-[70vh]" data-testid="section-contact">
      <div className="absolute inset-0 bg-primary/5 clip-path-slant" style={{ clipPath: 'polygon(0 10%, 100% 0, 100% 90%, 0 100%)' }} />
      
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
            Ready to scale?
          </h2>
          
          <p className="text-muted-foreground text-lg mb-10 max-w-lg mx-auto" data-testid="text-contact-description">
            My inbox is always open. Whether you have a question about infrastructure, need an architecture review, or just want to talk tech.
          </p>

          <a 
            href="mailto:hello@example.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-md hover:bg-primary/90 transition-all hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(var(--primary),0.4)]"
            data-testid="link-contact-email"
          >
            <Send className="w-5 h-5" />
            Execute Contact Protocol
          </a>
        </motion.div>
      </div>
    </section>
  );
}
