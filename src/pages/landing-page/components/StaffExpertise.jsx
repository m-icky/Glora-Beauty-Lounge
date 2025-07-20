import React from 'react';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const StaffExpertise = () => {
  const staffMembers = [
    {
      id: 1,
      name: "Isabella Martinez",
      title: "Master Hair Stylist & Colorist",
      image: "https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
      experience: 8,
      specialties: ["Balayage", "Color Correction", "Bridal Hair", "Cutting"],
      certifications: [
        "Redken Certified Colorist",
        "Olaplex Specialist",
        "Bridal Hair Certification",
        "Advanced Cutting Techniques"
      ],
      bio: "Isabella brings 8 years of expertise in hair styling and color. She specializes in creating natural-looking balayage and correcting challenging color situations. Her passion for bridal hair has made her the go-to stylist for weddings.",
      achievements: [
        "Top Stylist Award 2023",
        "500+ Successful Color Corrections",
        "Featured in Beauty Magazine"
      ],
      socialProof: "Rated 4.9/5 by 200+ clients"
    },
    {
      id: 2,
      name: "Sophia Chen",
      title: "Senior Makeup Artist",
      image: "https://images.pixabay.com/photo/2020/10/21/18/07/makeup-5673556_960_720.jpg",
      experience: 6,
      specialties: ["Bridal Makeup", "Editorial", "Special Effects", "Airbrush"],
      certifications: [
        "MAC Pro Certified",
        "Airbrush Makeup Specialist",
        "Bridal Makeup Expert",
        "Special Effects Makeup"
      ],
      bio: "Sophia is a talented makeup artist with expertise in bridal and editorial makeup. Her attention to detail and ability to enhance natural beauty has made her a favorite among clients for special occasions.",
      achievements: [
        "Bridal Makeup Specialist of the Year",
        "300+ Bridal Transformations",
        "Celebrity Makeup Artist"
      ],
      socialProof: "Rated 5.0/5 by 150+ clients"
    },
    {
      id: 3,
      name: "Emma Thompson",
      title: "Licensed Esthetician",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      experience: 7,
      specialties: ["Anti-Aging", "Acne Treatment", "Chemical Peels", "Microdermabrasion"],
      certifications: [
        "Licensed Esthetician",
        "Chemical Peel Specialist",
        "Microdermabrasion Certified",
        "Anti-Aging Treatment Expert"
      ],
      bio: "Emma is a licensed esthetician specializing in advanced skincare treatments. Her holistic approach to skin health has helped hundreds of clients achieve their skincare goals through personalized treatment plans.",
      achievements: [
        "Skincare Specialist Award",
        "400+ Successful Treatments",
        "Advanced Skincare Certification"
      ],
      socialProof: "Rated 4.8/5 by 180+ clients"
    },
    {
      id: 4,
      name: "Olivia Rodriguez",
      title: "Nail Artist & Technician",
      image: "https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
      experience: 5,
      specialties: ["Nail Art", "Gel Extensions", "Pedicures", "Nail Health"],
      certifications: [
        "Nail Technician License",
        "Gel Extension Specialist",
        "Nail Art Certification",
        "Nail Health Expert"
      ],
      bio: "Olivia is a creative nail artist known for her intricate designs and attention to nail health. Her artistic skills combined with technical expertise ensure beautiful, long-lasting results for every client.",
      achievements: [
        "Best Nail Art Design 2023",
        "1000+ Nail Transformations",
        "Instagram Nail Artist Feature"
      ],
      socialProof: "Rated 4.9/5 by 250+ clients"
    }
  ];

  const handleBookingClick = () => {
    const bookingSection = document.querySelector('#booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-text-primary mb-6">
            Meet Our{' '}
            <span className="text-primary font-accent">Expert Team</span>
          </h2>
          <p className="text-lg md:text-xl text-text-secondary font-body max-w-3xl mx-auto">
            Our certified professionals bring years of experience and passion to every service. Get to know the talented team that will transform your look.
          </p>
        </div>

        {/* Staff Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {staffMembers.map((member) => (
            <div
              key={member.id}
              className="group bg-surface rounded-2xl overflow-hidden shadow-card hover:shadow-primary transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Staff Photo */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Experience Badge */}
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-cta font-semibold">
                  {member.experience} Years
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-primary-foreground p-4">
                    <h4 className="text-lg font-heading font-bold mb-2">
                      Specialties
                    </h4>
                    <div className="space-y-1">
                      {member.specialties.slice(0, 3).map((specialty, index) => (
                        <div key={index} className="flex items-center justify-center space-x-2">
                          <Icon name="Check" size={14} color="currentColor" />
                          <span className="text-sm font-body">{specialty}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Staff Details */}
              <div className="p-6">
                <h3 className="text-xl font-heading font-bold text-text-primary mb-1">
                  {member.name}
                </h3>
                <p className="text-primary font-body font-medium mb-3">
                  {member.title}
                </p>
                
                <p className="text-text-secondary font-body text-sm mb-4 line-clamp-3">
                  {member.bio}
                </p>

                {/* Social Proof */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" size={14} color="var(--color-primary)" />
                    ))}
                  </div>
                  <span className="text-xs text-text-secondary font-body">
                    {member.socialProof.split(' ')[1]} clients
                  </span>
                </div>

                {/* Certifications Preview */}
                <div className="mb-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon name="Award" size={16} color="var(--color-primary)" />
                    <span className="text-sm font-body font-medium text-text-primary">
                      Certifications
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {member.certifications.slice(0, 2).map((cert, index) => (
                      <span
                        key={index}
                        className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-body"
                      >
                        {cert}
                      </span>
                    ))}
                    {member.certifications.length > 2 && (
                      <span className="text-xs bg-border-muted text-text-secondary px-2 py-1 rounded-full font-body">
                        +{member.certifications.length - 2} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Book Button */}
                <Button
                  variant="outline"
                  fullWidth
                  onClick={handleBookingClick}
                  className="font-cta font-semibold border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  iconName="Calendar"
                  iconPosition="left"
                >
                  Book with {member.name.split(' ')[0]}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Team Stats */}
        <div className="mt-16 bg-surface rounded-2xl p-8 border border-border-muted">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2">
                26+
              </div>
              <p className="text-text-secondary font-body">Years Combined Experience</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2">
                15+
              </div>
              <p className="text-text-secondary font-body">Professional Certifications</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2">
                2,500+
              </div>
              <p className="text-text-secondary font-body">Services Completed</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2">
                4.9
              </div>
              <p className="text-text-secondary font-body">Average Team Rating</p>
            </div>
          </div>
        </div>

        {/* Team Philosophy */}
        <div className="mt-16 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-text-primary mb-6">
              Our Philosophy
            </h3>
            <p className="text-lg text-text-secondary font-body mb-8 leading-relaxed">
              At Glora Beauty Lounge, we believe that beauty is personal and unique to each individual. Our expert team is dedicated to understanding your vision and bringing it to life with skill, creativity, and care. We stay current with the latest trends and techniques while maintaining the highest standards of professionalism and hygiene.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-background rounded-xl p-6 border border-border-muted">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Heart" size={24} color="var(--color-primary-foreground)" />
                </div>
                <h4 className="text-lg font-heading font-bold text-text-primary mb-2">
                  Personalized Care
                </h4>
                <p className="text-text-secondary font-body text-sm">
                  Every service is tailored to your unique needs and preferences
                </p>
              </div>
              
              <div className="bg-background rounded-xl p-6 border border-border-muted">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Award" size={24} color="var(--color-primary-foreground)" />
                </div>
                <h4 className="text-lg font-heading font-bold text-text-primary mb-2">
                  Expert Excellence
                </h4>
                <p className="text-text-secondary font-body text-sm">
                  Certified professionals with years of specialized training
                </p>
              </div>
              
              <div className="bg-background rounded-xl p-6 border border-border-muted">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Sparkles" size={24} color="var(--color-primary-foreground)" />
                </div>
                <h4 className="text-lg font-heading font-bold text-text-primary mb-2">
                  Latest Techniques
                </h4>
                <p className="text-text-secondary font-body text-sm">
                  Cutting-edge methods and premium products for best results
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-background rounded-2xl p-8 border border-border-muted">
            <h3 className="text-2xl font-heading font-bold text-text-primary mb-4">
              Ready to Work with Our Expert Team?
            </h3>
            <p className="text-text-secondary font-body mb-6 max-w-2xl mx-auto">
              Book your appointment today and experience the difference that professional expertise and personalized care can make. Our team is excited to help you achieve your beauty goals.
            </p>
            <Button
              variant="primary"
              size="lg"
              onClick={handleBookingClick}
              className="font-cta font-bold shadow-primary hover:shadow-golden-glow"
              iconName="Users"
              iconPosition="left"
            >
              Book with Our Experts
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StaffExpertise;