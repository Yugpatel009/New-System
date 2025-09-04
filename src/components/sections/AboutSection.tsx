import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Cpu, Zap, Workflow } from 'lucide-react';

const AboutSection: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "AI INTEGRATION",
      description: "Advanced machine learning algorithms powering next-gen robotic intelligence"
    },
    {
      icon: Cpu,
      title: "QUANTUM PROCESSING",
      description: "Harnessing quantum computing for unprecedented computational power"
    },
    {
      icon: Zap,
      title: "NEURAL INTERFACES",
      description: "Direct brain-computer interfaces for seamless human-machine interaction"
    },
    {
      icon: Workflow,
      title: "CYBERNETIC SYSTEMS",
      description: "Bio-mechanical fusion creating the perfect synthesis of organic and digital"
    }
  ];

  return (
    <section id="about" className="min-h-screen flex items-center py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 right-10 w-40 h-40 border border-secondary/20 rounded-full"
        />
        <motion.div
          animate={{
            x: [-50, 50, -50],
            opacity: [0.2, 0.6, 0.2]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 left-10 w-3 h-24 bg-gradient-to-t from-accent to-primary rounded-full"
        />
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-orbitron font-bold heading-cyber mb-6">
              ABOUT THE SYSTEM
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8 rounded-full" />
            <p className="text-lg md:text-xl text-cyber max-w-3xl mx-auto leading-relaxed">
              A convergence of artificial intelligence, quantum mechanics, and cybernetic enhancement. 
              I architect the bridge between human consciousness and digital infinity, creating 
              experiences that transcend the boundaries of traditional technology.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-2xl font-orbitron font-semibold neon-glow mb-4">
                  NEURAL ARCHITECT
                </h3>
                <p className="text-cyber mb-6">
                  Specializing in the fusion of biological neural networks with artificial 
                  intelligence systems. My work focuses on creating seamless interfaces 
                  between human cognition and digital consciousness.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full pulse-glow" />
                    <span className="font-rajdhani text-foreground/90">
                      10+ Years in Cybernetic Research
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full pulse-glow" />
                    <span className="font-rajdhani text-foreground/90">
                      50+ AI Integration Projects
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full pulse-glow" />
                    <span className="font-rajdhani text-foreground/90">
                      Quantum Computing Pioneer
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Features Grid */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid gap-6"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-card-hover p-6 rounded-xl group"
                >
                  <div className="flex items-center gap-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 group-hover:border-primary/60 transition-colors"
                    >
                      <feature.icon className="text-primary" size={24} />
                    </motion.div>
                    <div>
                      <h4 className="font-orbitron font-semibold text-primary group-hover:neon-glow transition-all duration-300">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-cyber mt-1">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { number: "99.9%", label: "SYSTEM UPTIME" },
              { number: "∞", label: "PROCESSING POWER" },
              { number: "256", label: "NEURAL PATHWAYS" },
              { number: "2045", label: "SINGULARITY ETA" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center glass-card p-6 rounded-xl"
              >
                <div className="text-3xl md:text-4xl font-orbitron font-bold neon-glow mb-2">
                  {stat.number}
                </div>
                <div className="text-sm font-rajdhani text-foreground/70 tracking-widest">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;