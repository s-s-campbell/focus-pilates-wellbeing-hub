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
      title: "Reformer Pilates",
      description: "Utilise state-of-the-art reformer machines for a dynamic, full-body workout that builds strength and tones muscles.",
      image: "/lovable-uploads/859ac7b7-aaf7-4ad9-99a6-794234e0e041.png"
    },
    {
      icon: Heart,
      title: "Rehab & Private Sessions",
      description: "Receive one-on-one attention to address specific injuries, manage chronic pain, or accelerate your personal progress.",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];

  return <section className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[#c37fa8]">
            Classes Tailored to <span className="text-primary">Your Goals</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our range of expertly designed classes, each crafted to meet you exactly where you are in your fitness journey.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-0 bg-card">
              <div className="relative h-48 overflow-hidden">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                <div className="absolute top-4 left-4 p-3 bg-card/90 rounded-full">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-heading text-xl font-semibold mb-3 text-[#c37fa8]">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>)}
        </div>
        
        <div className="text-center">
          <Button asChild size="lg" variant="outline" className="rounded-full">
            <Link to="/classes">Explore Our Classes</Link>
          </Button>
        </div>
      </div>
    </section>;
};

export default ServicesOverview;
