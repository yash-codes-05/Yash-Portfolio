import { motion } from "framer-motion";
import { Cloud } from "lucide-react";
import {
  SiDocker, SiJenkins, SiGit, SiGithubactions,
  SiLinux, SiPython, SiGnubash, SiHtml5, SiCss,
  SiVercel, SiC, SiMysql
} from "react-icons/si";

export function Skills() {
  const categories = [
    {
      name: "DevOps & Cloud",
      skills: [
        { name: "Docker", icon: SiDocker, color: "#2496ED" },
        { name: "Jenkins", icon: SiJenkins, color: "#D24939" },
        { name: "AWS EC2", iconEl: <Cloud />, color: "#FF9900" },
        { name: "Git", icon: SiGit, color: "#F05032" },
        { name: "GitHub Actions", icon: SiGithubactions, color: "#2088FF" },
      ]
    },
    {
      name: "Programming Languages",
      skills: [
        { name: "Python", icon: SiPython, color: "#3776AB" },
        { name: "C", icon: SiC, color: "#A8B9CC" },
        { name: "Bash", icon: SiGnubash, color: "#4EAA25" },
      ]
    },
    {
      name: "Web & Database",
      skills: [
        { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
        { name: "CSS", icon: SiCss, color: "#1572B6" },
        { name: "Vercel", icon: SiVercel, color: "#ffffff" },
        { name: "SQL", icon: SiMysql, color: "#4479A1" },
        { name: "Linux", icon: SiLinux, color: "#FCC624" },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-24 bg-secondary/20 border-y border-border relative" data-testid="section-skills">
      <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-4" data-testid="text-skills-title">
            <span className="text-primary font-mono text-xl md:text-2xl">02.</span>
            Tech Stack
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-transparent rounded-full" />
        </motion.div>

        <div className="space-y-16">
          {categories.map((category, idx) => (
            <div key={category.name} data-testid={`category-skills-${idx}`}>
              <h3 className="text-lg font-mono text-muted-foreground mb-6 flex items-center gap-2">
                <span className="text-primary">&gt;</span> {category.name}
              </h3>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4"
              >
                {category.skills.map((skill) => {
                  const IconComponent = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      variants={itemVariants}
                      className="flex flex-col items-center justify-center p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-colors group cursor-default"
                      data-testid={`item-skill-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      <div
                        className="w-10 h-10 mb-4 text-muted-foreground group-hover:scale-110 transition-all duration-300 flex items-center justify-center"
                        style={{ fontSize: "2.5rem" }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = skill.color)}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "")}
                      >
                        {skill.iconEl ? (
                          <span className="w-8 h-8">{skill.iconEl}</span>
                        ) : IconComponent ? (
                          <IconComponent style={{ width: "100%", height: "100%" }} />
                        ) : null}
                      </div>
                      <span className="text-sm font-medium">{skill.name}</span>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
