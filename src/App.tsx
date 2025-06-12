
// This is the main App component that sets up routing and global providers for our entire website
// It defines which components to show when users visit different URLs

// Import toast notification components for showing messages to users
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
// Import tooltip provider for hover tooltips throughout the app
import { TooltipProvider } from "@/components/ui/tooltip";
// Import React Query for managing server state and API calls
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// Import routing components for navigation between pages
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import all the different page components
import Index from "./pages/Index";                    // Homepage
import About from "./pages/About";                    // About Us page
import Classes from "./pages/Classes";                // Our Classes page
import Testimonials from "./pages/Testimonials";      // Customer testimonials
import Blog from "./pages/Blog";                      // Blog listing page
import Contact from "./pages/Contact";                // Contact form page
import Booking from "./pages/Booking";                // Booking page
import NotFound from "./pages/NotFound";              // 404 error page

// Import individual blog post components
import DeskBackPainExercises from "./pages/blog/DeskBackPainExercises";
import PilatesBalanceSeniors from "./pages/blog/PilatesBalanceSeniors";
import FirstPilatesClassGuide from "./pages/blog/FirstPilatesClassGuide";

// Create a React Query client for managing server state and caching API responses
const queryClient = new QueryClient();

// Main App component that wraps our entire application
const App = () => (
  // QueryClientProvider gives all child components access to React Query features
  <QueryClientProvider client={queryClient}>
    {/* TooltipProvider enables tooltip functionality throughout the app */}
    <TooltipProvider>
      {/* Toaster components for displaying notification messages */}
      <Toaster />
      <Sonner />
      {/* BrowserRouter enables client-side routing (changing pages without page refresh) */}
      <BrowserRouter>
        {/* Routes container defines which component to show for each URL */}
        <Routes>
          {/* Each Route maps a URL path to a specific component */}
          <Route path="/" element={<Index />} />                    {/* Homepage */}
          <Route path="/about" element={<About />} />               {/* About Us page */}
          <Route path="/classes" element={<Classes />} />           {/* Classes page */}
          <Route path="/testimonials" element={<Testimonials />} /> {/* Testimonials page */}
          <Route path="/blog" element={<Blog />} />                 {/* Blog listing */}
          
          {/* Individual blog post routes */}
          <Route path="/blog/desk-back-pain-exercises" element={<DeskBackPainExercises />} />
          <Route path="/blog/pilates-balance-seniors" element={<PilatesBalanceSeniors />} />
          <Route path="/blog/first-pilates-class-guide" element={<FirstPilatesClassGuide />} />
          
          <Route path="/contact" element={<Contact />} />           {/* Contact page */}
          <Route path="/booking" element={<Booking />} />           {/* Booking page */}
          
          {/* Catch-all route for any URL that doesn't match above - shows 404 page */}
          {/* This MUST be last to catch any unmatched routes */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

// Export the App component so it can be imported and used in main.tsx
export default App;
