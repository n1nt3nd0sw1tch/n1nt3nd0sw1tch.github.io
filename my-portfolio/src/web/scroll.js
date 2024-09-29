import { useEffect } from "react"; // Importing the useEffect hook from React to run side effects
import { useLocation } from "react-router-dom"; // Importing useLocation from react-router-dom to get the current route location

function ScrollToTop() {
  // Destructuring the pathname property from the location object
  const { pathname } = useLocation();

  useEffect(() => {
    // This useEffect hook will run every time the pathname changes (i.e., when navigating to a new route)
    // It scrolls the window to the top (position 0,0)
    window.scrollTo(0, 0);
  }, [pathname]); // Adding 'pathname' as a dependency ensures this effect runs when the route changes

  // The component does not render any JSX, so it returns null
  return null;
}

export default ScrollToTop;
