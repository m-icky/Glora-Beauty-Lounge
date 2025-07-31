import React, { useState, useEffect } from 'react';
import HeroCarousel from './components/HeroCarousel';
import ServicesShowcase from './components/ServicesShowcase';
// import TransformationGallery from './components/TransformationGallery';
import TestimonialsCarousel from './components/TestimonialsCarousel';
// import StaffExpertise from './components/StaffExpertise';
import BookingForm from './components/BookingForm';
import PromotionalOffers from './components/PromotionalOffers';
import LocationContact from './components/LocationContact';
// import SocialMediaFeed from './components/SocialMediaFeed';
import FAQSection from './components/FAQSection';
import FinalBookingCTA from './components/FinalBookingCTA';
import ScrollToTopButton from './components/ScrollToTopButton';
// import BackgroundMusicWithPermission from '../../components/BackgroundMusicWithPermission';
import roundLogo from '../../assets/logo_round.png'

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="animate-spin rounded-full border-t-4 border-primary initial-loader"></div>
        <img
          src={roundLogo}
          alt="Main logo"
          className="w-full h-auto rounded-xl main-round-logo loader"
        />
    </div>
  );
};

const LandingPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Background music with permission */}
      {/* <BackgroundMusicWithPermission /> */}

      {/* Scroll To Top Button */}
      <ScrollToTopButton/>

      {/* Hero Section with Carousel */}
      <HeroCarousel />
      
      {/* Services Showcase */}
      <ServicesShowcase />
      
      {/* Promotional Offers */}
      <PromotionalOffers />
      
      {/* Transformation Gallery */}
      {/* <TransformationGallery /> */}
      
      {/* Testimonials Carousel */}
      <TestimonialsCarousel />
      
      {/* Staff Expertise */}
      {/* <StaffExpertise /> */}
      
      {/* Booking Form */}
      <BookingForm />
      
      {/* Social Media Feed */}
      {/* <SocialMediaFeed /> */}
      
      {/* Location & Contact */}
      <LocationContact />
      
      {/* FAQ Section */}
      <FAQSection />
      
      {/* Final Booking CTA */}
      <FinalBookingCTA />
    </div>
  );
};

export default LandingPage;