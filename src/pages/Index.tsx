
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import IntroSection from '@/components/IntroSection';
import ServicesOverview from '@/components/ServicesOverview';
import DifferentiatorSection from '@/components/DifferentiatorSection';
import TestimonialSnippet from '@/components/TestimonialSnippet';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <IntroSection />
      <ServicesOverview />
      <DifferentiatorSection />
      <TestimonialSnippet />
      <Footer />
    </div>
  );
};

export default Index;
