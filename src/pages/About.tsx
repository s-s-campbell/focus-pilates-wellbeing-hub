
import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Users, Target } from 'lucide-react';
import FloatingBookButton from '@/components/FloatingBookButton';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const principles = [{
    icon: Heart,
    title: "Movement as Medicine",
    description: "We believe that mindful, correct movement is fundamental to healing, preventing injury, and enhancing your quality of life."
  }, {
    icon: Users,
    title: "Strength in Community",
    description: "We foster a warm, non-competitive environment where clients support and motivate one another. Friendships are built here just as often as strong cores."
  }, {
    icon: Target,
    title: "Personalised Progress",
    description: "Your journey is unique. We honour this by listening to your needs, adapting exercises for your body, and celebrating every milestone with you."
  }];
  
  return (
    <div className="min-h-screen smooth-scroll">
      <Navigation />
      
      {/* Hero Section */}
      <section className="responsive-section-spacing bg-muted/30">
        <div className="max-w-6xl mx-auto responsive-container">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h1 className="font-heading responsive-heading-optimize mb-4 sm:mb-6 text-[#c37fa8]">
              Meet Julie, Your Instructor & <span className="text-primary">Founder</span>
            </h1>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
            <div className="space-y-4 sm:space-y-6 lg:space-y-8 order-2 lg:order-1">
              <p className="responsive-text-optimize text-foreground/80">
                My journey into the world of fitness began over 25 years ago, driven by a deep fascination 
                with how the human body moves. After years of exploring different modalities, I discovered 
                the profound, transformative power of Pilates—a method that builds strength from the inside out.
              </p>
              
              <p className="responsive-text-optimize text-foreground/80">
                In 2014, I earned my Pilates certification and honed my skills at the renowned Pilates Here SA. 
                Seeing the incredible impact of tailored, mindful movement on my clients, I was inspired to 
                create a different kind of fitness space. In 2016, I opened Pilates in Focus right here in 
                my Midrand home.
              </p>
              
              <p className="responsive-text-optimize text-foreground/80">
                My mission was simple: to create a sanctuary where people could receive the expert guidance 
                and personal attention they deserve, free from the intimidation of a large commercial gym. 
                I specialise in helping those who need it most—beginners taking their first brave step, 
                individuals on a path to recovery, and seniors dedicated to living a long, active life.
              </p>
              
              <p className="responsive-text-optimize text-foreground/80">
                My greatest joy is watching my clients rediscover their strength, overcome limitations, 
                and build a lasting love for movement.
              </p>
            </div>
            
            <div className="relative order-1 lg:order-2">
              <img 
                src="/lovable-uploads/7f150564-ed26-4b4d-898b-3d7f68b038cb.png" 
                alt="Julie, Professional Pilates instructor in studio" 
                className="rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl w-full h-auto object-cover max-h-[400px] sm:max-h-none lg:max-h-[500px] xl:max-h-[600px]" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="responsive-section-spacing bg-amber-50">
        <div className="max-w-6xl mx-auto responsive-container">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 text-[#c37fa8]">
              Our Guiding <span className="text-primary">Principles</span>
            </h2>
            <p className="responsive-text-optimize text-muted-foreground max-w-2xl mx-auto">
              These core beliefs shape every interaction, every class, and every moment you spend with us.
            </p>
          </div>
          
          <div className="grid gap-6 sm:gap-8 lg:gap-10 md:grid-cols-2 lg:grid-cols-3">
            {principles.map((principle, index) => (
              <Card key={index} className="text-center responsive-card hover:shadow-lg transition-shadow duration-300 border-0 bg-card">
                <CardContent className="responsive-card-spacing">
                  <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full mb-4 sm:mb-6 bg-primary mx-auto">
                    <principle.icon className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" />
                  </div>
                  <h3 className="font-heading text-lg sm:text-xl lg:text-2xl font-semibold mb-3 sm:mb-4 text-[#c37fa8]">
                    {principle.title}
                  </h3>
                  <p className="responsive-text-optimize text-muted-foreground">
                    {principle.description}
                  </p>
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

export default About;
