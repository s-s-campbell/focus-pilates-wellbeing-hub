import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const BookingWidgetPage = () => {
  const navigate = useNavigate();
  const [widgetLoaded, setWidgetLoaded] = useState(false);
  const scriptRef = useRef(null);

  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);

    const initializeWidget = () => {
      if (window.SimplybookWidget) {
        new window.SimplybookWidget({
            "widget_type": "iframe",
            "url": "https://pilatesinfocus.simplybook.net",
            "theme": "dainty",
            "theme_settings": { /* ... your theme settings ... */ },
            "timeline": "modern",
            "datepicker": "top_calendar",
            "is_rtl": false,
            "app_config": { /* ... your app config ... */ },
            "container_id": "simplybook-widget-container"
        });
        setWidgetLoaded(true);
      }
    };

    // Load the SimplyBook.me script
    const script = document.createElement('script');
    script.src = '//widget.simplybook.net/v2/widget/widget.js';
    script.type = 'text/javascript';
    script.async = true;
    scriptRef.current = script;

    // Initialize the widget once the script has loaded
    script.onload = initializeWidget;
    
    document.head.appendChild(script);

    // Cleanup function to remove the script when the component unmounts
    return () => {
      if (scriptRef.current && scriptRef.current.parentNode) {
        scriptRef.current.parentNode.removeChild(scriptRef.current);
      }
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div>
      {/* Header Bar */}
      <div className="sticky top-0 z-10 flex items-center justify-between p-4 bg-white border-b">
        <Button
          variant="ghost"
          size="sm"
          // The navigate(-1) function is like hitting the browser's back button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </Button>
        <h1 className="font-heading text-lg font-semibold text-primary">Book Your Session</h1>
        <div className="w-16"></div> {/* Spacer for centering the title */}
      </div>

      {/* Widget Container */}
      <div className="p-2 sm:p-4">
        {/* The widget will be injected here. The page will scroll naturally. */}
        <div id="simplybook-widget-container" className="w-full min-h-screen" />
      </div>

      {/* Show a loading indicator until the widget script confirms it has loaded */}
      {!widgetLoaded && (
        <div className="fixed inset-0 flex items-center justify-center bg-white z-20">
          <div className="text-center text-muted-foreground">
            <div className="animate-pulse mb-2">Loading Booking System...</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingWidgetPage;