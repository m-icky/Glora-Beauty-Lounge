import React, { useState, useEffect } from 'react';
import Button from './Button';
import Icon from '../AppIcon';

const StickyBookingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('up');
  const [lastScrollY, setLastScrollY] = useState(0);
  const [currentSection, setCurrentSection] = useState('hero');

  const sectionMessages = {
    hero: 'Book Your Transformation',
    services: 'Choose Your Service',
    gallery: 'Get These Results',
    about: 'Book with Experts',
    reviews: 'Join Happy Clients',
    booking: 'Complete Booking'
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show CTA after scrolling past hero section
      setIsVisible(currentScrollY > 300);
      
      // Determine scroll direction
      if (currentScrollY > lastScrollY) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }
      setLastScrollY(currentScrollY);

      // Update current section for contextual messaging
      const sections = ['hero', 'services', 'gallery', 'about', 'reviews', 'booking'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      });
      
      if (currentSection) {
        setCurrentSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleBookingClick = () => {
    const bookingSection = document.querySelector('#booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Mobile Sticky CTA */}
      <div className={`fixed bottom-0 left-0 right-0 z-80 lg:hidden transition-transform duration-300 ${
        scrollDirection === 'down' && currentSection !== 'booking' ? 'translate-y-0' : 'translate-y-0'
      }`}>
        <div className="bg-surface/95 backdrop-blur-md border-t border-border-muted p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-warning rounded-full animate-pulse"></div>
              <span className="text-sm text-warning font-body font-body-medium">
                Only 3 slots left this week
              </span>
            </div>
            <div className="flex items-center space-x-1 text-primary">
              {[...Array(5)].map((_, i) => (
                <Icon key={i} name="Star" size={12} color="currentColor" />
              ))}
              <span className="text-xs text-text-secondary ml-1">500+</span>
            </div>
          </div>
          <Button
            variant="primary"
            onClick={handleBookingClick}
            className="w-full font-cta font-cta-bold shadow-primary"
            iconName="Calendar"
            iconPosition="left"
          >
            {sectionMessages[currentSection] || 'Book Now'}
          </Button>
        </div>
      </div>

      {/* Desktop Floating CTA (appears on scroll) */}
      <div className={`hidden lg:block fixed bottom-8 right-8 z-80 transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}>
        <div className="bg-surface/95 backdrop-blur-md rounded-lg border border-border-muted p-4 shadow-card">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-3 h-3 bg-warning rounded-full animate-pulse"></div>
            <span className="text-sm text-warning font-body font-body-medium">
              Limited availability
            </span>
          </div>
          <Button
            variant="primary"
            onClick={handleBookingClick}
            className="font-cta font-cta-semibold shadow-primary hover:shadow-golden-glow"
            iconName="Calendar"
            iconPosition="left"
          >
            {sectionMessages[currentSection] || 'Book Now'}
          </Button>
          <div className="flex items-center justify-center space-x-1 mt-2 text-primary">
            {[...Array(5)].map((_, i) => (
              <Icon key={i} name="Star" size={12} color="currentColor" />
            ))}
            <span className="text-xs text-text-secondary ml-1">500+ reviews</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default StickyBookingCTA;