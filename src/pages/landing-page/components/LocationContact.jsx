import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const LocationContact = () => {
  const [selectedDay, setSelectedDay] = useState('monday');

  const businessHours = {
    monday: { open: '8:00 AM', close: '9:00 PM', isOpen: true },
    tuesday: { open: '8:00 AM', close: '9:00 PM', isOpen: true },
    wednesday: { open: '8:00 AM', close: '9:00 PM', isOpen: true },
    thursday: { open: '8:00 AM', close: '9:00 PM', isOpen: true },
    friday: { open: '8:00 AM', close: '9:00 PM', isOpen: true },
    saturday: { open: '8:00 AM', close: '9:00 PM', isOpen: true },
    sunday: { open: '10:00 AM', close: '9:00 PM', isOpen: true }
  };

  const contactInfo = {
    address: "Glora Beauty Lounge, Metro City Plaza, VIP Road, Opp Cochin International Airport, Vappalasserry P.O, Ernakulam, 683572",
    phone: "+91 - 9846161869",
    email: "glorabeautylounge@gmail.com",
    whatsapp: "+91 - 9846161869",
    instagram: "@glorabeautylounge",
    facebook: "GloraBeautyLounge"
  };

  const locationFeatures = [
    {
      icon: "MapPin",
      title: "Prime Location",
      description: "Located in the heart of the beauty district with easy access"
    },
    {
      icon: "Car",
      title: "Free Parking",
      description: "Complimentary parking available for all clients"
    },
    {
      icon: "Wifi",
      title: "Free WiFi",
      description: "Stay connected while you relax and get pampered"
    },
    {
      icon: "Coffee",
      title: "Refreshments",
      description: "Complimentary beverages and snacks during your visit"
    },
    {
      icon: "Shield",
      title: "Safety First",
      description: "Enhanced cleaning protocols and safety measures"
    },
    {
      icon: "CreditCard",
      title: "All Payment Methods",
      description: "Cash, cards, and digital payments accepted"
    }
  ];

  const getCurrentDayStatus = () => {
    const today = new Date().toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();
    const currentHour = new Date().getHours();
    const todayHours = businessHours[today];
    
    if (!todayHours || !todayHours.isOpen) {
      return { status: 'closed', message: 'Closed Today' };
    }

    const openHour = parseInt(todayHours.open.split(':')[0]);
    const closeHour = parseInt(todayHours.close.split(':')[0]) + (todayHours.close.includes('PM') && !todayHours.close.includes('12') ? 12 : 0);
    
    if (currentHour >= openHour && currentHour < closeHour) {
      return { status: 'open', message: `Open until ${todayHours.close}` };
    } else if (currentHour < openHour) {
      return { status: 'closed', message: `Opens at ${todayHours.open}` };
    } else {
      return { status: 'closed', message: 'Closed for today' };
    }
  };

  const dayStatus = getCurrentDayStatus();

  const handleDirections = () => {
    const address = encodeURIComponent(contactInfo.address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${address}`, '_blank');
  };

  const handleCall = () => {
    window.open(`tel:${contactInfo.phone}`, '_self');
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hi! I'd like to book an appointment at Glora Beauty Lounge.");
    window.open(`https://wa.me/${contactInfo.whatsapp.replace(/\D/g, '')}?text=${message}`, '_blank');
  };

  const handleEmail = () => {
    window.open(`mailto:${contactInfo.email}?subject=Appointment Inquiry`, '_self');
  };

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-text-primary mb-6">
            Visit Our{' '}
            <span className="text-primary font-accent">Beautiful Salon</span>
          </h2>
          <p className="text-lg md:text-xl text-text-secondary font-body max-w-3xl mx-auto">
            Located in the heart of the city, our elegant salon provides a luxurious and comfortable environment for all your beauty needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map Section */}
          <div className="space-y-6">
            <div className="bg-surface rounded-2xl overflow-hidden shadow-card">
              <div className="map-container">
                <iframe 
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3927.2575278203226!2d76.388305!3d10.159709999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDA5JzM1LjAiTiA3NsKwMjMnMTcuOSJF!5e0!3m2!1sen!2sin!4v1751744734275!5m2!1sen!2sin" 
                width="100%"
                height="100%"
                title="Glora Beauty Lounge Location"
                className="border-0"
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                />
                
                {/* Map Overlay */}
                {/* <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm rounded-lg p-3 shadow-card">
                  <div className="flex items-center space-x-2">
                    <div className={`w-3 h-3 rounded-full ${
                      dayStatus.status === 'open' ? 'bg-success animate-pulse' : 'bg-error'
                    }`} />
                    <span className="text-sm font-body font-medium text-text-primary">
                      {dayStatus.message}
                    </span>
                  </div>
                </div> */}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-4">
              <Button
                variant="primary"
                onClick={handleDirections}
                className="font-cta font-semibold shadow-primary"
                iconName="Navigation"
                iconPosition="left"
              >
                Get Directions
              </Button>
              <Button
                variant="outline"
                onClick={handleCall}
                className="font-cta font-semibold border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                iconName="Phone"
                iconPosition="left"
              >
                Call Now
              </Button>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Address & Contact */}
            <div className="bg-surface rounded-2xl p-8 border border-border-muted shadow-card">
              <h3 className="text-2xl font-heading font-bold text-text-primary mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Icon name="MapPin" size={20} color="var(--color-primary)" className="mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-body font-medium text-text-primary">Address</p>
                    <p className="text-text-secondary font-body text-sm">
                      {contactInfo.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Icon name="Phone" size={20} color="var(--color-primary)" className="mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-body font-medium text-text-primary">Phone</p>
                    <button
                      onClick={handleCall}
                      className="text-primary font-body text-sm hover:underline"
                    >
                      {contactInfo.phone}
                    </button>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Icon name="Mail" size={20} color="var(--color-primary)" className="mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-body font-medium text-text-primary">Email</p>
                    <button
                      onClick={handleEmail}
                      className="text-primary font-body text-sm hover:underline"
                    >
                      {contactInfo.email}
                    </button>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <FaWhatsapp name="MessageCircle" size={20} color="var(--color-primary)" className="mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-body font-medium text-text-primary">WhatsApp</p>
                    <button
                      onClick={handleWhatsApp}
                      className="text-primary font-body text-sm hover:underline"
                    >
                      {contactInfo.whatsapp}
                    </button>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-6 pt-6 border-t border-border-muted">
                <p className="font-body font-medium text-text-primary mb-3">Follow Us</p>
                <div className="flex space-x-4">
                  <button
                    onClick={() => window.open(`https://instagram.com/${contactInfo.instagram.replace('@', '')}`, '_blank')}
                    className="w-10 h-10 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-200"
                  >
                    <FaInstagram name="Instagram" size={20} color="currentColor" />
                  </button>
                  <button
                    onClick={() => window.open(`https://facebook.com/${contactInfo.facebook}`, '_blank')}
                    className="w-10 h-10 bg-[#1877F2] rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-200"
                  >
                    <FaFacebook  name="Facebook" size={20} color="currentColor" />
                  </button>
                  <button
                    onClick={handleWhatsApp}
                    className="w-10 h-10 bg-success rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-200"
                  >
                    <FaWhatsapp name="MessageCircle" size={20} color="currentColor" />
                  </button>
                </div>
              </div>
            </div>
        </div>
      </div>

      {/* Business Hours */}
      <div className="bg-surface rounded-2xl p-8 border border-border-muted shadow-card business-hours">
        <h3 className="text-2xl font-heading font-bold text-text-primary mb-6">
          Business Hours
        </h3>
        
        <div className="space-y-3">
          {Object.entries(businessHours).map(([day, hours]) => (
            <div
              key={day}
              className={`flex items-center justify-between p-3 rounded-lg transition-colors duration-200 ${
                selectedDay === day ? 'bg-primary/10 border border-primary/20' : 'hover:bg-background'
              }`}
              onClick={() => setSelectedDay(day)}
            >
              <span className="font-body font-medium text-text-primary capitalize">
                {day}
              </span>
              <div className="flex items-center space-x-2">
                {hours.isOpen ? (
                  <span className="text-text-secondary font-body text-sm">
                    {hours.open} - {hours.close}
                  </span>
                ) : (
                  <span className="text-error font-body text-sm">Closed</span>
                )}
                <div className={`w-2 h-2 rounded-full ${
                  hours.isOpen ? 'bg-success' : 'bg-error'
                }`} />
              </div>
            </div>
          ))}
        </div>
      </div>

        {/* Location Features */}
        <div className="mt-16">
          <h3 className="text-2xl font-heading font-bold text-text-primary text-center mb-8">
            Why You'll Love Our Location
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locationFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-surface rounded-xl p-6 border border-border-muted shadow-card hover:shadow-primary transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                  <Icon name={feature.icon} size={24} color="var(--color-primary-foreground)" />
                </div>
                <h4 className="text-lg font-heading font-bold text-text-primary mb-2">
                  {feature.title}
                </h4>
                <p className="text-text-secondary font-body text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Contact */}
        {/* <div className="mt-16 bg-warning/10 rounded-2xl p-8 border border-warning/20 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="Clock" size={24} color="var(--color-warning)" />
            <h3 className="text-xl font-heading font-bold text-warning">
              Need to Reach Us After Hours?
            </h3>
          </div>
          <p className="text-text-secondary font-body mb-6 max-w-2xl mx-auto">
            For urgent appointment changes or questions outside business hours, you can reach us via WhatsApp or email. We'll respond as soon as possible during our next business day.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button
              variant="outline"
              onClick={handleWhatsApp}
              className="font-cta font-semibold border-warning text-warning hover:bg-warning hover:text-white"
              iconName="MessageCircle"
              iconPosition="left"
            >
              WhatsApp Us
            </Button>
            
            <Button
              variant="ghost"
              onClick={handleEmail}
              className="font-cta font-semibold text-warning hover:text-white hover:bg-warning"
              iconName="Mail"
              iconPosition="left"
            >
              Send Email
            </Button>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default LocationContact;