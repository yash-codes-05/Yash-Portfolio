import { motion } from "framer-motion";
import { FolderGit2, ExternalLink, Github } from "lucide-react";

export function Projects() {
  const projects = [
    {
      id: "cicd-pipeline",
      title: "Automated CI/CD Pipeline",
      description: "End-to-end CI/CD pipeline using Jenkins for automated build, testing, and deployment. Containerized with Docker for consistent environments, deployed on AWS EC2 with Git-triggered automation and integrated monitoring and logging.",
      stack: ["Jenkins", "Docker", "AWS EC2", "Git"],
      links: {
        github: "#"
      }
    },
    {
      id: "olive-dental",
      title: "Olive Dental & Surgical",
      description: "Professional website for a real dental clinic — fully responsive UI designed and developed from scratch. Managed deployment on Vercel with basic SEO setup to improve online visibility for the practice.",
      stack: ["HTML", "CSS", "Vercel"],
      links: {
        live: "https://olive-dental.vercel.app/"
      }
    },
    {
      id: "event-management",
      title: "College Event Management System",
      description: "Web application to manage college events and participant registrations end to end. Replaced manual processes with a digitized system — backend logic for event handling and a database for storing event and user data.",
      stack: ["HTML", "CSS", "Backend", "Database"],
      links: {
        github: "#"
      }
    },
    {
      id: "personal-portfolio",
      title: "Personal Portfolio Website",
      description: "Responsive personal portfolio to showcase technical skills and projects with a clean UI. Built to demonstrate front-end proficiency and provide a central hub for professional presence online.",
      stack: ["HTML", "CSS"],
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
            Projects
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
                      <a
                        href={project.links.github}
                        className="text-muted-foreground hover:text-primary transition-colors"
                        data-testid={`link-github-${project.id}`}
                        aria-label={`GitHub - ${project.title}`}
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {project.links.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        data-testid={`link-live-${project.id}`}
                        aria-label={`Live site - ${project.title}`}
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
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
