import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Joystick, Zap, Bot, Globe, Cpu, Download } from 'lucide-react';


const ProjectsSection: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "AI ASSISTANT",
      description: "Smart assistant that handles commands like opening social apps or answering questions.",
      technologies: ["Python", "Node.js", "MongoDB"],
      icon: Bot,
      gradient: "from-primary/80 to-secondary/80",
      glowColor: "primary",
      status: "ACTIVE",
      links: {
        demo: "https://ai-assistant-33n3.onrender.com/",
        github: "https://github.com/Yugpatel009/AI-assistant-v1/blob/Diploma-Computer-Engineering/README.md"
      }
    },
    {
      id: 2,
      title: "OLD PORTFOLIO ",
      description: "A personal portfolio website showcasing projects, skills, and achievements. Features responsive design, smooth navigation, and an organized project gallery.",
      technologies: ["HTML", "CSS", "JavaScript"],
      icon: Globe,
      gradient: "from-secondary/80 to-accent/80",
      glowColor: "secondary",
      status: "DEPLOYED",
      links: {
        demo: "https://yugpatel009.github.io/Drago_Website/project.html",
        github: "https://github.com/Yugpatel009",
      },
    },
    {
      id: 3,
      title: "TIC-TAC-TOE",
      description: "Modern responsive websites with animation and interactive features.",
      technologies: ["Quantum Physics", "Distributed Computing", "AI Consciousness"],
      icon: Joystick,
      gradient: "from-accent/80 to-primary/80",
      glowColor: "accent",
      status: "EXPERIMENTAL",
      links: {
        demo: "https://tic-toc-tac.onrender.com/",
        github: "https://github.com/Yugpatel009/Tic-Toc-Tac"
      }
    },
    {
      id: 4,
      title: "Game Dwaonloder",
      description: "I am creating a fast game downloader. This downloader allows users to paste all the links of a game (such as multi-part links from FitGirl repacks). Once the links are added, the downloader will automatically begin fetching all parts of the game and download them seamlessly. The goal is to provide a simple, one-click solution for downloading large multi-part games without needing to manually manage each file.",
      technologies: ["python", "PyQt5", "Json"],
      icon: Download,
      gradient: "from-accent/80 to-primary/80",
      glowColor: "accent",
      status: "ACTIVE",
      links: {
        demo: "https://github.com/devbyaryanvala/FuckingFast.coDownloader.git",
        github: "https://github.com/devbyaryanvala/FuckingFast.coDownloader.git"
      }
    }
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            rotate: [0, -360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-1/4 w-32 h-32 border-2 border-accent/20 rounded-lg rotate-45"
        />
        <motion.div
          animate={{
            y: [-30, 30, -30],
            opacity: [0.2, 0.8, 0.2]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-32 right-20 w-4 h-20 bg-gradient-to-t from-secondary to-primary rounded-full"
        />
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-orbitron font-bold heading-cyber mb-6">
              PROJECT ARCHIVE
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8 rounded-full" />
            <p className="text-lg md:text-xl text-cyber max-w-3xl mx-auto leading-relaxed">
              Explore the cutting-edge projects that push the boundaries of technology,
              consciousness, and digital evolution. Each system represents a leap forward
              in human-machine integration.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50, rotateX: 45 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group perspective-1000"
              >
                <div className="glass-card-hover p-8 rounded-2xl h-full relative overflow-hidden transform-gpu">
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 text-xs font-orbitron font-semibold rounded-full 
                      ${project.status === 'ACTIVE' ? 'bg-primary/20 text-primary border border-primary/30' :
                        project.status === 'DEPLOYED' ? 'bg-secondary/20 text-secondary border border-secondary/30' :
                          'bg-accent/20 text-accent border border-accent/30'}`}>
                      {project.status}
                    </span>
                  </div>

                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${project.gradient} 
                      flex items-center justify-center mb-6 group-hover:shadow-lg 
                      group-hover:shadow-${project.glowColor}/30 transition-all duration-300`}
                  >
                    <project.icon className="text-background" size={32} />
                  </motion.div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-orbitron font-bold text-primary group-hover:neon-glow transition-all duration-300">
                      {project.title}
                    </h3>

                    <p className="text-cyber text-sm leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-rajdhani bg-muted/50 text-foreground/80 rounded-full border border-border/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4 pt-4 border-t border-border/30">
                      <motion.a
                        href={project.links.demo}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-4 py-2 text-sm font-orbitron font-medium text-primary hover:neon-glow transition-all duration-300 group/btn"
                      >
                        <Zap size={16} className="group-hover/btn:animate-pulse" />
                        ACTIVATE
                      </motion.a>
                      <motion.a
                        href={project.links.github}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-4 py-2 text-sm font-orbitron font-medium text-foreground/70 hover:text-primary transition-colors"
                      >
                        <Github size={16} />
                        SOURCE
                      </motion.a>
                    </div>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-16"
          >
            <div className="glass-card p-8 rounded-2xl max-w-2xl mx-auto">
              <h3 className="text-2xl font-orbitron font-bold heading-cyber mb-4">
                COLLABORATION PROTOCOL
              </h3>
              <p className="text-cyber mb-6">
                Ready to push the boundaries of what's possible? Let's architect
                the future together through advanced technological synthesis.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glass-card-hover px-8 py-4 rounded-xl font-orbitron font-semibold text-primary neon-border transition-all duration-300 hover:neon-glow"
              >
                INITIATE COLLABORATION
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;