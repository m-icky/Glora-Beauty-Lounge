import React, { useState, useEffect } from 'react';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  const navigationItems = [
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Gallery', href: '#gallery', id: 'gallery' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Reviews', href: '#reviews', id: 'reviews' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = navigationItems.map(item => item.id);
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleBookingClick = () => {
    const bookingSection = document.querySelector('#booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-100 transition-smooth ${
        isScrolled ? 'bg-background/95 backdrop-blur-md shadow-card' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-6 h-6 text-primary-foreground"
                    fill="currentColor"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                  </svg>
                </div>
                <div>
                  <h1 className="text-xl font-heading font-heading-bold text-primary">
                    Glora Beauty
                  </h1>
                  <p className="text-xs text-text-secondary font-body">
                    Lounge
                  </p>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.href)}
                  className={`font-body font-body-medium transition-smooth hover:text-primary ${
                    activeSection === item.id
                      ? 'text-primary border-b-2 border-primary pb-1' :'text-text-primary'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <Button
                variant="primary"
                onClick={handleBookingClick}
                className="font-cta font-cta-semibold shadow-primary hover:shadow-golden-glow"
              >
                Book Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md text-text-primary hover:text-primary transition-smooth"
              aria-label="Toggle menu"
            >
              <Icon 
                name={isMenuOpen ? "X" : "Menu"} 
                size={24} 
                color="currentColor" 
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-200 lg:hidden">
          <div className="fixed inset-0 bg-background/95 backdrop-blur-md" />
          <div className="fixed top-0 right-0 w-full h-full bg-surface shadow-card">
            <div className="flex flex-col h-full">
              {/* Mobile Header */}
              <div className="flex items-center justify-between p-6 border-b border-border-muted">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-5 h-5 text-primary-foreground"
                      fill="currentColor"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                    </svg>
                  </div>
                  <span className="text-lg font-heading font-heading-bold text-primary">
                    Glora Beauty
                  </span>
                </div>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 rounded-md text-text-primary hover:text-primary transition-smooth"
                  aria-label="Close menu"
                >
                  <Icon name="X" size={24} color="currentColor" />
                </button>
              </div>

              {/* Mobile Navigation */}
              <nav className="flex-1 px-6 py-8">
                <div className="space-y-6">
                  {navigationItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.href)}
                      className={`block w-full text-left py-3 px-4 rounded-lg font-body font-body-medium text-lg transition-smooth ${
                        activeSection === item.id
                          ? 'text-primary bg-primary/10 border-l-4 border-primary' :'text-text-primary hover:text-primary hover:bg-primary/5'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>

                {/* Mobile Social Proof */}
                <div className="mt-8 p-4 bg-background rounded-lg border border-border-muted">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="flex text-primary">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} color="currentColor" />
                      ))}
                    </div>
                    <span className="text-sm text-text-secondary font-body">
                      500+ transformations
                    </span>
                  </div>
                  <p className="text-sm text-text-secondary font-body">
                    "Trusted by women across the city since 2018"
                  </p>
                </div>
              </nav>

              {/* Mobile CTA */}
              <div className="p-6 border-t border-border-muted">
                <Button
                  variant="primary"
                  onClick={handleBookingClick}
                  className="w-full font-cta font-cta-bold text-lg py-4 shadow-primary"
                >
                  Book Your Transformation
                </Button>
                <p className="text-center text-sm text-text-secondary mt-2 font-body">
                  Only 3 slots left this week
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;