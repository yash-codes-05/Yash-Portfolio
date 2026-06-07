import { motion } from "framer-motion";
import { Terminal, ChevronDown, Download } from "lucide-react";
import avatarImg from "@assets/IMG-20260406-WA0000_1780741307102.jpg";

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center pt-20 overflow-hidden" id="hero" data-testid="section-hero">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] left-[10%] w-[40vw] h-[40vw] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[10%] w-[30vw] h-[30vw] bg-accent/5 rounded-full blur-[100px]" />
        <div className="absolute inset-0 grid-bg opacity-30" />
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-mono text-sm mb-6"
            data-testid="hero-badge"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Open to Opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 text-foreground leading-[1.1]"
            data-testid="text-hero-title"
          >
            Yash <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Srivastava</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl md:text-2xl font-mono text-muted-foreground mb-8"
            data-testid="text-hero-subtitle"
          >
            &gt; Software Developer &amp; DevOps Engineer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-muted-foreground max-w-lg mb-10 text-lg"
            data-testid="text-hero-description"
          >
            B.Tech CSE student building real-world DevOps pipelines, containerized applications, and cloud-deployed systems. If it's manual, I automate it.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium flex items-center gap-2 hover:bg-primary/90 transition-colors"
              data-testid="button-view-projects"
            >
              <Terminal className="w-4 h-4" />
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-md bg-secondary text-secondary-foreground border border-border font-medium hover:bg-secondary/80 transition-colors"
              data-testid="button-contact"
            >
              Get In Touch
            </a>
            <a
              href="/resume.pdf"
              download="Yash_Srivastava_Resume.pdf"
              className="px-6 py-3 rounded-md border border-primary/40 text-primary font-medium flex items-center gap-2 hover:bg-primary/10 transition-colors"
              data-testid="button-download-resume"
            >
              <Download className="w-4 h-4" />
              Resume
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative hidden lg:flex items-center justify-center"
        >
          <div className="relative w-72 h-72 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full border border-primary/20 animate-[spin_20s_linear_infinite]" />
            <div className="absolute inset-6 rounded-full border border-accent/20 animate-[spin_15s_linear_infinite_reverse]" />
            <div className="absolute inset-12 rounded-full border border-primary/10 animate-[spin_10s_linear_infinite]" />
            <div className="w-48 h-48 rounded-full border-2 border-primary/40 overflow-hidden shadow-[0_0_40px_rgba(0,200,255,0.15)]">
              <img
                src={avatarImg}
                alt="Yash Srivastava"
                className="w-full h-full object-cover object-top"
                data-testid="img-hero-avatar"
              />
            </div>
          </div>

          <div className="absolute top-4 right-4 font-mono text-xs text-muted-foreground/50 text-right leading-relaxed">
            <div className="text-primary/60">// status</div>
            <div>available: true</div>
            <div>location: Lucknow</div>
            <div>role: DevOps Eng.</div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
      >
        <span className="font-mono text-xs uppercase tracking-widest">Scroll to explore</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </motion.div>
    </section>
  );
}
