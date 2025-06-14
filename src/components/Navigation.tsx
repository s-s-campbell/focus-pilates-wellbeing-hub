
// This component creates the navigation bar at the top of every page
// It includes the logo, menu items, and a mobile hamburger menu

// Import React hook for managing component state
import { useState } from 'react';
// Import routing components for navigation and getting current page
import { Link, useLocation } from 'react-router-dom';
// Import our custom Button component
import { Button } from '@/components/ui/button';
// Import icons for the mobile menu (hamburger and X for close)
import { Menu, X } from 'lucide-react';

// Main Navigation functional component
const Navigation = () => {
  // State to track if mobile menu is open or closed (starts closed)
  const [isOpen, setIsOpen] = useState(false);
  // Hook to get current page location/URL
  const location = useLocation();

  // Array of navigation menu items with their URLs and display text
  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/classes', label: 'Our Classes' },
    { href: '/testimonials', label: 'Testimonials' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ];

  // Function to check if a menu item is currently active (user is on that page)
  const isActive = (href: string) => location.pathname === href;

  return (
    <nav className="bg-card/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 responsive-nav">
      <div className="max-w-7xl mx-auto responsive-container">
        <div className="flex justify-between items-center h-14 sm:h-16 lg:h-20">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/6b747222-d3d9-4329-9f91-a20936eb2981.png" 
              alt="Pilates in Focus Logo" 
              className="h-12 sm:h-16 lg:h-20 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8 xl:space-x-10">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`text-sm lg:text-base font-medium transition-colors hover:text-primary touch-target ${
                  isActive(item.href) ? 'text-primary' : 'text-foreground/80'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild size="sm" className="ml-4 responsive-button">
              <Link to="/booking">Book Now</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden touch-target p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden responsive-fade-in border-t border-border bg-card/98 backdrop-blur-sm">
            <div className="responsive-container py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`block py-3 px-4 text-base font-medium transition-colors hover:text-primary rounded-lg touch-target ${
                    isActive(item.href) 
                      ? 'text-primary bg-primary/10' 
                      : 'text-foreground/80 hover:bg-muted/50'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-2">
                <Button asChild size="lg" className="w-full responsive-button">
                  <Link to="/booking" onClick={() => setIsOpen(false)}>Book Now</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
