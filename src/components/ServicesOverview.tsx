
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Users, Settings, Heart } from 'lucide-react';

const ServicesOverview = () => {
  const services = [
    {
      icon: Users,
      title: "Group Mat Classes",
      description: "Build a strong foundation and improve flexibility in a supportive small group setting. Perfect for all levels.",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      icon: Settings,
      title: "Group Reformer Classes",
      description: "Utilise state-of-the-art reformer machines for a dynamic, full-body workout that builds strength and tones muscles.",
      image: "/lovable-uploads/859ac7b7-aaf7-4ad9-99a6-794234e0e041.png"
    },
    {
      icon: Heart,
      title: "Private Sessions",
      description: "Receive one-on-one attention to address specific injuries, manage chronic pain, or accelerate your personal progress.",
      image: "/lovable-uploads/4bdbba0a-00e0-479d-ab62-340eb3037cb7.png"
    }
  ];

  return (
    <section className="responsive-section-spacing bg-muted/50">
      <div className="max-w-7xl mx-auto responsive-container">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-heading responsive-heading-optimize mb-4 text-primary">
            Classes Tailored to <span className="text-primary">Your Goals</span>
          </h2>
          <p className="responsive-text-optimize text-muted-foreground max-w-2xl mx-auto">
            Choose from our range of expertly designed classes, each crafted to meet you exactly where you are in your fitness journey.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-8 sm:mb-12">
          {services.map((service, index) => (
            <Link key={index} to="/classes" className="block">
              <Card className="group responsive-card hover:shadow-xl transition-all duration-300 overflow-hidden border-0 bg-card cursor-pointer">
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4 p-2 sm:p-3 bg-card/90 rounded-full">
                    <service.icon className="w-4 h-4 sm:w-6 sm:h-6 text-primary" />
                  </div>
                </div>
                <CardContent className="responsive-card-spacing">
                  <h3 className="font-heading text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-primary">
                    {service.title}
                  </h3>
                  <p className="responsive-text-optimize text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        
        <div className="text-center">
          <Button asChild size="lg" variant="default" className="responsive-button">
            <Link to="/classes">Explore Our Classes</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
