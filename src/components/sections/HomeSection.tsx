// export default HomeSection;
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Zap } from 'lucide-react';

interface HomeSectionProps {
  onNavigate: (section: string) => void;
}

const HomeSection: React.FC<HomeSectionProps> = ({ onNavigate }) => {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashComplete = () => {
    setShowSplash(false);
    // Redirect to homepage after splash
    window.location.hash = '#home'; // or use react-router if available
  };

  return (
    <>
      <motion.section
        id="home"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-20 left-20 w-32 h-32 border border-primary/20 rounded-full"
          />
          <motion.div
            animate={{
              y: [-20, 20, -20],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-40 right-32 w-2 h-16 bg-gradient-to-b from-primary to-secondary rounded-full"
          />
          <motion.div
            animate={{
              x: [-30, 30, -30],
              rotate: [0, 90, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-32 left-1/4 w-8 h-8 border-2 border-accent rotate-45"
          />
        </div>

        <div className="container mx-auto px-4 z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            {/* Main Title */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="text-4xl md:text-6xl lg:text-8xl font-orbitron font-bold heading-cyber mb-4">
                SYSTEM
                <span className="block neon-glow-purple">BOOT</span>
              </h1>
              <div className="flex items-center justify-center gap-4 mb-6">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <Zap className="text-primary" size={32} />
                </motion.div>
                <p className="text-xl md:text-2xl font-rajdhani text-foreground/80 font-medium">
                  AI & ROBOTICS ARCHITECT
                </p>
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <Zap className="text-secondary" size={32} />
                </motion.div>
              </div>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg md:text-xl text-cyber max-w-2xl mx-auto mb-12 leading-relaxed"
            >
              Crafting the future through advanced robotics, AI integration, and 
              cybernetic interfaces. Welcome to the next evolution of digital experience.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            >
              <motion.button
                onClick={() => onNavigate('projects')}
                className="glass-card-hover px-8 py-4 rounded-xl font-orbitron font-semibold text-primary neon-border transition-all duration-300 hover:neon-glow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                EXPLORE PROJECTS
              </motion.button>
              <motion.button
                onClick={() => onNavigate('contact')}
                className="glass-card-hover px-8 py-4 rounded-xl font-orbitron font-semibold bg-gradient-to-r from-primary/20 to-secondary/20 border border-accent/50 hover:from-primary/30 hover:to-secondary/30 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                GET IN TOUCH
              </motion.button>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="flex flex-col items-center cursor-pointer"
              onClick={() => onNavigate('about')}
            >
              <p className="text-sm font-orbitron text-foreground/60 mb-2 tracking-widest">
                SCROLL TO DISCOVER
              </p>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="p-2 rounded-full border border-primary/30 hover:border-primary/60 transition-colors"
              >
                <ChevronDown className="text-primary" size={24} />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary/60 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            />
          ))}
        </div>
      </motion.section>
    </>
  );
};

export default HomeSection;