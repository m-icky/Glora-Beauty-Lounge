import React from 'react';
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

const LandingPage = () => {
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