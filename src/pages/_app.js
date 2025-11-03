import "@/styles/globals.css";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    function setNavbarHeight() {
      const navbar = document.querySelector('nav'); // Select the nav element
      if (navbar) {
        document.documentElement.style.setProperty('--navbar-height', `${navbar.offsetHeight}px`);
      }
    }

    // Set on load and resize
    setNavbarHeight();
    window.addEventListener('resize', setNavbarHeight);

    // Cleanup
    return () => {
      window.removeEventListener('resize', setNavbarHeight);
    };
  }, []);

  return <Component {...pageProps} />;
}
