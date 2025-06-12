
// This is the main homepage component that displays when users visit the website
// It imports and displays all the different sections of the homepage in order

// Import all the different sections/components that make up our homepage
// The '@/' is a shortcut that points to the 'src' folder
import Navigation from '@/components/Navigation';           // Top navigation bar
import HeroSection from '@/components/HeroSection';         // Large banner at the top
import IntroSection from '@/components/IntroSection';       // Introduction text and image
import ServicesOverview from '@/components/ServicesOverview'; // Cards showing different services
import DifferentiatorSection from '@/components/DifferentiatorSection'; // What makes us different
import TestimonialSnippet from '@/components/TestimonialSnippet'; // Customer review section
import Footer from '@/components/Footer';                   // Bottom footer with links
import FloatingBookButton from '@/components/FloatingBookButton'; // Sticky booking button

// This is a React functional component - a function that returns HTML-like code (JSX)
const Index = () => {
  return (
    // Main container div with CSS classes for styling
    // "min-h-screen" = minimum height of full screen, "smooth-scroll" = smooth scrolling behavior
    <div className="min-h-screen smooth-scroll">
      {/* Display each section of the homepage in order from top to bottom */}
      <Navigation />
      <HeroSection />
      <IntroSection />
      <ServicesOverview />
      <DifferentiatorSection />
      <TestimonialSnippet />
      <Footer />
      <FloatingBookButton />
    </div>
  );
};

// Export this component so other files can import and use it
export default Index;
