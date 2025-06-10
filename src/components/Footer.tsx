
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link to="/" className="font-heading text-2xl font-semibold text-accent mb-4 block">
              Pilates in Focus
            </Link>
            <p className="text-background/80 mb-4 max-w-md">
              Your personalised path to a stronger, healthier you. Expert-led Pilates in a supportive, 
              intimate home studio in Midrand.
            </p>
            <p className="text-background/60 text-sm">
              Located in Midrand, Gauteng<br />
              Exact address provided upon booking
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-accent mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-background/80 hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/classes" className="text-background/80 hover:text-accent transition-colors">Our Classes</Link></li>
              <li><Link to="/testimonials" className="text-background/80 hover:text-accent transition-colors">Testimonials</Link></li>
              <li><Link to="/blog" className="text-background/80 hover:text-accent transition-colors">Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-accent mb-4">Contact Info</h3>
            <ul className="space-y-2 text-background/80">
              <li>Mon-Fri: 7:00 AM - 6:00 PM</li>
              <li>Saturday: 8:00 AM - 12:00 PM</li>
              <li>Sunday: Closed</li>
              <li className="pt-2">
                <Link to="/contact" className="text-accent hover:text-accent/80 transition-colors font-semibold">
                  Book Your Class →
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-background/60 text-sm">
            © 2024 Pilates in Focus. All rights reserved. | Built with care for your wellness journey.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
