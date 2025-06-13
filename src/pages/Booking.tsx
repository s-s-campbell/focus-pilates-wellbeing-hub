import { useEffect, useState, useRef, useCallback } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// Separate widget component to isolate the external script
const WidgetContainer = ({ onWidgetLoaded }: { onWidgetLoaded: (loaded: boolean) => void }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const initializationRef = useRef(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const initializeWidget = () => {
      if (initializationRef.current) return;
      
      const container = containerRef.current;
      if (!container) return;
      
      if (!window.SimplybookWidget) {
        timeoutId = setTimeout(initializeWidget, 500);
        return;
      }

      try {
        initializationRef.current = true;
        
        new window.SimplybookWidget({
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
          "container_id": "simplybook-widget-desktop"
        });

        timeoutId = setTimeout(() => {
          onWidgetLoaded(true);
        }, 2000);

      } catch (error) {
        console.error("Widget initialization error:", error);
        initializationRef.current = false;
      }
    };

    // Start initialization after a small delay
    timeoutId = setTimeout(initializeWidget, 1000);

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [onWidgetLoaded]);

  return (
    <div
      ref={containerRef}
      id="simplybook-widget-desktop"
      className="w-full min-h-[700px] overflow-auto rounded-lg border bg-white"
    />
  );
};

const Booking = () => {
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [widgetLoaded, setWidgetLoaded] = useState(false);
  const [widgetKey, setWidgetKey] = useState(0);
  const scriptLoadedRef = useRef(false);

  const handleStartMobileBooking = () => {
    navigate('/book-now');
  };

  const handleWidgetLoaded = useCallback((loaded: boolean) => {
    setWidgetLoaded(loaded);
  }, []);

  useEffect(() => {
    if (isMobile || scriptLoadedRef.current) return;

    const loadScript = () => {
      const existingScript = document.querySelector('script[src*="widget.simplybook.net"]');
      if (existingScript) {
        setScriptLoaded(true);
        scriptLoadedRef.current = true;
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://widget.simplybook.net/v2/widget/widget.js';
      script.async = true;
      
      script.onload = () => {
        setScriptLoaded(true);
        scriptLoadedRef.current = true;
      };

      script.onerror = () => {
        console.error("Failed to load SimplyBook widget script");
      };

      document.head.appendChild(script);
    };

    loadScript();
  }, [isMobile]);

  // Add CSS styles
  useEffect(() => {
    if (isMobile) return;

    const style = document.createElement('style');
    style.textContent = `
      #simplybook-widget-desktop {
        background: white !important;
        min-height: 700px !important;
      }
      .simplybook-container iframe {
        min-height: 700px !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      if (style.parentNode) {
        style.parentNode.removeChild(style);
      }
    };
  }, [isMobile]);

  return (
    <div className="min-h-screen smooth-scroll">
      <Navigation />
      
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

      <section className="responsive-section-spacing bg-stone-50">
        <div className="max-w-4xl mx-auto responsive-container">
          <Card className="border-0 shadow-xl responsive-card">
            <CardHeader className="text-center pb-3 sm:pb-4 md:pb-6 responsive-card-spacing">
              <CardTitle className="font-heading text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-primary">
                Schedule Your Session
              </CardTitle>
            </CardHeader>
            <CardContent className="responsive-card-spacing">
              {isMobile ? (
                <div className="text-center space-y-4">
                  <p className="text-muted-foreground mb-6 responsive-text-optimize">
                    Start your booking journey with our streamlined mobile experience.
                  </p>
                  <Button
                    size="lg"
                    className="w-full h-14 text-lg responsive-button"
                    onClick={handleStartMobileBooking}
                  >
                    Start Booking Process
                  </Button>
                  <p className="text-xs lg:text-sm text-muted-foreground">
                    You'll be directed to our full-screen booking portal.
                  </p>
                </div>
              ) : (
                <div className="w-full">
                  {scriptLoaded ? (
                    <div className="simplybook-container">
                      <WidgetContainer 
                        key={widgetKey} 
                        onWidgetLoaded={handleWidgetLoaded} 
                      />
                      {!widgetLoaded && (
                        <div className="absolute inset-0 flex items-center justify-center bg-white/80 rounded-lg">
                          <div className="text-center text-muted-foreground">
                            <div className="animate-pulse mb-2 responsive-text-optimize">
                              Initializing booking system...
                            </div>
                            <div className="text-sm">Connecting to our scheduling platform...</div>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="flex items-center justify-center min-h-[700px] text-muted-foreground">
                      <div className="text-center">
                        <div className="animate-pulse mb-2 responsive-text-optimize">
                          Loading booking system...
                        </div>
                        <div className="text-sm">Please wait while we prepare your booking experience...</div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="responsive-section-spacing bg-white">
        <div className="max-w-2xl mx-auto responsive-container text-center">
          <h2 className="font-heading text-xl sm:text-2xl lg:text-3xl font-bold text-primary mb-3 sm:mb-4 md:mb-6">
            Need Help Booking?
          </h2>
          <p className="responsive-text-optimize text-muted-foreground mb-4 sm:mb-6">
            If you have any questions or need assistance, feel free to{' '}
            <Link to="/contact" className="text-primary hover:underline font-medium">
              contact us directly
            </Link>
            .
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Booking;