import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

// Define the shape of the window object to include the widget
interface CustomWindow extends Window {
  SimplybookWidget?: any;
}
declare const window: CustomWindow;


const BookingWidgetPage = () => {
  const navigate = useNavigate();
  const [widgetLoaded, setWidgetLoaded] = useState(false);
  const scriptRef = useRef<HTMLScriptElement | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const initializeWidget = () => {
      // Defensive check to prevent duplicate widgets
      const container = document.getElementById("simplybook-widget-container");
      if (!container || container.querySelector('iframe')) {
        return;
      }

      if (window.SimplybookWidget) {
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
            "container_id": "simplybook-widget-container"
        });
        setWidgetLoaded(true);
      }
    };

    const script = document.createElement('script');
    script.src = '//widget.simplybook.net/v2/widget/widget.js';
    script.type = 'text/javascript';
    script.async = true;
    scriptRef.current = script;
    script.onload = initializeWidget;
    document.head.appendChild(script);

    return () => {
      if (scriptRef.current && scriptRef.current.parentNode) {
        scriptRef.current.parentNode.removeChild(scriptRef.current);
      }
    };
  }, []);

  return (
    <div>
      <div className="sticky top-0 z-10 flex items-center justify-between p-4 bg-white border-b">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => navigate(-1)}
          className="flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </Button>
        <h1 className="font-heading text-lg font-semibold text-primary">Book Your Session</h1>
        <div className="w-16"></div>
      </div>

      <div className="p-2 sm:p-4">
        <div id="simplybook-widget-container" className="w-full min-h-screen" />
      </div>

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