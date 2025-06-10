
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "After my physiotherapist recommended Pilates for my chronic back pain, I was nervous about starting. Finding this studio was a blessing. The instructor's deep knowledge of rehabilitation put me at ease immediately. She tailored every movement for my body, and for the first time in years, I feel strong and in control. It's been life-changing.",
      name: "Sarah T.",
      title: "Physiotherapy Referral Client",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b5ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
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
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Real Stories, <span className="text-primary">Real Results</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We are proud to have supported so many incredible individuals on their wellness journeys. 
            Here is what some of our clients have to say.
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8 md:p-12">
                  <div className="grid lg:grid-cols-4 gap-8 items-center">
                    <div className="lg:col-span-1 text-center lg:text-left">
                      <img 
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-24 h-24 rounded-full mx-auto lg:mx-0 mb-4 object-cover shadow-md"
                      />
                      <h3 className="font-semibold text-foreground text-lg">
                        {testimonial.name}
                      </h3>
                      <p className="text-primary text-sm font-medium">
                        {testimonial.title}
                      </p>
                    </div>
                    
                    <div className="lg:col-span-3">
                      <Quote className="w-8 h-8 text-primary mb-4 opacity-50" />
                      <blockquote className="text-lg text-foreground/80 leading-relaxed italic">
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
    </div>
  );
};

export default Testimonials;
