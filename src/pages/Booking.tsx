
import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Booking = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    // Load SimplyBook widget script
    const script1 = document.createElement('script');
    script1.src = '//widget.simplybook.net/v2/widget/widget.js';
    script1.type = 'text/javascript';
    document.head.appendChild(script1);

    script1.onload = () => {
      // Wait a bit for the script to be ready, then initialize the widget
      setTimeout(() => {
        if (window.SimplybookWidget) {
          const widget = new window.SimplybookWidget({
            "widget_type": "iframe",
            "url": "https://pilatesinfocus.simplybook.net",
            "theme": "dainty",
            "theme_settings": {
              "timeline_show_end_time": "1",
              "timeline_hide_unavailable": "1",
              "hide_past_days": "0",
              "sb_base_color": "#861657",
              "secondary_color": "#f4eaf0",
              "sb_text_color": "#38182b",
              "display_item_mode": "block",
              "body_bg_color": "#ffffff",
              "sb_background_image": "12",
              "sb_review_image": "13",
              "sb_review_image_preview": "/uploads/pilatesinfocus/image_files/preview/fa3d6be4d5673b39b2cc57c2edc7dad1.jpg",
              "dark_font_color": "#38182b",
              "light_font_color": "#ffffff",
              "btn_color_1": "#ecb4bf",
              "sb_company_label_color": "#38182b",
              "sb_cancellation_color": "#ff6b8e",
              "hide_img_mode": "1"
            },
            "timeline": "modern",
            "datepicker": "top_calendar",
            "is_rtl": false,
            "app_config": {
              "clear_session": 0,
              "allow_switch_to_ada": 0,
              "predefined": []
            },
            "container_id": "simplybook-widget"
          });
        }
      }, 100);
    };

    // Cleanup function to remove scripts when component unmounts
    return () => {
      const scripts = document.querySelectorAll('script[src*="simplybook"]');
      scripts.forEach(script => script.remove());
      // Clear the widget container
      const container = document.getElementById('simplybook-widget');
      if (container) {
        container.innerHTML = '';
      }
    };
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
              <div 
                id="simplybook-widget" 
                className="min-h-[600px] max-h-[800px] w-full overflow-hidden rounded-lg border"
                style={{ height: '600px' }}
              >
                {/* SimplyBook widget will be rendered here */}
                <div className="flex items-center justify-center h-full text-muted-foreground">
                  Loading booking system...
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
