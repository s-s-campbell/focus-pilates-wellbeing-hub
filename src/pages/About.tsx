
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Users, Target } from 'lucide-react';

const About = () => {
  const principles = [
    {
      icon: Heart,
      title: "Movement as Medicine",
      description: "We believe that mindful, correct movement is fundamental to healing, preventing injury, and enhancing your quality of life."
    },
    {
      icon: Users,
      title: "Strength in Community",
      description: "We foster a warm, non-competitive environment where clients support and motivate one another. Friendships are built here just as often as strong cores."
    },
    {
      icon: Target,
      title: "Personalised Progress",
      description: "Your journey is unique. We honour this by listening to your needs, adapting exercises for your body, and celebrating every milestone with you."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#c37fa8]">
              Meet Julie, Your Instructor & <span className="text-primary">Founder</span>
            </h1>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-foreground/80 leading-relaxed">
                My journey into the world of fitness began over 25 years ago, driven by a deep fascination 
                with how the human body moves. After years of exploring different modalities, I discovered 
                the profound, transformative power of Pilates—a method that builds strength from the inside out.
              </p>
              
              <p className="text-lg text-foreground/80 leading-relaxed">
                In 2014, I earned my Pilates certification and honed my skills at the renowned Pilates Here SA. 
                Seeing the incredible impact of tailored, mindful movement on my clients, I was inspired to 
                create a different kind of fitness space. In 2016, I opened Pilates in Focus right here in 
                my Midrand home.
              </p>
              
              <p className="text-lg text-foreground/80 leading-relaxed">
                My mission was simple: to create a sanctuary where people could receive the expert guidance 
                and personal attention they deserve, free from the intimidation of a large commercial gym. 
                I specialise in helping those who need it most—beginners taking their first brave step, 
                individuals on a path to recovery, and seniors dedicated to living a long, active life.
              </p>
              
              <p className="text-lg text-foreground/80 leading-relaxed">
                My greatest joy is watching my clients rediscover their strength, overcome limitations, 
                and build a lasting love for movement.
              </p>
            </div>
            
            <div className="relative">
              <img 
                src="/lovable-uploads/7f150564-ed26-4b4d-898b-3d7f68b038cb.png" 
                alt="Julie, Professional Pilates instructor in studio" 
                className="rounded-2xl shadow-xl w-full h-auto" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Our Guiding <span className="text-primary">Principles</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These core beliefs shape every interaction, every class, and every moment you spend with us.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {principles.map((principle, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 border-0 bg-card">
                <CardContent className="p-8">
                  <div className="inline-flex p-4 bg-primary/10 rounded-full mb-6">
                    <principle.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                    {principle.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {principle.description}
                  </p>
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

export default About;
