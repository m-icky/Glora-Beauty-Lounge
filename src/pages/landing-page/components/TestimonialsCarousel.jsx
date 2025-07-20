import React, { useState, useEffect } from 'react';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const TestimonialsCarousel = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [showTranscript, setShowTranscript] = useState({});

  const testimonials = [
    {
      id: 1,
      name: "Sarah Mitchell",
      service: "Bridal Hair & Makeup",
      rating: 5,
      image: "https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      videoThumbnail: "https://images.pexels.com/photos/3992659/pexels-photo-3992659.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      review: `I can't express how amazing my experience was at Glora Beauty Lounge! The team made me feel like a princess on my wedding day. The attention to detail was incredible, and my hair and makeup lasted all day and night. Every guest complimented my look!`,
      transcript: `"I was so nervous about my wedding day look, but the team at Glora Beauty Lounge made me feel completely at ease. They listened to all my ideas and created something even more beautiful than I imagined. The trial session was perfect, and on the actual day, everything went smoothly. I felt absolutely stunning and confident. The makeup lasted through tears of joy, dancing, and all the celebrations. I would recommend them to every bride!"`,
      date: "2 weeks ago",
      verified: true
    },
    {
      id: 2,
      name: "Emily Rodriguez",
      service: "Hair Color & Cut",
      rating: 5,
      image: "https://images.pixabay.com/photo/2020/10/21/18/07/makeup-5673556_960_720.jpg",
      videoThumbnail: "https://images.pixabay.com/photo/2016/03/27/07/32/beauty-1282265_960_720.jpg",
      review: `After years of bad hair experiences, I finally found my salon home! The colorist understood exactly what I wanted and delivered beyond my expectations. The cut is perfect for my face shape, and I've received so many compliments. Worth every penny!`,
      transcript: `"I had been going to different salons for years, never quite happy with the results. When I found Glora Beauty Lounge, everything changed. The consultation was thorough, they explained every step, and the final result was exactly what I had been dreaming of. The color is vibrant, the cut is stylish, and it's so easy to maintain. I finally feel confident about my hair!"`,
      date: "1 month ago",
      verified: true
    },
    {
      id: 3,
      name: "Maria Gonzalez",
      service: "Anti-Aging Facial",
      rating: 5,
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      videoThumbnail: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      review: `The skincare treatments here are phenomenal! I've been coming for 6 months now, and my skin has never looked better. The esthetician is knowledgeable and creates personalized treatment plans. My friends keep asking what I'm doing differently!`,
      transcript: `"I started coming to Glora Beauty Lounge because I was concerned about aging and wanted professional skincare advice. The esthetician did a complete skin analysis and created a treatment plan specifically for me. After just a few sessions, I noticed my skin was brighter and more hydrated. Now, six months later, people tell me I look years younger. The products they recommended for home care have also made a huge difference."`,
      date: "3 weeks ago",
      verified: true
    },
    {
      id: 4,
      name: "Jessica Thompson",
      service: "Event Makeup",
      rating: 5,
      image: "https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      videoThumbnail: "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      review: `I needed makeup for a corporate photoshoot, and they delivered perfection! The makeup artist understood the lighting requirements and created a flawless look that photographed beautifully. Professional, punctual, and talented!`,
      transcript: `"I had a very important corporate photoshoot and needed makeup that would look professional yet striking on camera. The makeup artist at Glora Beauty Lounge was incredibly professional and knowledgeable about photography makeup. She asked about the lighting, the type of photos, and my personal style. The result was absolutely perfect - I looked polished and confident, and the photos turned out amazing. I'll definitely be back for future events."`,
      date: "2 months ago",
      verified: true
    },
    {
      id: 5,
      name: "Amanda Chen",
      service: "Full Makeover",
      rating: 5,
      image: "https://images.pixabay.com/photo/2016/03/27/07/32/beauty-1282265_960_720.jpg",
      videoThumbnail: "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      review: `I treated myself to a full makeover for my 40th birthday, and it was the best gift ever! New haircut, color, and a makeup lesson - I left feeling like a completely new person. The confidence boost was incredible!`,
      transcript: `"Turning 40 was a big milestone for me, and I wanted to do something special. I decided on a full makeover at Glora Beauty Lounge, and it exceeded all my expectations. They completely transformed my look while still keeping it true to who I am. The haircut and color are so flattering, and the makeup lesson taught me techniques I use every day. I feel more confident and beautiful than I have in years. It was truly a life-changing experience."`,
      date: "1 month ago",
      verified: true
    },
    {
      id: 6,
      name: "Rachel Williams",
      service: "Acne Treatment",
      rating: 5,
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      videoThumbnail: "https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      review: `After struggling with acne for years, I finally found a solution at Glora Beauty Lounge. The customized treatment plan and professional products have cleared my skin completely. I can't thank them enough!`,
      transcript: `"I had been dealing with adult acne for several years and tried everything - over-the-counter products, different dermatologists, you name it. Nothing worked until I came to Glora Beauty Lounge. The esthetician took time to understand my skin history and created a comprehensive treatment plan. The professional treatments combined with the right home care products have completely transformed my skin. For the first time in years, I feel comfortable going out without makeup. I'm so grateful for their expertise and patience."`,date: "6 weeks ago",
      verified: true
    },
    {
      id: 7,
      name: "Lisa Park",service: "Nail Art & Manicure",rating: 5,image: "https://images.pexels.com/photos/3992659/pexels-photo-3992659.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",videoThumbnail: "https://images.pixabay.com/photo/2020/10/21/18/07/makeup-5673556_960_720.jpg",review: `The nail art here is absolutely stunning! I always get compliments on my nails after visiting Glora Beauty Lounge. The attention to detail and creativity is unmatched. My nails have never looked better!`,transcript: `"I love getting my nails done, but I was never completely satisfied with the results until I found Glora Beauty Lounge. The nail technicians here are true artists. They listen to my ideas and always add their own creative touches that make the design even better. The quality of their work is exceptional - my manicures last for weeks without chipping. I always leave with nails that are absolutely perfect, and I get compliments everywhere I go."`,date: "2 weeks ago",
      verified: true
    },
    {
      id: 8,
      name: "Nicole Davis",service: "Lash Extensions",rating: 5,image: "https://images.pixabay.com/photo/2020/10/21/18/07/makeup-5673556_960_720.jpg",videoThumbnail: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      review: `My lash extensions are perfect! They look so natural yet dramatic, and they've lasted beautifully. The application was comfortable, and the results are exactly what I wanted. I wake up feeling glamorous every day!`,
      transcript: `"I was hesitant about getting lash extensions because I'd heard mixed reviews, but the lash artist at Glora Beauty Lounge put all my concerns to rest. She explained the entire process, helped me choose the perfect length and curl, and the application was so comfortable I almost fell asleep. The results are incredible - my lashes look naturally long and full, but with just the right amount of drama. They've lasted perfectly, and my morning routine is so much easier now. I feel beautiful and confident every single day."`,date: "3 weeks ago",
      verified: true
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 15000);
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 15000);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 15000);
  };

  const toggleTranscript = (id) => {
    setShowTranscript(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleBookingClick = () => {
    const bookingSection = document.querySelector('#booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentReview = testimonials[currentTestimonial];

  return (
    <section id="reviews" className="py-16 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-text-primary mb-6">
            What Our{' '}
            <span className="text-primary font-accent">Clients Say</span>
          </h2>
          <p className="text-lg md:text-xl text-text-secondary font-body max-w-3xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients who have experienced the Glora Beauty Lounge difference
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="relative max-w-5xl mx-auto">
          <div className="bg-background rounded-2xl p-8 lg:p-12 border border-border-muted shadow-card">
            <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8">
              {/* Video Thumbnail / Client Image */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-2xl overflow-hidden">
                    <Image
                      src={currentReview.videoThumbnail}
                      alt={`${currentReview.name} testimonial`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-black/40 rounded-2xl flex items-center justify-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-200">
                      <Icon name="Play" size={20} color="var(--color-primary-foreground)" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="flex-1 text-center lg:text-left">
                {/* Rating */}
                <div className="flex justify-center lg:justify-start items-center space-x-1 mb-4">
                  {[...Array(currentReview.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} color="var(--color-primary)" />
                  ))}
                </div>

                {/* Review Text */}
                <blockquote className="text-lg md:text-xl text-text-primary font-body mb-6 leading-relaxed">
                  "{currentReview.review}"
                </blockquote>

                {/* Client Info */}
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-4 mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <Image
                        src={currentReview.image}
                        alt={currentReview.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-text-primary">
                        {currentReview.name}
                      </h4>
                      <p className="text-sm text-text-secondary font-body">
                        {currentReview.service}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    {currentReview.verified && (
                      <div className="flex items-center space-x-1 text-success">
                        <Icon name="CheckCircle" size={16} color="currentColor" />
                        <span className="text-xs font-body font-medium">Verified</span>
                      </div>
                    )}
                    <span className="text-xs text-text-secondary font-body">
                      {currentReview.date}
                    </span>
                  </div>
                </div>

                {/* Transcript Toggle */}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => toggleTranscript(currentReview.id)}
                  className="font-body font-medium text-primary hover:text-primary-foreground hover:bg-primary"
                  iconName={showTranscript[currentReview.id] ? "ChevronUp" : "ChevronDown"}
                  iconPosition="right"
                >
                  {showTranscript[currentReview.id] ? 'Hide' : 'Show'} Full Transcript
                </Button>

                {/* Full Transcript */}
                {showTranscript[currentReview.id] && (
                  <div className="mt-4 p-4 bg-surface rounded-lg border border-border-muted">
                    <p className="text-text-secondary font-body text-sm leading-relaxed">
                      {currentReview.transcript}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center text-primary hover:bg-background hover:scale-110 transition-all duration-300 shadow-card"
            aria-label="Previous testimonial"
          >
            <Icon name="ChevronLeft" size={24} color="currentColor" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center text-primary hover:bg-background hover:scale-110 transition-all duration-300 shadow-card"
            aria-label="Next testimonial"
          >
            <Icon name="ChevronRight" size={24} color="currentColor" />
          </button>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial
                  ? 'bg-primary scale-125' :'bg-border-muted hover:bg-primary/50'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-16">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2">
              100+
            </div>
            <p className="text-text-secondary font-body">Happy Clients</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2">
              4.9
            </div>
            <p className="text-text-secondary font-body">Average Rating</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2">
              100%
            </div>
            <p className="text-text-secondary font-body">Satisfaction Rate</p>
          </div>
          {/* <div className="text-center">
            <div className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2">
              6
            </div>
            <p className="text-text-secondary font-body">Years Experience</p>
          </div> */}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-background rounded-2xl p-8 border border-border-muted">
            <h3 className="text-2xl font-heading font-bold text-text-primary mb-4">
              Ready to Join Our Happy Clients?
            </h3>
            <p className="text-text-secondary font-body mb-6 max-w-2xl mx-auto">
              Experience the same exceptional service and results that our clients rave about. Book your appointment today and discover why Glora Beauty Lounge is the most trusted salon in the city.
            </p>
            <Button
              variant="primary"
              size="lg"
              onClick={handleBookingClick}
              className="font-cta font-bold shadow-primary hover:shadow-golden-glow"
              iconName="Heart"
              iconPosition="left"
            >
              Book Your Experience
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;