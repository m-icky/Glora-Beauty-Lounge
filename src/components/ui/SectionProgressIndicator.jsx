import React, { useState, useEffect } from 'react';

const SectionProgressIndicator = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);

  const sections = [
    { id: 'hero', label: 'Hero', icon: '✨' },
    { id: 'services', label: 'Services', icon: '💄' },
    { id: 'gallery', label: 'Gallery', icon: '📸' },
    { id: 'about', label: 'About', icon: '👥' },
    { id: 'reviews', label: 'Reviews', icon: '⭐' },
    { id: 'booking', label: 'Book', icon: '📅' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Show indicator after scrolling past initial hero section
      setIsVisible(window.scrollY > 200);

      // Update active section based on scroll position
      const currentSection = sections.find(section => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top;
          const elementBottom = rect.bottom;
          const viewportHeight = window.innerHeight;
          
          // Consider section active if it occupies significant viewport space
          return elementTop <= viewportHeight * 0.3 && elementBottom >= viewportHeight * 0.3;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSectionClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Desktop Side Progress Indicator */}
      <div className="hidden xl:block fixed left-8 top-1/2 transform -translate-y-1/2 z-60">
        <div className="bg-surface/90 backdrop-blur-md rounded-full border border-border-muted p-2 shadow-card">
          <div className="space-y-3">
            {sections.map((section, index) => (
              <button
                key={section.id}
                onClick={() => handleSectionClick(section.id)}
                className={`group relative w-4 h-4 rounded-full transition-all duration-300 ${
                  activeSection === section.id
                    ? 'bg-primary scale-125 shadow-primary'
                    : 'bg-border-muted hover:bg-primary/50 hover:scale-110'
                }`}
                title={section.label}
              >
                {/* Tooltip */}
                <div className={`absolute left-8 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ${
                  activeSection === section.id ? 'opacity-100' : ''
                }`}>
                  <div className="bg-background border border-border-muted rounded-lg px-3 py-2 text-sm font-body whitespace-nowrap shadow-card">
                    <div className="flex items-center space-x-2">
                      <span>{section.icon}</span>
                      <span className="text-text-primary">{section.label}</span>
                    </div>
                  </div>
                </div>
                
                {/* Connection line */}
                {index < sections.length - 1 && (
                  <div className={`absolute top-6 left-1/2 transform -translate-x-1/2 w-0.5 h-6 transition-colors duration-300 ${
                    sections.findIndex(s => s.id === activeSection) > index
                      ? 'bg-primary' :'bg-border-muted'
                  }`} />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Bottom Progress Bar */}
      <div className="xl:hidden fixed bottom-20 left-4 right-4 z-60">
        <div className="bg-surface/90 backdrop-blur-md rounded-full border border-border-muted p-2 shadow-card">
          <div className="flex items-center justify-between space-x-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => handleSectionClick(section.id)}
                className={`flex-1 h-2 rounded-full transition-all duration-300 ${
                  activeSection === section.id
                    ? 'bg-primary shadow-primary'
                    : 'bg-border-muted hover:bg-primary/50'
                }`}
                title={section.label}
              />
            ))}
          </div>
          
          {/* Current section label */}
          <div className="text-center mt-2">
            <span className="text-xs text-text-secondary font-body">
              {sections.find(s => s.id === activeSection)?.label || 'Hero'}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionProgressIndicator;