import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Zap, Terminal } from 'lucide-react';

interface HomeSectionProps {
  onNavigate: (section: string) => void;
}

const HomeSection: React.FC<HomeSectionProps> = ({ onNavigate }) => {
  const [showSplash, setShowSplash] = useState(true);
  const [matrixActive, setMatrixActive] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  const handleSplashComplete = () => {
    setShowSplash(false);
    window.location.hash = '#home';
  };

  // Matrix Effect Implementation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.altKey && event.key.toLowerCase() === 'g') {
        event.preventDefault();
        setMatrixActive(!matrixActive);
      }
      // ESC key to exit matrix mode
      if (event.key === 'Escape') {
        setMatrixActive(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [matrixActive]);

  // Matrix Canvas Effect
  useEffect(() => {
    if (!matrixActive || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Matrix characters (mix of Japanese katakana, numbers, and symbols)
    const matrixChars = 'アカサタナハマヤラワガザダバパイキシチニヒミリギジヂビピウクスツヌフムユルグズヅブプエケセテネヘメレゲゼデベペオコソトノホモヨロゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+-=[]{}|;:,.<>?';
    
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = [];

    // Initialize drops
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * canvas.height;
    }

    // Matrix animation function
    const drawMatrix = () => {
      // Semi-transparent black background for trail effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#00ff41'; // Classic Matrix green
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        // Random character
        const char = matrixChars[Math.floor(Math.random() * matrixChars.length)];
        
        // Draw character
        ctx.fillText(char, i * fontSize, drops[i]);

        // Reset drop to top randomly
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        
        // Move drop down
        drops[i] += fontSize;
      }

      animationRef.current = requestAnimationFrame(drawMatrix);
    };

    drawMatrix();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [matrixActive]);

  return (
    <>
      {/* Matrix Canvas Overlay */}
      <AnimatePresence>
        {matrixActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 pointer-events-none"
          >
            <canvas
              ref={canvasRef}
              className="w-full h-full"
              style={{ background: 'rgba(0, 0, 0, 0.8)' }}
            />
            
            {/* Matrix mode indicator */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              className="absolute top-8 left-8 glass-card p-4 rounded-xl flex items-center gap-3"
            >
              <Terminal className="text-green-500" size={20} />
              <div>
                <p className="font-orbitron text-green-500 font-bold text-sm">MATRIX MODE ACTIVE</p>
                <p className="font-rajdhani text-green-400/80 text-xs">Press ESC to exit</p>
              </div>
            </motion.div>

            {/* Hidden message in matrix mode */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 2 }}
              className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center"
            >
              <p className="font-orbitron text-green-500 text-lg mb-2 neon-glow-green">
                WELCOME TO THE MATRIX
              </p>
              <p className="font-rajdhani text-green-400/80 text-sm">
                "There is no spoon..." - Neo
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
                DIGITAL
                <span className="block neon-glow-purple">ARCHITECT</span>
              </h1>
              <div className="flex items-center justify-center gap-4 mb-6">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <Zap className="text-primary" size={32} />
                </motion.div>
                <p className="text-xl md:text-2xl font-rajdhani text-foreground/80 font-medium">
                  COMPUTER ENGINEERING VISIONARY
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
              Shaping tomorrow's machines with adaptive algorithms, custom silicon, and intelligent software ecosystems.
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

        {/* Secret Matrix Hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
          className="absolute bottom-4 right-4 glass-card p-3 rounded-lg"
        >
          <p className="font-rajdhani text-xs text-foreground/50">
            Press <kbd className="px-2 py-1 bg-muted/50 rounded text-foreground/70 font-mono">Alt + D</kbd> for something special...
          </p>
        </motion.div>

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

      <style>{`
        .neon-glow-green {
          text-shadow: 
            0 0 5px #00ff41,
            0 0 10px #00ff41,
            0 0 15px #00ff41,
            0 0 20px #00ff41;
        }
        
        kbd {
          font-family: 'Courier New', monospace;
          font-weight: bold;
        }
      `}</style>
    </>
  );
};

export default HomeSection;