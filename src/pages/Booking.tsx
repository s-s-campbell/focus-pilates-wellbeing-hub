
import { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';
import { ArrowLeft } from 'lucide-react';

const Booking = () => {
  const isMobile = useIsMobile();
  const [showMobileWidget, setShowMobileWidget] = useState(false);
  const [widgetLoaded, setWidgetLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Load SimplyBook widget script for both desktop and mobile
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

          // Add widget load detection
          const checkWidgetLoaded = () => {
            const container = document.getElementById('simplybook-widget');
            const iframe = container?.querySelector('iframe');
            
            if (iframe) {
              iframe.onload = () => {
                setWidgetLoaded(true);
              };
              // If iframe is already loaded
              if (iframe.contentDocument?.readyState === 'complete') {
                setWidgetLoaded(true);
              }
            } else {
              // Check for widget elements
              const widgetContent = container?.querySelector('[class*="widget"], [class*="sb-"]');
              if (widgetContent) {
                setWidgetLoaded(true);
              } else {
                // Keep checking every 500ms for up to 10 seconds
                setTimeout(checkWidgetLoaded, 500);
              }
            }
          };

          // Start checking after a short delay
          setTimeout(checkWidgetLoaded, 1000);
        }
      }, 100);
    };

    // Add custom CSS for both desktop and mobile optimization
    const style = document.createElement('style');
    style.setAttribute('data-booking-styles', 'true');
    style.textContent = `
      /* Hide timezone/time display in SimplyBook widget */
      #simplybook-widget .widget-header-time,
      #simplybook-widget .sb-timezone,
      #simplybook-widget .sb-time-zone,
      #simplybook-widget [class*="timezone"],
      #simplybook-widget [class*="time-zone"],
      #simplybook-widget .widget-timezone {
        display: none !important;
      }
      
      /* Desktop optimizations */
      @media (min-width: 768px) {
        #simplybook-widget .widget-content,
        #simplybook-widget .sb-main-content,
        #simplybook-widget iframe {
          margin-top: -20px !important;
          padding-top: 0 !important;
        }
        
        #simplybook-widget .widget-header {
          padding-top: 10px !important;
          margin-bottom: 0 !important;
        }
        
        /* Ensure the widget fills available space efficiently */
        #simplybook-widget {
          padding-top: 0 !important;
          box-sizing: border-box !important;
        }
      }

      /* Mobile full-screen optimizations */
      @media (max-width: 767px) {
        .mobile-fullscreen-widget {
          position: fixed !important;
          top: 0 !important;
          left: 0 !important;
          right: 0 !important;
          bottom: 0 !important;
          z-index: 9999 !important;
          background: white !important;
          overflow: hidden !important;
        }
        
        .mobile-fullscreen-widget #simplybook-widget {
          height: calc(100vh - 60px) !important;
          margin: 0 !important;
          border-radius: 0 !important;
          border: none !important;
          box-shadow: none !important;
        }
        
        .mobile-fullscreen-widget #simplybook-widget iframe {
          height: 100% !important;
          min-height: 100% !important;
          border-radius: 0 !important;
        }
      }
    `;
    document.head.appendChild(style);

    // Store references for cleanup
    const scriptRef = script1;
    const styleRef = style;

    // Cleanup function with defensive checks
    return () => {
      // Reset widget loaded state first
      setWidgetLoaded(false);
      
      // Safely remove script if it exists and is still in the DOM
      try {
        if (scriptRef && scriptRef.parentNode) {
          scriptRef.parentNode.removeChild(scriptRef);
        }
      } catch (error) {
        console.log('Script already removed or not found:', error);
      }
      
      // Safely remove custom styles if they exist and are still in the DOM
      try {
        if (styleRef && styleRef.parentNode) {
          styleRef.parentNode.removeChild(styleRef);
        }
      } catch (error) {
        console.log('Style already removed or not found:', error);
      }
      
      // Clear the widget container content only if it exists
      try {
        const container = document.getElementById('simplybook-widget');
        if (container) {
          container.innerHTML = '';
        }
      } catch (error) {
        console.log('Container already cleared or not found:', error);
      }
    };
  }, []);

  // Mobile full-screen widget view
  if (isMobile && showMobileWidget) {
    return (
      <div className="mobile-fullscreen-widget">
        <div className="flex items-center justify-between p-4 bg-white border-b">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowMobileWidget(false)}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Button>
          <h1 className="font-heading text-lg font-semibold text-primary">Book Your Session</h1>
          <div className="w-16"></div> {/* Spacer for centering */}
        </div>
        <div id="simplybook-widget" className="w-full h-full">
          {!widgetLoaded && (
            <div className="flex items-center justify-center h-full text-muted-foreground p-4">
              <div className="text-center">
                <div className="animate-pulse mb-2">Loading booking system...</div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
  
  return <div className="min-h-screen smooth-scroll">
      <Navigation />
      
      {/* Hero Section */}
      <section className="responsive-section-spacing bg-white">
        <div className="max-w-4xl mx-auto responsive-container text-center">
          <h1 className="font-heading responsive-heading-optimize font-bold mb-3 sm:mb-4 md:mb-6 text-primary">
            Book Your <span className="text-[#c37fa8]">Pilates Class</span>
          </h1>
          <p className="responsive-text-optimize text-muted-foreground leading-relaxed mb-4 sm:mb-6 md:mb-8 max-w-3xl mx-auto">
            Begin your transformative pilates journey with just a few simple steps. Our intuitive booking system guides you through selecting your ideal class, discovering available session times, and securing your place.
          </p>
        </div>
      </section>

      {/* Booking Section */}
      <section className="responsive-section-spacing bg-stone-50">
        <div className="max-w-4xl mx-auto responsive-container">
          <Card className="border-0 shadow-xl responsive-card">
            <CardHeader className="text-center pb-3 sm:pb-4 md:pb-6 responsive-card-spacing">
              <CardTitle className="font-heading text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-primary">
                Schedule Your Session
              </CardTitle>
            </CardHeader>
            <CardContent className="responsive-card-spacing">
              {isMobile ?
            // Mobile: Button to show full-screen widget
            <div className="text-center space-y-4">
                  <p className="text-muted-foreground mb-6 responsive-text-optimize">
                    Start your booking journey with our streamlined mobile experience designed for easy class selection.
                  </p>
                  <Button 
                    size="lg" 
                    className="w-full h-14 text-lg responsive-button"
                    onClick={() => setShowMobileWidget(true)}
                  >
                    Start Booking Process
                  </Button>
                  <p className="text-xs lg:text-sm text-muted-foreground">
                    Full-screen booking experience optimized for mobile
                  </p>
                </div> :
            // Desktop: Embedded Widget
            <div id="simplybook-widget" className="w-full min-h-[600px] lg:min-h-[700px] xl:min-h-[800px] overflow-auto rounded-lg border bg-white">
                  {!widgetLoaded && (
                    <div className="flex items-center justify-center h-full text-muted-foreground responsive-card-spacing">
                      <div className="text-center">
                        <div className="animate-pulse mb-2 responsive-text-optimize">Loading booking system...</div>
                      </div>
                    </div>
                  )}
                </div>}
            </CardContent>
          </Card>
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
