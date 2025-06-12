
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import IntroSection from '@/components/IntroSection';
import ServicesOverview from '@/components/ServicesOverview';
import DifferentiatorSection from '@/components/DifferentiatorSection';
import TestimonialSnippet from '@/components/TestimonialSnippet';
import Footer from '@/components/Footer';
import FloatingBookButton from '@/components/FloatingBookButton';

const Index = () => {
  return (
    <div className="min-h-screen smooth-scroll">
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

export default Index;
