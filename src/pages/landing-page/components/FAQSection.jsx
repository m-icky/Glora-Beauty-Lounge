import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "What services do you offer at Glora Beauty Lounge?",
      answer: `We offer a comprehensive range of beauty services including professional hair styling and coloring, makeup application for all occasions, advanced skincare treatments and facials, nail services with artistic designs, bridal packages, lash extensions, eyebrow shaping, and specialized spa treatments. Our expert team is trained in the latest techniques and uses premium products to ensure exceptional results.`,
      category: "Services"
    },
    {
      id: 2,
      question: "How far in advance should I book my appointment?",
      answer: `We recommend booking at least 1-2 weeks in advance for regular services, and 4-6 weeks ahead for bridal packages or special event services. Weekend appointments tend to fill up quickly, so earlier booking is advised. For urgent appointments, please call us directly as we may have last-minute availability due to cancellations.`,
      category: "Booking"
    },
    {
      id: 3,
      question: "What is your cancellation and rescheduling policy?",
      answer: `We require 24-hour notice for cancellations or rescheduling to avoid a cancellation fee. Same-day cancellations may incur a 50% service charge. No-shows will be charged the full service amount. We understand emergencies happen, so please contact us as soon as possible if you need to make changes to your appointment.`,
      category: "Policies"
    },
    {
      id: 4,
      question: "Do you offer bridal and group services?",
      answer: `Yes! We specialize in bridal beauty services including hair, makeup, and complete bridal packages. We offer on-site services for weddings and can accommodate bridal parties of various sizes. Our bridal packages include a trial session, wedding day services, touch-up kit, and coordination with your wedding timeline. Group bookings receive special pricing and priority scheduling.`,
      category: "Bridal"
    },
    {
      id: 5,
      question: "What safety measures do you have in place?",
      answer: `Your safety is our top priority. We follow strict sanitation protocols including sterilizing all tools between clients, using disposable items when possible, maintaining clean workstations, and ensuring proper ventilation. Our staff is trained in the latest health and safety standards. We also maintain a clean, hygienic environment and use only high-quality, tested products.`,
      category: "Safety"
    },
    {
      id: 6,
      question: "What payment methods do you accept?",
      answer: `We accept all major credit cards (Visa, MasterCard, American Express), debit cards, cash, and digital payment methods including Apple Pay, Google Pay, and Venmo. Payment is due at the time of service. We also offer gift cards which make perfect presents for friends and family.`,
      category: "Payment"
    },
    {
      id: 7,
      question: "Do you offer consultations before services?",
      answer: `Absolutely! We offer free consultations for all new clients and for anyone considering a significant change. During the consultation, we'll discuss your goals, assess your hair/skin condition, recommend suitable treatments, and create a personalized plan. This ensures you're completely comfortable with your service before we begin.`,
      category: "Consultation"
    },
    {
      id: 8,
      question: "How long do different services typically take?",
      answer: `Service times vary: Basic haircuts (45-60 minutes), Hair coloring (2-3 hours), Makeup application (45-90 minutes), Facials (60-90 minutes), Manicures (30-45 minutes), Pedicures (45-60 minutes), Bridal packages (3-5 hours). We'll provide accurate time estimates when you book and always allow buffer time to ensure quality results without rushing.`,
      category: "Timing"
    },
    {
      id: 9,
      question: "What products do you use and can I purchase them?",
      answer: `We use only premium, professional-grade products from trusted brands including Redken, Olaplex, MAC, and other industry leaders. Yes, most products used during your service are available for purchase so you can maintain your look at home. Our stylists will recommend the best products for your specific needs and provide usage instructions.`,
      category: "Products"
    },
    {
      id: 10,
      question: "Do you accommodate special needs or accessibility requirements?",
      answer: `Yes, we strive to accommodate all clients. Our salon is wheelchair accessible, and we can make arrangements for clients with special needs. Please let us know about any specific requirements when booking so we can ensure your visit is comfortable and enjoyable. We're committed to providing excellent service to everyone.`,
      category: "Accessibility"
    }
  ];

  const categories = [...new Set(faqs.map(faq => faq.category))];

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const handleBookingClick = () => {
    const bookingSection = document.querySelector('#booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactClick = () => {
    window.open('tel:+1234567890', '_self');
  };

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-text-primary mb-6">
            Frequently Asked{' '}
            <span className="text-primary font-accent">Questions</span>
          </h2>
          <p className="text-lg md:text-xl text-text-secondary font-body max-w-3xl mx-auto">
            Find answers to common questions about our services, policies, and booking process. Can't find what you're looking for? Contact us directly!
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <span
              key={category}
              className="px-4 py-2 bg-surface text-text-secondary font-body text-sm rounded-full border border-border-muted"
            >
              {category}
            </span>
          ))}
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-surface rounded-2xl border border-border-muted shadow-card overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full px-6 lg:px-8 py-6 text-left flex items-center justify-between hover:bg-background transition-colors duration-200"
              >
                <div className="flex-1 pr-4">
                  <h3 className="text-lg font-heading font-bold text-text-primary mb-1">
                    {faq.question}
                  </h3>
                  <span className="text-sm text-primary font-body font-medium">
                    {faq.category}
                  </span>
                </div>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center transition-transform duration-200 ${
                  openFAQ === faq.id ? 'rotate-180' : ''
                }`}>
                  <Icon 
                    name="ChevronDown" 
                    size={20} 
                    color="var(--color-primary)" 
                  />
                </div>
              </button>
              
              {openFAQ === faq.id && (
                <div className="px-6 lg:px-8 pb-6">
                  <div className="pt-4 border-t border-border-muted">
                    <p className="text-text-secondary font-body leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still Have Questions Section */}
        <div className="mt-16 bg-surface rounded-2xl p-8 border border-border-muted text-center">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
            <Icon name="HelpCircle" size={32} color="var(--color-primary-foreground)" />
          </div>
          
          <h3 className="text-2xl font-heading font-bold text-text-primary mb-4">
            Still Have Questions?
          </h3>
          <p className="text-text-secondary font-body mb-6 max-w-2xl mx-auto">
            Our friendly team is here to help! Whether you need more information about our services, want to discuss your specific needs, or have questions about booking, we're just a call or message away.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button
              variant="primary"
              onClick={handleContactClick}
              className="font-cta font-bold shadow-primary hover:shadow-golden-glow"
              iconName="Phone"
              iconPosition="left"
            >
              Call Us: (123) 456-7890
            </Button>
            
            <Button
              variant="outline"
              onClick={() => window.open('mailto:hello@glorabeautylounge.com', '_self')}
              className="font-cta font-semibold border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              iconName="Mail"
              iconPosition="left"
            >
              Send Email
            </Button>
          </div>
        </div>

        {/* Quick Help Links */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-background rounded-xl p-6 border border-border-muted text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Calendar" size={24} color="var(--color-primary)" />
            </div>
            <h4 className="text-lg font-heading font-bold text-text-primary mb-2">
              Book Appointment
            </h4>
            <p className="text-text-secondary font-body text-sm mb-4">
              Ready to book? Use our easy online booking system
            </p>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleBookingClick}
              className="font-cta font-semibold text-primary hover:text-primary-foreground hover:bg-primary"
            >
              Book Now
            </Button>
          </div>

          <div className="bg-background rounded-xl p-6 border border-border-muted text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="MessageCircle" size={24} color="var(--color-primary)" />
            </div>
            <h4 className="text-lg font-heading font-bold text-text-primary mb-2">
              WhatsApp Chat
            </h4>
            <p className="text-text-secondary font-body text-sm mb-4">
              Quick questions? Chat with us on WhatsApp
            </p>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                const message = encodeURIComponent("Hi! I have a question about your services.");
                window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
              }}
              className="font-cta font-semibold text-primary hover:text-primary-foreground hover:bg-primary"
            >
              Chat Now
            </Button>
          </div>

          <div className="bg-background rounded-xl p-6 border border-border-muted text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="MapPin" size={24} color="var(--color-primary)" />
            </div>
            <h4 className="text-lg font-heading font-bold text-text-primary mb-2">
              Visit Our Salon
            </h4>
            <p className="text-text-secondary font-body text-sm mb-4">
              Come see our beautiful salon and meet our team
            </p>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                const address = encodeURIComponent("123 Beauty Street, Salon District, City 12345");
                window.open(`https://www.google.com/maps/search/?api=1&query=${address}`, '_blank');
              }}
              className="font-cta font-semibold text-primary hover:text-primary-foreground hover:bg-primary"
            >
              Get Directions
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;