import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import HomeSection from '../components/sections/HomeSection';
import AboutSection from '../components/sections/AboutSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import SkillsSection from '../components/sections/SkillsSection';
import ContactSection from '../components/sections/ContactSection';
import Scene3D from '../components/Scene3D';

const Portfolio: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  // Scroll spy functionality
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
    setActiveSection(sectionId);
  };

  return (
    <div className="relative">
      {/* 3D Background Scene */}
      <Scene3D activeSection={activeSection} />
      
      {/* Navigation */}
      <Navigation 
        activeSection={activeSection} 
        onNavigate={handleNavigate} 
      />

      {/* Main Content */}
      <div className="relative z-10">
        <HomeSection onNavigate={handleNavigate} />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </div>
    </div>
  );
};

export default Portfolio;