
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Clock, Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#c37fa8]">
            We'd Love to <span className="text-primary">Hear From You</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Ready to take the first step? Get in touch to book your introductory session or ask any questions you may have. 
            We are located in a private residential home studio in Midrand, Gauteng. The full address will be provided 
            upon booking confirmation to ensure privacy for our clients and residents.
          </p>
        </div>
      </section>

      {/* 1. Send Us a Message Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-6">
              Send Us a <span className="text-primary">Message</span>
            </h2>
          </div>
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="font-heading text-2xl text-foreground">
                Get In Touch
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Your first name" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Your last name" className="mt-1" />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your.email@example.com" className="mt-1" />
                </div>
                
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="+27 (0) 123 456 789" className="mt-1" />
                </div>
                
                <div>
                  <Label htmlFor="inquiry">How can we help you?</Label>
                  <Select>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="book-class">I want to book a class</SelectItem>
                      <SelectItem value="injury-question">I have a question about an injury</SelectItem>
                      <SelectItem value="pricing">I'd like to know more about pricing</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Tell us more about your goals, any concerns, or questions you have..." className="mt-1 min-h-[100px]" />
                </div>
                
                <Button type="submit" size="lg" className="w-full rounded-full">
                  Send Inquiry
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 2. Online Booking Section */}
      <section id="booking" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-6">
            Book Your Class <span className="text-primary">Online</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Ready to start your journey? Use our online booking system to schedule your introductory session 
            or join one of our regular classes.
          </p>
          <Card className="border-0 shadow-lg p-8">
            <div className="h-64 bg-muted/50 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <p className="text-muted-foreground mb-4">Online Booking System</p>
                <p className="text-sm text-muted-foreground">
                  This is where you would embed your preferred booking tool<br />
                  (Acuity Scheduling, Calendly, or Mindbody widget)
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* 3. Studio Hours Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-6">
              Studio <span className="text-primary">Hours</span>
            </h2>
          </div>
          <Card className="border-0 shadow-lg max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="font-heading text-2xl text-foreground flex items-center justify-center">
                <Clock className="w-6 h-6 text-primary mr-3" />
                Opening Hours
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center text-lg">
                <span className="text-foreground font-medium">Monday - Friday</span>
                <span className="text-muted-foreground">7:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between items-center text-lg">
                <span className="text-foreground font-medium">Saturday</span>
                <span className="text-muted-foreground">8:00 AM - 12:00 PM</span>
              </div>
              <div className="flex justify-between items-center text-lg">
                <span className="text-foreground font-medium">Sunday</span>
                <span className="text-muted-foreground">Closed</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 4. Map Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-6">
            Find Us in <span className="text-primary">Midrand</span>
          </h2>
          <Card className="border-0 shadow-lg p-8">
            <div className="h-64 bg-muted/50 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                <p className="text-muted-foreground mb-2">Interactive Map</p>
                <p className="text-sm text-muted-foreground">
                  We are conveniently located in Midrand, Gauteng.<br />
                  For the privacy of our clients, the exact address is shared upon booking confirmation.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* 5. Contact Information Section */}
      <section className="py-20 bg-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-6">
              Can't Find What You're <span className="text-primary">Looking For?</span>
            </h2>
          </div>
          <Card className="border-0 shadow-lg max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="font-heading text-2xl text-foreground flex items-center justify-center">
                <Phone className="w-6 h-6 text-primary mr-3" />
                Get In Touch
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <p className="text-muted-foreground">info@pilatesinfocus.co.za</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Phone</p>
                  <p className="text-muted-foreground">+27 (0) 123 456 789</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Location</p>
                  <p className="text-muted-foreground">Midrand, Gauteng<br />
                  Exact address provided upon booking</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Contact;
