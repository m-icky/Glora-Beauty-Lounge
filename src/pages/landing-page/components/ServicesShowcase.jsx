import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';
import serviceImg1 from '../../../assets/img_1.png'
import serviceImg2 from '../../../assets/serviceImg2.png'
import serviceImg3 from '../../../assets/img_3.png'
import serviceImg4 from '../../../assets/serviceImg4.png'
import serviceImg5 from '../../../assets/serviceImg5.png'
import serviceImg6 from '../../../assets/serviceImg6.png'

const ServicesShowcase = () => {
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    {
      id: 1,
      title: "Hair Styling",
      description: "Professional cuts, colors, and styling for every occasion",
      image: serviceImg1,
      // priceRange: "$45 - $150",
      duration: "30min - 3 hours",
      popular: true,
      features: ["Cut & Style", "Color Treatment", "Hair Treatments", "Blowouts"]
    },
    {
      id: 2,
      title: "Professional Makeup",
      description: "Flawless makeup application for special events and daily wear",
      image: serviceImg2,
      // priceRange: "$60 - $200",
      duration: "45min - 2 hours",
      popular: false,
      features: ["Event Makeup", "Bridal Makeup", "Photoshoot Ready", "Makeup Lessons"]
    },
    {
      id: 3,
      title: "Skincare Treatments",
      description: "Rejuvenating facials and advanced skincare solutions",
      image: serviceImg3,
      // priceRange: "$80 - $250",
      duration: "1 - 2 hours",
      popular: true,
      features: ["Deep Cleansing", "Anti-Aging", "Hydrating Facials", "Acne Treatment"]
    },
    {
      id: 4,
      title: "Nail Services",
      description: "Manicures, pedicures, and stunning nail art designs",
      image: serviceImg4,
      // priceRange: "$25 - $85",
      duration: "30min - 1.5 hours",
      popular: false,
      features: ["Manicure", "Pedicure", "Gel Polish", "Nail Art"]
    },
    {
      id: 5,
      title: "Bridal Packages",
      description: "Complete bridal beauty services for your special day",
      image: serviceImg5,
      // priceRange: "$300 - $800",
      duration: "4 - 6 hours",
      popular: true,
      features: ["Hair & Makeup", "Trial Session", "Touch-up Kit", "Bridal Party Services"]
    },
    {
      id: 6,
      title: "Special Treatments",
      description: "Luxury spa treatments and specialized beauty services",
      image: serviceImg6,
      // priceRange: "$90 - $300",
      duration: "1 - 3 hours",
      popular: false,
      features: ["Lash Extensions", "Eyebrow Shaping", "Body Treatments", "Aromatherapy"]
    }
  ];

  const handleBookService = (serviceTitle) => {
    const bookingSection = document.querySelector('#booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
      // Store selected service for booking form
      localStorage.setItem('selectedService', serviceTitle);
    }
  };

  return (
    <section id="services" className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-text-primary mb-6">
            Our Premium{' '}
            <span className="text-primary font-accent">Beauty Services</span>
          </h2>
          <p className="text-lg md:text-xl text-text-secondary font-body max-w-3xl mx-auto">
            Experience luxury beauty treatments delivered by certified professionals using premium products in our elegant salon environment
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative bg-surface rounded-2xl overflow-hidden shadow-card hover:shadow-primary transition-all duration-300 transform hover:-translate-y-2"
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute top-4 left-4 z-10 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-cta font-semibold">
                  Most Popular
                </div>
              )}

              {/* Service Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Hover Overlay */}
                <div className={`absolute inset-0 bg-primary/90 flex items-center justify-center transition-opacity duration-300 ${
                  hoveredService === service.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="text-center text-primary-foreground p-6">
                    <h4 className="text-xl font-heading font-bold mb-3">
                      {service.title}
                    </h4>
                    <div className="space-y-2 mb-4">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-center justify-center space-x-2">
                          <Icon name="Check" size={16} color="currentColor" />
                          <span className="text-sm font-body">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => handleBookService(service.title)}
                      className="font-cta font-semibold"
                      iconName="Calendar"
                      iconPosition="left"
                    >
                      Book Now
                    </Button>
                  </div>
                </div>
              </div>

              {/* Service Details */}
              <div className="p-6">
                <h3 className="text-xl font-heading font-bold text-text-primary mb-2">
                  {service.title}
                </h3>
                <p className="text-text-secondary font-body mb-4 line-clamp-2">
                  {service.description}
                </p>

                {/* Service Info */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    {/* <div className="flex items-center space-x-1 text-primary">
                      <Icon name="DollarSign" size={16} color="currentColor" />
                      <span className="text-sm font-body font-medium">
                        {service.priceRange}
                      </span>
                    </div> */}
                    <div className="flex items-center space-x-1 text-text-secondary">
                      <Icon name="Clock" size={16} color="currentColor" />
                      <span className="text-sm font-body">
                        {service.duration}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Book Button */}
                <Button
                  variant="outline"
                  fullWidth
                  onClick={() => handleBookService(service.title)}
                  className="font-cta font-semibold border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  iconName="ArrowRight"
                  iconPosition="right"
                >
                  Book Service
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-surface rounded-2xl p-8 border border-border-muted">
            <h3 className="text-2xl font-heading font-bold text-text-primary mb-4">
              Not sure which service is right for you?
            </h3>
            <p className="text-text-secondary font-body mb-6 max-w-2xl mx-auto">
              Book a free consultation with our beauty experts to create a personalized treatment plan that meets your unique needs and goals.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button
                variant="primary"
                size="lg"
                onClick={() => handleBookService('Free Consultation')}
                className="font-cta font-bold shadow-primary"
                iconName="MessageCircle"
                iconPosition="left"
              >
                Book Free Consultation
              </Button>
              <Button
                variant="ghost"
                size="lg"
                onClick={() => window.open('tel:+919846161869', '_self')}
                className="font-cta font-semibold text-primary hover:text-primary-foreground hover:bg-primary"
                iconName="Phone"
                iconPosition="left"
              >
                Call Us: +91 - 9846161869
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesShowcase;