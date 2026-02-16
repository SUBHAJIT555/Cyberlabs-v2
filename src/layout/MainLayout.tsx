import { Outlet } from "react-router";
import ScrollToTopButton from "../components/ScrollToTop";
// import MobileMenu from "../components/MobileMenu";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import { TextHoverEffect } from "../components/ui/text-hover-effect";
import { useScrollRestoreDebug } from "@/hooks/useScrollRestoreDebug";
import { useLenisHashScroll } from "../hooks/useLenisHashScroll";
import { useLenisScrollRestoration } from "../hooks/useLenisScrollRestoration";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

/**
 * MainLayout Component
 * 
 * ARCHITECTURE RULES:
 * - Lenis is the ONLY scroll authority
 * - React Router's ScrollRestoration is REMOVED (conflicts with Lenis)
 * - Hash scrolling takes priority over normal scroll restoration
 * - Order matters: hash scroll hook runs first, then scroll restoration
 */
const MainLayout = () => {
  useScrollRestoreDebug("MainLayout");

  // Handle hash-based scrolling (e.g. /page#section)
  // This MUST run first to take priority over scroll restoration
  // Offset accounts for fixed header height (~80px) + spacing
  useLenisHashScroll({ offsets: { "contact-form": 50, 'frequently-asked-questions': 100, 'request-callback-form': 80, 'our-programs': 260 } });

  // Handle scroll restoration on route change
  // ONLY handles non-hash routes (skips if hash is present)
  // ONLY handles new routes (PUSH/REPLACE), not back/forward
  useLenisScrollRestoration({ duration: 0.6 });

  return (
    <div className="min-h-screen w-full overflow-x-clip">

      <Navbar />
      {/* <MobileMenu /> */}
      <main className="w-full overflow-x-clip">
        <Outlet />
      </main>
      {/* <TextHoverEffect text="CYBERLABS INDIA" /> */}
      <Footer />
      <ScrollToTopButton />
      {/* ScrollRestoration REMOVED - conflicts with Lenis */}
    </div>
  );
};

export default MainLayout;
