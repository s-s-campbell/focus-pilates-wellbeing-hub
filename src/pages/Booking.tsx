
import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Booking = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-primary">
            Book Your <span className="text-[#c37fa8]">Pilates Class</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Ready to start your journey? Schedule your introductory session or join one of our regular classes. 
            We're here to support you every step of the way.
          </p>
        </div>
      </section>

      {/* Booking Widget Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="font-heading text-3xl text-primary">
                Schedule Your Session
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="h-96 bg-muted/50 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <p className="text-xl font-semibold text-foreground mb-4">Online Booking System</p>
                  <p className="text-muted-foreground mb-6">
                    This is where you would embed your preferred booking tool<br />
                    (Acuity Scheduling, Calendly, or Mindbody widget)
                  </p>
                  <p className="text-sm text-muted-foreground">
                    The booking widget will integrate seamlessly here for a<br />
                    streamlined booking experience.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-2xl font-bold text-primary mb-6">
            Need Help Booking?
          </h2>
          <p className="text-muted-foreground mb-6">
            If you have any questions or need assistance with booking, feel free to reach out to us directly.
          </p>
          <Button asChild>
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Booking;
