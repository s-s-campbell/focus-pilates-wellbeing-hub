
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';

const FloatingBookButton = () => {
  const [isVisible, setIsVisible] = useState(true);
  const location = useLocation();

  // Hide on booking page as it's redundant
  const shouldShow = !location.pathname.includes('/booking');

  useEffect(() => {
    const handleScroll = () => {
      // Add subtle fade effect when scrolling
      const scrolled = window.scrollY;
      setIsVisible(scrolled < 50 || scrolled > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!shouldShow) return null;

  return (
    <div 
      className={`fixed bottom-4 right-4 z-50 transition-all duration-300 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-80'
      }`}
    >
      <Button 
        asChild 
        size="lg" 
        className="h-14 w-14 sm:h-12 sm:w-auto sm:px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 bg-primary hover:bg-primary/90 group"
        aria-label="Book a Pilates class now"
      >
        <Link to="/booking" className="flex items-center justify-center gap-2">
          <Calendar className="w-5 h-5 sm:w-4 sm:h-4" />
          <span className="hidden sm:inline font-medium">Book Now</span>
        </Link>
      </Button>
    </div>
  );
};

export default FloatingBookButton;
