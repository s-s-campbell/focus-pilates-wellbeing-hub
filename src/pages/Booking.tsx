import { useEffect, useState, useRef } from 'react';
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
  const [widgetInitialized, setWidgetInitialized] = useState(false);
  const scriptRef = useRef<HTMLScriptElement | null>(null);
  const styleRef = useRef<HTMLStyleElement | null>(null);

  const initializeWidget = (containerId: string) => {
    if (widgetInitialized || !document.getElementById(containerId)) {
      return;
    }

    const checkAndInit = () => {
      if (window.SimplybookWidget) {
        try {
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
            "container_id": containerId
          });

          setWidgetInitialized(true);

          setTimeout(() => {
            const container = document.getElementById(containerId);
            if (container) {
              const iframe = container.querySelector('iframe');
              if (iframe) {
                iframe.onload = () => setWidgetLoaded(true);
                if (iframe.contentDocument?.readyState === 'complete') {
                  setWidgetLoaded(true);
                }
              }
            }
          }, 1000);

        } catch (error) {
          console.error('Error initializing SimplyBook widget:', error);
        }
      } else {
        setTimeout(checkAndInit, 500);
      }
    };

    checkAndInit();
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    setWidgetLoaded(false);
    setWidgetInitialized(false);

    const script = document.createElement('script');
    script.src = '//widget.simplybook.net/v2/widget/widget.js';
    script.type = 'text/javascript';
    script.async = true;
    scriptRef.current = script;

    script.onload = () => {
      if (!isMobile) {
        initializeWidget('simplybook-widget-desktop');
      }
    };
    
    script.onerror = () => {
      console.error('Failed to load the SimplyBook.me script.');
    };
    
    document.head.appendChild(script);

    const style = document.createElement('style');
    styleRef.current = style;
    style.textContent = `
      .simplybook-container .widget-header-time,
      .simplybook-container .sb-timezone,
      .simplybook-container .sb-time-zone,
      .simplybook-container [class*="timezone"],
      .simplybook-container [class*="time-zone"],
      .simplybook-container .widget-timezone {
        display: none !important;
      }
      @media (min-width: 768px) {
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
      }
      @media (max-width: 767px) {
        .mobile-fullscreen-widget {
          position: fixed !important; top: 0 !important; left: 0 !important; right: 0 !important; bottom: 0 !important;
          z-index: 9999 !important; background: white !important; overflow: hidden !important;
        }
        .mobile-fullscreen-widget .simplybook-container {
          height: 100% !important; margin: 0 !important; border-radius: 0 !important;
          border: none !important; box-shadow: none !important;
        }
        .mobile-fullscreen-widget .simplybook-container iframe {
          height: 100% !important; min-height: 100% !important;
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      if (scriptRef.current && scriptRef.current.parentNode) {
        scriptRef.current.parentNode.removeChild(scriptRef.current);
      }
      if (styleRef.current && styleRef.current.parentNode) {
        styleRef.current.parentNode.removeChild(styleRef.current);
      }
      if (window.SimplybookWidget) {
        delete window.SimplybookWidget;
      }
    };
  }, [isMobile]);

  useEffect(() => {
    if (isMobile && showMobileWidget && !widgetInitialized) {
      initializeWidget('simplybook-widget-mobile');
    }
  }, [isMobile, showMobileWidget, widgetInitialized]);

  const handleStartMobileBooking = () => {
    setShowMobileWidget(true);
  };

  // Mobile full-screen widget view
  if (isMobile && showMobileWidget) {
    return (
      <div className="mobile-fullscreen-widget">
        <div className="flex items-center justify-between p-4 bg-white border-b" style={{ height: '60px', flexShrink: 0 }}>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              setShowMobileWidget(false);
              setWidgetLoaded(false);
              setWidgetInitialized(false);
            }}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Button>
          <h1 className="font-heading text-lg font-semibold text-primary">Book Your Session</h1>
          <div className="w-16"></div>
        </div>

        {/* CHANGED: Use a relative container to stack the widget and the loader */}
        <div className="relative w-full" style={{ height: 'calc(100% - 60px)' }}>
          {/* This div is the target for the widget.
            It has NO React children, so React will never try to modify its contents.
            This gives the SimplyBook script full control.
          */}
          <div
            id="simplybook-widget-mobile"
            className="simplybook-container w-full h-full"
            suppressHydrationWarning
          />

          {/* The loading indicator is now a sibling, overlaid on top using absolute positioning.
            React can safely remove this element without affecting the widget container.
          */}
          {!widgetLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-white text-muted-foreground p-4">
              <div className="text-center">
                <div className="animate-pulse mb-2">Loading booking system...</div>
                <div className="text-sm">Please wait a moment.</div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
  
  // Main page view
  return (
    // ... rest of your JSX is unchanged
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
                <div
                  id="simplybook-widget-desktop"
                  className="simplybook-container w-full min-h-[700px] overflow-auto rounded-lg border bg-white"
                  suppressHydrationWarning
                >
                  {!widgetLoaded && (
                    <div className="flex items-center justify-center h-full text-muted-foreground responsive-card-spacing min-h-[700px]">
                      <div className="text-center">
                        <div className="animate-pulse mb-2 responsive-text-optimize">Loading booking system...</div>
                        <div className="text-sm">Connecting to our scheduling platform...</div>
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