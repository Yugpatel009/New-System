import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MessageCircle, Zap, Github, Linkedin, Twitter } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "#", color: "text-foreground hover:text-primary" },
    { icon: Linkedin, label: "LinkedIn", href: "#", color: "text-foreground hover:text-secondary" },
    { icon: Twitter, label: "Twitter", href: "#", color: "text-foreground hover:text-accent" },
    { icon: Mail, label: "Email", href: "mailto:contact@cyber.dev", color: "text-foreground hover:text-primary" }
  ];

  return (
    <section id="contact" className="min-h-screen flex items-center py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            rotate: [0, -360],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-10 right-1/4 w-64 h-64 border border-accent/10 rounded-full"
        />
        <motion.div
          animate={{
            y: [-40, 40, -40],
            opacity: [0.1, 0.6, 0.1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-10 left-10 w-3 h-40 bg-gradient-to-t from-primary to-secondary rounded-full"
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
              ESTABLISH CONNECTION
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8 rounded-full" />
            <p className="text-lg md:text-xl text-cyber max-w-3xl mx-auto leading-relaxed">
              Ready to initiate collaboration protocols? Transmit your message through 
              our secure quantum communication channel. All data is encrypted with 
              military-grade cybernetic algorithms.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass-card p-8 rounded-2xl"
            >
              <div className="flex items-center gap-3 mb-8">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30"
                >
                  <MessageCircle className="text-primary" size={24} />
                </motion.div>
                <h3 className="text-2xl font-orbitron font-bold heading-cyber">
                  TRANSMISSION PROTOCOL
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    <label className="block text-sm font-orbitron font-medium text-foreground/80 mb-2">
                      IDENTITY
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-muted/30 border border-border/50 rounded-xl text-foreground placeholder-foreground/50 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300 font-rajdhani"
                      placeholder="Enter your designation..."
                      required
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <label className="block text-sm font-orbitron font-medium text-foreground/80 mb-2">
                      COMM CHANNEL
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-muted/30 border border-border/50 rounded-xl text-foreground placeholder-foreground/50 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300 font-rajdhani"
                      placeholder="quantum@email.com"
                      required
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <label className="block text-sm font-orbitron font-medium text-foreground/80 mb-2">
                    SUBJECT CODE
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-muted/30 border border-border/50 rounded-xl text-foreground placeholder-foreground/50 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300 font-rajdhani"
                    placeholder="Collaboration protocol request..."
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <label className="block text-sm font-orbitron font-medium text-foreground/80 mb-2">
                    MESSAGE PAYLOAD
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-muted/30 border border-border/50 rounded-xl text-foreground placeholder-foreground/50 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300 font-rajdhani resize-none"
                    placeholder="Transmit your message through our secure quantum channel..."
                    required
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full glass-card-hover py-4 rounded-xl font-orbitron font-semibold text-primary neon-border transition-all duration-300 hover:neon-glow flex items-center justify-center gap-3 group"
                >
                  <Send className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
                  TRANSMIT MESSAGE
                  <Zap className="group-hover:animate-pulse" size={20} />
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info & Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Contact Info */}
              <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-2xl font-orbitron font-bold heading-cyber mb-6">
                  DIRECT CHANNELS
                </h3>
                <div className="space-y-6">
                  <motion.div
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-muted/20 border border-border/30 hover:border-primary/30 transition-all duration-300"
                  >
                    <div className="p-3 rounded-lg bg-primary/20 text-primary">
                      <Mail size={24} />
                    </div>
                    <div>
                      <div className="font-orbitron font-medium text-foreground">
                        QUANTUM MAIL
                      </div>
                      <div className="text-sm text-cyber">
                        contact@cyber.dev
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-muted/20 border border-border/30 hover:border-secondary/30 transition-all duration-300"
                  >
                    <div className="p-3 rounded-lg bg-secondary/20 text-secondary">
                      <Zap size={24} />
                    </div>
                    <div>
                      <div className="font-orbitron font-medium text-foreground">
                        RESPONSE TIME
                      </div>
                      <div className="text-sm text-cyber">
                        &lt; 24 quantum hours
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Social Links */}
              <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-2xl font-orbitron font-bold heading-cyber mb-6">
                  NETWORK NODES
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex items-center gap-3 p-4 rounded-xl bg-muted/20 border border-border/30 hover:border-primary/30 transition-all duration-300 ${social.color} group`}
                    >
                      <social.icon className="group-hover:animate-pulse" size={24} />
                      <span className="font-rajdhani font-medium">
                        {social.label}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Status Indicator */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="glass-card p-6 rounded-2xl text-center"
              >
                <div className="flex items-center justify-center gap-3 mb-4">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-3 h-3 bg-primary rounded-full pulse-glow"
                  />
                  <span className="font-orbitron font-semibold text-primary neon-glow">
                    SYSTEM ONLINE
                  </span>
                </div>
                <p className="text-sm text-cyber">
                  All communication channels are operational and 
                  ready for quantum data transmission.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;