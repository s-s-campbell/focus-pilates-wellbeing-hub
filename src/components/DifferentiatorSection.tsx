
import { Award, Home, User } from 'lucide-react';

const DifferentiatorSection = () => {
  const differentiators = [
    {
      icon: Award,
      title: "Expert Guidance",
      description: "Your instructor brings 25+ years of fitness expertise and a passion for biomechanics to every session, ensuring you move safely and effectively."
    },
    {
      icon: Home,
      title: "Intimate Setting",
      description: "Our boutique home studio environment means small classes, personalised attention, and a peaceful, non-intimidating atmosphere."
    },
    {
      icon: User,
      title: "A Focus on You",
      description: "We specialise in programmes for beginners, seniors, and rehab clients, tailoring every exercise to your unique body and goals."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            The Pilates in Focus <span className="text-primary">Difference</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover what sets us apart and why our clients choose us for their wellness journey.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {differentiators.map((item, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex p-4 bg-primary/10 rounded-full mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentiatorSection;
