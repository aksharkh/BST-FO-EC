import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

/**
 * Navigate to a section on the home page from anywhere in the app
 * @param sectionId - The ID of the section to scroll to (e.g., 'about', 'contact')
 * @param navigate - React Router navigate function
 * @param currentPath - Current pathname to check if already on home page
 */
export const navigateToSection = (
  sectionId: string,
  navigate: ReturnType<typeof useNavigate>,
  currentPath: string
) => {
  if (currentPath === "/") {
    // Already on home page, just scroll
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  } else {
    // Navigate to home page with hash
    navigate(`/?section=${sectionId}`);
  }
};

/**
 * Hook to handle scrolling to section on home page
 * Should be called in the home page component or App.tsx
 */
export const useScrollToSection = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if there's a section parameter in the query string
    const params = new URLSearchParams(location.search);
    const sectionId = params.get("section");

    if (sectionId) {
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [location.search]);
};
