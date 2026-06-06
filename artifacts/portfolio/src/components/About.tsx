import { motion } from "framer-motion";
import { Server, Activity, BookOpen } from "lucide-react";

export function About() {
  const principles = [
    {
      icon: <Server className="w-6 h-6 text-primary" />,
      title: "CI/CD Automation",
      description: "Designed and built end-to-end pipelines with Jenkins and Git hooks — from commit to production with zero manual steps."
    },
    {
      icon: <Activity className="w-6 h-6 text-accent" />,
      title: "Containerization",
      description: "Docker-first mindset — consistent environments across dev and prod, no more 'works on my machine' surprises."
    },
    {
      icon: <BookOpen className="w-6 h-6 text-primary" />,
      title: "Always Learning",
      description: "B.Tech CSE student (2027) actively pursuing DevOps certification while shipping real-world projects in production."
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
            About Me
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
              I'm a Computer Science and Engineering student at Shri Ramswaroop Memorial College of Engineering and Management, Lucknow — graduating in 2027 — with hands-on experience in DevOps, CI/CD pipeline automation, Docker containerization, and AWS EC2 cloud deployment.
            </p>
            <p>
              I've delivered a live client website and built real-world automation projects using Jenkins, Git, Python, and Java. Passionate about scalable infrastructure, automation, and clean code — if it's manual, I automate it.
            </p>
            <div className="p-4 border border-border bg-secondary/50 rounded-lg mt-8 font-mono text-sm">
              <span className="text-primary">$</span><span className="text-muted-foreground"> cat certifications.txt</span>
              <br />
              <span className="text-foreground/80 text-xs leading-relaxed">
                DevOps Certification (Ongoing)<br />
                Diploma in Python — 2023<br />
                Python Programming Essential Bootcamp<br />
                Java Programming Essential Bootcamp
              </span>
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
                <div className="mt-1 p-2 bg-background rounded-lg border border-border group-hover:scale-110 transition-transform shrink-0">
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
