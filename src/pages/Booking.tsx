import { useEffect, useState, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Booking = () => {
  const isMobile = useIsMobile();
  const navigate = useNavigate();

  // State and refs for the desktop widget
  const [widgetLoaded, setWidgetLoaded] = useState(false);
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const scriptRef = useRef<HTMLScriptElement | null>(null);
  const styleRef = useRef<HTMLStyleElement | null>(null);
  const widgetInitialized = useRef(false);

  // This function navigates to the dedicated mobile booking page
  const handleStartMobileBooking = () => {
    navigate('/book-now');
  };

  // This useEffect handles the desktop widget initialization
  useEffect(() => {
    // Reset states when switching between mobile/desktop
    setWidgetLoaded(false);
    setScriptLoaded(false);
    widgetInitialized.current = false;

    // If we are on mobile, don't load the widget
    if (isMobile) {
      return;
    }

    // Function to initialize the widget once script is loaded
    const initializeDesktopWidget = () => {
      console.log("Attempting to initialize widget...");
      
      // Prevent multiple initializations
      if (widgetInitialized.current) {
        console.log("Widget already initialized, skipping");
        return;
      }
      
      // Check if the container exists
      const container = document.getElementById("simplybook-widget-desktop");
      if (!container) {
        console.log("Widget container not found, retrying in 500ms");
        setTimeout(initializeDesktopWidget, 500);
        return;
      }

      console.log("Container found, checking for SimplybookWidget...");

      if (window.SimplybookWidget) {
        try {
          console.log("Initializing SimplyBook widget...");
          
          // Don't clear the container, let the widget handle it
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
            "container_id": "simplybook-widget-desktop"
          });
          
          widgetInitialized.current = true;
          console.log("Widget initialized successfully");
          
          // Set loaded state after a brief delay to ensure widget is rendered
          setTimeout(() => {
            setWidgetLoaded(true);
            console.log("Widget marked as loaded");
          }, 1000);
          
        } catch (error) {
          console.error("Error initializing SimplyBook widget:", error);
          // Try again after a delay
          setTimeout(() => {
            widgetInitialized.current = false;
            initializeDesktopWidget();
          }, 2000);
        }
      } else {
        console.log("SimplybookWidget not available, retrying in 500ms");
        setTimeout(initializeDesktopWidget, 500);
      }
    };

    // Check if script is already loaded
    const existingScript = document.querySelector('script[src*="widget.simplybook.net"]');
    if (existingScript) {
      console.log("Script already exists, initializing widget");
      setScriptLoaded(true);
      // Wait a bit longer for the script to fully initialize
      setTimeout(initializeDesktopWidget, 500);
      return;
    }

    console.log("Loading SimplyBook script...");
    
    // Load the SimplyBook.me script for the desktop view
    const script = document.createElement('script');
    script.src = 'https://widget.simplybook.net/v2/widget/widget.js'; // Use https explicitly
    script.type = 'text/javascript';
    script.async = true;
    scriptRef.current = script;
    
    script.onload = () => {
      console.log("Script loaded successfully");
      setScriptLoaded(true);
      // Longer delay to ensure the script is fully initialized
      setTimeout(initializeDesktopWidget, 1000);
    };
    
    script.onerror = (error) => {
      console.error("Failed to load SimplyBook widget script:", error);
    };

    document.head.appendChild(script);

    // Add specific styles for the embedded desktop view
    const style = document.createElement('style');
    styleRef.current = style;
    style.textContent = `
      #simplybook-widget-desktop {
        background: white !important;
        min-height: 700px !important;
      }
      .simplybook-container .widget-content,
      .simplybook-container .sb-main-content,
      .simplybook-container iframe {
        margin-top: -20px !important;
        padding-top: 0 !important;
      }
      .simplybook-container .widget-header {
        padding-top: 10px !important;
        margin-bottom: 0 !important;
      }
    `;
    document.head.appendChild(style);

    // Cleanup function to remove script/styles when the component unmounts
    return () => {
      widgetInitialized.current = false;
      if (scriptRef.current && scriptRef.current.parentNode) {
        scriptRef.current.parentNode.removeChild(scriptRef.current);
      }
      if (styleRef.current && styleRef.current.parentNode) {
        styleRef.current.parentNode.removeChild(styleRef.current);
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
                // --- MOBILE VIEW ---
                // Shows a simple button that navigates to the dedicated widget page
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
                // --- DESKTOP VIEW ---
                // Embeds the widget directly on the page
                <div className="w-full">
                  <div
                    id="simplybook-widget-desktop"
                    className="simplybook-container w-full min-h-[700px] overflow-auto rounded-lg border bg-white"
                  >
                    {/* Show loading state while script loads or widget initializes */}
                    {(!scriptLoaded || !widgetLoaded) && (
                      <div className="flex items-center justify-center h-full text-muted-foreground responsive-card-spacing min-h-[700px]">
                        <div className="text-center">
                          <div className="animate-pulse mb-2 responsive-text-optimize">
                            {!scriptLoaded ? "Loading booking system..." : "Initializing widget..."}
                          </div>
                          <div className="text-sm">Connecting to our scheduling platform...</div>
                        </div>
                      </div>
                    )}
                  </div>
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