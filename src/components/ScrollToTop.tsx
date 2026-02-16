import { useEffect, useState } from "react";
import { IoArrowUp } from "react-icons/io5";
import { useLenis } from "../hooks/useLenis";

/**
 * ScrollToTop Button Component
 * 
 * ARCHITECTURE RULES:
 * - ONLY observes scroll state (never triggers scroll except on click)
 * - ONLY reads from Lenis (never window.scrollY when Lenis is active)
 * - No polling, no setInterval, no timeouts
 * - Pure observer pattern
 */
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) {
      // No Lenis available, hide button
      setIsVisible(false);
      return;
    }

    // ONLY observe Lenis scroll events
    // Never read window.scrollY or use polling
    const handleScroll = ({ scroll }: { scroll: number }) => {
      setIsVisible(scroll > 100);
    };

    // Initial check
    handleScroll({ scroll: lenis.scroll || 0 });

    // Subscribe to Lenis scroll events
    lenis.on("scroll", handleScroll);

    return () => {
      // Cleanup: unsubscribe from Lenis events
      lenis.off("scroll", handleScroll);
    };
  }, [lenis]);

  const scrollToTop = () => {
    if (lenis) {
      // Use Lenis to scroll (single source of truth)
      lenis.scrollTo(0, {
        duration: 1.5,
        immediate: false,
      });
    }
  };

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={scrollToTop}
      className={`fixed bottom-20 right-4 sm:bottom-24 sm:right-6 md:bottom-8 md:right-8 z-900 inline-flex p-2 items-center justify-center rounded-md bg-white border border-neutral-300 border-dashed text-text-primary shadow-lg transition-all duration-300 ease-out hover:opacity-90 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text-primary/50 motion-reduce:transition-none motion-reduce:transform-none motion-reduce:duration-0 group ${isVisible
          ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
          : "opacity-0 translate-y-8 sm:translate-y-10 scale-95 pointer-events-none"
        }`}
      style={{
        background:
          "repeating-linear-gradient(135deg, #f9fafb 0px, #f9fafb 1px, transparent 1px, transparent 4px), white",
      }}
    >
      <IoArrowUp className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 transition-transform duration-300 ease-out group-hover:-translate-y-1 text-neutral-500" />
    </button>
  );
};

export default ScrollToTopButton;
