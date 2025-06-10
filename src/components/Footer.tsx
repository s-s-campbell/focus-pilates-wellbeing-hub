import { Link } from 'react-router-dom';
const Footer = () => {
  return <footer className="text-background py-12 bg-[#c37fa8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <img src="/lovable-uploads/6b747222-d3d9-4329-9f91-a20936eb2981.png" alt="Pilates in Focus Logo" className="h-12 w-auto brightness-0 invert" />
            </Link>
            <p className="mb-4 max-w-md text-stone-50">
              Your personalised path to a stronger, healthier you. Expert-led Pilates in a supportive, 
              intimate home studio in Midrand.
            </p>
            <p className="text-sm text-stone-50">
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
    </footer>;
};
export default Footer;