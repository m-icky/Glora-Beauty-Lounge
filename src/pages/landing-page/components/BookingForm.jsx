import React, { useState, useEffect } from 'react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Icon from '../../../components/AppIcon';

const BookingForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    service: '',
    date: '',
    time: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    whatsapp: '',
    specialRequests: ''
  });
  const [availableSlots, setAvailableSlots] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const services = [
    'Hair Styling',
    'Professional Makeup',
    'Skincare Treatments',
    'Nail Services',
    'Bridal Packages',
    'Special Treatments',
    'Free Consultation'
  ];

  const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
    '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM'
  ];

  useEffect(() => {
    // Check for pre-selected service from services section
    const selectedService = localStorage.getItem('selectedService');
    if (selectedService) {
      setFormData(prev => ({ ...prev, service: selectedService }));
      localStorage.removeItem('selectedService');
    }
  }, []);

  useEffect(() => {
    // Simulate available slots based on selected date
    if (formData.date) {
      const selectedDate = new Date(formData.date);
      const dayOfWeek = selectedDate.getDay();
      
      // Weekend slots are more limited
      if (dayOfWeek === 0 || dayOfWeek === 6) {
        setAvailableSlots(timeSlots.slice(2, 12)); // 10 AM - 4 PM
      } else {
        setAvailableSlots(timeSlots.slice(0, 16)); // 9 AM - 5:30 PM
      }
    }
  }, [formData.date]);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 20000));
    
    setIsSubmitting(false);
    setShowSuccess(true);
    
    // Reset form after success
    setTimeout(() => {
      setShowSuccess(false);
      setCurrentStep(1);
      setFormData({
        service: '',
        date: '',
        time: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        whatsapp: '',
        specialRequests: ''
      });
    }, 20000);
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1: 
        return formData.service && formData.date && formData.time;
      case 2:
        return formData.firstName && formData.lastName && formData.email && formData.phone;
      case 3:
        return true;
      default:
        return false;
    }
  };

  const getMinDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  const getMaxDate = () => {
    const maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + 60); // 2 months ahead
    return maxDate.toISOString().split('T')[0];
  };

  if (showSuccess) {
    return (
      <section id="booking" className="py-16 lg:py-24 bg-surface">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-background rounded-2xl p-8 lg:p-12 border border-border-muted shadow-card text-center">
            <div className="w-20 h-20 bg-success rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="Check" size={40} color="white" />
            </div>
            <h2 className="text-3xl font-heading font-bold text-text-primary mb-4">
              Booking Confirmed!
            </h2>
            <p className="text-lg text-text-secondary font-body mb-6">
              Thank you {formData.firstName}! Your appointment for {formData.service} on{' '}
              {new Date(formData.date).toLocaleDateString()} at {formData.time} has been confirmed.
            </p>
            <div className="bg-surface rounded-lg p-6 mb-6">
              <h3 className="text-xl font-heading font-bold text-text-primary mb-4">
                What's Next?
              </h3>
              <div className="space-y-3 text-left">
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" size={20} color="var(--color-primary)" />
                  <span className="font-body text-text-secondary">
                    Confirmation email sent to {formData.email}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="MessageSquare" size={20} color="var(--color-primary)" />
                  <span className="font-body text-text-secondary">
                    WhatsApp reminder 24 hours before appointment
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="MapPin" size={20} color="var(--color-primary)" />
                  <span className="font-body text-text-secondary">
                    Location: 123 Beauty Street, Salon District
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button
                variant="primary"
                onClick={() => window.open('https://calendar.google.com', '_blank')}
                iconName="Calendar"
                iconPosition="left"
              >
                Add to Calendar
              </Button>
              <Button
                variant="outline"
                onClick={() => window.open('tel:+1234567890', '_self')}
                iconName="Phone"
                iconPosition="left"
              >
                Call Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="py-16 lg:py-24 bg-surface">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-text-primary mb-6">
            Book Your{' '}
            <span className="text-primary font-accent">Transformation</span>
          </h2>
          <p className="text-lg md:text-xl text-text-secondary font-body max-w-2xl mx-auto">
            Schedule your appointment in just 3 easy steps and get ready to look and feel amazing
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex items-center space-x-4">
            {[1, 2, 3].map((step) => (
              <React.Fragment key={step}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-cta font-bold transition-all duration-300 ${
                  step <= currentStep
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-border-muted text-text-secondary'
                }`}>
                  {step < currentStep ? (
                    <Icon name="Check" size={20} color="currentColor" />
                  ) : (
                    step
                  )}
                </div>
                {step < 3 && (
                  <div className={`w-12 h-1 rounded-full transition-all duration-300 ${
                    step < currentStep ? 'bg-primary' : 'bg-border-muted'
                  }`} />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Step Labels */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-8 lg:space-x-16">
            <span className={`text-sm font-body font-medium ${
              currentStep === 1 ? 'text-primary' : 'text-text-secondary'
            }`}>
              Service & Time
            </span>
            <span className={`text-sm font-body font-medium ${
              currentStep === 2 ? 'text-primary' : 'text-text-secondary'
            }`}>
              Your Details
            </span>
            <span className={`text-sm font-body font-medium ${
              currentStep === 3 ? 'text-primary' : 'text-text-secondary'
            }`}>
              Confirmation
            </span>
          </div>
        </div>

        {/* Booking Form */}
        <div className="bg-background rounded-2xl p-8 lg:p-12 border border-border-muted shadow-card">
          <form onSubmit={handleSubmit}>
            {/* Step 1: Service & Time Selection */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-heading font-bold text-text-primary mb-6">
                  Choose Your Service & Time
                </h3>

                {/* Service Selection */}
                <div>
                  <label className="block text-sm font-body font-medium text-text-primary mb-2">
                    Select Service *
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => handleInputChange('service', e.target.value)}
                    className="w-full px-4 py-3 bg-surface border border-border-muted rounded-lg text-text-primary font-body focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  >
                    <option value="">Choose a service...</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Date Selection */}
                <div>
                  <label className="block text-sm font-body font-medium text-text-primary mb-2">
                    Preferred Date *
                  </label>
                  <Input
                    type="date"
                    value={formData.date}
                    onChange={(e) => handleInputChange('date', e.target.value)}
                    min={getMinDate()}
                    max={getMaxDate()}
                    className="w-full"
                    required
                  />
                </div>

                {/* Time Selection */}
                {formData.date && (
                  <div>
                    <label className="block text-sm font-body font-medium text-text-primary mb-2">
                      Available Time Slots *
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                      {availableSlots.map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => handleInputChange('time', slot)}
                          className={`p-3 rounded-lg border font-body font-medium transition-all duration-200 ${
                            formData.time === slot
                              ? 'bg-primary text-primary-foreground border-primary'
                              : 'bg-surface border-border-muted text-text-primary hover:border-primary hover:bg-primary/10'
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Step 2: Personal Details */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-heading font-bold text-text-primary mb-6">
                  Your Contact Information
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-body font-medium text-text-primary mb-2">
                      First Name *
                    </label>
                    <Input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      placeholder="Enter your first name"
                      className="w-full"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-body font-medium text-text-primary mb-2">
                      Last Name *
                    </label>
                    <Input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      placeholder="Enter your last name"
                      className="w-full"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-body font-medium text-text-primary mb-2">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-body font-medium text-text-primary mb-2">
                      Phone Number *
                    </label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="(123) 456-7890"
                      className="w-full"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-body font-medium text-text-primary mb-2">
                      WhatsApp Number (Optional)
                    </label>
                    <Input
                      type="tel"
                      value={formData.whatsapp}
                      onChange={(e) => handleInputChange('whatsapp', e.target.value)}
                      placeholder="For appointment reminders"
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Confirmation */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-heading font-bold text-text-primary mb-6">
                  Confirm Your Appointment
                </h3>

                {/* Appointment Summary */}
                <div className="bg-surface rounded-lg p-6 border border-border-muted">
                  <h4 className="text-lg font-heading font-bold text-text-primary mb-4">
                    Appointment Details
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-text-secondary font-body">Service:</span>
                      <span className="text-text-primary font-body font-medium">{formData.service}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-secondary font-body">Date:</span>
                      <span className="text-text-primary font-body font-medium">
                        {new Date(formData.date).toLocaleDateString('en-US', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-secondary font-body">Time:</span>
                      <span className="text-text-primary font-body font-medium">{formData.time}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-secondary font-body">Client:</span>
                      <span className="text-text-primary font-body font-medium">
                        {formData.firstName} {formData.lastName}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Special Requests */}
                <div>
                  <label className="block text-sm font-body font-medium text-text-primary mb-2">
                    Special Requests or Notes (Optional)
                  </label>
                  <textarea
                    value={formData.specialRequests}
                    onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                    placeholder="Any specific requirements or preferences..."
                    rows={4}
                    className="w-full px-4 py-3 bg-surface border border-border-muted rounded-lg text-text-primary font-body focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                  />
                </div>

                {/* Terms and Conditions */}
                <div className="bg-surface rounded-lg p-4 border border-border-muted">
                  <div className="flex items-start space-x-3">
                    <Icon name="Info" size={20} color="var(--color-primary)" className="mt-0.5 flex-shrink-0" />
                    <div className="text-sm text-text-secondary font-body">
                      <p className="mb-2">
                        By booking this appointment, you agree to our cancellation policy:
                      </p>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>24-hour notice required for cancellations</li>
                        <li>Late arrivals may result in shortened service time</li>
                        <li>Payment is due at time of service</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <Button
                type="button"
                variant="ghost"
                onClick={handlePrevStep}
                disabled={currentStep === 1}
                className={`font-cta font-semibold ${currentStep === 1 ? 'invisible' : ''}`}
                iconName="ChevronLeft"
                iconPosition="left"
              >
                Previous
              </Button>

              {currentStep < 3 ? (
                <Button
                  type="button"
                  variant="primary"
                  onClick={handleNextStep}
                  disabled={!isStepValid()}
                  className="font-cta font-bold shadow-primary"
                  iconName="ChevronRight"
                  iconPosition="right"
                >
                  Next Step
                </Button>
              ) : (
                <Button
                  type="submit"
                  variant="primary"
                  disabled={isSubmitting}
                  loading={isSubmitting}
                  className="font-cta font-bold shadow-primary"
                  iconName="Calendar"
                  iconPosition="left"
                >
                  {isSubmitting ? 'Booking...' : 'Confirm Booking'}
                </Button>
              )}
            </div>
          </form>
        </div>

        {/* Contact Alternative */}
        <div className="text-center mt-8">
          <p className="text-text-secondary font-body mb-4">
            Prefer to book over the phone?
          </p>
          <Button
            variant="outline"
            onClick={() => window.open('tel:+1234567890', '_self')}
            className="font-cta font-semibold border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            iconName="Phone"
            iconPosition="left"
          >
            Call (123) 456-7890
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;