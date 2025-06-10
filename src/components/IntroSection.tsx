const IntroSection = () => {
  return <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            More Than a Class, It's a <span className="text-[#c37fa8]">Community</span>
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-foreground/80 leading-relaxed">
              Tired of crowded gyms and one-size-fits-all workouts? At Pilates in Focus, we believe in the power 
              of personal connection and expert guidance. Our private, serene home studio in Midrand is a sanctuary 
              where you can escape the noise and focus on your body's needs.
            </p>
            
            <p className="text-lg text-foreground/80 leading-relaxed">
              Led by an instructor with over 25 years in the fitness industry, our small group and private classes 
              are designed to deliver results safely and effectively. We specialise in helping beginners build confidence, 
              supporting individuals through rehabilitation, and empowering seniors to stay active and strong.
            </p>
            
            <p className="text-lg text-foreground/80 leading-relaxed">
              Here, you're not just a number—you're part of a welcoming community dedicated to moving with intention 
              and living with vitality.
            </p>
          </div>
          
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Peaceful Pilates studio interior" className="rounded-2xl shadow-xl w-full h-auto" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>;
};
export default IntroSection;