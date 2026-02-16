import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";

import { Link } from "react-router";
import CallbackModal from "./CallbackModal";
import { useCourses } from "@/hooks/useCourses";
import type { Course } from "@/interface/program";

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

// Typewriter Effect Component
const typewriterMessages = ["Coming Soon", "Stay Tuned", "New Program", "Launching Soon"];

const TypewriterEffect = () => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const currentMessage = typewriterMessages[currentMessageIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText.length < currentMessage.length) {
      // Typing
      timeout = setTimeout(() => {
        setDisplayText(currentMessage.slice(0, displayText.length + 1));
      }, typingSpeed);
    } else if (!isDeleting && displayText.length === currentMessage.length) {
      // Pause before deleting
      timeout = setTimeout(() => {
        setIsDeleting(true);
        setTypingSpeed(50);
      }, 2000);
    } else if (isDeleting && displayText.length > 0) {
      // Deleting
      timeout = setTimeout(() => {
        setDisplayText(currentMessage.slice(0, displayText.length - 1));
      }, typingSpeed);
    } else if (isDeleting && displayText.length === 0) {
      // Move to next message
      setIsDeleting(false);
      setTypingSpeed(100);
      setCurrentMessageIndex((prev) => (prev + 1) % typewriterMessages.length);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentMessageIndex, typingSpeed]);

  return (
    <div className="text-center px-4">
      <span className="text-text-primary text-xl sm:text-2xl md:text-3xl font-inter-display font-semibold">
        {displayText}
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
          className="inline-block ml-1"
        >
          |
        </motion.span>
      </span>
    </div>
  );
};

