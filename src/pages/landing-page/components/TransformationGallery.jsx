import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const TransformationGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const transformations = [
    {
      id: 1,
      beforeImage: "https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
      afterImage: "https://images.pexels.com/photos/3992659/pexels-photo-3992659.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
      service: "Hair Styling",
      description: "Complete hair transformation with cut, color, and styling",
      client: "Sarah M.",
      category: "hair"
    },
    {
      id: 2,
      beforeImage: "https://images.pixabay.com/photo/2020/10/21/18/07/makeup-5673556_960_720.jpg",
      afterImage: "https://images.pixabay.com/photo/2016/03/27/07/32/beauty-1282265_960_720.jpg",
      service: "Bridal Makeup",
      description: "Elegant bridal makeup for wedding day perfection",
      client: "Emily R.",
      category: "makeup"
    },
    {
      id: 3,
      beforeImage: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      afterImage: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      service: "Skincare Treatment",
      description: "Anti-aging facial treatment with visible results",
      client: "Maria L.",
      category: "skincare"
    },
    {
      id: 4,
      beforeImage: "https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
      afterImage: "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
      service: "Hair Color",
      description: "Dramatic hair color transformation with highlights",
      client: "Jessica K.",
      category: "hair"
    },
    {
      id: 5,
      beforeImage: "https://images.pixabay.com/photo/2016/03/27/07/32/beauty-1282265_960_720.jpg",
      afterImage: "https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
      service: "Event Makeup",
      description: "Glamorous evening makeup for special occasion",
      client: "Amanda T.",
      category: "makeup"
    },
    {
      id: 6,
      beforeImage: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      afterImage: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      service: "Acne Treatment",
      description: "Clear skin achieved through specialized treatment",
      client: "Rachel P.",
      category: "skincare"
    },
    {
      id: 7,
      beforeImage: "https://images.pexels.com/photos/3992659/pexels-photo-3992659.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
      afterImage: "https://images.pixabay.com/photo/2020/10/21/18/07/makeup-5673556_960_720.jpg",
      service: "Hair Cut & Style",
      description: "Modern haircut with professional styling",
      client: "Lisa H.",
      category: "hair"
    },
    {
      id: 8,
      beforeImage: "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
      afterImage: "https://images.pixabay.com/photo/2016/03/27/07/32/beauty-1282265_960_720.jpg",
      service: "Full Makeover",
      description: "Complete transformation with hair and makeup",
      client: "Nicole D.",
      category: "makeover"
    },
    {
      id: 9,
      beforeImage: "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      afterImage: "https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
      service: "Hydrating Facial",
      description: "Deep hydration treatment for glowing skin",
      client: "Sophie W.",
      category: "skincare"
    },
    {
      id: 10,
      beforeImage: "https://images.pixabay.com/photo/2016/03/27/07/32/beauty-1282265_960_720.jpg",
      afterImage: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      service: "Photoshoot Makeup",
      description: "Professional makeup for photography session",
      client: "Chloe B.",
      category: "makeup"
    },
    {
      id: 11,
      beforeImage: "https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
      afterImage: "https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
      service: "Balayage Hair",
      description: "Natural-looking balayage highlights",
      client: "Megan F.",
      category: "hair"
    },
    {
      id: 12,
      beforeImage: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      afterImage: "https://images.pixabay.com/photo/2020/10/21/18/07/makeup-5673556_960_720.jpg",
      service: "Bridal Package",
      description: "Complete bridal transformation package",
      client: "Victoria S.",
      category: "makeover"
    }
  ];

  const filters = [
    { id: 'all', label: 'All Transformations', count: transformations.length },
    { id: 'hair', label: 'Hair Styling', count: transformations.filter(t => t.category === 'hair').length },
    { id: 'makeup', label: 'Makeup', count: transformations.filter(t => t.category === 'makeup').length },
    { id: 'skincare', label: 'Skincare', count: transformations.filter(t => t.category === 'skincare').length },
    { id: 'makeover', label: 'Full Makeover', count: transformations.filter(t => t.category === 'makeover').length }
  ];

  const filteredTransformations = activeFilter === 'all' 
    ? transformations 
    : transformations.filter(t => t.category === activeFilter);

  const openLightbox = (transformation) => {
    setSelectedImage(transformation);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const handleBookingClick = () => {
    const bookingSection = document.querySelector('#booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="gallery" className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-text-primary mb-6">
            Amazing{' '}
            <span className="text-primary font-accent">Transformations</span>
          </h2>
          <p className="text-lg md:text-xl text-text-secondary font-body max-w-3xl mx-auto mb-8">
            See the incredible before and after results our expert stylists have achieved for our clients. Your transformation story starts here.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-full font-cta font-semibold transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-primary text-primary-foreground shadow-primary'
                    : 'bg-surface text-text-primary border border-border-muted hover:border-primary hover:text-primary'
                }`}
              >
                {filter.label} ({filter.count})
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredTransformations.map((transformation) => (
            <div
              key={transformation.id}
              className="group bg-surface rounded-2xl overflow-hidden shadow-card hover:shadow-primary transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              onClick={() => openLightbox(transformation)}
            >
              {/* Before/After Images */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 flex">
                  <div className="w-1/2 relative">
                    <Image
                      src={transformation.beforeImage}
                      alt={`Before ${transformation.service}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-xs font-cta font-semibold">
                      BEFORE
                    </div>
                  </div>
                  <div className="w-1/2 relative">
                    <Image
                      src={transformation.afterImage}
                      alt={`After ${transformation.service}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-cta font-semibold">
                      AFTER
                    </div>
                  </div>
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center text-primary-foreground">
                    <Icon name="ZoomIn" size={32} color="currentColor" className="mx-auto mb-2" />
                    <p className="text-sm font-cta font-semibold">View Details</p>
                  </div>
                </div>
              </div>

              {/* Transformation Details */}
              <div className="p-6">
                <h3 className="text-lg font-heading font-bold text-text-primary mb-2">
                  {transformation.service}
                </h3>
                <p className="text-text-secondary font-body text-sm mb-3 line-clamp-2">
                  {transformation.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-primary font-body font-medium text-sm">
                    Client: {transformation.client}
                  </span>
                  <Icon name="ArrowUpRight" size={16} color="var(--color-primary)" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-surface rounded-2xl p-8 border border-border-muted">
            <h3 className="text-2xl font-heading font-bold text-text-primary mb-4">
              Ready for Your Own Transformation?
            </h3>
            <p className="text-text-secondary font-body mb-6 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who have experienced amazing transformations at Glora Beauty Lounge. Book your appointment today and let our experts create your perfect look.
            </p>
            <Button
              variant="primary"
              size="lg"
              onClick={handleBookingClick}
              className="font-cta font-bold shadow-primary hover:shadow-golden-glow"
              iconName="Sparkles"
              iconPosition="left"
            >
              Start Your Transformation
            </Button>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-100 bg-black/90 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full bg-surface rounded-2xl overflow-hidden">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center text-text-primary hover:bg-background transition-all duration-200"
            >
              <Icon name="X" size={20} color="currentColor" />
            </button>

            {/* Image Comparison */}
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2 relative">
                <Image
                  src={selectedImage.beforeImage}
                  alt={`Before ${selectedImage.service}`}
                  className="w-full h-64 lg:h-96 object-cover"
                />
                <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-2 rounded-lg font-cta font-semibold">
                  BEFORE
                </div>
              </div>
              <div className="lg:w-1/2 relative">
                <Image
                  src={selectedImage.afterImage}
                  alt={`After ${selectedImage.service}`}
                  className="w-full h-64 lg:h-96 object-cover"
                />
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-2 rounded-lg font-cta font-semibold">
                  AFTER
                </div>
              </div>
            </div>

            {/* Details */}
            <div className="p-6 lg:p-8">
              <h3 className="text-2xl font-heading font-bold text-text-primary mb-3">
                {selectedImage.service}
              </h3>
              <p className="text-text-secondary font-body mb-4">
                {selectedImage.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-primary font-body font-medium">
                  Client: {selectedImage.client}
                </span>
                <Button
                  variant="primary"
                  onClick={handleBookingClick}
                  className="font-cta font-semibold"
                  iconName="Calendar"
                  iconPosition="left"
                >
                  Book Similar Service
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default TransformationGallery;