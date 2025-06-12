// This component creates the large banner section at the top of the homepage
// It shows a slideshow of background images with text and a call-to-action button

// Import a reusable Button component from our UI library
import { Button } from '@/components/ui/button';
// Import Link component for navigation between pages without full page refresh
import { Link } from 'react-router-dom';
// Import React hooks for managing component state and side effects
import { useState, useEffect } from 'react';

// This is our HeroSection functional component
const HeroSection = () => {
  // Array of background image URLs from Unsplash (a free photo website)
  // These images will rotate automatically to create a slideshow effect
  const heroImages = [
    'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80', 
    'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80', 
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80', 
    'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
  ];
  
  // useState creates a state variable that can change over time
  // currentImageIndex tracks which image in the array is currently being shown (starts at 0)
  // setCurrentImageIndex is the function we use to update this value
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // useEffect runs code when the component loads and handles side effects
  useEffect(() => {
    // setInterval creates a timer that runs code repeatedly
    const interval = setInterval(() => {
      // Update the image index - if we're at the last image, go back to first (0)
      // Otherwise, move to the next image (add 1 to current index)
      setCurrentImageIndex(prevIndex => prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1);
    }, 5000); // Change image every 5 seconds (5000 milliseconds)

    // Cleanup function - stop the timer when component is removed from page
    return () => clearInterval(interval);
  }, [heroImages.length]); // Run this effect again if the number of images changes

  return (
    // Main section element with responsive height and centering
    // "relative" allows child elements to be positioned absolutely within it
    // Height is 70% of screen on mobile, 80% on small screens, full screen on large screens
    <section className="relative h-[70vh] sm:h-[80vh] lg:min-h-screen flex items-center justify-center">
      
      {/* Background Image Gallery */}
      {/* This div creates the sliding background image effect */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out" style={{
        // Combine a dark overlay with the current background image
        // Template literal (${}) inserts the current image URL into the CSS
        backgroundImage: `linear-gradient(rgba(52, 83, 75, 0.4), rgba(52, 83, 75, 0.4)), url('${heroImages[currentImageIndex]}')`
      }} />
      
      {/* Content - Main text and button */}
      {/* "relative z-10" puts this content above the background image */}
      <div className="relative z-10 max-w-4xl mx-auto responsive-container text-center">
        {/* Main headline with responsive text sizes */}
        {/* Text starts small (text-2xl) and gets larger on bigger screens (xl:text-7xl) */}
        <h1 className="font-heading text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 animate-fade-in leading-tight">
          Your Personalised Path to a 
          {/* Span with accent color for emphasis */}
          <span className="text-accent"> Stronger, Healthier You</span>
        </h1>
        
        {/* Subtitle paragraph with responsive text and semi-transparent white text */}
        <p className="responsive-text-optimize sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in">
          Experience expert-led Pilates in a supportive, intimate home studio in the heart of Midrand. Whether you're starting your journey, recovering from an injury, or seeking to maintain vitality, find your balance with Pilates in Focus.
        </p>
        
        {/* Container for the call-to-action button with animation */}
        <div className="animate-scale-in">
          {/* Button component with Link inside for navigation */}
          {/* "asChild" tells Button to use the Link as its element instead of creating a new button */}
          <Button asChild className="responsive-button shadow-lg hover:shadow-xl transition-all duration-300">
            <Link to="/booking">Book Your Pilates Class</Link>
          </Button>
        </div>
      </div>
      
      {/* Image indicators - small dots showing which image is active */}
      {/* Positioned at bottom center with absolute positioning */}
      <div className="absolute bottom-16 sm:bottom-20 lg:bottom-24 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {/* Loop through heroImages array to create indicator dots */}
        {/* The underscore (_) means we don't need the actual image value, just the index */}
        {heroImages.map((_, index) => (
          <div 
            key={index} // Unique key required by React for list items
            // Conditional styling: white dot if this is current image, semi-transparent if not
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentImageIndex ? 'bg-white' : 'bg-white/40'
            }`} 
          />
        ))}
      </div>
      
      {/* Scroll indicator - animated mouse/scroll hint at bottom */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        {/* Outer rounded rectangle representing a mouse */}
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          {/* Inner dot representing the scroll wheel */}
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
