
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Quote } from 'lucide-react';

const TestimonialSnippet = () => {
  return (
    <section className="py-20 text-primary-foreground bg-amber-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-12">
          Hear From Our <span className="text-accent">Community</span>
        </h2>
        
        <Card className="bg-card/95 backdrop-blur-sm border-0 shadow-xl">
          <CardContent className="p-8 md:p-12 bg-stone-50">
            <Quote className="w-12 h-12 text-primary mx-auto mb-6 opacity-50" />
            <blockquote className="text-lg md:text-xl text-card-foreground leading-relaxed mb-6 italic">
              "After months of back pain, I finally found relief and strength here. The personalised attention 
              made all the difference. I feel safe, supported, and stronger than ever."
            </blockquote>
            <cite className="text-primary font-semibold">
              — Sarah T., Midrand
            </cite>
          </CardContent>
        </Card>
        
        <div className="mt-12">
          <Button asChild size="lg" variant="default" className="rounded-full">
            <Link to="/testimonials">Read More Success Stories</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSnippet;
