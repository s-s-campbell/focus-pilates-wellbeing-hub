// This is the main entry point of our React application
// It's the first file that runs when the website loads

// Import the createRoot function from React 18 - this is what renders our app to the webpage
import { createRoot } from 'react-dom/client'
// Import our main App component that contains all our website content
import App from './App.tsx'
// Import our global CSS styles that apply to the entire website
import './index.css'

// Find the HTML element with id="root" in our index.html file and render our React app inside it
// The ! tells TypeScript we're sure this element exists (it's in our index.html)
// createRoot is the modern way to start a React app (React 18+)
createRoot(document.getElementById("root")!).render(<App />);
