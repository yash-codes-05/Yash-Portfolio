import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen } from "lucide-react";

export function Education() {
  const education = [
    {
      id: "btech",
      type: "education",
      icon: <GraduationCap className="w-5 h-5" />,
      title: "Bachelor of Technology — Computer Science & Engineering",
      institution: "Shri Ramswaroop Memorial College of Engineering and Management",
      location: "Lucknow",
      period: "2023 — 2027",
      detail: "Specializing in DevOps, cloud infrastructure, and software engineering fundamentals."
    },
    {
      id: "class12",
      type: "education",
      icon: <BookOpen className="w-5 h-5" />,
      title: "Class XII",
      institution: "Central Academy",
      location: "Lucknow",
      period: "2023",
      detail: "UP Board"
    },
    {
      id: "class10",
      type: "education",
      icon: <BookOpen className="w-5 h-5" />,
      title: "Class X",
      institution: "Central Academy",
      location: "Lucknow",
      period: "2021",
      detail: "UP Board"
    }
  ];

  const certifications = [
    {
      id: "devops",
      title: "DevOps Certification",
      issuer: "In Progress",
      year: "Ongoing",
      accent: "primary"
    },
    {
      id: "diploma-python",
      title: "Diploma in Python",
      issuer: "Certified",
      year: "2023",
      accent: "accent"
    },
    {
      id: "python-bootcamp",
      title: "Python Programming Essential Bootcamp",
      issuer: "Certified",
      year: "2023",
      accent: "accent"
    },
    {
      id: "java-bootcamp",
      title: "Java Programming Essential Bootcamp",
      issuer: "Certified",
      year: "2023",
      accent: "accent"
    }
  ];

  return (
    <section id="education" className="py-24 bg-secondary/20 border-y border-border relative" data-testid="section-education">
      <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-4" data-testid="text-education-title">
            <span className="text-primary font-mono text-xl md:text-2xl">04.</span>
            Education & Certifications
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-transparent rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Education Timeline */}
          <div>
            <h3 className="text-lg font-mono text-muted-foreground mb-8 flex items-center gap-2">
              <span className="text-primary">&gt;</span> Academic Background
            </h3>

            <div className="relative">
              <div className="absolute left-5 top-0 bottom-0 w-px bg-border" />

              <div className="space-y-8">
                {education.map((item, idx) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="relative pl-14"
                    data-testid={`timeline-education-${item.id}`}
                  >
                    <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-primary z-10">
                      {item.icon}
                    </div>

                    <div className="p-5 rounded-xl bg-card border border-border hover:border-primary/40 transition-colors">
                      <div className="flex items-start justify-between gap-4 mb-1">
                        <h4 className="font-bold text-foreground text-sm leading-snug" data-testid={`text-edu-title-${item.id}`}>
                          {item.title}
                        </h4>
                        <span className="font-mono text-xs text-primary shrink-0 mt-0.5">{item.period}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-1">{item.institution}</p>
                      <p className="text-xs text-muted-foreground/60">{item.detail}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-lg font-mono text-muted-foreground mb-8 flex items-center gap-2">
              <span className="text-primary">&gt;</span> Certifications
            </h3>

            <div className="space-y-4">
              {certifications.map((cert, idx) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="group flex items-center gap-4 p-5 rounded-xl bg-card border border-border hover:border-primary/40 transition-all"
                  data-testid={`card-cert-${cert.id}`}
                >
                  <div className={`shrink-0 p-2 rounded-lg ${cert.accent === "primary" ? "bg-primary/10 border border-primary/20" : "bg-accent/10 border border-accent/20"}`}>
                    <Award className={`w-5 h-5 ${cert.accent === "primary" ? "text-primary" : "text-accent"}`} />
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-foreground text-sm leading-snug" data-testid={`text-cert-title-${cert.id}`}>
                      {cert.title}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">{cert.issuer}</p>
                  </div>

                  <span className={`font-mono text-xs shrink-0 px-2 py-1 rounded ${
                    cert.year === "Ongoing"
                      ? "bg-primary/10 text-primary border border-primary/20"
                      : "bg-secondary text-muted-foreground border border-border"
                  }`} data-testid={`text-cert-year-${cert.id}`}>
                    {cert.year}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="mt-8 p-5 rounded-xl border border-border bg-card/50 font-mono text-sm"
              data-testid="card-languages"
            >
              <span className="text-primary text-xs uppercase tracking-widest block mb-3">Languages</span>
              <div className="flex gap-6 text-muted-foreground text-sm">
                <span><span className="text-foreground font-medium">English</span> — Professional</span>
                <span><span className="text-foreground font-medium">Hindi</span> — Native</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
