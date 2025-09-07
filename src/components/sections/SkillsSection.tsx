import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Cpu, 
  Database, 
  Zap, 
  Brain, 
  Shield, 
  Orbit, 
  Binary,
  Bot,
  Sparkles,
  Layers,
  Network
} from 'lucide-react';

const SkillsSection: React.FC = () => {
  const skillCategories = [
    {
      title: "PROGRAMMING LANGUAGES",
      description: "Core development expertise across modern and classic languages",
      skills: [
        { name: "Java", level: 92, icon: Code },
        { name: "Python", level: 95, icon: Brain },
        { name: "PHP", level: 88, icon: Database },
      ],
      color: "primary"
    },
    {
      title: "WEB TECHNOLOGIES",
      description: "Front-end frameworks and responsive web design",
      skills: [
        { name: "HTML5", level: 96, icon: Code },
        { name: "CSS3", level: 94, icon: Layers },
        { name: "Bootstrap", level: 90, icon: Zap }
      ],
      color: "secondary"
    },
    {
      title: "MOBILE DEVELOPMENT",
      description: "Cross-platform and native mobile solutions",
      skills: [
        { name: "Flutter", level: 92, icon: Cpu },
        { name: "Java (Android)", level: 89, icon: Binary },
        { name: "React Native", level: 87, icon: Bot }
      ],
      color: "accent"
    },
    {
      title: "CYBERNETIC SYSTEMS",
      description: "AI-driven futuristic and computational frameworks",
      skills: [
        { name: "Quantum Computing", level: 90, icon: Cpu },
        { name: "Neural Networks", level: 92, icon: Network },
        { name: "Cybersecurity", level: 93, icon: Shield }
      ],
      color: "primary"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="skills" className="min-h-screen flex items-center py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/3 right-20 w-48 h-48 border border-primary/10 rounded-full"
        />
        <motion.div
          animate={{
            x: [-40, 40, -40],
            opacity: [0.1, 0.5, 0.1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 left-1/4 w-2 h-32 bg-gradient-to-t from-accent to-secondary rounded-full"
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
              SYSTEM CAPABILITIES
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8 rounded-full" />
            <p className="text-lg md:text-xl text-cyber max-w-3xl mx-auto leading-relaxed">
              Advanced competencies spanning multiple domains of technological evolution. 
              Each skill represents years of neural pathway optimization and quantum enhancement.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="glass-card p-8 rounded-2xl group hover:scale-105 transition-transform duration-300"
              >
                {/* Category Header */}
                <div className="mb-8">
                  <h3 className={`text-xl font-orbitron font-bold mb-2 ${
                    category.color === 'primary' ? 'text-primary neon-glow' :
                    category.color === 'secondary' ? 'text-secondary neon-glow-purple' :
                    'text-accent'
                  }`}>
                    {category.title}
                  </h3>
                  <p className="text-cyber text-sm">
                    {category.description}
                  </p>
                </div>

                {/* Skills List */}
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.6, 
                        delay: categoryIndex * 0.2 + skillIndex * 0.1 
                      }}
                      className="space-y-3"
                    >
                      {/* Skill Header */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                            className={`p-2 rounded-lg ${
                              category.color === 'primary' ? 'bg-primary/20 text-primary' :
                              category.color === 'secondary' ? 'bg-secondary/20 text-secondary' :
                              'bg-accent/20 text-accent'
                            }`}
                          >
                            <skill.icon size={20} />
                          </motion.div>
                          <span className="font-rajdhani font-medium text-foreground">
                            {skill.name}
                          </span>
                        </div>
                        <span className={`font-orbitron font-bold text-sm ${
                          category.color === 'primary' ? 'text-primary' :
                          category.color === 'secondary' ? 'text-secondary' :
                          'text-accent'
                        }`}>
                          {skill.level}%
                        </span>
                      </div>

                      {/* Progress Bar */}
                      <div className="relative">
                        <div className="w-full h-2 bg-muted/30 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ 
                              duration: 1.5, 
                              delay: categoryIndex * 0.2 + skillIndex * 0.2,
                              ease: "easeOut"
                            }}
                            className={`h-full rounded-full relative ${
                              category.color === 'primary' ? 'bg-gradient-to-r from-primary to-primary/60' :
                              category.color === 'secondary' ? 'bg-gradient-to-r from-secondary to-secondary/60' :
                              'bg-gradient-to-r from-accent to-accent/60'
                            }`}
                          >
                            {/* Glow Effect */}
                            <div className={`absolute inset-0 blur-sm ${
                              category.color === 'primary' ? 'bg-primary/50' :
                              category.color === 'secondary' ? 'bg-secondary/50' :
                              'bg-accent/50'
                            }`} />
                          </motion.div>
                        </div>
                        
                        {/* Animated Progress Indicator */}
                        <motion.div
                          initial={{ x: -10, opacity: 0 }}
                          whileInView={{ x: `${skill.level * 3}px`, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ 
                            duration: 1.5, 
                            delay: categoryIndex * 0.2 + skillIndex * 0.2,
                            ease: "easeOut"
                          }}
                          className={`absolute -top-1 w-4 h-4 rounded-full ${
                            category.color === 'primary' ? 'bg-primary shadow-lg shadow-primary/50' :
                            category.color === 'secondary' ? 'bg-secondary shadow-lg shadow-secondary/50' :
                            'bg-accent shadow-lg shadow-accent/50'
                          }`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Performance Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-20 glass-card p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-orbitron font-bold text-center heading-cyber mb-8">
              PERFORMANCE METRICS
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { metric: "PROCESSING SPEED", value: "10^18 ops/sec", icon: Zap },
                { metric: "NEURAL EFFICIENCY", value: "99.97%", icon: Brain },
                { metric: "QUANTUM COHERENCE", value: "∞ qubits", icon: Sparkles },
                { metric: "SYSTEM INTEGRITY", value: "OPTIMAL", icon: Shield }
              ].map((stat, index) => (
                <motion.div
                  key={stat.metric}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center group"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-primary/30 transition-all duration-300"
                  >
                    <stat.icon className="text-primary" size={24} />
                  </motion.div>
                  <div className="text-xl font-orbitron font-bold neon-glow mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs font-rajdhani text-foreground/70 tracking-widest">
                    {stat.metric}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