const CourseCardCategories = () => {
  const [showFloatingButton, setShowFloatingButton] = useState(false);
  const [isCallbackModalOpen, setIsCallbackModalOpen] = useState(false);
  const coursesSectionRef = useRef<HTMLDivElement>(null);
  const { getCourses } = useCourses();
  const allCourses = getCourses() as unknown as Course[];

  // Handle scroll to show/hide floating callback button
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const sectionElement = coursesSectionRef.current;
      if (!sectionElement) return;

      const sectionTop = sectionElement.offsetTop;
      const sectionBottom = sectionTop + sectionElement.offsetHeight;
      const viewportHeight = window.innerHeight;

      // Show floating button when scrolled past initial area and still within section
      if (
        currentScrollY > sectionTop + 150 &&
        currentScrollY < sectionBottom - viewportHeight &&
        currentScrollY > 100
      ) {
        setShowFloatingButton(true);
      } else {
        setShowFloatingButton(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div ref={coursesSectionRef} className="min-h-screen  pt-6 md:pt-10" id="courses">
      <div className="w-full">
        {/* Header Section */}
        <div className="mb-12 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 mx-auto">
          <h2 className="text-2xl md:text-6xl text-text-primary font-montserrat font-semibold leading-tight tracking-tight">
            Flagship Programs - Now Open for
            Enrollment
          </h2>
          {/* <h3 className="text-lg md:text-3xl text-text-primary max-w-7xl font-inter-display font-semibold tracking-tight">
            We're not a{" "}
            <span className="text-primary font-inter-display font-semibold">
              course factory.
            </span>
          </h3>
          <motion.p
            className="text-text-primary text-lg md:text-3xl font-inter-display font-semibold mb-6 sm:mb-8 lg:mb-10 max-w-7xl tracking-tight"
            variants={itemVariants}
          >
            We only{" "}
            <span className="text-primary font-inter-display font-semibold">
              teach
            </span>{" "}
            what we are really{" "}
            <span className="font-inter-display font-semibold italic tracking-tighter text-xl md:text-4xl text-primary">
              good
            </span>{" "}
            at.
          </motion.p> */}
        </div>

        {/* Course Cards Grid */}
        <div
          className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 mx-auto"
          id="our-programs"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 tab-portrait:grid-cols-2 tab-landscape:grid-cols-3 desktop-portrait:grid-cols-2 gap-x-8 gap-y-8 md:gap-y-24 mb-16">
            {allCourses.map((course) => (
              <motion.div
                key={course.id}
                className="group h-full flex flex-col justify-between"
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="flex flex-col justify-between h-full">
                  {/* Main Card - Clickable */}
                  <Link
                    to={`/cyber-defense-programs/${course.slug}`}
                    className="block h-full"
                  >
                    <div className="bg-white rounded-md border-l border-r border-b border-neutral-300 border-dashed overflow-hidden transition-all duration-300 h-full flex flex-col cursor-pointer">
                      {/* Course Thumbnail */}
                      <div className="relative h-40 sm:h-44 md:h-48 overflow-hidden">
                        <img
                          src={course.image}
                          alt={course.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>

                      {/* Course Content */}
                      <div className="p-4 flex flex-col">
                        <h3 className="text-text-primary text-xl  mb-3 font-inter-display font-semibold">
                          {course.title}
                        </h3>

                        {/* Tags */}
                        <div className="flex gap-2 mb-3">
                          <span
                            className="relative text-red-500 font-montserrat text-xs sm:text-sm md:text-base lg:text-base  px-2 py-1 rounded border border-neutral-200 border-dashed overflow-hidden"
                            style={{
                              background:
                                "repeating-linear-gradient(135deg, #feeeee 0px, #feeeee 0.5px, transparent 1px, transparent 2px)",
                            }}
                          >
                            <span className="relative z-10">Online</span>
                          </span>
                          <span
                            className="relative text-gray-500 font-montserrat text-xs sm:text-sm md:text-base lg:text-base px-2 py-1 rounded border border-neutral-200 border-dashed overflow-hidden"
                            style={{
                              background:
                                "repeating-linear-gradient(135deg, #e5e7eb 0px, #e5e7eb 0.5px, transparent 1px, transparent 2px)",
                            }}
                          >
                            <span className="relative z-10">{course.language}</span>
                          </span>
                        </div>

                        {/* duration  */}
                        <div className="flex items-center gap-2 mb-3">
                          <motion.svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-primary"
                          >
                            <motion.path
                              stroke="none"
                              d="M0 0h24v24H0z"
                              fill="none"
                              initial={{ pathLength: 0 }}
                              animate={{ pathLength: 1 }}
                              transition={{ duration: 0.3, delay: 0 }}
                            />
                            <motion.path
                              d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"
                              initial={{ pathLength: 0 }}
                              animate={{ pathLength: 1 }}
                              transition={{
                                duration: 1,
                                delay: 0.2,
                                repeat: Infinity,
                                repeatDelay: 2,
                              }}
                            />
                            <motion.path
                              d="M12 7v5l3 3"
                              initial={{ pathLength: 0 }}
                              animate={{ pathLength: 1 }}
                              transition={{
                                duration: 0.8,
                                delay: 1.2,
                                repeat: Infinity,
                                repeatDelay: 2,
                              }}
                            />
                          </motion.svg>
                          <span className="text-text-primary text-sm md:text-base lg:text-lg font-inter-display font-semibold">
                            Duration:{" "}
                            <span className="text-primary">
                              {course.duration}
                            </span>
                          </span>
                        </div>

                        {/* Course Highlights - Replacing Pricing */}
                        <div className="space-y-3">
                          {/* Certifications */}
                          {course.certifications && course.certifications.length > 0 && (
                            <div className="flex flex-wrap gap-2">
                              {course.certifications.slice(0, 2).map((cert, idx) => (
                                <span
                                  key={idx}
                                  className="text-xs sm:text-sm font-inter-display font-medium text-primary  px-2.5 py-1 rounded border border-neutral-300 border-dashed text-shadow-sm"
                                  style={{
                                    background:
                                      "repeating-linear-gradient(135deg, #e5e7eb 0px, #e5e7eb 0.5px, transparent 1px, transparent 2px)",
                                  }}
                                >
                                  {cert}
                                </span>
                              ))}
                            </div>
                          )}

                          {/* Key Learning Outcomes */}
                          {course.whatYouLearn && course.whatYouLearn.length > 0 && (
                            <div className="space-y-2">
                              <p className="text-xs sm:text-sm font-inter-display font-semibold text-text-primary/70 uppercase tracking-wider mb-1">
                                You'll Master
                              </p>
                              <ul className="space-y-1.5">
                                {/* Show 3 points for first card, 4 for others to match height */}
                                {course.whatYouLearn.slice(0, course.id === 1 ? 3 : 4).map((item, idx) => (
                                  <li key={idx} className="flex items-start gap-2">
                                    <span className="text-primary mt-0.5 text-xs shrink-0">•</span>
                                    <span className="text-xs sm:text-sm font-inter-display font-medium text-text-primary leading-tight">
                                      {item}
                                    </span>
                                  </li>
                                ))}
                                {course.whatYouLearn.length > (course.id === 1 ? 3 : 4) && (
                                  <li className="flex items-start gap-2">
                                    <span className="text-primary mt-0.5 text-xs shrink-0">•</span>
                                    <span className="text-xs sm:text-sm font-inter-display font-medium text-text-primary/70 italic leading-tight">
                                      and  more...
                                    </span>
                                  </li>
                                )}
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </Link>

                  {/* Separated Button */}
                  <Link to={`/cyber-defense-programs/${course.slug}`}>
                    <button className="w-full bg-text-primary hover:bg-primary text-bg  py-3 rounded-md transition-colors duration-300 mt-4 font-montserrat font-semibold text-background text-xl cursor-pointer">
                      View Details
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}

            {/* Coming Soon Cards - Show at least one on mobile, more on tablet/desktop */}
            {Array.from({ length: Math.max(0, 4 - allCourses.length) }).map(
              (_, index) => (
                <motion.div
                  key={`coming-soon-${index}`}
                  className={`h-full flex flex-col justify-between ${index === 0 ? "flex" : "hidden md:flex"
                    }`}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <div className="flex flex-col justify-between h-full">
                    {/* Main Card */}
                    <div
                      className="bg-white rounded-md overflow-hidden transition-all duration-300 h-full flex flex-col cursor-pointer border border-neutral-300 border-dashed"
                      onClick={() => setIsCallbackModalOpen(true)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          setIsCallbackModalOpen(true);
                        }
                      }}
                      style={{
                        background:
                          "repeating-linear-gradient(135deg, #f9fafb 0px, #f9fafb 1px, transparent 1px, transparent 4px), white",
                      }}
                    >
                      {/* Placeholder Image Area */}
                      <div className="relative h-40 sm:h-44 md:h-48 overflow-hidden bg-neutral-100 border-b border-neutral-300 border-dashed flex items-center justify-center">
                        <TypewriterEffect />
                      </div>

                      {/* Content */}
                      <div className="p-4 flex flex-col grow flex-1 justify-between">
                        <div className="flex-1 flex flex-col items-center justify-center">
                          <h3 className="text-text-primary text-2xl sm:text-3xl mb-4 font-inter-display font-semibold text-center">
                            Coming Soon
                          </h3>
                          <p className="text-text-primary/60 text-sm md:text-base font-inter-display text-center">
                            New program launching soon
                          </p>
                        </div>

                        {/* Placeholder Info */}
                        <div className="mt-auto w-full">
                          <div className="flex items-center justify-center mb-2">
                            <span className="text-text-primary/50 text-xl sm:text-2xl md:text-3xl lg:text-2xl font-inter-display font-medium tracking-tight">
                              New Program
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsCallbackModalOpen(true);
                      }}
                      className="w-full bg-white hover:bg-neutral-50 text-text-primary py-3 rounded-md transition-colors duration-300 mt-4 font-inter-display font-semibold text-xl cursor-pointer border border-neutral-300 border-dashed"
                      style={{
                        background:
                          "repeating-linear-gradient(135deg, #f9fafb 0px, #f9fafb 1px, transparent 1px, transparent 4px), white",
                      }}
                    >
                      Coming Soon
                    </button>
                  </div>
                </motion.div>
              )
            )}
          </div>
        </div>
      </div>

      {/* Floating Action Button - Appears when scrolling */}
      <AnimatePresence>
        {showFloatingButton && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 flex items-center gap-3 bg-white/20 backdrop-blur-sm text-bg p-1 border border-neutral-300 border-dashed rounded-md"
          >


            {/* Request Callback Button */}
            <button
              onClick={() => setIsCallbackModalOpen(true)}
              className="bg-background rounded-md hover:bg-white text-bg px-6 py-3  shadow-lg font-montserrat font-bold text-sm sm:text-base md:text-lg transition-all duration-300"
              style={{
                background:
                  "repeating-linear-gradient(135deg, #f9fafb 0px, #f9fafb 1px, transparent 1px, transparent 4px), white",
              }}
            >
              Request Callback
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Callback Modal */}
      <CallbackModal
        isOpen={isCallbackModalOpen}
        onClose={() => setIsCallbackModalOpen(false)}
      />
    </div>
  );
};

export default CourseCardCategories;
