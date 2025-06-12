import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';
import FloatingBookButton from '@/components/FloatingBookButton';

const Testimonials = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const testimonials = [
    {
      quote: "After my physiotherapist recommended Pilates for my chronic back pain, I was nervous about starting. Finding this studio was a blessing. The instructor's deep knowledge of rehabilitation put me at ease immediately. She tailored every movement for my body, and for the first time in years, I feel strong and in control. It's been life-changing.",
      name: "Sarah T.",
      title: "Physiotherapy Referral Client",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      quote: "Keeping active as you get older is so important, but the big gyms are just too much. Pilates in Focus is the perfect fit. The classes are challenging but gentle on my joints, and I've noticed a huge improvement in my balance. I love the camaraderie with the other members—it's as much a social hour as it is a workout!",
      name: "David M.",
      title: "Senior Client",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      quote: "As a complete beginner, I was so intimidated to try Pilates. The small class size here makes all the difference. The instructor is incredibly patient and explains everything so clearly. It's such a welcoming and friendly environment. I'm toning up, feeling less stressed, and I've even made new friends. I can't recommend it enough!",
      name: "Lerato P.",
      title: "Beginner Client",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <div className="min-h-screen mobile-scroll">
      <Navigation />
      
      {/* Hero Section */}
      <section className="mobile-section-spacing bg-muted/30">
        <div className="max-w-4xl mx-auto mobile-container text-center">
          <h1 className="font-heading mobile-heading-optimize text-primary mb-4 sm:mb-6">
            Real Stories, <span>Real Results</span>
          </h1>
          <p className="mobile-text-optimize text-muted-foreground max-w-3xl mx-auto">
            We are proud to have supported so many incredible individuals on their wellness journeys. 
            Here is what some of our clients have to say.
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="mobile-section-spacing bg-background">
        <div className="max-w-6xl mx-auto mobile-container">
          <div className="space-y-8 sm:space-y-12">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg mobile-card hover:shadow-xl transition-shadow duration-300">
                <CardContent className="mobile-card-spacing md:p-12">
                  <div className="grid lg:grid-cols-4 gap-6 sm:gap-8 items-center">
                    <div className="lg:col-span-1 text-center lg:text-left">
                      <img 
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto lg:mx-0 mb-3 sm:mb-4 object-cover shadow-md"
                      />
                      <h3 className="font-semibold text-foreground text-base sm:text-lg">
                        {testimonial.name}
                      </h3>
                      <p className="text-primary text-sm font-medium">
                        {testimonial.title}
                      </p>
                    </div>
                    
                    <div className="lg:col-span-3">
                      <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-primary mb-3 sm:mb-4 opacity-50 mx-auto lg:mx-0" />
                      <blockquote className="mobile-text-optimize sm:text-lg text-foreground/80 leading-relaxed italic text-center lg:text-left">
                        "{testimonial.quote}"
                      </blockquote>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingBookButton />
    </div>
  );
};

export default Testimonials;
