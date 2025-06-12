
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Quote } from 'lucide-react';

const TestimonialSnippet = () => {
  return (
    <section className="responsive-section-spacing bg-secondary/30">
      <div className="max-w-4xl mx-auto responsive-container text-center">
        <h2 className="font-heading responsive-heading-optimize mb-8 sm:mb-12 text-primary">
          Hear From Our <span className="text-primary">Community</span>
        </h2>
        
        <Card className="bg-card/95 backdrop-blur-sm border-0 shadow-xl">
          <CardContent className="responsive-card-spacing sm:p-8 md:p-12 bg-card">
            <Quote className="w-8 h-8 sm:w-12 sm:h-12 text-primary mx-auto mb-4 sm:mb-6 opacity-50" />
            <blockquote className="responsive-text-optimize sm:text-lg md:text-xl text-card-foreground leading-relaxed mb-4 sm:mb-6 italic">
              "After months of back pain, I finally found relief and strength here. The personalised attention 
              made all the difference. I feel safe, supported, and stronger than ever."
            </blockquote>
            <cite className="text-primary font-semibold text-sm sm:text-base">
              — Sarah T., Midrand
            </cite>
          </CardContent>
        </Card>
        
        <div className="mt-8 sm:mt-12">
          <Button asChild size="lg" variant="default" className="responsive-button">
            <Link to="/testimonials">Read More Success Stories</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSnippet;
