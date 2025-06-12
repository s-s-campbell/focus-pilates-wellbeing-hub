import { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
// import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';
import { ExternalLink } from 'lucide-react';
import '../styles/simplybook-widget.css';

const Booking = () => {
  const isMobile = useIsMobile();
  const [widgetLoaded, setWidgetLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Only load SimplyBook widget for desktop users
    if (!isMobile) {
      // Clean up any existing scripts first
      const existingScripts = document.querySelectorAll('script[src*="simplybook"]');
      existingScripts.forEach(script => script.remove());

      // Clear widget container and show loading
      const container = document.getElementById('simplybook-widget');
      if (container) {
        container.innerHTML = `
          <div class="flex items-center justify-center h-full text-muted-foreground py-12">
            <div class="text-center">
              <div class="animate-pulse mb-2 text-lg">Loading booking system...</div>
            </div>
          </div>
        `;
      }

      // Load SimplyBook widget script
      const script = document.createElement('script');
      script.src = 'https://widget.simplybook.net/v2/widget/widget.js';
      script.type = 'text/javascript';
      script.async = true;
      
      script.onload = () => {
        // Wait for script to be ready, then initialize
        setTimeout(() => {
          if (window.SimplybookWidget) {
            try {
              const widget = new window.SimplybookWidget({
                "widget_type": "iframe",
                "url": "https://pilatesinfocus.simplybook.net",
                "theme": "dainty",
                "theme_settings": {
                  "timeline_show_end_time": "1",
                  "timeline_hide_unavailable": "1",
                  "hide_past_days": "0",
                  "sb_base_color": "#c37fa8",
                  "secondary_color": "#f4eaf0",
                  "sb_text_color": "#374151",
                  "display_item_mode": "block",
                  "body_bg_color": "#ffffff",
                  "dark_font_color": "#374151",
                  "light_font_color": "#ffffff",
                  "btn_color_1": "#c37fa8",
                  "sb_company_label_color": "#374151",
                  "sb_cancellation_color": "#ef4444",
                  "hide_img_mode": "0"
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
              setWidgetLoaded(true);
            } catch (error) {
              console.error('SimplyBook widget initialization failed:', error);
              // Show error fallback
              const container = document.getElementById('simplybook-widget');
              if (container) {
                container.innerHTML = `
                  <div class="text-center py-12 space-y-4">
                    <p class="text-muted-foreground">Unable to load booking system. Please try refreshing the page.</p>
                    <a href="https://pilatesinfocus.simplybook.net" target="_blank" rel="noopener noreferrer" 
                       class="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors">
                      Open Booking Platform
                      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6m4-3h6v6m-11 5L21 3"/>
                      </svg>
                    </a>
                  </div>
                `;
              }
            }
          }
        }, 500);
      };

      script.onerror = () => {
        // Show error fallback
        const container = document.getElementById('simplybook-widget');
        if (container) {
          container.innerHTML = `
            <div class="text-center py-12 space-y-4">
              <p class="text-muted-foreground">Unable to load booking system.</p>
              <a href="https://pilatesinfocus.simplybook.net" target="_blank" rel="noopener noreferrer" 
                 class="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors">
                Open Booking Platform
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6m4-3h6v6m-11 5L21 3"/>
                </svg>
              </a>
            </div>
          `;
        }
      };

      document.head.appendChild(script);

      // Cleanup function
      return () => {
        const scripts = document.querySelectorAll('script[src*="simplybook"]');
        scripts.forEach(script => script.remove());
        const container = document.getElementById('simplybook-widget');
        if (container) {
          container.innerHTML = '';
        }
      };
    }
  }, [isMobile]);

  return (
    <div className="min-h-screen smooth-scroll">
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

      {/* Booking Section */}
      <section className="py-8 sm:py-12 md:py-16 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-6xl mx-auto responsive-container">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="font-heading text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-primary mb-4">
              Schedule Your Session
            </h2>
            <p className="text-muted-foreground responsive-text-optimize">
              Choose from our variety of classes and find the perfect time for you
            </p>
          </div>
          
          {isMobile ? (
            // Mobile: External Link Button
            <div className="text-center space-y-6 px-4">
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-[#c37fa8] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Mobile Booking</h3>
                  <p className="text-muted-foreground responsive-text-optimize">
                    For the best mobile booking experience, we'll take you to our dedicated booking platform.
                  </p>
                </div>
                <Button asChild size="lg" className="w-full h-14 text-lg responsive-button bg-[#c37fa8] hover:bg-[#9f4f7a] transition-all duration-200">
                  <a href="https://pilatesinfocus.simplybook.net" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                    <span>Open Booking Platform</span>
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </Button>
                <p className="text-xs lg:text-sm text-muted-foreground mt-3">
                  Opens in a new tab for optimal mobile experience
                </p>
              </div>
            </div>
          ) : (
            // Desktop: Embedded Widget
            <div className="w-full">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
                <div 
                  id="simplybook-widget" 
                  className="w-full min-h-[600px] lg:min-h-[700px] xl:min-h-[800px]"
                >
                  <div className="flex items-center justify-center h-full text-muted-foreground py-12">
                    <div className="text-center">
                      <div className="animate-pulse mb-2 responsive-text-optimize">Loading booking system...</div>
                    </div>
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
            <a href="/contact" className="text-[#c37fa8] hover:text-[#9f4f7a] hover:underline font-medium transition-colors">
              contact us directly
            </a>
            .
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Booking;