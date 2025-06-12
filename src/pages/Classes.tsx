
import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FloatingBookButton from '@/components/FloatingBookButton';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Users, Settings, Heart, Smile } from 'lucide-react';

const Classes = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const classes = [
    {
      icon: Users,
      title: "Group Mat Classes",
      subtitle: "Build Your Foundation",
      forWho: "Beginners, those looking to improve general fitness, and anyone wanting to master the fundamentals of Pilates.",
      description: "A flowing workout using your own body weight and small props to build core strength, improve posture, and increase flexibility. Our instructor provides modifications for all levels.",
      pricing: [
        {
          type: "Drop-In",
          price: "R180"
        },
        {
          type: "5-Class Pack",
          price: "R850"
        },
        {
          type: "10-Class Pack",
          price: "R1600"
        }
      ],
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      icon: Settings,
      title: "Group Reformer Classes",
      subtitle: "Dynamic Full-Body Workout",
      forWho: "Those with some Pilates experience, looking for a dynamic, full-body workout.",
      description: "A challenging and invigorating class using our top-of-the-line reformer machines. The springs and pulleys provide resistance and support to help you build lean muscle, improve stability, and sculpt your entire body. (Maximum 4 people per class).",
      pricing: [
        {
          type: "Drop-In",
          price: "R250"
        },
        {
          type: "5-Class Pack",
          price: "R1200"
        },
        {
          type: "10-Class Pack",
          price: "R2300"
        }
      ],
      image: "/lovable-uploads/859ac7b7-aaf7-4ad9-99a6-794234e0e041.png"
    },
    {
      icon: Heart,
      title: "Private Sessions",
      subtitle: "One-on-One Attention",
      forWho: "Individuals with injuries, chronic pain, specific rehabilitation goals, pre/post-natal clients, or anyone preferring undivided attention.",
      description: "A session completely tailored to you. We'll conduct a full postural assessment and design a programme to address your specific goals, whether it's recovering from surgery, managing scoliosis, or simply mastering your technique.",
      pricing: [
        {
          type: "Single Private Session",
          price: "R550"
        },
        {
          type: "5-Session Pack",
          price: "R2600"
        }
      ],
      image: "/lovable-uploads/4bdbba0a-00e0-479d-ab62-340eb3037cb7.png"
    },
    {
      icon: Smile,
      title: "Pilates for Children",
      subtitle: "Ages 7-12",
      forWho: "Children who need to improve posture, coordination, and body awareness in a fun, engaging way.",
      description: "A playful and imaginative class that introduces the basics of Pilates. We focus on fun exercises that build concentration, balance, and a healthy foundation for an active life.",
      pricing: [
        {
          type: "Term-based pricing",
          price: "Enquire for details"
        }
      ],
      image: "/lovable-uploads/2af4ad6f-6a09-47b9-8019-99e16d32695b.png"
    }
  ];

  return (
    <div className="min-h-screen smooth-scroll">
      <Navigation />
      
      {/* Hero Section */}
      <section className="responsive-section-spacing bg-muted/30">
        <div className="max-w-4xl mx-auto responsive-container text-center">
          <h1 className="font-heading responsive-heading-optimize mb-4 sm:mb-6 text-primary">
            Find the Perfect Class for Your <span className="text-primary">Goals</span>
          </h1>
          <p className="responsive-text-optimize text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            We offer a range of mat and reformer Pilates classes in both group and private settings. All our group classes are kept small to ensure you receive personalised feedback and guidance. Unsure where to start? Book an introductory private session so we can assess your needs and recommend the perfect path for you.
          </p>
        </div>
      </section>

      {/* Classes Section */}
      <section className="responsive-section-spacing bg-background">
        <div className="max-w-7xl mx-auto responsive-container">
          <div className="space-y-8 sm:space-y-12 lg:space-y-16">
            {classes.map((classItem, index) => (
              <Card key={index} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 responsive-card">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative h-48 sm:h-64 lg:h-auto xl:h-96">
                    <img 
                      src={classItem.image} 
                      alt={classItem.title} 
                      className="w-full h-full object-cover" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/60 to-transparent"></div>
                    <div className="absolute top-4 sm:top-6 left-4 sm:left-6">
                      <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-card/90 rounded-full">
                        <classItem.icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-primary" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="responsive-card-spacing lg:p-8 xl:p-12">
                    <CardHeader className="p-0 mb-4 sm:mb-6">
                      <CardTitle className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2">
                        {classItem.title}
                      </CardTitle>
                      <p className="responsive-text-optimize text-primary font-semibold">
                        {classItem.subtitle}
                      </p>
                    </CardHeader>
                    
                    <CardContent className="p-0 space-y-4 sm:space-y-6">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2 responsive-text-optimize">Who it's for:</h4>
                        <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">{classItem.forWho}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-foreground mb-2 responsive-text-optimize">What to expect:</h4>
                        <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">{classItem.description}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-foreground mb-3 responsive-text-optimize">Pricing:</h4>
                        <div className="space-y-2">
                          {classItem.pricing.map((price, priceIndex) => (
                            <div key={priceIndex} className="flex justify-between items-center">
                              <span className="text-sm sm:text-base lg:text-lg text-muted-foreground">{price.type}:</span>
                              <span className="font-semibold text-sm sm:text-base lg:text-lg text-foreground">
                                {price.price === "Enquire for details" ? (
                                  <Link to="/contact" className="text-primary hover:text-primary/80 underline">
                                    {price.price}
                                  </Link>
                                ) : (
                                  price.price
                                )}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8 sm:mt-16">
            <Button asChild size="lg" className="responsive-button">
              <Link to="/booking">View Schedule & Book Now</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingBookButton />
    </div>
  );
};

export default Classes;
