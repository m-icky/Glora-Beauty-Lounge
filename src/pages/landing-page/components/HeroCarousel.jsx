import React, { useState, useEffect } from 'react';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';
import roundLogo from '../../../assets/logo_round.png'
import carouselImg1 from '../../../assets/img_1.png'
import carouselImg2 from '../../../assets/img_2.png'
import carouselImg3 from '../../../assets/img_3.png'
import carouselImg4 from '../../../assets/img_4.jpg'

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const heroImages = [
    {
      id: 1,
      src: carouselImg1,
      alt: "Elegant beauty salon interior with modern styling stations"
    },
    {
      id: 2,
      src: carouselImg2,
      alt: "Professional makeup artist applying makeup to client"
    },
    {
      id: 3,
      src: carouselImg3,
      alt: "Hair styling session with professional stylist"
    },
    {
      id: 4,
      src: carouselImg4,
      alt: "Relaxing spa treatment and skincare services"
    },  
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, heroImages.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const handleBookingClick = () => {
    const bookingSection = document.querySelector('#booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative h-screen overflow-hidden">
      {/* Carousel Images */}
      <div className="relative w-full h-full">
        {heroImages.map((image, index) => (
          <div
            key={image.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 lg:left-8 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-surface/80 backdrop-blur-sm rounded-full flex items-center justify-center text-primary hover:bg-surface hover:scale-110 transition-all duration-300"
        aria-label="Previous slide"
      >
        <Icon name="ChevronLeft" size={24} color="currentColor" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 lg:right-8 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-surface/80 backdrop-blur-sm rounded-full flex items-center justify-center text-primary hover:bg-surface hover:scale-110 transition-all duration-300"
        aria-label="Next slide"
      >
        <Icon name="ChevronRight" size={24} color="currentColor" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-primary scale-125' :'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="text-center px-6 lg:px-8 max-w-4xl carousal-div">
          <img
            src={roundLogo}
            alt="Main logo"
            className="w-full h-auto rounded-xl main-round-logo"
          />

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight carousal-div-text">
            Transform Your Look at{' '}
            <span className="text-primary font-accent text-5xl md:text-6xl lg:text-7xl">
              Glora Beauty Lounge
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 font-body mb-8 max-w-2xl mx-auto">
            Premium Beauty Services by Expert Stylists in an Elegant Environment
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-8">
            <div className="flex items-center space-x-2 text-white">
              <div className="flex text-primary">
                {[...Array(5)].map((_, i) => (
                  <Icon key={i} name="Star" size={20} color="currentColor" />
                ))}
              </div>
              <span className="font-body font-medium">4.9 Rating</span>
            </div>
            
            <div className="flex items-center space-x-2 text-white">
              <Icon name="Users" size={20} color="var(--color-primary)" />
              <span className="font-body font-medium">100+ Happy Clients Since 2025</span>
            </div>
          </div>

          {/* Primary CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button
              variant="primary"
              size="xl"
              onClick={handleBookingClick}
              className="font-cta font-bold shadow-primary hover:shadow-golden-glow px-8 py-4"
              iconName="Calendar"
              iconPosition="left"
            >
              Book Your Appointment
            </Button>
            
            <Button
              variant="outline"
              size="xl"
              onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
              className="font-cta font-semibold border-white text-white hover:bg-white hover:text-background px-8 py-4 view-services-btn"
              iconName="ArrowDown"
              iconPosition="right"
            >
              View Services
            </Button>
          </div>

          {/* Urgency Message */}
          <div className="mt-6 flex items-center justify-center space-x-2 text-warning">
            <div className="w-2 h-2 bg-warning rounded-full animate-pulse" />
            <span className="text-sm font-body font-medium">
              Limited Weekend Slots Available - Book Today!
            </span>
          </div>
        </div>
      </div>

      {/* Floating Recent Booking Notification */}
      {/* <div className="absolute top-24 right-4 lg:right-8 z-20 bg-surface/90 backdrop-blur-md rounded-lg border border-border-muted p-4 shadow-card animate-pulse">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <Icon name="Check" size={16} color="var(--color-primary-foreground)" />
          </div>
          <div>
            <p className="text-sm font-body font-medium text-text-primary">
              Aiswarya Chandra just booked
            </p>
            <p className="text-xs text-text-secondary">
              Hair & Makeup Package
            </p>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default HeroCarousel;