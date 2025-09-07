import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [loadingText, setLoadingText] = useState('');
  const [currentStep, setCurrentStep] = useState(0);
  const hasCompleted = useRef(false); // 👈 guard

  const loadingSteps = [
    'BOOTING PORTFOLIO...',
    'LOADING EXPERIENCE...',
    'DEPLOYING SKILLS...',
    'SHOWCASE READY'
  ];

  
useEffect(() => {
  if (hasCompleted.current) return; // 👈 skip duplicate run

  const timer = setTimeout(() => {
    if (currentStep < loadingSteps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      hasCompleted.current = true; // mark finished
      setTimeout(onComplete, 1000);
    }
  }, 1500); // 👈 SLOWER: 2.5 seconds per ste

  return () => clearTimeout(timer);
}, [currentStep, onComplete]);


  useEffect(() => {
    const text = loadingSteps[currentStep];
    let index = 0;
    setLoadingText('');

    const typewriter = setInterval(() => {
      if (index <= text.length) {
        setLoadingText(text.substring(0, index));
        index++;
      } else {
        clearInterval(typewriter);
      }
    }, 50);

    return () => clearInterval(typewriter);
  }, [currentStep]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 bg-background z-50 flex items-center justify-center overflow-hidden"
    >
      <div className="text-center z-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-4xl md:text-6xl font-orbitron font-bold neon-glow-purple mb-8"
        >
          SYSTEM BOOT
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mb-8"
        >
          <p className="text-lg md:text-xl font-rajdhani text-cyber font-mono">
            {loadingText}
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="ml-1"
            >
              _
            </motion.span>
          </p>
          {/* Progress Bar */}
          <div className="w-64 h-2 bg-gray-800 rounded-full mt-6 mx-auto overflow-hidden">
            <motion.div
              className="h-full bg-primary"
              initial={{ width: 0 }}
              animate={{ width: `${((currentStep + 1) / loadingSteps.length) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SplashScreen;
