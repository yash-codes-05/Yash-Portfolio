import { motion } from "framer-motion";
import { 
  SiKubernetes, SiDocker, SiTerraform, SiAmazonaws, 
  SiGooglecloud, SiMicrosoftazure, SiLinux, 
  SiPrometheus, SiGrafana, SiAnsible, SiGit,
  SiGithubactions, SiGnubash, SiPython
} from "react-icons/si";

export function Skills() {
  const categories = [
    {
      name: "Orchestration & Containers",
      skills: [
        { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
        { name: "Docker", icon: SiDocker, color: "#2496ED" },
      ]
    },
    {
      name: "Infrastructure & Config",
      skills: [
        { name: "Terraform", icon: SiTerraform, color: "#844FBA" },
        { name: "Ansible", icon: SiAnsible, color: "#EE0000" },
      ]
    },
    {
      name: "Cloud Providers",
      skills: [
        { name: "AWS", icon: SiAmazonaws, color: "#FF9900" },
        { name: "GCP", icon: SiGooglecloud, color: "#4285F4" },
        { name: "Azure", icon: SiMicrosoftazure, color: "#0089D6" },
      ]
    },
    {
      name: "Monitoring & Observability",
      skills: [
        { name: "Prometheus", icon: SiPrometheus, color: "#E6522C" },
        { name: "Grafana", icon: SiGrafana, color: "#F46800" },
      ]
    },
    {
      name: "CI/CD & Scripting",
      skills: [
        { name: "GitHub Actions", icon: SiGithubactions, color: "#2088FF" },
        { name: "Git", icon: SiGit, color: "#F05032" },
        { name: "Bash", icon: SiGnubash, color: "#4EAA25" },
        { name: "Python", icon: SiPython, color: "#3776AB" },
        { name: "Linux", icon: SiLinux, color: "#FCC624" },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
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
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    className="flex flex-col items-center justify-center p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-colors group cursor-default"
                    data-testid={`item-skill-${skill.name.toLowerCase()}`}
                  >
                    <skill.icon 
                      className="w-10 h-10 mb-4 text-muted-foreground group-hover:scale-110 transition-all duration-300" 
                      style={{ color: "currentColor" }}
                      onMouseEnter={(e) => e.currentTarget.style.color = skill.color}
                      onMouseLeave={(e) => e.currentTarget.style.color = "currentColor"}
                    />
                    <span className="text-sm font-medium">{skill.name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
