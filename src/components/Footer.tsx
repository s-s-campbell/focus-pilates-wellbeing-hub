
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8 sm:py-12">
      <div className="max-w-7xl mx-auto responsive-container">
        <div className="grid md:grid-cols-4 gap-6 sm:gap-8">
          <div className="md:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <img 
                src="/lovable-uploads/6b747222-d3d9-4329-9f91-a20936eb2981.png" 
                alt="Pilates in Focus Logo" 
                className="h-16 sm:h-20 w-auto brightness-0 invert" 
              />
            </Link>
            <p className="mb-4 max-w-md text-primary-foreground/90 responsive-text-optimize hidden sm:block">
              Your personalised path to a stronger, healthier you. Expert-led Pilates in a supportive, 
              intimate home studio in Midrand.
            </p>
            <p className="text-sm text-primary-foreground/80 hidden sm:block">
              Located in Midrand, Gauteng<br />
              Exact address provided upon booking
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-primary-foreground text-base sm:text-lg">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors responsive-text-optimize">About Us</Link></li>
              <li><Link to="/classes" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors responsive-text-optimize">Our Classes</Link></li>
              <li><Link to="/testimonials" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors responsive-text-optimize">Testimonials</Link></li>
              <li><Link to="/blog" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors responsive-text-optimize">Blog</Link></li>
              <li><Link to="/contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors responsive-text-optimize">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-primary-foreground text-base sm:text-lg">Opening Hours</h3>
            <ul className="space-y-2 text-primary-foreground/80 responsive-text-optimize">
              <li>Mon-Fri: 7:00 AM - 6:00 PM</li>
              <li>Saturday: 8:00 AM - 12:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
            <div className="mt-4">
              <Link to="/booking" className="text-primary-foreground hover:text-primary-foreground/80 transition-colors font-semibold responsive-text-optimize">
                Book Your Class →
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-primary-foreground/60 text-xs sm:text-sm">© 2024 Pilates in Focus. All rights reserved. Built with care for your wellness journey.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
