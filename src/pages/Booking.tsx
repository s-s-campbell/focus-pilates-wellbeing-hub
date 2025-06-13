
import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';
import { ExternalLink } from 'lucide-react';
// Import the SimplyBook widget CSS styles
import '../styles/simplybook-widget.css';

const Booking = () => {
  const isMobile = useIsMobile();
  useEffect(() => {
    window.scrollTo(0, 0);

    // Only load SimplyBook widget script for desktop users
    if (!isMobile) {
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

      // CSS styles are now imported from external file

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
    }
  }, [isMobile]);
  
  return <div className="min-h-screen smooth-scroll">
      <Navigation />
      
      {/* Hero Section */}
      <section className="responsive-section-spacing bg-white">
        <div className="max-w-4xl mx-auto responsive-container text-center">
          <h1 className="font-heading responsive-heading-optimize font-bold mb-3 sm:mb-4 md:mb-6 text-primary">
            Book Your <span className="text-[#c37fa8]">Pilates Class</span>
          </h1>
          <p className="responsive-text-optimize text-muted-foreground leading-relaxed mb-4 sm:mb-6 md:mb-8 max-w-3xl mx-auto">
            Begin your transformative pilates journey with just a few simple steps. Our intuitive online booking system guides you through selecting your ideal class, discovering available session times, and securing your place.
          </p>
        </div>
      </section>

      {/* Booking Section - Conditional Rendering */}
      <section className="py-8 sm:py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto responsive-container">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="font-heading text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-primary mb-4">
              Schedule Your Session
            </h2>
          </div>
          
          {isMobile ? (
            // Mobile: External Link Button
            <div className="text-center space-y-6 px-4">
              <p className="text-muted-foreground responsive-text-optimize">
                For the best mobile booking experience, we'll take you to our dedicated booking platform.
              </p>
              <Button asChild size="lg" className="w-full h-14 text-lg responsive-button">
                <a href="https://pilatesinfocus.simplybook.net" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                  <span>Open Booking Platform</span>
                  <ExternalLink className="w-5 h-5" />
                </a>
              </Button>
              <p className="text-xs lg:text-sm text-muted-foreground">
                Opens in a new tab for optimal mobile experience
              </p>
            </div>
          ) : (
            // Desktop: Embedded Widget
            <div className="w-full">
              <div id="simplybook-widget" className="w-full min-h-[600px] lg:min-h-[700px] xl:min-h-[800px]">
                <div className="flex items-center justify-center h-full text-muted-foreground py-12">
                  <div className="text-center">
                    <div className="animate-pulse mb-2 responsive-text-optimize">Loading booking system...</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="responsive-section-spacing bg-white">
        <div className="max-w-2xl mx-auto responsive-container text-center">
          <h2 className="font-heading text-xl sm:text-2xl lg:text-3xl font-bold text-primary mb-3 sm:mb-4 md:mb-6">
            Need Help Booking?
          </h2>
          <p className="responsive-text-optimize text-muted-foreground mb-4 sm:mb-6">
            If you have any questions or need assistance with booking, feel free to{' '}
            <Link to="/contact" className="text-primary hover:underline font-medium">
              contact us directly
            </Link>
            .
          </p>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Booking;
