import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  TbNetwork,
  TbServer,
  TbCode,
  TbBug,
  TbShieldLock,
  TbSearch,
  TbCloudLock,
  TbChecklist,
} from "react-icons/tb";
import type { IconType } from "react-icons";

export interface TechStackItem {
  id: string;
  title: string;
  Icon: IconType;
}

const techStacks: TechStackItem[] = [
  { id: "1", title: "Networking & Protocols", Icon: TbNetwork },
  { id: "2", title: "Linux & Windows Internals", Icon: TbServer },
  { id: "3", title: "Programming & Scripting", Icon: TbCode },
  { id: "4", title: "Offensive Security", Icon: TbBug },
  { id: "5", title: "Defensive Security", Icon: TbShieldLock },
  { id: "6", title: "Digital Forensics", Icon: TbSearch },
  { id: "7", title: "Cloud Security", Icon: TbCloudLock },
  { id: "8", title: "GRC / Frameworks", Icon: TbChecklist },
];

type ScreenSize = "xs" | "sm" | "md" | "lg";

const useResponsive = () => {
  const [screenSize, setScreenSize] = useState<ScreenSize>("lg");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const checkScreenSize = () => {
      const width = window.innerWidth;
      if (width < 480) setScreenSize("xs");
      else if (width < 640) setScreenSize("sm");
      else if (width < 768) setScreenSize("md");
      else setScreenSize("lg");
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return screenSize;
};

const getResponsiveValues = (screenSize: ScreenSize) => {
  switch (screenSize) {
    case "xs":
      return {
        containerRadius: 100,
        iconSize: 45,
        cardWidth: "w-36",
        iconSizeCard: "w-12 h-12",
        iconMargin: "-mt-8",
        fontSize: { name: "text-sm", role: "text-xs" },
      };
    case "sm":
      return {
        containerRadius: 120,
        iconSize: 55,
        cardWidth: "w-40",
        iconSizeCard: "w-14 h-14",
        iconMargin: "-mt-9",
        fontSize: { name: "text-base", role: "text-xs" },
      };
    case "md":
      return {
        containerRadius: 150,
        iconSize: 65,
        cardWidth: "w-44",
        iconSizeCard: "w-16 h-16",
        iconMargin: "-mt-10",
        fontSize: { name: "text-base", role: "text-sm" },
      };
    default:
      return {
        containerRadius: 200,
        iconSize: 80,
        cardWidth: "w-52",
        iconSizeCard: "w-20 h-20",
        iconMargin: "-mt-12",
        fontSize: { name: "text-lg", role: "text-sm" },
      };
  }
};

function ChevronLeft({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ChevronRight({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

export function TechStackOrbitCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const screenSize = useResponsive();

  const {
    containerRadius,
    iconSize,
    cardWidth,
    iconSizeCard,
    iconMargin,
    fontSize,
  } = getResponsiveValues(screenSize);
  const containerSize = containerRadius * 2 + 100;

  const getRotation = useCallback(
    (index: number): number =>
      (index - activeIndex) * (360 / techStacks.length),
    [activeIndex]
  );

  const next = useCallback(
    () => setActiveIndex((i) => (i + 1) % techStacks.length),
    []
  );
  const prev = useCallback(
    () =>
      setActiveIndex((i) => (i - 1 + techStacks.length) % techStacks.length),
    []
  );

  const handleItemClick = useCallback(
    (index: number) => {
      if (index === activeIndex) return;
      setActiveIndex(index);
    },
    [activeIndex]
  );

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") prev();
      else if (event.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [prev, next]);

  useEffect(() => {
    if (isHovering) return;
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [isHovering, next]);

  const active = techStacks[activeIndex];
  const ActiveIcon = active.Icon;

  return (
    <div
      className="flex flex-col items-center p-2 sm:p-4 relative min-h-[350px] sm:min-h-[400px] transition-colors duration-300 rounded-xl "
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div
        className="relative flex items-center justify-center"
        style={{ width: containerSize, height: containerSize }}
      >
        {/* Active tech stack card (center) - same layout as OrbitCarousel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 25,
            }}
            className={`z-10 bg-white backdrop-blur-sm shadow-xl rounded-xl p-2 sm:p-3 md:p-4 ${cardWidth} text-center border border-neutral-100`}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className={`${iconSizeCard} rounded-full mx-auto ${iconMargin} border-4 border-white bg-text-primary/20 backdrop-blur-sm flex items-center justify-center text-primary object-cover shadow-md`}
            >
              <ActiveIcon className="w-1/2 h-1/2 shrink-0" aria-hidden />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.15 }}
            >
              <h2
                className={`mt-2 font-bold text-text-primary font-inter-display ${fontSize.name} line-clamp-2`}
              >
                {active.title}
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="flex justify-center items-center mt-2 sm:mt-3 gap-1 sm:gap-2"
            >
              <button
                type="button"
                onClick={prev}
                className="p-1 sm:p-1.5 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-700 transition-colors"
                aria-label="Previous"
              >
                <ChevronLeft className="sm:w-4 sm:h-4" />
              </button>
              
              <button
                type="button"
                onClick={next}
                className="p-1 sm:p-1.5 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-700 transition-colors"
                aria-label="Next"
              >
                <ChevronRight className="sm:w-4 sm:h-4" />
              </button>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Orbiting icons with counter-rotation */}
        {techStacks.map((item, i) => {
          const rotation = getRotation(i);
          const isActive = i === activeIndex;
          const Icon = item.Icon;

          return (
            <motion.div
              key={item.id}
              animate={{
                transform: `rotate(${rotation}deg) translateY(-${containerRadius}px)`,
              }}
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 20,
                delay: isActive ? 0 : Math.abs(i - activeIndex) * 0.05,
              }}
              style={{
                width: iconSize,
                height: iconSize,
                position: "absolute",
                top: `calc(50% - ${iconSize / 2}px)`,
                left: `calc(50% - ${iconSize / 2}px)`,
                zIndex: isActive ? 20 : 10,
              }}
            >
              <motion.div
                animate={{ rotate: -rotation }}
                transition={{
                  type: "spring",
                  stiffness: 150,
                  damping: 20,
                }}
                className="w-full h-full"
              >
                <motion.button
                  type="button"
                  onClick={() => handleItemClick(i)}
                  className={`w-full h-full flex items-center justify-center rounded-full cursor-pointer transition-all duration-300 ${isActive
                      ? "border-4 border-primary shadow-lg bg-primary text-white"
                      : "border-2 border-neutral-300 text-primary hover:border-primary hover:bg-primary/5"
                    }`}
                  whileHover={{
                    scale: 1.15,
                    boxShadow:
                      "0 10px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={item.title}
                >
                  <Icon className="w-1/2 h-1/2 shrink-0" aria-hidden />
                </motion.button>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* Progress dots - same as OrbitCarousel */}
      <div className="flex justify-center mt-4 sm:mt-6 gap-1.5 sm:gap-2">
        {techStacks.map((_, index) => (
          <motion.button
            key={techStacks[index].id}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-colors ${index === activeIndex ? "bg-primary" : "bg-neutral-300"
              }`}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
            aria-label={`Go to ${techStacks[index].title}`}
          />
        ))}
      </div>
    </div>
  );
}
