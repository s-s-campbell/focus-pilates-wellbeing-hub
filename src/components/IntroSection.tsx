
const IntroSection = () => {
  return (
    <section className="mobile-section-spacing bg-background">
      <div className="max-w-6xl mx-auto mobile-container">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="font-heading mobile-heading-optimize mb-4 sm:mb-6 text-primary">
            More Than a Class, It's a <span className="text-primary">Community</span>
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
            <p className="mobile-text-optimize text-foreground/80 leading-relaxed">
              At Pilates in Focus, we believe in the power of personal connection and expert guidance. Our private, serene home studio in Midrand is a sanctuary where you can escape the noise and focus on your body's needs.
            </p>
            
            <p className="mobile-text-optimize text-foreground/80 leading-relaxed">
              Led by an instructor with over 25 years of experience in the fitness industry, our small group and private classes are designed to deliver results safely and effectively. We specialise in helping beginners build confidence, supporting individuals through rehabilitation, and empowering seniors to stay active and strong.
            </p>
            
            <p className="mobile-text-optimize text-foreground/80 leading-relaxed">
              Here, you're not just a number - you're part of a welcoming community dedicated to moving with intention and living with vitality.
            </p>
          </div>
          
          <div className="relative order-1 lg:order-2">
            <img 
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Peaceful Pilates studio interior" 
              className="rounded-2xl shadow-xl w-full h-auto aspect-[4/3] object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
