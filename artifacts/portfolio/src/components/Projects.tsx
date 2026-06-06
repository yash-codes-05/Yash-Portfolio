import { motion } from "framer-motion";
import { FolderGit2, ExternalLink, Github } from "lucide-react";

export function Projects() {
  const projects = [
    {
      id: "nexus-deploy",
      title: "Nexus Deploy",
      description: "An enterprise-grade GitOps pipeline orchestration tool. Automates the deployment of hundreds of microservices across multiple Kubernetes clusters using ArgoCD and Tekton.",
      stack: ["Kubernetes", "ArgoCD", "Go", "Tekton", "Terraform"],
      links: {
        github: "#",
        live: "#"
      }
    },
    {
      id: "meshops",
      title: "MeshOps",
      description: "Automated service mesh configuration operator for Istio. Dynamically adjusts routing rules and mTLS policies based on real-time traffic metrics and security posture.",
      stack: ["Istio", "Envoy", "Python", "Prometheus", "Helm"],
      links: {
        github: "#",
      }
    },
    {
      id: "infragraph",
      title: "InfraGraph",
      description: "Terraform state visualization and drift detection platform. Parses remote state files to generate interactive architecture diagrams and alerts on manual infrastructure changes.",
      stack: ["React", "Node.js", "Terraform", "AWS", "GraphQL"],
      links: {
        github: "#",
        live: "#"
      }
    },
    {
      id: "sentinel",
      title: "Sentinel Metrics",
      description: "Distributed Prometheus metrics aggregator with dynamic alerting. Automatically generates Grafana dashboards and routing rules when new services are deployed to the cluster.",
      stack: ["Prometheus", "Grafana", "Alertmanager", "Bash", "Docker"],
      links: {
        live: "#"
      }
    }
  ];

  return (
    <section id="projects" className="py-24 relative" data-testid="section-projects">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-4" data-testid="text-projects-title">
            <span className="text-primary font-mono text-xl md:text-2xl">03.</span>
            System Architecture
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-transparent rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative h-full flex flex-col justify-between p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
              data-testid={`card-project-${project.id}`}
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <FolderGit2 className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex gap-4">
                    {project.links.github && (
                      <a href={project.links.github} className="text-muted-foreground hover:text-primary transition-colors" data-testid={`link-github-${project.id}`}>
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {project.links.live && (
                      <a href={project.links.live} className="text-muted-foreground hover:text-primary transition-colors" data-testid={`link-live-${project.id}`}>
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-6">
                  {project.description}
                </p>
              </div>

              <ul className="flex flex-wrap gap-2 mt-auto">
                {project.stack.map(tech => (
                  <li key={tech} className="text-xs font-mono text-accent bg-accent/10 px-2 py-1 rounded">
                    {tech}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
