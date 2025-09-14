import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Send,
  Mail,
  MessageCircle,
  Zap,
  Github,
  Linkedin,
  Instagram,
  CheckCircle,
  AlertCircle,
} from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>(
    'idle'
  );

  // Remove handleSubmit database logic
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    // Simulate sending (no database)
    setTimeout(() => {
      setStatus('sent');
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
        setStatus('idle');
      }, 3000);
    }, 1500);
  };

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/Yugpatel009',
      color: 'text-foreground hover:text-primary',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/yug-kanasagara-2030302a7/',
      color: 'text-foreground hover:text-secondary',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      href: 'https://www.instagram.com/kansagara.yug/',
      color: 'text-foreground hover:text-accent',
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:demodrago40@gmail.com',
      color: 'text-foreground hover:text-primary',
    },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center py-20 relative overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ rotate: [0, -360], scale: [1, 1.4, 1] }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          className="absolute top-10 right-1/4 w-64 h-64 border border-accent/10 rounded-full"
        />
        <motion.div
          animate={{ y: [-40, 40, -40], opacity: [0.1, 0.6, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-10 left-10 w-3 h-40 bg-gradient-to-t from-primary to-secondary rounded-full"
        />
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Form */}
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
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
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
                <InputField
                  label="IDENTITY"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your designation..."
                  delay={0.1}
                  disabled={status === 'sending'}
                />
                <InputField
                  label="COMM CHANNEL"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="quantum@email.com"
                  delay={0.2}
                  disabled={status === 'sending'}
                />
              </div>
              <InputField
                label="SUBJECT CODE"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="Collaboration protocol request..."
                delay={0.3}
                disabled={status === 'sending'}
              />
              <TextAreaField
                label="MESSAGE PAYLOAD"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Transmit your message..."
                delay={0.4}
                disabled={status === 'sending'}
              />

              <motion.button
                type="submit"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                whileHover={{ scale: status === 'sending' ? 1 : 1.02 }}
                whileTap={{ scale: status === 'sending' ? 1 : 0.98 }}
                disabled={status === 'sending'}
                className={`w-full glass-card-hover py-4 rounded-xl font-orbitron font-semibold transition-all duration-300 flex items-center justify-center gap-3 group ${
                  status === 'sent' 
                    ? 'text-green-500 border-green-500/50 bg-green-500/10' 
                    : status === 'error'
                    ? 'text-red-500 border-red-500/50 bg-red-500/10'
                    : 'text-primary neon-border hover:neon-glow'
                } ${status === 'sending' ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {status === 'sending' && (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  >
                    <Zap size={20} />
                  </motion.div>
                )}
                {status === 'sent' && <CheckCircle size={20} />}
                {status === 'error' && <AlertCircle size={20} />}
                {status !== 'sending' && status !== 'sent' && status !== 'error' && (
                  <Send className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
                )}
                
                {status === 'sending' && 'TRANSMITTING...'}
                {status === 'sent' && 'MESSAGE TRANSMITTED!'}
                {status === 'error' && 'TRANSMISSION FAILED'}
                {status === 'idle' && 'TRANSMIT MESSAGE'}
                
                {status === 'idle' && <Zap className="group-hover:animate-pulse" size={20} />}
              </motion.button>

              {status === 'error' && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 text-sm mt-2 text-center font-rajdhani"
                >
                  ⚠️ Quantum interference detected. Please retry transmission.
                </motion.p>
              )}

              {status === 'sent' && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-500 text-sm mt-2 text-center font-rajdhani"
                >
                  ✅ Message successfully transmitted to the mainframe!
                </motion.p>
              )}
            </form>
          </motion.div>

          {/* Social / Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-orbitron font-bold heading-cyber mb-6">
                NETWORK NODES
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, i) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
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

            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-xl font-orbitron font-bold heading-cyber mb-4">
                SYSTEM STATUS
              </h3>
              <div className="space-y-3">
                
                
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="font-rajdhani text-foreground/80">Transmission: READY</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

/* ---------- Subcomponents ---------- */
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  delay?: number;
}

const InputField: React.FC<InputProps> = ({ label, delay = 0, ...props }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
  >
    <label className="block text-sm font-orbitron font-medium text-foreground/80 mb-2">
      {label}
    </label>
    <input
      {...props}
      className="w-full px-4 py-3 bg-muted/30 border border-border/50 rounded-xl text-foreground placeholder-foreground/50 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300 font-rajdhani disabled:opacity-50 disabled:cursor-not-allowed"
      required
    />
  </motion.div>
);

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  delay?: number;
}

const TextAreaField: React.FC<TextAreaProps> = ({ label, delay = 0, ...props }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
  >
    <label className="block text-sm font-orbitron font-medium text-foreground/80 mb-2">
      {label}
    </label>
    <textarea
      {...props}
      rows={6}
      className="w-full px-4 py-3 bg-muted/30 border border-border/50 rounded-xl text-foreground placeholder-foreground/50 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300 font-rajdhani resize-none disabled:opacity-50 disabled:cursor-not-allowed"
      required
    />
  </motion.div>
);