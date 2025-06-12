
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
    <section className="mobile-section-spacing bg-background">
      <div className="max-w-6xl mx-auto mobile-container">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-heading mobile-heading-optimize mb-4 text-primary">
            The Pilates in Focus <span className="text-primary">Difference</span>
          </h2>
          <p className="mobile-text-optimize text-muted-foreground max-w-2xl mx-auto">
            Discover what sets us apart and why our clients choose us for their wellness journey.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {differentiators.map((item, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex p-3 sm:p-4 rounded-full mb-4 sm:mb-6 transition-colors duration-300 bg-primary">
                <item.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-primary">
                {item.title}
              </h3>
              <p className="mobile-text-optimize text-muted-foreground leading-relaxed">
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
