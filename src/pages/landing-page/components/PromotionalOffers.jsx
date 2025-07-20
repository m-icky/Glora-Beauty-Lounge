import React, { useState, useEffect } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const PromotionalOffers = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const offers = [
    {
      id: 1,
      title: "New Client Special",
      discount: "25% OFF",
      description: "First-time clients save 20% on any service",
      // originalPrice: "$150",
      // discountedPrice: "$120",
      validUntil: "Limited Time",
      terms: "Valid for new clients only. Cannot be combined with other offers.",
      popular: false,
      services: ["Hair Styling", "Makeup", "Skincare", "Nail Services"]
    },
    {
      id: 2,
      title: "Membership Special Offer",
      discount: "15% OFF",
      description: "Exclusive membership discount for loyal clients",
      // originalPrice: "$200",
      // discountedPrice: "$170",
      validUntil: "Weekend Only",
      terms: "Both clients must book same-day appointments. Valid weekends only.",
      popular: false,
      services: ["Any Service", "Same Day Booking", "Exclusive Discounts", "Priority Booking"]
    },
    {
      id: 3,
      title: "Bridal Package Deal",
      discount: "20% OFF",
      description: "Complete bridal package with trial session",
      // originalPrice: "$500",
      // discountedPrice: "$400",
      validUntil: "This Month",
      terms: "Includes hair, makeup, and trial session. Book 30 days in advance.",
      popular: false,
      services: ["Bridal Hair", "Bridal Makeup", "Trial Session", "Touch-up Kit"]
    },
  ];

  // Calculate countdown for weekend special
  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const nextWeekend = new Date();
      
      // Find next Saturday
      const daysUntilSaturday = (6 - now.getDay()) % 7;
      nextWeekend.setDate(now.getDate() + (daysUntilSaturday === 0 ? 7 : daysUntilSaturday));
      nextWeekend.setHours(23, 59, 59, 999);

      const difference = nextWeekend - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleBookOffer = (offerTitle) => {
    const bookingSection = document.querySelector('#booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
      // Store selected offer for booking form
      localStorage.setItem('selectedOffer', offerTitle);
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-text-primary mb-6">
            Exclusive{' '}
            <span className="text-primary font-accent">Special Offers</span>
          </h2>
          <p className="text-lg md:text-xl text-text-secondary font-body max-w-3xl mx-auto">
            Take advantage of our limited-time promotions and save on premium beauty services. Don't miss out on these amazing deals!
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className={`relative bg-background rounded-2xl overflow-hidden shadow-card hover:shadow-primary transition-all duration-300 transform hover:-translate-y-2 ${
                offer.popular ? 'ring-2 ring-primary' : ''
              }`}
            >
              {/* Popular Badge */}
              {offer.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-cta font-bold shadow-primary">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* Offer Header */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-heading font-bold text-text-primary mb-2">
                    {offer.title}
                  </h3>
                  <div className="text-4xl font-heading font-bold text-primary mb-2">
                    {offer.discount}
                  </div>
                  <p className="text-text-secondary font-body">
                    {offer.description}
                  </p>
                </div>

                {/* Pricing */}
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center space-x-3">
                    <span className="text-2xl font-heading font-bold text-text-primary">
                      {offer.discountedPrice}
                    </span>
                    <span className="text-lg text-text-secondary line-through font-body">
                      {offer.originalPrice}
                    </span>
                  </div>
                  <p className="text-sm text-warning font-body font-medium mt-2">
                    {offer.validUntil}
                  </p>
                </div>

                {/* Services Included */}
                <div className="mb-6">
                  <h4 className="text-sm font-body font-semibold text-text-primary mb-3 flex items-center">
                    <Icon name="Check" size={16} color="var(--color-primary)" className="mr-2" />
                    What's Included:
                  </h4>
                  <div className="space-y-2">
                    {offer.services.map((service, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Icon name="Sparkles" size={14} color="var(--color-primary)" />
                        <span className="text-sm text-text-secondary font-body">
                          {service}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Countdown Timer for Weekend Special */}
                {offer.id === 3 && (
                  <div className="mb-6 p-4 bg-warning/10 rounded-lg border border-warning/20">
                    <div className="text-center">
                      <p className="text-sm font-body font-semibold text-warning mb-2">
                        Weekend Special Ends In:
                      </p>
                      <div className="grid grid-cols-4 gap-2">
                        <div className="text-center">
                          <div className="text-lg font-heading font-bold text-primary">
                            {timeLeft.days}
                          </div>
                          <div className="text-xs text-text-secondary font-body">Days</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-heading font-bold text-primary">
                            {timeLeft.hours}
                          </div>
                          <div className="text-xs text-text-secondary font-body">Hours</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-heading font-bold text-primary">
                            {timeLeft.minutes}
                          </div>
                          <div className="text-xs text-text-secondary font-body">Min</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-heading font-bold text-primary">
                            {timeLeft.seconds}
                          </div>
                          <div className="text-xs text-text-secondary font-body">Sec</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Book Button */}
                <Button
                  variant={offer.popular ? "primary" : "outline"}
                  fullWidth
                  onClick={() => handleBookOffer(offer.title)}
                  className={`font-cta font-bold mb-4 ${
                    offer.popular 
                      ? 'shadow-primary hover:shadow-golden-glow' 
                      : 'border-primary text-primary hover:bg-primary hover:text-primary-foreground'
                  }`}
                  iconName="Gift"
                  iconPosition="left"
                >
                  Claim This Offer
                </Button>

                {/* Terms */}
                <div className="text-xs text-text-secondary font-body text-center">
                  <Icon name="Info" size={12} color="currentColor" className="inline mr-1" />
                  {offer.terms}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Limited Availability Alert */}
        <div className="mt-16 bg-warning/10 rounded-2xl p-8 border border-warning/20 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="AlertTriangle" size={24} color="var(--color-warning)" />
            <h3 className="text-xl font-heading font-bold text-warning">
              Limited Availability Alert
            </h3>
          </div>
          <p className="text-text-secondary font-body mb-6 max-w-2xl mx-auto">
            Our special offers have limited slots available. Weekend appointments are filling up fast, and new client specials are only available for the first 50 bookings this month.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-background rounded-lg p-4 border border-border-muted">
              <div className="text-2xl font-heading font-bold text-primary mb-1">
                12
              </div>
              <p className="text-sm text-text-secondary font-body">
                Weekend slots left
              </p>
            </div>
            <div className="bg-background rounded-lg p-4 border border-border-muted">
              <div className="text-2xl font-heading font-bold text-primary mb-1">
                23
              </div>
              <p className="text-sm text-text-secondary font-body">
                New client specials left
              </p>
            </div>
            <div className="bg-background rounded-lg p-4 border border-border-muted">
              <div className="text-2xl font-heading font-bold text-primary mb-1">
                5
              </div>
              <p className="text-sm text-text-secondary font-body">
                Bridal packages left
              </p>
            </div>
          </div>

          <Button
            variant="primary"
            size="lg"
            onClick={() => handleBookOffer('Limited Time Offer')}
            className="font-cta font-bold shadow-primary hover:shadow-golden-glow"
            iconName="Clock"
            iconPosition="left"
          >
            Book Now Before It's Too Late
          </Button>
        </div>

        {/* Exit Intent Offer Preview */}
        <div className="mt-16 bg-background rounded-2xl p-8 border border-border-muted text-center">
          <h3 className="text-2xl font-heading font-bold text-text-primary mb-4">
            Still Deciding?
          </h3>
          <p className="text-text-secondary font-body mb-6 max-w-2xl mx-auto">
            We understand choosing the right beauty service is important. That's why we offer free consultations to discuss your needs and create a personalized treatment plan.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button
              variant="outline"
              size="lg"
              onClick={() => handleBookOffer('Free Consultation')}
              className="font-cta font-semibold border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              iconName="MessageCircle"
              iconPosition="left"
            >
              Book Free Consultation
            </Button>
            
            <Button
              variant="ghost"
              size="lg"
              onClick={() => window.open('tel:+1234567890', '_self')}
              className="font-cta font-semibold text-primary hover:text-primary-foreground hover:bg-primary"
              iconName="Phone"
              iconPosition="left"
            >
              Call for Questions
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromotionalOffers;