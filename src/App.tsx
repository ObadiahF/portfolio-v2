import { useState, useEffect } from 'react';
import { Navigation } from './components/sections/Navigation';
import { HeroSection } from './components/sections/HeroSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/sections/Footer';
import { GlobalStyles } from './styles/GlobalStyles';
import { CursorGlow } from './components/ui/CursorGlow';

export default function Portfolio() {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ backgroundColor: '#09090b', color: '#ffffff' }}>
      {/* Cursor glow effect */}
      <CursorGlow />

      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-0 -left-1/4 w-1/2 h-1/2 rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, transparent 70%)',
            animation: 'float 20s ease-in-out infinite'
          }}
        />
        <div
          className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.12) 0%, transparent 70%)',
            animation: 'float 25s ease-in-out infinite reverse'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navigation />
        {mounted && <HeroSection />}
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </div>

      <GlobalStyles />
    </div>
  );
}
