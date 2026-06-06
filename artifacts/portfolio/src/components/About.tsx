import { motion } from "framer-motion";
import { Server, Activity, Lock } from "lucide-react";

export function About() {
  const principles = [
    {
      icon: <Server className="w-6 h-6 text-primary" />,
      title: "Infrastructure as Code",
      description: "Everything in version control. Reproducible environments from development to production without drift."
    },
    {
      icon: <Activity className="w-6 h-6 text-accent" />,
      title: "Observability First",
      description: "You can't fix what you can't see. Comprehensive metrics, logging, and tracing built into the foundation."
    },
    {
      icon: <Lock className="w-6 h-6 text-primary" />,
      title: "Secure by Default",
      description: "Security isn't an afterthought. It's integrated into the CI/CD pipeline and deployment architecture."
    }
  ];

  return (
    <section id="about" className="py-24 relative" data-testid="section-about">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-4" data-testid="text-about-title">
            <span className="text-primary font-mono text-xl md:text-2xl">01.</span>
            Architecture Philosophy
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-transparent rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6 text-muted-foreground text-lg"
            data-testid="text-about-description"
          >
            <p>
              I bridge the gap between development and operations. My goal is to create seamless, automated pipelines that allow developers to ship features faster while maintaining ironclad reliability.
            </p>
            <p>
              I don't just maintain servers; I build platforms. By treating infrastructure as software, I eliminate manual toil and create scalable systems capable of handling massive traffic spikes without breaking a sweat.
            </p>
            <div className="p-4 border border-border bg-secondary/50 rounded-lg mt-8 font-mono text-sm">
              <span className="text-primary">~</span> <span className="text-muted-foreground">uptime</span>
              <br />
              <span className="text-foreground">99.999% reliability achieved across 500+ microservices</span>
            </div>
          </motion.div>

          <div className="grid gap-6">
            {principles.map((principle, idx) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                className="flex gap-4 p-6 rounded-xl border border-border bg-card/50 hover:bg-card hover:border-primary/50 transition-all group"
                data-testid={`card-principle-${idx}`}
              >
                <div className="mt-1 p-2 bg-background rounded-lg border border-border group-hover:scale-110 transition-transform">
                  {principle.icon}
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">{principle.title}</h3>
                  <p className="text-sm text-muted-foreground">{principle.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
