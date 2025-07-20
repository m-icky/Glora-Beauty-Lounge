import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const SocialMediaFeed = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  const instagramPosts = [
    {
      id: 1,
      image: "https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      caption: "Stunning bridal transformation for Sarah's special day! ✨ Hair and makeup that lasted all night long. #BridalBeauty #GloraBeautyLounge",
      likes: 234,
      comments: 18,
      timestamp: "2 hours ago",
      hashtags: ["#BridalBeauty", "#HairAndMakeup", "#WeddingReady"]
    },
    {
      id: 2,
      image: "https://images.pixabay.com/photo/2020/10/21/18/07/makeup-5673556_960_720.jpg",
      caption: "Bold and beautiful! This dramatic eye look is perfect for evening events. Book your makeup appointment today! 💄",
      likes: 189,
      comments: 12,
      timestamp: "5 hours ago",
      hashtags: ["#MakeupArt", "#EveningLook", "#DramaticEyes"]
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      caption: "Glowing skin after our signature hydrating facial! ✨ Your skin deserves the best care. #SkincareGoals #FacialTreatment",
      likes: 156,
      comments: 9,
      timestamp: "8 hours ago",
      hashtags: ["#SkincareGoals", "#FacialTreatment", "#GlowingSkin"]
    },
    {
      id: 4,
      image: "https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      caption: "Fresh cut and color transformation! From dull to dazzling in just one session. 💇‍♀️ #HairTransformation #NewLook",
      likes: 278,
      comments: 24,
      timestamp: "1 day ago",
      hashtags: ["#HairTransformation", "#NewLook", "#HairColor"]
    },
    {
      id: 5,
      image: "https://images.pixabay.com/photo/2016/03/27/07/32/beauty-1282265_960_720.jpg",
      caption: "Nail art perfection! 💅 These intricate designs take skill and patience. Book your nail appointment now!",
      likes: 145,
      comments: 15,
      timestamp: "1 day ago",
      hashtags: ["#NailArt", "#NailDesign", "#ManicurePedicure"]
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      caption: "Behind the scenes at Glora Beauty Lounge! Our team preparing for another day of transformations. 👥",
      likes: 203,
      comments: 11,
      timestamp: "2 days ago",
      hashtags: ["#BehindTheScenes", "#TeamWork", "#SalonLife"]
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      caption: "Lash extensions that look naturally gorgeous! Wake up beautiful every day. 👁️ #LashExtensions #NaturalBeauty",
      likes: 167,
      comments: 8,
      timestamp: "2 days ago",
      hashtags: ["#LashExtensions", "#NaturalBeauty", "#EyeLashes"]
    },
    {
      id: 8,
      image: "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      caption: "Client appreciation post! Thank you Emma for trusting us with your hair journey. You look amazing! 💕",
      likes: 198,
      comments: 16,
      timestamp: "3 days ago",
      hashtags: ["#ClientLove", "#HappyClient", "#Transformation"]
    },
    {
      id: 9,
      image: "https://images.pixabay.com/photo/2020/10/21/18/07/makeup-5673556_960_720.jpg",
      caption: "Photoshoot ready makeup! Professional looks for professional results. 📸 #PhotoshootMakeup #Professional",
      likes: 221,
      comments: 13,
      timestamp: "3 days ago",
      hashtags: ["#PhotoshootMakeup", "#Professional", "#MakeupArtist"]
    },
    {
      id: 10,
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      caption: "Self-care Sunday vibes! Treat yourself to our relaxing spa treatments. You deserve it! 🧘‍♀️ #SelfCare #SpaDay",
      likes: 134,
      comments: 7,
      timestamp: "4 days ago",
      hashtags: ["#SelfCare", "#SpaDay", "#Relaxation"]
    },
    {
      id: 11,
      image: "https://images.pexels.com/photos/3992659/pexels-photo-3992659.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      caption: "Color correction magic! From brassy to beautiful blonde. Trust our expert colorists! ✨ #ColorCorrection #BlondeHair",
      likes: 256,
      comments: 19,
      timestamp: "4 days ago",
      hashtags: ["#ColorCorrection", "#BlondeHair", "#HairMagic"]
    },
    {
      id: 12,
      image: "https://images.pixabay.com/photo/2016/03/27/07/32/beauty-1282265_960_720.jpg",
      caption: "Bridal party ready! All the ladies looking absolutely stunning for the big day. 👰‍♀️ #BridalParty #GroupBooking",
      likes: 312,
      comments: 28,
      timestamp: "5 days ago",
      hashtags: ["#BridalParty", "#GroupBooking", "#WeddingDay"]
    },
    {
      id: 13,
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      caption: "New product alert! 🚨 We\'re now using the latest in skincare technology. Book your facial to try it out!",
      likes: 178,
      comments: 14,
      timestamp: "5 days ago",
      hashtags: ["#NewProduct", "#SkincareInnovation", "#FacialTreatment"]
    },
    {
      id: 14,
      image: "https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      caption: "Balayage perfection! Natural-looking highlights that grow out beautifully. 🌟 #Balayage #NaturalHighlights",
      likes: 245,
      comments: 21,
      timestamp: "6 days ago",
      hashtags: ["#Balayage", "#NaturalHighlights", "#HairColor"]
    },
    {
      id: 15,
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      caption: "Thank you to all our amazing clients! Your trust and loyalty mean everything to us. ❤️ #ClientAppreciation",
      likes: 189,
      comments: 32,
      timestamp: "6 days ago",
      hashtags: ["#ClientAppreciation", "#ThankYou", "#GratefulHeart"]
    },
    {
      id: 16,
      image: "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      caption: "Weekend vibes! Book your weekend appointment and start your week feeling fabulous! 💫 #WeekendVibes #FeelFabulous",
      likes: 167,
      comments: 10,
      timestamp: "1 week ago",
      hashtags: ["#WeekendVibes", "#FeelFabulous", "#SelfCare"]
    }
  ];

  const openPost = (post) => {
    setSelectedPost(post);
  };

  const closePost = () => {
    setSelectedPost(null);
  };

  const handleBookingClick = () => {
    const bookingSection = document.querySelector('#booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInstagramClick = () => {
    window.open('https://instagram.com/glorabeautylounge', '_blank');
  };

  return (
    <section className="py-16 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-text-primary mb-6">
            Follow Our{' '}
            <span className="text-primary font-accent">Beauty Journey</span>
          </h2>
          <p className="text-lg md:text-xl text-text-secondary font-body max-w-3xl mx-auto mb-8">
            Stay updated with our latest transformations, beauty tips, and behind-the-scenes moments on Instagram
          </p>

          {/* Instagram Stats */}
          <div className="flex items-center justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-heading font-bold text-primary mb-1">
                12.5K
              </div>
              <p className="text-text-secondary font-body text-sm">Followers</p>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-heading font-bold text-primary mb-1">
                850+
              </div>
              <p className="text-text-secondary font-body text-sm">Posts</p>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-heading font-bold text-primary mb-1">
                4.8K
              </div>
              <p className="text-text-secondary font-body text-sm">Avg Likes</p>
            </div>
          </div>

          <Button
            variant="primary"
            onClick={handleInstagramClick}
            className="font-cta font-semibold shadow-primary"
            iconName="Instagram"
            iconPosition="left"
          >
            Follow @glorabeautylounge
          </Button>
        </div>

        {/* Instagram Feed Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {instagramPosts.map((post) => (
            <div
              key={post.id}
              className="group relative aspect-square bg-surface rounded-lg overflow-hidden shadow-card hover:shadow-primary transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
              onClick={() => openPost(post)}
            >
              <Image
                src={post.image}
                alt={`Instagram post ${post.id}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="flex items-center justify-center space-x-4 mb-2">
                    <div className="flex items-center space-x-1">
                      <Icon name="Heart" size={16} color="currentColor" />
                      <span className="text-sm font-body">{post.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="MessageCircle" size={16} color="currentColor" />
                      <span className="text-sm font-body">{post.comments}</span>
                    </div>
                  </div>
                  <Icon name="Instagram" size={24} color="currentColor" />
                </div>
              </div>

              {/* Post Type Indicator */}
              <div className="absolute top-2 right-2 w-6 h-6 bg-black/50 rounded-full flex items-center justify-center">
                <Icon name="Image" size={12} color="white" />
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            onClick={handleInstagramClick}
            className="font-cta font-semibold border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            iconName="ExternalLink"
            iconPosition="right"
          >
            View More on Instagram
          </Button>
        </div>

        {/* Social Engagement CTA */}
        <div className="mt-16 bg-background rounded-2xl p-8 border border-border-muted text-center">
          <h3 className="text-2xl font-heading font-bold text-text-primary mb-4">
            Share Your Transformation
          </h3>
          <p className="text-text-secondary font-body mb-6 max-w-2xl mx-auto">
            Tag us @glorabeautylounge in your posts and stories to be featured on our page! We love seeing our clients shine and sharing their beautiful transformations with our community.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button
              variant="primary"
              onClick={handleBookingClick}
              className="font-cta font-bold shadow-primary hover:shadow-golden-glow"
              iconName="Camera"
              iconPosition="left"
            >
              Book Your Photo-Ready Look
            </Button>
            
            <Button
              variant="ghost"
              onClick={handleInstagramClick}
              className="font-cta font-semibold text-primary hover:text-primary-foreground hover:bg-primary"
              iconName="Hash"
              iconPosition="left"
            >
              #GloraBeautyLounge
            </Button>
          </div>
        </div>
      </div>

      {/* Post Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-100 bg-black/90 flex items-center justify-center p-4">
          <div className="relative max-w-2xl w-full bg-surface rounded-2xl overflow-hidden">
            {/* Close Button */}
            <button
              onClick={closePost}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center text-text-primary hover:bg-background transition-all duration-200"
            >
              <Icon name="X" size={20} color="currentColor" />
            </button>

            {/* Post Image */}
            <div className="aspect-square">
              <Image
                src={selectedPost.image}
                alt={`Instagram post ${selectedPost.id}`}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Post Details */}
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1 text-primary">
                    <Icon name="Heart" size={20} color="currentColor" />
                    <span className="font-body font-medium">{selectedPost.likes}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-text-secondary">
                    <Icon name="MessageCircle" size={20} color="currentColor" />
                    <span className="font-body font-medium">{selectedPost.comments}</span>
                  </div>
                </div>
                <span className="text-sm text-text-secondary font-body">
                  {selectedPost.timestamp}
                </span>
              </div>

              <p className="text-text-primary font-body mb-4 leading-relaxed">
                {selectedPost.caption}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {selectedPost.hashtags.map((hashtag, index) => (
                  <span
                    key={index}
                    className="text-sm bg-primary/10 text-primary px-2 py-1 rounded-full font-body"
                  >
                    {hashtag}
                  </span>
                ))}
              </div>

              <div className="flex space-x-4">
                <Button
                  variant="primary"
                  onClick={handleBookingClick}
                  className="font-cta font-semibold flex-1"
                  iconName="Calendar"
                  iconPosition="left"
                >
                  Book Similar Service
                </Button>
                <Button
                  variant="outline"
                  onClick={handleInstagramClick}
                  className="font-cta font-semibold border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  iconName="ExternalLink"
                  iconPosition="left"
                >
                  View on Instagram
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default SocialMediaFeed;