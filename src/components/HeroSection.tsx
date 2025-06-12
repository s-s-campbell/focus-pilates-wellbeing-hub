
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const HeroSection = () => {
  const heroImages = ['https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80', 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80', 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80', 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section className="relative h-[70vh] sm:h-[80vh] lg:min-h-screen flex items-center justify-center">
      {/* Background Image Gallery */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out" style={{
        backgroundImage: `linear-gradient(rgba(52, 83, 75, 0.4), rgba(52, 83, 75, 0.4)), url('${heroImages[currentImageIndex]}')`
      }} />
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 animate-fade-in leading-tight">
          Your Personalised Path to a 
          <span className="text-accent"> Stronger, Healthier You</span>
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in">
          Experience expert-led Pilates in a supportive, intimate home studio in the heart of Midrand. Whether you're starting your journey, recovering from an injury, or seeking to maintain vitality, find your balance with Pilates in Focus.
        </p>
        
        <div className="animate-scale-in">
          <Button asChild size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300">
            <Link to="/booking">Book Your Pilates Class</Link>
          </Button>
        </div>
      </div>
      
      {/* Image indicators */}
      <div className="absolute bottom-12 sm:bottom-16 lg:bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {heroImages.map((_, index) => (
          <div 
            key={index} 
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentImageIndex ? 'bg-white' : 'bg-white/40'
            }`} 
          />
        ))}
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
