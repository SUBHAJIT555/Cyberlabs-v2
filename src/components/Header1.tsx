import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router";
import { Logo } from "./index";
import { useMobileMenuStore } from "../store/mobileMenuStore";
import { IoMenu } from "react-icons/io5";
import CallbackModal from "./CallbackModal";
import { useLenis } from "../hooks/useLenis";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );
  const { toggleMenu, isOpen } = useMobileMenuStore();
  const location = useLocation();
  const lenis = useLenis();

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (!lenis) return;

    let ticking = false;

    const handleScroll = ({ scroll }: { scroll: number }) => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(scroll > 50);

          // Determine scroll direction
          const scrollingDown = scroll > lastScrollY.current;
          const scrollDifference = Math.abs(scroll - lastScrollY.current);

          // Only update if scroll difference is significant (prevents jitter)
          if (scrollDifference > 10) {
            if (scrollingDown && scroll > 150) {
              // Scrolling down - hide header
              setIsVisible(false);
            } else if (!scrollingDown || scroll <= 100) {
              // Scrolling up or near top - show header
              setIsVisible(true);
            }

            lastScrollY.current = scroll;
          }

          ticking = false;
        });

        ticking = true;
      }
    };

    lenis.on("scroll", handleScroll);
    
    // Initialize with current scroll position
    if (lenis.scroll !== undefined) {
      lastScrollY.current = lenis.scroll;
      setIsScrolled(lenis.scroll > 50);
      setIsVisible(lenis.scroll <= 100);
    }

    return () => {
      lenis.off("scroll", handleScroll);
    };
  }, [lenis]);

  const navigationItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Programs", path: "/programs" },
    { name: "Simulator", path: "/simulator" },

    // { name: "Operation", path: "/operation-centers" },

    // { name: "Division", path: "/division" },
    { name: "Contact", path: "/contact" },
  ];

  // Responsive navigation items - hide some items on smaller screens
  const getVisibleNavigationItems = () => {
    if (windowWidth >= 1280) {
      return navigationItems; // Show all on xl screens
    } else if (windowWidth >= 1024) {
      return navigationItems.slice(0, 6); // Hide Contact on lg screens
    } else if (windowWidth >= 768) {
      return navigationItems.slice(0, 5); // Hide News and Contact on md screens
    }
    return navigationItems;
  };

  // Helper function to check if a navigation item is active
  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/60 backdrop-blur-sm" : "bg-background"
        }`}
      initial={{ y: -100 }}
      animate={{
        y: isVisible ? 0 : -100,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      style={{
        // Ensure header doesn't interfere with content on smaller screens
        minHeight: windowWidth < 768 ? "60px" : "70px",
      }}
    >
      <div className="w-full mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <motion.div
            className="flex items-center space-x-2 sm:space-x-3"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            {/* CYBERLABS Text */}
            <Link to="/">
              <motion.div
                className="w-24 sm:w-28 md:w-30 lg:w-30 xl:w-35 2xl:w-35 h-full relative"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                <Logo />
              </motion.div>
            </Link>
          </motion.div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-3 md:space-x-4 lg:space-x-6 xl:space-x-8">
            {getVisibleNavigationItems().map((item, index) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-text-primary text-sm md:text-base lg:text-lg font-montserrat font-medium relative overflow-hidden h-5 md:h-6 flex items-center cursor-pointer"
              >
                <motion.div
                  className="relative"
                  whileHover="hover"
                  initial="initial"
                  variants={{
                    initial: { y: 0 },
                    hover: { y: -24 },
                  }}
                  transition={{
                    duration: 0.3,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <span
                    className={`block ${isActive(item.path) ? "text-primary font-extrabold" : ""
                      }`}
                  >
                    {item.name}
                  </span>
                  <motion.span
                    className="block absolute top-5 md:top-6 text-primary font-montserrat"
                    variants={{
                      initial: { y: 0 },
                      hover: { y: 0 },
                    }}
                  >
                    {item.name}
                  </motion.span>
                </motion.div>
              </Link>
            ))}
            <motion.button
              onClick={() => setIsModalOpen(true)}
              className="hidden md:flex text-text-primary text-xs md:text-sm lg:text-base xl:text-lg font-medium font-montserrat tracking-wide relative overflow-hidden h-5 md:h-6 items-center cursor-pointer px-2 md:px-3 lg:px-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{
                opacity: 1,
                y: 0,
                x: [0, -3, 3, -3, 3, 0],
                transition: {
                  opacity: {
                    duration: 0.4,
                    delay: navigationItems.length * 0.1 + 0.1,
                    ease: "easeOut",
                  },
                  y: {
                    duration: 0.4,
                    delay: navigationItems.length * 0.1 + 0.1,
                    ease: "easeOut",
                  },
                  x: {
                    duration: 0.6,
                    delay: navigationItems.length * 0.1 + 0.5,
                    repeat: Infinity,
                    repeatDelay: 3,
                    ease: "easeInOut",
                  },
                },
              }}
            >
              <motion.div
                className="relative"
                whileHover="hover"
                initial="initial"
                variants={{
                  initial: { y: 0 },
                  hover: { y: -24 },
                }}
                transition={{
                  duration: 0.3,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <span className="block text-text-primary font-montserrat">
                  Request Callback
                </span>
                <motion.span
                  className="block absolute top-5 md:top-6 text-primary"
                  variants={{
                    initial: { y: 0 },
                    hover: { y: 0 },
                  }}
                >
                  Request_Callback
                </motion.span>
              </motion.div>
            </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-text-primary p-1.5 sm:p-2 mobile-menu-button relative z-70"
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            onClick={toggleMenu}
          >
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <IoMenu className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.div>
          </motion.button>
        </div>
      </div>

      {/* Callback Modal */}
      <CallbackModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </motion.header>
  );
};

export default Header;
