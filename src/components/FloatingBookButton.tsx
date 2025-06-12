
// This component creates a floating "Book Now" button that appears on mobile devices
// It provides a quick way for users to book appointments without scrolling to find booking links

// Import React hooks for state management and side effects
import { useState, useEffect } from 'react';
// Import routing components for navigation and current page detection
import { Link, useLocation } from 'react-router-dom';
// Import our custom Button component
import { Button } from '@/components/ui/button';
// Import Calendar icon from Lucide React icon library
import { Calendar } from 'lucide-react';

// Main FloatingBookButton functional component
const FloatingBookButton = () => {
  // State to control button visibility (show/hide with scroll)
  const [isVisible, setIsVisible] = useState(true);
  // Get current page location
  const location = useLocation();

  // Don't show the button on the booking page since it would be redundant
  const shouldShow = !location.pathname.includes('/booking');

  // Effect to handle scroll behavior and button visibility
  useEffect(() => {
    // Function that runs when user scrolls
    const handleScroll = () => {
      // Get how far user has scrolled from top of page
      const scrolled = window.scrollY;
      // Show button when at top (< 50px) or after scrolling past 100px
      // Hide in the middle range to reduce visual clutter
      setIsVisible(scrolled < 50 || scrolled > 100);
    };

    // Add scroll event listener to window
    window.addEventListener('scroll', handleScroll);
    // Cleanup: remove event listener when component is removed
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // Empty dependency array means this runs once when component mounts

  // If we shouldn't show the button (e.g., on booking page), return nothing
  if (!shouldShow) return null;

  return (
    // Fixed positioned container for the floating button
    // Positioned near bottom right, hidden on large screens (lg:hidden)
    // Uses dynamic classes based on isVisible state for smooth transitions
    <div 
      className={`fixed top-[calc(88vh-3rem)] sm:top-[calc(92vh-3rem)] lg:hidden right-4 z-50 transition-all duration-300 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-80'
      }`}
    >
      {/* Button component with multiple responsive size variations */}
      <Button 
        asChild // Tells Button to use the child Link element instead of creating a button
        size="lg" 
        className="h-14 w-14 sm:h-12 sm:w-auto sm:px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 bg-primary hover:bg-primary/90 group"
        aria-label="Book a Pilates class now" // Accessibility label for screen readers
      >
        {/* Link component for navigation to booking page */}
        <Link to="/booking" className="flex items-center justify-center gap-2">
          {/* Calendar icon - responsive size */}
          <Calendar className="w-5 h-5 sm:w-4 sm:h-4" />
          {/* Text that only shows on small screens and up (hidden on extra small) */}
          <span className="hidden sm:inline font-medium">Book Now</span>
        </Link>
      </Button>
    </div>
  );
};

export default FloatingBookButton;
