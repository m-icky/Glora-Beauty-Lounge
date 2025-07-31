import React, { useState, useEffect } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const FinalBookingCTA = () => {
  const [urgencyTimer, setUrgencyTimer] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [showExitIntent, setShowExitIntent] = useState(false);

  // Mock data for urgency
  const urgencyData = {
    weekendSlotsLeft: 3,
    todayBookings: 12,
    totalCapacity: 15,
    lastBookingTime: "2 minutes ago"
  };

  useEffect(() => {
    // Countdown to end of day for "today only" offers
    const calculateTimeLeft = () => {
      const now = new Date();
      const endOfDay = new Date();
      endOfDay.setHours(23, 59, 59, 999);

      const difference = endOfDay - now;

      if (difference > 0) {
        setUrgencyTimer({
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  // Exit intent detection
  useEffect(() => {
    const handleMouseLeave = (e) => {
      if (e.clientY <= 0) {
        setShowExitIntent(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, []);

  const handleBookingClick = () => {
    const bookingSection = document.querySelector('#booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCallClick = () => {
    window.open('tel:+919846161869', '_self');
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi! I'd like to book an appointment at Glora Beauty Lounge.");
    window.open(`https://wa.me/9846161869?text=${message}`, '_blank');
  };

  const closeExitIntent = () => {
    setShowExitIntent(false);
  };

  return (
    <>
      <section className="bg-primary text-primary-foreground relative overflow-hidden footer-section">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-32 -translate-y-32" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-48 translate-y-48" />
          <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16" />
        </div>

        <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
          {/* Urgency Alert */}
          {/* <div className="bg-warning/20 backdrop-blur-sm rounded-2xl p-6 mb-12 border border-warning/30">
            <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-warning rounded-full animate-pulse" />
                <div>
                  <h3 className="text-lg font-heading font-bold text-warning mb-1">
                    Limited Availability Alert
                  </h3>
                  <p className="text-sm text-primary-foreground/80 font-body">
                    Only {urgencyData.weekendSlotsLeft} weekend slots remaining this month
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <div className="text-2xl font-heading font-bold text-warning">
                    {urgencyData.todayBookings}/{urgencyData.totalCapacity}
                  </div>
                  <p className="text-xs text-primary-foreground/70 font-body">Today's Bookings</p>
                </div>
                
                <div className="text-center">
                  <div className="text-lg font-heading font-bold text-primary-foreground">
                    {urgencyTimer.hours}h {urgencyTimer.minutes}m
                  </div>
                  <p className="text-xs text-primary-foreground/70 font-body">Until Day Ends</p>
                </div>
              </div>
            </div>
          </div> */}

          {/* Main CTA Content */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
              Ready to Transform Your Look?
            </h2>
            <p className="text-xl md:text-2xl font-body mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
              Don't wait any longer! Book your appointment today and experience the luxury beauty services that have made hundreds of clients feel absolutely stunning.
            </p>

            {/* Social Proof */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-8">
              <div className="flex items-center space-x-2">
                <div className="flex text-warning">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} color="currentColor" />
                  ))}
                </div>
                <span className="font-body font-medium">4.9/5 Rating</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <Icon name="Users" size={20} color="currentColor" />
                <span className="font-body font-medium">100+ Happy Clients</span>
              </div>
              
              {/* <div className="flex items-center space-x-2">
                <Icon name="Award" size={20} color="currentColor" />
                <span className="font-body font-medium">6 Years Excellence</span>
              </div> */}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col lg:flex-row items-center justify-center space-y-4 lg:space-y-0 lg:space-x-6 mb-12">
            <Button
              variant="secondary"
              size="xl"
              onClick={handleBookingClick}
              className="font-cta font-bold shadow-golden-glow hover:shadow-2xl transform hover:scale-105 transition-all duration-300 px-12 py-6 text-lg"
              iconName="Sparkles"
              iconPosition="left"
            >
              Book Your Transformation Now
            </Button>
            
            <div className="flex space-x-4">
              <Button
                variant="outline"
                size="lg"
                onClick={handleCallClick}
                className="font-cta font-semibold border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-4"
                iconName="Phone"
                iconPosition="left"
                style={{color: "#ffd164"}}
              >
                Call Now
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                onClick={handleWhatsAppClick}
                className="font-cta font-semibold border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-4"
                iconName="MessageCircle"
                iconPosition="left"
                style={{color: "#ffd164"}}
              >
                WhatsApp
              </Button>
            </div>
          </div>

          {/* Last Booking Notification */}
          <div className="flex items-center justify-center space-x-2 text-primary-foreground/80">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
            <span className="text-sm font-body">
              Last booking: {urgencyData.lastBookingTime} • Someone just booked a Bridal Package
            </span>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-foreground/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={32} color="currentColor" />
              </div>
              <h4 className="text-lg font-heading font-bold mb-2">Safe & Clean</h4>
              <p className="text-sm font-body opacity-80">Enhanced safety protocols</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-foreground/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" size={32} color="currentColor" />
              </div>
              <h4 className="text-lg font-heading font-bold mb-2">Expert Team</h4>
              <p className="text-sm font-body opacity-80">Certified professionals</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-foreground/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" size={32} color="currentColor" />
              </div>
              <h4 className="text-lg font-heading font-bold mb-2">Flexible Hours</h4>
              <p className="text-sm font-body opacity-80">7 days a week</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-foreground/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Heart" size={32} color="currentColor" />
              </div>
              <h4 className="text-lg font-heading font-bold mb-2">Satisfaction</h4>
              <p className="text-sm font-body opacity-80">100% guaranteed</p>
            </div>
          </div>

          {/* copyright */}
          <div className="sm:text-base flex flex-col items-center justify-center space-y-1 text-primary-foreground/80 copyright-div py-4">
            <span className="text-sm font-body font">
            &copy; Glora Beauty Lounge {new Date().getFullYear()}. All rights reserved.
            </span>
            <span className="text-xs font-body">
              Made with ❤️ by 
              <a
              //  href="https://yourcompanywebsite.com"
               > Mack.Pixels
              </a>
            </span>
          </div>

        </div>
      </section>


      {/* Exit Intent Modal */}
      {/* {showExitIntent && (
        <div className="fixed inset-0 z-100 bg-black/80 flex items-center justify-center p-4">
          <div className="relative max-w-md w-full bg-surface rounded-2xl p-8 shadow-2xl">
            <button
              onClick={closeExitIntent}
              className="absolute top-4 right-4 w-8 h-8 bg-border-muted rounded-full flex items-center justify-center text-text-secondary hover:bg-text-secondary hover:text-surface transition-colors duration-200"
            >
              <Icon name="X" size={16} color="currentColor" />
            </button>

            <div className="text-center">
              <div className="w-16 h-16 bg-warning rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="AlertTriangle" size={32} color="white" />
              </div>
              
              <h3 className="text-2xl font-heading font-bold text-text-primary mb-4">
                Wait! Don't Miss Out
              </h3>
              
              <p className="text-text-secondary font-body mb-6">
                Before you go, grab this exclusive offer: <strong>15% OFF</strong> your first appointment when you book in the next 10 minutes!
              </p>

              <div className="bg-primary/10 rounded-lg p-4 mb-6">
                <p className="text-primary font-cta font-bold text-lg">
                  Use Code: SAVE15NOW
                </p>
                <p className="text-text-secondary font-body text-sm">
                  Valid for new clients only
                </p>
              </div>

              <div className="space-y-3">
                <Button
                  variant="primary"
                  fullWidth
                  onClick={() => {
                    closeExitIntent();
                    handleBookingClick();
                  }}
                  className="font-cta font-bold shadow-primary"
                  iconName="Gift"
                  iconPosition="left"
                >
                  Claim My 15% Discount
                </Button>
                
                <Button
                  variant="ghost"
                  fullWidth
                  onClick={closeExitIntent}
                  className="font-cta font-medium text-text-secondary hover:text-text-primary"
                >
                  No thanks, I'll pay full price
                </Button>
              </div>
            </div>
          </div>
        </div>
      )} */}
    </>
  );
};

export default FinalBookingCTA;